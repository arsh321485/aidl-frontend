// Email/password auth against the AIDL backend — see src/prompt.txt for the
// API contract (POST /api/auth/signup/ etc.).

import type { EnrollAs } from './msTeamsAuth'

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000'

const STORAGE_KEYS = {
  access: 'access_token',
  refresh: 'refresh_token',
  user: 'aidl_api_user',
}

export interface SignupPayload {
  enroll_as: EnrollAs
  first_name: string
  last_name: string
  email: string
  password: string
  confirm_password: string
  mobile_number: string
  country: string
  state: string
  city: string
  license_class: string
  organization_name: string
}

export interface ApiUser {
  id: string
  email: string
  first_name: string
  last_name: string
  full_name: string
  enroll_as: EnrollAs
  role: string
  organization_id: string
  organization_name: string
  license_class: string
  [key: string]: unknown
}

export interface AuthResponse {
  message: string
  access_token: string
  refresh_token: string
  token_type: string
  user: ApiUser
}

// DRF field errors, e.g. { email: ["A user with this email already exists."] }.
export type FieldErrors = Record<string, string[]>

export class ApiError extends Error {
  constructor(message: string, public fieldErrors: FieldErrors = {}) {
    super(message)
  }
}

function saveAuth(data: AuthResponse) {
  try {
    localStorage.setItem(STORAGE_KEYS.access, data.access_token)
    localStorage.setItem(STORAGE_KEYS.refresh, data.refresh_token)
    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(data.user))
  } catch (e) {}
}

async function postAuth(path: string, payload: object, fallback: string): Promise<AuthResponse> {
  let res: Response
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch (e) {
    throw new ApiError('Could not reach the server. Check your connection and try again.')
  }

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const fieldErrors: FieldErrors = {}
    for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
      if (Array.isArray(value)) fieldErrors[key] = value.map(String)
      else if (typeof value === 'string') fieldErrors[key] = [value]
    }
    const first = Object.values(fieldErrors)[0]?.[0]
    throw new ApiError(first || fallback, fieldErrors)
  }

  saveAuth(data as AuthResponse)
  return data as AuthResponse
}

// POST /api/auth/signup/ — on success stores the tokens + user and returns
// the response; on a 400 throws ApiError carrying the per-field messages.
export function signup(payload: SignupPayload): Promise<AuthResponse> {
  return postAuth('/api/auth/signup/', payload, 'Sign up failed. Please try again.')
}

// POST /api/auth/signin/ — same token/error handling as signup().
export function signin(payload: { enroll_as: EnrollAs; email: string; password: string }): Promise<AuthResponse> {
  return postAuth('/api/auth/signin/', payload, 'Sign in failed. Please try again.')
}

export function getAccessToken(): string | null {
  try { return localStorage.getItem(STORAGE_KEYS.access) } catch (e) { return null }
}

export function clearAuth() {
  try {
    localStorage.removeItem(STORAGE_KEYS.access)
    localStorage.removeItem(STORAGE_KEYS.refresh)
    localStorage.removeItem(STORAGE_KEYS.user)
  } catch (e) {}
}
