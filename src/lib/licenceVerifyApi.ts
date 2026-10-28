// Public licence check for the "Verify a licence" section on the landing page.
// Expects GET /api/licenses/verify/?lic=<number> on the backend, answering JSON:
//   { found: true, name, org, issued, expires, status: 'active' | 'expired' | 'suspended' }
//   { found: false }
// Anything else (no such endpoint yet, server down) is reported as "can't check
// right now", never as "not found", so a real licence is never called fake.

const API_BASE = (import.meta.env.VITE_API_BASE || 'http://localhost:8000').replace(/\/$/, '')

export type LicenceStatus = 'active' | 'expired' | 'suspended'

export interface VerifiedLicence {
  name: string
  org: string
  issued: string
  expires: string
  status: LicenceStatus
}

export type VerifyResult =
  | { kind: 'found'; number: string; licence: VerifiedLicence }
  | { kind: 'not-found'; number: string }
  | { kind: 'unavailable'; number: string }

export const LICENCE_NUMBER = /^AIDL-L-\d{4}-\d{4}$/

export async function verifyLicence(number: string): Promise<VerifyResult> {
  try {
    const res = await fetch(`${API_BASE}/api/licenses/verify/?lic=${encodeURIComponent(number)}`, {
      headers: { Accept: 'application/json' },
    })
    if (!(res.headers.get('content-type') || '').includes('application/json')) return { kind: 'unavailable', number }
    const data = await res.json()
    if (data && data.found === true) return { kind: 'found', number, licence: data as VerifiedLicence }
    if (data && data.found === false) return { kind: 'not-found', number }
  } catch {
    // network error: fall through
  }
  return { kind: 'unavailable', number }
}
