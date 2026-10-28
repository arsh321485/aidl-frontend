<template>
<!-- Same nav and footer as the landing page (HomeView): it reuses HomeView's
     global lp- styles, so the markup here must stay in step with HomeView. -->
<div class="lp-root sp-root" :class="{ 'lp-pf-teams': platform === 'teams' }">
<nav ref="navEl" class="lp-nav">
<div class="lp-wrap lp-nav-in">
<RouterLink class="lp-brand" to="/home"><img class="lp-bm" :src="aidlLogo" alt="AIDL logo" /><span>AIDL</span></RouterLink>
<div class="lp-nl"><RouterLink v-for="l in NAV_LINKS" :key="l.id" :to="{ path: '/home', hash: '#' + l.id }">{{ l.label }}</RouterLink><RouterLink to="/pricing" exact-active-class="sp-on">Pricing</RouterLink></div>
<div class="lp-ncta"><span class="lp-pf" role="group" aria-label="Platform"><button type="button" :aria-pressed="platform === 'slack'" @click="setPlatform('slack')"><i></i>Slack</button><button type="button" :aria-pressed="platform === 'teams'" @click="setPlatform('teams')"><i></i>Teams</button></span><a class="lp-btn lp-y" href="#" @click.prevent="addTo(platform)"><span class="lp-v-s">Add to Slack</span><span class="lp-v-t">Add to Teams</span><span class="lp-arr">→</span></a></div>
<button type="button" class="lp-burger" :class="{ 'lp-open': menuOpen }" :aria-expanded="menuOpen" aria-controls="sp-mnav" aria-label="Menu" @click="menuOpen = !menuOpen"><i></i><i></i><i></i></button>
</div>
<div v-show="menuOpen" id="sp-mnav" class="lp-mnav">
<div class="lp-wrap"><RouterLink v-for="l in NAV_LINKS" :key="l.id" :to="{ path: '/home', hash: '#' + l.id }" @click="menuOpen = false">{{ l.label }}</RouterLink><RouterLink to="/pricing" @click="menuOpen = false">Pricing</RouterLink></div>
</div>
</nav>

<slot />

<footer class="lp-foot">
<div class="lp-wrap lp-foot-in"><RouterLink class="lp-brand" to="/home"><img class="lp-bm" :src="aidlLogo" alt="AIDL logo" /><span>AIDL</span></RouterLink><RouterLink v-for="l in NAV_LINKS" :key="l.id" :to="{ path: '/home', hash: '#' + l.id }">{{ l.label }}</RouterLink><RouterLink to="/pricing" exact-active-class="sp-on">Pricing</RouterLink><RouterLink to="/privacy" exact-active-class="sp-on">Privacy</RouterLink><RouterLink to="/support" exact-active-class="sp-on">Support</RouterLink><span class="lp-copy">© 2026 AI Driving Licence</span></div>
</footer>
</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import aidlLogo from '../assets/images/aidl-logo-transparent.png'
import { NAV_LINKS } from '../lib/landingNav'
import { startSlackLogin } from '../lib/slackAuth'
import { startTeamsLogin } from '../lib/msTeamsAuth'
import { notifyError, notifyLoading, notifyClose } from '../lib/notify.js'

type Platform = 'slack' | 'teams'

// Slack / Teams switch — shares its saved choice with the landing page.
const PLATFORM_KEY = 'aidl-v2-pf'
const platform = ref<Platform>('slack')
try {
  if (localStorage.getItem(PLATFORM_KEY) === 'teams') platform.value = 'teams'
} catch (e) {}

function setPlatform(p: Platform) {
  platform.value = p
  try { localStorage.setItem(PLATFORM_KEY, p) } catch (e) {}
}

// "Add to Slack" / "Add to Teams" — same organization sign-in as the landing page.
async function addTo(p: Platform) {
  const name = p === 'slack' ? 'Slack' : 'Microsoft Teams'
  notifyLoading(`Opening ${name}…`, 'One moment')
  try {
    if (p === 'slack') await startSlackLogin('organization')
    else await startTeamsLogin('organization')
  } catch (e) {
    notifyClose()
    notifyError(e instanceof Error ? e.message : `Could not start ${name} sign-in.`, `${name} Sign-In Failed`)
  }
}

// Phone / tablet menu — the inline nav links are hidden below 1240px.
const menuOpen = ref(false)
const navEl = ref<HTMLElement | null>(null)

function onDocClick(e: MouseEvent) {
  if (menuOpen.value && navEl.value && !navEl.value.contains(e.target as Node)) menuOpen.value = false
}
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') menuOpen.value = false
}
function onResize() {
  if (window.innerWidth > 1240) menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('resize', onResize)
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style>
/* Page body for Privacy / Support — the nav and footer come from HomeView's
   lp- styles; everything else here is prefixed sp-. */
.sp-root{--paper:#fffaea;display:flex;flex-direction:column}
/* Text size / spacing only for the page body, so the shared nav and footer
   render exactly as on /home. */
.sp-hero,.sp-main{font-size:17px;line-height:1.65}
.sp-hero *,.sp-main *{box-sizing:border-box}
.sp-root main a{color:var(--ink);text-decoration-thickness:2px;text-underline-offset:3px}
.sp-root main a:hover{color:var(--red)}
/* Current page in the footer: the yellow of the footer link hover. */
.lp-foot a.sp-on{color:var(--yellow)}
/* Current page in the nav (Pricing): same look as the active section on /home. */
.lp-nl a.sp-on{color:var(--red);text-decoration:underline;text-decoration-thickness:3px;text-underline-offset:6px}
.sp-wrap{max-width:1120px;margin:0 auto;padding:0 28px;width:100%}
.sp-hero{background:var(--yellow);border-bottom:4px solid var(--ink);padding:60px 0 48px}
.sp-eb{display:inline-block;font-family:"JetBrains Mono",monospace;font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;background:var(--ink);color:var(--yellow);padding:5px 12px}
.sp-h1{font-family:"Bungee",sans-serif;font-weight:400;font-size:clamp(36px,6.4vw,64px);line-height:1;margin:18px 0 14px}
.sp-lede{margin:0;max-width:62ch;font-size:18.5px}
.sp-h2{font-family:"Bungee",sans-serif;font-weight:400;font-size:clamp(22px,3vw,28px);line-height:1.15;margin:0 0 14px}
.sp-main{flex:1;padding:52px 0 80px}
.sp-card{background:var(--paper);border:3px solid var(--ink);box-shadow:6px 6px 0 var(--ink)}
@media(max-width:640px){
.sp-hero,.sp-main{font-size:16px}
.sp-wrap{padding:0 18px}
.sp-hero{padding:40px 0 34px}
.sp-lede{font-size:16.5px}
.sp-main{padding:36px 0 60px}
.sp-card{box-shadow:4px 4px 0 var(--ink)}
}
</style>
