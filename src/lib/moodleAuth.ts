// "Add to Moodle" / MOODLE sign-in button.
//
// Moodle uses LTI 1.3: sign-in always starts *inside* Moodle (a teacher or
// learner clicks the AIDL activity in their course), never from this website.
// So the button can't open a login. It sends the visitor to the backend's
// setup guide for Moodle site admins (integrations/moodle, /api/moodle/connect/),
// which lists the exact tool URLs to paste into Moodle.
//
// A plain page navigation, not fetch(): no CORS, and it works even while the
// backend is waking up.

import type { EnrollAs } from './msTeamsAuth'

const API_BASE = ((import.meta.env.VITE_API_BASE as string | undefined) || 'http://localhost:8000').replace(/\/$/, '')
const MOODLE_CONNECT_PATH = '/api/moodle/connect/'

// Same signature as the other platforms' start*Login (platforms.ts).
export async function startMoodleLogin(_enrollAs: EnrollAs): Promise<void> {
  window.location.href = `${API_BASE}${MOODLE_CONNECT_PATH}`
}
