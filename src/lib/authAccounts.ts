export type AuthRole = 'admin' | 'user'

interface Account {
  email: string
  password: string
  // Org branding, captured at admin sign-up — shown in the Fleet Office
  // topbar/sidebar instead of the default AIDL mark. Never set for 'user' accounts.
  orgName?: string
  orgLogo?: string
}

const STORAGE_KEYS: Record<AuthRole, string> = {
  admin: 'aidl_admin_accounts',
  user: 'aidl_user_accounts',
}

const CURRENT_ADMIN_EMAIL_KEY = 'aidl_admin_email'

// Demo credential baked into the app before real sign-up existed —
// still honored as a built-in account for both roles.
const BUILT_IN: Account = { email: 'arshmittal740@gmail.com', password: 'Arsh123#Mittal' }

function loadAccounts(role: AuthRole): Account[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS[role]) || '[]')
  } catch (e) {
    return []
  }
}

function saveAccounts(role: AuthRole, accounts: Account[]) {
  try {
    localStorage.setItem(STORAGE_KEYS[role], JSON.stringify(accounts))
  } catch (e) {}
}

export function accountExists(role: AuthRole, email: string): boolean {
  const normalized = email.trim().toLowerCase()
  if (normalized === BUILT_IN.email.toLowerCase()) return true
  return loadAccounts(role).some((a) => a.email.toLowerCase() === normalized)
}

export function createAccount(
  role: AuthRole,
  email: string,
  password: string,
  extra?: { orgName?: string; orgLogo?: string }
) {
  const accounts = loadAccounts(role)
  accounts.push({ email: email.trim(), password, ...extra })
  saveAccounts(role, accounts)
}

export function verifyCredentials(role: AuthRole, email: string, password: string): boolean {
  const normalized = email.trim().toLowerCase()
  if (normalized === BUILT_IN.email.toLowerCase() && password === BUILT_IN.password) {
    return true
  }
  return loadAccounts(role).some(
    (a) => a.email.trim().toLowerCase() === normalized && a.password === password
  )
}

// Which admin is signed in — used by the Fleet Office to load that admin's
// org branding. Set on successful admin sign-in/sign-up; there is no such
// concept for the 'user' role today.
export function setCurrentAdminEmail(email: string) {
  try { localStorage.setItem(CURRENT_ADMIN_EMAIL_KEY, email.trim()) } catch (e) {}
}

export function getCurrentAdminEmail(): string | null {
  try { return localStorage.getItem(CURRENT_ADMIN_EMAIL_KEY) } catch (e) { return null }
}

export function getAdminOrgBranding(email: string): { orgName?: string; orgLogo?: string } | null {
  const normalized = email.trim().toLowerCase()
  const account = loadAccounts('admin').find((a) => a.email.trim().toLowerCase() === normalized)
  if (!account) return null
  return { orgName: account.orgName, orgLogo: account.orgLogo }
}
