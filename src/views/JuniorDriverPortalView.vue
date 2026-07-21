<template>
  <div id="juniorPortalRoot" class="junior-portal-layout tier-cadet">
<aside class="sidebar" data-screen-label="00a Sidebar">
  <div class="sidebar-brand">
        <RouterLink class="portal-back" to="/home" aria-label="Back to home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        </RouterLink>
        <RouterLink class="brand" to="/home">
    <span class="brand-mark">AI</span>
    <span>AIDL<small>Juniors · The Open Road</small></span>
  </RouterLink>
      </div>
  <div class="tier-toggle" id="tierToggle">
    <button data-tier="cadet">JUNIOR CADET<small>AGES 8–12</small></button>
    <button data-tier="crew">ROAD CREW<small>AGES 12–16</small></button>
  </div>
  <div class="nav-group">
    <h6>Learn</h6>
    <div class="nav-item active" data-view="dashboard"><span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 11l9-7 9 7"></path><path d="M5 10v9h14v-9"></path></svg></span>Dashboard</div>
    <div class="nav-item" data-view="route"><span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 21l3-18h10l3 18"></path><path d="M9 3v18M15 3v18"></path></svg></span>Route Map</div>
    <div class="nav-item" data-view="lanes"><span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M3 12h18M3 18h18"></path></svg></span>The Five Lanes</div>
  </div>
  <div class="nav-group">
    <h6>Licence</h6>
    <div class="nav-item" data-view="ladder"><span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18M7 15h4"></path></svg></span>Licence Ladder</div>
    <div class="nav-item" data-view="code"><span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2h9l4 4v16H6z"></path><path d="M14 2v5h5"></path></svg></span><span id="navCode">The Cadet Code</span></div>
    <div class="nav-item" data-view="badges"><span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="9" r="6"></circle><path d="M8 14l-2 8 6-3 6 3-2-8"></path></svg></span>Badges &amp; Portfolio</div>
  </div>
  <div class="nav-group">
    <h6>Toolkit</h6>
    <div class="nav-item" data-view="traffic"><span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="8" y="2" width="8" height="20" rx="3"></rect><circle cx="12" cy="7" r="1.6"></circle><circle cx="12" cy="12" r="1.6"></circle><circle cx="12" cy="17" r="1.6"></circle></svg></span>Traffic Light Check</div>
    <div class="nav-item" data-view="glossary"><span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4z"></path><path d="M4 4v12a4 4 0 004 4h12"></path></svg></span>Glossary</div>
    <div class="nav-item" data-view="qref"><span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="3" width="16" height="18" rx="2"></rect><path d="M9 8h6M9 12h6M9 16h4"></path></svg></span>Quick Reference</div>
  </div>
  <div class="side-card">
    <div>MY LICENCE</div>
    <div class="lic-name" id="sideName">RILEY LEE</div>
    <div class="lic-id" id="sideId">AIDL-J-0042-1180</div>
    <div class="lic-meter"><i id="sideMeter" style="width: 31%;"></i></div>
    <div class="lic-meter-label"><span id="sideClass">GREEN LICENCE</span><span id="sideProg">in progress</span></div>
  </div>
</aside>

<main class="main">
  <div class="portal-nav-backdrop" id="portalNavBackdrop" aria-hidden="true"></div>
  <div class="topbar">
    <button type="button" class="portal-menu-btn" id="portalMenuBtn" aria-label="Open navigation">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
    </button>
    <div class="crumb"><span>AIDL JUNIORS</span><span>/</span><span class="here" id="crumbHere">Dashboard</span></div>
    <div class="top-search">
      <input placeholder="Search modules, signs, words…">
      <kbd>⌘K</kbd>
    </div>
    <div class="top-actions">
      <div class="icon-btn" title="Notifications">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 8a6 6 0 1112 0c0 7 3 8 3 8H3s3-1 3-8"></path><path d="M10 21a2 2 0 004 0"></path></svg>
        <span class="dot"></span>
      </div>
      <div class="avatar">
        <div class="avatar-img" id="avInit">RL</div>
        <div class="avatar-meta"><b id="avName">Riley Lee</b><small id="avRole">JUNIOR CADET</small></div>
      </div>
    </div>
  </div>

  <div class="page view active" id="view-dashboard" data-screen-label="01 Dashboard"></div>
  <div class="page view" id="view-route" data-screen-label="02 Route Map"></div>
  <div class="page view" id="view-lanes" data-screen-label="03 The Five Lanes"></div>
  <div class="page view" id="view-ladder" data-screen-label="04 Licence Ladder"></div>
  <div class="page view" id="view-code" data-screen-label="05 The Code">
    <div class="head" id="codeHead"></div>
    <div class="aup-grid">
      <div id="aupList"></div>
      <div class="aup-side" id="aupSide"></div>
    </div>
  </div>
  <div class="page view" id="view-badges" data-screen-label="06 Badges"></div>
  <div class="page view" id="view-traffic" data-screen-label="07 Traffic Light Check">
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
  <div class="page view" id="view-glossary" data-screen-label="08 Glossary">
    <div class="head" id="glosHead"></div>
    <div class="glos-bar">
      <div class="glos-search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4-4"></path></svg>
        <input id="glosSearch" placeholder="Search words…">
      </div>
      <div class="glos-az" id="glosAz"></div>
    </div>
    <div class="glos-grid" id="glosGrid"></div>
  </div>
  <div class="page view" id="view-qref" data-screen-label="09 Quick Reference"></div>
</main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { initJuniorPortal } from '../lib/junior-portal.js'
import '../styles/junior-driver-portal.css'
import '../styles/portal-responsive.css'

onMounted(() => {
  initJuniorPortal()
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
.brand {
  text-decoration: none;
  color: inherit;
}
</style>
