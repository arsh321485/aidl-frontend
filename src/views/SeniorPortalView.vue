<template>
  <div id="seniorPortalRoot" class="senior-portal-layout tier-operator">
<!-- ============================ SIDEBAR ============================ -->
<aside class="sidebar" data-screen-label="00a Sidebar">
  <div class="sidebar-brand">
        <RouterLink class="portal-back" to="/home" aria-label="Back to home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        </RouterLink>
        <RouterLink class="brand" to="/home">
    <span class="brand-mark">AI</span>
    <span>AIDL<small>Driver Portal · v2.6</small></span>
  </RouterLink></div>

  <div class="tier-toggle" id="tierToggle">
    <button data-tier="learner">LEARNER<small>CLASS L</small></button>
    <button data-tier="operator">OPERATOR<small>CLASS O</small></button>
    <button data-tier="specialist">SPECIALIST<small>CLASS S</small></button>
  </div>

  <div class="nav-group">
    <h6>Drive</h6>
    <div class="nav-item active" data-view="dashboard">
      <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 11l9-7 9 7"></path><path d="M5 10v9h14v-9"></path></svg></span>
      Dashboard
    </div>
    <div class="nav-item" data-view="highway">
      <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 21l3-18h10l3 18"></path><path d="M9 3v18M15 3v18"></path></svg></span>
      Highway Code
    </div>
    <div class="nav-item" data-view="traffic">
      <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="8" y="2" width="8" height="20" rx="3"></rect><circle cx="12" cy="7" r="1.6"></circle><circle cx="12" cy="12" r="1.6"></circle><circle cx="12" cy="17" r="1.6"></circle></svg></span>
      Traffic Light Check
    </div>
    <div class="nav-item" data-view="prep">
      <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16v6H4z"></path><path d="M4 14h10v6H4z"></path></svg></span>
      PREP Builder
    </div>
  </div>

  <div class="nav-group">
    <h6>Policy</h6>
    <div class="nav-item" data-view="aup">
      <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2h9l4 4v16H6z"></path><path d="M14 2v5h5"></path></svg></span>
      Acceptable Use
    </div>
    <div class="nav-item" data-view="glossary">
      <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4z"></path><path d="M4 4v12a4 4 0 004 4h12"></path></svg></span>
      Glossary
    </div>
    <div class="nav-item" data-view="qref">
      <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="3" width="16" height="18" rx="2"></rect><path d="M9 8h6M9 12h6M9 16h4"></path></svg></span>
      Quick Reference
    </div>
  </div>

  <div class="side-card">
    <div>YOUR LICENCE</div>
    <div class="lic-name" id="sideName">ALEX MORGAN</div>
    <div class="lic-id" id="sideId">AIDL-O-1182-4421</div>
    <div class="lic-meter"><i id="sideMeter"></i></div>
    <div class="lic-meter-label"><span id="sideClass">CLASS O · OPERATOR</span><span id="sideRenewal">9 mo left</span></div>
  </div>
</aside>

<!-- ============================ MAIN ============================ -->
<main class="main">
  <div class="portal-nav-backdrop" id="portalNavBackdrop" aria-hidden="true"></div>
  <div class="topbar">
    <button type="button" class="portal-menu-btn" id="portalMenuBtn" aria-label="Open navigation">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
    </button>
    <div class="crumb"><span>AIDL</span><span>/</span><span class="here" id="crumbHere">Dashboard</span></div>
    <div class="top-search">
      <input placeholder="Search handbook, terms, rules…">
      <kbd>⌘K</kbd>
    </div>
    <div class="top-actions">
      <div class="icon-btn" title="Notifications">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 8a6 6 0 1112 0c0 7 3 8 3 8H3s3-1 3-8"></path><path d="M10 21a2 2 0 004 0"></path></svg>
        <span class="dot"></span>
      </div>
      <div class="icon-btn" title="Help">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M9.5 9a2.5 2.5 0 015 0c0 2-2.5 2-2.5 4"></path><circle cx="12" cy="17" r="0.8" fill="currentColor"></circle></svg>
      </div>
      <div class="avatar">
        <div class="avatar-img" id="avInit">AM</div>
        <div class="avatar-meta"><b id="avName">Alex Morgan</b><small id="avRole">CLASS O · OPERATOR</small></div>
      </div>
    </div>
  </div>

  <!-- DASHBOARD (rendered by portal.js) -->
  <div class="page view active" id="view-dashboard" data-screen-label="01 Dashboard"></div>

  <!-- HIGHWAY CODE -->
  <div class="page view" id="view-highway" data-screen-label="02 Highway Code">
    <div class="head" id="hwHead"></div>
    <div class="section-tabs" id="hwTabs"></div>
    <div class="card" id="hwCard"></div>
  </div>

  <!-- TRAFFIC LIGHT -->
  <div class="page view" id="view-traffic" data-screen-label="03 Traffic Light Check">
    <div class="head" id="tlHead"></div>
    <div class="tl-grid">
      <div class="tl-input">
        <h4>YOUR DRAFT PROMPT</h4>
        <textarea id="tlInput" placeholder="Paste or type a prompt you're about to send to an AI tool…"></textarea>
        <div class="tl-pre" id="tlPre"></div>
        <div class="tl-flags" id="tlFlags"></div>
      </div>
      <div class="tl-light">
        <div class="tl-housing">
          <div class="tl-bulb" id="bRed"></div>
          <div class="tl-bulb" id="bAmber"></div>
          <div class="tl-bulb" id="bGreen"></div>
        </div>
        <div class="tl-verdict idle" id="tlVerdict">
          <div class="v-label" id="vLabel">SCAN PROMPT</div>
          <div class="v-action" id="vAction">Type or paste a prompt to begin.</div>
        </div>
      </div>
    </div>
    <div class="tl-rules" id="tlRules"></div>
  </div>

  <!-- PREP BUILDER (shared static tool) -->
  <div class="page view" id="view-prep" data-screen-label="04 PREP Builder">
    <div class="head">
      <div>
        <span class="eyebrow">▼ IGNITION SEQUENCE</span>
        <h1>PREP YOUR PROMPT.</h1>
        <p>Four steps before every significant AI request. Persona, Requirement, Expectation, Parameters — fill each line, watch your prompt assemble in real time.</p>
      </div>
      <a class="btn btn-yellow" href="#" id="prepCopy">Copy Prompt</a>
    </div>

    <div class="prep-grid">
      <div class="prep-form">
        <div class="prep-step s1">
          <div class="prep-letter">P</div>
          <div class="prep-body">
            <div class="lbl">STEP 1</div>
            <div class="ttl">PERSONA</div>
            <div class="hint">Assign an expert role to the AI — sets vocabulary, perspective, depth.</div>
            <input id="pP" value="Act as a Senior Marketing Manager.">
            <div class="examples">
              <button data-fill="pP" data-v="Act as a Senior HR Manager with 15 years of experience in employment law.">HR + 15 yrs</button>
              <button data-fill="pP" data-v="Act as an expert financial analyst specialising in monthly variance reporting.">Finance Analyst</button>
              <button data-fill="pP" data-v="Act as a healthcare compliance officer familiar with HIPAA.">Healthcare</button>
            </div>
          </div>
        </div>

        <div class="prep-step s2">
          <div class="prep-letter">R</div>
          <div class="prep-body">
            <div class="lbl">STEP 2</div>
            <div class="ttl">REQUIREMENT</div>
            <div class="hint">State the task clearly and precisely. Literal assistant, not mind-reader.</div>
            <textarea id="pR" rows="2">Write a LinkedIn post announcing the launch of our new product.</textarea>
            <div class="examples">
              <button data-fill="pR" data-v="Summarise the key decisions and action items from the following meeting notes.">Summarise meeting</button>
              <button data-fill="pR" data-v="Draft a professional email to a client explaining a two-week project delay.">Project delay email</button>
            </div>
          </div>
        </div>

        <div class="prep-step s3">
          <div class="prep-letter">E</div>
          <div class="prep-body">
            <div class="lbl">STEP 3</div>
            <div class="ttl">EXPECTATION</div>
            <div class="hint">Format, length, style — so the output is immediately usable.</div>
            <textarea id="pE" rows="2">150 words maximum, conversational and professional tone, end with a clear call to action.</textarea>
            <div class="examples">
              <button data-fill="pE" data-v="Present as a table with columns: Action Item, Owner, Deadline.">Table format</button>
              <button data-fill="pE" data-v="Write in plain English, no jargon, under 150 words, with a call to action.">Plain English</button>
            </div>
          </div>
        </div>

        <div class="prep-step s4">
          <div class="prep-letter">P</div>
          <div class="prep-body">
            <div class="lbl">STEP 4 · SAFETY LAYER</div>
            <div class="ttl">PARAMETERS</div>
            <div class="hint">What NOT to include. Hard limits, traffic-light guardrails.</div>
            <textarea id="pPar" rows="3">Do not mention competitor products. Do not include pricing. No technical jargon — the audience is non-technical decision-makers.</textarea>
            <div class="examples">
              <button data-fill="pPar" data-v="Do not include any personal names. Replace all individuals with [Name].">No names</button>
              <button data-fill="pPar" data-v="Do not include financial figures. Keep response under 200 words. No jargon.">No financials</button>
            </div>
          </div>
        </div>
      </div>

      <div class="prep-preview">
        <div class="pphead">
          <h4>ASSEMBLED PROMPT</h4>
          <div class="dots"><i></i><i></i><i></i></div>
        </div>
        <div class="ppbody" id="prepOut"></div>
        <div class="ppfoot">
          <div class="meta" id="prepStats">0 chars · 0 tokens</div>
          <div class="meta">PRE-FLIGHT · <span style="color: var(--signal-green);">● TRAFFIC LIGHT GREEN</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ACCEPTABLE USE (rendered by portal.js) -->
  <div class="page view" id="view-aup" data-screen-label="05 Acceptable Use">
    <div class="head" id="aupHead"></div>
    <div class="aup-grid">
      <div id="aupList"></div>
      <div class="aup-side" id="aupSide"></div>
    </div>
  </div>

  <!-- GLOSSARY -->
  <div class="page view" id="view-glossary" data-screen-label="06 Glossary">
    <div class="head" id="glosHead"></div>
    <div class="glos-bar">
      <div class="glos-search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4-4"></path></svg>
        <input id="glosSearch" placeholder="Search terms…">
      </div>
      <div class="glos-az" id="glosAz"></div>
    </div>
    <div class="glos-grid" id="glosGrid"></div>
  </div>

  <!-- QUICK REFERENCE (rendered by portal.js) -->
  <div class="page view" id="view-qref" data-screen-label="07 Quick Reference"></div>

</main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { initSeniorPortal } from '../lib/senior-portal.js'
import '../styles/senior-driver-portal.css'
import '../styles/portal-responsive.css'

onMounted(() => {
  initSeniorPortal()
})
</script>


<style scoped>
.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 4px 16px;
  border-bottom: 2px dashed var(--asphalt-3);
}
.portal-back {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: var(--asphalt-2);
  border: 2px solid var(--cream-3);
  color: var(--cream);
  text-decoration: none;
  box-shadow: 2px 2px 0 #000;
  transition: background .12s, color .12s, transform .12s, box-shadow .12s, border-color .12s;
}
.portal-back svg { width: 18px; height: 18px; }
.portal-back:hover {
  background: var(--sign-yellow);
  color: var(--ink);
  border-color: var(--ink);
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0 var(--ink);
}
</style>

