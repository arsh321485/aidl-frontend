<template>
<!-- Same nav (SiteNav) and footer (SiteFooter) as the landing pages. -->
<div class="lp-root sp-root" :class="{ 'lp-pf-teams': platform === 'teams', 'lp-pf-gchat': platform === 'gchat' }">
<SiteNav audience="companies" :on-signup="signUp" />

<slot />

<SiteFooter audience="companies" />
</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import SiteNav from './SiteNav.vue'
import SiteFooter from './SiteFooter.vue'
import {
  addToPlatform, isChatPlatform, loadSavedPlatform, savePlatform,
  type ChatPlatformId, type PlatformId,
} from '../lib/platforms'

// Navbar platform picker — shares its saved choice with the landing page.
// `platform` (chat apps only) drives the .lp-pf-* theme classes.
const PLATFORM_KEY = 'aidl-v2-pf'
const platform = ref<ChatPlatformId>('slack')
try {
  const saved = localStorage.getItem(PLATFORM_KEY)
  if (saved === 'teams' || saved === 'gchat') platform.value = saved
} catch (e) {}

const target = ref<PlatformId>(loadSavedPlatform(platform.value))
if (isChatPlatform(target.value)) platform.value = target.value
watch(target, (id) => {
  savePlatform(id)
  if (!isChatPlatform(id)) return
  platform.value = id
  try { localStorage.setItem(PLATFORM_KEY, id) } catch (e) {}
})

// "Sign up ▾": remember the platform (shared with the landing page), then sign up there.
function signUp(id: PlatformId) {
  target.value = id
  return addToPlatform(id)
}
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
