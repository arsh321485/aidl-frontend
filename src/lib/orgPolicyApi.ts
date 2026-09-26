// GET / POST /api/org/policy-answers/ — the organization's 8 policy answers,
// saved against the organization (AIDL Slack guide 4.7).

import type { PolicyAnswers } from './orgPolicyQuestions'

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000'

export async function sendPolicyAnswers(token: string, answers: PolicyAnswers): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/api/org/policy-answers/`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers }),
    })
    return res.ok
  } catch (e) {
    return false
  }
}

export async function fetchPolicyAnswers(token: string): Promise<PolicyAnswers | null> {
  try {
    const res = await fetch(`${API_BASE}/api/org/policy-answers/`, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.answers || null
  } catch (e) {
    return null
  }
}
