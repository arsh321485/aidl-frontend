<template>
<!-- Site footer (design: AIDL-new-content/"aidl – AI Driving License v4 (3-in-1).html").
     About + socials · this page's sections (Companies, Schools or Hospitals only) · AIDL links (same on all three).
     Used by HomeView, SchoolsView, HospitalsView and SitePageShell. -->
<footer class="sf-foot" :style="{ '--sf-ac': current.color }">
  <div class="sf-in">
    <div class="sf-about">
      <RouterLink class="sf-brand" :to="current.path" @click="onBrand"><img class="sf-bm" :src="aidlLogo" alt="" /><span>AIDL</span></RouterLink>
      <p>One AI policy, agreed point by point, and a verifiable AI Driving License for every person, inside the tools they already use.</p>
      <div class="sf-soc">
        <a v-for="s in SOCIAL_LINKS" :key="s.id" :href="s.url" target="_blank" rel="noopener noreferrer" :aria-label="'AIDL on ' + s.label" :title="s.label"><svg viewBox="0 0 24 24" aria-hidden="true" v-html="s.icon"></svg></a>
      </div>
    </div>

    <nav class="sf-col sf-here" :aria-label="current.label">
      <h4>{{ current.label.toUpperCase() }}</h4>
      <ul class="sf-secs">
        <li v-for="s in current.footer" :key="s.path + s.id"><a :href="href(s)" @click="go($event, s)">{{ s.label }}</a></li>
      </ul>
    </nav>

    <nav class="sf-col" aria-label="AIDL">
      <h4>AIDL</h4>
      <ul>
        <li><button type="button" @click="openSignUp">Sign up</button></li>
        <li><a :href="href(current.demo)" @click="go($event, current.demo)">Book a demo</a></li>
        <li><RouterLink to="/privacy">Privacy</RouterLink></li>
        <li><RouterLink to="/terms">Terms</RouterLink></li>
        <li><RouterLink to="/support">Support</RouterLink></li>
      </ul>
    </nav>

    <div class="sf-cp"><span>© 2026 AI Driving License</span><span>Slack · Microsoft Teams · Google Workspace</span></div>
  </div>
</footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import aidlLogo from '../assets/images/aidl-logo-licence.png'
import { SOCIAL_LINKS } from '../lib/landingNav'
import { getAudience, scrollToSpot, useSpotLinks, type AudienceId } from '../lib/siteNav'

const props = withDefaults(defineProps<{ audience?: AudienceId }>(), { audience: 'companies' })
const current = computed(() => getAudience(props.audience))
const { href, go, onPage } = useSpotLinks()

function onBrand(e: MouseEvent) {
  if (onPage({ id: 'top', label: '', path: current.value.path })) {
    e.preventDefault()
    scrollToSpot('top')
  }
}

// "Sign up": back to the top and open the nav's Sign up ▾ menu.
function openSignUp() {
  scrollToSpot('top')
  setTimeout(() => {
    const btn = document.querySelector<HTMLButtonElement>('.sn-top .su-btn')
    if (btn && btn.getAttribute('aria-expanded') !== 'true') btn.click()
  }, 350)
}
</script>

<style>
.sf-foot{--sf-ink:#14140f;--sf-cream:#f5ecd2;--sf-yellow:#ffcc00;background:var(--sf-ink);color:var(--sf-cream);border-top:4px solid var(--sf-ink);font-family:"Space Grotesk",system-ui,sans-serif}
.sf-foot *{box-sizing:border-box}
.sf-foot .sf-in{max-width:1320px;margin:0 auto;padding:40px 22px 26px;display:grid;grid-template-columns:1.4fr 2fr 1fr;gap:28px 40px}
.sf-foot .sf-brand{display:inline-flex;align-items:center;gap:10px;font-family:"Bungee",sans-serif;font-size:20px;color:var(--sf-cream);text-decoration:none}
.sf-foot .sf-brand:hover{color:var(--sf-cream)}
.sf-foot .sf-bm{width:42px;height:42px;object-fit:contain;display:block}
.sf-foot .sf-about p{font-size:13.5px;color:#cfc49c;line-height:1.55;margin:12px 0 0;max-width:34ch}
.sf-foot .sf-soc{display:flex;flex-wrap:wrap;gap:12px;margin-top:16px}
.sf-foot .sf-soc a{width:42px;height:42px;display:grid;place-items:center;border:2px solid var(--sf-cream);color:var(--sf-cream);box-shadow:3px 3px 0 var(--sf-yellow);transition:transform .15s,box-shadow .15s,background-color .15s,color .15s}
.sf-foot .sf-soc a:hover,.sf-foot .sf-soc a:focus-visible{background:var(--sf-yellow);border-color:var(--sf-yellow);color:var(--sf-ink);transform:translate(-2px,-2px);box-shadow:5px 5px 0 var(--sf-cream);outline:none}
.sf-foot .sf-soc svg{width:20px;height:20px;display:block}
@media(prefers-reduced-motion:reduce){.sf-foot .sf-soc a{transition:none}.sf-foot .sf-soc a:hover,.sf-foot .sf-soc a:focus-visible{transform:none}}
.sf-foot h4{display:inline-block;font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:700;letter-spacing:.14em;line-height:1.4;color:var(--sf-yellow);padding:3px 0;margin:0 0 12px}
/* the column for the page you are on, in its colour */
.sf-foot .sf-here h4{color:var(--sf-ink);background:var(--sf-ac);padding:3px 8px}
/* two columns that read top to bottom */
.sf-foot .sf-secs{display:block;columns:2;column-gap:22px}
.sf-foot .sf-secs li{break-inside:avoid;margin-bottom:8px}
.sf-foot ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}
.sf-foot .sf-col a,.sf-foot .sf-col button{all:unset;cursor:pointer;font-size:14px;color:#e8dfc3;line-height:1.35}
.sf-foot .sf-col a:hover,.sf-foot .sf-col button:hover{color:var(--sf-yellow)}
.sf-foot .sf-col a:focus-visible,.sf-foot .sf-col button:focus-visible{outline:2px solid var(--sf-yellow);outline-offset:2px}
.sf-foot .sf-cp{grid-column:1/-1;display:flex;flex-wrap:wrap;justify-content:space-between;gap:6px 18px;border-top:2px dashed #3a382c;padding-top:16px;font-size:12.5px;color:#a69d7f}

/* tablet: about on its own row, then the two link columns */
@media(max-width:900px){
  .sf-foot .sf-in{grid-template-columns:2fr 1fr}
  .sf-foot .sf-about{grid-column:1/-1}
  .sf-foot .sf-about p{max-width:60ch}
}
@media(max-width:560px){
  .sf-foot .sf-in{grid-template-columns:1fr;padding:32px 16px 22px;gap:26px}
  .sf-foot .sf-cp{flex-direction:column}
}
</style>
