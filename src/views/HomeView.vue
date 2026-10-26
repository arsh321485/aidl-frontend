<template>
<div class="lp-root" :class="{ 'lp-pf-teams': platform === 'teams' }">
<nav class="lp-nav" ref="navEl">
<div class="lp-wrap lp-nav-in">
<a class="lp-brand" href="#"><img class="lp-bm" :src="aidlLogo" alt="AIDL logo" /><span>AIDL</span></a>
<div class="lp-nl"><a v-for="l in navLinks" :key="l.id" :href="'#' + l.id" :class="{ 'lp-active': activeSection === l.id }" @click="activeSection = l.id">{{ l.label }}</a><RouterLink to="/plans">Pricing</RouterLink></div>
<div class="lp-ncta"><span class="lp-pf" role="group" aria-label="Platform"><button type="button" :aria-pressed="platform === 'slack'" @click="setPlatform('slack')"><i></i>Slack</button><button type="button" :aria-pressed="platform === 'teams'" @click="setPlatform('teams')"><i></i>Teams</button></span><a class="lp-btn lp-y" href="#start" @click.prevent="addTo(platform)"><span class="lp-v-s">Add to Slack</span><span class="lp-v-t">Add to Teams</span><span class="lp-arr">→</span></a></div>
<button type="button" class="lp-burger" :class="{ 'lp-open': menuOpen }" :aria-expanded="menuOpen" aria-controls="lp-mnav" aria-label="Menu" @click="menuOpen = !menuOpen"><i></i><i></i><i></i></button>
</div>
<div v-show="menuOpen" id="lp-mnav" class="lp-mnav">
<div class="lp-wrap"><a v-for="l in navLinks" :key="l.id" :href="'#' + l.id" :class="{ 'lp-active': activeSection === l.id }" @click="activeSection = l.id; menuOpen = false">{{ l.label }}</a><RouterLink to="/plans" @click="menuOpen = false">Pricing</RouterLink></div>
</div>
</nav>

<section class="lp-hero">
<div class="lp-sun"></div><div class="lp-cloud lp-c1"></div><div class="lp-cloud lp-c2"></div><div class="lp-cloud lp-c3"></div>
<div class="lp-mtn lp-m1"></div><div class="lp-mtn lp-m2"></div><div class="lp-mtn lp-m3"></div>
<div class="lp-road"></div>
<div class="lp-road-dash"><svg viewBox="0 0 1440 484" preserveAspectRatio="none"><path class="lp-dash-stroke" d="M 720 0 L 720 484"></path><path class="lp-dash-stroke" d="M 720 0 L 200 484" style="animation-duration:1.4s"></path><path class="lp-dash-stroke" d="M 720 0 L 1240 484" style="animation-duration:1.4s"></path></svg></div>
<div class="lp-road-sign lp-rs-1"><div class="lp-plate lp-diamond"><span>NEXT EXIT<br>AI POLICY</span></div><div class="lp-post"></div></div>
<div class="lp-road-sign lp-rs-2"><div class="lp-plate lp-round lp-green">START</div><div class="lp-post"></div></div>
<div class="lp-road-sign lp-rs-3"><div class="lp-plate lp-white">AGREE<br>LEARN<br>LICENSE</div><div class="lp-post"></div></div>
<div class="lp-road-sign lp-rs-4"><div class="lp-plate lp-red">10 MIN<br>AHEAD</div><div class="lp-post"></div></div>
<div class="lp-hero-headline">
<div class="lp-hero-eyebrow"><span class="lp-blink"></span><span class="lp-v-s">NOW LIVE IN SLACK</span><span class="lp-v-t">NOW LIVE IN MICROSOFT TEAMS</span></div>
<h1 class="lp-hero-title">LICENSE TO<span class="lp-l2">DRIVE&nbsp;AI</span></h1>
<p class="lp-hero-sub">Write your AI policy, get every employee to agree to it point by point, and issue each one a verifiable AI Driving License — about ten minutes per person, without leaving <span class="lp-v-s">Slack</span><span class="lp-v-t">Teams</span>.</p>
</div>
<div class="lp-dashboard"><div class="lp-dash-bg"></div>
<div class="lp-dash-inner">
<div class="lp-gauge-cluster">
<div class="lp-gauge lp-kmh"><div class="lp-tick" style="transform:rotate(0deg)"></div><div class="lp-tick" style="transform:rotate(30deg)"></div><div class="lp-tick" style="transform:rotate(60deg)"></div><div class="lp-tick" style="transform:rotate(90deg)"></div><div class="lp-tick" style="transform:rotate(-30deg)"></div><div class="lp-tick" style="transform:rotate(-60deg)"></div><div class="lp-tick" style="transform:rotate(-90deg)"></div><div class="lp-needle"></div><div class="lp-center"></div><div class="lp-label">AGREED · 8/12</div></div>
<div class="lp-gauge lp-lvl"><div class="lp-tick" style="transform:rotate(-60deg)"></div><div class="lp-tick" style="transform:rotate(-30deg)"></div><div class="lp-tick" style="transform:rotate(0deg)"></div><div class="lp-tick" style="transform:rotate(30deg)"></div><div class="lp-tick" style="transform:rotate(60deg)"></div><div class="lp-needle"></div><div class="lp-center"></div><div class="lp-label">ACK · 81%</div></div>
</div>
<div class="lp-wheel"><div class="lp-wheel-stitch"></div><div class="lp-wheel-hub"><div class="lp-wheel-hub-inner"><img :src="aidlLogo" alt="AIDL logo" /></div></div></div>
<div class="lp-infotainment">
<div class="lp-row"><span>ADMIN CENTER</span><span>● LIVE</span></div>
<div class="lp-big">STEP 3 OF 6</div>
<div class="lp-row"><span>Add team</span><span>3 seats free</span></div>
<div class="lp-bar"><i></i></div>
<div class="lp-row" style="margin-top:14px"><span>NEXT</span><span>APPROVE CARDS</span></div>
</div>
</div></div>
</section>

<section class="lp-band" style="background:var(--cream-2)">
<div class="lp-wrap lp-acp">
<div>
<span class="lp-eb">▼ THE ADMIN CENTER</span>
<h2 class="lp-h2">One message runs the whole road.</h2>
<p class="lp-lede">AIDL posts a single Admin Center in its own channel and keeps updating it in place — plan, seats, progress and the next step to take. The channel never fills up.</p>
<div class="lp-hstats"><div><b>10 MIN</b><span>TO LICENSED</span></div><div><b>14</b><span>POLICY POINTS</span></div><div><b>1</b><span>CHANNEL MESSAGE</span></div></div>
</div>
<div class="lp-win" aria-label="AIDL Admin Center">
<div class="lp-win-sb"><div class="lp-ws">Northwind</div><div class="lp-sec"><span class="lp-v-s">Channels</span><span class="lp-v-t">Teams › AIDL</span></div><div class="lp-ch"><span class="lp-v-s"># general</span><span class="lp-v-t">Announcements</span></div><div class="lp-ch lp-on"><span class="lp-v-s"># aidl</span><span class="lp-v-t">General</span></div><div class="lp-ch"><span class="lp-v-s"># design</span><span class="lp-v-t">Design</span></div><div class="lp-ch"><span class="lp-v-s"># sales</span><span class="lp-v-t">Sales</span></div><div class="lp-sec">Apps</div><div class="lp-ch">AIDL</div></div>
<div class="lp-win-main">
<div class="lp-win-top"><span class="lp-v-s"># aidl</span><span class="lp-v-t">AIDL › General</span> <small>· 14 members</small><span class="lp-pin"><span class="lp-v-s">PINNED</span><span class="lp-v-t">ADAPTIVE CARD</span> · UPDATES IN PLACE</span></div>
<div class="lp-msg"><span class="lp-av">AI</span><div style="flex:1;min-width:0">
<div class="lp-mh"><strong>AIDL</strong><span class="lp-app"><span class="lp-v-s">APP</span><span class="lp-v-t">BOT</span></span><span class="lp-mt">9:02 AM · edited</span></div>
<div class="lp-ac">
<div class="lp-ac-hd"><span class="lp-d">AIDL ADMIN CENTER</span><span class="lp-m">MAIN ADMIN</span></div>
<div class="lp-ac-plan"><span>Plan <b>Team</b></span><span><b>48</b> cards</span><span><b>2</b> / week</span><span><b>12 of 15</b> users</span></div>
<div class="lp-prog"><div class="lp-bar"><i style="width:33%"></i></div><div class="lp-lb">2 of 6 setup steps done</div></div>
<div class="lp-steps">
<div v-for="(s, i) in heroSteps" :key="s.title" class="lp-st" :class="'lp-' + s.state"><span class="lp-dot">{{ s.state === 'done' ? '✓' : s.state === 'now' ? i + 1 : '' }}</span><div class="lp-tx">{{ i + 1 }}. {{ s.title }}<small v-if="s.note">{{ s.note }}</small></div><span v-if="s.action" class="lp-sb lp-pri">{{ s.action }}</span></div>
</div>
</div>
</div></div>
</div>
</div>
</div></section>

<div class="lp-mq" aria-hidden="true"><div class="lp-mq-t"><span>AI POLICY IN 15 GUIDED PAGES</span><i>●</i><span>AGREED POINT BY POINT</span><i>●</i><span>LICENSED IN 10 MINUTES</span><i>●</i><span>NOTHING SENT UNTIL APPROVED</span><i>●</i><span>COVERAGE EXPORT IN ONE CLICK</span><i>●</i><span>AI POLICY IN 15 GUIDED PAGES</span><i>●</i><span>AGREED POINT BY POINT</span><i>●</i><span>LICENSED IN 10 MINUTES</span><i>●</i><span>NOTHING SENT UNTIL APPROVED</span><i>●</i><span>COVERAGE EXPORT IN ONE CLICK</span><i>●</i></div></div>

<section class="lp-band" id="how">
<div class="lp-wrap">
<span class="lp-eb">▼ HOW IT WORKS</span>
<h2 class="lp-h2">One channel. Two seats in the car.</h2>
<p class="lp-lede">Admins steer from a single Admin Center message that keeps updating instead of flooding the channel. Employees get everything privately, one card at a time.</p>
<div class="lp-sides">
<div class="lp-side lp-k"><span class="lp-tag">ADMIN · THE INSTRUCTOR</span><h3>Set the rules, then watch the road.</h3><p>Click <span class="lp-v-s">“Add to Slack”</span><span class="lp-v-t">“Add to Teams”</span> and AIDL creates its own <span class="lp-v-s">#aidl channel</span><span class="lp-v-t">AIDL team and channel</span>, makes you Main admin and posts your Admin Center. Six steps unlock one after another.</p>
<ol><li>Create and approve your AI policy</li><li>Add co-admins with only the rights they need</li><li>Add your team, up to your seats</li><li>Approve the cards before anything is sent</li><li>Start — everyone gets their Welcome</li><li>Track licences and card reads</li></ol></div>
<div class="lp-side"><span class="lp-tag">EMPLOYEE · THE DRIVER</span><h3>Ten minutes to road-ready.</h3><p>A private Welcome message walks each person through three cards. Finish them, save an avatar, and the licence arrives — valid for one year.</p>
<ol><li>Open the Welcome card</li><li>Agree to the 14 policy points</li><li>Learn the Traffic Light rule</li><li>Learn the 5-rule Highway Code</li><li>Create an avatar</li><li>Download or share the licence</li></ol></div>
</div>
</div>
</section>

<section class="lp-band lp-dark" id="admins">
<div class="lp-wrap">
<span class="lp-eb">▼ FOR ADMINS</span>
<h2 class="lp-h2">Six steps. One message.</h2>
<p class="lp-lede" style="color:#e9e0c4">Every step lives in the same Admin Center. Pick one to see what it looks like.</p>
<div class="lp-stp">
<div class="lp-stl" role="tablist">
<button v-for="(d, i) in ADMIN" :key="i" type="button" class="lp-sbtn" role="tab" :aria-selected="i === adminStep" @click="adminStep = i"><span class="lp-n"><span>{{ i + 1 }}</span></span><span><b v-html="d.t"></b><small v-html="d.s"></small></span></button>
</div>
<div class="lp-pane"><div class="lp-det"><div class="lp-det-hd"><span class="lp-av" style="width:24px;height:24px;font-size:9px;border-radius:4px">AI</span>AIDL Admin Center<span class="lp-m">STEP {{ adminStep + 1 }} OF {{ ADMIN.length }}</span></div><div class="lp-det-body">
<h4 v-html="adminCur.h"></h4><p class="lp-why" v-html="adminCur.w"></p><div v-html="adminCur.m"></div>
<ul v-if="adminCur.f" class="lp-facts"><li v-for="x in adminCur.f" :key="x" v-html="x"></li></ul>
</div></div></div>
</div>
</div>
</section>

<section class="lp-band" id="drivers">
<div class="lp-wrap">
<span class="lp-eb">▼ FOR YOUR TEAM</span>
<h2 class="lp-h2">From Welcome to licence.</h2>
<p class="lp-lede">Each step is a private message that updates in place, with a progress bar — not a course portal, not a login.</p>
<div class="lp-stp">
<div class="lp-stl" role="tablist">
<button v-for="(d, i) in USER" :key="i" type="button" class="lp-sbtn" role="tab" :aria-selected="i === userStep" @click="userStep = i"><span class="lp-n"><span>{{ i + 1 }}</span></span><span><b v-html="d.t"></b><small v-html="d.s"></small></span></button>
</div>
<div class="lp-pane"><div class="lp-det"><div class="lp-det-hd"><span class="lp-av" style="width:24px;height:24px;font-size:9px;border-radius:4px">AI</span>AIDL · <span class="lp-v-s">direct message</span><span class="lp-v-t">bot chat</span><span class="lp-m">STOP {{ userStep + 1 }} OF {{ USER.length }}</span></div><div class="lp-det-body">
<h4 v-html="userCur.h"></h4><p class="lp-why" v-html="userCur.w"></p><div v-html="userCur.m"></div>
<ul v-if="userCur.f" class="lp-facts"><li v-for="x in userCur.f" :key="x" v-html="x"></li></ul>
</div></div></div>
</div>
</div>
</section>

<section class="lp-band" style="background:var(--cream-2)">
<div class="lp-wrap">
<span class="lp-eb">▼ AFTER THE LICENCE</span>
<h2 class="lp-h2">The learning keeps arriving.</h2>
<p class="lp-lede">The licence is the start. Short learning cards follow on your plan’s schedule, and everyone keeps their own garage of what they’ve read.</p>
<div class="lp-g3">
<div class="lp-tile"><span class="lp-sign"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="13" rx="2"></rect><path d="M10.4 8.6 L15 11 L10.4 13.4 Z"></path><path d="M8 20.5 h8"></path></svg></span><h3>Learning cards</h3><p>The first card lands right after the licence; the rest follow the plan, in each person’s own time zone.</p><ul><li>“Card 5 of 48” with topic, picture and company info</li><li>“Got it” turns into “Acknowledged · 22 Oct” — the admin sees it</li><li>One reminder after 7 days, never more</li></ul></div>
<div class="lp-tile"><span class="lp-sign"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4.5" width="17" height="15" rx="1.5"></rect><path d="M8.6 4.5 V19.5"></path><path d="M11.4 9.2 h6.4"></path><path d="M11.4 12.6 h6.4"></path><path d="M11.4 16 h4.4"></path><path d="M6 9.2 h.01"></path><path d="M6 12.6 h.01"></path><path d="M6 16 h.01"></path></svg></span><h3>My cards</h3><p>Every card received so far, with a nudge for the ones still waiting — “7 cards still need your Got it.”</p><ul><li>Search by words; filter by read, topic, month or latest 2/5/10</li><li>Card view: one at a time, Previous / Next</li><li>List view: 10 per page, grouped by month</li></ul></div>
<div class="lp-tile"><span class="lp-sign"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21 V13"></path><path d="M12 13 L6 7"></path><path d="M12 13 L18 7"></path><path d="M6 7 h3.1"></path><path d="M6 7 v3.1"></path><path d="M18 7 h-3.1"></path><path d="M18 7 v3.1"></path></svg></span><h3>Request an app</h3><p>Name the app, the site, what it’s for and what data it would touch. AIDL answers before an admin has to.</p><ul><li>Already allowed? “Go ahead.”</li><li>Already requested? You’re added to that request</li><li>Otherwise it goes to an admin, and the answer comes back by message</li></ul></div>
</div>
</div>
</section>

<section class="lp-band" id="cards">
<div class="lp-wrap">
<span class="lp-eb">▼ THE CARDS</span>
<h2 class="lp-h2">See the cards your team will get.</h2>
<p class="lp-lede">{{ LIBRARY_SIZE }} short cards across {{ CARD_TOPICS.length }} topics. Pick a plan and your topics to preview what lands in Slack or Teams.</p>
<div class="lp-pp" role="radiogroup" aria-label="Plan"><button v-for="p in PLANS" :key="p.key" type="button" role="radio" class="lp-pp-tab" :aria-checked="plan === p.key" @click="setPlan(p.key)"><b>{{ p.label }}</b><span class="lp-pp-n">{{ p.cards }} cards</span><span class="lp-pp-c">{{ p.cadence }}</span><span class="lp-pp-t">{{ p.topics }}</span></button></div>
<div class="lp-tp-bar"><span class="lp-tp-lbl">{{ topicNote }}</span><template v-if="plan === 'basic'"><button type="button" class="lp-tp-act" @click="pickAllTopics">Pick all</button><button type="button" class="lp-tp-act" :disabled="!pickedTopics.length" @click="clearTopics">Clear</button></template></div>
<div id="lp-topics" class="lp-tp" :class="{ 'lp-tp-locked': plan !== 'basic' }" role="group" aria-label="Card topics"><button v-for="t in CARD_TOPICS" :key="t.code" type="button" class="lp-tp-chip" :disabled="plan !== 'basic'" :aria-pressed="topicOn(t.title)" :title="t.covers" @click="toggleTopic(t.title)"><i aria-hidden="true">{{ topicOn(t.title) ? '✓' : '+' }}</i><span class="lp-tp-name">{{ t.title }}</span><span class="lp-tp-n">{{ t.count }}</span></button></div>
<p class="lp-tp-swipe" aria-hidden="true">Swipe for all {{ CARD_TOPICS.length }} topics →</p>
<p v-if="!previewCards.length" class="lp-tp-empty">Pick at least one topic to preview your cards.</p>
<template v-else>
<div class="lp-cg">
<article v-for="c in visibleCards" :key="c.no" class="lp-xc">
<div class="lp-xc-top"><span class="lp-xc-topic">{{ c.topic }}</span><span class="lp-xc-type">{{ c.type }}</span></div>
<div class="lp-xc-body">
<h3>{{ c.title }}</h3>
<div class="lp-xc-veil">
<div class="lp-xc-blur" aria-hidden="true"><span></span><span></span><span class="lp-short"></span><span></span><span></span><span class="lp-short"></span><span class="lp-do"></span></div>
<span class="lp-xc-lock">🔒 Full card in Slack or Teams</span>
</div>
</div>
<div class="lp-xc-foot">AIDL · Card {{ c.no }}</div>
</article>
</div>
<div v-if="cardsShown < previewCards.length" class="lp-cg-more"><button type="button" class="lp-btn lp-ghost" @click="cardsShown += 6">Show more titles ({{ previewCards.length - cardsShown }} more) ↓</button></div>
</template>
<div class="lp-ap"><div class="lp-ap-b" aria-hidden="true"><span>✅ Approve</span><span>⏭ Skip</span><span>🔄 Swap</span></div><p><b>Nothing is sent until you approve.</b> Preview every card first, then approve it, skip it or swap it for another.</p></div>
<div class="lp-xc-cta"><div><b>{{ planInfo.label }} · {{ planInfo.cards }} cards · {{ planInfo.cadence }}</b><span>{{ planLine }}</span></div><div class="lp-hcta"><a class="lp-btn lp-y" href="#start" @click.prevent="addTo(platform)"><span class="lp-v-s">Add to Slack →</span><span class="lp-v-t">Add to Teams →</span></a><RouterLink class="lp-btn" to="/plans">See plans</RouterLink></div></div>
</div>
</section>

<section class="lp-band lp-dark" id="control">
<div class="lp-wrap">
<span class="lp-eb">▼ OVERSIGHT</span>
<h2 class="lp-h2">Runs itself. Reports to you.</h2>
<p class="lp-lede" style="color:#e9e0c4">Team changes are handled automatically, app requests arrive as one-tap decisions, and the Main admin hears about every change another admin makes.</p>
<div class="lp-ov">
<div class="lp-panel"><h3>When the team changes</h3><p>Channel membership is the switch. No spreadsheets to keep in sync.</p>
<div class="lp-ev"><div>JOINS #AIDL</div><div>Set up automatically and sent their Welcome message.</div></div>
<div class="lp-ev"><div>LEAVES OR REMOVED</div><div>Licence paused, future cards stop, Main admin notified.</div></div>
<div class="lp-ev"><div>ADDED BACK</div><div>Licence returns; cards continue from where they stopped.</div></div>
<div class="lp-ev"><div>PLAN IS FULL</div><div>Taken back out of the channel — both they and the Main admin are told why.</div></div>
<div class="lp-ev"><div>OTHER ADMIN ACTS</div><div>Main admin gets a message: new admin, policy change, card approval, app decision.</div></div>
</div>
<div class="lp-panel"><h3>App requests, decided in Slack</h3><p>No ticket queue. The request arrives with everything needed to decide.</p>
<div class="lp-flow">
<div class="lp-fl"><span class="lp-k">1</span><div><b>Employee asks</b><span>App, website, what it’s for, and what data it would use.</span></div></div>
<div class="lp-fl"><span class="lp-k">2</span><div><b>Admin decides</b><span>One message, three buttons.</span><div class="lp-outs"><div><b>APPROVE</b>Added to the allowed apps list</div><div><b>REJECT</b>With a reason the employee sees</div><div><b>ASK</b>A question goes back for more info</div></div></div></div>
<div class="lp-fl"><span class="lp-k">3</span><div><b>Employee hears back</b><span>By message — including which data is allowed in the approved app.</span></div></div>
</div>
</div>
</div>
</div>
</section>

<section class="lp-band" id="compliance" style="background:var(--cream-2)">
<div class="lp-wrap">
<span class="lp-eb">▼ REGULATORY &amp; COMPLIANCE</span>
<h2 class="lp-h2">Meet regulatory and compliance requirements.</h2>
<p class="lp-lede">AI literacy is becoming a legal requirement. Every AIDL licence is a dated, per-person record of what each employee learned and agreed to, ready to show an auditor.</p>
<div class="lp-rc">
<div class="lp-rcc"><span class="lp-rct">EU · IN FORCE</span><h3>EU AI Act, Article 4</h3><p>Organisations that deploy AI must make sure staff using it have sufficient AI literacy. Applies since 2&nbsp;Feb&nbsp;2025.</p></div>
<div class="lp-rcc"><span class="lp-rct">ITALY · IN FORCE</span><h3>Law 132/2025</h3><p>Employers must tell workers when AI is used in their work. Decrees extend AI training across public bodies and the professions.</p></div>
<div class="lp-rcc"><span class="lp-rct">TEXAS · ANNUAL</span><h3>HB 3512</h3><p>Public employees who use a computer for 25%+ of their work complete certified AI training every year.</p></div>
<div class="lp-rcc"><span class="lp-rct">AUSTRALIA · 2026</span><h3>APS AI policy v2.0</h3><p>Foundational AI training becomes mandatory for all Australian Public Service staff.</p></div>
</div>
<div class="lp-rcp"><div><b>What auditors ask for, already on file</b><span>Policy version agreed · date of each employee’s agreement · lessons and assessments completed · renewal history · list of approved apps</span></div><a class="lp-btn lp-y" href="#compliance" @click.prevent="openMandates">See all 15 jurisdictions →</a></div>
</div>
</section>

<section class="lp-band">
<div class="lp-wrap">
<span class="lp-eb">▼ WHERE IT RUNS</span>
<h2 class="lp-h2">Wherever your team already talks.</h2>
<div class="lp-plat">
<div class="lp-pl"><span class="lp-s lp-live">LIVE</span><h3>Slack</h3><p>Block Kit messages in a dedicated #aidl channel and private DMs from the AIDL app. Admin Center pinned and updated in place.</p><div class="lp-hcta" style="margin:18px 0 0"><a class="lp-btn lp-y" href="#start" @click.prevent="addTo('slack')">Add to Slack →</a></div></div>
<div class="lp-pl"><span class="lp-s lp-live">LIVE</span><h3>Microsoft Teams</h3><p>The same admin and employee flow as Adaptive Cards in an AIDL team channel and bot chats. Follows light, dark and high-contrast themes; signs in with Microsoft Entra.</p><div class="lp-hcta" style="margin:18px 0 0"><a class="lp-btn lp-y" href="#start" @click.prevent="addTo('teams')">Add to Teams →</a></div></div>
</div>
</div>
</section>

<section class="lp-cta" id="start">
<div class="lp-wrap">
<h2 class="lp-h2">Your team, road-ready this week.</h2>
<p class="lp-lede">Add AIDL to Slack or Teams, approve your policy and three starter cards, and press Start.</p>
<div class="lp-hcta"><a class="lp-btn" href="#start" @click.prevent="addTo('slack')">Add to Slack →</a><a class="lp-btn" href="#start" @click.prevent="addTo('teams')">Add to Teams →</a><RouterLink class="lp-btn lp-ghost" to="/plans">See plans</RouterLink></div>
</div>
</section>

<footer class="lp-foot">
<div class="lp-wrap lp-foot-in"><a class="lp-brand" href="#"><img class="lp-bm" :src="aidlLogo" alt="AIDL logo" /><span>AIDL</span></a><a v-for="l in navLinks" :key="l.id" :href="'#' + l.id" :class="{ 'lp-active': activeSection === l.id }" @click="activeSection = l.id">{{ l.label }}</a><RouterLink to="/plans">Pricing</RouterLink><span class="lp-copy">© 2026 AI Driving License</span></div>
</footer>
</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { startSlackLogin } from '../lib/slackAuth'
import { startTeamsLogin } from '../lib/msTeamsAuth'
import { notifyError, notifyLoading, notifyClose, notifyInfo } from '../lib/notify.js'
import aidlLogo from '../assets/images/aidl-logo-transparent.png'
import { CARD_TOPICS, LIBRARY_SIZE, PLANS, STARTER_CARDS, type PlanKey } from '../lib/landingCards'

type Platform = 'slack' | 'teams'

// Nav / footer section links. The one for the section in view (or the last
// one clicked) is highlighted red.
const navLinks = [
  { id: 'how', label: 'How it works' },
  { id: 'admins', label: 'For admins' },
  { id: 'drivers', label: 'For your team' },
  { id: 'cards', label: 'The cards' },
  { id: 'control', label: 'Oversight' },
  { id: 'compliance', label: 'Compliance' },
]
const activeSection = ref('')

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

function updateActiveSection() {
  // A section counts as open once its top passes just under the sticky nav.
  const line = 120
  let current = ''
  for (const l of navLinks) {
    const el = document.getElementById(l.id)
    if (el && el.getBoundingClientRect().top <= line) current = l.id
  }
  // Past the last tracked section (platforms / CTA) — nothing is highlighted.
  const last = document.getElementById(navLinks[navLinks.length - 1]!.id)
  if (last && last.getBoundingClientRect().bottom <= line) current = ''
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  window.addEventListener('resize', onResize)
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
  updateActiveSection()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
})

// "See the cards" — a plan switch (Trial / Basic / Enterprise), the 15 real
// topics and blurred previews of real card titles, like /plans in the product.
const plan = ref<PlanKey>('basic')
const pickedTopics = ref<string[]>(['Data Protection & Confidentiality', 'Output Verification & Model Limits', 'AI-Enabled Security Threats'])
const cardsShown = ref(6)
const planInfo = computed(() => PLANS.find(p => p.key === plan.value)!)
const STARTER_TOPICS = [...new Set(STARTER_CARDS.map(c => c.topic))]

interface ShownCard { no: string; title: string; type: string; topic: string }

// Trial is the fixed starter set; Basic uses the picked topics; Enterprise all of them.
function topicOn(topic: string) {
  if (plan.value === 'trial') return STARTER_TOPICS.includes(topic)
  if (plan.value === 'enterprise') return true
  return pickedTopics.value.includes(topic)
}

// Trial shows its 12 cards; otherwise titles are taken in turn from each topic.
const previewCards = computed<ShownCard[]>(() => {
  if (plan.value === 'trial') return STARTER_CARDS
  const topics = CARD_TOPICS.filter(t => topicOn(t.title))
  const out: ShownCard[] = []
  const most = Math.max(0, ...topics.map(t => t.cards.length))
  for (let i = 0; i < most; i++) {
    for (const t of topics) {
      const c = t.cards[i]
      if (c) out.push({ ...c, topic: t.title })
    }
  }
  return out
})
const visibleCards = computed(() => previewCards.value.slice(0, cardsShown.value))

const topicNote = computed(() => {
  if (plan.value === 'trial') return `Trial sends the 12-card starter set · ${STARTER_TOPICS.length} topics`
  if (plan.value === 'enterprise') return `All ${CARD_TOPICS.length} topics included`
  return `${pickedTopics.value.length} of ${CARD_TOPICS.length} topics picked`
})
const planLine = computed(() => {
  if (plan.value === 'trial') return 'The 12-card starter set, one card a month. Pick your own topics on Basic.'
  if (plan.value === 'enterprise') return `The starter set plus cards from all ${CARD_TOPICS.length} topics, on the days and time you choose.`
  return 'The starter set plus cards from the topics you pick, every Monday and Thursday.'
})

function setPlan(p: PlanKey) {
  plan.value = p
  cardsShown.value = 6
}
function toggleTopic(topic: string) {
  if (plan.value !== 'basic') return
  const i = pickedTopics.value.indexOf(topic)
  if (i >= 0) pickedTopics.value.splice(i, 1)
  else pickedTopics.value.push(topic)
  cardsShown.value = 6
}
function pickAllTopics() {
  pickedTopics.value = CARD_TOPICS.map(t => t.title)
  cardsShown.value = 6
}
function clearTopics() {
  pickedTopics.value = []
  cardsShown.value = 6
}

// "See all 15 jurisdictions" — the full mandates page isn't built yet.
function openMandates() {
  notifyInfo('The full list of 15 AI training jurisdictions is coming soon.', 'AI Training Mandates')
}

// Slack / Teams switch — swaps the copy and the mock windows between the two.
const PLATFORM_KEY = 'aidl-v2-pf'
const platform = ref<Platform>('slack')
try {
  if (localStorage.getItem(PLATFORM_KEY) === 'teams') platform.value = 'teams'
} catch (e) {}

function setPlatform(p: Platform) {
  platform.value = p
  try { localStorage.setItem(PLATFORM_KEY, p) } catch (e) {}
}

// "Add to Slack" / "Add to Teams" — the same organization sign-in the old
// landing page used; the backend redirects back to /auth/callback.
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

const heroSteps = [
  { title: 'AI policy', note: 'Approved · v1', state: 'done' },
  { title: 'Add admins', note: '2 admins', state: 'done' },
  { title: 'Add team', note: '3 free seats', state: 'now', action: 'Add people' },
  { title: 'Approve cards', note: '3 starter cards waiting', state: 'lock' },
  { title: 'Start', note: 'Needs starter cards approved', state: 'lock' },
  { title: 'Licences & cards', note: '', state: 'lock' },
]

// Steppers: t/s = tab title/subtitle, h/w = heading/why, m = mock message
// markup, f = facts. All static HTML, rendered with v-html.
interface Step { t: string; s: string; h: string; w: string; m: string; f?: string[] }

function B(t: string, p?: number) {
  return '<span class="lp-sb' + (p ? ' lp-pri' : '') + '">' + t + '</span>'
}

const ADMIN: Step[] = [
{t:'AI policy',s:'Build, approve, manage apps',h:'Your AI policy in 15 guided pages',w:'Company info plus the 14 points of the policy. Best answers are pre-picked, so you can just click Next. Close halfway and it saves.',
 m:'<div class="lp-card"><p class="lp-ct">Acceptable Use Policy</p><p class="lp-cs">Page 6 of 15 &middot; Data you may share</p><div class="lp-bar2"><i style="width:40%"></i></div><div class="lp-btns" style="margin-top:10px">'+B('Continue AUP (step 6 of 15)',1)+'</div></div><div class="lp-card"><p class="lp-ct"><span class="lp-ok">&#10003;</span> Step 1 done &middot; AUP approved</p><div class="lp-btns">'+B('View AUP')+B('Change AUP')+B('AI apps')+B('IT apps')+'</div></div>',
 f:['Generate, view, then Approve AUP','AI apps and IT apps lists show what is allowed or blocked, and what data each may use','Add a new app at any time']},
{t:'Add admins',s:'Optional &middot; scoped rights',h:'Co-admins with only the keys they need',w:'Pick a person and tick what they may do. They join the channel and get their own Admin Center showing only those rights.',
 m:'<div class="lp-card"><p class="lp-ct">Add admin &middot; Dan Okafor</p><p class="lp-cs">Allowed to&hellip;</p><div class="lp-chips"><span class="lp-chip lp-on">Approve apps</span><span class="lp-chip lp-on">See cards</span><span class="lp-chip">Create cards</span><span class="lp-chip">Manage admins</span><span class="lp-chip">Manage plan</span><span class="lp-chip lp-on">Approve cards</span></div><div class="lp-btns" style="margin-top:12px">'+B('Add admin',1)+B('Skip')+'</div></div>',
 f:['Edit or Remove next to any admin','A removed admin becomes a normal team member','The Main admin can never be removed']},
{t:'Add team',s:'Invite up to your seats',h:'Bring people into #aidl',w:'AIDL lists Slack people not yet in the channel. Select some or all &mdash; never more than your free seats.',
 m:'<div class="lp-card"><p class="lp-ct">Add people</p><p class="lp-cs">3 free seats</p><div class="lp-row"><span class="lp-chip lp-on">Priya Raman</span><span class="lp-r">Design</span></div><div class="lp-row"><span class="lp-chip lp-on">Marcus Webb</span><span class="lp-r">Risk</span></div><div class="lp-row"><span class="lp-chip lp-on">Lena Fischer</span><span class="lp-r">L&amp;D</span></div><div class="lp-row"><span class="lp-chip">Sam Ortiz</span><span class="lp-r">No seat left</span></div><div class="lp-btns" style="margin-top:10px">'+B('Add 3',1)+B('Select all')+'</div></div>',
 f:['Each person gets an AIDL account and a private Welcome message','If AIDL can&rsquo;t message someone, you get a private warning']},
{t:'Approve cards',s:'Nothing goes out unapproved',h:'You decide every card that reaches the team',w:'Start with the 3 starter cards, then work through the learning cards month by month.',
 m:'<div class="lp-card"><p class="lp-ct">Starter cards</p><div class="lp-row">AI policy<span class="lp-r"><span class="lp-st-tag lp-g">APPROVED</span></span></div><div class="lp-row">Traffic Light<span class="lp-r"><span class="lp-st-tag lp-g">APPROVED</span></span></div><div class="lp-row">Highway Code<span class="lp-r">'+B('Preview')+' '+B('Approve',1)+'</span></div></div><div class="lp-card"><p class="lp-ct">November &middot; 8 cards</p><div class="lp-btns">'+B('Approve month',1)+B('Preview')+B('Skip')+B('Swap')+'</div></div>',
 f:['Approve all, a month, or card by card &mdash; Preview, Approve, Skip or Swap','A late approval never blocks the team: the next approved card goes instead','Approvers are warned before approved cards run out','See most and least read, and % who tapped Got it']},
{t:'Start',s:'One button for everyone',h:'Press Start, and everyone gets their Welcome',w:'Works once the 3 starter cards are approved. People who join later start automatically.',
 m:'<div class="lp-card"><p class="lp-ct">Ready to start</p><p class="lp-cs">12 people in #aidl</p><div class="lp-btns">'+B('Start for 12',1)+'</div></div><div class="lp-card"><p class="lp-ct">Progress</p><div class="lp-row">Agreed to the policy<span class="lp-r">8 of 12</span></div><div class="lp-bar2"><i style="width:67%"></i></div><div class="lp-row">Licensed<span class="lp-r">5 of 12</span></div><div class="lp-bar2"><i style="width:42%"></i></div><div class="lp-btns" style="margin-top:10px">'+B('Remind people who haven&rsquo;t finished')+'</div></div>',
 f:['A reminder re-sends each person the exact card they&rsquo;re stuck on','Changed the policy? Approve the new version, then Send new version so everyone agrees again']},
{t:'Licences &amp; cards',s:'Coverage you can prove',h:'Who is licensed, who has read what',w:'Licensed counts, people waiting for a seat, and this month&rsquo;s card reads &mdash; in the same message.',
 m:'<div class="lp-card"><div class="lp-row"><b>Cards acknowledged this month</b><span class="lp-r"><b style="color:#1d1c1d;font-size:15px">81%</b></span></div><div class="lp-row">Licensed<span class="lp-r"><span class="lp-st-tag lp-g">9</span></span></div><div class="lp-row">In progress<span class="lp-r"><span class="lp-st-tag lp-a">2</span></span></div><div class="lp-row">Not started<span class="lp-r"><span class="lp-st-tag">1</span></span></div><div class="lp-btns" style="margin-top:10px">'+B('View team progress')+B('Export coverage',1)+B('Acknowledgement alerts')+'</div></div><div class="lp-card"><p class="lp-ct">Late on a card</p><div class="lp-row">Sam Ortiz &middot; Card 7<span class="lp-r">'+B('Remind')+'</span></div><div class="lp-row">Lena Fischer &middot; Card 6<span class="lp-r">Reminded by you</span></div></div>',
 f:['Export coverage as CSV &mdash; a copy also arrives by message','Remind tells the person the admin asked','Alerts: none, one a day, or every Got it &mdash; plus late-person alerts']}
];
const USER: Step[] = [
{t:'Welcome',s:'About 10 minutes',h:'&ldquo;Hi Priya, welcome to your AI Driving License&rdquo;',w:'A private message with the three steps ahead. If the admin hasn&rsquo;t started yet, it says the first card arrives soon.',
 m:'<div class="lp-card"><p class="lp-ct">Welcome to your AI Driving License</p><p class="lp-cs">About 10 minutes &middot; 3 cards</p><div class="lp-row">1 &middot; AI policy</div><div class="lp-row">2 &middot; Traffic Light</div><div class="lp-row">3 &middot; Highway Code</div><div class="lp-btns" style="margin-top:10px">'+B('Let&rsquo;s go',1)+'</div></div>'},
{t:'AI policy',s:'Card 1 of 3 &middot; 14 points',h:'Agree to the policy, point by point',w:'Each point is a picture in the same message, with a progress bar. One tap per point.',
 m:'<div class="lp-card"><p class="lp-ct">Card 1 of 3 &middot; AI policy</p><p class="lp-cs">Point 6 of 14 &middot; Only use approved apps</p><div class="lp-bar2"><i style="width:43%"></i></div><div class="lp-btns" style="margin-top:10px">'+B('I agree to point 6',1)+'</div></div><div class="lp-card"><p class="lp-ct"><span class="lp-ok">&#10003;</span> I agreed to all 14 points</p><p class="lp-cs" style="margin:0">Card turns green &middot; AGREED</p></div>'},
{t:'Traffic Light',s:'Card 2 of 3',h:'What&rsquo;s safe to share with AI',w:'Three colours, one decision before every prompt.',
 m:'<div class="lp-card"><p class="lp-ct">Card 2 of 3 &middot; Traffic Light</p><div class="lp-tl" style="margin:8px 0 12px"><div class="lp-g"><b>Green</b>Safe to share</div><div class="lp-a"><b>Amber</b>Be careful</div><div class="lp-r"><b>Red</b>Never share with AI</div></div><div class="lp-btns">'+B('Got it. Next',1)+'</div></div>'},
{t:'Highway Code',s:'Card 3 of 3 &middot; 5 rules',h:'The five learner rules',w:'The rules every new driver follows when using AI at work.',
 m:'<div class="lp-card"><p class="lp-ct">Card 3 of 3 &middot; Highway Code</p><p class="lp-cs">5 learner rules for using AI</p><div class="lp-bar2"><i style="width:100%"></i></div><div class="lp-btns" style="margin-top:10px">'+B('Got it. Get my license',1)+'</div></div><div class="lp-card"><p class="lp-ct">Your next card is on its way</p><p class="lp-cs" style="margin:0">Shown if the admin hasn&rsquo;t approved the next card yet &mdash; it arrives by itself.</p></div>'},
{t:'Avatar',s:'One quick step',h:'Create your avatar',w:'The licence is issued the moment the avatar is saved.',
 m:'<div class="lp-card" style="display:flex;gap:14px;align-items:center"><span class="lp-lic-av" style="flex:none;color:#ffcc00">PR</span><div><p class="lp-ct">Create my avatar</p><p class="lp-cs">Shown on your licence</p><div class="lp-btns">'+B('Create my avatar',1)+'</div></div></div><div class="lp-card"><p class="lp-ct">Almost there</p><p class="lp-cs" style="margin:0">No free seat? The licence is issued as soon as one opens.</p></div>'},
{t:'Licence',s:'Valid for 1 year',h:'&ldquo;You&rsquo;re road-ready!&rdquo;',w:'Name, avatar, licence number, company and logo &mdash; ready to download or post.',
 m:'<div class="lp-lic"><div class="lp-lic-hd"><span class="lp-s">AI</span><span class="lp-d">AI DRIVING LICENSE</span><span class="lp-lg">NORTHWIND</span></div><div class="lp-lic-b"><span class="lp-lic-av">PR</span><div><div class="lp-d">PRIYA RAMAN</div><div class="lp-m">AIDL-L-4417-0932<br />VALID 22 OCT 2026 &ndash; 22 OCT 2027</div></div></div><div class="lp-lic-strip"></div></div><div class="lp-btns" style="margin-top:12px">'+B('Download',1)+B('Change avatar')+B('Share on LinkedIn')+'</div>'}
];

const adminStep = ref(0)
const userStep = ref(0)
const adminCur = computed(() => ADMIN[adminStep.value]!)
const userCur = computed(() => USER[userStep.value]!)
</script>

<style>
/* Landing page — "AI Driving License v2" design. Every class is prefixed
   lp- so the global portal / classic-site stylesheets can't leak in. */
.lp-root{--cream:#f5ecd2;--cream-2:#f0e3bd;--cream-3:#e6d8a8;--asphalt:#14140f;--asphalt-2:#1f1e16;--yellow:#ffcc00;--amber:#ff9d00;--red:#e23a2e;--green:#2ec866;--green-ink:#0d6b38;--sky:#6fb3e0;--ink:#14140f;--muted:#5f5843;--line:#d8c98f}
:where(.lp-root),:where(.lp-root) *,:where(.lp-root) *::before,:where(.lp-root) *::after{box-sizing:border-box}
.lp-root{min-height:100vh;background:var(--cream);color:var(--ink);font-family:"Space Grotesk",system-ui,sans-serif}
.lp-root{overflow-x:clip}
:where(.lp-root) a{color:var(--ink)}
:where(.lp-root) a:hover{color:var(--red)}
.lp-wrap{max-width:1320px;margin:0 auto;padding:0 48px}
.lp-d{font-family:"Bungee",sans-serif;font-weight:400;letter-spacing:.01em}
.lp-m{font-family:"JetBrains Mono",monospace}
.lp-btn{display:inline-flex;align-items:center;gap:10px;padding:13px 22px;background:var(--ink);color:var(--cream);border:3px solid var(--ink);font-family:"Bungee",sans-serif;font-size:14px;text-decoration:none;box-shadow:4px 4px 0 var(--yellow);transition:transform .12s,box-shadow .12s;cursor:pointer}
.lp-btn:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 var(--yellow);color:var(--cream)}
.lp-btn.lp-y{background:var(--yellow);color:var(--ink);box-shadow:4px 4px 0 var(--ink)}
.lp-btn.lp-y:hover{box-shadow:6px 6px 0 var(--ink);color:var(--ink)}
.lp-btn.lp-ghost{background:transparent;color:var(--ink);box-shadow:none}
.lp-btn.lp-ghost:hover{background:var(--cream-2)}
.lp-eb{display:inline-block;font-family:"JetBrains Mono",monospace;font-size:12px;letter-spacing:.16em;background:var(--ink);color:var(--yellow);padding:6px 11px;margin-bottom:18px}
.lp-h2{font-family:"Bungee",sans-serif;font-weight:400;font-size:clamp(34px,4.6vw,60px);line-height:1;margin:0 0 16px;text-wrap:balance}
.lp-lede{font-size:19px;line-height:1.55;max-width:62ch;margin:0;text-wrap:pretty}
.lp-band{padding:110px 0;border-bottom:4px solid var(--ink)}
.lp-band.lp-dark{background:var(--asphalt);color:var(--cream)}
.lp-band.lp-dark .lp-eb{background:var(--yellow);color:var(--ink)}
.lp-band.lp-dark a{color:var(--yellow)}
/* NAV */
.lp-nav{position:sticky;top:0;z-index:50;background:var(--cream);border-bottom:3px solid var(--ink)}
.lp-nav-in{display:flex;align-items:center;gap:30px;height:74px}
.lp-brand{display:flex;align-items:center;gap:11px;font-family:"Bungee",sans-serif;font-size:20px;text-decoration:none;color:var(--ink)}
.lp-bm{width:46px;height:46px;display:block;object-fit:contain;flex:none}
.lp-nl{display:flex;gap:26px}
.lp-nl a{text-decoration:none;font-weight:600;font-size:15px;white-space:nowrap}
.lp-nl a.lp-active{color:var(--red);text-decoration:underline;text-decoration-thickness:3px;text-underline-offset:6px}
.lp-ncta{margin-left:auto;display:flex;gap:12px;align-items:center}
.lp-burger{display:none;flex:none;width:44px;height:44px;padding:0;background:var(--yellow);border:3px solid var(--ink);box-shadow:3px 3px 0 var(--ink);cursor:pointer;flex-direction:column;align-items:center;justify-content:center;gap:5px}
.lp-burger i{display:block;width:20px;height:3px;background:var(--ink);transition:transform .15s,opacity .15s}
.lp-burger.lp-open{background:var(--ink)}
.lp-burger.lp-open i{background:var(--yellow)}
.lp-burger.lp-open i:nth-child(1){transform:translateY(8px) rotate(45deg)}
.lp-burger.lp-open i:nth-child(2){opacity:0}
.lp-burger.lp-open i:nth-child(3){transform:translateY(-8px) rotate(-45deg)}
.lp-mnav{position:absolute;left:0;right:0;top:100%;background:var(--cream);border-top:3px solid var(--ink);border-bottom:4px solid var(--ink);box-shadow:0 8px 0 rgba(20,20,15,.15);max-height:calc(100vh - 74px);overflow-y:auto}
.lp-mnav .lp-wrap{display:flex;flex-direction:column;padding-top:8px;padding-bottom:12px}
.lp-mnav a{display:block;padding:14px 0;font-family:"Bungee",sans-serif;font-size:17px;text-decoration:none;border-bottom:2px dashed var(--line)}
.lp-mnav a:last-child{border-bottom:0}
.lp-mnav a.lp-active{color:var(--red)}
.lp-mnav a.lp-active::before{content:"▶ ";font-size:12px;vertical-align:2px}
@media(min-width:1241px){.lp-mnav{display:none!important}}
@media(max-width:1240px){.lp-nl{display:none}.lp-burger{display:flex}}
@media(min-width:1241px) and (max-width:1400px){.lp-nav-in{gap:22px}.lp-nl{gap:18px}.lp-nl a{font-size:14px}}
/* HERO / WINDSHIELD */
.lp-hero{position:relative;height:880px;overflow:hidden;background:linear-gradient(180deg,#98c8eb 0%,#c8e0f0 45%,#e9d398 60%,#c98c4a 75%,#4a3a25 100%);border-bottom:6px solid var(--ink)}
.lp-sun{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%);width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,#ffdd55 0%,#ff9d00 60%,transparent 70%);filter:blur(2px)}
.lp-cloud{position:absolute;background:var(--cream);border:3px solid var(--ink);border-radius:40px;animation:lp-drift 40s linear infinite alternate}
.lp-cloud.lp-c1{width:120px;height:40px;top:80px;left:12%}
.lp-cloud.lp-c2{width:90px;height:30px;top:140px;left:70%;animation-duration:52s}
.lp-cloud.lp-c3{width:160px;height:44px;top:60px;left:60%;animation-duration:64s}
@keyframes lp-drift{to{transform:translateX(60px)}}
.lp-mtn{position:absolute;bottom:38%;width:0;height:0;border-style:solid}
.lp-mtn.lp-m1{left:8%;border-width:0 90px 80px 90px;border-color:transparent transparent #6e5a3a transparent}
.lp-mtn.lp-m2{left:22%;border-width:0 120px 110px 120px;border-color:transparent transparent #5a4830 transparent}
.lp-mtn.lp-m3{right:12%;border-width:0 140px 130px 140px;border-color:transparent transparent #6e5a3a transparent}
.lp-road{position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:100%;height:55%;background:var(--asphalt);clip-path:polygon(38% 0,62% 0,100% 100%,0% 100%)}
.lp-road-dash{position:absolute;left:0;right:0;bottom:0;height:55%;pointer-events:none}
.lp-road-dash svg{width:100%;height:100%;overflow:visible}
.lp-dash-stroke{stroke:#f6f1de;stroke-width:14;stroke-dasharray:36 44;stroke-linecap:square;fill:none;animation:lp-dashmove 1.8s linear infinite}
@keyframes lp-dashmove{from{stroke-dashoffset:0}to{stroke-dashoffset:-80}}
.lp-road-sign{position:absolute;display:flex;flex-direction:column;align-items:center}
.lp-road-sign .lp-post{width:5px;background:#6b5b3e;height:60px}
.lp-road-sign .lp-plate{background:var(--yellow);color:var(--ink);border:4px solid var(--ink);padding:10px 14px;font-family:"Bungee",sans-serif;font-size:13px;box-shadow:4px 4px 0 rgba(0,0,0,.4);text-align:center;line-height:1.05}
.lp-road-sign .lp-plate.lp-diamond{width:100px;height:100px;transform:rotate(45deg);display:grid;place-items:center;padding:0}
.lp-road-sign .lp-plate.lp-diamond>span{display:block;transform:rotate(-45deg);font-size:11px}
.lp-road-sign .lp-plate.lp-round{border-radius:50%;width:84px;height:84px;display:grid;place-items:center;padding:0}
.lp-road-sign .lp-plate.lp-green{background:var(--green)}
.lp-road-sign .lp-plate.lp-red{background:var(--red);color:var(--cream)}
.lp-road-sign .lp-plate.lp-white{background:var(--cream)}
.lp-rs-1{left:6%;bottom:30%}
.lp-rs-1 .lp-post{height:80px}
.lp-rs-2{right:7%;bottom:26%}
.lp-rs-2 .lp-post{height:100px}
.lp-rs-3{left:16%;bottom:18%}
.lp-rs-3 .lp-post{height:110px}
.lp-rs-4{right:18%;bottom:14%}
.lp-rs-4 .lp-post{height:130px}
.lp-hero-headline{position:absolute;left:50%;top:96px;transform:translateX(-50%);text-align:center;z-index:9;width:min(1100px,92%)}
.lp-hero-eyebrow{display:inline-flex;align-items:center;gap:10px;background:var(--ink);color:var(--yellow);padding:8px 18px;font-family:"Bungee",sans-serif;font-size:13px;border:3px solid var(--ink);box-shadow:4px 4px 0 var(--red);margin-bottom:22px}
.lp-hero-eyebrow .lp-blink{width:10px;height:10px;border-radius:50%;background:var(--red);animation:lp-blink 1s steps(2) infinite}
@keyframes lp-blink{50%{opacity:.15}}
.lp-hero-title{font-family:"Bungee",sans-serif;font-weight:400;font-size:clamp(56px,9vw,132px);line-height:.92;color:var(--ink);text-shadow:6px 6px 0 var(--yellow);margin:0}
.lp-hero-title .lp-l2{display:block;color:var(--red);text-shadow:6px 6px 0 var(--ink)}
.lp-hero-sub{margin-top:24px;font-size:19px;line-height:1.5;max-width:640px;color:var(--ink);font-weight:500;background:rgba(245,236,210,.82);padding:10px 18px;border:2px solid var(--ink);display:inline-block;text-wrap:pretty}
.lp-dashboard{position:absolute;left:0;right:0;bottom:0;height:280px;z-index:8}
.lp-dash-bg{position:absolute;inset:0;background:linear-gradient(180deg,#2a2820 0%,#14140f 60%,#0a0a07 100%);clip-path:polygon(0 30%,12% 12%,88% 12%,100% 30%,100% 100%,0 100%);border-top:4px solid var(--ink)}
.lp-dash-inner{position:absolute;inset:0;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;padding:70px 80px 30px;color:var(--cream)}
.lp-gauge-cluster{display:flex;gap:30px;align-items:center}
.lp-gauge{width:110px;height:110px;border-radius:50%;background:radial-gradient(circle at 50% 50%,#1e1c16,#0a0a07 70%);border:4px solid #3a3528;position:relative;box-shadow:inset 0 0 18px rgba(0,0,0,.7)}
.lp-gauge .lp-tick{position:absolute;left:50%;top:6px;width:2px;height:8px;background:var(--cream-2);opacity:.6;transform-origin:50% 49px}
.lp-gauge .lp-needle{position:absolute;left:50%;bottom:50%;width:3px;height:42px;background:var(--red);transform-origin:50% 100%;transform:translateX(-50%) rotate(35deg);border-radius:2px;animation:lp-needle 3.2s ease-in-out infinite alternate}
.lp-gauge.lp-lvl .lp-needle{background:var(--green);animation-duration:4.4s}
@keyframes lp-needle{from{transform:translateX(-50%) rotate(-40deg)}to{transform:translateX(-50%) rotate(55deg)}}
.lp-gauge .lp-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:var(--yellow);border:2px solid var(--ink)}
.lp-gauge .lp-label{position:absolute;left:50%;bottom:-22px;transform:translateX(-50%);font-family:"JetBrains Mono",monospace;font-size:10px;color:var(--cream-2);white-space:nowrap}
.lp-wheel{width:320px;height:320px;border-radius:50%;border:22px solid var(--yellow);background:radial-gradient(circle at 50% 50%,transparent 0 70px,var(--ink) 71px 75px,transparent 76px);position:relative;box-shadow:0 -10px 30px rgba(0,0,0,.5),0 0 0 4px var(--ink),inset 0 0 0 4px var(--ink),inset 0 0 22px rgba(0,0,0,.45);margin-top:-120px;animation:lp-steer 6s ease-in-out infinite}
.lp-wheel-stitch{position:absolute;inset:-12px;border-radius:50%;border:2px dashed rgba(20,20,15,.45);pointer-events:none}
@keyframes lp-steer{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}
.lp-wheel::before,.lp-wheel::after{content:"";position:absolute;left:50%;top:50%;background:var(--cream);border:3px solid var(--ink);transform:translate(-50%,-50%);border-radius:8px;box-shadow:0 3px 0 rgba(0,0,0,.35)}
.lp-wheel::before{width:20px;height:204px}
.lp-wheel::after{width:204px;height:20px}
.lp-wheel-hub{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:116px;height:116px;border-radius:50%;background:var(--ink);border:3px solid var(--cream);display:grid;place-items:center;box-shadow:0 0 0 3px var(--ink),0 6px 14px rgba(0,0,0,.5);z-index:2}
.lp-wheel-hub-inner{width:94px;height:94px;border-radius:50%;background:var(--yellow);border:3px solid var(--ink);display:grid;place-items:center;overflow:hidden}
.lp-wheel-hub-inner img{width:100%;height:100%;object-fit:contain;display:block;transform:scale(1.12)}
.lp-infotainment{background:#0a0a07;border:3px solid #3a3528;border-radius:10px;padding:16px 18px;color:var(--green);font-family:"JetBrains Mono",monospace;width:290px;margin-left:auto;box-shadow:inset 0 0 20px rgba(0,0,0,.8)}
.lp-infotainment .lp-row{display:flex;justify-content:space-between;font-size:11px;color:var(--cream-2)}
.lp-infotainment .lp-big{font-family:"Bungee",sans-serif;color:var(--yellow);font-size:20px;margin:6px 0 8px}
.lp-infotainment .lp-bar{height:8px;background:#2a2820;border-radius:4px;overflow:hidden;margin-top:10px}
.lp-infotainment .lp-bar>i{display:block;height:100%;width:33%;background:var(--green);animation:lp-fill 6s ease-in-out infinite alternate}
@keyframes lp-fill{to{width:83%}}
.lp-hcta{display:flex;gap:14px;flex-wrap:wrap}
.lp-acp{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:56px;align-items:center}
.lp-hstats{display:flex;border:3px solid var(--ink);background:var(--cream);box-shadow:5px 5px 0 var(--ink);width:fit-content;max-width:100%;flex-wrap:wrap;margin-top:26px}
.lp-hstats div{padding:12px 18px;border-right:3px solid var(--ink)}
.lp-hstats div:last-child{border-right:0}
.lp-hstats b{display:block;font-family:"Bungee",sans-serif;font-weight:400;font-size:24px;line-height:1}
.lp-hstats span{font-family:"JetBrains Mono",monospace;font-size:10.5px;letter-spacing:.1em;color:var(--muted)}
@media(max-width:1000px){.lp-rs-3,.lp-rs-4{display:none}.lp-dash-inner{grid-template-columns:1fr auto 1fr;padding:70px 24px 30px}.lp-infotainment{width:220px}.lp-wheel{width:200px;height:200px;margin-top:-60px}.lp-acp{grid-template-columns:1fr}}
@media(max-width:640px){.lp-hero{height:820px}.lp-rs-1,.lp-rs-2,.lp-infotainment,.lp-gauge-cluster{display:none}.lp-dash-inner{grid-template-columns:1fr;justify-items:center}.lp-wheel{margin:-15px auto 0}.lp-hero-sub{font-size:16px}}
/* SLACK WINDOW MOCK */
.lp-win{background:#fff;border:3px solid var(--ink);box-shadow:10px 10px 0 var(--ink);display:grid;grid-template-columns:150px minmax(0,1fr);min-height:520px;font-size:13.5px;color:#1d1c1d}
.lp-win-sb{background:#3f0e40;color:#cfc3cf;padding:14px 0;font-size:13px}
.lp-win-sb .lp-ws{color:#fff;font-weight:700;padding:0 14px 12px;border-bottom:1px solid rgba(255,255,255,.12);margin-bottom:10px}
.lp-win-sb .lp-ch{padding:4px 14px}
.lp-win-sb .lp-ch.lp-on{background:#1164a3;color:#fff;font-weight:700}
.lp-win-sb .lp-sec{padding:12px 14px 4px;font-size:11px;opacity:.7}
.lp-win-main{display:flex;flex-direction:column;min-width:0}
.lp-win-top{border-bottom:1px solid #e2e2e2;padding:11px 16px;font-weight:800;display:flex;align-items:center;gap:8px}
.lp-win-top small{font-weight:400;color:#616061;font-size:12px}
.lp-win-top .lp-pin{margin-left:auto;font-family:"JetBrains Mono",monospace;font-size:10px;letter-spacing:.08em;background:#fff6cc;border:1px solid #e8d16a;padding:2px 6px;color:#5c4b00}
.lp-msg{padding:16px;display:flex;gap:10px}
.lp-av{width:36px;height:36px;flex:none;border-radius:6px;background:var(--yellow);border:2px solid var(--ink);display:grid;place-items:center;font-family:"Bungee",sans-serif;font-size:12px;color:var(--ink)}
.lp-mh{display:flex;gap:7px;align-items:center;margin-bottom:6px}
.lp-mh strong{font-weight:800}
.lp-app{font-size:9.5px;font-weight:700;background:#e8e8e8;color:#616061;padding:1px 4px;border-radius:2px}
.lp-mt{font-size:11.5px;color:#616061}
.lp-ac{border:1px solid #e2e2e2;border-radius:8px;overflow:hidden}
.lp-ac-hd{background:var(--asphalt);color:var(--cream);padding:12px 14px;display:flex;align-items:center;gap:10px}
.lp-ac-hd .lp-d{font-size:14px;color:var(--yellow)}
.lp-ac-hd .lp-m{font-size:10px;letter-spacing:.08em;margin-left:auto;opacity:.8}
.lp-ac-plan{padding:10px 14px;background:#fafafa;border-bottom:1px solid #eee;font-size:12px;color:#454245;display:flex;gap:14px;flex-wrap:wrap}
.lp-ac-plan b{color:#1d1c1d}
.lp-prog{padding:10px 14px 4px}
.lp-prog .lp-bar{height:8px;background:#eee;border-radius:4px;overflow:hidden}
.lp-prog .lp-bar i{display:block;height:100%;background:var(--green);width:33%}
.lp-prog .lp-lb{font-size:11.5px;color:#616061;margin-top:6px}
.lp-steps{padding:4px 14px 12px}
.lp-st{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f1f1f1}
.lp-st:last-child{border-bottom:0}
.lp-st .lp-dot{width:20px;height:20px;flex:none;border-radius:50%;border:2px solid #c9c9c9;display:grid;place-items:center;font-size:11px;font-weight:800;color:#fff}
.lp-st.lp-done .lp-dot{background:var(--green-ink);border-color:var(--green-ink)}
.lp-st.lp-now .lp-dot{border-color:#1264a3;background:#fff;color:#1264a3}
.lp-st.lp-lock{color:#9b9b9b}
.lp-st .lp-tx{flex:1;min-width:0}
.lp-st .lp-tx small{display:block;font-size:11.5px;color:#616061}
.lp-sb{font-size:12px;font-weight:700;padding:5px 10px;border-radius:4px;border:1px solid rgba(29,28,29,.3);background:#fff;color:#1d1c1d;white-space:nowrap}
.lp-sb.lp-pri{background:#007a5a;border-color:#007a5a;color:#fff}
/* MARQUEE */
.lp-mq{background:var(--yellow);border-bottom:4px solid var(--ink);overflow:hidden;white-space:nowrap}
.lp-mq-t{display:inline-flex;gap:36px;padding:15px 0;animation:lp-mq 38s linear infinite;font-family:"Bungee",sans-serif;font-size:17px}
.lp-mq-t i{font-style:normal;color:var(--red)}
@keyframes lp-mq{to{transform:translateX(-50%)}}
/* TWO SIDES */
.lp-sides{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:52px}
.lp-side{border:3px solid var(--ink);background:var(--cream-2);box-shadow:7px 7px 0 var(--ink);padding:30px}
.lp-side.lp-k{background:var(--asphalt);color:var(--cream);box-shadow:7px 7px 0 var(--yellow)}
.lp-side .lp-tag{font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.14em;color:var(--muted)}
.lp-side.lp-k .lp-tag{color:var(--yellow)}
.lp-side h3{font-family:"Bungee",sans-serif;font-weight:400;font-size:28px;line-height:1.05;margin:8px 0 12px}
.lp-side p{font-size:16px;line-height:1.55;margin:0 0 18px;text-wrap:pretty}
.lp-side ol{margin:0;padding:0;list-style:none;display:grid;gap:8px;counter-reset:s}
.lp-side li{counter-increment:s;display:flex;gap:12px;align-items:baseline;font-size:15px}
.lp-side li::before{content:counter(s,decimal-leading-zero);font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:700;background:var(--yellow);color:var(--ink);border:2px solid var(--ink);padding:1px 5px;flex:none}
/* STEPPERS */
.lp-stp{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:44px;margin-top:52px;align-items:start}
.lp-stl{display:grid;gap:10px}
.lp-sbtn{all:unset;cursor:pointer;display:grid;grid-template-columns:56px minmax(0,1fr);gap:16px;align-items:center;border:3px solid var(--ink);background:var(--cream);padding:12px 16px 12px 12px;transition:transform .12s,box-shadow .12s}
.lp-sbtn:hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 var(--ink)}
.lp-sbtn .lp-n{width:56px;height:56px;display:grid;place-items:center;font-family:"Bungee",sans-serif;font-size:20px;background:var(--cream-2);border:3px solid var(--ink);transform:rotate(45deg) scale(.74)}
.lp-sbtn .lp-n span{transform:rotate(-45deg)}
.lp-sbtn b{font-family:"Bungee",sans-serif;font-weight:400;font-size:17px;display:block}
.lp-sbtn small{font-size:13.5px;color:var(--muted)}
.lp-sbtn[aria-selected="true"]{background:var(--yellow);box-shadow:6px 6px 0 var(--ink);transform:translate(-3px,-3px)}
.lp-sbtn[aria-selected="true"] .lp-n{background:var(--ink);color:var(--yellow)}
.lp-dark .lp-sbtn{background:var(--asphalt-2);border-color:var(--cream);color:var(--cream)}
.lp-dark .lp-sbtn small{color:#cfc49c}
.lp-dark .lp-sbtn .lp-n{background:var(--asphalt);border-color:var(--cream)}
.lp-dark .lp-sbtn:hover{box-shadow:4px 4px 0 var(--yellow)}
.lp-dark .lp-sbtn[aria-selected="true"]{background:var(--yellow);color:var(--ink);border-color:var(--ink);box-shadow:6px 6px 0 var(--cream)}
.lp-dark .lp-sbtn[aria-selected="true"] small{color:var(--ink)}
.lp-dark .lp-sbtn[aria-selected="true"] .lp-n{background:var(--ink);color:var(--yellow);border-color:var(--ink)}
.lp-pane{position:sticky;top:100px}
.lp-det{border:3px solid var(--ink);background:#fff;box-shadow:10px 10px 0 var(--ink);color:#1d1c1d}
.lp-dark .lp-det{box-shadow:10px 10px 0 var(--yellow)}
.lp-det-hd{display:flex;align-items:center;gap:10px;padding:11px 16px;border-bottom:1px solid #e2e2e2;font-weight:800;font-size:14px}
.lp-det-hd .lp-m{margin-left:auto;font-size:10px;letter-spacing:.1em;color:#616061;font-weight:400}
.lp-det-body{padding:18px}
.lp-det-body h4{font-family:"Bungee",sans-serif;font-weight:400;font-size:19px;margin:0 0 6px;color:var(--ink)}
.lp-det-body .lp-why{font-size:14.5px;line-height:1.5;color:#3a3a3a;margin:0 0 14px;text-wrap:pretty}
.lp-card{border:1px solid #e2e2e2;border-radius:8px;padding:14px;background:#fff}
.lp-card+.lp-card{margin-top:10px}
.lp-ct{font-weight:800;font-size:14px;margin:0 0 4px}
.lp-cs{font-size:12.5px;color:#616061;margin:0 0 10px}
.lp-btns{display:flex;gap:7px;flex-wrap:wrap}
.lp-row{display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid #f2f2f2;font-size:13px}
.lp-row:last-child{border-bottom:0}
.lp-row .lp-r{margin-left:auto;font-size:12px;color:#616061}
.lp-chips{display:flex;gap:6px;flex-wrap:wrap}
.lp-chip{font-size:12px;border:1px solid #cfcfcf;border-radius:4px;padding:4px 8px;display:flex;gap:6px;align-items:center}
.lp-chip.lp-on{border-color:#007a5a;background:#eaf6f1;color:#00573f;font-weight:700}
.lp-chip.lp-on::before{content:"";width:9px;height:5px;border-left:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(-45deg) translateY(-2px)}
.lp-bar2{height:8px;background:#eee;border-radius:4px;overflow:hidden;margin:6px 0 2px}
.lp-bar2 i{display:block;height:100%;background:var(--green)}
.lp-ok{color:#00573f;font-weight:700}
.lp-no{color:#b3261e;font-weight:700}
.lp-st-tag{font-size:10.5px;font-weight:700;padding:2px 6px;border-radius:3px;background:#f1f1f1;color:#454245}
.lp-st-tag.lp-g{background:#eaf6f1;color:#00573f}
.lp-st-tag.lp-a{background:#fff4d6;color:#7a5600}
.lp-st-tag.lp-r{background:#fdecea;color:#8f1d16}
.lp-facts{margin:16px 0 0;padding:0;list-style:none;display:grid;gap:7px}
.lp-facts li{font-size:13.5px;line-height:1.45;display:flex;gap:9px;color:#3a3a3a}
.lp-facts li::before{content:"";width:8px;height:8px;margin-top:6px;flex:none;background:var(--yellow);border:2px solid var(--ink)}
.lp-tl{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.lp-tl div{border-radius:6px;padding:10px;font-size:12.5px;line-height:1.35}
.lp-tl b{display:block;font-size:13px;margin-bottom:3px}
.lp-tl .lp-g{background:#e5f6ec;border:1px solid #9fd7b5}
.lp-tl .lp-a{background:#fff4d6;border:1px solid #ebcd7a}
.lp-tl .lp-r{background:#fdecea;border:1px solid #ebaaa4}
/* mini licence */
.lp-lic{border:3px solid var(--ink);background:linear-gradient(150deg,#1b1710,#2b2318 50%,#15120c);color:#ffe9a8;padding:14px 16px;position:relative;overflow:hidden}
.lp-lic::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(58deg,rgba(255,204,0,.07) 0 1px,transparent 1px 12px),repeating-linear-gradient(-58deg,rgba(255,204,0,.07) 0 1px,transparent 1px 12px)}
.lp-lic>*{position:relative}
.lp-lic-hd{display:flex;gap:9px;align-items:center;border-bottom:2px solid currentColor;padding-bottom:8px;margin-bottom:10px}
.lp-lic-hd .lp-s{width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 34% 30%,#fff3c4,#f0c14b 52%,#a97612);color:#3a2c07;display:grid;place-items:center;font-family:"Bungee",sans-serif;font-size:11px;border:2px solid #f0c14b}
.lp-lic-hd .lp-d{font-size:12px}
.lp-lic-hd .lp-lg{margin-left:auto;font-family:"JetBrains Mono",monospace;font-size:9px;letter-spacing:.1em;border:2px solid #f0c14b;padding:3px 6px}
.lp-lic-b{display:grid;grid-template-columns:62px minmax(0,1fr);gap:12px;align-items:center}
.lp-lic-av{width:62px;height:62px;border-radius:50%;border:3px solid #f0c14b;background:#3a3020;display:grid;place-items:center;font-family:"Bungee",sans-serif;font-size:20px;color:#ffcc00}
.lp-lic-b .lp-d{font-size:18px;line-height:1}
.lp-lic-b .lp-m{font-size:10px;letter-spacing:.08em;opacity:.8;margin-top:5px;line-height:1.6}
.lp-lic-strip{height:6px;margin:12px -16px -14px;background:linear-gradient(90deg,#f0c14b,#fff3c4,#c9931f,#ffcc00)}
/* AFTER LICENCE */
.lp-g3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:52px}
.lp-tile{border:3px solid var(--ink);background:var(--cream);box-shadow:6px 6px 0 var(--ink);padding:26px;display:flex;flex-direction:column;gap:12px}
.lp-tile .lp-sign{width:58px;height:58px;background:var(--yellow);border:3px solid var(--ink);display:grid;place-items:center}
.lp-tile h3{font-family:"Bungee",sans-serif;font-weight:400;font-size:22px;line-height:1.1;margin:0}
.lp-tile p{margin:0;font-size:15.5px;line-height:1.55;text-wrap:pretty}
.lp-tile ul{margin:4px 0 0;padding:0;list-style:none;display:grid;gap:7px;border-top:2px dashed var(--line);padding-top:12px}
.lp-tile li{font-size:14px;line-height:1.45;display:flex;gap:9px}
.lp-tile li::before{content:"\203A";font-weight:700;color:var(--red)}
/* OVERSIGHT */
.lp-ov{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:28px;margin-top:52px}
.lp-panel{border:3px solid var(--cream);padding:26px;background:var(--asphalt-2)}
.lp-panel h3{font-family:"Bungee",sans-serif;font-weight:400;font-size:21px;margin:0 0 4px;color:var(--yellow)}
.lp-panel>p{margin:0 0 18px;font-size:15px;color:#d9d0b3;line-height:1.5}
.lp-ev{display:grid;grid-template-columns:150px minmax(0,1fr);border-top:2px solid #3a3828}
.lp-ev>div{padding:13px 0;font-size:14.5px;line-height:1.45}
.lp-ev>div:first-child{font-family:"JetBrains Mono",monospace;font-size:11.5px;letter-spacing:.08em;color:var(--yellow);padding-right:14px}
.lp-ev>div:last-child{color:#efe7cc}
.lp-flow{display:grid;gap:10px}
.lp-fl{display:grid;grid-template-columns:34px minmax(0,1fr);gap:12px;align-items:start}
.lp-fl .lp-k{width:34px;height:34px;border:2px solid var(--cream);display:grid;place-items:center;font-family:"Bungee",sans-serif;font-size:13px;background:var(--asphalt)}
.lp-fl b{display:block;font-size:15px;color:#fff;margin-bottom:2px}
.lp-fl span{font-size:13.5px;color:#d9d0b3;line-height:1.45}
.lp-outs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:6px}
.lp-outs div{border:2px solid var(--cream);padding:8px;font-size:12.5px;line-height:1.35;color:#efe7cc}
.lp-outs b{display:block;font-family:"Bungee",sans-serif;font-weight:400;font-size:12px;color:var(--yellow);margin-bottom:3px}
/* PLATFORMS + CTA */
.lp-plat{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:48px}
.lp-pl{border:3px solid var(--ink);padding:28px;background:var(--cream-2);box-shadow:7px 7px 0 var(--ink)}
.lp-pl .lp-s{display:inline-block;font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.12em;padding:4px 9px;border:2px solid var(--ink);margin-bottom:12px}
.lp-pl .lp-s.lp-live{background:var(--green);}
.lp-pl .lp-s.lp-soon{background:var(--yellow)}
.lp-pl h3{font-family:"Bungee",sans-serif;font-weight:400;font-size:28px;margin:0 0 10px}
.lp-pl p{font-size:16px;line-height:1.55;margin:0;text-wrap:pretty}
/* THE CARDS — plan switch, topic picker, blurred card previews */
.lp-pp{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:40px}
.lp-pp-tab{all:unset;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;gap:3px;padding:16px 18px;border:3px solid var(--ink);background:var(--cream);box-shadow:4px 4px 0 var(--ink);transition:transform .12s,box-shadow .12s,background .12s}
.lp-pp-tab b{font-family:"Bungee",sans-serif;font-weight:400;font-size:20px;line-height:1.1}
.lp-pp-n{font-weight:700;font-size:16px}
.lp-pp-c,.lp-pp-t{font-size:14px;color:var(--muted)}
.lp-pp-t{font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;margin-top:6px}
.lp-pp-tab:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 var(--ink)}
.lp-pp-tab[aria-checked="true"]{background:var(--ink);color:var(--cream);box-shadow:4px 4px 0 var(--yellow)}
.lp-pp-tab[aria-checked="true"] b{color:var(--yellow)}
.lp-pp-tab[aria-checked="true"] .lp-pp-c,.lp-pp-tab[aria-checked="true"] .lp-pp-t{color:#cfc49c}
.lp-tp-bar{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:32px}
.lp-tp-lbl{font-family:"JetBrains Mono",monospace;font-size:12px;letter-spacing:.08em;text-transform:uppercase;margin-right:auto}
.lp-tp-act{all:unset;cursor:pointer;font-weight:700;font-size:14px;text-decoration:underline;text-underline-offset:4px}
.lp-tp-act:hover{color:var(--red)}
.lp-tp-act:disabled{opacity:.4;cursor:default;color:inherit}
.lp-tp{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,270px),1fr));gap:12px;margin-top:14px}
.lp-tp-chip{all:unset;box-sizing:border-box;cursor:pointer;display:flex;width:100%;min-height:48px;align-items:center;gap:8px;padding:9px 14px;border:3px solid var(--ink);background:var(--cream);font-weight:600;font-size:14px;line-height:1.2;box-shadow:3px 3px 0 var(--ink);transition:transform .12s,box-shadow .12s,background .12s,opacity .12s}
.lp-tp-chip i{font-style:normal;font-family:"JetBrains Mono",monospace;font-weight:700;width:18px;height:18px;display:grid;place-items:center;border:2px solid var(--ink);font-size:11px;flex:none}
.lp-tp-name{flex:1}
.lp-tp-n{flex:none;font-family:"JetBrains Mono",monospace;font-size:11px;padding:2px 6px;border:2px solid var(--ink);background:var(--cream-2)}
.lp-tp-chip:hover{transform:translate(-2px,-2px);box-shadow:5px 5px 0 var(--ink)}
.lp-tp-chip[aria-pressed="true"]{background:var(--yellow)}
.lp-tp-chip[aria-pressed="true"] i{background:var(--ink);color:var(--yellow)}
.lp-tp-locked .lp-tp-chip{cursor:default}
.lp-tp-locked .lp-tp-chip:hover{transform:none;box-shadow:3px 3px 0 var(--ink)}
.lp-tp-locked .lp-tp-chip[aria-pressed="false"]{opacity:.45}
.lp-tp-chip:focus-visible,.lp-tp-act:focus-visible,.lp-pp-tab:focus-visible{outline:3px solid var(--red);outline-offset:2px}
.lp-tp-swipe{display:none}
@media(max-width:640px){
.lp-tp{display:grid;grid-auto-flow:column;grid-template-rows:repeat(2,auto);grid-auto-columns:max-content;gap:8px;overflow-x:auto;scroll-snap-type:x proximity;scroll-padding:0 20px;margin:12px -20px 0;padding:2px 20px 8px;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.lp-tp::-webkit-scrollbar{display:none}
.lp-tp-chip{width:auto;min-height:0;padding:8px 11px;gap:6px;font-size:13px;border-width:2px;box-shadow:2px 2px 0 var(--ink);scroll-snap-align:start}
.lp-tp-chip:hover,.lp-tp-locked .lp-tp-chip:hover{transform:none;box-shadow:2px 2px 0 var(--ink)}
.lp-tp-chip i{width:15px;height:15px;font-size:9px;border-width:2px}
.lp-tp-name{flex:none;white-space:nowrap}
.lp-tp-n{padding:0 4px;font-size:10px;border-width:1.5px}
.lp-tp-swipe{display:block;margin:6px 0 0;font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
}
.lp-tp-empty{margin:36px 0 0;padding:28px;border:3px dashed var(--ink);text-align:center;font-weight:600}
.lp-cg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-auto-rows:1fr;gap:24px;margin-top:36px}
.lp-xc{border:3px solid var(--ink);background:#fffdf6;box-shadow:6px 6px 0 var(--ink);display:flex;flex-direction:column}
.lp-xc-top{display:flex;justify-content:space-between;gap:10px;align-items:center;background:var(--ink);color:var(--yellow);padding:9px 14px;font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase}
.lp-xc-topic{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
.lp-xc-type{flex:none;background:var(--yellow);color:var(--ink);padding:2px 7px}
.lp-xc-body{padding:18px 18px 16px;flex:1;display:flex;flex-direction:column}
.lp-xc h3{font-family:"Bungee",sans-serif;font-weight:400;font-size:21px;line-height:1.1;margin:0}
.lp-xc-veil{position:relative;margin-top:16px;flex:1;display:flex;flex-direction:column;justify-content:center}
.lp-xc-blur{display:flex;flex-direction:column;gap:9px;filter:blur(3px);opacity:.75;user-select:none}
.lp-xc-blur span{display:block;height:11px;background:var(--muted);border-radius:2px}
.lp-xc-blur span.lp-short{width:60%}
.lp-xc-blur span.lp-do{height:40px;margin-top:6px;background:var(--cream-3)}
.lp-xc-lock{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);max-width:calc(100% - 16px);width:max-content;text-align:center;line-height:1.3;background:var(--ink);color:var(--cream);font-family:"Bungee",sans-serif;font-size:12px;padding:8px 12px;box-shadow:3px 3px 0 var(--yellow)}
.lp-xc-foot{border-top:2px dashed var(--line);padding:9px 18px;font-family:"JetBrains Mono",monospace;font-size:11px;color:var(--muted)}
.lp-cg-more{margin-top:28px;text-align:center}
.lp-ap{margin-top:32px;display:flex;flex-wrap:wrap;gap:14px 22px;align-items:center;border:3px solid var(--ink);background:var(--yellow);padding:16px 20px;box-shadow:5px 5px 0 var(--ink)}
.lp-ap-b{display:flex;gap:8px;flex-wrap:wrap}
.lp-ap-b span{font-family:"Bungee",sans-serif;font-size:12px;background:var(--cream);border:2px solid var(--ink);padding:6px 10px}
.lp-ap p{margin:0;font-size:15px;line-height:1.5;flex:1 1 320px}
.lp-xc-cta{margin-top:26px;display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:space-between;background:var(--ink);color:var(--cream);padding:22px 26px}
.lp-xc-cta b{display:block;color:var(--yellow);font-family:"Bungee",sans-serif;font-weight:400;font-size:16px;margin-bottom:6px}
.lp-xc-cta>div:first-child>span{font-size:15px;line-height:1.5}
.lp-xc-cta>div:first-child{flex:1 1 380px}
.lp-xc-cta .lp-hcta{margin:0;display:flex;gap:12px;flex-wrap:wrap}
.lp-xc-cta .lp-btn:not(.lp-y){background:var(--cream);color:var(--ink);border-color:var(--cream)}
@media(max-width:1000px){.lp-cg{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){.lp-pp{grid-template-columns:1fr;gap:10px;margin-top:28px}.lp-pp-tab{flex-direction:row;align-items:baseline;flex-wrap:wrap;gap:4px 10px;padding:12px 14px;box-shadow:3px 3px 0 var(--ink)}.lp-pp-tab b{font-size:16px;min-width:108px}.lp-pp-n{font-size:14px}.lp-pp-c{font-size:13px}.lp-pp-c::before{content:"· "}.lp-pp-t{display:none}.lp-cg{grid-template-columns:minmax(0,1fr);gap:20px}.lp-tp-chip{font-size:13px;padding:8px 11px}.lp-ap{padding:14px 16px}.lp-xc-cta{padding:18px}.lp-xc-cta>div:first-child{flex-basis:100%}.lp-xc-cta .lp-hcta{flex-direction:column;align-items:stretch;width:100%}.lp-xc-cta .lp-btn{justify-content:center}.lp-xc h3{font-size:19px}}
/* REGULATORY & COMPLIANCE */
.lp-rc{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;margin-top:44px}
@media(max-width:1000px){.lp-rc{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:560px){.lp-rc{grid-template-columns:1fr;margin-top:32px}}
.lp-rcc{border:3px solid var(--ink);background:var(--cream);padding:20px;box-shadow:5px 5px 0 var(--ink)}
.lp-rcc h3{margin:12px 0 8px;font-size:20px}.lp-rcc p{margin:0;font-size:15px;line-height:1.5;text-wrap:pretty}
.lp-rct{font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.1em;background:var(--red);color:var(--cream);padding:4px 8px;border:2px solid var(--ink)}
.lp-rcp{margin-top:26px;display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:space-between;background:var(--ink);color:var(--cream);padding:22px 26px}
.lp-rcp b{display:block;color:var(--yellow);font-family:"Bungee",sans-serif;font-weight:400;font-size:16px;margin-bottom:6px}.lp-rcp span{font-size:15px;line-height:1.5}.lp-rcp>div{flex:1 1 380px}
@media(max-width:560px){.lp-rcp{padding:18px}.lp-rcp>div{flex-basis:100%}}
.lp-cta{background:var(--yellow);text-align:center;padding:100px 0;border-bottom:4px solid var(--ink)}
.lp-cta .lp-h2{font-size:clamp(38px,5.4vw,72px)}
.lp-cta .lp-lede{margin:0 auto 30px}
.lp-cta .lp-hcta{justify-content:center;margin:0}
.lp-foot{background:var(--asphalt);color:#cfc49c;padding:44px 0;font-size:14px}
.lp-foot-in{display:flex;gap:28px;align-items:center;flex-wrap:wrap}
.lp-foot a{color:var(--cream);text-decoration:none}
.lp-foot a:hover{color:var(--yellow)}
.lp-foot a.lp-active{color:var(--red)}
.lp-foot .lp-brand{color:var(--cream)}
.lp-v-t{display:none}
.lp-root.lp-pf-teams .lp-v-s{display:none}
.lp-root.lp-pf-teams .lp-v-t{display:inline}
.lp-pf{display:inline-flex;border:3px solid var(--ink);background:var(--cream);box-shadow:3px 3px 0 var(--ink)}
.lp-pf button{all:unset;cursor:pointer;font-family:"Bungee",sans-serif;font-size:12px;padding:8px 13px;display:flex;align-items:center;gap:7px}
.lp-pf button+button{border-left:3px solid var(--ink)}
.lp-pf button[aria-pressed="true"]{background:var(--ink);color:var(--yellow)}
.lp-pf i{width:10px;height:10px;border:2px solid currentColor;border-radius:2px}
.lp-pf button:first-child i{background:#4a154b}
.lp-pf button:last-child i{background:#5b5fc7}
.lp-hero .lp-pf{margin-bottom:22px}
.lp-root.lp-pf-teams .lp-win-sb{background:#ebebf5;color:#424242}
.lp-root.lp-pf-teams .lp-win-sb .lp-ws{color:#242424;border-bottom-color:#d6d6e4}
.lp-root.lp-pf-teams .lp-win-sb .lp-ch.lp-on{background:#fff;color:#4f52b2;font-weight:700;box-shadow:inset 3px 0 0 #5b5fc7}
.lp-root.lp-pf-teams .lp-win,.lp-root.lp-pf-teams .lp-det{font-family:"Segoe UI",system-ui,sans-serif}
.lp-root.lp-pf-teams .lp-win-top .lp-pin{background:#eef0ff;border-color:#c5c8f2;color:#3d3f8f}
.lp-root.lp-pf-teams .lp-av{border-radius:50%}
.lp-root.lp-pf-teams .lp-ac,.lp-root.lp-pf-teams .lp-card{border-radius:6px;box-shadow:0 1px 2px rgba(0,0,0,.1)}
.lp-root.lp-pf-teams .lp-ac-hd{border-top:5px solid #5b5fc7}
.lp-root.lp-pf-teams .lp-sb{border-radius:4px;border-color:#d1d1d1}
.lp-root.lp-pf-teams .lp-sb.lp-pri{background:#5b5fc7;border-color:#5b5fc7}
.lp-root.lp-pf-teams .lp-prog .lp-bar i,.lp-root.lp-pf-teams .lp-bar2 i{background:#5b5fc7}
.lp-root.lp-pf-teams .lp-chip.lp-on{border-color:#5b5fc7;background:#eef0ff;color:#3d3f8f}
.lp-root.lp-pf-teams .lp-st.lp-now .lp-dot{border-color:#5b5fc7;color:#5b5fc7}
.lp-root.lp-pf-teams .lp-msg{background:#f5f5f5}
.lp-pl .lp-s.lp-live{background:var(--green)}
@media(max-width:1060px){.lp-hero-in,.lp-stp,.lp-ov,.lp-sides,.lp-plat{grid-template-columns:1fr}.lp-g3{grid-template-columns:1fr}.lp-pane{position:static}.lp-nl{display:none}.lp-burger{display:flex}}
@media(max-width:640px){.lp-wrap{padding:0 20px}.lp-hero-in{padding:56px 20px 130px}.lp-win{grid-template-columns:1fr}.lp-win-sb{display:none}.lp-band{padding:76px 0}.lp-ev{grid-template-columns:1fr}.lp-ev>div:first-child{padding-bottom:0}.lp-outs{grid-template-columns:1fr}.lp-ncta .lp-ghost{display:none}}
.lp-root [id]{scroll-margin-top:80px}
.lp-copy{margin-left:auto}

/* Tablets: steps sit above the detail pane, so lay them out 2-up */
@media(max-width:1060px){
.lp-stl{grid-template-columns:repeat(2,minmax(0,1fr))}
}
/* Dashboard gauges: shrink where they'd touch the wheel; one gauge on small tablets */
@media(max-width:860px),(min-width:1001px) and (max-width:1140px){
.lp-gauge-cluster{zoom:.78;gap:22px}
}
@media(max-width:720px){
.lp-gauge.lp-lvl{display:none}
}
@media(max-width:760px){
.lp-infotainment{width:180px;padding:12px 14px}
.lp-infotainment .lp-big{font-size:16px}
}
@media(max-width:690px){
.lp-infotainment{width:156px;padding:10px 12px}
.lp-infotainment .lp-row{font-size:9.5px}
.lp-infotainment .lp-big{font-size:14px}
}
@media(min-width:1001px) and (max-width:1100px){
.lp-infotainment{width:240px}
}

/* Phones / small tablets */
@media(max-width:640px){
.lp-mtn{bottom:40%}
.lp-mtn.lp-m2{border-width:0 120px 95px 120px}
.lp-mtn.lp-m3{border-width:0 140px 100px}
.lp-nav-in{height:64px;gap:10px}
.lp-burger{width:38px;height:38px;border-width:2px;box-shadow:2px 2px 0 var(--ink);gap:4px}
.lp-burger i{width:18px;height:2px}
.lp-burger.lp-open i:nth-child(1){transform:translateY(6px) rotate(45deg)}
.lp-burger.lp-open i:nth-child(3){transform:translateY(-6px) rotate(-45deg)}
.lp-mnav{max-height:calc(100vh - 64px)}
.lp-nav .lp-bm{width:40px;height:40px}
.lp-ncta{gap:8px}
.lp-ncta .lp-pf{border-width:2px;box-shadow:2px 2px 0 var(--ink)}
.lp-ncta .lp-pf button{font-size:10px;padding:6px 7px;gap:5px}
.lp-ncta .lp-pf button+button{border-left-width:2px}
.lp-ncta .lp-pf i{width:8px;height:8px}
.lp-ncta .lp-btn{padding:7px 10px;font-size:10px;gap:6px;border-width:2px;box-shadow:3px 3px 0 var(--ink)}
.lp-root [id]{scroll-margin-top:70px}
.lp-hero{height:680px}
.lp-cloud.lp-c2,.lp-cloud.lp-c3{display:none}
.lp-cloud.lp-c1{top:10px;left:-40px}
.lp-hero-headline{top:44px}
.lp-hero-title{font-size:clamp(40px,12.5vw,64px);text-shadow:4px 4px 0 var(--yellow)}
.lp-hero-title .lp-l2{text-shadow:4px 4px 0 var(--ink)}
.lp-hero-eyebrow{font-size:11px;padding:7px 12px;margin-bottom:16px}
.lp-hero-sub{margin-top:18px;font-size:15px;padding:9px 14px}
.lp-hstats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));width:100%}
.lp-hstats div{padding:10px 12px}
.lp-hstats b{font-size:19px}
.lp-hstats span{font-size:9.5px;letter-spacing:.06em}
.lp-win,.lp-det{box-shadow:6px 6px 0 var(--ink)}
.lp-dark .lp-det{box-shadow:6px 6px 0 var(--yellow)}
.lp-win-top{flex-wrap:wrap;row-gap:6px}
.lp-win-top .lp-pin{margin-left:0}
.lp-msg{padding:12px;gap:8px}
.lp-stp{margin-top:32px;gap:24px}
.lp-stl{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.lp-sbtn{grid-template-columns:34px minmax(0,1fr);gap:10px;padding:8px 10px 8px 8px}
.lp-sbtn .lp-n{width:34px;height:34px;font-size:14px;border-width:2px}
.lp-sbtn b{font-size:13px;line-height:1.15}
.lp-sbtn small{display:none}
.lp-sbtn[aria-selected="true"],.lp-dark .lp-sbtn[aria-selected="true"]{box-shadow:4px 4px 0 var(--ink);transform:translate(-2px,-2px)}
.lp-dark .lp-sbtn[aria-selected="true"]{box-shadow:4px 4px 0 var(--cream)}
.lp-det-body{padding:14px}
.lp-tl{grid-template-columns:1fr}
.lp-sides,.lp-g3,.lp-ov,.lp-plat{margin-top:32px;gap:22px}
.lp-side,.lp-tile,.lp-panel,.lp-pl{padding:22px}
.lp-side,.lp-pl{box-shadow:5px 5px 0 var(--ink)}
.lp-side.lp-k{box-shadow:5px 5px 0 var(--yellow)}
.lp-side h3,.lp-pl h3{font-size:23px}
.lp-cta{padding:72px 0}
.lp-cta .lp-hcta{flex-direction:column;align-items:stretch;max-width:300px;margin:0 auto}
.lp-cta .lp-hcta .lp-btn{justify-content:center}
.lp-foot{padding:32px 0}
.lp-foot-in{gap:12px 22px}
.lp-foot .lp-brand{flex-basis:100%;margin-bottom:6px}
.lp-copy{margin-left:0;flex-basis:100%;margin-top:6px;font-size:13px}
}
@media(max-width:480px){
.lp-nav .lp-brand span{display:none}
.lp-msg>.lp-av{display:none}
.lp-det-hd{flex-wrap:wrap;row-gap:4px}
.lp-ac-plan{gap:6px 12px}
}
@media(max-width:360px){
.lp-tp{margin-left:-14px;margin-right:-14px;padding-left:14px;padding-right:14px;scroll-padding:0 14px}
.lp-wrap{padding:0 14px}
.lp-nav .lp-bm{width:36px;height:36px}
.lp-ncta .lp-pf i,.lp-arr{display:none}
.lp-hstats b{font-size:16px}
}
@media(max-width:340px){
.lp-stl{grid-template-columns:1fr}
}
</style>
