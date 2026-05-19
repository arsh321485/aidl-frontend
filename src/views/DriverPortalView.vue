<template>
  <div class="portal-layout">
    <!-- SIDEBAR -->
    <aside class="sidebar">
      <a class="brand" href="#">
        <span class="brand-mark">AI</span>
        <span>AIDL<small>Driver Portal · v2.6</small></span>
      </a>
      <div class="nav-group">
        <h6>Drive</h6>
        <div class="nav-item" :class="{ active: currentView === 'dashboard' }" @click="currentView = 'dashboard'">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 11l9-7 9 7"/><path d="M5 10v9h14v-9"/></svg></span>
          Dashboard
        </div>
        <div class="nav-item" :class="{ active: currentView === 'highway' }" @click="currentView = 'highway'">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 21l3-18h10l3 18"/><path d="M9 3v18M15 3v18"/></svg></span>
          Highway Code
          <span class="nav-badge">10</span>
        </div>
        <div class="nav-item" :class="{ active: currentView === 'traffic' }" @click="currentView = 'traffic'">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="8" y="2" width="8" height="20" rx="3"/><circle cx="12" cy="7" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="17" r="1.6"/></svg></span>
          Traffic Light Check
        </div>
        <div class="nav-item" :class="{ active: currentView === 'prep' }" @click="currentView = 'prep'">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16v6H4z"/><path d="M4 14h10v6H4z"/></svg></span>
          PREP Builder
        </div>
      </div>
      <div class="nav-group">
        <h6>Policy</h6>
        <div class="nav-item" :class="{ active: currentView === 'aup' }" @click="currentView = 'aup'">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5"/></svg></span>
          Acceptable Use
          <span class="nav-badge">{{ aupRules.filter(r => !r.acked).length || '' }}</span>
        </div>
        <div class="nav-item" :class="{ active: currentView === 'glossary' }" @click="currentView = 'glossary'">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4z"/><path d="M4 4v12a4 4 0 004 4h12"/></svg></span>
          Glossary
        </div>
        <div class="nav-item" :class="{ active: currentView === 'qref' }" @click="currentView = 'qref'">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg></span>
          Quick Reference
        </div>
      </div>
      <div class="side-card">
        <div>YOUR LICENCE</div>
        <div class="lic-name">ALEX MORGAN</div>
        <div class="lic-id">AIDL-O-1182-4421</div>
        <div class="lic-meter"><i></i></div>
        <div class="lic-meter-label"><span>RENEWAL</span><span>9 mo left</span></div>
      </div>
    </aside>

    <!-- MAIN -->
    <main class="p-main">
      <!-- TOP BAR -->
      <div class="topbar">
        <div class="crumb"><span>AIDL</span><span>/</span><span class="here">{{ crumbNames[currentView] }}</span></div>
        <div class="top-search">
          <input placeholder="Search handbook, terms, rules…" />
          <kbd>⌘K</kbd>
        </div>
        <div class="top-actions">
          <div class="icon-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 8a6 6 0 1112 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 21a2 2 0 004 0"/></svg>
            <span class="dot"></span>
          </div>
          <div class="icon-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.5 2.5 0 015 0c0 2-2.5 2-2.5 4"/><circle cx="12" cy="17" r="0.8" fill="currentColor"/></svg>
          </div>
          <div class="avatar">
            <div class="avatar-img">AM</div>
            <div class="avatar-meta"><b>Alex Morgan</b><small>CLASS O · OPERATOR</small></div>
          </div>
        </div>
      </div>

      <!-- ===== DASHBOARD ===== -->
      <div class="page" v-show="currentView === 'dashboard'">
        <div class="head">
          <div>
            <span class="eyebrow">▼ MILE 142 · LICENCED &amp; ACTIVE</span>
            <h1>WELCOME BACK,<br/>ALEX.</h1>
            <p>You're 78% through your AI driver education. Next stop: <b>Part 7 — Acceptable Use Acknowledgement</b>. Keep both hands on the wheel.</p>
          </div>
          <div style="display:flex; gap: 10px;">
            <a class="p-btn p-btn-ghost" href="#" @click.prevent="currentView = 'qref'">Quick Reference</a>
            <a class="p-btn p-btn-yellow" href="#">Resume Lesson 04 →</a>
            <a class="p-btn p-btn-red" href="#">Take Road Test →</a>
          </div>
        </div>
        <div class="dash-grid">
          <div class="license-card">
            <div class="lic-head">
              <span><b>AI DRIVING LICENCE</b> · CLASS O · OPERATOR</span>
              <span>ISSUED 04/29/2026</span>
            </div>
            <div class="lic-body">
              <div class="lic-portrait"><div class="p-agent"><div class="p-antenna"></div><div class="p-head"></div><div class="p-body"></div><div class="p-badge"></div></div></div>
              <div class="lic-info">
                <div class="name">ALEX MORGAN</div>
                DOB 04/12/1994<br/>
                ROLE · MARKETING MANAGER<br/>
                EXPIRES 04/29/2027<br/>
                <div class="num">AIDL-O-1182-4421</div>
              </div>
              <div class="lic-qr"><div class="corner"></div></div>
            </div>
            <div class="lic-stamps">
              <span class="lic-stamp">Highway Code ✓</span>
              <span class="lic-stamp">Traffic Light ✓</span>
              <span class="lic-stamp">PREP ✓</span>
              <span class="lic-stamp">AUP · in progress</span>
              <span class="lic-stamp">Renewal · 9 mo</span>
            </div>
          </div>
          <div class="card">
            <div class="card-head"><h3>UP NEXT</h3><span class="tag">3 ITEMS</span></div>
            <div class="upnext">
              <div class="upnext-item">
                <div class="day"><b>18</b><small>MAY</small></div>
                <div class="what"><b>AUP Acknowledgement</b><small>Sign &amp; submit the 8-rule policy</small></div>
                <a class="p-btn p-btn-red" href="#" @click.prevent="currentView = 'aup'">Open</a>
              </div>
              <div class="upnext-item">
                <div class="day"><b>22</b><small>MAY</small></div>
                <div class="what"><b>Lesson 04 · PREP Framework</b><small>Resume at 14:22 / 26:00 · with Prof. Ragga</small></div>
                <a class="p-btn p-btn-yellow" href="#">Resume</a>
              </div>
              <div class="upnext-item">
                <div class="day"><b>06</b><small>JUN</small></div>
                <div class="what"><b>Road Test · Class O</b><small>Final assessment · 5 scenarios · with Sgt. Meridian</small></div>
                <a class="p-btn p-btn-red" href="#">Start</a>
              </div>
            </div>
          </div>
        </div>
        <div class="stat-strip">
          <div class="stat accent"><div class="k">Driving Hours</div><div class="v">87</div><div class="delta">+ 6 this week</div></div>
          <div class="stat"><div class="k">Traffic Light Checks</div><div class="v">241</div><div class="delta">96% correct</div></div>
          <div class="stat dark"><div class="k">PREP Prompts</div><div class="v">38</div><div class="delta">+ 4 today</div></div>
          <div class="stat"><div class="k">Incidents Reported</div><div class="v">2</div><div class="delta">cleared by safety</div></div>
        </div>
        <div class="route-progress">
          <div class="card-head" style="margin-bottom:6px;">
            <h3 style="color:var(--cream);">YOUR ROUTE · CORPORATE AI DRIVING LICENCE PROGRAMME</h3>
            <span class="tag live">MILE 142 OF 180</span>
          </div>
          <p style="color: var(--cream-3); margin: 0; font-size: 13px;">Six handbook parts, three checkpoints, one road test. You're in the home stretch.</p>
          <div class="route-bar">
            <div class="stop done" style="left: 8%;">1<span class="lbl">Handbook</span></div>
            <div class="stop done" style="left: 22%;">2<span class="lbl">Highway Code</span></div>
            <div class="stop done" style="left: 36%;">3<span class="lbl">Traffic Light</span></div>
            <div class="stop done" style="left: 50%;">4<span class="lbl">PREP</span></div>
            <div class="stop current" style="left: 64%;">5<span class="lbl">AUP · You are here</span></div>
            <div class="stop todo" style="left: 78%;">6<span class="lbl">Glossary Quiz</span></div>
            <div class="stop todo" style="left: 92%;">7<span class="lbl">Road Test</span></div>
          </div>
        </div>
        <div class="dash-grid" style="margin-top: 24px;">
          <div class="card">
            <div class="card-head"><h3>RECENT ACTIVITY</h3><span class="tag">LAST 7 DAYS</span></div>
            <div class="activity">
              <div class="act-row">
                <div class="act-icon green"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14140f" stroke-width="3"><path d="M5 12l5 5 9-11"/></svg></div>
                <div class="what"><b>PREP Practical · passed</b>Built a customer reply prompt with Prof. Ragga. Output verified by Sgt. Meridian.</div>
                <div class="when">2h ago</div>
              </div>
              <div class="act-row">
                <div class="act-icon red"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5ecd2" stroke-width="3"><path d="M12 8v5M12 17v.1"/><circle cx="12" cy="12" r="9"/></svg></div>
                <div class="what"><b>Red Light intercepted</b>Pasted draft with 2× PII flagged. Anonymised &amp; resubmitted.</div>
                <div class="when">Yesterday</div>
              </div>
              <div class="act-row">
                <div class="act-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14140f" stroke-width="3"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg></div>
                <div class="what"><b>Lesson 04 · The PREP Framework</b>14:22 / 26:00 watched · resume any time.</div>
                <div class="when">2 days ago</div>
              </div>
              <div class="act-row">
                <div class="act-icon green"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14140f" stroke-width="3"><path d="M5 12l5 5 9-11"/></svg></div>
                <div class="what"><b>Highway Code · 8 of 10 signs mastered</b>Two left: Falling Rocks (Data Leakage), Construction Ahead (Beta).</div>
                <div class="when">3 days ago</div>
              </div>
              <div class="act-row">
                <div class="act-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14140f" stroke-width="3"><path d="M4 4h16v16H4z"/><path d="M4 9h16"/></svg></div>
                <div class="what"><b>Glossary streak · 14 days</b>Mastered "Hallucination", "Temperature", "Prompt Injection".</div>
                <div class="when">4 days ago</div>
              </div>
            </div>
          </div>
          <div>
            <div class="card yellow" style="margin-bottom: 18px;">
              <div class="card-head"><h3>TODAY'S RULE OF THE ROAD</h3><span class="tag">RULE 04</span></div>
              <p style="margin:0; font-size: 14px; line-height: 1.5;"><b>Hallucination Awareness &amp; Verification.</b> Verify every factual claim, statistic, and citation against a trusted primary source — before relying on it.</p>
              <div style="margin-top: 14px; display: flex; gap: 8px;">
                <a class="p-btn" href="#" @click.prevent="currentView = 'highway'">See the sign</a>
                <a class="p-btn p-btn-ghost" href="#" @click.prevent="currentView = 'glossary'">Term: Hallucination</a>
              </div>
            </div>
            <div class="card dark">
              <div class="card-head"><h3 style="color:var(--cream);">YOUR INSTRUCTOR ON CALL</h3><span class="tag live">ONLINE</span></div>
              <div style="display: grid; grid-template-columns: 80px 1fr; gap: 16px; align-items: center;">
                <div style="width: 80px; height: 80px; background: var(--sign-yellow); border: 3px solid var(--ink); display:grid; place-items:center;">
                  <div class="p-agent" style="width:60px; height:70px;"><div class="p-antenna"></div><div class="p-head" style="width: 46px; height: 40px;"></div><div class="p-body" style="width: 54px; height: 28px;"></div><div class="p-badge" style="width: 14px; height: 14px; bottom: 6px;"></div></div>
                </div>
                <div>
                  <div style="font-family: 'Bungee'; font-size: 18px;">PROF. RAGGA</div>
                  <div style="font-family: 'JetBrains Mono'; font-size: 11px; color: var(--cream-3);">SPECIALIST · AGENTS &amp; PROMPTING</div>
                  <div style="font-size: 13px; margin-top: 6px; color: var(--cream-2);">"Ready when you are. Bring your draft prompt and we'll PREP it together."</div>
                </div>
              </div>
              <a class="p-btn p-btn-yellow" style="margin-top: 14px;" href="#" @click.prevent="currentView = 'prep'">Open PREP Builder →</a>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== HIGHWAY CODE ===== -->
      <div class="page" v-show="currentView === 'highway'">
        <div class="head">
          <div>
            <span class="eyebrow">▼ PART 1 OF 6</span>
            <h1>THE AI HIGHWAY CODE.</h1>
            <p>Signs, rules, and mandatory protocols for safe AI use. Learn them, follow them, stay safe.</p>
          </div>
          <a class="p-btn p-btn-yellow" href="#">Download PDF</a>
        </div>
        <div class="section-tabs">
          <div class="section-tab" :class="{ active: hwTab === 'A' }" @click="hwTab = 'A'">A · Regulatory <span style="font-family:'JetBrains Mono'; font-size:9px; opacity:0.6; margin-left:6px;">5</span></div>
          <div class="section-tab" :class="{ active: hwTab === 'B' }" @click="hwTab = 'B'">B · Warning <span style="font-family:'JetBrains Mono'; font-size:9px; opacity:0.6; margin-left:6px;">5</span></div>
          <div class="section-tab" :class="{ active: hwTab === 'C' }" @click="hwTab = 'C'">C · Information <span style="font-family:'JetBrains Mono'; font-size:9px; opacity:0.6; margin-left:6px;">3</span></div>
        </div>
        <div class="card" v-if="currentHW">
          <div class="card-head"><h3>{{ currentHW.title }}</h3><span class="tag">{{ currentHW.signs.length }} SIGNS</span></div>
          <p style="color: var(--muted); margin: 0 0 6px; font-size: 14px;">{{ currentHW.sub }}</p>
          <div v-for="sign in currentHW.signs" :key="sign.name" class="sign-row">
            <div class="sign-shape" :class="sign.shape"><span>{{ sign.glyph }}</span></div>
            <div class="sign-meta">
              <small>{{ sign.what }}</small>
              <b>{{ sign.name }}</b>
            </div>
            <div class="sign-action" v-html="sign.action"></div>
          </div>
        </div>
      </div>

      <!-- ===== TRAFFIC LIGHT ===== -->
      <div class="page" v-show="currentView === 'traffic'">
        <div class="head">
          <div>
            <span class="eyebrow">▼ PART 2 OF 6 · 3-SECOND CHECK</span>
            <h1>TRAFFIC LIGHT<br/>DATA CHECK.</h1>
            <p>Paste your draft prompt below. The system scans for personal, financial, health, and confidential signals — and tells you whether it's safe to drive.</p>
          </div>
        </div>
        <div class="tl-grid">
          <div class="tl-input">
            <h4>YOUR DRAFT PROMPT</h4>
            <textarea v-model="tlText" placeholder="Paste or type a prompt you're about to send to an AI tool…"></textarea>
            <div class="tl-pre">
              <button @click="tlText = TL_EXAMPLES.green">Try: Green example</button>
              <button @click="tlText = TL_EXAMPLES.amber">Try: Amber example</button>
              <button @click="tlText = TL_EXAMPLES.red">Try: Red example</button>
              <button @click="tlText = ''">Clear</button>
            </div>
            <div class="tl-flags">
              <template v-if="!tlResult.flags.length">
                <span style="color: var(--muted);">No flags detected.</span>
              </template>
              <template v-else>
                <b style="font-family:Bungee; font-size:11px;">SCAN · {{ tlResult.flags.length }} flag{{ tlResult.flags.length > 1 ? 's' : '' }}</b><br/>
                <span v-for="f in tlResult.flags" :key="f.key" class="flag" :class="f.level">{{ f.label }}{{ f.count > 1 ? ' ×' + f.count : '' }}</span>
              </template>
            </div>
          </div>
          <div class="tl-light">
            <div class="tl-housing">
              <div class="tl-bulb red"   :class="{ on: tlResult.level === 'red' }"></div>
              <div class="tl-bulb amber" :class="{ on: tlResult.level === 'amber' }"></div>
              <div class="tl-bulb green" :class="{ on: tlResult.level === 'green' }"></div>
            </div>
            <div class="tl-verdict" :class="tlResult.level">
              <div class="v-label">{{ VERDICTS[tlResult.level]?.lbl }}</div>
              <div class="v-action">{{ VERDICTS[tlResult.level]?.act }}</div>
            </div>
          </div>
        </div>
        <div class="tl-rules">
          <div class="tl-rule r-green">
            <h5>● GREEN · SAFE TO USE</h5>
            <p style="font-size:13px; margin: 0 0 6px;">Publicly available info, no personal data.</p>
            <ul><li>Press releases, marketing copy</li><li>Your own non-personal notes</li><li>General knowledge questions</li></ul>
            <div class="action"><b>ACTION:</b> Any approved AI tool.</div>
          </div>
          <div class="tl-rule r-amber">
            <h5>● AMBER · ENTERPRISE ONLY</h5>
            <p style="font-size:13px; margin: 0 0 6px;">Internal but non-sensitive business info.</p>
            <ul><li>Internal plans, meeting notes</li><li>Anonymised case studies</li><li>Department reports (no HR/salary)</li></ul>
            <div class="action"><b>ACTION:</b> Org-approved enterprise tool only.</div>
          </div>
          <div class="tl-rule r-red">
            <h5>● RED · STOP</h5>
            <p style="font-size:13px; margin: 0 0 6px;">Sensitive, regulated, confidential.</p>
            <ul><li>PII · names, emails, phone, IDs</li><li>PHI · medical &amp; insurance</li><li>Salaries, contracts, source code, secrets</li></ul>
            <div class="action"><b>ACTION:</b> Anonymise first. Then it becomes Amber.</div>
          </div>
        </div>
      </div>

      <!-- ===== PREP BUILDER ===== -->
      <div class="page" v-show="currentView === 'prep'">
        <div class="head">
          <div>
            <span class="eyebrow">▼ PART 3 OF 6 · IGNITION SEQUENCE</span>
            <h1>PREP YOUR PROMPT.</h1>
            <p>Four steps before every significant AI request. Fill each line, watch your prompt assemble in real time.</p>
          </div>
          <a class="p-btn p-btn-yellow" href="#" @click.prevent="copyPrep">{{ prepCopied ? '✓ Copied' : 'Copy Prompt' }}</a>
        </div>
        <div class="prep-grid">
          <div class="prep-form">
            <div class="prep-step s1">
              <div class="prep-letter">P</div>
              <div class="prep-body">
                <div class="lbl">STEP 1</div><div class="ttl">PERSONA</div>
                <div class="hint">Assign an expert role to the AI — sets vocabulary, perspective, depth.</div>
                <input v-model="prep.persona" />
                <div class="examples">
                  <button @click="prep.persona = 'Act as a Senior HR Manager with 15 years of experience in employment law.'">HR + 15 yrs</button>
                  <button @click="prep.persona = 'Act as an expert financial analyst specialising in monthly variance reporting.'">Finance Analyst</button>
                  <button @click="prep.persona = 'Act as a healthcare compliance officer familiar with HIPAA.'">Healthcare</button>
                </div>
              </div>
            </div>
            <div class="prep-step s2">
              <div class="prep-letter">R</div>
              <div class="prep-body">
                <div class="lbl">STEP 2</div><div class="ttl">REQUIREMENT</div>
                <div class="hint">State the task clearly and precisely.</div>
                <textarea v-model="prep.requirement" rows="2"></textarea>
                <div class="examples">
                  <button @click="prep.requirement = 'Summarise the key decisions and action items from the following meeting notes.'">Summarise meeting</button>
                  <button @click="prep.requirement = 'Draft a professional email to a client explaining a two-week project delay.'">Project delay email</button>
                </div>
              </div>
            </div>
            <div class="prep-step s3">
              <div class="prep-letter">E</div>
              <div class="prep-body">
                <div class="lbl">STEP 3</div><div class="ttl">EXPECTATION</div>
                <div class="hint">Format, length, style — so the output is immediately usable.</div>
                <textarea v-model="prep.expectation" rows="2"></textarea>
                <div class="examples">
                  <button @click="prep.expectation = 'Present as a table with columns: Action Item, Owner, Deadline.'">Table format</button>
                  <button @click="prep.expectation = 'Write in plain English, no jargon, under 150 words, with a call to action.'">Plain English</button>
                </div>
              </div>
            </div>
            <div class="prep-step s4">
              <div class="prep-letter">P</div>
              <div class="prep-body">
                <div class="lbl">STEP 4 · SAFETY LAYER</div><div class="ttl">PARAMETERS</div>
                <div class="hint">What NOT to include. Hard limits, traffic-light guardrails.</div>
                <textarea v-model="prep.parameters" rows="3"></textarea>
                <div class="examples">
                  <button @click="prep.parameters = 'Do not include any personal names. Replace all individuals with [Name].'">No names</button>
                  <button @click="prep.parameters = 'Do not include financial figures. Keep response under 200 words. No jargon.'">No financials</button>
                </div>
              </div>
            </div>
          </div>
          <div class="prep-preview">
            <div class="pphead">
              <h4>ASSEMBLED PROMPT</h4>
              <div class="dots"><i></i><i></i><i></i></div>
            </div>
            <div class="ppbody" v-html="prepHtml"></div>
            <div class="ppfoot">
              <div class="meta">{{ prepStats }}</div>
              <div class="meta">PRE-FLIGHT · <span style="color: var(--signal-green);">● TRAFFIC LIGHT GREEN</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== AUP ===== -->
      <div class="page" v-show="currentView === 'aup'">
        <div class="head">
          <div>
            <span class="eyebrow">▼ PART 4 OF 6 · BINDING POLICY</span>
            <h1>ACCEPTABLE USE.</h1>
            <p>Eight binding rules. Tap to acknowledge each. Sign at the bottom. Required for licence activation.</p>
          </div>
        </div>
        <div class="aup-grid">
          <div>
            <div v-for="rule in aupRules" :key="rule.num" class="aup-rule" :class="{ ack: rule.acked }">
              <div class="aup-num">{{ rule.num }}</div>
              <div class="aup-body"><b>{{ rule.title }}</b><p>{{ rule.body }}</p></div>
              <div class="aup-ack" @click="ackRule(rule)">
                {{ rule.acked ? 'ACKNOWLEDGED' : 'ACKNOWLEDGE' }}
                <span v-if="rule.acked" class="when">{{ rule.ackedAt }}</span>
              </div>
            </div>
          </div>
          <div class="aup-side">
            <div class="aup-progress">
              <div class="card-head"><h3 style="color:var(--cream);">ACKNOWLEDGEMENT</h3><span class="tag">EU AI ACT · ART.4</span></div>
              <div class="big">{{ ackCount }} / {{ aupRules.length }}</div>
              <div class="of">rules acknowledged</div>
              <div class="pbar"><i :style="{ width: ackPercent }"></i></div>
              <p style="margin: 14px 0 0; font-size: 12px; color: var(--cream-3); line-height:1.5;">Sign &amp; submit unlocks Class O · Operator licence and ends this part of your route.</p>
            </div>
            <div class="signature">
              <h5>EMPLOYEE ACKNOWLEDGEMENT</h5>
              <p style="margin:0; font-size: 12px; color: var(--muted);">I have read, understood, and agree to comply with this Acceptable Use Policy.</p>
              <div class="sig-line"><div class="lbl">Full Name</div><input v-model="sig.name" /></div>
              <div class="sig-line"><div class="lbl">Signature</div><div class="sig">{{ sig.name }}</div></div>
              <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="sig-line"><div class="lbl">Date</div><input v-model="sig.date" /></div>
                <div class="sig-line"><div class="lbl">Licence ID</div><input v-model="sig.licId" /></div>
              </div>
              <div class="sig-line"><div class="lbl">Department / Manager</div><input v-model="sig.dept" /></div>
              <button class="p-btn p-btn-red" style="margin-top: 16px; width: 100%;" @click="submitAup">SIGN &amp; SUBMIT</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== GLOSSARY ===== -->
      <div class="page" v-show="currentView === 'glossary'">
        <div class="head">
          <div>
            <span class="eyebrow">▼ PART 5 OF 6</span>
            <h1>GLOSSARY.</h1>
            <p>Plain-English definitions for the 17 AI terms you'll meet on the road. Read once — sound fluent.</p>
          </div>
        </div>
        <div class="glos-bar">
          <div class="glos-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
            <input v-model="glosSearch" placeholder="Search terms… e.g. hallucination, PII, temperature" />
          </div>
          <div class="glos-az">
            <button v-for="letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')" :key="letter"
              :disabled="!availableLetters.has(letter)"
              :class="{ active: glosLetter === letter }"
              @click="toggleLetter(letter)">{{ letter }}</button>
          </div>
        </div>
        <div class="glos-grid">
          <div v-for="term in filteredGlossary" :key="term.term" class="glos-card" :class="termTagClass(term.tags)">
            <div class="term">
              {{ term.term }}
              <span v-if="term.sub" style="font-family:Space Grotesk; font-size:12px; color: var(--muted); font-weight:500; margin-left:6px;">· {{ term.sub }}</span>
              <span class="abbr">{{ term.term[0] }}</span>
            </div>
            <div class="def">{{ term.def }}</div>
            <div class="tags">
              <span v-for="t in term.tags" :key="t" :class="['red','amber','green'].includes(t) ? t : ''">{{ t.toUpperCase() }}</span>
            </div>
          </div>
          <div v-if="!filteredGlossary.length" style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--muted); font-family: 'JetBrains Mono';">No terms match.</div>
        </div>
      </div>

      <!-- ===== QUICK REFERENCE ===== -->
      <div class="page" v-show="currentView === 'qref'">
        <div class="head">
          <div>
            <span class="eyebrow">▼ PART 6 OF 6 · ONE-PAGE</span>
            <h1>QUICK REFERENCE.</h1>
            <p>Pin it. Print it. Keep it next to your monitor. Everything that matters, one page.</p>
          </div>
          <a class="p-btn p-btn-yellow" href="#" @click.prevent="printCard">Print Card</a>
        </div>
        <div class="qref-wrap">
          <div class="qref-head">
            <div class="title">AI DRIVER · QUICK REFERENCE CARD</div>
            <div class="meta">CLASS O · OPERATOR<br/><b>AIDL-O-1182-4421</b></div>
          </div>
          <div class="qref-grid">
            <div class="qref-box green">
              <h5>● TRAFFIC LIGHT CHECK</h5>
              <ul><li><b>Green</b> · Public data → Any approved tool</li><li><b>Amber</b> · Internal data → Enterprise tools only</li><li><b>Red</b> · Sensitive → NEVER input into any AI</li></ul>
            </div>
            <div class="qref-box yellow">
              <h5>● PREP FRAMEWORK</h5>
              <ul><li><b>Persona</b> · Give the AI an expert role</li><li><b>Requirement</b> · State the task precisely</li><li><b>Expectation</b> · Define format and length</li><li><b>Parameters</b> · Set safety constraints</li></ul>
            </div>
            <div class="qref-box red">
              <h5>● NEVER DO THIS</h5>
              <ul><li>Input PII, passwords, or trade secrets</li><li>Use Shadow AI with company data</li><li>Copy-paste AI output without verifying</li><li>Let AI be the sole decision-maker</li><li>Share AI content with unverified facts</li></ul>
            </div>
            <div class="qref-box">
              <h5>● ALWAYS DO THIS</h5>
              <ul><li>Verify facts, dates, citations independently</li><li>Anonymise data before prompting</li><li>Keep humans in the loop for big decisions</li><li>Use PREP for every important request</li><li>Report biased or harmful output</li></ul>
            </div>
            <div class="qref-box dark">
              <h5 style="color: var(--sign-yellow);">● HALLUCINATION CHECKLIST</h5>
              <ul style="color: var(--cream);"><li>Can I verify this claim from a primary source?</li><li>Are the citations real &amp; accessible online?</li><li>Do the numbers add up independently?</li><li>Would a domain expert agree?</li></ul>
            </div>
            <div class="qref-box amber">
              <h5>● WHEN TO ESCALATE</h5>
              <ul><li>Wrong-tool data entry → IT Security immediately</li><li>Biased / harmful output → AI Governance</li><li>Copyright / IP concern → Legal Dept.</li><li>Policy questions → Line Manager / HR</li></ul>
            </div>
          </div>
          <div class="qref-foot">
            <span>CORPORATE AI DRIVING LICENCE PROGRAMME · v1.0 · 2026</span>
            <span>Drive safely. Drive wisely. Drive far.</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const currentView = ref('dashboard')
const crumbNames: Record<string, string> = {
  dashboard: 'Dashboard', highway: 'Highway Code', traffic: 'Traffic Light Check',
  prep: 'PREP Builder', aup: 'Acceptable Use', glossary: 'Glossary', qref: 'Quick Reference'
}

// ===== HIGHWAY CODE =====
const hwTab = ref('A')
const HW: Record<string, { title: string; sub: string; signs: { shape: string; glyph: string; name: string; what: string; action: string }[] }> = {
  A: {
    title: 'Section A · Regulatory Signs (Mandatory Actions)',
    sub: 'Legally or policy-required. Ignoring them is a breach of policy.',
    signs: [
      { shape: 'octagon',  glyph: 'STOP',      name: 'Red Light Data Protocol',    what: 'STOP',        action: 'Halt immediately. Do not input <strong>PII, health records, passwords, financial credentials, trade secrets, or source code</strong> into any AI tool, on any platform, at any time. This is a hard boundary with zero exceptions.' },
      { shape: 'no-entry', glyph: '',           name: 'Shadow AI Prohibition',      what: 'DO NOT ENTER',action: 'Access denied. Never use AI tools that are not approved by IT. If a tool requires a personal account, is not on the company allow-list, or is a free consumer service — <strong>do not enter corporate data or credentials</strong>.' },
      { shape: 'rect',     glyph: 'ONE WAY →',  name: 'Unidirectional Data Flow',   what: 'ONE WAY',     action: 'Read-only mode. You may use AI to read or summarise a document, but the data must <strong>not leave the secure enterprise tenant</strong>. Ensure Model Training is disabled — your data flows one way: for your use, not into training datasets.' },
      { shape: 'circle',   glyph: '60',          name: 'Verification Velocity',      what: 'SPEED LIMIT', action: 'Slow down. AI generates faster than humans can verify. <strong>Never copy-paste AI output</strong> directly into a document, email, or client deliverable. Read, review, fact-check every line before it goes anywhere important.' },
      { shape: 'triangle', glyph: 'YIELD',       name: 'Human-in-the-Loop',          what: 'YIELD',       action: 'Give way to human judgment. When AI suggests a decision affecting a person — hiring rank, credit, medical — <strong>pause and ensure a qualified human reviews it</strong>. AI is the co-pilot, never the captain.' },
    ]
  },
  B: {
    title: 'Section B · Warning Signs (Hazards & Conditions)',
    sub: 'Alert you to conditions requiring extra care. They demand heightened attention.',
    signs: [
      { shape: 'diamond', glyph: 'SLIPPERY', name: 'Hallucination Hazard',      what: 'SLIPPERY WHEN WET',   action: 'When prompting about obscure facts, recent events, legal precedents, or statistics, AI may fabricate plausible-sounding but false information. <strong>Always verify citations, dates, and figures</strong> against a trusted primary source.' },
      { shape: 'diamond', glyph: 'BETA',     name: 'Beta / Sandbox Mode',       what: 'CONSTRUCTION AHEAD',  action: 'Testing only. New AI agents and beta features may produce bugs or inconsistent outputs. <strong>Do not use beta tools for mission-critical client deliverables</strong> without a mandatory secondary human review.' },
      { shape: 'diamond', glyph: 'SCHOOL',   name: 'High-Risk or Vulnerable Data', what: 'SCHOOL ZONE',      action: 'Maximum sensitivity. When processing data about employees, job candidates, health info, or minors, apply <strong>strict anti-bias and fairness checks</strong>. Errors here can be severe and legally actionable.' },
      { shape: 'diamond', glyph: 'MERGE',    name: 'Hybrid Workflows',          what: 'MERGING TRAFFIC',     action: 'Integrate carefully. When combining AI-generated text with human-written work, <strong>check tone, style, factual accuracy, and formatting</strong> are consistent before publication.' },
      { shape: 'diamond', glyph: 'ROCKS',    name: 'Data Leakage Risk',         what: 'FALLING ROCKS',       action: 'Watch your inputs. Beware prompt-injection and hidden metadata in pasted content. <strong>Sanitise prompts</strong> — remove names, dates, financial figures, identifying details — before inputting.' },
    ]
  },
  C: {
    title: 'Section C · Information & Guidance Signs',
    sub: 'Guidance and support. Following them makes you a better, safer AI operator.',
    signs: [
      { shape: 'shield', glyph: 'HELP',   name: 'Escalate Unusual Output',  what: 'HELP',     action: 'If AI produces output that appears <strong>toxic, biased, legally problematic, or factually dangerous</strong>, do not use it, do not share it, do not try to fix it. Report it to AI Governance or IT immediately.' },
      { shape: 'shield', glyph: 'P',      name: 'The Step Away Rule',        what: 'REST AREA',action: 'Stuck in a prompt loop — same poor answer repeating? <strong>Stop. Step away. Then rewrite your prompt from scratch using PREP.</strong> Persistence with a bad prompt only produces more bad output.' },
      { shape: 'shield', glyph: 'U-TURN', name: 'Iterative Refinement',      what: 'U-TURN',   action: 'The first answer is almost never the final deliverable. Standard practice is to <strong>U-turn: instruct the AI to refine, shorten, retone, add examples</strong> until quality is met. This is the process, not a failure.' },
    ]
  }
}
const currentHW = computed(() => HW[hwTab.value])

// ===== TRAFFIC LIGHT =====
const TL_EXAMPLES = {
  green: 'Write a 200-word LinkedIn post summarising the published findings of our 2025 Industry Outlook white paper, which is available on our public website. Use a professional, optimistic tone.',
  amber: 'Summarise the key decisions and action items from this internal Q2 strategy meeting note: "The team agreed to defer the platform refresh to Q3, allocate the design team to onboarding flows, and re-prioritise the analytics dashboard for next quarter."',
  red:   'Act as a Senior HR Manager. Draft a polite email to Sarah Lopez (sarah.lopez@company.com) confirming her promotion to Director, effective June 1, with her new salary of $145,000. Reference her offer letter dated 04/29/2026.'
}
const VERDICTS: Record<string, { lbl: string; act: string }> = {
  idle:  { lbl: 'SCAN PROMPT',     act: 'Type or paste a prompt. The signal updates as you write — three seconds, before you hit send.' },
  green: { lbl: 'GREEN · GO',      act: 'Public-safe. Approved in any AI tool, enterprise or consumer.' },
  amber: { lbl: 'AMBER · CAUTION', act: "Internal context detected. Use ONLY in your organisation's approved enterprise AI tool. Never in free consumer tools." },
  red:   { lbl: 'RED · STOP',      act: 'Sensitive data detected. Do not submit. Anonymise — replace names with [Name], salaries with [Band], dates with [Date] — then re-scan.' }
}
const PATTERNS: Record<string, RegExp> = {
  pii_email:     /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/gi,
  pii_phone:     /\b(?:\+?\d{1,3}[ -]?)?(?:\(\d{2,4}\)|\d{2,4})[ -]?\d{3,4}[ -]?\d{3,4}\b/g,
  pii_name:      /\b(?:Mr|Mrs|Ms|Dr|Sir|Sarah|John|Maria|Priya|Jamie|Alex|Sam|Chen|Lopez|Smith|Patel|Reddy|Okafor|Morgan)\b\s+[A-Z][a-z]+/g,
  money:         /\$\s?\d[\d,]*(?:\.\d+)?|\b\d{4,}\s?(?:USD|EUR|GBP|salary|wage)\b/gi,
  salary:        /\b(?:salary|compensation|wage|bonus|comp(?:ensation)? package)\b/gi,
  health:        /\b(?:diagnos(?:is|ed)|patient|medical|prescription|insurance claim|HIPAA|PHI|treatment plan)\b/gi,
  credentials:   /\b(?:password|api[_ ]?key|token|secret|credential|ssh key|bearer)\b/gi,
  ip_secret:     /\b(?:trade secret|source code|roadmap|unpublished|confidential|NDA)\b/gi,
  contract:      /\b(?:contract|pricing agreement|MSA|SOW|legal correspondence)\b/gi,
  date_pii:      /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g,
  internal:      /\b(?:internal|meeting note|Q[1-4] strategy|team agreed|deferred to|allocate the|department report)\b/gi,
  anon_marker:   /\[(?:Person|Name|Client|Band|Customer)[ A-Z]\]/g,
  public_marker: /\b(?:press release|public website|published|white paper|public report|publicly available|marketing copy)\b/gi
}
const FLAG_META: Record<string, { label: string; level: 'red' | 'amber' | 'green' }> = {
  pii_email: { label: 'EMAIL', level: 'red' }, pii_phone: { label: 'PHONE', level: 'red' },
  pii_name: { label: 'PERSONAL NAME', level: 'red' }, money: { label: 'FINANCIAL FIGURE', level: 'red' },
  salary: { label: 'SALARY / COMP', level: 'red' }, health: { label: 'HEALTH / PHI', level: 'red' },
  credentials: { label: 'CREDENTIAL', level: 'red' }, ip_secret: { label: 'CONFIDENTIAL IP', level: 'red' },
  contract: { label: 'CONTRACT / LEGAL', level: 'red' }, date_pii: { label: 'SPECIFIC DATE', level: 'amber' },
  internal: { label: 'INTERNAL CONTEXT', level: 'amber' }, anon_marker: { label: 'ANONYMISED', level: 'green' },
  public_marker: { label: 'PUBLIC SOURCE', level: 'green' }
}
const tlText = ref(TL_EXAMPLES.red)
const tlResult = computed(() => {
  const t = tlText.value || ''
  const flags: { key: string; label: string; level: 'red' | 'amber' | 'green'; count: number }[] = []
  for (const [key, rx] of Object.entries(PATTERNS)) {
    const m = t.match(rx)
    if (m?.length) {
      const meta = FLAG_META[key]
      if (!meta) continue
      flags.push({ key, label: meta.label, level: meta.level, count: m.length })
    }
  }
  const reds = flags.filter(f => f.level === 'red')
  const ambers = flags.filter(f => f.level === 'amber')
  const level = !t.trim() ? 'idle' : reds.length ? 'red' : ambers.length ? 'amber' : 'green'
  return { level, flags }
})

// ===== PREP BUILDER =====
const prep = reactive({
  persona: 'Act as a Senior Marketing Manager.',
  requirement: 'Write a LinkedIn post announcing the launch of our new product.',
  expectation: '150 words maximum, conversational and professional tone, end with a clear call to action.',
  parameters: 'Do not mention competitor products. Do not include pricing. No technical jargon — the audience is non-technical decision-makers.'
})
const prepCopied = ref(false)
const prepHtml = computed(() => {
  const { persona: P, requirement: R, expectation: E, parameters: Par } = prep
  let html = ''
  if (P.trim()) html += '<span class="k">PERSONA:</span> ' + P + '<br/><br/>'
  if (R.trim()) html += '<span class="k">REQUIREMENT:</span> ' + R + '<br/><br/>'
  if (E.trim()) html += '<span class="k">EXPECTATION:</span> ' + E + '<br/><br/>'
  if (Par.trim()) html += '<span class="k">PARAMETERS:</span> ' + Par
  if (!html) html = '<span style="color:var(--cream-3);">Fill in any of the four boxes to assemble your prompt…</span>'
  return html + '<span class="cur"></span>'
})
const prepStats = computed(() => {
  const plain = [prep.persona, prep.requirement, prep.expectation, prep.parameters].filter(Boolean).join(' ').trim()
  return `${plain.length} chars · ~${Math.max(1, Math.ceil(plain.length / 4))} tokens`
})
function copyPrep() {
  const txt = `PERSONA: ${prep.persona}\n\nREQUIREMENT: ${prep.requirement}\n\nEXPECTATION: ${prep.expectation}\n\nPARAMETERS: ${prep.parameters}`
  navigator.clipboard?.writeText(txt)
  prepCopied.value = true
  setTimeout(() => { prepCopied.value = false }, 1500)
}

// ===== AUP =====
interface AupRule { num: number; title: string; body: string; acked: boolean; ackedAt: string }
const aupRules = reactive<AupRule[]>([
  { num: 1, title: 'Approved Tools Only', body: 'Use only AI tools on the IT-approved list. Shadow AI with corporate data is a data breach and a disciplinary offence — regardless of intent.', acked: true, ackedAt: '14 May · 09:12' },
  { num: 2, title: 'Data Classification Compliance', body: 'Apply the Traffic Light check before every input. Red data must never enter any AI system. Amber data only in enterprise-grade, organisation-approved instances.', acked: true, ackedAt: '14 May · 09:14' },
  { num: 3, title: 'Mandatory Human Review', body: 'All AI-generated content for external comms, legal, financial reports, or HR decisions must be reviewed by a qualified human before use. AI is a drafting assistant — not a decision-maker.', acked: true, ackedAt: '14 May · 09:18' },
  { num: 4, title: 'Hallucination Awareness & Verification', body: 'Verify every factual claim, statistic, citation, and legal reference against trusted primary sources. Submitting unverified AI output as factual is a misconduct offence.', acked: true, ackedAt: '14 May · 09:22' },
  { num: 5, title: 'No Impersonation or Deceptive Use', body: 'Do not use AI to impersonate colleagues, clients, or public figures; create misleading or defamatory content; or disguise AI involvement where disclosure is required.', acked: true, ackedAt: '14 May · 09:24' },
  { num: 6, title: 'Intellectual Property Protection', body: 'Do not upload third-party copyrighted material, client documents, or competitive intelligence without explicit Legal authorisation. Consult Legal before using AI output in published or commercial materials.', acked: false, ackedAt: '' },
  { num: 7, title: 'Reporting Obligations', body: 'Any AI output that appears biased, toxic, harmful, legally problematic, or factually dangerous must be reported immediately to AI Governance. Do not share, publish, or act upon it.', acked: false, ackedAt: '' },
  { num: 8, title: 'Annual Licence Renewal', body: 'The AI Driving Licence must be renewed every 12 months. Expired licences may not use AI tools for professional tasks until renewal is complete.', acked: false, ackedAt: '' },
])
const ackCount = computed(() => aupRules.filter(r => r.acked).length)
const ackPercent = computed(() => (ackCount.value / aupRules.length * 100).toFixed(1) + '%')
function ackRule(rule: AupRule) {
  if (rule.acked) return
  const now = new Date()
  const dd = String(now.getDate()).padStart(2, '0')
  const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][now.getMonth()]
  const hh = String(now.getHours()).padStart(2, '0')
  const mm = String(now.getMinutes()).padStart(2, '0')
  rule.acked = true
  rule.ackedAt = `${dd} ${month} · ${hh}:${mm}`
}
const sig = reactive({ name: 'Alex Morgan', date: '15 May 2026', licId: 'AIDL-O-1182-4421', dept: 'Marketing · J. Chen' })
function submitAup() {
  if (ackCount.value < aupRules.length) {
    alert(`Acknowledge all ${aupRules.length} rules before signing. You have ${ackCount.value} / ${aupRules.length}.`)
  } else {
    alert('Signed & submitted. Your Class O · Operator licence is fully activated.')
  }
}

// ===== GLOSSARY =====
interface GlossaryTerm { term: string; sub?: string; def: string; tags: string[] }
const GLOSSARY: GlossaryTerm[] = [
  { term:'AI', sub:'Artificial Intelligence', def:"Computer systems that perform tasks normally requiring human intelligence — language understanding, image recognition, decision-making. AI doesn't think; it identifies patterns in data.", tags:['core'] },
  { term:'Algorithm', def:'A set of step-by-step instructions a computer follows to solve a problem or produce a result. A recipe: given these inputs, follow these steps, produce this output.', tags:['core'] },
  { term:'Bias', sub:'in AI', def:'When an AI system produces consistently unfair or skewed results because the data it was trained on was unbalanced — e.g. a hiring tool that favours certain demographics because historical hiring records reflected those biases.', tags:['amber','safety'] },
  { term:'Chatbot', def:'A programme that simulates conversation with a human. Modern AI chatbots (ChatGPT, Copilot, Gemini) can understand context, maintain a conversation, and produce coherent responses.', tags:['core'] },
  { term:'Context Window', def:"The amount of text an AI model can process at one time — its working memory. Information from earlier in a conversation may be forgotten if the conversation exceeds the context window.", tags:['core'] },
  { term:'GDPR', sub:'General Data Protection Regulation', def:'EU law governing how personal data must be collected, stored, processed, and deleted. AI tools that process data about EU residents must comply. Violations carry substantial fines.', tags:['red','policy'] },
  { term:'Generative AI', def:'AI that creates new content — text, images, audio, code, video — rather than merely analysing existing data. ChatGPT, Gemini, Copilot, and Claude are all generative AI tools.', tags:['core'] },
  { term:'Hallucination', def:"When an AI confidently states something factually incorrect or fabricated. The AI isn't lying — it's predicting likely-sounding text without verifying truth. Verification is mandatory for all AI outputs.", tags:['amber','safety'] },
  { term:'LLM', sub:'Large Language Model', def:'The technology powering most modern AI chatbots. Trained on enormous amounts of text and learns to predict the most probable next word. GPT-4, Gemini, and Claude are LLMs.', tags:['core'] },
  { term:'PII', sub:'Personally Identifiable Information', def:'Any data that can identify a specific individual: full name, email, phone, national ID, address, IP address, date of birth, biometrics. Always Red Light — never input into any AI tool.', tags:['red','policy'] },
  { term:'PHI', sub:'Protected Health Information', def:'Medical and health-related data protected by law — diagnoses, treatment records, prescriptions, insurance info. Additional legal protections beyond standard PII. Always Red Light.', tags:['red','policy'] },
  { term:'Prompt', def:'The instruction, question, or text you type into an AI tool. The quality and clarity of your prompt directly determines the quality of the output. Writing effective prompts is a learnable skill.', tags:['core'] },
  { term:'Prompt Engineering', def:'The discipline of writing effective prompts to consistently obtain high-quality, safe, useful outputs. The PREP framework in this handbook is a structured prompt engineering methodology.', tags:['core'] },
  { term:'Prompt Injection', def:'A security attack where malicious instructions are hidden in content the AI processes — e.g. inside a pasted document — causing the AI to perform unintended actions or leak information.', tags:['red','safety'] },
  { term:'Shadow AI', def:'The unsanctioned use of public or personal AI tools with corporate data, without IT approval. A primary source of data leakage and compliance risk. Prohibited under this policy.', tags:['red','policy'] },
  { term:'Temperature', def:"A setting that controls how creative or predictable an AI's responses are. Low temperature: consistent, factual, predictable. High temperature: varied, creative, sometimes unpredictable.", tags:['core'] },
  { term:'Token', def:'The basic unit of text an AI model processes — roughly three-quarters of an average word. Models have a max number of tokens per interaction, which limits document size in a prompt.', tags:['core'] },
  { term:'Training Data', def:'The vast collection of text, images, or other information used to teach an AI model. The quality, diversity, and biases in training data directly shape capabilities, limitations, and biases.', tags:['core'] },
].sort((a, b) => a.term.localeCompare(b.term))

const glosSearch = ref('')
const glosLetter = ref<string | null>(null)
const availableLetters = computed(() => new Set(GLOSSARY.map(g => g.term.charAt(0).toUpperCase())))
const filteredGlossary = computed(() => {
  const f = glosSearch.value.toLowerCase().trim()
  return GLOSSARY.filter(g => {
    const blob = (g.term + ' ' + (g.sub || '') + ' ' + g.def).toLowerCase()
    return (!f || blob.includes(f)) && (!glosLetter.value || g.term.charAt(0).toUpperCase() === glosLetter.value)
  })
})
function toggleLetter(letter: string) {
  glosLetter.value = glosLetter.value === letter ? null : letter
}
function termTagClass(tags: string[]) {
  if (tags.includes('red')) return 'red'
  if (tags.includes('amber')) return 'amber'
  if (tags.includes('green')) return 'green'
  return ''
}
function printCard() { window.print() }
</script>

<style>
/* Portal layout wrapper — scoped to portal only */
.portal-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

/* SIDEBAR */
aside.sidebar {
  background: var(--asphalt);
  color: var(--cream);
  border-right: 3px solid var(--ink);
  padding: 22px 18px;
  display: flex; flex-direction: column;
  position: sticky; top: 0; height: 100vh;
}
.side-card {
  margin-top: auto;
  background: var(--asphalt-2);
  border: 2px solid var(--asphalt-3);
  padding: 14px;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  color: var(--cream-2);
}
.side-card .lic-name { font-family: "Bungee", sans-serif; font-size: 14px; color: var(--cream); margin: 4px 0; line-height: 1; }
.side-card .lic-id { color: var(--sign-yellow); letter-spacing: 0.06em; }
.side-card .lic-meter { height: 6px; background: var(--asphalt-3); margin-top: 10px; border: 1px solid var(--asphalt); position: relative; }
.side-card .lic-meter > i { display: block; height: 100%; background: var(--signal-green); width: 78%; }
.side-card .lic-meter-label { display: flex; justify-content: space-between; margin-top: 4px; font-size: 9px; }

/* NAV */
.nav-group { margin-top: 18px; }
.nav-group h6 { font-family: "Bungee", sans-serif; font-size: 10px; color: var(--sign-yellow); margin: 0 0 8px; padding: 0 6px; letter-spacing: 0.1em; }
.nav-item {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 12px; margin-bottom: 2px;
  cursor: pointer; font-size: 14px; font-weight: 600;
  color: var(--cream-2); border: 2px solid transparent;
  transition: background .12s; user-select: none;
}
.nav-item:hover { background: var(--asphalt-2); color: var(--cream); }
.nav-item.active { background: var(--sign-yellow); color: var(--ink); border: 2px solid var(--ink); box-shadow: 3px 3px 0 var(--asphalt); }
.nav-item .nav-ico { width: 22px; height: 22px; display: grid; place-items: center; flex: 0 0 22px; }
.nav-item .nav-ico svg { width: 100%; height: 100%; }
.nav-item .nav-badge { margin-left: auto; font-family: "JetBrains Mono", monospace; font-size: 9px; padding: 2px 6px; background: var(--signal-red); color: var(--cream); }
.nav-item.active .nav-badge { background: var(--ink); color: var(--sign-yellow); }

/* MAIN */
.p-main { display: flex; flex-direction: column; min-width: 0; }

/* TOPBAR */
.topbar {
  background: var(--cream);
  border-bottom: 3px solid var(--ink);
  padding: 16px 36px;
  display: flex; align-items: center; gap: 24px;
  position: sticky; top: 0; z-index: 30;
}
.crumb { display: flex; align-items: center; gap: 10px; font-family: "JetBrains Mono", monospace; font-size: 11px; color: var(--muted); text-transform: uppercase; }
.crumb .here { color: var(--ink); }
.top-search { margin-left: auto; display: flex; align-items: center; gap: 0; border: 3px solid var(--ink); background: #fff; height: 40px; padding: 0 12px; min-width: 280px; }
.top-search input { border: 0; outline: 0; background: transparent; flex: 1; height: 100%; font-family: "Space Grotesk"; font-size: 14px; font-weight: 600; }
.top-search kbd { font-family: "JetBrains Mono", monospace; font-size: 10px; background: var(--ink); color: var(--cream); padding: 2px 6px; }
.top-actions { display: flex; align-items: center; gap: 10px; }
.icon-btn { width: 40px; height: 40px; border: 3px solid var(--ink); background: var(--cream); display: grid; place-items: center; cursor: pointer; position: relative; }
.icon-btn .dot { position: absolute; top: -4px; right: -4px; width: 14px; height: 14px; background: var(--signal-red); border: 2px solid var(--ink); border-radius: 50%; }
.avatar { display: flex; align-items: center; gap: 10px; border: 3px solid var(--ink); padding: 4px 12px 4px 4px; background: var(--cream); height: 40px; }
.avatar-img { width: 32px; height: 32px; background: var(--sign-yellow); border: 2px solid var(--ink); display: grid; place-items: center; font-family: "Bungee"; font-size: 12px; }
.avatar-meta { line-height: 1.1; }
.avatar-meta b { font-family: "Bungee"; font-size: 12px; display: block; }
.avatar-meta small { font-family: "JetBrains Mono", monospace; font-size: 9px; color: var(--muted); }

/* PAGE */
.p-main .page { padding: 32px 36px 60px; flex: 1; min-width: 0; }
.p-main .page .head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 24px; }
.p-main .page .head h1 { font-family: "Bungee"; font-size: 44px; margin: 0; line-height: 0.95; }
.p-main .page .head p { margin: 8px 0 0; color: var(--muted); font-size: 14px; max-width: 600px; }
.p-main .page .head .eyebrow { font-family: "Bungee"; font-size: 11px; background: var(--ink); color: var(--sign-yellow); padding: 4px 10px; display: inline-block; margin-bottom: 12px; }

/* PORTAL BUTTONS (prefixed p-btn to avoid home page conflict) */
.p-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 18px; background: var(--ink); color: var(--cream);
  border: 3px solid var(--ink); font-family: "Bungee", sans-serif; font-size: 12px;
  text-decoration: none; box-shadow: 4px 4px 0 var(--sign-yellow);
  transition: transform .12s, box-shadow .12s; cursor: pointer;
}
.p-btn:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--sign-yellow); }
.p-btn.p-btn-yellow { background: var(--sign-yellow); color: var(--ink); box-shadow: 4px 4px 0 var(--ink); }
.p-btn.p-btn-yellow:hover { box-shadow: 6px 6px 0 var(--ink); }
.p-btn.p-btn-red { background: var(--signal-red); color: var(--cream); box-shadow: 4px 4px 0 var(--ink); }
.p-btn.p-btn-red:hover { box-shadow: 6px 6px 0 var(--ink); }
.p-btn.p-btn-ghost { background: var(--cream); color: var(--ink); box-shadow: none; }
.p-btn.p-btn-green { background: var(--signal-green); color: var(--ink); box-shadow: 4px 4px 0 var(--ink); }

/* CARDS */
.card { background: #fff; border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--ink); padding: 22px; }
.card.tinted { background: var(--cream-2); }
.card.dark { background: var(--asphalt); color: var(--cream); }
.card.yellow { background: var(--sign-yellow); }
.card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.card-head h3 { font-family: "Bungee"; font-size: 16px; margin: 0; }
.card-head .tag { font-family: "JetBrains Mono", monospace; font-size: 10px; padding: 3px 8px; background: var(--ink); color: var(--sign-yellow); }
.card-head .tag.live { background: var(--signal-green); color: var(--ink); display:inline-flex; gap:6px; align-items:center; }
.card-head .tag.live::before { content:""; width:6px; height:6px; border-radius:50%; background: var(--ink); animation: p-pulse 1.4s infinite; }
@keyframes p-pulse { 50% { opacity: 0.2; } }

/* AGENT (portal) */
.p-agent { width: 70px; height: 90px; position: relative; filter: drop-shadow(2px 2px 0 var(--ink)); }
.p-head { position: absolute; left: 50%; top: 6px; transform: translateX(-50%); width: 56px; height: 50px; background: var(--ink); border-radius: 12px 12px 8px 8px; }
.p-head::before, .p-head::after { content:""; position:absolute; top:16px; width:10px; height:10px; background: var(--sign-yellow); border-radius:50%; }
.p-head::before { left: 10px; }
.p-head::after { right: 10px; }
.p-antenna { position: absolute; left: 50%; top: -8px; width: 3px; height: 14px; background: var(--ink); transform: translateX(-50%); }
.p-antenna::before { content:""; position:absolute; left:50%; top:-6px; width: 8px; height:8px; background: var(--signal-red); border:1.5px solid var(--ink); border-radius:50%; transform: translateX(-50%); }
.p-body { position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); width: 64px; height: 34px; background: var(--cream); border:2px solid var(--ink); border-radius: 10px 10px 4px 4px; }
.p-badge { position: absolute; left: 50%; bottom: 7px; transform: translateX(-50%); width: 16px; height: 16px; background: var(--sign-yellow); border: 1.5px solid var(--ink); border-radius:50%; }

/* LICENSE CARD */
.license-card {
  background: linear-gradient(135deg, #ffe27a 0%, #ffcc00 60%, #f5b800 100%);
  color: var(--ink); border: 3px solid var(--ink); box-shadow: 8px 8px 0 var(--ink);
  padding: 24px; position: relative; overflow: hidden;
}
.license-card::before { content: ""; position: absolute; right: -50px; top: -50px; width: 220px; height: 220px; background: radial-gradient(circle, rgba(255,255,255,0.55), transparent 65%); }
.license-card .lic-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--ink); padding-bottom: 10px; margin-bottom: 14px; font-family: "JetBrains Mono"; font-size: 11px; }
.license-card .lic-head b { font-family: "Bungee"; font-size: 13px; }
.lic-body { display: grid; grid-template-columns: 88px 1fr auto; gap: 18px; align-items: center; }
.lic-portrait { width: 88px; height: 110px; background: rgba(0,0,0,0.08); border: 2px solid var(--ink); display: grid; place-items: center; }
.lic-info { font-family: "JetBrains Mono"; font-size: 12px; line-height: 1.5; }
.lic-info .name { font-family: "Bungee"; font-size: 22px; line-height: 1; margin-bottom: 8px; }
.lic-info .num { font-family: "JetBrains Mono"; font-size: 16px; letter-spacing: 0.08em; margin-top: 10px; }
.lic-qr { width: 90px; height: 90px; background: conic-gradient(from 0deg at 25% 25%, var(--ink) 25%, transparent 0) 0 0 / 14px 14px, conic-gradient(from 0deg at 75% 75%, var(--ink) 25%, transparent 0) 7px 7px / 14px 14px, #fff; border: 2px solid var(--ink); position: relative; }
.lic-qr::before, .lic-qr::after { content: ""; position: absolute; width: 22px; height: 22px; border: 4px solid var(--ink); background: #fff; }
.lic-qr::before { top: 4px; left: 4px; }
.lic-qr::after  { top: 4px; right: 4px; }
.lic-qr .corner { position:absolute; bottom: 4px; left:4px; width:22px; height:22px; border: 4px solid var(--ink); background: #fff; }
.lic-stamps { margin-top: 16px; padding-top: 12px; border-top: 2px dashed var(--ink); display: flex; gap: 6px; flex-wrap: wrap; }
.lic-stamp { border: 2px solid var(--ink); padding: 3px 7px; font-family: "JetBrains Mono"; font-size: 9px; text-transform: uppercase; }

/* DASHBOARD GRIDS */
.dash-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 24px; }
.stat-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 24px; }
.stat { background: #fff; border: 3px solid var(--ink); padding: 18px; box-shadow: 4px 4px 0 var(--ink); position: relative; }
.stat .k { font-family: "JetBrains Mono"; font-size: 10px; text-transform: uppercase; color: var(--muted); }
.stat .v { font-family: "Bungee"; font-size: 32px; line-height: 1; margin: 8px 0 4px; }
.stat .delta { font-family: "JetBrains Mono"; font-size: 11px; color: var(--signal-green); }
.stat.accent { background: var(--sign-yellow); }
.stat.dark { background: var(--asphalt); color: var(--cream); }
.stat.dark .k { color: var(--cream-3); }
.stat.dark .delta { color: var(--sign-yellow); }

.route-progress { margin-top: 24px; background: var(--asphalt); color: var(--cream); border: 3px solid var(--ink); padding: 22px 26px; position: relative; overflow: hidden; }
.route-bar { margin-top: 26px; height: 80px; background: var(--asphalt-2); border-top: 2px dashed var(--cream-3); border-bottom: 2px dashed var(--cream-3); position: relative; }
.route-bar::before { content: ""; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 60%; height: 6px; background: repeating-linear-gradient(90deg, var(--line-white,#f6f1de) 0 30px, transparent 30px 60px); }
.stop { position: absolute; top: 50%; transform: translate(-50%, -50%); width: 30px; height: 30px; background: var(--cream); border: 3px solid var(--ink); display: grid; place-items: center; font-family: "Bungee"; font-size: 11px; color: var(--ink); }
.stop.done { background: var(--signal-green); }
.stop.current { background: var(--sign-yellow); width: 44px; height: 44px; font-size: 13px; box-shadow: 0 0 0 6px rgba(255,204,0,0.25); }
.stop.todo { background: var(--asphalt-3); color: var(--cream-3); border-color: var(--cream-3); }
.stop .lbl { position: absolute; top: 110%; left: 50%; transform: translateX(-50%); font-family: "JetBrains Mono"; font-size: 9px; color: var(--cream-2); white-space: nowrap; text-transform: uppercase; }
.stop.current .lbl { color: var(--sign-yellow); }

.activity { display: grid; gap: 10px; }
.act-row { display: grid; grid-template-columns: 36px 1fr auto; gap: 14px; align-items: center; border-bottom: 2px dashed var(--line); padding-bottom: 10px; }
.act-row:last-child { border-bottom: 0; padding-bottom: 0; }
.act-icon { width: 36px; height: 36px; background: var(--sign-yellow); border: 2px solid var(--ink); display: grid; place-items: center; }
.act-icon.green { background: var(--signal-green); }
.act-icon.red { background: var(--signal-red); }
.act-row .what { font-size: 13px; }
.act-row .what b { font-family: "Bungee"; font-size: 12px; display: block; margin-bottom: 2px; }
.act-row .when { font-family: "JetBrains Mono"; font-size: 10px; color: var(--muted); white-space: nowrap; }

.upnext { display: grid; gap: 12px; }
.upnext-item { display: grid; grid-template-columns: 60px 1fr auto; gap: 14px; align-items: center; padding: 12px; background: var(--cream); border: 2px solid var(--ink); }
.upnext-item .day { text-align: center; }
.upnext-item .day b { font-family: "Bungee"; font-size: 22px; line-height: 1; display: block; }
.upnext-item .day small { font-family: "JetBrains Mono"; font-size: 9px; color: var(--muted); text-transform: uppercase; }
.upnext-item .what b { font-family: "Bungee"; font-size: 13px; display: block; }
.upnext-item .what small { font-size: 12px; color: var(--muted); }

/* HIGHWAY CODE */
.section-tabs { display: flex; gap: 8px; margin: 8px 0 20px; }
.section-tab { background: var(--cream); border: 3px solid var(--ink); padding: 8px 14px; font-family: "Bungee"; font-size: 12px; cursor: pointer; user-select: none; }
.section-tab.active { background: var(--ink); color: var(--sign-yellow); box-shadow: 4px 4px 0 var(--sign-yellow); }
.sign-row { display: grid; grid-template-columns: 110px 1fr 1fr; gap: 24px; padding: 22px 0; border-bottom: 2px dashed var(--line); align-items: start; }
.sign-shape { width: 100px; height: 100px; display: grid; place-items: center; color: var(--ink); font-family: "Bungee"; font-size: 12px; text-align: center; border: 4px solid var(--ink); background: var(--sign-yellow); box-shadow: 4px 4px 0 var(--ink); line-height: 1; }
.sign-shape.octagon { clip-path: polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%); background: var(--signal-red); color: var(--cream); }
.sign-shape.diamond { transform: rotate(45deg); width: 90px; height: 90px; }
.sign-shape.diamond > span { display: block; transform: rotate(-45deg); }
.sign-shape.triangle { clip-path: polygon(50% 0, 100% 100%, 0 100%); background: var(--sign-yellow); padding-top: 28px; align-items: end; }
.sign-shape.circle  { border-radius: 50%; }
.sign-shape.shield  { clip-path: polygon(50% 0, 100% 18%, 100% 70%, 50% 100%, 0 70%, 0 18%); background: var(--cream); }
.sign-shape.rect    { background: var(--signal-green); color: var(--cream); }
.sign-shape.no-entry { background: var(--signal-red); color: var(--cream); border-radius: 50%; position: relative; }
.sign-shape.no-entry::after { content:""; position:absolute; left: 10%; right: 10%; top: 46%; height: 8px; background: var(--cream); }
.sign-shape.no-entry span { display: none; }
.sign-meta b { font-family: "Bungee"; font-size: 18px; display: block; margin-bottom: 2px; }
.sign-meta small { font-family: "JetBrains Mono"; font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; }
.sign-action { font-size: 14px; line-height: 1.55; }
.sign-action strong { background: var(--sign-yellow); padding: 0 4px; }

/* TRAFFIC LIGHT */
.tl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.tl-light { background: var(--asphalt); border: 3px solid var(--ink); padding: 24px; display: flex; flex-direction: column; align-items: center; box-shadow: 6px 6px 0 var(--ink); }
.tl-housing { display: flex; flex-direction: column; gap: 14px; padding: 16px; background: var(--asphalt-2); border: 3px solid var(--ink); border-radius: 14px; }
.tl-bulb { width: 100px; height: 100px; border-radius: 50%; background: var(--asphalt-3); border: 3px solid var(--ink); transition: all .25s; }
.tl-bulb.on.red   { background: radial-gradient(circle at 30% 30%, #ffaaaa, var(--signal-red) 60%); box-shadow: 0 0 30px var(--signal-red); }
.tl-bulb.on.amber { background: radial-gradient(circle at 30% 30%, #ffe09a, var(--sign-amber) 60%); box-shadow: 0 0 30px var(--sign-amber); }
.tl-bulb.on.green { background: radial-gradient(circle at 30% 30%, #c0eecf, var(--signal-green) 60%); box-shadow: 0 0 30px var(--signal-green); }
.tl-verdict { margin-top: 20px; text-align: center; color: var(--cream); }
.tl-verdict .v-label { font-family: "Bungee"; font-size: 32px; line-height: 1; }
.tl-verdict .v-action { font-family: "JetBrains Mono"; font-size: 12px; color: var(--cream-3); margin-top: 8px; max-width: 360px; line-height: 1.5; }
.tl-verdict.red .v-label   { color: var(--signal-red); }
.tl-verdict.amber .v-label { color: var(--sign-amber); }
.tl-verdict.green .v-label { color: var(--signal-green); }
.tl-verdict.idle .v-label  { color: var(--cream-3); }
.tl-input { background: #fff; border: 3px solid var(--ink); padding: 22px; box-shadow: 6px 6px 0 var(--ink); }
.tl-input h4 { font-family: "Bungee"; font-size: 16px; margin: 0 0 12px; }
.tl-input textarea { width: 100%; height: 200px; border: 2px solid var(--ink); background: var(--cream); padding: 12px; font-family: "JetBrains Mono", monospace; font-size: 13px; resize: none; outline: none; }
.tl-input textarea:focus { background: #fff; }
.tl-pre { display: flex; gap: 6px; flex-wrap: wrap; margin: 14px 0 12px; }
.tl-pre button { background: var(--cream-2); border: 2px solid var(--ink); padding: 6px 10px; font-family: "JetBrains Mono"; font-size: 11px; cursor: pointer; }
.tl-pre button:hover { background: var(--sign-yellow); }
.tl-flags { margin-top: 12px; padding-top: 12px; border-top: 2px dashed var(--line); font-family: "JetBrains Mono"; font-size: 11px; }
.tl-flags .flag { display: inline-block; padding: 3px 8px; background: var(--signal-red); color: var(--cream); margin: 2px; font-size: 10px; }
.tl-flags .flag.amber { background: var(--sign-amber); color: var(--ink); }
.tl-flags .flag.green { background: var(--signal-green); color: var(--ink); }
.tl-rules { margin-top: 24px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
.tl-rule { background: #fff; border: 3px solid var(--ink); padding: 18px; box-shadow: 4px 4px 0 var(--ink); }
.tl-rule.r-green { border-top: 16px solid var(--signal-green); }
.tl-rule.r-amber { border-top: 16px solid var(--sign-amber); }
.tl-rule.r-red   { border-top: 16px solid var(--signal-red); }
.tl-rule h5 { font-family: "Bungee"; font-size: 14px; margin: 0 0 8px; }
.tl-rule ul { margin: 8px 0; padding-left: 18px; font-size: 13px; line-height: 1.5; }
.tl-rule .action { font-family: "JetBrains Mono"; font-size: 11px; background: var(--cream-2); border-top: 2px dashed var(--ink); margin: 8px -18px -18px; padding: 10px 18px; }

/* PREP BUILDER */
.prep-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 24px; }
.prep-form { display: grid; gap: 14px; }
.prep-step { background: #fff; border: 3px solid var(--ink); padding: 18px; box-shadow: 5px 5px 0 var(--ink); display: grid; grid-template-columns: 56px 1fr; gap: 16px; }
.prep-letter { width: 56px; height: 56px; background: var(--sign-yellow); border: 3px solid var(--ink); display: grid; place-items: center; font-family: "Bungee"; font-size: 28px; box-shadow: 3px 3px 0 var(--ink); }
.prep-step.s2 .prep-letter { background: var(--signal-green); }
.prep-step.s3 .prep-letter { background: var(--sky); }
.prep-step.s4 .prep-letter { background: var(--signal-red); color: var(--cream); }
.prep-body .lbl { font-family: "JetBrains Mono"; font-size: 10px; text-transform: uppercase; color: var(--muted); }
.prep-body .ttl { font-family: "Bungee"; font-size: 16px; line-height: 1; margin: 2px 0 4px; }
.prep-body .hint { font-size: 12px; color: var(--muted); margin-bottom: 8px; }
.prep-body textarea, .prep-body input { width: 100%; border: 2px solid var(--ink); background: var(--cream); padding: 10px 12px; font-family: "Space Grotesk"; font-size: 14px; font-weight: 500; outline: none; resize: none; }
.prep-body textarea:focus, .prep-body input:focus { background: var(--cream-2); }
.prep-body .examples { margin-top: 6px; display: flex; gap: 6px; flex-wrap: wrap; }
.prep-body .examples button { background: var(--cream-2); border: 2px solid var(--ink); padding: 4px 8px; font-family: "JetBrains Mono"; font-size: 10px; cursor: pointer; }
.prep-body .examples button:hover { background: var(--sign-yellow); }
.prep-preview { background: var(--asphalt); color: var(--cream); border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--sign-yellow); display: flex; flex-direction: column; }
.prep-preview .pphead { background: var(--asphalt-2); padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--ink); }
.prep-preview .pphead h4 { margin: 0; font-family: "Bungee"; font-size: 14px; color: var(--sign-yellow); }
.prep-preview .pphead .dots { display: flex; gap: 6px; }
.prep-preview .pphead .dots i { width: 10px; height: 10px; border-radius: 50%; background: var(--signal-red); }
.prep-preview .pphead .dots i:nth-child(2) { background: var(--sign-yellow); }
.prep-preview .pphead .dots i:nth-child(3) { background: var(--signal-green); }
.prep-preview .ppbody { padding: 18px; font-family: "JetBrains Mono"; font-size: 13px; line-height: 1.6; min-height: 320px; }
.prep-preview .ppbody .k { color: var(--sign-yellow); font-weight: 700; }
.prep-preview .ppbody .cur { display: inline-block; width: 8px; height: 16px; background: var(--sign-yellow); animation: p-blink 1s steps(2) infinite; vertical-align: middle; }
@keyframes p-blink { 50% { opacity: 0; } }
.prep-preview .ppfoot { padding: 14px 18px; border-top: 2px dashed var(--asphalt-3); display: flex; justify-content: space-between; align-items: center; }
.prep-preview .ppfoot .meta { font-family: "JetBrains Mono"; font-size: 10px; color: var(--cream-3); }

/* AUP */
.aup-grid { display: grid; grid-template-columns: 1fr 360px; gap: 28px; }
.aup-rule { background: #fff; border: 3px solid var(--ink); padding: 18px 22px; margin-bottom: 14px; display: grid; grid-template-columns: 56px 1fr 130px; gap: 16px; align-items: start; box-shadow: 4px 4px 0 var(--ink); }
.aup-rule.ack { background: var(--cream-2); box-shadow: 4px 4px 0 var(--signal-green); }
.aup-num { width: 56px; height: 56px; background: var(--ink); color: var(--sign-yellow); font-family: "Bungee"; font-size: 22px; display: grid; place-items: center; }
.aup-rule.ack .aup-num { background: var(--signal-green); color: var(--ink); }
.aup-body b { font-family: "Bungee"; font-size: 15px; display: block; margin-bottom: 4px; }
.aup-body p { margin: 0; font-size: 13px; line-height: 1.55; }
.aup-ack { border: 2px solid var(--ink); padding: 8px 10px; cursor: pointer; font-family: "Bungee"; font-size: 11px; text-align: center; background: var(--cream); user-select: none; align-self: center; }
.aup-ack:hover { background: var(--sign-yellow); }
.aup-rule.ack .aup-ack { background: var(--signal-green); color: var(--ink); }
.aup-ack .when { display: block; font-family: "JetBrains Mono"; font-size: 9px; font-weight: 500; margin-top: 4px; }
.aup-side { position: sticky; top: 110px; align-self: start; }
.aup-progress { background: var(--asphalt); color: var(--cream); border: 3px solid var(--ink); padding: 22px; box-shadow: 6px 6px 0 var(--sign-yellow); }
.aup-progress .big { font-family: "Bungee"; font-size: 48px; line-height: 1; color: var(--sign-yellow); }
.aup-progress .of { font-family: "JetBrains Mono"; font-size: 12px; color: var(--cream-3); margin-top: 4px; }
.aup-progress .pbar { margin-top: 14px; height: 14px; background: var(--asphalt-2); border: 2px solid var(--cream); }
.aup-progress .pbar > i { display: block; height: 100%; background: var(--signal-green); transition: width 0.3s; }
.signature { background: var(--cream); border: 3px solid var(--ink); padding: 22px; margin-top: 16px; box-shadow: 4px 4px 0 var(--ink); }
.signature h5 { font-family: "Bungee"; margin: 0 0 6px; font-size: 16px; }
.sig-line { margin-top: 14px; }
.sig-line .lbl { font-family: "JetBrains Mono"; font-size: 10px; text-transform: uppercase; color: var(--muted); margin-bottom: 4px; }
.sig-line input { width: 100%; border: 0; border-bottom: 2px solid var(--ink); background: transparent; padding: 6px 0; font-family: "Space Grotesk"; font-size: 14px; font-weight: 600; outline: none; }
.sig-line .sig { font-family: "Caveat", "Comic Sans MS", cursive; font-style: italic; font-size: 24px; border-bottom: 2px solid var(--ink); padding: 0 0 4px; }

/* GLOSSARY */
.glos-bar { display: flex; gap: 14px; align-items: center; margin-bottom: 20px; }
.glos-search { flex: 1; display: flex; align-items: center; border: 3px solid var(--ink); background: #fff; height: 48px; padding: 0 14px; box-shadow: 4px 4px 0 var(--ink); }
.glos-search input { border: 0; outline: 0; background: transparent; flex: 1; height: 100%; font-family: "Space Grotesk"; font-size: 15px; font-weight: 500; }
.glos-az { display: flex; gap: 4px; flex-wrap: wrap; max-width: 540px; }
.glos-az button { width: 30px; height: 30px; border: 2px solid var(--ink); background: var(--cream); font-family: "Bungee"; font-size: 12px; cursor: pointer; }
.glos-az button:hover, .glos-az button.active { background: var(--sign-yellow); }
.glos-az button:disabled { opacity: 0.3; cursor: default; }
.glos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.glos-card { background: #fff; border: 3px solid var(--ink); padding: 18px; box-shadow: 4px 4px 0 var(--ink); position: relative; }
.glos-card.red   { box-shadow: 4px 4px 0 var(--signal-red); }
.glos-card.amber { box-shadow: 4px 4px 0 var(--sign-amber); }
.glos-card.green { box-shadow: 4px 4px 0 var(--signal-green); }
.glos-card .term { font-family: "Bungee"; font-size: 18px; display: flex; align-items: center; gap: 10px; }
.glos-card .term .abbr { font-family: "JetBrains Mono"; font-size: 11px; color: var(--muted); margin-left: auto; padding: 2px 6px; background: var(--cream-2); }
.glos-card .def { font-size: 13px; line-height: 1.55; margin-top: 8px; }
.glos-card .tags { margin-top: 10px; display: flex; gap: 6px; flex-wrap: wrap; }
.glos-card .tags span { font-family: "JetBrains Mono"; font-size: 9px; padding: 2px 6px; background: var(--ink); color: var(--cream); }
.glos-card .tags span.red   { background: var(--signal-red); }
.glos-card .tags span.amber { background: var(--sign-amber); color: var(--ink); }
.glos-card .tags span.green { background: var(--signal-green); color: var(--ink); }

/* QUICK REF */
.qref-wrap { background: var(--cream-2); border: 4px solid var(--ink); box-shadow: 12px 12px 0 var(--ink); padding: 32px; position: relative; }
.qref-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 16px; border-bottom: 3px dashed var(--ink); margin-bottom: 22px; }
.qref-head .title { font-family: "Bungee"; font-size: 28px; }
.qref-head .meta { font-family: "JetBrains Mono"; font-size: 11px; text-align: right; }
.qref-head .meta b { font-family: "Bungee"; font-size: 14px; }
.qref-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
.qref-box { background: #fff; border: 3px solid var(--ink); padding: 18px; box-shadow: 4px 4px 0 var(--ink); }
.qref-box.green  { box-shadow: 4px 4px 0 var(--signal-green); border-top: 12px solid var(--signal-green); }
.qref-box.amber  { box-shadow: 4px 4px 0 var(--sign-amber);  border-top: 12px solid var(--sign-amber); }
.qref-box.red    { box-shadow: 4px 4px 0 var(--signal-red);  border-top: 12px solid var(--signal-red); }
.qref-box.dark   { background: var(--asphalt); color: var(--cream); }
.qref-box.yellow { background: var(--sign-yellow); }
.qref-box h5 { font-family: "Bungee"; font-size: 14px; margin: 0 0 10px; display:flex; align-items:center; gap: 8px; }
.qref-box ul { margin: 0; padding-left: 18px; font-size: 12px; line-height: 1.6; }
.qref-foot { margin-top: 24px; padding-top: 16px; border-top: 3px dashed var(--ink); display: flex; justify-content: space-between; align-items: center; font-family: "JetBrains Mono"; font-size: 11px; }

/* SHARED CSS VARS (needed if HomeView not loaded first) */
:root {
  --cream: #f5ecd2; --cream-2: #f0e3bd; --cream-3: #e6d8a8;
  --asphalt: #14140f; --asphalt-2: #1f1e16; --asphalt-3: #2a2820;
  --sign-yellow: #ffcc00; --sign-amber: #ff9d00;
  --signal-red: #e23a2e; --signal-green: #2ec866; --sky: #6fb3e0;
  --ink: #14140f; --muted: #6a624a; --line: #d8c98f;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--cream); color: var(--ink); font-family: "Space Grotesk", system-ui, sans-serif; }
</style>
