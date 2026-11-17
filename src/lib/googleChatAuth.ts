// Sign in / sign up with Google Chat — same shape as slackAuth.ts.
// Backend (google_chat/ in aidl-backend):
//   GET /api/google-chat/auth/login/?enroll_as=individual|organization[&policy=<json>]
//     200 { auth_url, state, enroll_as, mode: "google_chat" }
//     400 { policy: "Answer all 8 policy questions first." }
//     503 { error: "google_chat_not_configured", message }
//   Google → backend callback → /auth/callback?mode=google_chat&... (tokens, or
//   error / error_description). TeamsCallbackView handles that page.
// individual = sign-in only; organization = Google Workspace account, creates
// or reuses the AIDL space and posts the Admin Center card.

import type { EnrollAs } from './msTeamsAuth'
import type { PolicyAnswers } from './orgPolicyQuestions'

const API_BASE = ((import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000').replace(/\/$/, '')
const GOOGLE_CHAT_LOGIN_PATH = '/api/google-chat/auth/login/'

// Redirects the browser to Google's sign-in page, or throws an Error with a
// message to show. policyAnswers only for organization, when the 8 answers exist.
export async function startGoogleChatLogin(enrollAs: EnrollAs, policyAnswers?: PolicyAnswers): Promise<void> {
  const query = new URLSearchParams({ enroll_as: enrollAs })
  if (enrollAs === 'organization' && policyAnswers) query.set('policy', JSON.stringify(policyAnswers))

  let res: Response
  try {
    res = await fetch(`${API_BASE}${GOOGLE_CHAT_LOGIN_PATH}?${query}`, {
      headers: { Accept: 'application/json' },
    })
  } catch (e) {
    throw new Error('Could not reach the server. Check your connection and try again.')
  }
  const data: { auth_url?: string; message?: string; policy?: string; error?: string } =
    await res.json().catch(() => ({}))
  if (res.status === 400 && data.policy) throw new Error(data.policy)
  if (res.status === 503 || data.error === 'google_chat_not_configured') {
    throw new Error('Google sign-in is unavailable right now.')
  }
  if (!res.ok || !data.auth_url) {
    throw new Error(data.message || 'Google Chat sign-in is unavailable right now.')
  }
  window.location.href = data.auth_url
}

// /auth/callback?mode=google_chat&error=... → what to show. error_description
// from the backend wins when present (e.g. the two already_set_up sentences).
const ERROR_MESSAGES: Record<string, string> = {
  access_denied: 'Google sign-in was cancelled.',
  code_missing: 'Google did not return a code. Please try again.',
  missing_state: 'Sign-in session expired. Start again from the login button.',
  state_not_found: 'Sign-in session expired. Start again from the login button.',
  state_expired: 'Sign-in session expired. Start again from the login button.',
  google_chat_not_configured: 'Google sign-in is unavailable.',
  token_exchange_failed: 'Google sign-in failed. Please try again.',
  unable_to_fetch_profile: 'Could not read your Google profile.',
  workspace_required: 'Organization setup needs a Google Workspace account, not a personal Gmail.',
  account_disabled: 'This AIDL account is disabled.',
}

export function googleChatErrorMessage(error: string | null, description: string | null): string {
  if (description) return description
  return (error && ERROR_MESSAGES[error]) || 'Google Chat sign-in failed. Please try again.'
}
