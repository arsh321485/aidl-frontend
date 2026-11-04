<template>
<SitePageShell>
<header class="sp-hero">
<div class="sp-wrap">
<span class="sp-eb">Legal</span>
<h1 class="sp-h1">Terms of Service</h1>
<p class="sp-lede">The rules for using AIDL (AI Driving Licence) — the Slack app, the Microsoft Teams app and the AIDL website.</p>
<p class="tm-updated">Last updated: {{ TERMS_UPDATED }}</p>
</div>
</header>

<main class="sp-main">
<div class="sp-wrap tm-layout">
<aside class="tm-toc sp-card" aria-label="On this page">
<b>On this page</b>
<ol><li v-for="s in sections" :key="s.id"><a :href="'#' + s.id" @click.prevent="goTo(s.id)">{{ s.label }}</a></li></ol>
</aside>

<article class="tm-body">
<section class="tm-summary sp-card">
<h2 class="sp-h2">The short version</h2>
<ul>
<li>AIDL helps your organization write its AI policy, get every employee to agree to it and issue each one an AI Driving Licence, inside Slack or Microsoft Teams.</li>
<li>Your organization owns its policy, its data and the decisions its admins make. We run the service and keep it secure.</li>
<li>AIDL is a training and record-keeping tool. It is <strong>not legal advice</strong>, and an AIDL licence is not a government or professional certification.</li>
<li>Paid plans are billed per learner through Stripe; admins are free. You can cancel or remove AIDL at any time.</li>
</ul>
</section>

<section id="acceptance">
<h2 class="sp-h2">1. Agreeing to these terms</h2>
<p>AIDL is provided by {{ COMPANY_NAME }}, {{ COMPANY_ADDRESS }} ("AIDL", "we", "us"). By installing AIDL in a Slack workspace or Microsoft Teams tenant, signing in to the AIDL website, or using any part of the service, you agree to these terms.</p>
<p>If you install or use AIDL for an organization, you confirm you are allowed to accept these terms for it, and "you" means that organization ("Customer"). People in the organization who take part as admins or learners ("Users") use AIDL under the Customer's account.</p>
</section>

<section id="service">
<h2 class="sp-h2">2. The service</h2>
<p>AIDL lets admins build an AI acceptable-use policy one card at a time (or upload an existing policy), choose which AI and IT apps people may use, approve learning cards and invite their team. Users receive the policy, the Highway Code and the Traffic Light Check as private messages, agree to them and receive an AI Driving Licence valid for one year, followed by awareness cards on the plan's schedule. Admins can see progress and export coverage records.</p>
<p>We may improve, change or retire features over time. If we remove something that is central to a paid plan, we will tell your admins in advance.</p>
</section>

<section id="accounts">
<h2 class="sp-h2">3. Admins and users</h2>
<ul>
<li>The person who installs AIDL becomes the <strong>Master admin</strong>. Admins can add other admins and give them only the rights they hold themselves.</li>
<li>The Customer decides who takes part. Adding someone to the AIDL channel or team adds them to the programme; removing them pauses their licence and cards.</li>
<li>The Customer is responsible for its admins' actions and for keeping access to its Slack or Teams workspace secure.</li>
<li>Sign-in to the AIDL website uses Slack, Microsoft or a one-time email code. Do not share sign-in codes.</li>
</ul>
</section>

<section id="responsibilities">
<h2 class="sp-h2">4. Your responsibilities</h2>
<ul>
<li><strong>Your policy is yours.</strong> The Customer decides the content of its AI policy, which apps are allowed and which cards are approved, and is responsible for making sure they suit its business and meet the laws that apply to it.</li>
<li><strong>Telling your people.</strong> The Customer is responsible for informing employees that it uses AIDL and for having a lawful basis to process their information through it.</li>
<li><strong>Accurate information.</strong> Keep company details, plan seats and billing details accurate.</li>
</ul>
</section>

<section id="acceptable-use">
<h2 class="sp-h2">5. Acceptable use</h2>
<p>You and your Users must not:</p>
<ul>
<li>use AIDL to break the law, or to harass, discriminate against or monitor people beyond what AIDL is designed to do;</li>
<li>upload content you have no right to use, or that contains malware, or highly sensitive personal data that AIDL does not need;</li>
<li>try to break, probe, overload or get around the security or limits of AIDL, Slack or Microsoft Teams (responsible security reports are welcome — see section 15);</li>
<li>copy, resell, rent or reverse-engineer the service, or use it to build a competing product;</li>
<li>create, alter or misrepresent AIDL licences, or present someone as licensed when they are not.</li>
</ul>
<p>You must also follow the Slack and Microsoft terms that apply to your workspace.</p>
</section>

<section id="ai">
<h2 class="sp-h2">6. AI-generated content</h2>
<p>Some features use AI models — for example, turning an uploaded acceptable-use policy into draft policy cards. AI output can be incomplete or wrong. That is why nothing reaches your team until an admin reviews and approves it; the Customer is responsible for the content it approves.</p>
<p>Text you upload for these features is sent to our AI provider only to produce the drafts. We do not use your data to train AI models.</p>
</section>

<section id="billing">
<h2 class="sp-h2">7. Plans, billing and cancellation</h2>
<ul>
<li><strong>Trial:</strong> free, with the limits shown on the <RouterLink to="/pricing">Pricing</RouterLink> page (1 admin, up to 5 users, 12 cards).</li>
<li><strong>Paid plans</strong> (Basic and Enterprise) are charged per learner per month at the prices on the Pricing page. Admins are free. A licensed person keeps their seat for the licence year.</li>
<li><strong>Payments</strong> are handled by Stripe. Plans renew automatically until cancelled. Prices exclude taxes, which are added where required.</li>
<li><strong>Changes:</strong> upgrades take effect straight away. If we change prices, we will tell your admins at least 30 days before the change applies to you.</li>
<li><strong>Cancellation:</strong> you can cancel at any time; the plan stays active until the end of the period already paid. Fees already paid are not refunded unless the law requires it or we say otherwise in writing.</li>
<li><strong>Unpaid fees:</strong> if payment fails and is not fixed after we let you know, we may move the workspace back to the Trial plan or pause the service.</li>
</ul>
<p>Billing questions: <a :href="'mailto:' + BILLING_EMAIL">{{ BILLING_EMAIL }}</a>.</p>
</section>

<section id="licences">
<h2 class="sp-h2">8. AIDL licences</h2>
<p>An AIDL licence records that a person agreed to their organization's AI policy and completed AIDL's onboarding on the dates shown. It is valid for one year from issue and can be checked by its licence number. It is not a government, academic or professional qualification, and it does not on its own prove that an organization complies with any law.</p>
<p>A licence stops verifying if the person's data is deleted, or if the Customer's data is deleted.</p>
</section>

<section id="data">
<h2 class="sp-h2">9. Your data and privacy</h2>
<p>The Customer owns its data: its policy, app lists, its Users' agreements and records, and anything it uploads ("Customer Data"). You give us permission to host, process and display Customer Data only to run, secure and support AIDL for you.</p>
<p>How we collect, store, keep and delete information — including Slack permissions, sub-processors and deletion requests — is set out in our <RouterLink to="/privacy">Privacy Policy</RouterLink>, which forms part of these terms.</p>
</section>

<section id="ip">
<h2 class="sp-h2">10. Our intellectual property</h2>
<p>AIDL's software, design, the Highway Code, Traffic Light Check, learning cards, licence designs and the AIDL name and logo belong to us or our licensors. While you use AIDL we give you a limited, non-exclusive, non-transferable right to use them inside the service for your organization's internal purposes. Users may download and share their own licence.</p>
<p>If you send us feedback or suggestions, we may use them without any obligation to you.</p>
</section>

<section id="third-party">
<h2 class="sp-h2">11. Slack, Microsoft and other services</h2>
<p>AIDL runs inside Slack and Microsoft Teams and relies on providers listed in the Privacy Policy. Those services are provided by their own companies under their own terms, and we are not responsible for them. If Slack or Microsoft changes or stops a feature AIDL depends on, we may have to change AIDL to match.</p>
</section>

<section id="termination">
<h2 class="sp-h2">12. Ending the service</h2>
<ul>
<li><strong>You</strong> can stop at any time by removing AIDL from your workspace (Slack → Settings → Manage apps → AIDL → Remove app) and cancelling any paid plan.</li>
<li><strong>We</strong> may suspend or end access if these terms are seriously broken, if needed to protect the service or other customers, or if the law requires it. Where we reasonably can, we will warn your admins first.</li>
<li><strong>After it ends</strong>, you can ask us to delete your data as described in the Privacy Policy. Sections that by their nature should continue (such as 9, 10, 13, 14 and 16) still apply.</li>
</ul>
</section>

<section id="disclaimers">
<h2 class="sp-h2">13. Disclaimers</h2>
<p>We work to keep AIDL available, accurate and secure, but the service is provided "as is" and "as available". As far as the law allows, we do not promise that it will be uninterrupted or error-free, or that it will make your organization compliant with any law or regulation. Information about AI rules on the AIDL website, including the requirements page, is general reference material and not legal advice.</p>
</section>

<section id="liability">
<h2 class="sp-h2">14. Limitation of liability</h2>
<p>As far as the law allows, neither party is liable for indirect, incidental, special or consequential losses, or for lost profits, revenue or data, arising from these terms or the service. Our total liability for any claim is limited to the amount the Customer paid us for AIDL in the 12 months before the claim (or USD 100 if nothing was paid). Nothing in these terms limits liability that cannot be limited by law.</p>
<p>The Customer will cover our reasonable losses from claims made by third parties because of content the Customer uploaded or approved, or because the Customer broke these terms.</p>
</section>

<section id="changes">
<h2 class="sp-h2">15. Changes, security reports and general terms</h2>
<ul>
<li><strong>Changes to these terms:</strong> if we make important changes, we update the date at the top and tell workspace admins. Continuing to use AIDL after the change means you accept it.</li>
<li><strong>Security reports:</strong> if you find a security problem in AIDL, email <a :href="'mailto:' + SUPPORT_EMAIL">{{ SUPPORT_EMAIL }}</a>. Please give us a reasonable time to fix it before sharing it publicly.</li>
<li><strong>Governing law:</strong> these terms are governed by the laws of the State of Delaware, USA, and disputes go to the courts there, unless the law where you are based requires otherwise.</li>
<li><strong>Other:</strong> you may not transfer these terms without our consent; we may transfer them as part of a merger or sale of the business. If part of these terms cannot be enforced, the rest still applies. These terms, the Privacy Policy and any order you accept are the whole agreement about AIDL.</li>
</ul>
</section>

<section id="contact">
<h2 class="sp-h2">16. Contact</h2>
<p>Questions about these terms: <a :href="'mailto:' + SUPPORT_EMAIL">{{ SUPPORT_EMAIL }}</a><br />Billing: <a :href="'mailto:' + BILLING_EMAIL">{{ BILLING_EMAIL }}</a> · Privacy: <a :href="'mailto:' + PRIVACY_EMAIL">{{ PRIVACY_EMAIL }}</a><br />{{ COMPANY_NAME }}, {{ COMPANY_ADDRESS }}<br />Need help using AIDL? Visit <RouterLink to="/support">Support</RouterLink>.</p>
</section>
</article>
</div>
</main>
</SitePageShell>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SitePageShell from '../components/SitePageShell.vue'
import { BILLING_EMAIL, COMPANY_ADDRESS, COMPANY_NAME, PRIVACY_EMAIL, SUPPORT_EMAIL, TERMS_UPDATED } from '../lib/siteContact'

const sections = [
  { id: 'acceptance', label: 'Agreeing to these terms' },
  { id: 'service', label: 'The service' },
  { id: 'accounts', label: 'Admins and users' },
  { id: 'responsibilities', label: 'Your responsibilities' },
  { id: 'acceptable-use', label: 'Acceptable use' },
  { id: 'ai', label: 'AI-generated content' },
  { id: 'billing', label: 'Plans, billing, cancellation' },
  { id: 'licences', label: 'AIDL licences' },
  { id: 'data', label: 'Your data and privacy' },
  { id: 'ip', label: 'Our intellectual property' },
  { id: 'third-party', label: 'Slack, Microsoft, others' },
  { id: 'termination', label: 'Ending the service' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'changes', label: 'Changes and general terms' },
  { id: 'contact', label: 'Contact' },
]

// Hash links would go through the router; scroll in place instead.
function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style>
.tm-updated{margin:18px 0 0;font-family:"JetBrains Mono",monospace;font-size:13px;letter-spacing:.04em}
.tm-layout{display:grid;grid-template-columns:250px minmax(0,1fr);gap:44px;align-items:start}
.tm-toc{position:sticky;top:96px;padding:18px 20px;font-size:14.5px}
.tm-toc b{font-family:"Bungee",sans-serif;font-weight:400;font-size:14px}
.tm-toc ol{margin:10px 0 0;padding-left:20px}
.tm-toc li{margin:5px 0}
.tm-toc a{text-decoration:none}
.tm-body section{scroll-margin-top:96px;margin-bottom:44px}
.tm-body p{margin:0 0 12px}
.tm-body ul{margin:0 0 12px;padding-left:22px}
.tm-body li{margin:7px 0}
.tm-summary{padding:24px 28px}
.tm-summary ul{margin:0}
@media(max-width:900px){
.tm-layout{grid-template-columns:1fr;gap:28px}
.tm-toc{position:static}
.tm-toc ol{columns:2;column-gap:24px}
}
@media(max-width:560px){
.tm-toc ol{columns:1}
.tm-summary{padding:18px}
.tm-body section{margin-bottom:34px}
}
</style>
