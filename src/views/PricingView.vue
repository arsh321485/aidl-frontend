<template>
<SitePageShell>
<div class="pr-root">
<header class="pr-hero">
<div class="lp-wrap pr-hero-in">
<div>
<span class="pr-eb">▼ PRICING</span>
<h1>PICK YOUR<span>ROUTE</span></h1>
<p class="pr-lede">Every team starts on Trial with the three onboarding cards and a licence for everyone. Move to Basic or Enterprise when you want more cards each week, more admins and more control.</p>
</div>
<div class="pr-route" aria-label="How plans work">
<b>How it works</b>
<ol>
<li><span>Add AIDL to <span class="lp-v-s">Slack</span><span class="lp-v-t">Teams</span>. You start on Trial.</span></li>
<li>Your team agrees to the policy and earns their licence.</li>
<li>Upgrade from your Admin Center any time.</li>
</ol>
</div>
</div>
</header>

<section id="plans" class="pr-band">
<div class="lp-wrap">
<span class="pr-eb">▼ THE PLANS</span>
<h2 class="pr-h2">Three plans. One road.</h2>
<p class="pr-lede">Each plan includes everything in the one before it.</p>
<div class="pr-plans">
<article v-for="p in plans" :key="p.name" class="pr-plan" :class="'pr-' + p.key">
<span v-if="p.flag" class="pr-flag">{{ p.flag }}</span>
<div class="pr-plan-hd">
<span class="pr-sign" :class="'pr-' + p.sign"><span v-html="p.signText"></span></span>
<div>
<h3 class="pr-plan-name">{{ p.name }}</h3>
<p class="pr-plan-tag">{{ p.tag }}</p>
</div>
</div>
<div class="pr-price"><b>{{ p.price }}</b><span v-if="p.per">{{ p.per }}</span></div>
<div class="pr-price-note">{{ p.note }}</div>
<div class="pr-dash"><div v-for="d in p.dash" :key="d[1]"><b>{{ d[0] }}</b><span>{{ d[1] }}</span></div></div>
<a class="lp-btn" :class="{ 'lp-y': p.key === 'basic' }" href="#start" @click.prevent="goTo('start')">{{ p.cta }} <span class="lp-arr">→</span></a>
<div class="pr-feats">
<span class="pr-inc">{{ p.inc }}</span>
<ul><li v-for="f in p.base" :key="f" class="pr-base">{{ f }}</li><li v-for="f in p.feats" :key="f">{{ f }}</li></ul>
</div>
</article>
</div>
<p class="pr-seats"><b>How seats work:</b> every learner in the AIDL channel uses a seat. Admins never do. Someone who earned a licence keeps their seat for the year, even if they leave the channel.</p>
</div>
</section>

<section id="every" class="pr-band pr-dark">
<div class="lp-wrap">
<span class="pr-eb">▼ ON EVERY PLAN</span>
<h2 class="pr-h2">Road-ready from day one.</h2>
<p class="pr-lede" style="color:#e9e0c4">These come with Trial and stay on every plan. Your team finishes them in about ten minutes.</p>
<div class="pr-every">
<div v-for="t in every" :key="t.title" class="pr-tile"><span class="pr-ic">{{ t.icon }}</span><span class="pr-m">{{ t.label }}</span><h3>{{ t.title }}</h3><p>{{ t.text }}</p></div>
</div>
</div>
</section>

<section id="compare" class="pr-band">
<div class="lp-wrap">
<span class="pr-eb">▼ COMPARE</span>
<h2 class="pr-h2">Side by side.</h2>
<div class="pr-cmp-wrap">
<table class="pr-cmp">
<thead><tr><th scope="col">&nbsp;</th><th scope="col">Trial</th><th scope="col">Basic</th><th scope="col">Enterprise</th></tr></thead>
<tbody>
<template v-for="g in compare" :key="g.group">
<tr class="pr-grp"><th scope="rowgroup">{{ g.group }}</th><td></td><td></td><td></td></tr>
<tr v-for="r in g.rows" :key="r[0]"><th scope="row">{{ r[0] }}</th><td v-for="(c, i) in r.slice(1)" :key="i" :class="{ 'pr-y': c === '✓', 'pr-n': c === '—' }">{{ c.split('|')[0] }}<small v-if="c.includes('|')">{{ c.split('|')[1] }}</small></td></tr>
</template>
</tbody>
</table>
</div>
</div>
</section>

<section id="faq" class="pr-band" style="background:var(--cream-2)">
<div class="lp-wrap">
<span class="pr-eb">▼ QUESTIONS</span>
<h2 class="pr-h2">Before you set off.</h2>
<div class="pr-faq">
<details v-for="(f, i) in faqs" :key="f.q" :open="openFaq === i" @toggle="onToggle(i, $event)"><summary>{{ f.q }}</summary><p>{{ f.a }}</p></details>
</div>
</div>
</section>

<section id="start" class="pr-cta">
<div class="lp-wrap">
<h2 class="pr-h2">Start on Trial today.</h2>
<p class="pr-lede">Add AIDL, approve your policy and the three starter cards, and press Start. Upgrade whenever you're ready.</p>
<div class="pr-hcta">
<a class="lp-btn" href="#" @click.prevent="addTo('slack')">Add to Slack <span class="lp-arr">→</span></a>
<a class="lp-btn" href="#" @click.prevent="addTo('teams')">Add to Teams <span class="lp-arr">→</span></a>
<RouterLink class="lp-btn lp-ghost" to="/home">Back to home</RouterLink>
</div>
</div>
</section>
</div>
</SitePageShell>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SitePageShell from '../components/SitePageShell.vue'
import { startSlackLogin } from '../lib/slackAuth'
import { startTeamsLogin } from '../lib/msTeamsAuth'
import { notifyError, notifyLoading, notifyClose } from '../lib/notify.js'

// Public pricing page (from aidl-design/pricing.html). Plan upgrades with a
// Slack token still go through /plans.

const plans = [
  {
    key: 'trial', name: 'Trial', sign: 'round', signText: 'START', flag: '',
    tag: 'Try AIDL with a small group and get everyone licensed.',
    price: 'Free', per: '', note: 'NO CARD NEEDED',
    dash: [['1', 'Admin'], ['1', 'Card a month'], ['5', 'Users'], ['12', 'Default cards']],
    cta: 'Start free', inc: 'INCLUDED', base: [] as string[],
    feats: [
      '3 onboarding cards: 📄 AI Acceptable Use Policy, 🚦 Traffic Light Check, 📖 The Highway Code',
      'AI policy built in 15 guided pages, agreed point by point',
      'AI Driving Licence for each person, valid for 1 year',
      'Default package: 12 awareness cards, 1 a month',
      'Admin Center in one channel message',
      'My cards and Request an app for everyone',
    ],
  },
  {
    key: 'basic', name: 'Basic', sign: 'diamond', signText: '2×<br>WEEK', flag: 'FOR GROWING TEAMS',
    tag: 'Keep the learning going all year, on the topics you choose.',
    price: '$2', per: 'USD / user / month', note: 'BILLED PER LEARNER SEAT · ADMINS ARE FREE',
    dash: [['Any', 'Admins'], ['2', 'Cards a week'], ['Any', 'Number of users'], ['104', 'Cards a year']],
    cta: 'Get Basic', inc: 'EVERYTHING IN TRIAL, PLUS',
    base: ['Onboarding cards, AI policy and licences'],
    feats: [
      '2 awareness cards a week (Mon, Thu, 10:00)',
      '104 cards over the year',
      'Pick the card topics that matter to your team',
      'Add as many admins as you like, each with only the rights they need',
      'As many users as you buy seats for',
    ],
  },
  {
    key: 'ent', name: 'Enterprise', sign: 'oct', signText: '4×<br>WEEK', flag: '',
    tag: 'The full library on your schedule, run by as many admins as you need.',
    price: '$8', per: 'USD / user / month', note: 'BILLED PER LEARNER SEAT · ADMINS ARE FREE',
    dash: [['Any', 'Admins'], ['4', 'Cards a week'], ['Any', 'Number of users'], ['208', 'Cards a year']],
    cta: 'Get Enterprise', inc: 'EVERYTHING IN TRIAL + BASIC, PLUS',
    base: ['Onboarding cards, AI policy and licences', 'Topic picks, a year of cards and any number of admins'],
    feats: [
      '4 awareness cards a week',
      'Choose the days and the time they arrive',
      '208 cards over the year, from all 15 topics',
      'Upload your own AI policy (AUP) if you already have one, instead of building it in AIDL',
    ],
  },
]

const every = [
  { icon: '📄', label: 'ONBOARDING CARD 1', title: 'AI Acceptable Use Policy', text: 'Your policy, agreed point by point. Every agreement is time-stamped.' },
  { icon: '🚦', label: 'ONBOARDING CARD 2', title: 'Traffic Light Check', text: "Green, amber or red: what's safe to paste into AI, decided in a second." },
  { icon: '📖', label: 'ONBOARDING CARD 3', title: 'The Highway Code', text: 'Five everyday rules for using AI at work.' },
  { icon: '🎫', label: 'THEN', title: 'AI Driving Licence', text: 'Issued the moment the cards are done. Valid for one year, ready to download or share.' },
]

// Cells: '✓' / '—' are styled; 'text|small note' adds a second line.
const compare = [
  { group: 'TEAM', rows: [
    ['Admins', '1', 'As many as you need', 'As many as you need'],
    ['Users', 'Up to 5', 'Per seat you buy', 'Per seat you buy'],
    ['Admin rights per person', '—', '✓', '✓'],
  ] },
  { group: 'ONBOARDING & LICENCE', rows: [
    ['📄 AI Acceptable Use Policy', '✓', '✓', '✓'],
    ['Upload your own AI policy (AUP)', '—', '—', '✓'],
    ['🚦 Traffic Light Check', '✓', '✓', '✓'],
    ['📖 The Highway Code', '✓', '✓', '✓'],
    ['AI Driving Licence (1 year)', '✓', '✓', '✓'],
  ] },
  { group: 'AWARENESS CARDS', rows: [
    ['How often', '1 a month', '2 a week|Mon, Thu · 10:00', '4 a week|Your days and time'],
    ['Cards included', '12|Default package', '104|A year', '208|A year'],
    ['Topics', 'Default package', 'The topics you pick', 'All 15 topics'],
    ['My cards & Request an app', '✓', '✓', '✓'],
  ] },
  { group: 'OVERSIGHT', rows: [
    ['Admin Center & team progress', '✓', '✓', '✓'],
    ['App requests, decided in chat', '✓', '✓', '✓'],
    ['Coverage export', '✓', '✓', '✓'],
    ['Slack and Microsoft Teams', '✓', '✓', '✓'],
  ] },
]

const faqs = [
  { q: 'Who counts as a user?', a: "Every learner in the AIDL channel uses a seat. Admins never do, so they're always free." },
  { q: 'What happens when the plan is full?', a: 'Anyone added to the channel after that is taken out again, and both they and the Master admin are told why. Buy more seats or upgrade to make room.' },
  { q: 'Does a licence keep its seat?', a: 'Yes. Someone who earned a licence keeps holding their seat, even after they leave the channel. Removing someone who never earned one frees their seat.' },
  { q: 'How do I upgrade?', a: 'From your Admin Center: press Upgrade plan, pick Basic or Enterprise and the number of users. Your cards switch over automatically.' },
  { q: 'What happens to the onboarding cards when I upgrade?', a: 'Nothing changes. The AI policy, Traffic Light Check and Highway Code stay, licences stay valid, and the new weekly cards start on top.' },
  { q: 'Does it work in Slack and Teams?', a: 'Yes, every plan works in both. The same admin and employee flow runs as Slack messages or Teams cards.' },
]

// Questions: only one open at a time.
const openFaq = ref(-1)
function onToggle(i: number, e: Event) {
  const open = (e.target as HTMLDetailsElement).open
  if (open) openFaq.value = i
  else if (openFaq.value === i) openFaq.value = -1
}

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// "Add to Slack" / "Add to Teams" — same organization sign-in as the landing page.
async function addTo(p: 'slack' | 'teams') {
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
</script>

<style>
/* Pricing page body — nav, footer, .lp-wrap and .lp-btn come from HomeView's
   lp- styles; everything else here is prefixed pr-. */
.pr-root{font-family:"Space Grotesk",system-ui,sans-serif;color:var(--ink)}
.pr-root *{box-sizing:border-box}
.pr-root [id]{scroll-margin-top:84px}
.pr-eb{display:inline-block;font-family:"JetBrains Mono",monospace;font-size:12px;letter-spacing:.16em;background:var(--ink);color:var(--yellow);padding:6px 11px;margin-bottom:18px}
.pr-h2{font-family:"Bungee",sans-serif;font-weight:400;font-size:clamp(34px,4.6vw,60px);line-height:1;margin:0 0 16px;text-wrap:balance}
.pr-lede{font-size:19px;line-height:1.55;max-width:62ch;margin:0;text-wrap:pretty}
.pr-band{padding:100px 0;border-bottom:4px solid var(--ink);background:var(--cream)}
.pr-band.pr-dark{background:var(--asphalt);color:var(--cream)}
.pr-band.pr-dark .pr-eb{background:var(--yellow);color:var(--ink)}

/* HERO */
.pr-hero{background:var(--yellow);border-bottom:4px solid var(--ink);padding:84px 0 76px;position:relative;overflow:hidden}
.pr-hero::after{content:"";position:absolute;left:0;right:0;bottom:0;height:14px;background:repeating-linear-gradient(45deg,var(--ink) 0 14px,var(--yellow) 14px 28px)}
.pr-hero-in{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,.8fr);gap:48px;align-items:end}
.pr-hero h1{font-family:"Bungee",sans-serif;font-weight:400;font-size:clamp(48px,7.5vw,104px);line-height:.92;margin:0 0 20px;text-shadow:5px 5px 0 var(--cream)}
.pr-hero h1 span{display:block;color:var(--red);text-shadow:5px 5px 0 var(--ink)}
.pr-hero .pr-lede{font-weight:500}
.pr-route{border:3px solid var(--ink);background:var(--cream);box-shadow:7px 7px 0 var(--ink);padding:20px 22px}
.pr-route b{font-family:"Bungee",sans-serif;font-weight:400;font-size:15px;display:block;margin-bottom:10px}
.pr-route ol{margin:0;padding:0;list-style:none;display:grid;gap:9px;counter-reset:s}
.pr-route li{counter-increment:s;display:flex;gap:12px;align-items:baseline;font-size:15px;line-height:1.4}
.pr-route li::before{content:counter(s,decimal-leading-zero);font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:700;background:var(--yellow);border:2px solid var(--ink);padding:1px 5px;flex:none}

/* PLANS */
.pr-plans{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px;margin-top:52px;align-items:stretch}
.pr-plan{border:3px solid var(--ink);background:var(--cream);box-shadow:8px 8px 0 var(--ink);display:flex;flex-direction:column;position:relative}
.pr-plan.pr-basic{background:#fff8dc;box-shadow:8px 8px 0 var(--yellow),8px 8px 0 3px var(--ink)}
.pr-plan.pr-ent{background:var(--asphalt);color:var(--cream);box-shadow:8px 8px 0 var(--yellow)}
.pr-plan-hd{padding:26px 26px 22px;border-bottom:3px solid var(--ink);display:flex;gap:16px;align-items:flex-start}
.pr-ent .pr-plan-hd{border-bottom-color:var(--cream-3)}
.pr-sign{width:58px;height:58px;flex:none;display:grid;place-items:center;border:3px solid var(--ink);font-family:"Bungee",sans-serif;font-size:11px;line-height:1.05;text-align:center}
.pr-sign.pr-round{border-radius:50%;background:var(--green)}
.pr-sign.pr-diamond{background:var(--yellow);transform:rotate(45deg) scale(.82)}
.pr-sign.pr-diamond>span{transform:rotate(-45deg)}
.pr-sign.pr-oct{background:var(--red);color:var(--cream);clip-path:polygon(30% 0,70% 0,100% 30%,100% 70%,70% 100%,30% 100%,0 70%,0 30%);border:0}
.pr-plan-name{font-family:"Bungee",sans-serif;font-weight:400;font-size:28px;line-height:1;margin:2px 0 6px}
.pr-plan-tag{font-size:14.5px;line-height:1.45;margin:0;color:var(--muted)}
.pr-ent .pr-plan-tag{color:#cfc49c}
.pr-flag{position:absolute;top:-16px;right:18px;font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:700;letter-spacing:.12em;background:var(--red);color:var(--cream);border:3px solid var(--ink);padding:4px 10px}
.pr-price{padding:22px 26px 6px;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.pr-price b{font-family:"Bungee",sans-serif;font-weight:400;font-size:44px;line-height:1}
.pr-price span{font-size:14px;color:var(--muted);font-weight:600}
.pr-ent .pr-price span{color:#cfc49c}
.pr-price-note{padding:0 26px;font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.06em;color:var(--muted)}
.pr-ent .pr-price-note{color:#cfc49c}
.pr-dash{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin:20px 26px 0;border:3px solid var(--ink)}
.pr-ent .pr-dash{border-color:var(--cream-3)}
.pr-dash div{padding:12px 14px;border-right:3px solid var(--ink);border-bottom:3px solid var(--ink)}
.pr-ent .pr-dash div{border-color:var(--cream-3)}
.pr-dash div:nth-child(2n){border-right:0}
.pr-dash div:nth-last-child(-n+2){border-bottom:0}
.pr-dash b{display:block;font-family:"Bungee",sans-serif;font-weight:400;font-size:22px;line-height:1.05}
.pr-dash span{font-family:"JetBrains Mono",monospace;font-size:10.5px;letter-spacing:.08em;color:var(--muted);text-transform:uppercase}
.pr-ent .pr-dash span{color:#cfc49c}
.pr-plan .lp-btn{margin:22px 26px 0;justify-content:center}
.pr-ent .lp-btn{background:var(--yellow);color:var(--ink);border-color:var(--yellow);box-shadow:4px 4px 0 var(--cream)}
.pr-ent .lp-btn:hover{box-shadow:6px 6px 0 var(--cream);color:var(--ink)}
.pr-feats{padding:22px 26px 28px}
.pr-inc{font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:700;letter-spacing:.12em;margin:0 0 10px;display:inline-block;background:var(--ink);color:var(--yellow);padding:4px 9px}
.pr-ent .pr-inc{background:var(--yellow);color:var(--ink)}
.pr-feats ul{margin:0;padding:14px 0 0;list-style:none;display:grid;gap:9px;border-top:2px dashed var(--line)}
.pr-ent .pr-feats ul{border-top-color:#4a4636}
.pr-feats li{display:flex;gap:10px;font-size:14.5px;line-height:1.45}
.pr-feats li::before{content:"";width:9px;height:9px;margin-top:6px;flex:none;background:var(--yellow);border:2px solid var(--ink)}
.pr-ent .pr-feats li::before{border-color:var(--cream)}
.pr-seats{margin:28px 0 0;font-size:15px;line-height:1.55;max-width:80ch}

/* EVERY PLAN */
.pr-every{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px;margin-top:48px}
.pr-tile{border:3px solid var(--cream);padding:24px;background:var(--asphalt-2);display:flex;flex-direction:column;gap:10px}
.pr-ic{font-size:30px;line-height:1}
.pr-tile h3{font-family:"Bungee",sans-serif;font-weight:400;font-size:19px;line-height:1.1;margin:0;color:var(--yellow)}
.pr-tile p{margin:0;font-size:14.5px;line-height:1.5;color:#e9e0c4}
.pr-m{font-family:"JetBrains Mono",monospace;font-size:10.5px;letter-spacing:.12em;color:#cfc49c}

/* COMPARE */
.pr-cmp-wrap{margin-top:48px;border:3px solid var(--ink);box-shadow:8px 8px 0 var(--ink);background:#fff;overflow-x:auto}
table.pr-cmp{width:100%;border-collapse:collapse;min-width:720px;font-size:15px}
.pr-cmp th,.pr-cmp td{padding:14px 18px;border-bottom:2px solid #ece3c4;text-align:left;vertical-align:top}
.pr-cmp thead th{background:var(--asphalt);color:var(--cream);font-family:"Bungee",sans-serif;font-weight:400;font-size:16px;border-bottom:3px solid var(--ink)}
.pr-cmp thead th:nth-child(3){background:var(--yellow);color:var(--ink)}
.pr-cmp tbody th{font-weight:600;width:32%}
.pr-cmp td:nth-child(3){background:#fffbe8}
.pr-cmp tr.pr-grp th{background:var(--cream-2);font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.14em;font-weight:700;padding:9px 18px}
.pr-cmp tr.pr-grp td{background:var(--cream-2)}
.pr-cmp .pr-y{font-weight:700;color:var(--green-ink)}
.pr-cmp .pr-n{color:#9b9178}
.pr-cmp small{display:block;color:var(--muted);font-size:12.5px;margin-top:2px}

/* FAQ */
.pr-faq{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:44px;align-items:start}
.pr-faq details{border:3px solid var(--ink);background:var(--cream);box-shadow:5px 5px 0 var(--ink)}
.pr-faq summary{cursor:pointer;list-style:none;padding:18px 20px;font-weight:700;font-size:16px;display:flex;justify-content:space-between;gap:14px;align-items:center}
.pr-faq summary::-webkit-details-marker{display:none}
.pr-faq summary::after{content:"+";font-family:"Bungee",sans-serif;font-size:20px;flex:none}
.pr-faq details[open] summary::after{content:"–"}
.pr-faq details p{margin:0;padding:0 20px 18px;font-size:15px;line-height:1.55}

/* CTA */
.pr-cta{background:var(--yellow);text-align:center;padding:96px 0;border-bottom:4px solid var(--ink)}
.pr-cta .pr-h2{font-size:clamp(38px,5.4vw,72px)}
.pr-cta .pr-lede{margin:0 auto 30px}
.pr-hcta{display:flex;gap:14px;flex-wrap:wrap;justify-content:center}

@media(max-width:1100px){.pr-plans{grid-template-columns:minmax(0,1fr);max-width:620px;margin-left:auto;margin-right:auto}.pr-every{grid-template-columns:repeat(2,minmax(0,1fr))}.pr-hero-in{grid-template-columns:1fr}}
@media(max-width:640px){
.pr-band{padding:72px 0}.pr-hero{padding:56px 0 60px}
.pr-lede{font-size:17px}
.pr-plan-hd,.pr-price,.pr-feats{padding-left:20px;padding-right:20px}.pr-price-note{padding:0 20px}.pr-dash{margin:18px 20px 0}.pr-plan .lp-btn{margin:20px 20px 0}
.pr-every,.pr-faq{grid-template-columns:1fr}
.pr-cta{padding:72px 0}
.pr-cta .pr-hcta{flex-direction:column;align-items:stretch;max-width:300px;margin:0 auto}
.pr-cta .lp-btn{justify-content:center}
}
</style>
