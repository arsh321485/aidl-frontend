<template>
  <div class="teams-callback">
    <img :src="aidlLogo" alt="AIDL" class="teams-callback__logo" />
    <AvatarPickerModal
      v-if="pickAvatar"
      confirm-label="Confirm & continue →"
      @confirm="onAvatarPicked"
      @close="continueToWorkspace"
    />
    <template v-if="slackUrl">
      <h1 class="teams-callback__title">You're signed in with Slack</h1>
      <p class="teams-callback__text">Your AIDL Admin Center is ready in Slack.</p>
      <button type="button" class="teams-callback__btn" @click="openSlack">Open Slack</button>
      <button type="button" class="teams-callback__link" @click="router.replace('/home')">Continue to AIDL</button>
    </template>
    <template v-else>
      <div class="teams-callback__spinner" aria-hidden="true"></div>
      <p class="teams-callback__text">{{ statusText }}</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import aidlLogo from '../assets/images/aidl-logo.png'
import { notifyError } from '../lib/notify.js'
import { consumeTeamsAuthCallback, getCurrentTeamsUser } from '../lib/msTeamsAuth'
import AvatarPickerModal from '../components/AvatarPickerModal.vue'
import type { AvatarConfig } from '../lib/avatar-parts'

const router = useRouter()
// Slack sign-in lands here too (backend adds mode=slack); it carries the
// same token params, minus the Teams-specific ones.
const isSlack = new URLSearchParams(window.location.search).get('mode') === 'slack'
const providerName = isSlack ? 'Slack' : 'Microsoft Teams'
const statusText = ref(`Finishing ${providerName} sign-in…`)
// Set when the browser blocked the automatic new tab — the page then shows
// an "Open Slack" button, since a tab opened from a click is never blocked.
const slackUrl = ref('')

// Returns false when the popup blocker stopped the tab. ('noopener' is not
// passed to window.open because it makes window.open always return null.)
function openInNewTab(url: string): boolean {
  const tab = window.open(url, '_blank')
  if (!tab) return false
  tab.opener = null
  return true
}

// AI-C-005: organization admins get an avatar too. It's picked here, after
// Slack / Teams sign-in, and saved like an individual's (aidl-avatars, keyed
// by email). Opening the workspace from that click also means the browser
// never blocks the new tab.
const pickAvatar = ref(false)
let avatarEmail = ''
let workspace: { kind: 'slack' | 'teams'; url: string } | null = null

function hasAvatar(email: string): boolean {
  try {
    return !!JSON.parse(localStorage.getItem('aidl-avatars') || '{}')[email.trim().toLowerCase()]
  } catch (e) {
    return false
  }
}

function onAvatarPicked(avatar: AvatarConfig) {
  try {
    const all = JSON.parse(localStorage.getItem('aidl-avatars') || '{}')
    all[avatarEmail.trim().toLowerCase()] = avatar
    localStorage.setItem('aidl-avatars', JSON.stringify(all))
  } catch (e) {}
  continueToWorkspace()
}

function continueToWorkspace() {
  pickAvatar.value = false
  if (workspace && !openInNewTab(workspace.url)) {
    if (workspace.kind === 'slack') {
      slackUrl.value = workspace.url
      return
    }
  }
  router.replace('/home')
}

function openSlack() {
  openInNewTab(slackUrl.value)
  router.replace('/home')
}

// Backend's AUTH_SUCCESS_REDIRECT lands here after /api/auth/teams/callback/
// does the code exchange (see AIDL_MS_TEAMS_API_RESPONSE.docx). This page
// never talks to that callback endpoint itself — it only reads the tokens
// the backend already appended to this URL.
onMounted(async () => {
  console.log('[TeamsCallback] mounted. pathname =', window.location.pathname)
  const params = new URLSearchParams(window.location.search)
  const oauthError = params.get('error')
  console.log('[TeamsCallback] oauthError param =', oauthError)

  const result = consumeTeamsAuthCallback()
  console.log('[TeamsCallback] consumeTeamsAuthCallback result =', result ? { ...result, accessToken: '[present]', refreshToken: '[present]' } : null)

  if (!result) {
    console.warn('[TeamsCallback] no result — treating as sign-in failure, redirecting to /')
    statusText.value = `${providerName} sign-in failed.`
    notifyError(
      params.get('error_description') || (oauthError ? `Error: ${oauthError}` : 'No tokens were returned by the sign-in redirect.'),
      `${isSlack ? 'Slack' : 'Teams'} Sign-In Failed`
    )
    window.history.replaceState({}, document.title, window.location.pathname)
    router.replace('/')
    return
  }

  // AIDL identity used by the router guard (see router/index.ts) — same flag
  // license/password sign-in sets, so a Teams user is treated as signed in.
  try {
    localStorage.setItem('aidl_user_auth', 'true')
    console.log('[TeamsCallback] aidl_user_auth set to true')
  } catch (e) {
    console.error('[TeamsCallback] failed to set aidl_user_auth', e)
  }

  // Best-effort profile hydration; don't block entry into the app if it fails.
  try {
    console.log('[TeamsCallback] calling getCurrentTeamsUser()')
    await getCurrentTeamsUser()
    console.log('[TeamsCallback] getCurrentTeamsUser() finished')
  } catch (e) {
    console.error('[TeamsCallback] getCurrentTeamsUser() threw', e)
  }

  // Slack organization login: open Slack on the #aidl channel with the
  // Admin cards (guide 7.1). landed_on=chat means the channel couldn't be
  // created, so the workspace opens instead.
  const target = result.openSlack && result.slackUrl ? { kind: 'slack' as const, url: result.slackUrl }
    : result.openTeams && result.teamsUrl ? { kind: 'teams' as const, url: result.teamsUrl } : null
  if (target && result.email && !hasAvatar(result.email)) {
    if (target.kind === 'slack' && result.landedOn !== 'channel') {
      notifyError('AIDL could not create the #aidl channel. Ask your Slack admin to allow the AIDL app.', 'Slack Channel')
    }
    workspace = target
    avatarEmail = result.email
    statusText.value = 'Pick your avatar, then we open your workspace.'
    pickAvatar.value = true
    return
  }

  if (result.openSlack && result.slackUrl) {
    if (result.landedOn !== 'channel') {
      notifyError('AIDL could not create the #aidl channel. Ask your Slack admin to allow the AIDL app.', 'Slack Channel')
    }
    if (!openInNewTab(result.slackUrl)) {
      slackUrl.value = result.slackUrl
      return
    }
  } else if (result.openTeams && result.teamsUrl) {
    console.log('[TeamsCallback] opening Teams directly, landedOn =', result.landedOn)
    window.open(result.teamsUrl, '_blank', 'noopener,noreferrer')
  }

  router.replace('/home')
  console.log('[TeamsCallback] router.replace(/home) called')
})
</script>

<style scoped>
.teams-callback {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  background: #f5ecd2;
  color: #14140f;
  font-family: inherit;
  text-align: center;
  padding: 1.5rem;
}

.teams-callback__logo {
  height: 48px;
  width: auto;
}

.teams-callback__spinner {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 4px solid rgba(20, 20, 15, 0.15);
  border-top-color: #ffcc00;
  animation: teams-callback-spin 0.8s linear infinite;
}

.teams-callback__title {
  font-size: 1.4rem;
  font-weight: 800;
}

.teams-callback__btn {
  font: inherit;
  font-weight: 800;
  font-size: 1rem;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  border: 2px solid #14140f;
  background: #ffcc00;
  color: #14140f;
  cursor: pointer;
}

.teams-callback__btn:hover {
  background: #ffd83d;
}

.teams-callback__link {
  font: inherit;
  font-size: 0.9rem;
  background: none;
  border: 0;
  color: #14140f;
  text-decoration: underline;
  cursor: pointer;
}

.teams-callback__text {
  font-size: 0.95rem;
  opacity: 0.8;
}

@keyframes teams-callback-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
