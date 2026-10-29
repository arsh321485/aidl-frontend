<template>
<SitePageShell>
<header class="sp-hero">
<div class="sp-wrap">
<span class="sp-eb">Regulatory &amp; compliance</span>
<h1 class="sp-h1">Global AI literacy requirements</h1>
<p class="sp-lede">AI literacy, awareness, training and acceptable-use requirements around the world: who must comply, what they must do, when it applies and the evidence auditors ask for.</p>
<p class="ar-updated">Checked: {{ REQUIREMENTS_UPDATED }} · A compliance reference, not legal advice</p>
</div>
</header>

<main class="sp-main">
<div class="sp-wrap ar-layout">
<aside class="ar-toc sp-card" aria-label="On this page">
<b>On this page</b>
<ol><li v-for="s in sections" :key="s.id"><a :href="'#' + s.id" @click.prevent="goTo(s.id)">{{ s.label }}</a></li></ol>
</aside>

<article class="ar-body">
<section v-for="s in sections" :id="s.id" :key="s.id">
<h2 class="sp-h2">{{ s.title }}</h2>
<template v-for="(b, i) in s.blocks" :key="i">
<p v-if="b.kind === 'p'">{{ b.text }}</p>
<div v-else-if="b.kind === 'table'" class="ar-table" tabindex="0" :aria-label="s.title + ' table'"><table>
<thead><tr><th v-for="h in b.head" :key="h" scope="col" :class="colClass(h)">{{ h }}</th></tr></thead>
<tbody><tr v-for="(r, ri) in b.rows" :key="ri"><td v-for="(c, ci) in r" :key="ci" :class="[colClass(b.head[ci]!), { 'ar-first': ci === 0 }]" :data-label="b.head[ci]"><span v-if="b.head[ci] === 'Status'" class="ar-st" :class="statusClass(c)">{{ c }}</span><template v-else>{{ c }}</template></td></tr></tbody>
</table></div>
<ol v-else class="ar-src"><li v-for="it in b.items" :key="it.text"><a v-if="it.url" :href="it.url" target="_blank" rel="noopener noreferrer">{{ it.text }}</a><template v-else>{{ it.text }}</template></li></ol>
</template>
</section>

<section class="ar-cta sp-card">
<h2 class="sp-h2">Evidence for every employee, already on file</h2>
<p>Every AIDL licence records the policy version each person agreed to, the date they agreed, the cards they completed and when it renews.</p>
<RouterLink class="lp-btn lp-y" to="/pricing">See plans <span class="lp-arr">→</span></RouterLink>
</section>
</article>
</div>
</main>
</SitePageShell>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SitePageShell from '../components/SitePageShell.vue'
import { REQUIREMENT_SECTIONS, REQUIREMENTS_UPDATED } from '../lib/aiRequirements'

// Contents labels: the part of each heading before " — ".
const sections = REQUIREMENT_SECTIONS.map(s => ({ ...s, label: s.title.split(' — ')[0]! }))

// Status column chip colour, by its first word.
function statusClass(s: string) {
  const w = s.toLowerCase()
  if (w.startsWith('binding')) return 'ar-bind'
  if (w.startsWith('certifiable')) return 'ar-cert'
  if (w.startsWith('pending') || w.startsWith('lapsed')) return 'ar-pend'
  return 'ar-guide'
}

// Narrow Status column, wide Requirement column.
function colClass(h: string) {
  return h === 'Status' ? 'ar-c-status' : h === 'Requirement' ? 'ar-c-req' : ''
}

// Hash links would go through the router; scroll in place instead.
function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style>
.ar-updated{margin:18px 0 0;font-family:"JetBrains Mono",monospace;font-size:13px;letter-spacing:.04em}
.ar-layout{display:grid;grid-template-columns:250px minmax(0,1fr);gap:44px;align-items:start}
.ar-toc{position:sticky;top:96px;padding:18px 20px;font-size:14.5px}
.ar-toc b{font-family:"Bungee",sans-serif;font-weight:400;font-size:14px}
.ar-toc ol{margin:10px 0 0;padding-left:20px}
.ar-toc li{margin:5px 0}
.ar-toc a{text-decoration:none}
.ar-body section{scroll-margin-top:96px;margin-bottom:48px}
.ar-body p{margin:0 0 12px}
.ar-table{overflow-x:auto;margin:10px 0 16px;border:2px solid var(--ink);background:var(--paper)}
.ar-table:focus-visible{outline:3px solid var(--red);outline-offset:2px}
.ar-table table{width:100%;min-width:820px;border-collapse:collapse;font-size:14.5px;line-height:1.5}
.ar-table th,.ar-table td{text-align:left;vertical-align:top;padding:10px 12px;border:1px solid var(--line)}
.ar-table th{background:var(--cream-2);font-family:"JetBrains Mono",monospace;font-size:12px;letter-spacing:.06em;text-transform:uppercase;border-bottom:2px solid var(--ink)}
.ar-table td.ar-first{font-weight:700;min-width:180px}
.ar-table .ar-c-status{width:118px;min-width:118px}
.ar-table .ar-c-req{min-width:340px;width:38%}
.ar-st{display:inline-block;padding:2px 7px;border:2px solid var(--ink);font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:700;line-height:1.35}
.ar-bind{background:#c9ead9}
.ar-cert{background:#dcd3f0}
.ar-guide{background:#fbe7ab}
.ar-pend{background:#e7ddc9}
.ar-src{margin:0 0 12px;padding-left:22px;font-size:15.5px;overflow-wrap:anywhere}
.ar-src li{margin:6px 0}
.ar-cta{padding:26px 28px}
.ar-cta .lp-btn{margin-top:6px}
/* Tablet: contents move above the page so the tables get the full width. */
@media(max-width:1100px){
.ar-layout{grid-template-columns:1fr;gap:28px}
.ar-toc{position:static}
.ar-toc ol{columns:2;column-gap:24px}
}
/* Small tablet / phone: every table row becomes a card, each cell with its
   column name above it. */
@media(max-width:820px){
.ar-table{overflow:visible;border:0;background:none}
.ar-table table,.ar-table tbody,.ar-table tr,.ar-table td{display:block;width:auto;min-width:0}
.ar-table table{font-size:15px}
.ar-table thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
.ar-table tr{margin:0 0 14px;border:2px solid var(--ink);background:var(--paper);box-shadow:4px 4px 0 var(--ink)}
.ar-table td{border:0;border-top:1px solid var(--line);padding:9px 14px}
.ar-table td::before{content:attr(data-label);display:block;margin-bottom:2px;font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.ar-table td.ar-first{border-top:0;background:var(--cream-2);font-size:16px;padding:12px 14px}
.ar-table td.ar-first::before{display:none}
.ar-table .ar-c-status,.ar-table .ar-c-req{width:auto;min-width:0}
}
@media(max-width:560px){
.ar-toc ol{columns:1}
.ar-body section{margin-bottom:36px}
.ar-table table{font-size:14.5px}
.ar-table td{padding:8px 12px}
.ar-table td.ar-first{padding:10px 12px}
.ar-cta{padding:20px 18px}
.ar-cta .lp-btn{display:flex;justify-content:center}
}
</style>
