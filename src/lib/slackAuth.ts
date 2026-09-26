// Sign in with Slack — backend endpoints /api/auth/slack/login/ and
// /api/auth/slack/callback/. The callback redirects to /auth/callback with
// the same token query params as the Teams flow (plus mode=slack), so
// consumeTeamsAuthCallback() in msTeamsAuth.ts picks the tokens up.

import type { EnrollAs } from './msTeamsAuth'
import type { PolicyAnswers } from './orgPolicyQuestions'

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000'

// Call when the user clicks SLACK. Redirects the browser to Slack's
// sign-in page. The admin isn't logged in yet while answering the policy
// questions, so the answers travel with the login (guide 4.7).
export async function startSlackLogin(enrollAs: EnrollAs, policyAnswers?: PolicyAnswers): Promise<void> {
  let data: { auth_url?: string; message?: string; policy?: string } = {}
  const query = new URLSearchParams({ enroll_as: enrollAs })
  if (policyAnswers) query.set('policy', JSON.stringify(policyAnswers))
  try {
    const res = await fetch(`${API_BASE}/api/auth/slack/login/?${query}`, {
      headers: { Accept: 'application/json' },
    })
    data = await res.json().catch(() => ({}))
  } catch (e) {
    throw new Error('Could not reach the server. Check your connection and try again.')
  }
  if (!data.auth_url) {
    throw new Error(data.message || data.policy || 'Slack sign-in is unavailable right now.')
  }
  window.location.href = data.auth_url
}
