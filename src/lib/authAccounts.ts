export type AuthRole = 'admin' | 'user'

interface Account {
  email: string
  password: string
}

const STORAGE_KEYS: Record<AuthRole, string> = {
  admin: 'aidl_admin_accounts',
  user: 'aidl_user_accounts',
}

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

export function createAccount(role: AuthRole, email: string, password: string) {
  const accounts = loadAccounts(role)
  accounts.push({ email: email.trim(), password })
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
