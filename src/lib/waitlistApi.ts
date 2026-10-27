// Individual (not company) waitlist — the "Not a company? Join the waitlist"
// box on the landing page. Public endpoint, no token needed.
// NOTE: POST /api/waitlist/ still has to be added on the backend.

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000'

// POST /api/waitlist/ — {email, source} → {ok: true}
export async function joinWaitlist(email: string, source = 'landing'): Promise<void> {
  let res: Response
  try {
    res = await fetch(`${API_BASE}/api/waitlist/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email, source }),
    })
  } catch {
    throw new Error('Could not reach the server. Please try again in a moment.')
  }
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.detail || 'Could not join the waitlist. Please try again later.')
}
