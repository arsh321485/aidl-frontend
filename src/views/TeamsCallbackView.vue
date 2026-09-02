<template>
  <div class="teams-callback">
    <img :src="aidlLogo" alt="AIDL" class="teams-callback__logo" />
    <div class="teams-callback__spinner" aria-hidden="true"></div>
    <p class="teams-callback__text">{{ statusText }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import aidlLogo from '../assets/images/aidl-logo.png'
import { notifySuccess, notifyError } from '../lib/notify.js'
import { consumeTeamsAuthCallback, getCurrentTeamsUser } from '../lib/msTeamsAuth'

const router = useRouter()
const statusText = ref('Finishing Microsoft Teams sign-in…')

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
    statusText.value = 'Microsoft Teams sign-in failed.'
    notifyError(
      params.get('error_description') || (oauthError ? `Error: ${oauthError}` : 'No tokens were returned by the sign-in redirect.'),
      'Teams Sign-In Failed'
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

  // A page redirected here by Microsoft has no user gesture attached, so this
  // window.open() gets silently blocked by the browser almost every time
  // (verified live — it returns null with no reliable way to detect that
  // synchronously). It's still attempted best-effort so it works in browsers
  // that do allow it; either way we continue straight to /home with no
  // button to click, per product decision to drop the manual fallback.
  const landedOnChannel = result.landedOn === 'channel'
  const teamsToastMessage = landedOnChannel
    ? 'Opened your AIDL channel in Teams.'
    : 'Opened Teams (AIDL channel not ready yet).'

  if (result.openTeams && result.teamsUrl) {
    console.log('[TeamsCallback] attempting auto-open of Teams, landedOn =', result.landedOn)
    window.open(result.teamsUrl, '_blank', 'noopener,noreferrer')
  }

  console.log('[TeamsCallback] showing success notification, redirecting to /home')
  notifySuccess(teamsToastMessage, 'Microsoft Teams Connected')

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
