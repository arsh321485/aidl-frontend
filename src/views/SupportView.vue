<template>
<SitePageShell>
<header class="sp-hero su-hero">
<div class="sp-wrap">
<span class="sp-eb">Help center</span>
<h1 class="sp-h1">How can we help?</h1>
<p class="sp-lede">Find quick answers about AIDL for Slack, or get in touch with our team.</p>
<form class="su-search" role="search" @submit.prevent="goTo('faq')">
<label class="su-sr" for="su-q">Search the FAQs</label>
<input id="su-q" v-model="query" type="search" placeholder="Search questions…" autocomplete="off" />
<button type="submit" class="su-btn">Search</button>
</form>
</div>
</header>

<main class="sp-main">
<div class="sp-wrap">
<section aria-labelledby="su-contact">
<span class="su-kicker">Support channels</span>
<h2 id="su-contact" class="sp-h2">Get in touch</h2>
<div class="su-channels">
<a v-for="c in channels" :key="c.title" class="su-channel sp-card" :href="'mailto:' + c.email">
<span class="su-ico" aria-hidden="true">{{ c.icon }}</span>
<b>{{ c.title }}</b>
<span class="su-desc">{{ c.desc }}</span>
<span class="su-mail">{{ c.email }}</span>
</a>
</div>
<p class="su-note">We reply within 1 business day. When you write, include your Slack workspace name and a screenshot if you can — never send passwords or card details.</p>
</section>

<section id="faq" class="su-faq" aria-labelledby="su-faq-h">
<span class="su-kicker">FAQ</span>
<h2 id="su-faq-h" class="sp-h2">Frequently asked questions</h2>
<p v-if="query" class="su-count">{{ shown.length }} {{ shown.length === 1 ? 'answer' : 'answers' }} for “{{ query }}” · <button type="button" class="su-clear" @click="query = ''">Clear</button></p>
<div v-if="shown.length" class="su-grid">
<article v-for="f in shown" :key="f.q" class="su-q sp-card">
<h3>{{ f.q }}</h3>
<p>{{ f.a }}<template v-if="f.link">{{ ' ' }}<RouterLink :to="f.link.to">{{ f.link.label }}</RouterLink>.</template></p>
</article>
</div>
<div v-else class="su-empty sp-card">
<b>No answers match “{{ query }}”.</b>
<p>Email <a :href="'mailto:' + SUPPORT_EMAIL">{{ SUPPORT_EMAIL }}</a> and we'll help you directly.</p>
</div>
</section>
</div>
</main>
</SitePageShell>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import SitePageShell from '../components/SitePageShell.vue'
import { BILLING_EMAIL, PRIVACY_EMAIL, SUPPORT_EMAIL } from '../lib/siteContact'

const channels = [
  { icon: '🛠️', title: 'Setup & admin help', desc: 'Adding AIDL to Slack, the Admin Center, your AI policy, co-admins and approving cards.', email: SUPPORT_EMAIL },
  { icon: '🚗', title: 'Employees & licenses', desc: 'Welcome messages, agreeing to the policy, avatars, and downloading or sharing a license.', email: SUPPORT_EMAIL },
  { icon: '💳', title: 'Plans & billing', desc: 'Trial, Basic and Enterprise plans, seats, upgrades and invoices.', email: BILLING_EMAIL },
  { icon: '🛡️', title: 'Privacy & data requests', desc: 'See, export or delete your data, or your workspace’s data in AIDL.', email: PRIVACY_EMAIL },
]

// tags: extra words people may search for that the answer doesn't use.
interface Faq { q: string; a: string; tags?: string; link?: { to: string; label: string } }

const faqs: Faq[] = [
  { q: 'How do I add AIDL to Slack?', tags: 'install setup get started', a: 'Click “Add to Slack” on the AIDL website. AIDL creates an #aidl channel, makes you the Main admin and posts the Admin Center. Some workspaces need an owner or admin to approve new apps first.', link: { to: '/home', label: 'Go to the website' } },
  { q: 'What do admins need to do?', a: 'Follow the six steps in the Admin Center: create your AI policy, add co-admins, add your team, approve the cards, then press Start. Everyone in #aidl then gets their Welcome message.' },
  { q: 'Can more than one person be an admin?', tags: 'co-admin permissions rights main admin', a: 'Yes. The Main admin can add co-admins with only the rights they need, and is told about every change another admin makes — policy changes, card approvals and app decisions.' },
  { q: 'How do I add or remove people?', a: 'Channel membership is the switch. Add someone to #aidl and AIDL sets them up automatically. Remove them and their license is paused and cards stop. Add them back and everything continues where it stopped.' },
  { q: 'Why was someone removed from #aidl automatically?', a: 'Your plan has no free seats left. AIDL tells both the person and the Main admin. Upgrade your plan from the Admin Center or free a seat, then add them again.' },
  { q: 'A team member didn’t get their Welcome message.', a: 'Check they are in #aidl and that Start was pressed in the Admin Center, then ask them to look under Apps → AIDL in Slack. Still missing? Email support with their Slack name.' },
  { q: 'How long does it take to get a license?', a: 'About ten minutes. Each person agrees to the 14 policy points, learns the Traffic Light rule and the 5-rule Highway Code, creates an avatar and receives their AI Driving License.' },
  { q: 'How long is a license valid? How do I share it?', a: 'Licenses are valid for one year. Open the license message from AIDL in Slack to download or share it — anyone you share it with can verify it.' },
  { q: 'How do I change our AI policy?', a: 'Open the Admin Center in #aidl and choose the policy step, edit and publish the new version. AIDL keeps a record of which version each person agreed to.' },
  { q: 'Can we choose which learning cards are sent?', a: 'Yes. Nothing is sent until an admin approves it. Preview every card in the Admin Center, then approve, skip or swap it.' },
  { q: 'Will employees get lots of reminders?', tags: 'notifications nudge spam got it acknowledge', a: 'No. Cards arrive on your plan’s schedule in each person’s own time zone. If a card isn’t acknowledged with “Got it”, AIDL sends one reminder after 7 days — never more.' },
  { q: 'How do employees request a new AI app?', a: 'Use “Request an app” in AIDL. If the app is already allowed, AIDL answers straight away; otherwise an admin approves, rejects or asks a question, and the reply comes back by message.' },
  { q: 'Which plans are there?', tags: 'trial free basic enterprise price', a: 'Trial covers up to 5 users with the 12-card starter set (1 card a month). Basic adds more seats and 2 cards a week on topics you pick; Enterprise gets 4 cards a week across all 15 topics.', link: { to: '/pricing', label: 'See plans' } },
  { q: 'How do I upgrade, change or cancel my plan?', tags: 'subscription invoice payment refund seats pricing', a: 'Admins can upgrade from the Admin Center (Upgrade plan). To change or cancel a plan, or for invoices, email billing. Payments are processed securely by Stripe.' },
  { q: 'Does AIDL read our Slack messages?', a: 'No. AIDL cannot read channel history or conversations. It only sees its own messages and the buttons people press on them.' },
  { q: 'How is our data stored and protected?', a: 'Data travels over HTTPS and workspace tokens are encrypted. We store only what AIDL needs and never sell data or use it to train AI models.', link: { to: '/privacy', label: 'Read the Privacy Policy' } },
  { q: 'How do I remove AIDL and delete our data?', a: 'A Slack admin can remove AIDL from Slack → Settings → Manage apps → AIDL → Remove app. To delete your workspace’s data, email privacy from an admin account — we do it within 30 days.', tags: 'uninstall delete erase gdpr', link: { to: '/privacy', label: 'Data removal policy' } },
  { q: 'Does AIDL work in Microsoft Teams too?', a: 'Yes. The same admin and employee flow runs in Microsoft Teams as Adaptive Cards in an AIDL team channel and bot chats.' },
]

const query = ref('')
const shown = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return faqs
  // British and US spelling both find the license answers.
  const terms = q.replace(/licence/g, 'license').split(/\s+/)
  return faqs.filter((f) => {
    const text = (f.q + ' ' + f.a + ' ' + (f.tags || '')).toLowerCase()
    return terms.every((t) => text.includes(t))
  })
})

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style>
.su-hero{text-align:center}
.su-hero .sp-lede{margin:0 auto}
.su-search{display:flex;max-width:560px;margin:28px auto 0;border:3px solid var(--ink);box-shadow:5px 5px 0 var(--ink);background:var(--paper)}
.su-search input{flex:1;min-width:0;border:0;padding:13px 16px;font:inherit;font-size:16px;color:var(--ink);background:transparent;outline:none}
.su-search:focus-within{box-shadow:5px 5px 0 var(--red)}
.su-btn{border:0;border-left:3px solid var(--ink);background:var(--ink);color:var(--yellow);font-family:"Bungee",sans-serif;font-size:14px;padding:0 22px;cursor:pointer}
.su-btn:hover{color:var(--cream)}
.su-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.su-kicker{display:block;font-family:"JetBrains Mono",monospace;font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}
.su-channels{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin-top:20px}
.sp-root a.su-channel{display:flex;flex-direction:column;gap:8px;padding:22px;text-decoration:none;color:var(--ink);transition:transform .12s,box-shadow .12s}
.sp-root a.su-channel:hover{transform:translate(-2px,-2px);box-shadow:8px 8px 0 var(--ink);color:var(--ink)}
.su-ico{font-size:28px;line-height:1}
.su-channel b{font-size:18px}
.su-desc{font-size:15px;color:var(--muted);flex:1}
.su-mail{font-weight:700;font-size:14.5px;word-break:break-word;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:3px}
.su-note{margin:22px 0 0;font-size:15px;color:var(--muted)}
.su-faq{margin-top:64px;scroll-margin-top:90px}
.su-count{margin:0 0 16px;font-size:15px}
.su-clear{border:0;background:none;padding:0;font:inherit;font-weight:700;text-decoration:underline;cursor:pointer;color:var(--ink)}
.su-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:20px}
.su-q{padding:22px}
.su-q h3{margin:0 0 8px;font-size:18px;line-height:1.3}
.su-q p{margin:0;font-size:15.5px;line-height:1.6}
.su-empty{padding:24px;margin-top:20px}
.su-empty p{margin:6px 0 0}
@media(max-width:1000px){.su-channels{grid-template-columns:repeat(2,minmax(0,1fr))}.su-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){
.su-hero{text-align:left}
.su-search{margin-top:22px;box-shadow:4px 4px 0 var(--ink)}
.su-search input{padding:11px 12px;font-size:15px}
.su-btn{padding:0 14px;font-size:12px}
.su-channels,.su-grid{grid-template-columns:1fr;gap:16px}
.sp-root a.su-channel,.su-q{padding:18px}
.su-faq{margin-top:48px}
}
</style>
