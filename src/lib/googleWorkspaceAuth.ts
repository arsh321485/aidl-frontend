// "Sign up with Google Workspace" — a company signs up / signs in with its
// work Google account (personal Gmail accounts are refused by the backend).
//
// Backend: integrations/google_workspace.
//   GET /api/google-workspace/login/  → { auth_url }
//   Google → /api/google-workspace/callback/ → the backend's AIDL page for
//   Google Workspace (/api/google-workspace/): admins get the setup page and an
//   invite link for their team, learners their cards. It doesn't come back to
//   /auth/callback, so the shared callback page needs no Google Workspace code.
// The first person of a company's Google domain becomes its AIDL admin.

import type { EnrollAs } from './msTeamsAuth'

const API_BASE = ((import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000').replace(/\/$/, '')
const LOGIN_PATH = '/api/google-workspace/login/'

// Redirects the browser to Google's sign-in page, or throws an Error with a message to show.
// Always an organization sign-up: AIDL for Google Workspace is for companies.
export async function startGoogleWorkspaceLogin(_enrollAs: EnrollAs): Promise<void> {
  let res: Response
  try {
    res = await fetch(`${API_BASE}${LOGIN_PATH}`, { headers: { Accept: 'application/json' } })
  } catch (e) {
    throw new Error('Could not reach the server. Check your connection and try again.')
  }
  if (res.status === 404) {
    throw new Error('Google Workspace sign-up is coming soon.')
  }
  const data: { auth_url?: string; message?: string } = await res.json().catch(() => ({}))
  if (!data.auth_url) {
    throw new Error(data.message || 'Google Workspace sign-up is unavailable right now.')
  }
  window.location.href = data.auth_url
}
