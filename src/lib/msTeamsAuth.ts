// Microsoft Teams / Microsoft OAuth integration — see
// AIDL_MS_TEAMS_API_RESPONSE.docx (repo root) for the backend contract this
// file implements.

export type EnrollAs = 'individual' | 'organization'

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000'

const STORAGE_KEYS = {
  access: 'aidl_ms_access_token',
  refresh: 'aidl_ms_refresh_token',
  msGraph: 'aidl_ms_graph_token',
  profile: 'aidl_ms_profile',
}

interface TeamsLoginResponse {
  mode: 'microsoft' | 'demo'
  auth_url: string
  state: string
  enroll_as: EnrollAs
  message?: string
}

// Call when the user clicks TEAMS. Redirects the browser to Microsoft's
// sign-in page; the backend callback sends them back with tokens in the URL
// (see consumeTeamsAuthCallback).
export async function startTeamsLogin(enrollAs: EnrollAs): Promise<void> {
  console.log('[TeamsAuth] startTeamsLogin: API_BASE =', API_BASE, 'enrollAs =', enrollAs)
  const res = await fetch(`${API_BASE}/api/auth/teams/login/?enroll_as=${enrollAs}`, {
    headers: { Accept: 'application/json' },
  })
  console.log('[TeamsAuth] startTeamsLogin: login/ response status =', res.status)
  const data: TeamsLoginResponse = await res.json()
  console.log('[TeamsAuth] startTeamsLogin: login/ response body =', data)
  if (!data.auth_url) {
    console.error('[TeamsAuth] startTeamsLogin: no auth_url in response, aborting redirect')
    throw new Error(data.message || 'Microsoft Teams sign-in is unavailable right now.')
  }
  console.log('[TeamsAuth] startTeamsLogin: redirecting to auth_url =', data.auth_url)
  window.location.href = data.auth_url
}

export type LandedOn = 'channel' | 'chat'

export interface TeamsProfile {
  email: string
  fullName: string
  enrollAs: EnrollAs
  teamsUrl: string
  teamsChannelUrl: string
  landedOn: LandedOn
}

export interface TeamsAuthResult extends TeamsProfile {
  accessToken: string
  refreshToken: string
  openTeams: boolean
}

// Call on app load. If the URL carries the tokens the backend callback
// appends (access_token, refresh_token, teams_url, ...), stores them,
// opens Teams when asked to, and strips the tokens back out of the address
// bar. Returns null when there's nothing to consume.
export function consumeTeamsAuthCallback(): TeamsAuthResult | null {
  console.log('[TeamsAuth] consumeTeamsAuthCallback: raw search =', window.location.search)
  const params = new URLSearchParams(window.location.search)
  const accessToken = params.get('access_token')
  console.log('[TeamsAuth] consumeTeamsAuthCallback: access_token present? =', !!accessToken)
  if (!accessToken) {
    console.warn('[TeamsAuth] consumeTeamsAuthCallback: no access_token param found, returning null. error param =', params.get('error'), 'error_description =', params.get('error_description'))
    return null
  }

  const refreshToken = params.get('refresh_token') || ''
  const msAccessToken = params.get('ms_access_token') || ''
  const profile: TeamsProfile = {
    email: params.get('email') || '',
    fullName: params.get('full_name') || '',
    enrollAs: (params.get('enroll_as') as EnrollAs) || 'organization',
    teamsUrl: params.get('teams_url') || '',
    teamsChannelUrl: params.get('teams_channel_url') || '',
    landedOn: (params.get('landed_on') as LandedOn) || 'chat',
  }
  const openTeams = params.get('open_teams') === '1'
  console.log('[TeamsAuth] consumeTeamsAuthCallback: parsed profile =', profile, 'openTeams =', openTeams)

  try {
    localStorage.setItem(STORAGE_KEYS.access, accessToken)
    localStorage.setItem(STORAGE_KEYS.refresh, refreshToken)
    if (msAccessToken) localStorage.setItem(STORAGE_KEYS.msGraph, msAccessToken)
    localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile))
    console.log('[TeamsAuth] consumeTeamsAuthCallback: localStorage writes succeeded')
  } catch (e) {
    console.error('[TeamsAuth] consumeTeamsAuthCallback: localStorage write failed', e)
  }

  // Tokens must not linger in browser history / shareable URLs.
  window.history.replaceState({}, document.title, window.location.pathname + window.location.hash)
  console.log('[TeamsAuth] consumeTeamsAuthCallback: URL scrubbed of tokens')

  // Deliberately does NOT call window.open() here. This runs inside
  // onMounted after an automatic top-level redirect from Microsoft — there's
  // no user gesture attached to that, so Chrome (and most browsers) silently
  // block a popup opened at this point almost every time, with no reliable
  // way to detect the block synchronously. TeamsCallbackView opens Teams
  // from a real button click instead, which browsers never block.
  return { accessToken, refreshToken, openTeams, ...profile }
}

export function getStoredAccessToken(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEYS.access)
  } catch (e) {
    return null
  }
}

export function getStoredTeamsProfile(): TeamsProfile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.profile)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

// GET /api/auth/me/ — hydrates the signed-in user's AIDL profile.
export async function getCurrentTeamsUser(): Promise<Record<string, unknown> | null> {
  const token = getStoredAccessToken()
  console.log('[TeamsAuth] getCurrentTeamsUser: stored token present? =', !!token)
  if (!token) return null
  const res = await fetch(`${API_BASE}/api/auth/me/`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
  })
  console.log('[TeamsAuth] getCurrentTeamsUser: /api/auth/me/ status =', res.status)
  if (!res.ok) {
    console.warn('[TeamsAuth] getCurrentTeamsUser: request failed, returning null')
    return null
  }
  const data = await res.json()
  console.log('[TeamsAuth] getCurrentTeamsUser: profile =', data)
  return data
}

// GET /api/auth/teams/launch/ — reopens Teams for the already-signed-in user.
export async function launchTeams(): Promise<void> {
  const token = getStoredAccessToken()
  if (!token) throw new Error('Sign in with Microsoft Teams first.')
  const res = await fetch(`${API_BASE}/api/auth/teams/launch/`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
  })
  if (!res.ok) throw new Error('Could not reach the Microsoft Teams launch endpoint.')
  const data = await res.json()
  if (data.teams_url) window.open(data.teams_url, '_blank')
}

export function clearTeamsSession() {
  try {
    localStorage.removeItem(STORAGE_KEYS.access)
    localStorage.removeItem(STORAGE_KEYS.refresh)
    localStorage.removeItem(STORAGE_KEYS.msGraph)
    localStorage.removeItem(STORAGE_KEYS.profile)
  } catch (e) {}
}
