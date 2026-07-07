<template>
  <div class="rt-layout">

    <!-- TOP BAR -->
    <header class="rt-topbar">
      <RouterLink class="rt-back" to="/senior-portal">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        Exit Test
      </RouterLink>
      <div class="rt-exam-title">
        ROAD TEST · CLASS O OPERATOR
        <small>CORPORATE AI DRIVING LICENCE · FINAL ASSESSMENT · PASS MARK 70</small>
      </div>
      <div class="rt-top-right">
        <div class="rt-pill"><span class="live"></span>EXAMINER <b>SGT. MERIDIAN</b></div>
        <div class="rt-pill score">SCORE <b>{{ totalScore }} / 100</b></div>
        <div class="rt-pill timer">TIME <b>{{ fmtTime }}</b></div>
      </div>
    </header>

    <!-- STAGE -->
    <div class="rt-stage">

      <!-- MAIN -->
      <main class="rt-main">

        <!-- INTRO -->
        <div v-show="scenario === 0" class="main-inner rt-intro">
          <span class="scn-eyebrow">▼ PRE-TRIP INSPECTION</span>
          <h1>READY TO TAKE<br/>YOUR <span class="red">ROAD TEST?</span></h1>
          <p class="rt-lead">Five real workplace scenarios. Each one tests at least one Highway Code sign, one piece of the Traffic Light, or one PREP discipline. The examiner — Sgt. Meridian — watches every move. Pass mark: <b style="background:var(--rt-yellow);padding:0 4px;">70 / 100</b>.</p>
          <div class="rt-grid">
            <div class="junction"><div class="n">01</div><b>Sign Identification</b><small>Multi-select · 20 pts</small></div>
            <div class="junction"><div class="n">02</div><b>Traffic Light Sort</b><small>Classify 3 inputs · 20 pts</small></div>
            <div class="junction"><div class="n">03</div><b>PREP the Prompt</b><small>Compose 4 fields · 20 pts</small></div>
            <div class="junction"><div class="n">04</div><b>Sanitise Sensitive Data</b><small>Spot &amp; redact · 20 pts</small></div>
            <div class="junction"><div class="n">05</div><b>Escalation Routing</b><small>Match 4 incidents · 20 pts</small></div>
          </div>
          <div class="rules-row">
            <div><b>RULE 1</b>No tabs, no notes. Sgt. Meridian sees your screen.</div>
            <div><b>RULE 2</b>One attempt per scenario. No backsies.</div>
            <div><b>RULE 3</b>Fail &lt; 70 = retake required after 24 h.</div>
            <div><b>RULE 4</b>Pass = Class O · Operator licence is yours.</div>
          </div>
          <div class="scn-actions" style="border-top:none;margin-top:24px;">
            <div class="rt-hint">EST. 15 MIN · YOU CAN PAUSE BETWEEN SCENARIOS</div>
            <button class="rt-btn primary" @click="startTest">START THE TEST · IGNITION →</button>
          </div>
        </div>

        <!-- SCN 1 — Sign Identification -->
        <div v-show="scenario === 1" class="main-inner">
          <div class="scn-head">
            <span class="scn-eyebrow">▼ JUNCTION 01 · SIGN IDENTIFICATION</span>
            <h2 class="scn-title">WHICH SIGNS APPLY?</h2>
            <p class="scn-brief">A colleague is in a hurry. They open the <b>free version of ChatGPT</b> in a personal browser tab and paste in the draft below to "polish it up before sending." Identify <b>every</b> Highway Code sign they would be violating. Select all that apply.</p>
          </div>
          <div class="artifact email">
            Subject: Welcome aboard, Sarah!<br/><br/>
            Hi Sarah Lopez,<br/><br/>
            Confirming your move to Director, Marketing, effective 1 June 2026. Your new total compensation is <b style="color:var(--rt-red)">$145,000</b> base + 15% bonus. Please reply from sarah.lopez@company.com to confirm.<br/><br/>
            — Jamie
          </div>
          <div class="signs-grid">
            <div v-for="sign in signs" :key="sign.key"
              class="sign-pick"
              :class="s1Class(sign)"
              @click="toggleSign(sign.key)">
              <div class="shape" :class="sign.shape"><span>{{ sign.shapeText }}</span></div>
              <div class="sname">{{ sign.name }}<small>{{ sign.sub }}</small></div>
              <div class="check">{{ s1CheckMark(sign) }}</div>
            </div>
          </div>
          <div class="feedback" :class="[{ show: s1Judged }, s1FbType]" v-html="s1Fb"></div>
          <div class="scn-actions">
            <div class="rt-hint">{{ s1Selected.size }} SELECTED</div>
            <div style="display:flex;gap:10px">
              <button v-if="!s1Judged" class="rt-btn secondary" @click="submitS1">Submit Answer</button>
              <button v-else class="rt-btn primary" @click="goTo(2)">Continue → Junction 02</button>
            </div>
          </div>
        </div>

        <!-- SCN 2 — Traffic Light Sort -->
        <div v-show="scenario === 2" class="main-inner">
          <div class="scn-head">
            <span class="scn-eyebrow">▼ JUNCTION 02 · TRAFFIC LIGHT SORT</span>
            <h2 class="scn-title">CLASSIFY THE DATA.</h2>
            <p class="scn-brief">Three things land on your desk. For each: would you classify the data as <b>Green</b> (public-safe), <b>Amber</b> (enterprise-only), or <b>Red</b> (do not input)?</p>
          </div>
          <div class="classify-list">
            <div v-for="row in classifyRows" :key="row.id"
              class="classify-row"
              :class="{ judged: s2Judged, right: s2Judged && s2Answers[row.id] === row.correct, wrong: s2Judged && s2Answers[row.id] !== row.correct }">
              <div class="snippet"><b>SNIPPET {{ row.id }}</b>{{ row.text }}</div>
              <div>
                <div class="classify-opts">
                  <div v-for="c in ['green','amber','red']" :key="c"
                    class="classify-opt"
                    :data-c="c"
                    :class="{ selected: s2Answers[row.id] === c }"
                    @click="!s2Judged && (s2Answers[row.id] = c)">{{ c.toUpperCase() }}</div>
                </div>
                <div v-if="s2Judged" class="judge-pill" :class="s2Answers[row.id] === row.correct ? 'right' : 'wrong'">
                  {{ s2Answers[row.id] === row.correct ? '✓ Correct · ' + row.correct.toUpperCase() : '✗ Should be ' + row.correct.toUpperCase() }}
                </div>
              </div>
            </div>
          </div>
          <div class="feedback" :class="[{ show: s2Judged }, s2FbType]" v-html="s2Fb"></div>
          <div class="scn-actions">
            <div class="rt-hint">{{ s2AnsweredCount }} / 3 ANSWERED</div>
            <div style="display:flex;gap:10px">
              <button v-if="!s2Judged" class="rt-btn secondary" @click="submitS2">Submit Answer</button>
              <button v-else class="rt-btn primary" @click="goTo(3)">Continue → Junction 03</button>
            </div>
          </div>
        </div>

        <!-- SCN 3 — PREP -->
        <div v-show="scenario === 3" class="main-inner">
          <div class="scn-head">
            <span class="scn-eyebrow">▼ JUNCTION 03 · PREP THE PROMPT</span>
            <h2 class="scn-title">REWRITE THE BAD PROMPT.</h2>
            <p class="scn-brief">Your colleague sent this prompt: <i>"write something about our new product launch"</i>. Apply the <b>PREP framework</b> — fill in all four boxes. Each correctly applied step is worth 5 points.</p>
          </div>
          <div class="prep-instructions">
            <b>SCORING:</b> Persona must begin with "Act as". Requirement must specify a concrete task. Expectation must specify a format or length. Parameters must include at least one constraint (e.g. "do not", "avoid", "no…", "under X words").
          </div>
          <div class="prep-block">
            <div class="prep-step s1">
              <div class="prep-letter">P</div>
              <div class="body">
                <div class="lbl">STEP 1</div>
                <div class="ttl">PERSONA</div>
                <input v-model="p1" placeholder="e.g. Act as a Senior Marketing Manager." :disabled="s3Judged" />
              </div>
              <div class="prep-grade" :class="s3Judged ? (pGrades[0] ? 'pass' : 'fail') : ''">{{ s3Judged ? (pGrades[0] ? '✓ Pass · +5' : '✗ Fail · 0') : '— pending' }}</div>
            </div>
            <div class="prep-step s2">
              <div class="prep-letter">R</div>
              <div class="body">
                <div class="lbl">STEP 2</div>
                <div class="ttl">REQUIREMENT</div>
                <input v-model="p2" placeholder="What exactly do you need? Be specific." :disabled="s3Judged" />
              </div>
              <div class="prep-grade" :class="s3Judged ? (pGrades[1] ? 'pass' : 'fail') : ''">{{ s3Judged ? (pGrades[1] ? '✓ Pass · +5' : '✗ Fail · 0') : '— pending' }}</div>
            </div>
            <div class="prep-step s3">
              <div class="prep-letter">E</div>
              <div class="body">
                <div class="lbl">STEP 3</div>
                <div class="ttl">EXPECTATION</div>
                <input v-model="p3" placeholder="Format, length, tone, structure…" :disabled="s3Judged" />
              </div>
              <div class="prep-grade" :class="s3Judged ? (pGrades[2] ? 'pass' : 'fail') : ''">{{ s3Judged ? (pGrades[2] ? '✓ Pass · +5' : '✗ Fail · 0') : '— pending' }}</div>
            </div>
            <div class="prep-step s4">
              <div class="prep-letter">P</div>
              <div class="body">
                <div class="lbl">STEP 4 · SAFETY LAYER</div>
                <div class="ttl">PARAMETERS</div>
                <input v-model="p4" placeholder="What NOT to include. Constraints, guardrails." :disabled="s3Judged" />
              </div>
              <div class="prep-grade" :class="s3Judged ? (pGrades[3] ? 'pass' : 'fail') : ''">{{ s3Judged ? (pGrades[3] ? '✓ Pass · +5' : '✗ Fail · 0') : '— pending' }}</div>
            </div>
          </div>
          <div class="feedback" :class="[{ show: s3Judged }, s3FbType]" v-html="s3Fb"></div>
          <div class="scn-actions">
            <div class="rt-hint">FILL ALL 4 FIELDS</div>
            <div style="display:flex;gap:10px">
              <button v-if="!s3Judged" class="rt-btn secondary" @click="submitS3">Submit Answer</button>
              <button v-else class="rt-btn primary" @click="goTo(4)">Continue → Junction 04</button>
            </div>
          </div>
        </div>

        <!-- SCN 4 — Sanitise -->
        <div v-show="scenario === 4" class="main-inner">
          <div class="scn-head">
            <span class="scn-eyebrow">▼ JUNCTION 04 · SANITISE THE INPUT</span>
            <h2 class="scn-title">REDACT EVERYTHING SENSITIVE.</h2>
            <p class="scn-brief">Below is a prompt you're about to send to an <i>approved enterprise</i> AI tool. Click every token that must be redacted before sending. Find them all — the examiner will penalise misses and false positives.</p>
          </div>
          <div class="redact-instructions"><b>FOUR TARGETS HIDDEN.</b> Click each sensitive token to redact it. Click again to unredact. When you're done, submit.</div>
          <div class="redact-prompt">
            Act as a Senior HR Manager. Draft a polite email to
            <span v-for="tok in promptTokens" :key="tok.id"
              class="tok"
              :class="tokClass(tok)"
              :data-redact-label="tok.label"
              @click="toggleRedact(tok)">{{ tok.text }}</span>
            confirming her promotion to Director, Marketing, effective
            <span class="tok" :class="s4Judged && !redactedIds.has(2) ? '' : (s4Judged && redactedIds.has(2) ? 'flagged-wrong' : '')"
              @click="!s4Judged && toggleRedactById(2)">1&nbsp;June&nbsp;2026</span>,
            with a new annual salary of
            <span class="tok" :class="tokClassById(3)" :data-redact-label="'[BAND]'" @click="!s4Judged && toggleRedactById(3)">$145,000</span>.
            Reference her offer letter dated
            <span class="tok" :class="tokClassById(4)" :data-redact-label="'[DATE]'" @click="!s4Judged && toggleRedactById(4)">04/29/2026</span>.
            Keep the tone warm and professional, around 150 words.
          </div>
          <div class="redact-status">
            <div class="stat"><b>{{ redactCount }}</b>redacted</div>
            <div class="stat"><b>4</b>targets</div>
            <div class="stat"><b>{{ falsePosCount }}</b>false positives</div>
          </div>
          <div class="feedback" :class="[{ show: s4Judged }, s4FbType]" v-html="s4Fb"></div>
          <div class="scn-actions">
            <div class="rt-hint">REDACT, THEN SUBMIT</div>
            <div style="display:flex;gap:10px">
              <button v-if="!s4Judged" class="rt-btn secondary" @click="submitS4">Submit Answer</button>
              <button v-else class="rt-btn primary" @click="goTo(5)">Continue → Junction 05</button>
            </div>
          </div>
        </div>

        <!-- SCN 5 — Escalation Routing -->
        <div v-show="scenario === 5" class="main-inner">
          <div class="scn-head">
            <span class="scn-eyebrow">▼ JUNCTION 05 · ESCALATION ROUTING</span>
            <h2 class="scn-title">WHO DO YOU CALL?</h2>
            <p class="scn-brief">Four incidents. Four teams. Route each one to the <b>correct first contact</b>. The clock is ticking; in a real incident, response time matters more than perfection.</p>
          </div>
          <div class="route-list">
            <div v-for="inc in incidents" :key="inc.id"
              class="route-row"
              :class="{ right: s5Judged && s5Routes[inc.id] === inc.correct, wrong: s5Judged && s5Routes[inc.id] !== inc.correct && s5Routes[inc.id] !== '' }">
              <div class="route-num">{{ inc.id }}</div>
              <div class="route-text"><b>{{ inc.title }}</b>{{ inc.desc }}</div>
              <select class="route-select" v-model="s5Routes[inc.id]" :disabled="s5Judged">
                <option value="">— Choose team —</option>
                <option value="IT">IT Security</option>
                <option value="GOV">AI Governance</option>
                <option value="LEG">Legal Department</option>
                <option value="HR">Line Manager / HR</option>
              </select>
            </div>
          </div>
          <div class="feedback" :class="[{ show: s5Judged }, s5FbType]" v-html="s5Fb"></div>
          <div class="scn-actions">
            <div class="rt-hint">{{ s5RoutedCount }} / 4 ROUTED</div>
            <div style="display:flex;gap:10px">
              <button v-if="!s5Judged" class="rt-btn secondary" @click="submitS5">Submit Answer</button>
              <button v-else class="rt-btn primary" @click="showResults">See Results →</button>
            </div>
          </div>
        </div>

        <!-- RESULTS -->
        <div v-show="scenario === 6">
          <div class="results-wrap">
            <div class="stamp-block">
              <span class="scn-eyebrow">▼ EXAMINER'S REPORT</span>
              <h1 :class="totalScore >= 70 ? 'pass' : 'fail'">{{ totalScore >= 70 ? 'YOU PASSED.' : 'NOT QUITE.' }}</h1>
              <p class="scn-brief">{{ totalScore >= 70
                ? `Total ${totalScore} / 100. All five junctions inspected. Sgt. Meridian signs off — your Class O · Operator licence is fully activated.`
                : `Total ${totalScore} / 100. You're ${70 - totalScore} points short of passing. Re-take in 24 hours — review the flagged scenarios in your portal.`
              }}</p>
              <div class="stamp-circle" :class="{ fail: totalScore < 70 }">
                {{ totalScore >= 70 ? 'PASS' : 'RETAKE' }}<small>{{ totalScore >= 70 ? 'CLASS O · OPERATOR' : `${totalScore} OF 70 NEEDED` }}</small>
              </div>
              <div class="ledger">
                <div v-for="(s, i) in scores" :key="i" class="ledger-row" :class="(s||0) >= 18 ? 'full' : (s||0) >= 12 ? 'partial' : 'zero'">
                  <div class="ic">{{ String(i+1).padStart(2,'0') }}</div>
                  <div class="what"><b>{{ ledgerLabels[i]?.title }}</b><small>{{ ledgerLabels[i]?.sub }}</small></div>
                  <div class="pts">{{ s ?? 0 }} / 20</div>
                </div>
              </div>
            </div>
            <div>
              <div class="license-cert">
                <div class="lc-head">
                  <span><b>OPERATOR'S LICENCE</b> · CLASS O</span>
                  <span>ISSUED {{ todayDate }}</span>
                </div>
                <div class="lc-grid">
                  <div class="lc-portrait">
                    <div class="rt-agent">
                      <div class="rt-antenna"></div><div class="rt-head"></div><div class="rt-body"></div><div class="rt-abadge"></div>
                    </div>
                  </div>
                  <div class="lc-info">
                    <div class="lc-name">ALEX MORGAN</div>
                    DOB 04/12/1994<br/>
                    ROLE · MARKETING MANAGER<br/>
                    EXPIRES {{ nextYearDate }}<br/>
                    ROAD TEST · {{ totalScore }} / 100
                    <div class="lc-num">AIDL-O-1182-4421</div>
                  </div>
                </div>
                <div class="lc-stamps">
                  <span class="lc-stamp">Highway Code ✓</span>
                  <span class="lc-stamp">Traffic Light ✓</span>
                  <span class="lc-stamp">PREP ✓</span>
                  <span class="lc-stamp">Sanitise ✓</span>
                  <span class="lc-stamp">Escalate ✓</span>
                </div>
                <div class="examiner-sig">
                  <div><div class="sig">Sgt. Meridian</div><div class="sig-lbl">EXAMINER</div></div>
                  <div><div class="sig">Alex Morgan</div><div class="sig-lbl">LICENSEE</div></div>
                </div>
              </div>
              <div style="margin-top:16px;display:flex;gap:12px;">
                <RouterLink class="rt-btn green" to="/senior-portal">Back to Portal</RouterLink>
                <button class="rt-btn secondary" @click="retake">Take Test Again</button>
              </div>
            </div>
          </div>
        </div>

      </main>

      <!-- EXAMINER RAIL -->
      <aside class="examiner">
        <div class="examiner-head">
          <div class="ex-portrait">
            <div class="rt-agent">
              <div class="rt-antenna"></div><div class="rt-head"></div><div class="rt-body"></div><div class="rt-abadge"></div>
            </div>
          </div>
          <div class="ex-meta">
            <b>SGT. MERIDIAN</b>
            <small>EXAMINER · ROAD TESTS</small>
            <span class="ex-badge">SCORING LIVE</span>
          </div>
        </div>
        <div class="clipboard" ref="clipboardEl">
          <div class="clip-head"><span>EXAMINER'S CLIPBOARD</span><b>5 JUNCTIONS</b></div>
          <div class="scorecard">
            <div v-for="(row, i) in scorecardRows" :key="i" class="sc-row">
              <b>{{ row.label }}</b>
              <span class="v" :class="scoreClass(scores[i] ?? null)">{{ scores[i] !== null ? scores[i] + ' /20' : '— /20' }}</span>
              <span class="pct">{{ scorePct(scores[i] ?? null) }}</span>
            </div>
            <div class="scorecard-total">
              <b>TOTAL</b>
              <span class="big" :class="scenario === 6 ? (totalScore >= 70 ? 'pass' : 'fail') : ''">{{ totalScore }} / 100</span>
            </div>
          </div>
          <div class="notes">
            <div v-for="note in examNotes" :key="note.id" class="note" :class="note.kind">
              <div class="ts">{{ note.ts }}</div>
              {{ note.text }}
            </div>
          </div>
        </div>
      </aside>
    </div>

    <!-- ROAD BAR -->
    <footer class="roadbar">
      <div class="stops">
        <div v-for="i in 5" :key="i">
          <div class="stop" :class="stopClass(i)">{{ String(i).padStart(2,'0') }}</div>
          <div class="stop-lbl">{{ stopLabels[i-1] }}</div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, onUnmounted, nextTick } from 'vue'
import { RouterLink } from 'vue-router'

// ── Date helpers ──────────────────────────────────────────────────────────────
const now = new Date()
const pad = (n: number) => String(n).padStart(2,'0')
const todayDate = `${pad(now.getDate())}/${pad(now.getMonth()+1)}/${now.getFullYear()}`
const nextYearDate = `${pad(now.getDate())}/${pad(now.getMonth()+1)}/${now.getFullYear()+1}`

// ── State ─────────────────────────────────────────────────────────────────────
const scenario = ref(0)
const scores = reactive<(number|null)[]>([null, null, null, null, null])
const timerSecs = ref(15 * 60)
let timerHandle = 0
const clipboardEl = ref<HTMLElement>()

const fmtTime = computed(() => {
  const m = Math.floor(timerSecs.value / 60)
  const s = timerSecs.value % 60
  return `${pad(m)}:${pad(s)}`
})
const totalScore = computed(() => scores.reduce<number>((a, b) => a + (b ?? 0), 0))

// ── Notes ─────────────────────────────────────────────────────────────────────
let noteId = 0
interface Note { id: number; kind: string; ts: string; text: string }
const examNotes = reactive<Note[]>([
  { id: 0, kind: 'tip', ts: 'PRE-TRIP · NOW', text: 'Welcome aboard. Take your time. I score on what you do — not how fast you do it. We start when you hit ignition.' }
])
function addNote(text: string, kind = '', ts = 'JUST NOW') {
  examNotes.push({ id: ++noteId, kind, ts, text })
  nextTick(() => {
    if (clipboardEl.value) clipboardEl.value.scrollTop = clipboardEl.value.scrollHeight
  })
}

// ── Timer ─────────────────────────────────────────────────────────────────────
function startTimer() {
  timerHandle = window.setInterval(() => {
    if (timerSecs.value <= 0) { clearInterval(timerHandle); addNote("Time's up. Submit whatever you've got.", 'warn'); return }
    timerSecs.value--
  }, 1000)
}
onUnmounted(() => clearInterval(timerHandle))

// ── Navigation ────────────────────────────────────────────────────────────────
function startTest() {
  scenario.value = 1
  startTimer()
  addNote('Ignition. Junction 01 — Sign Identification. Read the email carefully. Multiple signs may apply.', 'tip', 'JUNCTION 01')
}
function goTo(n: number) {
  scenario.value = n
  const tips: Record<number,string> = {
    2: 'Junction 02 — Traffic Light Sort. Three snippets. Read each one. Pick green, amber, or red.',
    3: 'Junction 03 — PREP. Rewrite the lazy prompt. All four fields must be substantive.',
    4: 'Junction 04 — Sanitise. Four sensitive tokens hidden in the prompt. Click each one to redact.',
    5: 'Final junction — Escalation Routing. Four incidents. Match each to the first responder. Be exact.',
  }
  const tipLabels: Record<number,string> = { 2:'JCT 02', 3:'JCT 03', 4:'JCT 04', 5:'JCT 05' }
  if (tips[n]) addNote(tips[n], 'tip', tipLabels[n])
}
function showResults() {
  clearInterval(timerHandle)
  scenario.value = 6
  const t = totalScore.value
  addNote(t >= 70 ? `${t}/100. Cleared. Signing off your licence.` : `${t}/100. Short of pass mark. Review and retake.`, t >= 70 ? 'ok' : 'warn', 'EXAM END')
}
function retake() { window.location.reload() }

// ── Scorecard helpers ─────────────────────────────────────────────────────────
const scorecardRows = [
  { label: '01 · Sign ID' }, { label: '02 · Traffic Light' }, { label: '03 · PREP' },
  { label: '04 · Sanitise' }, { label: '05 · Escalate' }
]
function scoreClass(s: number|null) {
  if (s === null) return 'zero'
  if (s >= 18) return 'full'
  if (s >= 12) return 'partial'
  return ''
}
function scorePct(s: number|null) {
  if (s === null) return 'PENDING'
  if (s >= 18) return 'CLEAN'
  if (s >= 12) return Math.round(s/20*100) + '%'
  return 'NEEDS WORK'
}
const stopLabels = ['Sign ID','Traffic Light','PREP','Sanitise','Escalate']
function stopClass(i: number) {
  if (scenario.value === i) return 'current'
  const s = scores[i-1]
  if (s != null) return s >= 12 ? 'done' : 'failed'
  return ''
}
const ledgerLabels = [
  { title: 'Sign Identification', sub: 'Highway Code · Regulatory' },
  { title: 'Traffic Light Sort', sub: 'Data Classification' },
  { title: 'PREP the Prompt', sub: 'Prompt Engineering' },
  { title: 'Sanitise Input', sub: 'PII / PHI Handling' },
  { title: 'Escalation Routing', sub: 'Reporting Obligations' },
]

// ── SCENARIO 1 ────────────────────────────────────────────────────────────────
interface Sign { key: string; shape: string; shapeText: string; name: string; sub: string; correct: boolean }
const signs: Sign[] = [
  { key:'STOP', shape:'octagon', shapeText:'STOP', name:'RED LIGHT DATA', sub:'Regulatory', correct:true },
  { key:'NOENTRY', shape:'no-entry', shapeText:'', name:'SHADOW AI', sub:'Regulatory', correct:true },
  { key:'ONEWAY', shape:'rect', shapeText:'ONE WAY →', name:'DATA FLOW', sub:'Regulatory', correct:false },
  { key:'SPEED', shape:'circle', shapeText:'60', name:'VERIFICATION VELOCITY', sub:'Regulatory', correct:false },
  { key:'YIELD', shape:'triangle', shapeText:'YIELD', name:'HUMAN-IN-THE-LOOP', sub:'Regulatory', correct:false },
  { key:'SLIP', shape:'diamond', shapeText:'SLIPPERY', name:'HALLUCINATION HAZARD', sub:'Warning', correct:false },
]
const s1Selected = reactive(new Set<string>())
const s1Judged = ref(false)
const s1Fb = ref('')
const s1FbType = ref('')

function toggleSign(key: string) {
  if (s1Judged.value) return
  if (s1Selected.has(key)) s1Selected.delete(key)
  else s1Selected.add(key)
}
function s1Class(sign: Sign) {
  if (!s1Judged.value) return { selected: s1Selected.has(sign.key) }
  if (sign.correct && s1Selected.has(sign.key)) return { correct: true }
  if (sign.correct && !s1Selected.has(sign.key)) return { missed: true }
  if (!sign.correct && s1Selected.has(sign.key)) return { wrong: true }
  return {}
}
function s1CheckMark(sign: Sign) {
  if (!s1Judged.value) return ''
  if (sign.correct && s1Selected.has(sign.key)) return '✓ CORRECT'
  if (sign.correct && !s1Selected.has(sign.key)) return '✗ MISSED'
  if (!sign.correct && s1Selected.has(sign.key)) return '✗ WRONG'
  return ''
}
function submitS1() {
  let correct = 0, missed = 0, wrong = 0
  signs.forEach(s => {
    if (s.correct && s1Selected.has(s.key)) correct++
    else if (s.correct) missed++
    else if (s1Selected.has(s.key)) wrong++
  })
  const points = Math.max(0, correct * 10 - wrong * 5)
  scores[0] = points
  s1Judged.value = true
  if (correct === 2 && wrong === 0) {
    s1FbType.value = 'right'; s1Fb.value = `<b>CLEAN PICK — 20 / 20<span class="pts">+20</span></b>Both regulatory signs apply: <b>STOP (Red Light Data)</b> — names, emails, and salaries are PII; and <b>DO NOT ENTER (Shadow AI)</b> — free ChatGPT is not on the IT allow-list.`
    addNote('Sharp eye. Two signs, both spotted. Driver knows the policy.', 'ok', 'JCT 01')
  } else if (correct === 2 && wrong > 0) {
    s1FbType.value = 'partial'; s1Fb.value = `<b>CLOSE — ${points} / 20<span class="pts">+${points}</span></b>You caught both correct signs but also flagged ${wrong} that don't apply. Over-reporting wastes incident-response time.`
    addNote('Caught the right signs, but flagged extras. Be precise.', 'warn', 'JCT 01')
  } else {
    s1FbType.value = 'wrong'; s1Fb.value = `<b>NEEDS WORK — ${points} / 20<span class="pts">+${points}</span></b>You missed ${missed} required sign(s). The data class triggers <b>STOP</b>; the tool class triggers <b>DO NOT ENTER</b>. Both apply.`
    addNote('Missed a sign. Review the Highway Code — Section A.', 'warn', 'JCT 01')
  }
}

// ── SCENARIO 2 ────────────────────────────────────────────────────────────────
interface ClassifyRow { id: string; text: string; correct: string }
const classifyRows: ClassifyRow[] = [
  { id:'A', correct:'green', text:'"Today we announced our 2026 Industry Outlook white paper. It\'s free to download from our public website and covers five emerging trends in the European logistics sector."' },
  { id:'B', correct:'amber', text:'"Internal Q2 strategy note — the team agreed to defer the platform refresh to Q3 and re-prioritise the analytics dashboard next quarter. No salary figures, no names."' },
  { id:'C', correct:'red',   text:'"Sarah\'s medical leave request — she\'s requesting 6 weeks for treatment of a condition under ICD-10 code K50.0. Her insurance pre-auth ref is 88-114-22."' },
]
const s2Answers = reactive<Record<string,string>>({ A:'', B:'', C:'' })
const s2Judged = ref(false)
const s2Fb = ref('')
const s2FbType = ref('')
const s2AnsweredCount = computed(() => Object.values(s2Answers).filter(v => v !== '').length)

function submitS2() {
  let correct = 0
  classifyRows.forEach(r => { if (s2Answers[r.id] === r.correct) correct++ })
  const rounded = Math.round(correct * 20/3)
  scores[1] = rounded
  s2Judged.value = true
  if (correct === 3) {
    s2FbType.value = 'right'; s2Fb.value = `<b>FULL MARKS — ${rounded} / 20<span class="pts">+${rounded}</span></b>Public white paper = Green. Internal note with no PII = Amber. Medical/insurance = Red. Solid classification habits.`
    addNote('Three-for-three. Driver has the traffic light wired into reflex.', 'ok', 'JCT 02')
  } else if (correct >= 2) {
    s2FbType.value = 'partial'; s2Fb.value = `<b>MOSTLY THERE — ${rounded} / 20<span class="pts">+${rounded}</span></b>${correct} of 3 correct. Review the misclassified snippets — the colour-coded rules from Part 2.`
    addNote(`Got ${correct} of 3. The miss is concerning — review Part 2.`, 'warn', 'JCT 02')
  } else {
    s2FbType.value = 'wrong'; s2Fb.value = `<b>NEEDS WORK — ${rounded} / 20<span class="pts">+${rounded}</span></b>Only ${correct} of 3. The Traffic Light is the single most important habit. Re-take Lesson 03 before re-attempting.`
    addNote('Traffic Light still fuzzy. Mandatory: re-take Lesson 03.', 'warn', 'JCT 02')
  }
}

// ── SCENARIO 3 ────────────────────────────────────────────────────────────────
const p1 = ref(''), p2 = ref(''), p3 = ref(''), p4 = ref('')
const pGrades = reactive([false, false, false, false])
const s3Judged = ref(false)
const s3Fb = ref('')
const s3FbType = ref('')

function submitS3() {
  pGrades[0] = /act\s+as/i.test(p1.value) && p1.value.trim().length > 12
  pGrades[1] = p2.value.trim().length > 12 && !/something|stuff|things/i.test(p2.value)
  pGrades[2] = p3.value.trim().length > 12 && /(word|table|bullet|list|tone|format|length|paragraph|under|less than|max|email|post|character)/i.test(p3.value)
  pGrades[3] = p4.value.trim().length > 12 && /(do not|don'?t|avoid|no |without|exclude|under |less than|max)/i.test(p4.value)
  const passes = pGrades.filter(Boolean).length
  const points = passes * 5
  scores[2] = points
  s3Judged.value = true
  const labels = ['Persona','Requirement','Expectation','Parameters']
  const failed = labels.filter((_, i) => !pGrades[i])
  if (failed.length === 0) {
    s3FbType.value = 'right'; s3Fb.value = `<b>PROMPT INSPECTION PASSED — ${points} / 20<span class="pts">+${points}</span></b>All four PREP layers in place.`
    addNote('Clean PREP. Specific persona, concrete task, format defined, guardrails set.', 'ok', 'JCT 03')
  } else {
    s3FbType.value = passes >= 2 ? 'partial' : 'wrong'
    s3Fb.value = `<b>${points} / 20<span class="pts">+${points}</span></b>Missing or weak: <b>${failed.join(', ')}</b>. Each layer matters.`
    addNote(`PREP weak on: ${failed.join(', ')}. Each one matters.`, 'warn', 'JCT 03')
  }
}

// ── SCENARIO 4 ────────────────────────────────────────────────────────────────
interface Token { id: number; text: string; sensitive: boolean; label: string }
const promptTokens: Token[] = [
  { id: 0, text: 'Sarah Lopez', sensitive: true, label: '[PERSON A]' },
  { id: 1, text: 'sarah.lopez@company.com', sensitive: true, label: '[EMAIL]' },
]
const allTokenIds = [0, 1, 3, 4]
const sensitiveIds = new Set([0, 1, 3, 4])
const redactedIds = reactive(new Set<number>())
const s4Judged = ref(false)
const s4Fb = ref('')
const s4FbType = ref('')

function toggleRedact(tok: Token) {
  if (s4Judged.value) return
  if (redactedIds.has(tok.id)) redactedIds.delete(tok.id)
  else redactedIds.add(tok.id)
}
function toggleRedactById(id: number) {
  if (s4Judged.value) return
  if (redactedIds.has(id)) redactedIds.delete(id)
  else redactedIds.add(id)
}
function tokClass(tok: Token) {
  const redacted = redactedIds.has(tok.id)
  if (!s4Judged.value) return { sensitive: tok.sensitive && !redacted, redacted }
  if (tok.sensitive && redacted) return { redacted: true }
  if (tok.sensitive && !redacted) return { 'flagged-missed': true }
  if (!tok.sensitive && redacted) return { 'flagged-wrong': true }
  return {}
}
function tokClassById(id: number) {
  const redacted = redactedIds.has(id)
  const isSensitive = sensitiveIds.has(id)
  if (!s4Judged.value) return { sensitive: isSensitive && !redacted, redacted }
  if (isSensitive && redacted) return { redacted: true }
  if (isSensitive && !redacted) return { 'flagged-missed': true }
  if (!isSensitive && redacted) return { 'flagged-wrong': true }
  return {}
}

const redactCount = computed(() => redactedIds.size)
const falsePosCount = computed(() => [...redactedIds].filter(id => !sensitiveIds.has(id)).length)

function submitS4() {
  let caught = 0, missed = 0, falsep = 0
  allTokenIds.forEach(id => {
    if (sensitiveIds.has(id) && redactedIds.has(id)) caught++
    else if (sensitiveIds.has(id)) missed++
  })
  redactedIds.forEach(id => { if (!sensitiveIds.has(id)) falsep++ })
  const points = Math.max(0, caught * 5 - falsep * 3)
  scores[3] = points
  s4Judged.value = true
  if (caught === 4 && falsep === 0) {
    s4FbType.value = 'right'; s4Fb.value = `<b>CLEAN REDACTION — ${points} / 20<span class="pts">+${points}</span></b>Name, email, salary, dated document — all caught. Once anonymised, the prompt is Amber and safe.`
    addNote('Surgical. Driver knows what counts as PII and what does not.', 'ok', 'JCT 04')
  } else if (caught >= 2) {
    s4FbType.value = 'partial'; s4Fb.value = `<b>PARTIAL — ${points} / 20<span class="pts">+${points}</span></b>Caught ${caught} of 4 targets. ${missed > 0 ? `Missed ${missed} — those would still leak.` : ''} ${falsep > 0 ? `Flagged ${falsep} non-sensitive token(s).` : ''}`
    addNote(`Caught ${caught} of 4. Missing tokens still leak through.`, 'warn', 'JCT 04')
  } else {
    s4FbType.value = 'wrong'; s4Fb.value = `<b>FAILED REDACTION — ${points} / 20<span class="pts">+${points}</span></b>Caught only ${caught} of 4. Re-read the Glossary entries for PII and PHI.`
    addNote('Sanitisation failed. Re-read PII / PHI definitions.', 'warn', 'JCT 04')
  }
}

// ── SCENARIO 5 ────────────────────────────────────────────────────────────────
interface Incident { id: string; title: string; desc: string; correct: string }
const incidents: Incident[] = [
  { id:'A', correct:'IT',  title:'WRONG-TOOL DATA ENTRY', desc:'You accidentally pasted client emails into an unapproved free AI tool. Now what?' },
  { id:'B', correct:'GOV', title:'BIASED OUTPUT', desc:'An AI hiring tool produced rankings that consistently disfavour candidates from one university.' },
  { id:'C', correct:'LEG', title:'IP CONCERN', desc:'AI output you generated includes verbatim paragraphs from a copyrighted competitor article.' },
  { id:'D', correct:'HR',  title:'POLICY QUESTION', desc:"You're unsure whether your team can use AI for performance-review summaries." },
]
const s5Routes = reactive<Record<string,string>>({ A:'', B:'', C:'', D:'' })
const s5Judged = ref(false)
const s5Fb = ref('')
const s5FbType = ref('')
const s5RoutedCount = computed(() => Object.values(s5Routes).filter(v => v !== '').length)

function submitS5() {
  let correct = 0
  incidents.forEach(inc => { if (s5Routes[inc.id] === inc.correct) correct++ })
  const points = correct * 5
  scores[4] = points
  s5Judged.value = true
  if (correct === 4) {
    s5FbType.value = 'right'; s5Fb.value = `<b>EVERY INCIDENT ROUTED CORRECTLY — ${points} / 20<span class="pts">+${points}</span></b>IT for data exposure, Governance for bias, Legal for IP, HR for policy.`
    addNote('All four routed correctly. Driver knows the org chart.', 'ok', 'JCT 05')
  } else if (correct >= 2) {
    s5FbType.value = 'partial'; s5Fb.value = `<b>${points} / 20<span class="pts">+${points}</span></b>${correct} of 4 routed correctly. Wrong routing wastes incident-response minutes.`
    addNote(`${correct} of 4. Wrong routing costs response time.`, 'warn', 'JCT 05')
  } else {
    s5FbType.value = 'wrong'; s5Fb.value = `<b>${points} / 20<span class="pts">+${points}</span></b>Only ${correct} of 4. Re-read Part 4 §7 — Reporting Obligations.`
    addNote('Escalation paths fuzzy. Re-read Reporting Obligations.', 'warn', 'JCT 05')
  }
}
</script>

<style>
/* ── Root vars ───────────────────────────────────────────────────────────── */
.rt-layout {
  --rt-cream: #f5ecd2; --rt-cream-2: #f0e3bd; --rt-cream-3: #e6d8a8;
  --rt-asphalt: #14140f; --rt-asphalt-2: #1f1e16; --rt-asphalt-3: #2a2820; --rt-asphalt-4: #3a3528;
  --rt-yellow: #ffcc00; --rt-amber: #ff9d00;
  --rt-red: #e23a2e; --rt-green: #2ec866;
  --rt-sky: #6fb3e0; --rt-ink: #14140f; --rt-muted: #6a624a;
  --rt-line-white: #f6f1de;
  display: grid; grid-template-rows: 76px 1fr 100px; min-height: 100vh;
  background: var(--rt-asphalt); color: var(--rt-cream);
  font-family: "Space Grotesk", system-ui, sans-serif;
  box-sizing: border-box;
}
.rt-layout *, .rt-layout *::before, .rt-layout *::after { box-sizing: border-box; }

/* ── Topbar ──────────────────────────────────────────────────────────────── */
.rt-layout .rt-topbar { background: var(--rt-asphalt-2); border-bottom: 3px solid var(--rt-ink); display: flex; align-items: center; padding: 0 28px; gap: 24px; }
.rt-layout .rt-back { display: flex; align-items: center; gap: 10px; height: 44px; padding: 0 16px; background: transparent; border: 2px solid var(--rt-cream-3); color: var(--rt-cream); font-family: "Bungee"; font-size: 11px; text-decoration: none; cursor: pointer; }
.rt-layout .rt-back:hover { background: var(--rt-asphalt-3); }
.rt-layout .rt-exam-title { font-family: "Bungee"; font-size: 20px; line-height: 1; }
.rt-layout .rt-exam-title small { display: block; font-family: "JetBrains Mono"; font-size: 10px; color: var(--rt-cream-3); font-weight: 400; margin-top: 4px; letter-spacing: 0.06em; }
.rt-layout .rt-top-right { margin-left: auto; display: flex; align-items: center; gap: 12px; }
.rt-layout .rt-pill { height: 44px; display: inline-flex; align-items: center; gap: 10px; padding: 0 16px; border: 2px solid var(--rt-asphalt-4); background: var(--rt-asphalt); color: var(--rt-cream-2); font-family: "JetBrains Mono"; font-size: 11px; }
.rt-layout .rt-pill b { font-family: "Bungee"; font-size: 13px; color: var(--rt-yellow); }
.rt-layout .rt-pill.score b { color: var(--rt-green); }
.rt-layout .rt-pill.timer b { color: var(--rt-red); }
.rt-layout .rt-pill .live { width: 8px; height: 8px; border-radius: 50%; background: var(--rt-red); animation: rt-pulse 1.5s infinite; }
@keyframes rt-pulse { 50% { opacity: 0.3; } }

/* ── Stage ───────────────────────────────────────────────────────────────── */
.rt-layout .rt-stage { display: grid; grid-template-columns: 1fr 360px; overflow: hidden; min-height: 0; }

/* ── Main ────────────────────────────────────────────────────────────────── */
.rt-layout .rt-main { background: var(--rt-cream); color: var(--rt-ink); overflow-y: auto; position: relative; }
.rt-layout .rt-main::before { content:""; position:absolute; inset:0; background: repeating-linear-gradient(0deg,rgba(20,20,15,.04) 0 1px,transparent 1px 40px), repeating-linear-gradient(90deg,rgba(20,20,15,.04) 0 1px,transparent 1px 40px); pointer-events:none; }
.rt-layout .main-inner { padding: 36px 48px; position: relative; z-index: 2; }
.rt-layout .scn-eyebrow { display: inline-block; background: var(--rt-ink); color: var(--rt-yellow); font-family: "Bungee"; font-size: 11px; padding: 4px 10px; margin-bottom: 12px; }
.rt-layout .scn-title { font-family: "Bungee"; font-size: 36px; line-height: 0.95; margin: 0 0 10px; }
.rt-layout .scn-brief { font-size: 15px; line-height: 1.55; max-width: 760px; }
.rt-layout .scn-brief b, .rt-layout .scn-brief i { }
.rt-layout .scn-brief b { background: var(--rt-yellow); padding: 0 4px; }
.rt-layout .artifact { background: var(--rt-asphalt); color: var(--rt-cream); border: 3px solid var(--rt-ink); padding: 18px 22px; margin: 20px 0; box-shadow: 6px 6px 0 var(--rt-ink); font-family: "JetBrains Mono"; font-size: 13px; line-height: 1.6; position: relative; }
.rt-layout .artifact::before { content:"PROMPT DRAFT"; position:absolute; top:-14px; left:16px; background:var(--rt-yellow); color:var(--rt-ink); padding:4px 10px; border:2px solid var(--rt-ink); font-family:"Bungee"; font-size:10px; }
.rt-layout .artifact.email::before { content:"EMAIL DRAFT"; }
.rt-layout .scn-actions { margin-top: 30px; padding-top: 24px; border-top: 3px dashed var(--rt-ink); display: flex; justify-content: space-between; align-items: center; gap: 16px; }
.rt-layout .rt-hint { font-family: "JetBrains Mono"; font-size: 12px; color: var(--rt-muted); }
.rt-layout .rt-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 26px; border: 3px solid var(--rt-ink); font-family: "Bungee"; font-size: 13px; cursor: pointer; text-decoration: none; transition: transform .12s, box-shadow .12s; }
.rt-layout .rt-btn.primary { background: var(--rt-ink); color: var(--rt-cream); box-shadow: 5px 5px 0 var(--rt-yellow); }
.rt-layout .rt-btn.primary:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 var(--rt-yellow); }
.rt-layout .rt-btn.secondary { background: var(--rt-cream); color: var(--rt-ink); box-shadow: none; border: 3px solid var(--rt-ink); }
.rt-layout .rt-btn.green { background: var(--rt-green); color: var(--rt-ink); box-shadow: 5px 5px 0 var(--rt-ink); }
.rt-layout .rt-btn.green:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 var(--rt-ink); }
.rt-layout .feedback { margin-top: 18px; padding: 16px 20px; border: 3px solid var(--rt-ink); background: var(--rt-cream-2); font-size: 14px; line-height: 1.55; display: none; }
.rt-layout .feedback.show { display: block; }
.rt-layout .feedback b { font-family: "Bungee"; display: block; margin-bottom: 4px; }
.rt-layout .feedback.right { background: var(--rt-green); box-shadow: 5px 5px 0 var(--rt-ink); }
.rt-layout .feedback.partial { background: var(--rt-amber); box-shadow: 5px 5px 0 var(--rt-ink); }
.rt-layout .feedback.wrong { background: var(--rt-red); color: var(--rt-cream); box-shadow: 5px 5px 0 var(--rt-ink); }
.rt-layout .feedback .pts { float: right; font-family: "Bungee"; }

/* ── Intro ───────────────────────────────────────────────────────────────── */
.rt-layout .rt-intro { max-width: 1100px; }
.rt-layout .rt-intro h1 { font-family: "Bungee"; font-size: 80px; line-height: 0.9; margin: 0 0 24px; }
.rt-layout .rt-intro h1 .red { color: var(--rt-red); }
.rt-layout .rt-lead { font-size: 18px; line-height: 1.55; max-width: 720px; color: var(--rt-ink); margin-bottom: 0; }
.rt-layout .rt-grid { margin: 36px 0; display: grid; grid-template-columns: repeat(5,1fr); gap: 14px; }
.rt-layout .junction { background: #fff; border: 3px solid var(--rt-ink); padding: 14px; box-shadow: 4px 4px 0 var(--rt-ink); }
.rt-layout .junction .n { font-family: "Bungee"; font-size: 32px; color: var(--rt-red); line-height: 1; }
.rt-layout .junction b { font-family: "Bungee"; font-size: 12px; display: block; margin: 8px 0 4px; line-height: 1.1; }
.rt-layout .junction small { font-family: "JetBrains Mono"; font-size: 10px; color: var(--rt-muted); }
.rt-layout .rules-row { margin-top: 20px; background: var(--rt-asphalt); color: var(--rt-cream); padding: 22px 26px; border: 3px solid var(--rt-ink); box-shadow: 6px 6px 0 var(--rt-yellow); display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; }
.rt-layout .rules-row > div b { font-family: "Bungee"; font-size: 11px; color: var(--rt-yellow); display: block; margin-bottom: 4px; }
.rt-layout .rules-row > div { font-family: "JetBrains Mono"; font-size: 11px; line-height: 1.5; }

/* ── Sign Grid ───────────────────────────────────────────────────────────── */
.rt-layout .signs-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-top: 16px; }
.rt-layout .sign-pick { background: var(--rt-cream-2); border: 3px solid var(--rt-ink); padding: 16px; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 12px; box-shadow: 5px 5px 0 var(--rt-ink); transition: transform .12s; user-select: none; }
.rt-layout .sign-pick:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 var(--rt-ink); }
.rt-layout .shape { width: 100px; height: 100px; display: grid; place-items: center; background: var(--rt-yellow); color: var(--rt-ink); border: 4px solid var(--rt-ink); font-family: "Bungee"; font-size: 14px; text-align: center; line-height: 1; box-shadow: 3px 3px 0 var(--rt-ink); }
.rt-layout .shape.octagon { clip-path: polygon(30% 0,70% 0,100% 30%,100% 70%,70% 100%,30% 100%,0 70%,0 30%); background: var(--rt-red); color: var(--rt-cream); }
.rt-layout .shape.no-entry { border-radius: 50%; background: var(--rt-red); color: var(--rt-cream); position: relative; }
.rt-layout .shape.no-entry::after { content:""; position:absolute; left:14%; right:14%; top:46%; height:8px; background:var(--rt-cream); }
.rt-layout .shape.no-entry span { display: none; }
.rt-layout .shape.diamond { transform: rotate(45deg); width: 85px; height: 85px; }
.rt-layout .shape.diamond > span { transform: rotate(-45deg); display: block; font-size: 12px; }
.rt-layout .shape.triangle { clip-path: polygon(50% 0,100% 100%,0 100%); padding-top: 36px; align-items: end; }
.rt-layout .shape.circle { border-radius: 50%; }
.rt-layout .shape.rect { background: var(--rt-green); color: var(--rt-cream); }
.rt-layout .sname { font-family: "Bungee"; font-size: 13px; text-align: center; line-height: 1.1; }
.rt-layout .sname small { display: block; font-family: "JetBrains Mono"; font-size: 9px; color: var(--rt-muted); margin-top: 4px; font-weight: 400; text-transform: uppercase; }
.rt-layout .sign-pick.selected { background: var(--rt-yellow); box-shadow: 5px 5px 0 var(--rt-asphalt-3); }
.rt-layout .sign-pick.correct { background: var(--rt-green); box-shadow: 5px 5px 0 var(--rt-ink); }
.rt-layout .sign-pick.missed { background: var(--rt-cream-2); border-style: dashed; }
.rt-layout .sign-pick.wrong { background: var(--rt-red); color: var(--rt-cream); box-shadow: 5px 5px 0 var(--rt-ink); }
.rt-layout .sign-pick.wrong .sname small { color: var(--rt-cream-3); }
.rt-layout .check { font-family: "Bungee"; font-size: 16px; min-height: 18px; }

/* ── Classify ────────────────────────────────────────────────────────────── */
.rt-layout .classify-list { display: grid; gap: 18px; margin-top: 8px; }
.rt-layout .classify-row { background: #fff; border: 3px solid var(--rt-ink); padding: 18px 20px; box-shadow: 5px 5px 0 var(--rt-ink); display: grid; grid-template-columns: 1fr 280px; gap: 24px; align-items: center; }
.rt-layout .snippet { font-family: "JetBrains Mono"; font-size: 13px; line-height: 1.5; }
.rt-layout .snippet b { font-family: "Bungee"; font-size: 11px; display: block; margin-bottom: 6px; color: var(--rt-muted); }
.rt-layout .classify-opts { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; }
.rt-layout .classify-opt { height: 44px; border: 2px solid var(--rt-ink); background: var(--rt-cream); display: grid; place-items: center; cursor: pointer; font-family: "Bungee"; font-size: 12px; user-select: none; }
.rt-layout .classify-opt[data-c="green"]:hover { background: var(--rt-green); }
.rt-layout .classify-opt[data-c="amber"]:hover { background: var(--rt-amber); }
.rt-layout .classify-opt[data-c="red"]:hover { background: var(--rt-red); color: var(--rt-cream); }
.rt-layout .classify-opt.selected[data-c="green"] { background: var(--rt-green); }
.rt-layout .classify-opt.selected[data-c="amber"] { background: var(--rt-amber); }
.rt-layout .classify-opt.selected[data-c="red"] { background: var(--rt-red); color: var(--rt-cream); }
.rt-layout .classify-row.judged .classify-opt { cursor: default; }
.rt-layout .classify-row.right { box-shadow: 5px 5px 0 var(--rt-green); }
.rt-layout .classify-row.wrong { box-shadow: 5px 5px 0 var(--rt-red); }
.rt-layout .judge-pill { margin-top: 12px; padding: 6px 10px; font-family: "JetBrains Mono"; font-size: 11px; background: var(--rt-cream-2); border: 2px solid var(--rt-ink); display: inline-block; }
.rt-layout .judge-pill.right { background: var(--rt-green); }
.rt-layout .judge-pill.wrong { background: var(--rt-red); color: var(--rt-cream); }

/* ── PREP ────────────────────────────────────────────────────────────────── */
.rt-layout .prep-instructions { background: var(--rt-yellow); border: 3px solid var(--rt-ink); padding: 16px 20px; box-shadow: 5px 5px 0 var(--rt-ink); margin-bottom: 22px; font-size: 14px; }
.rt-layout .prep-instructions b { font-family: "Bungee"; }
.rt-layout .prep-block { display: grid; gap: 14px; }
.rt-layout .prep-step { background: #fff; border: 3px solid var(--rt-ink); padding: 18px; box-shadow: 5px 5px 0 var(--rt-ink); display: grid; grid-template-columns: 56px 1fr 120px; gap: 16px; align-items: center; }
.rt-layout .prep-letter { width: 56px; height: 56px; background: var(--rt-yellow); border: 3px solid var(--rt-ink); display: grid; place-items: center; font-family: "Bungee"; font-size: 26px; box-shadow: 3px 3px 0 var(--rt-ink); }
.rt-layout .prep-step.s2 .prep-letter { background: var(--rt-green); }
.rt-layout .prep-step.s3 .prep-letter { background: var(--rt-sky); }
.rt-layout .prep-step.s4 .prep-letter { background: var(--rt-red); color: var(--rt-cream); }
.rt-layout .prep-step .body .lbl { font-family: "JetBrains Mono"; font-size: 10px; text-transform: uppercase; color: var(--rt-muted); }
.rt-layout .prep-step .body .ttl { font-family: "Bungee"; font-size: 14px; margin: 2px 0 6px; }
.rt-layout .prep-step .body input { width: 100%; border: 2px solid var(--rt-ink); background: var(--rt-cream); padding: 10px 12px; font-family: "Space Grotesk"; font-size: 14px; font-weight: 500; outline: none; }
.rt-layout .prep-step .body input:focus { background: var(--rt-cream-2); }
.rt-layout .prep-grade { height: 60px; border: 2px solid var(--rt-ink); background: var(--rt-cream-2); display: grid; place-items: center; font-family: "Bungee"; font-size: 12px; color: var(--rt-muted); text-align: center; }
.rt-layout .prep-grade.pass { background: var(--rt-green); color: var(--rt-ink); }
.rt-layout .prep-grade.fail { background: var(--rt-red); color: var(--rt-cream); }

/* ── Sanitise ────────────────────────────────────────────────────────────── */
.rt-layout .redact-instructions { background: var(--rt-red); color: var(--rt-cream); border: 3px solid var(--rt-ink); padding: 16px 20px; box-shadow: 5px 5px 0 var(--rt-ink); margin-bottom: 22px; font-size: 14px; }
.rt-layout .redact-instructions b { font-family: "Bungee"; }
.rt-layout .redact-prompt { background: var(--rt-cream-2); border: 3px solid var(--rt-ink); padding: 24px; box-shadow: 6px 6px 0 var(--rt-ink); font-size: 16px; line-height: 1.8; font-family: "Space Grotesk"; font-weight: 500; color: var(--rt-ink); }
.rt-layout .tok { background: transparent; padding: 2px 0; cursor: pointer; border-bottom: 2px dotted transparent; user-select: none; }
.rt-layout .tok.sensitive:hover { background: rgba(255,204,0,.3); }
.rt-layout .tok.redacted { background: var(--rt-ink); color: var(--rt-ink); border-bottom: 0; padding: 2px 8px; margin: 0 2px; position: relative; font-family: "JetBrains Mono"; }
.rt-layout .tok.redacted::before { content: attr(data-redact-label); color: var(--rt-yellow); font-family: "JetBrains Mono"; font-weight: 700; }
.rt-layout .tok.flagged-wrong { background: var(--rt-red); color: var(--rt-cream); padding: 2px 4px; }
.rt-layout .tok.flagged-missed { background: var(--rt-yellow); color: var(--rt-ink); padding: 2px 4px; border-bottom: 2px solid var(--rt-red); }
.rt-layout .redact-status { margin-top: 18px; display: flex; gap: 14px; flex-wrap: wrap; font-family: "JetBrains Mono"; font-size: 12px; }
.rt-layout .stat { background: var(--rt-cream); border: 2px solid var(--rt-ink); padding: 6px 12px; }
.rt-layout .stat b { font-family: "Bungee"; font-size: 14px; margin-right: 6px; }

/* ── Escalation ──────────────────────────────────────────────────────────── */
.rt-layout .route-list { display: grid; gap: 14px; }
.rt-layout .route-row { background: #fff; border: 3px solid var(--rt-ink); padding: 18px 20px; box-shadow: 5px 5px 0 var(--rt-ink); display: grid; grid-template-columns: 50px 1fr 260px; gap: 18px; align-items: center; }
.rt-layout .route-num { width: 50px; height: 50px; background: var(--rt-red); color: var(--rt-cream); border: 3px solid var(--rt-ink); display: grid; place-items: center; font-family: "Bungee"; font-size: 22px; }
.rt-layout .route-text { font-size: 14px; line-height: 1.5; }
.rt-layout .route-text b { font-family: "Bungee"; font-size: 13px; display: block; margin-bottom: 4px; }
.rt-layout .route-select { height: 48px; padding: 0 14px; border: 3px solid var(--rt-ink); background: var(--rt-cream); font-family: "Bungee"; font-size: 13px; outline: none; cursor: pointer; width: 100%; }
.rt-layout .route-row.right { box-shadow: 5px 5px 0 var(--rt-green); }
.rt-layout .route-row.wrong { box-shadow: 5px 5px 0 var(--rt-red); }

/* ── Results ─────────────────────────────────────────────────────────────── */
.rt-layout .results-wrap { padding: 48px; display: grid; grid-template-columns: 1fr 480px; gap: 40px; max-width: 1300px; margin: 0 auto; position: relative; z-index: 2; }
.rt-layout .stamp-block { background: var(--rt-cream-2); border: 4px solid var(--rt-ink); box-shadow: 12px 12px 0 var(--rt-ink); padding: 36px; position: relative; }
.rt-layout .stamp-block h1 { font-family: "Bungee"; font-size: 64px; line-height: 0.95; margin: 0 0 8px; }
.rt-layout .stamp-block h1.pass { color: var(--rt-green); }
.rt-layout .stamp-block h1.fail { color: var(--rt-red); }
.rt-layout .stamp-circle { position: absolute; top: 30px; right: 30px; width: 160px; height: 160px; border: 6px solid var(--rt-green); border-radius: 50%; display: grid; place-items: center; font-family: "Bungee"; font-size: 22px; color: var(--rt-green); transform: rotate(-12deg); text-align: center; line-height: 1; background: rgba(46,200,102,.08); }
.rt-layout .stamp-circle small { display: block; font-family: "JetBrains Mono"; font-size: 9px; margin-top: 4px; font-weight: 400; }
.rt-layout .stamp-circle.fail { border-color: var(--rt-red); color: var(--rt-red); background: rgba(226,58,46,.08); }
.rt-layout .ledger { margin-top: 24px; border-top: 3px dashed var(--rt-ink); padding-top: 22px; }
.rt-layout .ledger-row { display: grid; grid-template-columns: 40px 1fr auto; gap: 14px; align-items: center; padding: 10px 0; border-bottom: 2px dashed #d8c98f; }
.rt-layout .ledger-row:last-child { border-bottom: 0; }
.rt-layout .ledger-row .ic { width: 40px; height: 40px; background: var(--rt-yellow); border: 2px solid var(--rt-ink); display: grid; place-items: center; font-family: "Bungee"; font-size: 14px; }
.rt-layout .ledger-row.full .ic { background: var(--rt-green); }
.rt-layout .ledger-row.partial .ic { background: var(--rt-amber); }
.rt-layout .ledger-row.zero .ic { background: var(--rt-red); color: var(--rt-cream); }
.rt-layout .ledger-row .what b { font-family: "Bungee"; font-size: 13px; display: block; }
.rt-layout .ledger-row .what small { font-family: "JetBrains Mono"; font-size: 10px; color: var(--rt-muted); }
.rt-layout .ledger-row .pts { font-family: "Bungee"; font-size: 18px; }
.rt-layout .license-cert { background: linear-gradient(135deg,#ffe27a 0%,#f5b800 100%); color: var(--rt-ink); border: 4px solid var(--rt-ink); box-shadow: 12px 12px 0 var(--rt-ink); padding: 28px; position: relative; overflow: hidden; }
.rt-layout .license-cert::before { content:""; position:absolute; right:-50px; top:-50px; width:220px; height:220px; background:radial-gradient(circle,rgba(255,255,255,.55),transparent 65%); }
.rt-layout .lc-head { display: flex; justify-content: space-between; border-bottom: 2px solid var(--rt-ink); padding-bottom: 10px; margin-bottom: 14px; font-family: "JetBrains Mono"; font-size: 11px; }
.rt-layout .lc-head b { font-family: "Bungee"; font-size: 13px; }
.rt-layout .lc-grid { display: grid; grid-template-columns: 86px 1fr; gap: 16px; }
.rt-layout .lc-portrait { width: 86px; height: 108px; background: rgba(0,0,0,.08); border: 2px solid var(--rt-ink); display: grid; place-items: center; }
.rt-layout .rt-agent { width: 46px; height: 56px; position: relative; filter: drop-shadow(2px 2px 0 var(--rt-ink)); }
.rt-layout .rt-head { position: absolute; left: 50%; top: 4px; transform: translateX(-50%); width: 36px; height: 30px; background: var(--rt-ink); border-radius: 8px 8px 4px 4px; }
.rt-layout .rt-head::before, .rt-layout .rt-head::after { content:""; position:absolute; top:9px; width:7px; height:7px; background:var(--rt-yellow); border-radius:50%; }
.rt-layout .rt-head::before { left:6px; } .rt-layout .rt-head::after { right:6px; }
.rt-layout .rt-antenna { position: absolute; left: 50%; top: -5px; width: 2px; height: 9px; background: var(--rt-ink); transform: translateX(-50%); }
.rt-layout .rt-antenna::before { content:""; position:absolute; left:50%; top:-4px; width:6px; height:6px; background:var(--rt-yellow); border:1.5px solid var(--rt-ink); border-radius:50%; transform:translateX(-50%); }
.rt-layout .rt-body { position: absolute; left:50%; bottom:0; transform:translateX(-50%); width:42px; height:22px; background:var(--rt-cream); border:2px solid var(--rt-ink); border-radius:7px 7px 2px 2px; }
.rt-layout .rt-abadge { position: absolute; left:50%; bottom:4px; transform:translateX(-50%); width:10px; height:10px; background:var(--rt-red); border:1.5px solid var(--rt-ink); border-radius:50%; }
.rt-layout .lc-info { font-family: "JetBrains Mono"; font-size: 12px; line-height: 1.5; }
.rt-layout .lc-name { font-family: "Bungee"; font-size: 22px; line-height: 1; margin-bottom: 8px; }
.rt-layout .lc-num { font-family: "JetBrains Mono"; font-size: 16px; letter-spacing: 0.08em; margin-top: 10px; }
.rt-layout .lc-stamps { margin-top: 14px; padding-top: 10px; border-top: 2px dashed var(--rt-ink); display: flex; gap: 6px; flex-wrap: wrap; }
.rt-layout .lc-stamp { border: 2px solid var(--rt-ink); padding: 3px 8px; font-family: "JetBrains Mono"; font-size: 9px; text-transform: uppercase; }
.rt-layout .examiner-sig { margin-top: 16px; padding-top: 14px; border-top: 2px dashed var(--rt-ink); display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-family: "JetBrains Mono"; font-size: 10px; }
.rt-layout .sig { font-family: "Caveat", cursive; font-size: 22px; border-bottom: 2px solid var(--rt-ink); padding-bottom: 4px; }
.rt-layout .sig-lbl { font-family: "JetBrains Mono"; font-size: 9px; color: var(--rt-muted); margin-top: 4px; text-transform: uppercase; }

/* ── Examiner Rail ───────────────────────────────────────────────────────── */
.rt-layout .examiner { background: var(--rt-asphalt-2); border-left: 3px solid var(--rt-ink); overflow: hidden; display: flex; flex-direction: column; }
.rt-layout .examiner-head { padding: 18px; border-bottom: 2px solid var(--rt-asphalt-4); display: flex; gap: 12px; align-items: center; }
.rt-layout .ex-portrait { width: 64px; height: 64px; background: var(--rt-red); border: 3px solid var(--rt-ink); display: grid; place-items: center; flex: 0 0 64px; }
.rt-layout .ex-meta b { font-family: "Bungee"; font-size: 16px; color: var(--rt-cream); display: block; }
.rt-layout .ex-meta small { display: block; font-family: "JetBrains Mono"; font-size: 9px; color: var(--rt-cream-3); margin-top: 4px; letter-spacing: 0.05em; }
.rt-layout .ex-badge { display: inline-block; margin-top: 6px; padding: 2px 8px; background: var(--rt-red); color: var(--rt-cream); font-family: "Bungee"; font-size: 10px; }
.rt-layout .clipboard { flex: 1; padding: 18px; overflow-y: auto; background: var(--rt-asphalt-2); }
.rt-layout .clip-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; font-family: "JetBrains Mono"; font-size: 10px; color: var(--rt-cream-3); text-transform: uppercase; }
.rt-layout .clip-head b { font-family: "Bungee"; color: var(--rt-yellow); font-size: 12px; }
.rt-layout .scorecard { background: var(--rt-asphalt); border: 2px solid var(--rt-asphalt-4); padding: 14px; font-family: "JetBrains Mono"; font-size: 11px; color: var(--rt-cream-2); margin-bottom: 16px; }
.rt-layout .sc-row { display: grid; grid-template-columns: 1fr auto auto; gap: 10px; padding: 6px 0; border-bottom: 1px dashed var(--rt-asphalt-4); align-items: center; }
.rt-layout .sc-row:last-child { border-bottom: 0; }
.rt-layout .sc-row b { font-family: "Bungee"; font-size: 11px; color: var(--rt-cream); }
.rt-layout .sc-row .v { font-family: "Bungee"; font-size: 14px; color: var(--rt-yellow); }
.rt-layout .sc-row .v.zero { color: var(--rt-cream-3); }
.rt-layout .sc-row .v.full { color: var(--rt-green); }
.rt-layout .sc-row .v.partial { color: var(--rt-amber); }
.rt-layout .sc-row .pct { font-family: "JetBrains Mono"; font-size: 9px; color: var(--rt-muted); }
.rt-layout .scorecard-total { margin-top: 10px; padding-top: 10px; border-top: 2px solid var(--rt-asphalt-4); display: flex; justify-content: space-between; align-items: center; }
.rt-layout .scorecard-total b { font-family: "Bungee"; font-size: 14px; color: var(--rt-cream); }
.rt-layout .big { font-family: "Bungee"; font-size: 28px; color: var(--rt-yellow); line-height: 1; }
.rt-layout .big.pass { color: var(--rt-green); }
.rt-layout .big.fail { color: var(--rt-red); }
.rt-layout .notes { display: flex; flex-direction: column; gap: 10px; }
.rt-layout .note { background: var(--rt-asphalt-3); border: 2px solid var(--rt-asphalt-4); border-left: 4px solid var(--rt-cream-3); padding: 10px 12px; font-size: 12px; line-height: 1.5; font-family: "Caveat", "Space Grotesk", cursive; font-weight: 600; color: var(--rt-cream-2); }
.rt-layout .note .ts { font-family: "JetBrains Mono"; font-size: 9px; color: var(--rt-cream-3); margin-bottom: 4px; }
.rt-layout .note.warn { border-left-color: var(--rt-red); }
.rt-layout .note.ok   { border-left-color: var(--rt-green); }
.rt-layout .note.tip  { border-left-color: var(--rt-yellow); }

/* ── Road Bar ────────────────────────────────────────────────────────────── */
.rt-layout .roadbar { background: var(--rt-asphalt-2); border-top: 3px solid var(--rt-ink); display: flex; align-items: center; padding: 0 32px; }
.rt-layout .stops { position: relative; flex: 1; height: 56px; display: flex; align-items: center; margin: 0 8px; }
.rt-layout .stops::before { content:""; position:absolute; left:30px; right:30px; top:50%; transform:translateY(-50%); height:6px; background: repeating-linear-gradient(90deg,var(--rt-line-white) 0 18px,transparent 18px 32px); }
.rt-layout .stops::after { content:""; position:absolute; left:0; right:0; bottom:6px; height:3px; background:var(--rt-yellow); }
.rt-layout .stops > div { flex: 1; display: flex; flex-direction: column; align-items: center; }
.rt-layout .stop { position: relative; z-index: 1; width: 56px; height: 56px; background: var(--rt-asphalt); border: 3px solid var(--rt-asphalt-4); color: var(--rt-cream-3); display: grid; place-items: center; font-family: "Bungee"; font-size: 14px; margin: 0 auto; cursor: default; }
.rt-layout .stop.done { background: var(--rt-green); color: var(--rt-ink); border-color: var(--rt-green); }
.rt-layout .stop.failed { background: var(--rt-red); color: var(--rt-cream); border-color: var(--rt-red); }
.rt-layout .stop.current { background: var(--rt-yellow); color: var(--rt-ink); border-color: var(--rt-yellow); box-shadow: 0 0 0 6px rgba(255,204,0,.18); }
.rt-layout .stop-lbl { font-family: "JetBrains Mono"; font-size: 9px; color: var(--rt-cream-3); margin-top: 4px; text-transform: uppercase; text-align: center; max-width: 110px; line-height: 1.2; }
</style>
