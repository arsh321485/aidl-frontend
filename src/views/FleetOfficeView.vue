<template>
  <div class="fleet-office" :class="{ 'nav-open': navOpen }">
    <aside class="sidebar">
      <router-link class="brand" to="/home"><span class="brand-mark">AI</span><span>AIDL<small>Fleet Office · Org Admin</small></span></router-link>
      <div class="org-chip">
        <div class="oc-label">FLEET ACCOUNT</div>
        <div class="oc-name">NORTHWIND<br />LOGISTICS</div>
        <div class="seat-meter"><i :style="{ width: seatPct + '%' }"></i></div>
        <div class="seat-label"><span>{{ seatUsed }} / {{ seatTotal }} SEATS</span><span>PLAN: FLEET</span></div>
      </div>
      <div class="nav-group">
        <h6>Fleet</h6>
        <div class="nav-item" :class="{ active: view === 'dash' }" @click="go('dash')">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 11l9-7 9 7"></path><path d="M5 10v9h14v-9"></path></svg></span>Depot Overview
        </div>
        <div class="nav-item" :class="{ active: view === 'keys' }" @click="go('keys')">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="8" cy="15" r="4"></circle><path d="M11 12l8-8M17 4h4v4"></path></svg></span>Dispatch Keys<span class="nav-badge">{{ activeKeyCount }}</span>
        </div>
        <div class="nav-item" :class="{ active: view === 'drivers' }" @click="go('drivers')">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="8" r="3.4"></circle><path d="M2.5 20c0-3.6 2.9-5.6 6.5-5.6s6.5 2 6.5 5.6"></path><path d="M17 8.5a3 3 0 010 5"></path></svg></span>Drivers
        </div>
      </div>
      <div class="nav-group">
        <h6>Governance</h6>
        <div class="nav-item" :class="{ active: view === 'aup' }" @click="go('aup')">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2h9l4 4v16H6z"></path><path d="M14 2v5h5"></path><path d="M9 13h7M9 17h5"></path></svg></span>Acceptable Use
        </div>
        <div class="nav-item" :class="{ active: view === 'send' }" @click="go('send')">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 3L11 13"></path><path d="M21 3l-6.5 18-3.5-8-8-3.5z"></path></svg></span>Send Cards
        </div>
        <div class="nav-item" :class="{ active: view === 'apps' }" @click="go('apps')">
          <span class="nav-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><path d="M14 17.5h7M17.5 14v7"></path></svg></span>Approved Apps
        </div>
      </div>
      <div class="side-card">
        <div>SIGNED IN AS</div>
        <b>PRIYA RAMAN</b>
        <div class="role">ORG ADMIN &middot; L&amp;D DIRECTOR</div>
        <div style="margin-top:8px">ADMIN-NW-0041</div>
        <div class="side-links">
          <router-link to="/home">&rarr; Continue as user</router-link>
          <a href="#" @click.prevent="signOut">&rarr; Sign out</a>
        </div>
      </div>
    </aside>

    <div class="nav-scrim" @click="navOpen = false"></div>

    <main class="main">
      <div class="topbar">
        <button class="nav-toggle" type="button" aria-label="Menu" @click="navOpen = !navOpen"><span></span><span></span><span></span></button>
        <div class="crumb"><span>AIDL</span><span>/</span><span>FLEET OFFICE</span><span>/</span><span class="here">{{ titles[view] }}</span></div>
        <div class="top-search"><input placeholder="Search drivers, keys, apps…" /><kbd>&#8984;K</kbd></div>
        <div class="top-actions">
          <div class="icon-btn" title="Notifications"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 8a6 6 0 1112 0c0 7 3 8 3 8H3s3-1 3-8"></path><path d="M10 21a2 2 0 004 0"></path></svg><span class="dot"></span></div>
          <div class="avatar"><div class="avatar-img">PR</div><div class="avatar-meta"><b>Priya Raman</b><small>ORG ADMIN</small></div></div>
        </div>
      </div>

      <!-- ============ DEPOT OVERVIEW ============ -->
      <div class="page view" :class="{ active: view === 'dash' }">
        <div class="head">
          <div>
            <span class="eyebrow">FLEET OFFICE</span>
            <h1>Depot<br />Overview</h1>
            <p>You provision the seats, set the house rules, and hand out the keys. Drivers do the driving.</p>
          </div>
          <div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn btn-yellow" @click="go('keys')">＋ NEW DISPATCH KEY</button></div>
        </div>
        <div class="stat-strip">
          <div class="stat"><div class="k">SEATS PURCHASED</div><div class="v">{{ seatTotal }}</div><div class="d">Fleet plan &middot; renews 01 Mar</div></div>
          <div class="stat hi"><div class="k">DRIVERS ENROLLED</div><div class="v">{{ seatUsed }}</div><div class="d up">+7 this week</div></div>
          <div class="stat"><div class="k">LICENCES ISSUED</div><div class="v">18</div><div class="d">56% of enrolled</div></div>
          <div class="stat"><div class="k">AUP UNSIGNED</div><div class="v">6</div><div class="d warn">Blocks Data Ethics Gate</div></div>
        </div>
        <div class="two-col">
          <div class="card">
            <div class="card-head"><h3>Recent Depot Activity</h3><span class="tag">LAST 48H</span></div>
            <div class="log">
              <div class="log-item"><div class="log-dot">🔑</div><div><b>Dispatch key OPS-ONBOARD used 4 times</b><small>4 new drivers enrolled to Class L &middot; Learner</small></div><div class="when">2h ago</div></div>
              <div class="log-item"><div class="log-dot">📄</div><div><b>AUP v3.1 published</b><small>Acknowledgement required before Module 04</small></div><div class="when">Yesterday</div></div>
              <div class="log-item"><div class="log-dot">✅</div><div><b>Claude Enterprise moved to Approved</b><small>Data class: Internal + Confidential</small></div><div class="when">Yesterday</div></div>
              <div class="log-item"><div class="log-dot">⛔</div><div><b>Public LLM chat marked Prohibited</b><small>Free-tier consumer tools blocked for all classes</small></div><div class="when">2d ago</div></div>
            </div>
          </div>
          <div class="card tinted">
            <div class="card-head"><h3>Rollout Checklist</h3><span class="tag live">3 / 4 DONE</span></div>
            <div class="checklist">
              <div class="check done"><span class="cb">✓</span><div><b>Seats provisioned</b><small>50 seats on Fleet plan</small></div><span class="pill green">DONE</span></div>
              <div class="check done"><span class="cb">✓</span><div><b>Acceptable Use Policy uploaded</b><small>v3.1 &middot; effective 01 Aug 2026</small></div><span class="pill green">LIVE</span></div>
              <div class="check done"><span class="cb">✓</span><div><b>Approved app registry set</b><small>9 AI tools &middot; 6 IT systems</small></div><span class="pill green">DONE</span></div>
              <div class="check todo"><span class="cb">!</span><div><b>Invite remaining 18 seats</b><small>Generate a dispatch key and send it out</small></div><button class="mini" @click="go('keys')">OPEN</button></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ============ DISPATCH KEYS ============ -->
      <div class="page view" :class="{ active: view === 'keys' }">
        <div class="head">
          <div>
            <span class="eyebrow">MAGIC LINKS</span>
            <h1>Dispatch Keys</h1>
            <p>A dispatch key is a single magic link. Anyone who opens it lands straight in enrolment with the class, track and policy already attached — no passwords, no admin ping-pong.</p>
          </div>
        </div>
        <div class="ml-grid">
          <div class="card">
            <div class="card-head"><h3>Cut a New Key</h3><span class="tag">STEP 1 OF 1</span></div>
            <div class="form-grid">
              <div class="field full">
                <label>Key Name <span>*</span></label>
                <input type="text" v-model="kName" />
              </div>
              <div class="field full">
                <label>Assign Class On Sign-Up</label>
                <div class="choice-group">
                  <div class="choice active">CLASS L<small>LEARNER</small></div>
                </div>
                <p class="hint" style="margin-top:8px">Only Class L (Learner) is live right now — Operator and Specialist tracks aren't open yet.</p>
              </div>
              <div class="field">
                <label>Seats On This Key</label>
                <input type="number" v-model.number="kSeats" min="1" max="18" />
              </div>
              <div class="field">
                <label>Expires After</label>
                <select v-model="kExp">
                  <option value="7">7 days</option>
                  <option value="14">14 days</option>
                  <option value="30">30 days</option>
                  <option value="90">90 days</option>
                </select>
              </div>
              <div class="field full">
                <label>Restrict To Email Domain</label>
                <input type="text" v-model="kDomain" placeholder="leave blank to allow any address" />
              </div>
              <div class="field full">
                <label>Note To Drivers <span>OPTIONAL</span></label>
                <textarea v-model="kNote" rows="2"></textarea>
              </div>
              <div class="field full">
                <div class="switch-row"><div class="switch" :class="{ on: swAup }" @click="swAup = !swAup"><i></i></div><div class="sw-text"><b>Require AUP acknowledgement</b><small>Driver signs Acceptable Use v3.1 before their first lesson unlocks.</small></div></div>
              </div>
              <div class="field full">
                <div class="switch-row"><div class="switch" :class="{ on: swApps }" @click="swApps = !swApps"><i></i></div><div class="sw-text"><b>Attach approved app registry</b><small>Drivers see only your approved AI + IT tools inside lessons and the Highway Code.</small></div></div>
              </div>
              <div class="field full" style="margin-top:4px"><button class="btn btn-yellow" style="width:100%;justify-content:center" @click="genKey">🔑 GENERATE MAGIC LINK</button></div>
            </div>
          </div>
          <div>
            <div class="ml-result">
              <div class="r-label">DISPATCH KEY &middot; READY TO SEND</div>
              <div class="ml-empty" v-if="!mlOut">
                <span class="key"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="8" cy="15" r="4"></circle><path d="M11 12l8-8M17 4h4v4"></path></svg></span>
                No key cut yet.<br />Fill the form and generate one.
              </div>
              <div v-else>
                <div class="ml-link">{{ lastLink }}</div>
                <div class="ml-meta">
                  <div>CLASS<b>CLASS {{ mlOut.cls }}</b></div>
                  <div>SEATS<b>{{ mlOut.seats }}</b></div>
                  <div>EXPIRES<b>{{ mlOut.exp }}</b></div>
                  <div>DOMAIN<b>{{ mlOut.dom }}</b></div>
                </div>
                <div class="ml-actions">
                  <button class="btn btn-yellow sm" @click="copy(lastLink, 'LINK COPIED')">COPY LINK</button>
                  <button class="btn sm" @click="toast('DRAFT OPENED IN MAIL')">EMAIL IT</button>
                  <button class="btn btn-ghost sm" @click="toast('POSTED TO #AI-TRAINING')">POST TO SLACK</button>
                </div>
              </div>
            </div>
            <div class="card tinted" style="margin-top:24px">
              <div class="card-head"><h3>House Rules</h3></div>
              <p class="hint">Keys are single-purpose and revocable. A revoked key stops working instantly, but drivers already enrolled through it keep their progress.<br /><br />Seats consumed by a key are held against your plan the moment a driver signs up — not when the key is cut.</p>
            </div>
          </div>
        </div>
        <div class="card-head" style="margin:32px 0 14px"><h3>Active Keys</h3><span class="tag">{{ activeKeyCount }} ACTIVE</span></div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Key</th><th>Class</th><th>Uses</th><th>Expires</th><th>Status</th><th></th></tr></thead>
            <tbody>
              <tr v-for="(k, i) in keys" :key="k.code">
                <td>{{ k.name }}<span class="sub">aidl.app/join/{{ k.code.toLowerCase() }}</span></td>
                <td><span class="pill sky">CLASS {{ k.cls }}</span></td>
                <td class="mono-cell">{{ k.used }} / {{ k.seats }}</td>
                <td class="mono-cell">{{ k.exp }}</td>
                <td>
                  <span v-if="k.status === 'active' && k.used < k.seats" class="pill green">ACTIVE</span>
                  <span v-else-if="k.status === 'active'" class="pill grey">FULL</span>
                  <span v-else class="pill red">REVOKED</span>
                </td>
                <td>
                  <div class="row-act" v-if="k.status === 'active'">
                    <button class="mini" @click="copy('https://aidl.app/join/' + k.code.toLowerCase(), 'LINK COPIED')">COPY</button>
                    <button class="mini danger" @click="k.status = 'revoked'; toast('KEY REVOKED')">REVOKE</button>
                  </div>
                  <div class="row-act" v-else>
                    <button class="mini" @click="k.status = 'active'; toast('KEY RESTORED')">RESTORE</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ============ DRIVERS ============ -->
      <div class="page view" :class="{ active: view === 'drivers' }">
        <div class="head">
          <div><span class="eyebrow">ROSTER</span><h1>Drivers</h1><p>Everyone enrolled under the Northwind fleet, and how far along their route they are.</p></div>
          <button class="btn btn-yellow" @click="go('keys')">＋ INVITE MORE</button>
        </div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Driver</th><th>Class</th><th>Progress</th><th>AUP</th><th>Joined Via</th><th>Status</th></tr></thead>
            <tbody>
              <tr v-for="d in drivers" :key="d.email">
                <td>{{ d.name }}<span class="sub">{{ d.email }}</span></td>
                <td><span class="pill sky">CLASS {{ d.cls }}</span></td>
                <td class="mono-cell">{{ d.progress }}</td>
                <td><span class="pill" :class="d.aupSigned ? 'green' : 'red'">{{ d.aupSigned ? 'SIGNED' : 'UNSIGNED' }}</span></td>
                <td class="mono-cell">{{ d.joinedVia }}</td>
                <td><span class="pill" :class="d.statusPill">{{ d.status }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ============ ACCEPTABLE USE ============ -->
      <div class="page view" :class="{ active: view === 'aup' }">
        <div class="head">
          <div><span class="eyebrow">GOVERNANCE</span><h1>Acceptable<br />Use Policy</h1><p>Upload your organisation's AUP once. Every driver signs the current version at the Data Ethics Gate, and lessons quote your rules instead of generic ones.</p></div>
        </div>
        <div class="up-grid">
          <div class="card">
            <div class="card-head"><h3>Upload New Version</h3><span class="tag">PDF &middot; DOCX &middot; MD</span></div>
            <div class="drop" :class="{ over: dragOver }" @click="fileInput?.click()" @dragenter.prevent="dragOver = true" @dragover.prevent="dragOver = true" @dragleave.prevent="dragOver = false" @drop.prevent="onFileDrop">
              <div class="di"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 17V5"></path><path d="M6.5 10.5L12 5l5.5 5.5"></path><path d="M4 19h16"></path></svg></div>
              <b>DROP YOUR POLICY HERE</b>
              <small>or click to choose a file &middot; max 20 MB</small>
            </div>
            <input ref="fileInput" type="file" accept=".pdf,.docx,.md,.txt" style="display:none" @change="onFileChange" />
            <div v-if="aupFile" class="file-chip">
              <span class="fi">{{ aupFileExt }}</span>
              <div style="min-width:0"><b>{{ aupFile.name }}</b><small>{{ aupFileKb }} KB &middot; ready to publish</small></div>
              <button class="mini danger" style="margin-left:auto" @click="aupFile = null">REMOVE</button>
            </div>
            <div class="form-grid" style="margin-top:20px">
              <div class="field"><label>Version Label</label><input type="text" v-model="aupVer" /></div>
              <div class="field"><label>Effective Date</label><input type="text" v-model="aupDate" /></div>
              <div class="field full"><label>Summary Shown To Drivers</label><textarea v-model="aupSum" rows="3"></textarea></div>
              <div class="field full"><div class="switch-row"><div class="switch" :class="{ on: swReack }" @click="swReack = !swReack"><i></i></div><div class="sw-text"><b>Require re-acknowledgement from all drivers</b><small>Existing signatures reset when this version goes live.</small></div></div></div>
              <div class="field full"><button class="btn btn-green" style="width:100%;justify-content:center" @click="publishAup">PUBLISH TO FLEET</button></div>
            </div>
          </div>
          <div>
            <div class="doc-live">
              <div class="mono" style="font-size:10px;letter-spacing:.1em">CURRENTLY LIVE</div>
              <div class="dl-t">Northwind AI<br />Acceptable Use v3.1</div>
              <div class="kv"><span>FILE</span><b>northwind-aup-v3.1.pdf</b><span>SIZE</span><b>412 KB &middot; 9 pages</b><span>EFFECTIVE</span><b>01 Aug 2026</b><span>UPLOADED BY</span><b>Priya Raman</b></div>
              <div class="ack-bar">ACKNOWLEDGED BY 26 / 32 DRIVERS<div class="ack-meter"><i style="width:81%"></i></div></div>
              <div class="ml-actions"><button class="btn sm" @click="toast('OPENING northwind-aup-v3.1.pdf')">VIEW</button><button class="btn btn-ghost sm" @click="toast('NUDGE SENT TO 6 DRIVERS')">NUDGE 6 UNSIGNED</button></div>
            </div>
            <div class="card" style="margin-top:24px">
              <div class="card-head"><h3>Version History</h3></div>
              <div class="log">
                <div class="log-item"><div class="log-dot">3.1</div><div><b>Added agent logging clause</b><small>Priya Raman &middot; 32 drivers notified</small></div><div class="when">Aug 2026</div></div>
                <div class="log-item"><div class="log-dot">3.0</div><div><b>Aligned with EU AI Act duties</b><small>Legal review by K. Osei</small></div><div class="when">Apr 2026</div></div>
                <div class="log-item"><div class="log-dot">2.4</div><div><b>First fleet-wide AUP</b><small>Priya Raman</small></div><div class="when">Nov 2025</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ============ SEND CARDS ============ -->
      <div class="page view" :class="{ active: view === 'send' }">
        <div class="head">
          <div><span class="eyebrow">BROADCAST</span><h1>Send Cards</h1><p>Pick the reference cards your drivers need at the wheel and push them into the channel where they already work. The destination follows how your fleet signed in.</p></div>
        </div>
        <div class="send-head">
          <div class="wk-chip">
            <span class="wk-ico" v-html="wkIcons[wk]"></span>
            <span>{{ wk === 'slack' ? 'SLACK WORKSPACE' : 'MICROSOFT TEAMS' }}<small>{{ wk === 'slack' ? 'northwind.slack.com · connected at sign-up' : 'Northwind Logistics (M365) · connected at sign-up' }}</small></span>
          </div>
          <div class="wk-switch">
            <button :class="{ active: wk === 'slack' }" @click="setWk('slack')">SLACK</button>
            <button :class="{ active: wk === 'teams' }" @click="setWk('teams')">TEAMS</button>
          </div>
        </div>
        <div class="card-picker">
          <div class="pick" v-for="c in cards" :key="c.id" :class="{ on: picked[c.id] }" @click="togglePick(c.id)">
            <span class="tick">✓</span>
            <div class="pk-ico">{{ c.ico }}</div>
            <h4>{{ c.t }}</h4>
            <p>{{ c.d }}</p>
            <span class="pk-kind">{{ c.k }}</span>
          </div>
        </div>
        <div class="send-grid">
          <div class="card">
            <div class="card-head"><h3>Delivery</h3><span class="tag">{{ pickedCards.length }} {{ pickedCards.length === 1 ? 'CARD' : 'CARDS' }}</span></div>
            <div class="mode-tabs">
              <button :class="{ active: mode === 'now' }" @click="mode = 'now'">SEND NOW</button>
              <button :class="{ active: mode === 'sched' }" @click="mode = 'sched'">SCHEDULE</button>
            </div>
            <div class="form-grid">
              <div class="field full"><label>Send To Group</label>
                <select v-model="destGroup">
                  <option value="All drivers (32)">All drivers (32)</option>
                  <option value="Class L · Learner (9)">Class L · Learner (9)</option>
                  <option value="Key: OPS-ONBOARD (11)">Key: OPS-ONBOARD (11)</option>
                  <option value="AUP unsigned (6)">AUP unsigned (6)</option>
                </select>
              </div>
              <div class="field full"><label>{{ wk === 'slack' ? 'Slack Channel' : 'Teams Channel' }}</label>
                <select v-model="destChan">
                  <option v-for="c in chans[wk]" :key="c" :value="c">{{ c }}</option>
                </select>
              </div>
              <div class="when-fields" :class="{ on: mode === 'sched' }">
                <div class="field"><label>Repeat</label>
                  <select v-model="schCadence">
                    <option>Once</option><option>Weekly</option><option>Fortnightly</option><option>Monthly</option><option>Quarterly</option>
                  </select>
                </div>
                <div class="field"><label>Day</label>
                  <select v-model="schDay">
                    <option>Monday</option><option>Tuesday</option><option>Wednesday</option><option>Thursday</option><option>Friday</option>
                  </select>
                </div>
                <div class="field"><label>Time</label><input type="time" v-model="schTime" /></div>
                <div class="field"><label>Starting</label><input type="text" v-model="schStart" /></div>
              </div>
              <div class="field full"><label>Message</label><textarea v-model="sendMsg" rows="3"></textarea></div>
              <div class="field full"><div class="switch-row"><div class="switch" :class="{ on: pinToChannel }" @click="pinToChannel = !pinToChannel"><i></i></div><div class="sw-text"><b>Pin to channel</b><small>Cards stay at the top so new joiners see them first.</small></div></div></div>
              <div class="field full"><div class="switch-row"><div class="switch" :class="{ on: alsoDm }" @click="alsoDm = !alsoDm"><i></i></div><div class="sw-text"><b>Also DM every driver in the group</b><small>Direct messages alongside the channel post.</small></div></div></div>
              <div class="field full"><button class="btn btn-green" style="width:100%;justify-content:center" @click="sendCards"><span>{{ sendLabel }}</span></button></div>
            </div>
          </div>
          <div>
            <div class="preview">
              <div class="pv-bar"><span class="pv-dot" :style="{ background: wk === 'slack' ? '#4A154B' : '#5059C9' }"></span><span>{{ destChan }}</span></div>
              <div class="pv-body">
                <div class="pv-msg">
                  <div class="pv-av">PR</div>
                  <div style="min-width:0">
                    <div class="pv-who">AIDL Fleet Office<span>APP &middot; 2:14 PM</span></div>
                    <p class="pv-text">{{ sendMsg || '—' }}</p>
                    <div v-if="pickedCards.length">
                      <div class="pv-att" v-for="c in pickedCards" :key="c.id"><b>{{ c.ico }} {{ c.t }}</b><small>{{ c.d }}</small></div>
                    </div>
                    <div v-else class="pv-none">No cards selected yet.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="drip-card" style="margin-top:24px">
              <div class="card-head" style="margin-bottom:14px"><h3>New Joiner Drip</h3><span class="tag" :class="{ live: dripOn }">{{ dripOn ? 'ON' : 'PAUSED' }}</span></div>
              <div class="switch-row" style="margin-bottom:16px"><div class="switch" :class="{ on: dripOn }" @click="toggleDrip"><i></i></div><div class="sw-text"><b>Send automatically on sign-up</b><small>{{ wk === 'slack' ? 'The moment a new licence is issued, these cards arrive as a Slack DM.' : 'The moment a new licence is issued, these cards arrive as a Teams chat message.' }}</small></div></div>
              <div :class="{ 'drip-off': !dripOn }">
                <div class="field" style="margin-bottom:14px"><label>Cards In The Welcome Pack</label>
                  <div class="chip-pick">
                    <button type="button" class="chip" v-for="c in cards" :key="c.id" :class="{ on: dripChips[c.id] }" @click="dripChips[c.id] = !dripChips[c.id]">{{ c.t }}</button>
                  </div>
                </div>
                <div class="form-grid">
                  <div class="field"><label>Send</label>
                    <select v-model="dripDelay">
                      <option>Immediately</option><option>After 1 hour</option><option>Next morning</option><option>After 3 days</option>
                    </select>
                  </div>
                  <div class="field"><label>Applies To</label>
                    <select v-model="dripWho">
                      <option>Every new licence</option><option>Class L only</option><option>Specific dispatch key</option>
                    </select>
                  </div>
                </div>
                <p class="hint" style="margin:14px 0 0">Drivers who join through a dispatch key are matched automatically — no need to add them by hand.</p>
              </div>
            </div>
            <div class="card tinted" style="margin-top:24px">
              <div class="card-head"><h3>Why This Channel</h3></div>
              <p class="hint">Northwind signed up with Slack, so cards post as a Slack app by default. If your fleet had signed in with Microsoft, this would deliver as an Adaptive Card to a Teams channel instead. Switch above only if you connected both.</p>
            </div>
          </div>
        </div>
        <div class="card-head" style="margin:32px 0 14px"><h3>Scheduled Sends</h3><span class="tag">{{ runningSchedCount }} RUNNING</span></div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Cards</th><th>Group</th><th>Destination</th><th>Cadence</th><th>Next Run</th><th>Status</th><th></th></tr></thead>
            <tbody>
              <tr v-if="!scheds.length" class="empty-row"><td colspan="7">No scheduled sends yet — switch Delivery to Schedule to add one.</td></tr>
              <tr v-for="(s, i) in scheds" :key="i">
                <td>{{ s.cards }}</td>
                <td class="mono-cell">{{ s.group }}</td>
                <td><span class="pill" :class="s.dest.startsWith('teams') ? 'sky' : 'grey'">{{ s.dest.startsWith('teams') ? 'TEAMS' : 'SLACK' }}</span> <span class="sub" style="display:inline;margin:0">{{ s.dest.split(':')[1] }}</span></td>
                <td class="mono-cell">{{ s.cad }}</td>
                <td class="mono-cell">{{ s.on ? s.next : '—' }}</td>
                <td><span class="pill" :class="s.on ? 'green' : 'yellow'">{{ s.on ? 'RUNNING' : 'PAUSED' }}</span></td>
                <td><div class="row-act"><button class="mini" @click="s.on = !s.on; toast(s.on ? 'SCHEDULE RESUMED' : 'SCHEDULE PAUSED')">{{ s.on ? 'PAUSE' : 'RESUME' }}</button><button class="mini danger" @click="scheds.splice(i, 1); toast('SCHEDULE DELETED')">DELETE</button></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ============ APPROVED APPS ============ -->
      <div class="page view" :class="{ active: view === 'apps' }">
        <div class="head">
          <div><span class="eyebrow">GOVERNANCE</span><h1>Approved<br />Applications</h1><p>The list of vehicles your drivers are allowed to drive. Lessons, the Highway Code and the Traffic Light Check all read from this registry.</p></div>
        </div>
        <div class="seg-tabs">
          <button :class="{ active: appTab === 'ai' }" @click="appTab = 'ai'">AI APPLICATIONS</button>
          <button :class="{ active: appTab === 'it' }" @click="appTab = 'it'">IT APPLICATIONS</button>
        </div>
        <div class="card" style="margin-bottom:24px">
          <div class="card-head"><h3>{{ appTab === 'ai' ? 'Add AI Application' : 'Add IT Application' }}</h3><span class="hint">Status drives what drivers see in lessons</span></div>
          <div class="app-add">
            <div class="field"><label>Application Name</label><input type="text" v-model="aName" placeholder="e.g. Claude Enterprise" /></div>
            <div class="field"><label>Category</label><input type="text" v-model="aCat" placeholder="e.g. Assistant" /></div>
            <div class="field"><label>Data Allowed</label>
              <select v-model="aData">
                <option>Public only</option><option>Internal</option><option>Internal + Confidential</option><option>None</option>
              </select>
            </div>
            <div class="field"><label>Status</label>
              <select v-model="aStatus">
                <option>Approved</option><option>Conditional</option><option>Prohibited</option>
              </select>
            </div>
            <button class="btn btn-yellow" @click="addApp">＋ ADD</button>
          </div>
        </div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>{{ appTab === 'ai' ? 'AI Application' : 'IT Application' }}</th><th>Category</th><th>Data Allowed</th><th>Status</th><th>Owner</th><th></th></tr></thead>
            <tbody>
              <tr v-if="!apps[appTab].length" class="empty-row"><td colspan="6">Nothing registered yet — add your first application above.</td></tr>
              <tr v-for="(a, i) in apps[appTab]" :key="a.n">
                <td>{{ a.n }}</td>
                <td class="mono-cell">{{ a.c }}</td>
                <td class="mono-cell">{{ a.d }}</td>
                <td><span class="pill" :class="statusPill[a.s]">{{ a.s.toUpperCase() }}</span></td>
                <td class="mono-cell">{{ a.o }}</td>
                <td><div class="row-act"><button class="mini danger" @click="apps[appTab].splice(i, 1); toast('REMOVED FROM REGISTRY')">REMOVE</button></div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="hint" style="margin-top:16px">Prohibited entries appear in the Mistake Museum as worked examples, so drivers learn <em>why</em> a tool is off-limits rather than just seeing a blocked page.</p>
      </div>
    </main>

    <div class="toast" :class="{ show: toastShow }">{{ toastMsg }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

/*
 * Fleet Office — Org Admin dashboard.
 * Converted from the standalone "Fleet Office" HTML mockup.
 * Only Class L (Learner) is live for now — every place the original mockup
 * offered a choice between Class L / O / S has been narrowed to L only,
 * and demo rows tagged Class O or Class S were dropped or relabelled.
 */

const router = useRouter()
function signOut() {
  localStorage.removeItem('aidl_auth')
  router.push('/')
}

type KeyStatus = 'active' | 'revoked'
interface DispatchKey {
  name: string
  code: string
  cls: 'L'
  used: number
  seats: number
  exp: string
  status: KeyStatus
}
interface Driver {
  name: string
  email: string
  cls: 'L'
  progress: string
  aupSigned: boolean
  joinedVia: string
  status: string
  statusPill: 'green' | 'yellow' | 'sky' | 'grey' | 'red'
}
interface AppEntry { n: string; c: string; d: string; s: 'Approved' | 'Conditional' | 'Prohibited'; o: string }
interface CardDef { id: string; ico: string; t: string; k: string; d: string }
interface SchedEntry { cards: string; group: string; dest: string; cad: string; next: string; on: boolean }

const view = ref<'dash' | 'keys' | 'drivers' | 'aup' | 'send' | 'apps'>('dash')
const navOpen = ref(false)
const titles: Record<string, string> = {
  dash: 'Depot Overview', keys: 'Dispatch Keys', drivers: 'Drivers',
  aup: 'Acceptable Use', send: 'Send Cards', apps: 'Approved Apps',
}
function go(v: typeof view.value) {
  view.value = v
  navOpen.value = false
  window.scrollTo(0, 0)
}

/* toast */
const toastMsg = ref('COPIED')
const toastShow = ref(false)
let toastTimer: ReturnType<typeof setTimeout> | undefined
function toast(msg: string) {
  toastMsg.value = msg
  toastShow.value = true
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastShow.value = false }, 2000)
}
function copy(text: string, msg: string) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => toast(msg), () => toast(msg))
  } else {
    toast(msg)
  }
}

/* seats */
const seatUsed = ref(32)
const seatTotal = ref(50)
const seatPct = computed(() => Math.round((seatUsed.value / seatTotal.value) * 100))

/* ===== dispatch keys (Class L only) ===== */
const keys = reactive<DispatchKey[]>([
  { name: 'Ops Onboarding (rolling)', code: 'OPS-ONBOARD', cls: 'L', used: 11, seats: 20, exp: '30 Sep 2026', status: 'active' },
  { name: 'Contractor Trial', code: 'CTR-TRIAL', cls: 'L', used: 2, seats: 5, exp: '01 Jul 2026', status: 'revoked' },
])
const activeKeyCount = computed(() => keys.filter((k) => k.status === 'active').length)

const kName = ref('Engineering Cohort Q3')
const kSeats = ref(12)
const kExp = ref('14')
const kDomain = ref('northwind.com')
const kNote = ref('Two modules a week, 25 min each. Finish before the Q4 rollout.')
const swAup = ref(true)
const swApps = ref(true)

const lastLink = ref('')
const mlOut = ref<{ cls: string; seats: number; exp: string; dom: string } | null>(null)

function token(n: number) {
  const alphabet = 'abcdefghjkmnpqrstuvwxyz23456789'
  let s = ''
  for (let i = 0; i < n; i++) s += alphabet[Math.floor(Math.random() * alphabet.length)]
  return s
}
function genKey() {
  const name = kName.value.trim() || 'Untitled Key'
  const seats = kSeats.value || 1
  const days = parseInt(kExp.value, 10)
  const dom = kDomain.value.trim()
  const code = name.toUpperCase().replace(/[^A-Z0-9]+/g, '-').replace(/^-|-$/g, '').split('-').slice(0, 2).join('-') || 'KEY'
  const d = new Date(2026, 7, 5 + days)
  const exp = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  lastLink.value = 'https://aidl.app/join/' + code.toLowerCase() + '?k=' + token(18)
  mlOut.value = { cls: 'L', seats, exp, dom: dom ? '@' + dom : 'ANY' }
  keys.unshift({ name, code, cls: 'L', used: 0, seats, exp, status: 'active' })
  toast('KEY GENERATED')
}

/* ===== drivers (Class L only) ===== */
const drivers = reactive<Driver[]>([
  { name: 'Elise Tran', email: 'e.tran@northwind.com', cls: 'L', progress: '3 / 12 modules', aupSigned: true, joinedVia: 'OPS-ONBOARD', status: 'ON ROAD', statusPill: 'green' },
  { name: 'Tom Fairweather', email: 't.fairweather@northwind.com', cls: 'L', progress: '0 / 12 modules', aupSigned: false, joinedVia: 'OPS-ONBOARD', status: 'NOT STARTED', statusPill: 'grey' },
])

/* ===== AUP upload ===== */
const fileInput = ref<HTMLInputElement | null>(null)
const dragOver = ref(false)
const aupFile = ref<File | null>(null)
const aupFileKb = computed(() => (aupFile.value ? Math.max(1, Math.round(aupFile.value.size / 1024)) : 0))
const aupFileExt = computed(() => (aupFile.value ? (aupFile.value.name.split('.').pop() || 'DOC').toUpperCase() : ''))
function onFileChange() {
  const f = fileInput.value?.files?.[0]
  if (f) aupFile.value = f
}
function onFileDrop(e: DragEvent) {
  dragOver.value = false
  const f = e.dataTransfer?.files?.[0]
  if (f) aupFile.value = f
}
const aupVer = ref('v3.2')
const aupDate = ref('01 Sep 2026')
const aupSum = ref('Confidential customer data never leaves approved tools. All AI output touching customers gets a human review. Log every agent action in the Northwind AI register.')
const swReack = ref(true)
function publishAup() {
  toast(aupFile.value ? 'PUBLISHED · 32 DRIVERS NOTIFIED' : 'ATTACH A FILE FIRST')
}

/* ===== approved apps ===== */
const apps = reactive<{ ai: AppEntry[]; it: AppEntry[] }>({
  ai: [
    { n: 'Claude Enterprise', c: 'Assistant · Agents', d: 'Internal + Confidential', s: 'Approved', o: 'Platform Eng' },
    { n: 'GitHub Copilot', c: 'Code assistant', d: 'Internal', s: 'Approved', o: 'Platform Eng' },
    { n: 'Notion AI', c: 'Docs summarisation', d: 'Internal', s: 'Approved', o: 'Ops' },
    { n: 'Otter.ai', c: 'Meeting transcription', d: 'Public only', s: 'Conditional', o: 'Ops' },
    { n: 'Midjourney', c: 'Image generation', d: 'Public only', s: 'Conditional', o: 'Brand' },
    { n: 'Consumer free-tier chatbots', c: 'Assistant', d: 'None', s: 'Prohibited', o: 'InfoSec' },
  ],
  it: [
    { n: 'Okta SSO', c: 'Identity', d: 'Internal + Confidential', s: 'Approved', o: 'IT' },
    { n: 'Google Workspace', c: 'Productivity', d: 'Internal + Confidential', s: 'Approved', o: 'IT' },
    { n: 'Slack (Enterprise Grid)', c: 'Messaging', d: 'Internal', s: 'Approved', o: 'IT' },
    { n: 'Jira + Confluence', c: 'Delivery', d: 'Internal', s: 'Approved', o: 'PMO' },
    { n: 'Snowflake', c: 'Data warehouse', d: 'Internal + Confidential', s: 'Approved', o: 'Data' },
    { n: 'Personal cloud drives', c: 'Storage', d: 'None', s: 'Prohibited', o: 'InfoSec' },
  ],
})
const appTab = ref<'ai' | 'it'>('ai')
const statusPill: Record<string, string> = { Approved: 'green', Conditional: 'yellow', Prohibited: 'red' }
const aName = ref('')
const aCat = ref('')
const aData = ref('Internal')
const aStatus = ref('Approved')
function addApp() {
  const n = aName.value.trim()
  if (!n) { toast('NAME REQUIRED'); return }
  apps[appTab.value].unshift({ n, c: aCat.value.trim() || '—', d: aData.value, s: aStatus.value as AppEntry['s'], o: 'Priya Raman' })
  aName.value = ''
  aCat.value = ''
  toast('ADDED TO REGISTRY')
}

/* ===== send cards ===== */
const cards: CardDef[] = [
  { id: 'traffic', ico: '🚦', t: 'Traffic Light Check', k: 'DECISION AID', d: 'Green, amber or red before you hand a task to AI. The three-second gut check.' },
  { id: 'aup', ico: '📄', t: 'Acceptable Use v3.1', k: 'POLICY · SIGNATURE REQUIRED', d: 'Your live AUP with the summary drivers actually read.' },
  { id: 'apps', ico: '🧩', t: 'Approved Apps Registry', k: 'REGISTRY · 12 ENTRIES', d: 'Which AI and IT tools are approved, conditional or prohibited, and for what data.' },
  { id: 'prep', ico: '🅿️', t: 'PREP Prompt Card', k: 'TECHNIQUE', d: 'Purpose, Role, Expectations, Parameters — the four-part prompt frame.' },
  { id: 'ethics', ico: '⚖️', t: 'Data Ethics Gate', k: 'GATE BRIEFING', d: 'What blocks a licence: unsigned policy, unlogged agents, unreviewed output.' },
  { id: 'museum', ico: '🏛️', t: 'Mistake Museum', k: 'WORKED EXAMPLES', d: 'Real failures from the fleet, de-identified, with what should have happened.' },
]
const picked = reactive<Record<string, boolean>>({ traffic: true, aup: true })
const pickedCards = computed(() => cards.filter((c) => picked[c.id]))
function togglePick(id: string) { picked[id] = !picked[id] }

const wk = ref<'slack' | 'teams'>('slack')
const chans: Record<'slack' | 'teams', string[]> = {
  slack: ['#ai-training', '#general', '#engineering', '#ops-team'],
  teams: ['AI Enablement › General', 'Northwind All Hands', 'Engineering › Practice', 'Ops › Announcements'],
}
const wkIcons: Record<'slack' | 'teams', string> = {
  slack: '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#36C5F0" d="M9.5 15.2a2.4 2.4 0 1 1-2.4-2.4h2.4v2.4z"/><path fill="#36C5F0" d="M10.7 15.2a2.4 2.4 0 0 1 4.8 0v6a2.4 2.4 0 0 1-4.8 0v-6z"/><path fill="#2EB67D" d="M13.1 9.3a2.4 2.4 0 1 1 2.4-2.4v2.4h-2.4z"/><path fill="#2EB67D" d="M13.1 10.5a2.4 2.4 0 0 1 0 4.8h-6a2.4 2.4 0 0 1 0-4.8h6z"/><path fill="#ECB22E" d="M19 13.1a2.4 2.4 0 1 1 2.4 2.4H19v-2.4z"/><path fill="#ECB22E" d="M17.8 13.1a2.4 2.4 0 0 1-4.8 0v-6a2.4 2.4 0 0 1 4.8 0v6z"/><path fill="#E01E5A" d="M14.9 19a2.4 2.4 0 1 1-2.4 2.4V19h2.4z"/><path fill="#E01E5A" d="M14.9 17.8a2.4 2.4 0 0 1 0-4.8h6a2.4 2.4 0 0 1 0 4.8h-6z"/></svg>',
  teams: '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#5059C9" d="M17.2 10.6h4.4c.5 0 .9.4.9.9v4c0 1.8-1.4 3.2-3.2 3.2s-3.2-1.4-3.2-3.2v-4.9h1.1z"/><circle cx="19.4" cy="7.3" r="1.8" fill="#5059C9"/><path fill="#7B83EB" d="M13.9 8.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"/><path fill="#7B83EB" d="M19.1 9.6H9.3c-.6 0-1 .5-1 1v6.1c0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8v-6.1c0-.5-.4-1-.8-1z"/></svg>',
}
const destGroup = ref('All drivers (32)')
const destChan = ref(chans.slack[0])
function setWk(w: 'slack' | 'teams') {
  wk.value = w
  destChan.value = chans[w][0]
}

const mode = ref<'now' | 'sched'>('now')
const sendLabel = computed(() => (mode.value === 'sched' ? 'SCHEDULE THIS SEND' : wk.value === 'slack' ? 'POST TO SLACK' : 'POST TO TEAMS'))
const schCadence = ref('Weekly')
const schDay = ref('Monday')
const schTime = ref('09:00')
const schStart = ref('10 Aug 2026')
const sendMsg = ref("Pinning our house rules for AI. Keep these handy — they're what the Traffic Light Check in your lessons refers to.")
const pinToChannel = ref(true)
const alsoDm = ref(false)

const dripOn = ref(true)
function toggleDrip() {
  dripOn.value = !dripOn.value
  toast(dripOn.value ? 'DRIP ENABLED' : 'DRIP PAUSED')
}
const dripChips = reactive<Record<string, boolean>>({ aup: true, traffic: true, apps: true })
const dripDelay = ref('Immediately')
const dripWho = ref('Every new licence')

const scheds = reactive<SchedEntry[]>([
  { cards: 'Traffic Light Check', group: 'All drivers (32)', dest: 'slack:#ai-training', cad: 'Weekly · Mon 09:00', next: 'Mon 10 Aug, 09:00', on: true },
  { cards: 'Acceptable Use v3.1', group: 'AUP unsigned (6)', dest: 'slack:DM', cad: 'Fortnightly · Thu 08:30', next: 'Thu 13 Aug, 08:30', on: true },
  { cards: 'Mistake Museum', group: 'Class L · Learner (9)', dest: 'slack:#engineering', cad: 'Monthly · 1st 10:00', next: 'Tue 01 Sep, 10:00', on: false },
])
const runningSchedCount = computed(() => scheds.filter((s) => s.on).length)

function sendCards() {
  if (!pickedCards.value.length) { toast('PICK AT LEAST ONE CARD'); return }
  if (mode.value === 'now') {
    toast(pickedCards.value.length + (pickedCards.value.length === 1 ? ' CARD' : ' CARDS') + ' POSTED TO ' + (wk.value === 'slack' ? 'SLACK' : 'TEAMS'))
    return
  }
  const sel = pickedCards.value
  const first = sel[0]!
  scheds.unshift({
    cards: sel.length === 1 ? first.t : first.t + ' +' + (sel.length - 1),
    group: destGroup.value,
    dest: wk.value + ':' + destChan.value,
    cad: schCadence.value === 'Once' ? 'Once · ' + schDay.value + ' ' + schTime.value : schCadence.value + ' · ' + schDay.value.slice(0, 3) + ' ' + schTime.value,
    next: schDay.value + ' ' + schStart.value + ', ' + schTime.value,
    on: true,
  })
  toast('SCHEDULE CREATED')
}
</script>

<style scoped>
.fleet-office {
  --cream: #f5ecd2;
  --cream-2: #f0e3bd;
  --cream-3: #e6d8a8;
  --asphalt: #14140f;
  --asphalt-2: #1f1e16;
  --asphalt-3: #2a2820;
  --sign-yellow: #ffcc00;
  --sign-amber: #ff9d00;
  --signal-red: #e23a2e;
  --signal-green: #2ec866;
  --sky: #6fb3e0;
  --ink: #14140f;
  --muted: #6a624a;
  --line: #d8c98f;
  --accent: #ffcc00;
  --accent-ink: #14140f;

  min-height: 100vh;
  background: var(--cream);
  color: var(--ink);
  font-family: "Space Grotesk", system-ui, sans-serif;
}
.fleet-office a:not(.brand) { color: var(--ink); text-decoration: none; }
.fleet-office a:not(.brand):hover { color: var(--signal-red); }
.fleet-office .mono { font-family: "JetBrains Mono", monospace; }
/* SIDEBAR */
/* Fixed (not sticky) so it always spans the full viewport height and
   never gets pushed up near the bottom of a page taller than 100vh,
   which used to leave blank page background exposed beneath it. */
aside.sidebar { background: var(--asphalt); color: var(--cream); border-right: 3px solid var(--ink); padding: 22px 18px; display: flex; flex-direction: column; position: fixed; top: 0; left: 0; bottom: 0; width: 268px; overflow-y: auto; z-index: 100; }
.brand { display: flex; align-items: center; gap: 12px; font-family: "Bungee"; font-size: 18px; color: var(--cream); text-decoration: none; padding: 0 4px 16px; border-bottom: 2px dashed var(--asphalt-3); }
.brand:hover { color: var(--cream); }
.brand-mark { width: 40px; height: 40px; border-radius: 50%; background: var(--sign-yellow); border: 3px solid var(--ink); display: grid; place-items: center; font-family: "Bungee"; font-size: 14px; color: var(--ink); box-shadow: 3px 3px 0 var(--asphalt-3); }
.brand small { display: block; font-family: "JetBrains Mono", monospace; font-size: 9px; color: var(--cream-3); font-weight: 400; margin-top: 2px; }
.org-chip { margin: 16px 0 4px; border: 3px solid var(--ink); background: var(--asphalt-2); box-shadow: 3px 3px 0 var(--asphalt-3); padding: 12px; }
.org-chip .oc-label { font-family: "JetBrains Mono", monospace; font-size: 9px; color: var(--sign-yellow); letter-spacing: .1em; }
.org-chip .oc-name { font-family: "Bungee"; font-size: 15px; line-height: 1.05; margin: 5px 0 8px; color: var(--cream); }
.seat-meter { height: 8px; background: var(--asphalt-3); border: 1px solid var(--asphalt); position: relative; }
.seat-meter > i { display: block; height: 100%; background: var(--sign-yellow); }
.seat-label { display: flex; justify-content: space-between; margin-top: 5px; font-family: "JetBrains Mono", monospace; font-size: 9px; color: var(--cream-2); }
.nav-group { margin-top: 18px; }
.nav-group h6 { font-family: "Bungee"; font-size: 10px; color: var(--sign-yellow); margin: 0 0 8px; padding: 0 6px; letter-spacing: .1em; }
.nav-item { display: flex; align-items: center; gap: 12px; padding: 10px 12px; margin-bottom: 2px; cursor: pointer; font-size: 14px; font-weight: 600; color: var(--cream-2); border: 2px solid transparent; transition: background .12s; user-select: none; }
.nav-item:hover { background: var(--asphalt-2); color: var(--cream); }
.nav-item.active { background: var(--accent); color: var(--accent-ink); border: 2px solid var(--ink); box-shadow: 3px 3px 0 var(--asphalt); }
.nav-item .nav-ico { width: 22px; height: 22px; display: grid; place-items: center; flex: 0 0 22px; }
.nav-item .nav-ico svg { width: 100%; height: 100%; }
.nav-item .nav-badge { margin-left: auto; font-family: "JetBrains Mono", monospace; font-size: 9px; padding: 2px 6px; background: var(--signal-red); color: var(--cream); }
.nav-item.active .nav-badge { background: var(--ink); color: var(--sign-yellow); }
.side-card { margin-top: auto; background: var(--asphalt-2); border: 2px solid var(--asphalt-3); padding: 14px; font-family: "JetBrains Mono", monospace; font-size: 11px; color: var(--cream-2); }
.side-card b { font-family: "Bungee"; font-size: 13px; color: var(--cream); display: block; margin: 4px 0; }
.side-card .role { color: var(--sign-yellow); }
.side-links { margin-top: 12px; padding-top: 12px; border-top: 2px dashed var(--asphalt-3); display: flex; flex-direction: column; gap: 6px; }
aside.sidebar .side-links a { color: var(--cream-2); text-decoration: none; font-size: 11px; }
aside.sidebar .side-links a:hover { color: var(--sign-yellow); }
/* MAIN */
main.main { display: flex; flex-direction: column; min-width: 0; margin-left: 268px; min-height: 100vh; }
.topbar { background: var(--cream); border-bottom: 3px solid var(--ink); padding: 16px 36px; display: flex; align-items: center; gap: 24px; position: sticky; top: 0; z-index: 30; }
.crumb { display: flex; align-items: center; gap: 10px; font-family: "JetBrains Mono", monospace; font-size: 11px; color: var(--muted); text-transform: uppercase; }
.crumb .here { color: var(--ink); }
.top-search { margin-left: auto; display: flex; align-items: center; border: 3px solid var(--ink); background: #fff; height: 40px; padding: 0 12px; min-width: 260px; }
.top-search input { border: 0; outline: 0; background: transparent; flex: 1; height: 100%; font-family: "Space Grotesk"; font-size: 14px; font-weight: 600; }
.top-search kbd { font-family: "JetBrains Mono", monospace; font-size: 10px; background: var(--ink); color: var(--cream); padding: 2px 6px; }
.top-actions { display: flex; align-items: center; gap: 10px; }
.icon-btn { width: 40px; height: 40px; border: 3px solid var(--ink); background: var(--cream); display: grid; place-items: center; cursor: pointer; position: relative; }
.icon-btn .dot { position: absolute; top: -4px; right: -4px; width: 14px; height: 14px; background: var(--signal-red); border: 2px solid var(--ink); border-radius: 50%; }
.avatar { display: flex; align-items: center; gap: 10px; border: 3px solid var(--ink); padding: 4px 12px 4px 4px; background: var(--cream); height: 40px; }
.avatar-img { width: 32px; height: 32px; background: var(--accent); border: 2px solid var(--ink); display: grid; place-items: center; font-family: "Bungee"; font-size: 12px; }
.avatar-meta { line-height: 1.1; }
.avatar-meta b { font-family: "Bungee"; font-size: 12px; display: block; }
.avatar-meta small { font-family: "JetBrains Mono", monospace; font-size: 9px; color: var(--muted); }
.page { padding: 32px 36px 60px; flex: 1; min-width: 0; }
.page .head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 24px; }
.page .head h1 { font-family: "Bungee"; font-size: 42px; margin: 0; line-height: .95; }
.page .head p { margin: 8px 0 0; color: var(--muted); font-size: 14px; max-width: 620px; text-wrap: pretty; }
.page .head .eyebrow { font-family: "Bungee"; font-size: 11px; background: var(--ink); color: var(--sign-yellow); padding: 4px 10px; display: inline-block; margin-bottom: 12px; }
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; background: var(--ink); color: var(--cream); border: 3px solid var(--ink); font-family: "Bungee"; font-size: 12px; text-decoration: none; box-shadow: 4px 4px 0 var(--sign-yellow); transition: transform .12s, box-shadow .12s; cursor: pointer; }
.btn:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--sign-yellow); color: var(--cream); }
.btn.btn-yellow { background: var(--sign-yellow); color: var(--ink); box-shadow: 4px 4px 0 var(--ink); }
.btn.btn-yellow:hover { box-shadow: 6px 6px 0 var(--ink); color: var(--ink); }
.btn.btn-green { background: var(--signal-green); color: var(--ink); box-shadow: 4px 4px 0 var(--ink); }
.btn.btn-ghost { background: var(--cream); color: var(--ink); box-shadow: none; }
.btn.btn-ghost:hover { transform: none; background: var(--cream-2); }
.btn.sm { padding: 7px 12px; font-size: 10px; box-shadow: 3px 3px 0 var(--ink); }
.view { display: none; }
.view.active { display: block; }
.card { background: #fff; border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--ink); padding: 22px; }
.card.tinted { background: var(--cream-2); }
.card.dark { background: var(--asphalt); color: var(--cream); }
.card-head { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 16px; }
.card-head h3 { font-family: "Bungee"; font-size: 16px; margin: 0; }
.card-head .tag { font-family: "JetBrains Mono", monospace; font-size: 10px; padding: 3px 8px; background: var(--ink); color: var(--sign-yellow); }
.card-head .tag.live { background: var(--signal-green); color: var(--ink); }
.hint { font-family: "JetBrains Mono", monospace; font-size: 10px; color: var(--muted); line-height: 1.6; }
/* STAT STRIP */
.stat-strip { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin-bottom: 26px; }
.stat { background: #fff; border: 3px solid var(--ink); box-shadow: 5px 5px 0 var(--ink); padding: 16px 18px; }
.stat .k { font-family: "JetBrains Mono", monospace; font-size: 9px; color: var(--muted); letter-spacing: .1em; }
.stat .v { font-family: "Bungee"; font-size: 32px; line-height: 1; margin: 8px 0 4px; }
.stat .d { font-family: "JetBrains Mono", monospace; font-size: 10px; }
.stat.hi { background: var(--sign-yellow); }
.stat .d.up { color: #1c8a45; }
.stat .d.warn { color: var(--signal-red); }
/* FORMS */
.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.field { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.field.full { grid-column: 1 / -1; }
.field label { font-family: "JetBrains Mono", monospace; font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); }
.field label span { color: var(--signal-red); }
.field input, .field select, .field textarea { border: 3px solid var(--ink); background: #fff; padding: 10px 12px; font-family: "Space Grotesk"; font-size: 14px; font-weight: 600; color: var(--ink); outline: 0; width: 100%; }
.field input:focus, .field select:focus, .field textarea:focus { box-shadow: 3px 3px 0 var(--sign-yellow); }
.field textarea { resize: vertical; font-weight: 500; }
.choice-group { display: grid; gap: 8px; grid-auto-flow: column; }
.choice { border: 3px solid var(--ink); background: var(--cream); padding: 11px 8px; text-align: center; font-family: "Bungee"; font-size: 11px; cursor: pointer; user-select: none; line-height: 1.2; }
.choice small { display: block; font-family: "JetBrains Mono", monospace; font-size: 8px; margin-top: 4px; font-weight: 500; color: var(--muted); }
.choice.active { background: var(--sign-yellow); box-shadow: 3px 3px 0 var(--ink); }
.choice.active small { color: var(--ink); }
.switch-row { display: flex; align-items: flex-start; gap: 12px; border: 3px solid var(--ink); background: var(--cream-2); padding: 12px 14px; }
.switch { flex: 0 0 46px; width: 46px; height: 26px; border: 3px solid var(--ink); background: #fff; position: relative; cursor: pointer; margin-top: 2px; }
.switch i { position: absolute; top: 0; left: 0; width: 20px; height: 20px; background: var(--muted); transition: transform .16s, background .16s; }
.switch.on { background: var(--signal-green); }
.switch.on i { transform: translateX(20px); background: var(--ink); }
.switch-row .sw-text { min-width: 0; }
.switch-row b { font-family: "Bungee"; font-size: 12px; display: block; margin-bottom: 3px; }
.switch-row small { font-family: "JetBrains Mono", monospace; font-size: 10px; color: var(--muted); line-height: 1.5; }
/* MAGIC LINK */
.ml-grid { display: grid; grid-template-columns: 1.25fr minmax(0, 1fr); gap: 24px; align-items: start; }
.ml-result { background: var(--asphalt); color: var(--cream); border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--sign-yellow); padding: 20px; }
.ml-result .r-label { font-family: "JetBrains Mono", monospace; font-size: 9px; color: var(--sign-yellow); letter-spacing: .12em; }
.ml-link { margin: 12px 0; background: var(--asphalt-2); border: 2px dashed var(--sign-yellow); padding: 12px; font-family: "JetBrains Mono", monospace; font-size: 12px; word-break: break-all; line-height: 1.6; color: var(--cream); }
.ml-empty { display: grid; place-items: center; gap: 10px; text-align: center; padding: 22px 10px; font-family: "JetBrains Mono", monospace; font-size: 11px; color: var(--cream-3); line-height: 1.6; }
.ml-empty .key { width: 56px; height: 56px; border: 3px solid var(--sign-yellow); border-radius: 50%; display: grid; place-items: center; color: var(--sign-yellow); }
.ml-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 14px; font-family: "JetBrains Mono", monospace; font-size: 10px; }
.ml-meta div { background: var(--asphalt-2); border: 2px solid var(--asphalt-3); padding: 8px 10px; }
.ml-meta b { display: block; font-size: 12px; color: var(--sign-yellow); margin-top: 3px; font-family: "Bungee"; }
.ml-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
/* TABLES */
.tbl-wrap { border: 3px solid var(--ink); background: #fff; box-shadow: 6px 6px 0 var(--ink); overflow-x: auto; }
table { width: 100%; border-collapse: collapse; min-width: 640px; }
th { font-family: "Bungee"; font-size: 10px; text-align: left; background: var(--asphalt); color: var(--sign-yellow); padding: 11px 14px; letter-spacing: .06em; white-space: nowrap; }
td { border-bottom: 2px solid var(--cream-3); padding: 12px 14px; font-size: 13px; font-weight: 600; vertical-align: middle; }
tr:last-child td { border-bottom: 0; }
tbody tr:hover { background: var(--cream); }
td .sub { display: block; font-family: "JetBrains Mono", monospace; font-size: 10px; color: var(--muted); font-weight: 500; margin-top: 3px; }
td.mono-cell { font-family: "JetBrains Mono", monospace; font-size: 11px; font-weight: 500; }
.pill { display: inline-block; font-family: "Bungee"; font-size: 9px; padding: 4px 8px; border: 2px solid var(--ink); white-space: nowrap; }
.pill.green { background: var(--signal-green); }
.pill.yellow { background: var(--sign-yellow); }
.pill.red { background: var(--signal-red); color: var(--cream); }
.pill.grey { background: var(--cream-3); color: var(--muted); }
.pill.sky { background: var(--sky); }
.row-act { display: flex; gap: 6px; flex-wrap: wrap; }
.mini { font-family: "JetBrains Mono", monospace; font-size: 10px; border: 2px solid var(--ink); background: var(--cream); padding: 5px 8px; cursor: pointer; font-weight: 700; }
.mini:hover { background: var(--sign-yellow); }
.mini.danger:hover { background: var(--signal-red); color: var(--cream); }
.empty-row td { text-align: center; font-family: "JetBrains Mono", monospace; font-size: 11px; color: var(--muted); padding: 26px; font-weight: 500; }
/* UPLOAD */
.up-grid { display: grid; grid-template-columns: 1.15fr minmax(0, 1fr); gap: 24px; align-items: start; }
.drop { border: 4px dashed var(--ink); background: var(--cream-2); padding: 30px 22px; text-align: center; cursor: pointer; transition: background .14s; }
.drop:hover, .drop.over { background: var(--sign-yellow); }
.drop .di { width: 58px; height: 58px; margin: 0 auto 12px; border: 3px solid var(--ink); background: #fff; display: grid; place-items: center; }
.drop b { font-family: "Bungee"; font-size: 14px; display: block; }
.drop small { font-family: "JetBrains Mono", monospace; font-size: 10px; color: var(--muted); display: block; margin-top: 6px; }
.file-chip { display: flex; align-items: center; gap: 12px; border: 3px solid var(--ink); background: #fff; padding: 12px 14px; margin-top: 14px; box-shadow: 4px 4px 0 var(--signal-green); }
.file-chip .fi { width: 34px; height: 34px; flex: none; background: var(--signal-green); border: 2px solid var(--ink); display: grid; place-items: center; font-family: "Bungee"; font-size: 9px; }
.file-chip b { font-family: "Space Grotesk"; font-size: 13px; display: block; word-break: break-all; }
.file-chip small { font-family: "JetBrains Mono", monospace; font-size: 10px; color: var(--muted); }
.doc-live { background: var(--sign-yellow); border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--ink); padding: 20px; }
.doc-live .dl-t { font-family: "Bungee"; font-size: 18px; line-height: 1.1; margin: 6px 0 10px; }
.kv { display: grid; grid-template-columns: auto 1fr; gap: 6px 14px; font-family: "JetBrains Mono", monospace; font-size: 11px; margin-top: 12px; }
.kv span { color: #5c5330; }
.kv b { font-weight: 700; }
.ack-bar { margin-top: 16px; border-top: 2px solid var(--ink); padding-top: 12px; font-family: "JetBrains Mono", monospace; font-size: 10px; }
.ack-meter { height: 10px; background: rgba(0, 0, 0, .14); border: 2px solid var(--ink); margin-top: 6px; }
.ack-meter > i { display: block; height: 100%; background: var(--ink); }
/* APPS */
.seg-tabs { display: flex; gap: 0; border: 3px solid var(--ink); box-shadow: 4px 4px 0 var(--ink); width: fit-content; max-width: 100%; margin-bottom: 20px; flex-wrap: wrap; }
.seg-tabs button { font-family: "Bungee"; font-size: 11px; padding: 11px 18px; border: 0; border-right: 3px solid var(--ink); background: var(--cream); cursor: pointer; color: var(--ink); }
.seg-tabs button:last-child { border-right: 0; }
.seg-tabs button.active { background: var(--sign-yellow); }
.app-add { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr auto; gap: 12px; align-items: end; margin-bottom: 20px; }
/* LOG */
.log { display: flex; flex-direction: column; gap: 0; }
.log-item { display: grid; grid-template-columns: 34px 1fr auto; gap: 12px; align-items: start; padding: 12px 0; border-bottom: 2px dashed var(--cream-3); }
.log-item:last-child { border-bottom: 0; }
.log-dot { width: 34px; height: 34px; border: 2px solid var(--ink); display: grid; place-items: center; background: var(--cream-2); }
.log-item b { font-size: 13px; display: block; }
.log-item small { font-family: "JetBrains Mono", monospace; font-size: 10px; color: var(--muted); }
.log-item .when { font-family: "JetBrains Mono", monospace; font-size: 10px; color: var(--muted); white-space: nowrap; }
.checklist { display: flex; flex-direction: column; gap: 10px; }
.check { display: grid; grid-template-columns: 28px 1fr auto; gap: 12px; align-items: center; border: 3px solid var(--ink); background: var(--cream-2); padding: 11px 13px; }
.check .cb { width: 28px; height: 28px; border: 2px solid var(--ink); display: grid; place-items: center; font-family: "Bungee"; font-size: 12px; background: #fff; }
.check.done .cb { background: var(--signal-green); }
.check.todo .cb { background: var(--sign-yellow); }
.check b { font-family: "Space Grotesk"; font-size: 13px; }
.check small { display: block; font-family: "JetBrains Mono", monospace; font-size: 10px; color: var(--muted); margin-top: 2px; }
/* SEND CARDS */
.send-head { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; border: 3px solid var(--ink); background: var(--cream-2); box-shadow: 5px 5px 0 var(--ink); padding: 14px 18px; margin-bottom: 24px; }
.wk-chip { display: flex; align-items: center; gap: 10px; font-family: "Bungee"; font-size: 12px; }
.wk-chip .wk-ico { width: 34px; height: 34px; border: 3px solid var(--ink); background: #fff; display: grid; place-items: center; flex: none; }
.wk-chip small { display: block; font-family: "JetBrains Mono", monospace; font-size: 9px; color: var(--muted); font-weight: 500; letter-spacing: .06em; }
.wk-switch { margin-left: auto; display: flex; border: 3px solid var(--ink); box-shadow: 3px 3px 0 var(--ink); }
.wk-switch button { font-family: "Bungee"; font-size: 10px; padding: 9px 14px; border: 0; border-right: 3px solid var(--ink); background: var(--cream); cursor: pointer; color: var(--ink); display: flex; align-items: center; gap: 7px; }
.wk-switch button:last-child { border-right: 0; }
.wk-switch button.active { background: var(--sign-yellow); }
.card-picker { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 18px; margin-bottom: 26px; }
.pick { position: relative; border: 3px solid var(--ink); background: #fff; box-shadow: 5px 5px 0 var(--ink); padding: 16px; cursor: pointer; user-select: none; transition: transform .12s, box-shadow .12s; }
.pick:hover { transform: translate(-2px, -2px); box-shadow: 7px 7px 0 var(--ink); }
.pick.on { background: var(--sign-yellow); box-shadow: 5px 5px 0 var(--signal-green); }
.pick .tick { position: absolute; top: 10px; right: 10px; width: 26px; height: 26px; border: 3px solid var(--ink); background: #fff; display: grid; place-items: center; font-family: "Bungee"; font-size: 12px; color: transparent; }
.pick.on .tick { background: var(--signal-green); color: var(--ink); }
.pick .pk-ico { width: 44px; height: 44px; border: 3px solid var(--ink); background: var(--cream-2); display: grid; place-items: center; font-size: 20px; margin-bottom: 12px; }
.pick.on .pk-ico { background: #fff; }
.pick h4 { font-family: "Bungee"; font-size: 14px; margin: 0 0 6px; line-height: 1.15; padding-right: 30px; }
.pick p { margin: 0; font-size: 12px; color: #4d472f; line-height: 1.5; font-weight: 500; }
.pick .pk-kind { font-family: "JetBrains Mono", monospace; font-size: 9px; letter-spacing: .1em; color: var(--muted); margin-top: 10px; display: block; }
.send-grid { display: grid; grid-template-columns: 1.1fr minmax(0, 1fr); gap: 24px; align-items: start; }
.preview { background: #fff; border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--ink); overflow: hidden; }
.pv-bar { display: flex; align-items: center; gap: 10px; padding: 11px 14px; border-bottom: 3px solid var(--ink); font-family: "JetBrains Mono", monospace; font-size: 11px; font-weight: 700; }
.pv-bar .pv-dot { width: 12px; height: 12px; border-radius: 50%; border: 2px solid var(--ink); }
.pv-body { padding: 16px; }
.pv-msg { display: grid; grid-template-columns: 38px 1fr; gap: 11px; }
.pv-av { width: 38px; height: 38px; border: 2px solid var(--ink); background: var(--sign-yellow); display: grid; place-items: center; font-family: "Bungee"; font-size: 11px; }
.pv-who { font-family: "Bungee"; font-size: 12px; margin-bottom: 2px; }
.pv-who span { font-family: "JetBrains Mono", monospace; font-size: 9px; color: var(--muted); margin-left: 7px; font-weight: 500; }
.pv-text { font-size: 13px; line-height: 1.55; margin: 0 0 10px; }
.pv-att { border-left: 5px solid var(--sign-yellow); background: var(--cream); padding: 10px 12px; margin-bottom: 8px; }
.pv-att b { font-family: "Bungee"; font-size: 11px; display: block; margin-bottom: 3px; }
.pv-att small { font-family: "JetBrains Mono", monospace; font-size: 10px; color: var(--muted); line-height: 1.5; display: block; }
.pv-none { font-family: "JetBrains Mono", monospace; font-size: 11px; color: var(--muted); padding: 8px 0; }
.mode-tabs { display: flex; border: 3px solid var(--ink); box-shadow: 3px 3px 0 var(--ink); margin-bottom: 18px; }
.mode-tabs button { flex: 1; font-family: "Bungee"; font-size: 10px; padding: 10px 8px; border: 0; border-right: 3px solid var(--ink); background: var(--cream); cursor: pointer; color: var(--ink); }
.mode-tabs button:last-child { border-right: 0; }
.mode-tabs button.active { background: var(--sign-yellow); }
.when-fields { display: none; }
.when-fields.on { display: contents; }
.drip-card { background: var(--asphalt); color: var(--cream); border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--sign-yellow); padding: 22px; }
.drip-card h3 { font-family: "Bungee"; font-size: 16px; margin: 0; }
.drip-card .switch-row { background: var(--asphalt-2); border-color: var(--asphalt-3); }
.drip-card .switch-row b { color: var(--cream); }
.drip-card .switch-row small { color: var(--cream-3); }
.drip-card .field label { color: var(--cream-3); }
.drip-card .hint { color: var(--cream-3); }
.drip-card .chip-pick { display: flex; flex-wrap: wrap; gap: 8px; }
.drip-card .chip { font-family: "JetBrains Mono", monospace; font-size: 10px; font-weight: 700; padding: 7px 10px; border: 2px solid var(--cream-3); background: transparent; color: var(--cream-2); cursor: pointer; }
.drip-card .chip.on { background: var(--sign-yellow); color: var(--ink); border-color: var(--sign-yellow); }
.drip-off { opacity: .42; pointer-events: none; }
.two-col { display: grid; grid-template-columns: 1.3fr minmax(0, 1fr); gap: 24px; align-items: start; }
.toast { position: fixed; left: 50%; bottom: 26px; transform: translate(-50%, 140%); background: var(--asphalt); color: var(--cream); border: 3px solid var(--sign-yellow); box-shadow: 5px 5px 0 var(--ink); padding: 12px 20px; font-family: "Bungee"; font-size: 12px; z-index: 400; transition: transform .26s cubic-bezier(.2, .8, .2, 1); }
.toast.show { transform: translate(-50%, 0); }
/* RESPONSIVE */
.nav-toggle { display: none; }
.nav-scrim { display: none; }
@media (max-width: 1180px) {
  .ml-grid, .up-grid, .two-col, .send-grid { grid-template-columns: minmax(0, 1fr); }
  .app-add { grid-template-columns: 1fr 1fr; }
  .app-add .btn { width: 100%; justify-content: center; }
}
@media (max-width: 1024px) {
  main.main { margin-left: 0; }
  aside.sidebar { width: 280px; max-width: 84vw; z-index: 300; transform: translateX(-100%); transition: transform .28s ease; box-shadow: 6px 0 24px rgba(0, 0, 0, .3); }
  .fleet-office.nav-open aside.sidebar { transform: translateX(0); }
  .nav-scrim { display: block; position: fixed; inset: 0; background: rgba(10, 10, 7, .55); z-index: 250; opacity: 0; pointer-events: none; transition: opacity .28s; }
  .fleet-office.nav-open .nav-scrim { opacity: 1; pointer-events: auto; }
  .nav-toggle { display: inline-flex; flex-direction: column; justify-content: center; align-items: center; gap: 5px; width: 44px; height: 44px; flex: 0 0 44px; background: var(--sign-yellow); border: 3px solid var(--ink); cursor: pointer; padding: 0; box-shadow: 3px 3px 0 var(--ink); }
  .nav-toggle span { display: block; width: 20px; height: 3px; background: var(--ink); }
  .stat-strip { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 680px) {
  .page { padding: 20px 16px 48px; }
  .page .head { flex-direction: column; align-items: flex-start; gap: 14px; }
  .page .head h1 { font-size: 30px; }
  .topbar { padding: 12px 16px; gap: 12px; }
  .top-search { display: none; }
  .avatar-meta { display: none; }
  .form-grid, .app-add { grid-template-columns: 1fr; }
  .choice-group { grid-auto-flow: row; }
  .ml-meta { grid-template-columns: 1fr; }
  .wk-switch { margin-left: 0; width: 100%; }
  .wk-switch button { flex: 1; justify-content: center; }
  .card-picker { grid-template-columns: 1fr; }
  .card { padding: 16px; box-shadow: 4px 4px 0 var(--ink); }
}
@media (max-width: 420px) {
  .stat-strip { grid-template-columns: 1fr; }
}
</style>
