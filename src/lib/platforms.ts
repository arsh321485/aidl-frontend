// Every platform AIDL can be added to — one place for the navbar picker
// (components/PlatformPicker.vue) and the "Add to …" buttons.
//
// To add a platform (Canvas, Schoology, Brightspace, Blackboard, Google
// Workspace for Education, …):
//   1. create src/lib/<name>Auth.ts with a start<Name>Login(enrollAs) function
//      (copy moodleAuth.ts and change the endpoint path);
//   2. add its id to PlatformId and one entry to PLATFORMS below.
// It then shows up in the picker automatically. Set `soon: true` until the
// backend is ready, and remove it when the platform is live.

import { startSlackLogin } from './slackAuth'
import { startTeamsLogin, type EnrollAs } from './msTeamsAuth'
import { startGoogleChatLogin } from './googleChatAuth'
import { startMoodleLogin } from './moodleAuth'
import { startGoogleClassroomLogin } from './googleClassroomAuth'
import { startGoogleWorkspaceLogin } from './googleWorkspaceAuth'
import { notifyError, notifyLoading, notifyClose } from './notify.js'

export type PlatformId = 'slack' | 'teams' | 'gchat' | 'moodle' | 'gclassroom' | 'gworkspace'

// Chat apps have a themed preview on the landing page (.lp-pf-* classes and
// .lp-v-* text spans); learning platforms don't.
export type ChatPlatformId = 'slack' | 'teams' | 'gchat'

export type PlatformGroup = 'chat' | 'google' | 'lms'

export interface PlatformInfo {
  id: PlatformId
  name: string // full name, e.g. "Microsoft Teams"
  short: string // fits the picker button, e.g. "Teams"
  group: PlatformGroup
  soon?: boolean // shows a SOON badge in the picker
  color: string
  icon: string // inline 24×24 SVG (trusted constant, rendered with v-html)
  start: (enrollAs: EnrollAs) => Promise<void>
}

export const PLATFORM_GROUPS: { id: PlatformGroup; label: string }[] = [
  { id: 'chat', label: 'Chat apps' },
  { id: 'google', label: 'Google' },
  { id: 'lms', label: 'Learning platforms' },
]

export const PLATFORMS: PlatformInfo[] = [
  {
    id: 'slack',
    name: 'Slack',
    short: 'Slack',
    group: 'chat',
    color: '#4a154b',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#36C5F0" d="M9.5 15.2a2.4 2.4 0 1 1-2.4-2.4h2.4v2.4zm1.2 0a2.4 2.4 0 0 1 4.8 0v6a2.4 2.4 0 0 1-4.8 0v-6z"/><path fill="#2EB67D" d="M13.1 9.5a2.4 2.4 0 1 1 2.4-2.4v2.4h-2.4zm0 1.2a2.4 2.4 0 0 1 0 4.8h-6a2.4 2.4 0 0 1 0-4.8h6z"/><path fill="#ECB22E" d="M14.5 13.1a2.4 2.4 0 1 1 2.4 2.4h-2.4v-2.4zm-1.2 0a2.4 2.4 0 0 1-4.8 0v-6a2.4 2.4 0 0 1 4.8 0v6z"/><path fill="#E01E5A" d="M10.9 14.5a2.4 2.4 0 1 1-2.4 2.4v-2.4h2.4zm0-1.2a2.4 2.4 0 0 1 0-4.8h6a2.4 2.4 0 0 1 0 4.8h-6z"/></svg>',
    start: startSlackLogin,
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    short: 'Teams',
    group: 'chat',
    color: '#5b5fc7',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#5B5FC7"/><path fill="#fff" d="M6.5 7h11v2.6h-4.1V18h-2.8V9.6H6.5z"/></svg>',
    start: startTeamsLogin,
  },
  {
    id: 'gchat',
    name: 'Google Chat',
    short: 'Google Chat',
    group: 'chat',
    color: '#00ac47',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00AC47" d="M4 2.5h16A2.5 2.5 0 0 1 22.5 5v11a2.5 2.5 0 0 1-2.5 2.5H9.5L4.5 22v-3.5H4A2.5 2.5 0 0 1 1.5 16V5A2.5 2.5 0 0 1 4 2.5z"/><rect x="6.5" y="7.5" width="11" height="2.2" rx="1.1" fill="#fff"/><rect x="6.5" y="11.5" width="7" height="2.2" rx="1.1" fill="#fff"/></svg>',
    start: startGoogleChatLogin,
  },
  {
    id: 'moodle',
    name: 'Moodle',
    short: 'Moodle',
    group: 'lms',
    soon: true,
    color: '#f98012',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#F98012"/><path fill="#fff" d="M5 18v-6.2C5 9.7 6.3 8.6 8 8.6c1 0 1.8.4 2.3 1.1.6-.7 1.4-1.1 2.4-1.1 1.8 0 3 1.1 3 3.2V18h-2.6v-5.8c0-.8-.4-1.2-1-1.2s-1 .4-1 1.2V18H8.5v-5.8c0-.8-.4-1.2-1-1.2s-1 .4-1 1.2V18z"/><circle cx="18.6" cy="16.6" r="1.4" fill="#fff"/></svg>',
    start: startMoodleLogin,
  },
  {
    id: 'gclassroom',
    name: 'Google Classroom',
    short: 'Classroom',
    group: 'lms',
    color: '#1e8e3e',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#1E8E3E"/><rect x="4" y="5" width="16" height="12" rx="1.2" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="12" cy="10" r="1.8" fill="#FBBC04"/><path fill="#FBBC04" d="M8.8 15.2c.4-1.5 1.7-2.4 3.2-2.4s2.8.9 3.2 2.4z"/><rect x="13.5" y="18.4" width="5" height="1.6" rx=".8" fill="#fff"/></svg>',
    start: startGoogleClassroomLogin,
  },
  {
    // Companies on Google Workspace (backend: integrations/google_workspace).
    id: 'gworkspace',
    name: 'Google Workspace',
    short: 'Google Workspace',
    group: 'google',
    color: '#4285f4',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z"/><path fill="#FBBC04" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z"/><path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.4 3-4.1 5.6-4.1z"/></svg>',
    start: startGoogleWorkspaceLogin,
  },
]

const BY_ID = new Map(PLATFORMS.map((p) => [p.id, p]))

export function getPlatform(id: PlatformId): PlatformInfo {
  return BY_ID.get(id) ?? PLATFORMS[0]!
}

export function isPlatformId(v: unknown): v is PlatformId {
  return typeof v === 'string' && BY_ID.has(v as PlatformId)
}

export function isChatPlatform(id: PlatformId): id is ChatPlatformId {
  return getPlatform(id).group === 'chat'
}

// "Add to …" — organization sign-in for any platform, with the loading /
// error popups. The backend redirects back to /auth/callback.
export async function addToPlatform(id: PlatformId): Promise<void> {
  const { name, start } = getPlatform(id)
  notifyLoading(`Opening ${name}…`, 'One moment')
  try {
    await start('organization')
  } catch (e) {
    notifyClose()
    notifyError(e instanceof Error ? e.message : `Could not start ${name} sign-in.`, `${name} Sign-In Failed`)
  }
}

// The navbar picker's choice, shared by /home and the other site pages.
const TARGET_KEY = 'aidl-v2-target'

export function loadSavedPlatform(fallback: PlatformId): PlatformId {
  try {
    const saved = localStorage.getItem(TARGET_KEY)
    if (isPlatformId(saved)) return saved
  } catch (e) {}
  return fallback
}

export function savePlatform(id: PlatformId): void {
  try { localStorage.setItem(TARGET_KEY, id) } catch (e) {}
}
