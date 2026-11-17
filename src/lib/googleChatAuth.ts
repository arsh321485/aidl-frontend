// Sign in / sign up with Google Chat — same shape as slackAuth.ts.
// Backend (in progress): GET /api/auth/google-chat/login/?enroll_as=...
// must answer JSON { auth_url } and, after Google's sign-in, redirect to
// /auth/callback with the same token query params as Slack/Teams so
// consumeTeamsAuthCallback() can pick them up.
// If the backend uses a different path, change GOOGLE_CHAT_LOGIN_PATH only.

import type { EnrollAs } from './msTeamsAuth'

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000'
const GOOGLE_CHAT_LOGIN_PATH = '/api/auth/google-chat/login/'

// Call when the user clicks GOOGLE CHAT. Redirects the browser to Google's
// sign-in page, or throws an Error with a message to show.
export async function startGoogleChatLogin(enrollAs: EnrollAs): Promise<void> {
  let res: Response
  try {
    res = await fetch(`${API_BASE}${GOOGLE_CHAT_LOGIN_PATH}?enroll_as=${enrollAs}`, {
      headers: { Accept: 'application/json' },
    })
  } catch (e) {
    throw new Error('Could not reach the server. Check your connection and try again.')
  }
  if (res.status === 404) {
    throw new Error('Google Chat sign-in is coming soon.')
  }
  const data: { auth_url?: string; message?: string } = await res.json().catch(() => ({}))
  if (!data.auth_url) {
    throw new Error(data.message || 'Google Chat sign-in is unavailable right now.')
  }
  window.location.href = data.auth_url
}
