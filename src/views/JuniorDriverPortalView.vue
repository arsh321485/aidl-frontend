<template>
  <div id="juniorPortalRoot" class="junior-portal-layout tier-cadet">
    <!-- SIDEBAR -->
    <aside class="sidebar" data-screen-label="00a Sidebar">
      <RouterLink class="brand" to="/home">
        <span class="brand-mark">AI</span>
        <span>AIDL<small>Juniors · Driver Portal</small></span>
      </RouterLink>

      <div class="tier-toggle" id="tierToggle">
        <button type="button" data-tier="cadet">CADET<small>AGES 8–12</small></button>
        <button type="button" data-tier="crew">ROAD CREW<small>AGES 12–16</small></button>
      </div>

      <div class="nav-group">
        <h6>Learn</h6>
        <div class="nav-item active" data-view="dashboard">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 11l9-7 9 7" /><path d="M5 10v9h14v-9" /></svg></span>
          Dashboard
        </div>
        <div class="nav-item" data-view="highway">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 21l3-18h10l3 18" /><path d="M9 3v18M15 3v18" /></svg></span>
          Highway Code
        </div>
        <div class="nav-item" data-view="traffic">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="8" y="2" width="8" height="20" rx="3" /><circle cx="12" cy="7" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="17" r="1.6" /></svg></span>
          Traffic Light Check
        </div>
      </div>

      <div class="nav-group">
        <h6>Rules</h6>
        <div class="nav-item" data-view="aup">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2h9l4 4v16H6z" /><path d="M14 2v5h5" /></svg></span>
          My AI Rules
        </div>
        <div class="nav-item" data-view="glossary">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4z" /><path d="M4 4v12a4 4 0 004 4h12" /></svg></span>
          Glossary
        </div>
        <div class="nav-item" data-view="qref">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></svg></span>
          Quick Reference
        </div>
      </div>

      <div class="side-card">
        <div>MY LICENCE</div>
        <div class="lic-name" id="sideName">RILEY LEE</div>
        <div class="lic-id" id="sideId">AIDL-J-0042-1180</div>
        <div class="lic-meter"><i></i></div>
        <div class="lic-meter-label"><span id="sideClass">CLASS J · CADET</span><span>in progress</span></div>
      </div>
    </aside>

    <!-- MAIN -->
    <main class="main">
      <div class="topbar">
        <div class="crumb"><span>AIDL JUNIORS</span><span>/</span><span class="here" id="crumbHere">Dashboard</span></div>
        <div class="top-search">
          <input placeholder="Search rules, words, signs…" />
          <kbd>⌘K</kbd>
        </div>
        <div class="top-actions">
          <div class="icon-btn" title="Notifications">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 8a6 6 0 1112 0c0 7 3 8 3 8H3s3-1 3-8" /><path d="M10 21a2 2 0 004 0" /></svg>
            <span class="dot"></span>
          </div>
          <div class="avatar">
            <div class="avatar-img" id="avInit">RL</div>
            <div class="avatar-meta"><b id="avName">Riley Lee</b><small id="avRole">CLASS J · CADET</small></div>
          </div>
        </div>
      </div>

      <div class="page view active" id="view-dashboard" data-screen-label="01 Dashboard"></div>

      <div class="page view" id="view-highway" data-screen-label="02 Highway Code">
        <div class="head">
          <div>
            <span class="eyebrow">▼ SIGNS &amp; RULES</span>
            <h1>THE AI HIGHWAY CODE.</h1>
            <p>The road signs and rules for using AI safely and kindly. Learn them, follow them, drive happy.</p>
          </div>
        </div>
        <div class="section-tabs" id="hwTabs"></div>
        <div class="card" id="hwCard"></div>
      </div>

      <div class="page view" id="view-traffic" data-screen-label="03 Traffic Light Check">
        <div class="head" id="tlHead"></div>
        <div class="tl-grid">
          <div class="tl-input">
            <h4>WHAT YOU WANT TO ASK</h4>
            <textarea id="tlInput" placeholder="Type or paste what you want to send to an AI…"></textarea>
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
              <div class="v-label" id="vLabel">CHECK THE LIGHTS</div>
              <div class="v-action" id="vAction">Type something to begin.</div>
            </div>
          </div>
        </div>
        <div class="tl-rules" id="tlRules"></div>
      </div>

      <div class="page view" id="view-aup" data-screen-label="04 My AI Rules">
        <div class="head" id="aupHead"></div>
        <div class="aup-grid">
          <div id="aupList"></div>
          <div class="aup-side" id="aupSide"></div>
        </div>
      </div>

      <div class="page view" id="view-glossary" data-screen-label="05 Glossary">
        <div class="head" id="glosHead"></div>
        <div class="glos-bar">
          <div class="glos-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
            <input id="glosSearch" placeholder="Search words…" />
          </div>
          <div class="glos-az" id="glosAz"></div>
        </div>
        <div class="glos-grid" id="glosGrid"></div>
      </div>

      <div class="page view" id="view-qref" data-screen-label="06 Quick Reference"></div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { initJuniorPortal } from '../lib/junior-portal.js'
import '../styles/junior-driver-portal.css'

onMounted(() => {
  initJuniorPortal()
})
</script>
