<template>
<SitePageShell>
<header class="sp-hero">
<div class="sp-wrap">
<span class="sp-eb">Privacy &amp; data governance</span>
<h1 class="sp-h1">Privacy Policy</h1>
<p class="sp-lede">How AIDL (AI Driving License) collects, stores, keeps and removes information when your organization uses it in Slack.</p>
<p class="pv-updated">Last updated: {{ PRIVACY_UPDATED }}</p>
</div>
</header>

<main class="sp-main">
<div class="sp-wrap pv-layout">
<aside class="pv-toc sp-card" aria-label="On this page">
<b>On this page</b>
<ol><li v-for="s in sections" :key="s.id"><a :href="'#' + s.id" @click.prevent="goTo(s.id)">{{ s.label }}</a></li></ol>
</aside>

<article class="pv-body">
<section class="pv-summary sp-card">
<h2 class="sp-h2">The short version</h2>
<ul>
<li>We store only the Slack data AIDL needs to run your AI policy, training and licenses.</li>
<li>AIDL <strong>does not read, index or store your Slack channels or conversations</strong>. It only sees its own messages and the buttons people press on them.</li>
<li>We <strong>do not sell</strong> your data and <strong>do not use it to train AI models</strong>.</li>
<li>Workspace admins can ask us to delete their workspace's data at any time; we do it within 30 days.</li>
</ul>
</section>

<section id="overview">
<h2 class="sp-h2">1. Who we are</h2>
<p>AIDL is provided by {{ COMPANY_NAME }}, {{ COMPANY_ADDRESS }} ("AIDL", "we", "us"). This policy covers the AIDL Slack app and the AIDL website. When an organization installs AIDL, we process its employees' information on that organization's behalf, and the organization decides who takes part.</p>
</section>

<section id="permissions">
<h2 class="sp-h2">2. Slack permissions we request</h2>
<p>When a workspace adds AIDL, the app creates its own <strong>#aidl</strong> channel, posts and updates an Admin Center message there, and sends each member private messages. These are the permissions it asks for and why:</p>
<div class="pv-table"><table>
<thead><tr><th>Permission</th><th>Why AIDL needs it</th></tr></thead>
<tbody>
<tr><td><code>channels:manage</code> <code>channels:join</code> <code>channels:read</code></td><td>Create and join the #aidl channel and see who is in it — channel membership decides who gets a license.</td></tr>
<tr><td><code>chat:write</code> <code>im:write</code></td><td>Post the Admin Center and send each person their private Welcome, policy and learning-card messages.</td></tr>
<tr><td><code>users:read</code> <code>users:read.email</code></td><td>Show people's names, match them to their license, and use their time zone so cards arrive at a sensible hour.</td></tr>
<tr><td><code>files:write</code> <code>files:read</code></td><td>Send license and card images inside Slack.</td></tr>
<tr><td><code>openid</code> <code>email</code> <code>profile</code></td><td>"Sign in with Slack" on AIDL web pages.</td></tr>
</tbody>
</table></div>
<p>AIDL does not request permission to read channel history or message content.</p>
</section>

<section id="storage">
<h2 class="sp-h2">3. Data storage policy</h2>
<p>AIDL stores only the Slack data needed to deliver AI policy agreement, training and licensing:</p>
<ul>
<li><strong>Workspace:</strong> Slack workspace ID and name, the #aidl channel ID, the ID of the Admin Center message, and the workspace's bot access token (stored encrypted).</li>
<li><strong>People in #aidl:</strong> Slack user ID, display name, email address (where the scope is granted), time zone and profile picture.</li>
<li><strong>What admins set up:</strong> answers to the AI policy questions, each published policy version, co-admins and their rights, card approvals, allowed apps and plan choices.</li>
<li><strong>What employees do in AIDL:</strong> agreement to each policy point (with date and policy version), "Got it" acknowledgements of learning cards, Traffic Light votes and ratings, the avatar they create, and their license number and validity.</li>
<li><strong>App requests:</strong> the app or website named, what it is for and what data it would use, plus the admin's decision and reply.</li>
<li><strong>Billing:</strong> plan, seat count and payment status. Card payments are handled by Stripe — we never see or store full card numbers.</li>
<li><strong>Interactions:</strong> the button clicks and form entries people make on AIDL's own messages, used only to carry out that action.</li>
</ul>
<p><strong>What we don't store:</strong> AIDL does not read, index or store messages in your channels or direct messages between people, files people share with each other, or any Slack data outside the permissions listed above.</p>
<p><strong>Where it is stored:</strong> AIDL's database runs on MongoDB, the application on Render and the website on Vercel. Data travels over HTTPS, and workspace access tokens are encrypted before they are saved.</p>
</section>

<section id="retention">
<h2 class="sp-h2">4. Data retention policy</h2>
<ul>
<li><strong>While AIDL is installed:</strong> workspace and member data is kept for as long as the workspace uses AIDL, so the Admin Center, licenses and compliance records keep working.</li>
<li><strong>When someone leaves #aidl:</strong> their license is paused and cards stop. Their agreement and learning history is kept so the organization keeps its compliance record, until the workspace's data is deleted or the person asks us to delete it.</li>
<li><strong>Licenses</strong> are valid for one year from issue and are renewed as people keep up with their cards.</li>
<li><strong>Sign-in codes and sign-in state</strong> are short-lived and expire shortly after they are issued.</li>
<li><strong>Server logs</strong> are kept by our hosting provider for a limited period and used only to run and fix the service.</li>
<li><strong>Billing records</strong> are kept only as long as tax and accounting law requires.</li>
</ul>
</section>

<section id="removal">
<h2 class="sp-h2">5. Data archival / removal policy</h2>
<ul>
<li><strong>Uninstalling AIDL:</strong> a Slack admin can remove AIDL at any time from <em>Slack → Settings → Manage apps → AIDL → Remove app</em>. Slack revokes AIDL's access token immediately, so AIDL can no longer read from or post to the workspace.</li>
<li><strong>Deleting a workspace's data:</strong> workspace admins or account owners can email <a :href="'mailto:' + PRIVACY_EMAIL">{{ PRIVACY_EMAIL }}</a>. We delete the workspace's tokens, member data, policies, acknowledgements and app requests within 30 days and confirm by email. Billing records we must keep by law are retained only for that purpose.</li>
<li><strong>Deleting one person's data:</strong> employees can ask their organization's AIDL admin, or email us directly. We delete it within 30 days. Their license then stops verifying.</li>
<li><strong>Archiving:</strong> AIDL does not archive workspace data after deletion. Copies held in our providers' backups are removed as those backups expire on their normal schedule.</li>
</ul>
</section>

<section id="use">
<h2 class="sp-h2">6. How we use information</h2>
<ul>
<li>To run AIDL: build and publish your AI policy, deliver Welcome and learning-card messages, issue and renew licenses and keep the Admin Center up to date.</li>
<li>To give admins oversight of their own organization: progress, acknowledgements, app requests and coverage exports.</li>
<li>To keep the records an auditor may ask for — which policy version each person agreed to and when, and what they completed.</li>
<li>To send sign-in codes and service emails, answer support requests, prevent abuse and fix problems.</li>
</ul>
<p>We do not sell personal information, use it for advertising, or use it to train AI models.</p>
</section>

<section id="sharing">
<h2 class="sp-h2">7. Who can see it</h2>
<ul>
<li><strong>Your organization's AIDL admins</strong> see their team's agreements, license status, card acknowledgements and app requests.</li>
<li><strong>License holders choose who sees their license.</strong> A license shows the holder's name, avatar, license number and validity; anyone it is shared with can view and verify it.</li>
<li><strong>Sub-processors</strong> who host and run AIDL for us, only for that purpose:</li>
</ul>
<div class="pv-table"><table>
<thead><tr><th>Provider</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Slack</td><td>Where the app runs; Sign in with Slack</td></tr>
<tr><td>Microsoft</td><td>Microsoft Teams version and Microsoft sign-in</td></tr>
<tr><td>Render</td><td>Application hosting</td></tr>
<tr><td>Vercel</td><td>Website hosting</td></tr>
<tr><td>MongoDB</td><td>Database</td></tr>
<tr><td>SendGrid</td><td>Sign-in code and service emails</td></tr>
<tr><td>Stripe</td><td>Payments</td></tr>
</tbody>
</table></div>
<p>We may also share information if the law requires it or to protect people's rights and safety.</p>
</section>

<section id="security">
<h2 class="sp-h2">8. Security</h2>
<p>Data is sent over HTTPS, workspace tokens are encrypted, and access to production systems is limited to the people who need it. No system is perfectly secure; if a breach affects your data, we will tell your workspace admins promptly. If something in AIDL looks wrong, email <a :href="'mailto:' + SUPPORT_EMAIL">{{ SUPPORT_EMAIL }}</a>.</p>
</section>

<section id="rights">
<h2 class="sp-h2">9. Your rights</h2>
<p>Depending on where you live (for example under the GDPR in the EU and UK), you can ask to access, correct, export or delete your personal data, or object to how it is used. Email <a :href="'mailto:' + PRIVACY_EMAIL">{{ PRIVACY_EMAIL }}</a> or ask your organization's AIDL admin. We reply within 30 days.</p>
</section>

<section id="other">
<h2 class="sp-h2">10. Transfers, children and changes</h2>
<ul>
<li><strong>International transfers:</strong> our providers may process data in the United States and other countries. Where required, we rely on safeguards such as Standard Contractual Clauses.</li>
<li><strong>Children:</strong> the AIDL Slack app is built for workplaces and is not intended for children.</li>
<li><strong>Changes:</strong> if we make important changes, we update the date at the top and let workspace admins know.</li>
</ul>
</section>

<section id="contact">
<h2 class="sp-h2">11. Contact</h2>
<p>Privacy questions or requests: <a :href="'mailto:' + PRIVACY_EMAIL">{{ PRIVACY_EMAIL }}</a><br />{{ COMPANY_NAME }}, {{ COMPANY_ADDRESS }}<br />Need help using AIDL? Visit <RouterLink to="/support">Support</RouterLink>.</p>
</section>
</article>
</div>
</main>
</SitePageShell>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SitePageShell from '../components/SitePageShell.vue'
import { COMPANY_ADDRESS, COMPANY_NAME, PRIVACY_EMAIL, PRIVACY_UPDATED, SUPPORT_EMAIL } from '../lib/siteContact'

const sections = [
  { id: 'overview', label: 'Who we are' },
  { id: 'permissions', label: 'Slack permissions' },
  { id: 'storage', label: 'Data storage policy' },
  { id: 'retention', label: 'Data retention policy' },
  { id: 'removal', label: 'Data archival / removal' },
  { id: 'use', label: 'How we use information' },
  { id: 'sharing', label: 'Who can see it' },
  { id: 'security', label: 'Security' },
  { id: 'rights', label: 'Your rights' },
  { id: 'other', label: 'Transfers, children, changes' },
  { id: 'contact', label: 'Contact' },
]

// Hash links would go through the router; scroll in place instead.
function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style>
.pv-updated{margin:18px 0 0;font-family:"JetBrains Mono",monospace;font-size:13px;letter-spacing:.04em}
.pv-layout{display:grid;grid-template-columns:250px minmax(0,1fr);gap:44px;align-items:start}
.pv-toc{position:sticky;top:96px;padding:18px 20px;font-size:14.5px}
.pv-toc b{font-family:"Bungee",sans-serif;font-weight:400;font-size:14px}
.pv-toc ol{margin:10px 0 0;padding-left:20px}
.pv-toc li{margin:5px 0}
.pv-toc a{text-decoration:none}
.pv-body section{scroll-margin-top:96px;margin-bottom:44px}
.pv-body p{margin:0 0 12px}
.pv-body ul{margin:0 0 12px;padding-left:22px}
.pv-body li{margin:7px 0}
.pv-summary{padding:24px 28px}
.pv-summary ul{margin:0}
.pv-table{overflow-x:auto;margin:6px 0 14px}
.pv-table table{width:100%;border-collapse:collapse;font-size:15.5px;background:var(--paper)}
.pv-table th,.pv-table td{text-align:left;vertical-align:top;padding:10px 14px;border:2px solid var(--ink)}
.pv-table th{background:var(--cream-2)}
.pv-table code{font-family:"JetBrains Mono",monospace;font-size:13px;background:var(--cream-2);padding:1px 5px;margin:2px 2px 2px 0;display:inline-block}
@media(max-width:900px){
.pv-layout{grid-template-columns:1fr;gap:28px}
.pv-toc{position:static}
.pv-toc ol{columns:2;column-gap:24px}
}
@media(max-width:560px){
.pv-toc ol{columns:1}
.pv-summary{padding:18px}
.pv-body section{margin-bottom:34px}
.pv-table th,.pv-table td{padding:8px 10px}
}
</style>
