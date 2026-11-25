// "AI policy, built for you" — the "Build my AI policy" form on the companies
// page (design v5). Public endpoint, no token needed.
// NOTE: POST /api/policy-request/ still has to be added on the backend.

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000'

export interface PolicyRequest {
  name: string
  email: string
  role: string
  company: string
  country: string
  employees: string
  needs: string[] // e.g. ['A new AI policy', 'AIDL licences for our employees']
}

// POST /api/policy-request/ — PolicyRequest → {ok: true}
export async function sendPolicyRequest(req: PolicyRequest): Promise<void> {
  let res: Response
  try {
    res = await fetch(`${API_BASE}/api/policy-request/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...req, source: 'companies-page' }),
    })
  } catch {
    throw new Error('Could not reach the server. Please try again in a moment.')
  }
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.detail || 'Could not send your request. Please try again later.')
}
