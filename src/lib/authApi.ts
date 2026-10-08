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
  mobile_number?: string // optional — the sign-up form no longer asks for it
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

// Sign-up and sign-in answer with this first: the user then types the
// 6-digit code we emailed (dev_code only when the backend runs locally
// without an email account).
export interface OtpChallenge {
  otp_required: true
  otp_token: string
  email: string
  message: string
  dev_code?: string
}

export function isOtpChallenge(data: unknown): data is OtpChallenge {
  return !!data && typeof data === 'object' && (data as OtpChallenge).otp_required === true
}

async function postAuth<T = AuthResponse>(path: string, payload: object, fallback: string): Promise<T> {
  let res: Response
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method: payload ? 'POST' : 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: payload ? JSON.stringify(payload) : undefined,
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

  if ((data as AuthResponse).access_token) saveAuth(data as AuthResponse)
  return data as T
}

// POST /api/auth/signup/ — returns an OtpChallenge (code emailed; nothing is
// stored yet) or, when the backend has codes switched off, the tokens. A 400
// throws ApiError carrying the per-field messages.
export function signup(payload: SignupPayload): Promise<AuthResponse | OtpChallenge> {
  return postAuth('/api/auth/signup/', payload, 'Sign up failed. Please try again.')
}

// POST /api/auth/signup/verify/ — the emailed code; stores the tokens.
export function verifySignup(otpToken: string, code: string): Promise<AuthResponse> {
  return postAuth('/api/auth/signup/verify/', { otp_token: otpToken, code }, 'That code did not work.')
}

// POST /api/auth/signin/ — needs the picture code (getCaptcha); returns an
// OtpChallenge like signup().
export function signin(payload: {
  enroll_as: EnrollAs
  email: string
  password: string
  captcha_token?: string
  captcha_answer?: string
}): Promise<AuthResponse | OtpChallenge> {
  return postAuth('/api/auth/signin/', payload, 'Sign in failed. Please try again.')
}

export function verifySignin(otpToken: string, code: string): Promise<AuthResponse> {
  return postAuth('/api/auth/signin/verify/', { otp_token: otpToken, code }, 'That code did not work.')
}

export function resendCode(otpToken: string): Promise<OtpChallenge> {
  return postAuth('/api/auth/otp/resend/', { otp_token: otpToken }, 'Could not send a new code.')
}

// GET /api/auth/captcha/ — a fresh picture code for the sign-in form.
export function getCaptcha(): Promise<{ captcha_token: string; image: string }> {
  return postAuth('/api/auth/captcha/', null as unknown as object, 'Could not load the picture code.')
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
