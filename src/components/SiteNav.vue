<template>
<!-- Site header (design: AIDL-new-content/"aidl – AI Driving License v4 (3-in-1).html").
     Row 1: brand · Companies / Hospitals · Pricing, Book a demo, Sign up ▾  (Schools tab hidden for now)
     Row 2: the open audience's sections, in its colour, with the one in view underlined.
     Used by HomeView, SchoolsView, HospitalsView and SitePageShell. -->
<header ref="headerEl" class="sn-top" :style="{ '--sn-ac': current.color }">
  <div class="sn-row1">
    <RouterLink class="sn-brand" :to="current.path" aria-label="AIDL home" @click="onBrand"><img class="sn-bm" :src="aidlLogo" alt="" /><span class="sn-t">AIDL</span></RouterLink>

    <nav class="sn-aud" aria-label="Who is AIDL for?">
      <RouterLink
        v-for="a in TABS"
        :key="a.id"
        :to="a.path"
        :aria-current="a.id === audience ? 'page' : undefined"
        :class="{ 'sn-on': a.id === audience }"
        :style="{ '--sn-tc': a.color }"
      ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true" v-html="a.icon"></svg>{{ a.label }}</RouterLink>
    </nav>

    <div class="sn-common">
      <a class="sn-lnk" :href="href(current.pricing)" @click="go($event, current.pricing)">Pricing</a>
      <a class="sn-lnk sn-hide-s" :href="href(current.demo)" @click="go($event, current.demo)">Book a demo</a>
      <SignUpMenu align="right" @pick="pick" />
    </div>
  </div>

  <div class="sn-row2">
    <nav ref="subEl" class="sn-sub" :aria-label="current.label + ' sections'">
      <span class="sn-tag">{{ current.tag }}</span>
      <a
        v-for="s in current.sections"
        :key="s.path + s.id"
        :href="href(s)"
        :class="{ 'sn-on': active === s.path + '#' + s.id }"
        :aria-current="active === s.path + '#' + s.id ? 'true' : undefined"
        @click="go($event, s)"
      >{{ s.label }}</a>
    </nav>
  </div>
</header>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import aidlLogo from '../assets/images/aidl-logo-licence.png'
import SignUpMenu from './SignUpMenu.vue'
import { addToPlatform, savePlatform, type PlatformId } from '../lib/platforms'
import { AUDIENCES, getAudience, scrollToSpot, useSpotLinks, type AudienceId } from '../lib/siteNav'

const props = withDefaults(defineProps<{
  audience?: AudienceId
  // Sign-up handler of the page (HomeView / SitePageShell remember the platform).
  // Without one the nav starts that platform's sign-up itself.
  onSignup?: (id: PlatformId) => unknown
}>(), { audience: 'companies' })

// Sir (2026-11-25, design v5 "Companies & Hospitals"): no Schools tab in the navbar for now.
const TABS = AUDIENCES.filter((a) => a.id !== 'schools')

const route = useRoute()
const { href, go, onPage } = useSpotLinks()
const current = computed(() => getAudience(props.audience))

const headerEl = ref<HTMLElement | null>(null)
const subEl = ref<HTMLElement | null>(null)
// The underlined sub-menu link, as "path#id".
const active = ref('')

function onBrand(e: MouseEvent) {
  if (onPage({ id: 'top', label: '', path: current.value.path })) {
    e.preventDefault()
    scrollToSpot('top')
  }
}

function pick(id: PlatformId) {
  if (props.onSignup) return props.onSignup(id)
  savePlatform(id)
  return addToPlatform(id)
}

// Scroll spy: the last section on this page whose top has passed under the nav.
let raf = 0
function spy() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    const here = current.value.sections.filter((s) => s.path === route.path)
    if (here.length <= 1) { // e.g. /pricing: just its own link; /privacy: none
      active.value = here[0] ? here[0].path + '#' + here[0].id : ''
      return
    }
    const line = (headerEl.value?.offsetHeight ?? 0) + 30
    let best = here[0]!
    for (const s of here) {
      if (s.id === 'top') continue
      const el = document.getElementById(s.id)
      if (el && el.getBoundingClientRect().top <= line) best = s
    }
    active.value = best.path + '#' + best.id
  })
}

// Keep the underlined section visible in the sub-menu strip on small screens.
watch(active, async () => {
  await nextTick()
  const strip = subEl.value
  const a = strip?.querySelector<HTMLElement>('a.sn-on')
  if (!strip || !a) return
  if (a.offsetLeft < strip.scrollLeft || a.offsetLeft + a.offsetWidth > strip.scrollLeft + strip.clientWidth) {
    strip.scrollTo({ left: a.offsetLeft - 40, behavior: 'smooth' })
  }
})

// --sn-h = nav height; pages use it to stop sections hiding under the sticky nav.
let ro: ResizeObserver | null = null
function setHeight() {
  document.documentElement.style.setProperty('--sn-h', (headerEl.value?.offsetHeight ?? 0) + 'px')
}

watch(() => route.fullPath, spy)

onMounted(() => {
  setHeight()
  if (headerEl.value && 'ResizeObserver' in window) {
    ro = new ResizeObserver(() => { setHeight(); spy() })
    ro.observe(headerEl.value)
  }
  window.addEventListener('scroll', spy, { passive: true })
  window.addEventListener('resize', spy)
  spy()
})
onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
  window.removeEventListener('scroll', spy)
  window.removeEventListener('resize', spy)
})
</script>

<style>
.sn-top{--sn-ink:#14140f;--sn-cream:#f5ecd2;--sn-yellow:#ffcc00;--sn-red:#e23a2e;position:sticky;top:0;z-index:100;background:var(--sn-ink);color:var(--sn-cream);font-family:"Space Grotesk",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
.sn-top *{box-sizing:border-box}
.sn-top .sn-row1{display:flex;align-items:center;gap:18px;max-width:1320px;margin:0 auto;padding:10px 22px}
.sn-top .sn-brand{display:flex;align-items:center;gap:10px;font-family:"Bungee",sans-serif;font-size:20px;text-decoration:none;color:var(--sn-cream);flex:0 0 auto}
.sn-top .sn-brand:hover{color:var(--sn-cream)}
.sn-top .sn-bm{width:42px;height:42px;object-fit:contain;display:block}
.sn-top .sn-brand:focus-visible{outline:3px solid var(--sn-yellow);outline-offset:3px}

.sn-top .sn-aud{display:flex;gap:6px;margin:0 auto;background:#24231b;border:2px solid #3a382c;padding:5px;border-radius:999px}
.sn-top .sn-aud a{display:flex;align-items:center;gap:8px;padding:9px 18px 9px 12px;border-radius:999px;font-family:"Bungee",sans-serif;font-size:15px;letter-spacing:.02em;color:#cfc49c;text-decoration:none;white-space:nowrap;transition:background .15s,color .15s}
.sn-top .sn-aud svg{width:22px;height:22px;flex:0 0 auto}
.sn-top .sn-aud a:hover{color:var(--sn-cream);background:#33321f}
.sn-top .sn-aud a.sn-on{background:var(--sn-tc);color:var(--sn-ink);box-shadow:0 3px 0 rgba(0,0,0,.4)}
.sn-top .sn-aud a:focus-visible{outline:3px solid var(--sn-cream);outline-offset:2px}

.sn-top .sn-common{display:flex;align-items:center;gap:6px;flex:0 0 auto}
.sn-top .sn-lnk{font-family:"JetBrains Mono",monospace;font-size:12.5px;font-weight:700;letter-spacing:.06em;padding:9px 12px;color:var(--sn-cream);text-transform:uppercase;text-decoration:none;border:2px solid transparent;white-space:nowrap}
.sn-top .sn-lnk:hover,.sn-top .sn-lnk:focus-visible{border-color:var(--sn-yellow);color:var(--sn-cream);outline:none}

/* Sign up ▾ (SignUpMenu) restyled for the dark bar */
.sn-top .su .su-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:var(--sn-yellow);color:var(--sn-ink);border:3px solid var(--sn-cream);font-family:"Bungee",sans-serif;font-size:14px;white-space:nowrap;box-shadow:3px 3px 0 var(--sn-cream)}
.sn-top .su .su-btn:hover{transform:translate(-1px,-1px);box-shadow:4px 4px 0 var(--sn-cream);color:var(--sn-ink)}
.sn-top .su .su-btn:focus-visible{outline:3px solid var(--sn-red);outline-offset:2px}
.sn-top .su .su-panel{border-color:var(--sn-cream);z-index:120}

.sn-top .sn-row2{background:var(--sn-ac);color:var(--sn-ink);border-top:3px solid var(--sn-ink);border-bottom:3px solid var(--sn-ink);transition:background .2s}
.sn-top .sn-sub{display:flex;align-items:center;gap:4px;max-width:1320px;margin:0 auto;padding:0 22px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.sn-top .sn-sub::-webkit-scrollbar{display:none}
.sn-top .sn-tag{flex:0 0 auto;font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:700;letter-spacing:.12em;background:var(--sn-ink);color:var(--sn-ac);padding:4px 9px;margin-right:8px}
.sn-top .sn-sub a{flex:0 0 auto;display:block;padding:12px 12px 10px;font-weight:700;font-size:14.5px;color:var(--sn-ink);text-decoration:none;border-bottom:4px solid transparent;white-space:nowrap}
.sn-top .sn-sub a:hover{color:var(--sn-ink);border-bottom-color:rgba(20,20,15,.35)}
.sn-top .sn-sub a.sn-on{border-bottom-color:var(--sn-ink)}
.sn-top .sn-sub a:focus-visible{outline:3px solid var(--sn-ink);outline-offset:-3px}

/* Sections land just below the nav, whatever its height on this screen. */
html .lp-root [id],html .ln [id]{scroll-margin-top:calc(var(--sn-h, 130px) + 6px)}

/* ---- laptop / small desktop ---- */
@media(max-width:1180px){
  .sn-top .sn-row1{gap:12px}
  .sn-top .sn-aud a{padding:8px 13px 8px 10px;font-size:13px}
  .sn-top .sn-aud svg{width:18px;height:18px}
  .sn-top .sn-lnk{padding:8px}
}
/* ---- tablet: tabs drop to their own full-width row ---- */
@media(max-width:900px){
  .sn-top .sn-row1{flex-wrap:wrap;gap:10px;padding:8px 16px}
  .sn-top .sn-aud{order:3;width:100%;margin:0;justify-content:space-between}
  .sn-top .sn-aud a{flex:1;justify-content:center;font-size:12.5px;padding:8px 6px}
  .sn-top .sn-common{margin-left:auto}
  .sn-top .sn-hide-s{display:none}
  .sn-top .sn-sub{padding:0 16px}
  .sn-top .sn-sub a{padding:10px 10px 8px;font-size:14px}
}
/* ---- phones ---- */
@media(max-width:640px){
  .sn-top .su .su-panel{top:calc(var(--sn-h, 150px) + 8px);max-height:calc(100vh - var(--sn-h, 150px) - 20px)}
}
@media(max-width:480px){
  .sn-top .sn-row1{padding:8px 12px;gap:8px}
  .sn-top .sn-bm{width:36px;height:36px}
  .sn-top .sn-t{display:none}
  .sn-top .sn-aud{padding:4px;gap:4px}
  .sn-top .sn-aud a{gap:5px;font-size:11.5px;padding:7px 4px}
  .sn-top .sn-aud svg{display:none}
  .sn-top .sn-lnk{font-size:11.5px;padding:7px 6px}
  .sn-top .su .su-btn{padding:8px 12px;font-size:12.5px;border-width:2px;box-shadow:2px 2px 0 var(--sn-cream)}
  .sn-top .sn-sub{padding:0 12px}
  .sn-top .sn-tag{font-size:10px;padding:3px 7px;margin-right:4px}
  .sn-top .sn-sub a{font-size:13px;padding:9px 8px 7px}
}
@media(max-width:340px){
  .sn-top .sn-aud a{font-size:10.5px}
  .sn-top .su .su-btn{padding:7px 9px;font-size:11.5px}
}
</style>
