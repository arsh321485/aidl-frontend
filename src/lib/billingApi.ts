// Plans page API (backend api/billing_views.py). The admin arrives from Slack
// (Admin Center → Upgrade plan) with ?token=<AIDL access JWT>; the page keeps
// it in sessionStorage for this tab only.

const API_BASE = (import.meta.env.VITE_API_BASE || 'http://localhost:8000').replace(/\/$/, '')
const TOKEN_KEY = 'aidl_billing_token'

export interface PlanInfo {
  key: 'trial' | 'basic' | 'enterprise'
  label: string
  price: string
  cards: number
  cadence: string
  users: number | string
  picks_topics: boolean
  all_topics: boolean
  custom_schedule: boolean
  current: boolean
  available: boolean
}

export interface Topic {
  code: string
  title: string
  covers: string
  rating: string
}

export interface PlansData {
  organization: string
  current: PlanInfo['key']
  usage: { used: number; limit: number; label: string; cards: number; cadence: string }
  plans: PlanInfo[]
  categories: Topic[]
  topics: Record<string, string[]>
  schedule: { days: number[]; hour: number }
  pending: { plan: string } | null
  test_mode: boolean
  provider: string
  payment_ready: Record<string, boolean>
  sales_email: string
  preview_cards: number
  weekdays: string[]
  can_upgrade: boolean
}

export interface PreviewCard {
  no: string
  title: string
  type: string
  category: string
}

export interface CheckoutResult {
  status: 'redirect' | 'activated' | 'pending'
  url?: string
  message?: string
}

export class BillingError extends Error {
  constructor(message: string, public status = 0, public fieldErrors: Record<string, string[]> = {}) {
    super(message)
  }
}

export function saveToken(token: string) {
  try { sessionStorage.setItem(TOKEN_KEY, token) } catch (e) {}
}

export function hasToken(): boolean {
  try { return !!sessionStorage.getItem(TOKEN_KEY) } catch (e) { return false }
}

async function call<T>(path: string, body?: object): Promise<T> {
  let token = ''
  try { token = sessionStorage.getItem(TOKEN_KEY) || '' } catch (e) {}
  let res: Response
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method: body ? 'POST' : 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: body ? JSON.stringify(body) : undefined,
    })
  } catch (e) {
    throw new BillingError('Could not reach the server. Check your connection and try again.')
  }
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const fieldErrors: Record<string, string[]> = {}
    for (const [k, v] of Object.entries(data as Record<string, unknown>)) {
      if (Array.isArray(v)) fieldErrors[k] = v.map(String)
    }
    const detail = (data as { detail?: string }).detail
    const message = res.status === 401
      ? 'This link has expired. Open “Upgrade plan” in the AIDL Admin Center in Slack again.'
      : detail || Object.values(fieldErrors)[0]?.[0] || 'Something went wrong. Please try again.'
    throw new BillingError(message, res.status, fieldErrors)
  }
  return data as T
}

export const getPlans = () => call<PlansData>('/api/billing/plans/')

export const previewCards = (plan: string, topics: string[]) =>
  call<{ cards: PreviewCard[]; total: number }>('/api/billing/preview/', { plan, topics })

export const checkout = (payload: {
  plan: string
  topics: string[]
  schedule?: { days: number[]; hour: number }
  seats?: number
}) => call<CheckoutResult>('/api/billing/checkout/', payload)
