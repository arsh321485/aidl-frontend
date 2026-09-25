// Country / state / city lists for the signup form — see
// aidl_api_integration_guide.docx, section 3 "Locations". Public endpoints,
// no token needed; the browser may cache responses for 24 hours.

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000'

export interface Country {
  code: string
  name: string
  phone_code: string
  flag: string
}

export interface State {
  code: string
  name: string
}

export interface City {
  name: string
}

async function getList<T>(path: string): Promise<T[]> {
  const res = await fetch(`${API_BASE}${path}`, { headers: { Accept: 'application/json' } })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.detail || 'Could not load locations.')
  return data.results || []
}

// GET /api/locations/countries/ — all countries, sorted by name.
export function getCountries(): Promise<Country[]> {
  return getList<Country>('/api/locations/countries/')
}

// GET /api/locations/states/?country=US
export function getStates(countryCode: string): Promise<State[]> {
  return getList<State>(`/api/locations/states/?country=${encodeURIComponent(countryCode)}`)
}

// GET /api/locations/cities/?country=US&state=CA
export function getCities(countryCode: string, stateCode: string): Promise<City[]> {
  return getList<City>(
    `/api/locations/cities/?country=${encodeURIComponent(countryCode)}&state=${encodeURIComponent(stateCode)}`
  )
}
