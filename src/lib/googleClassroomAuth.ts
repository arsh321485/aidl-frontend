// "Add to Google Classroom" — sign up / sign in with a Google account
// (Google Workspace for Education, or a personal Gmail account).
//
// Backend: integrations/google_classroom.
//   GET /api/google-classroom/login/?enroll_as=...  → { auth_url }
//   Google → /api/google-classroom/callback/ → /auth/callback with the same
//   token params as Slack / Teams (mode=google_classroom), so
//   consumeTeamsAuthCallback() picks them up.
// One button does both: a new Google account is signed up, a known one signs in.

import type { EnrollAs } from './msTeamsAuth'

const API_BASE = ((import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000').replace(/\/$/, '')
const LOGIN_PATH = '/api/google-classroom/login/'

// The Admin Center link the backend sends admins back with (admin_center_url):
// only ever our own backend's Google Classroom pages, never another site.
export function isAdminCenterUrl(url: string): boolean {
  return url.startsWith(`${API_BASE}/api/google-classroom/`)
}

// Redirects the browser to Google's sign-in page, or throws an Error with a message to show.
export async function startGoogleClassroomLogin(enrollAs: EnrollAs): Promise<void> {
  let res: Response
  try {
    res = await fetch(`${API_BASE}${LOGIN_PATH}?enroll_as=${enrollAs}`, {
      headers: { Accept: 'application/json' },
    })
  } catch (e) {
    throw new Error('Could not reach the server. Check your connection and try again.')
  }
  if (res.status === 404) {
    throw new Error('Google Classroom sign-in is coming soon.')
  }
  const data: { auth_url?: string; message?: string } = await res.json().catch(() => ({}))
  if (!data.auth_url) {
    throw new Error(data.message || 'Google Classroom sign-in is unavailable right now.')
  }
  window.location.href = data.auth_url
}
