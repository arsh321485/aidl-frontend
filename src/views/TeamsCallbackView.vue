<template>
  <div class="teams-callback">
    <img :src="aidlLogo" alt="AIDL" class="teams-callback__logo" />
    <OrgPolicyQuizModal
      v-if="policyPrompt"
      v-model:answers="policyAnswers"
      @close="finishPolicy(false)"
      @finish="finishPolicy(true)"
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
import OrgPolicyQuizModal from '../components/OrgPolicyQuizModal.vue'
import { sendPolicyAnswers } from '../lib/orgPolicyApi'
import { isPolicyComplete, loadPolicyAnswers, savePolicyAnswers, type PolicyAnswers } from '../lib/orgPolicyQuestions'

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

// Guide 4.7: the backend says whether this organization has answered the
// 8 policy questions. If not, send the answers this browser has — or ask
// them now (e.g. first sign-in from another laptop) before opening Slack.
const policyPrompt = ref(false)
const policyAnswers = ref<PolicyAnswers>(loadPolicyAnswers())
let resolvePolicy: (() => void) | null = null

async function ensurePolicyAnswers(token: string) {
  if (!isPolicyComplete(policyAnswers.value)) {
    policyPrompt.value = true
    statusText.value = "One more step: answer your organization's policy questions."
    await new Promise<void>((resolve) => { resolvePolicy = resolve })
  }
  if (isPolicyComplete(policyAnswers.value)) {
    savePolicyAnswers(policyAnswers.value)
    await sendPolicyAnswers(token, policyAnswers.value)
  }
}

function finishPolicy(done: boolean) {
  if (!done && !isPolicyComplete(policyAnswers.value)) {
    notifyError('Your Slack cards use these answers — you can finish them later from Sign In → Organization.', 'Policy questions')
  }
  policyPrompt.value = false
  statusText.value = `Finishing ${providerName} sign-in…`
  resolvePolicy?.()
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
  if (result.openSlack && result.policyCompleted === '0') {
    await ensurePolicyAnswers(result.accessToken)
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
