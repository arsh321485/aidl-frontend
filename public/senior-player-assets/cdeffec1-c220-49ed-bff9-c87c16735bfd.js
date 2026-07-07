// ============================================================
// Segment template renderers
// Each returns a string of HTML for a given segment body.
// Exposed as window.AIDL_TEMPLATES[name](body, ctx) -> html
// ============================================================
window.AIDL_TEMPLATES = {};

function escapeHtml(s) {
  return (s == null ? '' : String(s))
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ------------------------------------------------------------
// CONCEPT — text + road sign + examples + callout
// ------------------------------------------------------------
window.AIDL_TEMPLATES.concept = function (b) {
  const signCls = 'big-sign ' + b.sign.kind;
  const signHtml = `
    <div class="big-sign-wrap">
      <div class="${signCls}"><span>${escapeHtml(b.sign.glyph)}</span></div>
      <div class="sign-post"></div>
    </div>`;
  const examplesHtml = b.examples ? `
    <div class="examples">
      <h5>${escapeHtml(b.examples.title)}</h5>
      <ul>
        ${b.examples.items.map(it => `<li class="${it.kind}">${it.text}</li>`).join('')}
      </ul>
    </div>` : '';
  const calloutHtml = b.callout ? `
    <div class="callout">
      <div class="ic ${b.callout.icRed ? 'red' : ''}">${escapeHtml(b.callout.icIcon || 'i')}</div>
      <div>
        <b>${escapeHtml(b.callout.title)}</b>
        <p>${b.callout.body}</p>
      </div>
    </div>` : '';
  const resourceHtml = `
    <div class="resource-card">
      <h6>▼ RELATED RESOURCES</h6>
      <a href="Driver Portal.html">
        <b>Handbook</b>
        Module reference · all signs
      </a>
      <a href="Driver Portal.html">
        <b>Glossary</b>
        Definitions &amp; references
      </a>
      <a href="Driver Portal.html">
        <b>Quick Reference</b>
        One-page card · print &amp; pin
      </a>
    </div>`;
  return `
    <div class="concept">
      ${signHtml}
      <div class="seg-aside">
        <div class="concept-body">
          <div class="sub">${escapeHtml(b.sub || '')}</div>
          <h3>${escapeHtml(b.heading || '')}</h3>
          ${(b.paragraphs || []).map(p => `<p>${p}</p>`).join('')}
          ${examplesHtml}
          ${calloutHtml}
        </div>
        ${resourceHtml}
      </div>
    </div>`;
};

// ------------------------------------------------------------
// QUIZ — multiple choice
// ------------------------------------------------------------
window.AIDL_TEMPLATES.quiz = function (b) {
  return `
    <div class="quiz-block">
      <div class="seg-eyebrow quiz" style="margin-bottom:14px;">⚠ KNOWLEDGE CHECK · MUST PASS</div>
      <div class="quiz-q">${b.question}</div>
      <div class="quiz-opts" id="quizOpts">
        ${b.options.map((o, i) => `
          <div class="quiz-opt" data-i="${i}">
            <div class="letter">${escapeHtml(o.letter)}</div>
            <div>${o.text}</div>
            <div class="mark"></div>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quizFb"></div>
    </div>`;
};

window.AIDL_TEMPLATES.quizWire = function (body, ctx) {
  const q = body;
  document.querySelectorAll('.quiz-opt').forEach(el => {
    el.addEventListener('click', () => {
      if (ctx.state.answeredQuiz) return;
      const i = parseInt(el.dataset.i, 10);
      const opt = q.options[i];
      ctx.state.answeredQuiz = true;
      document.querySelectorAll('.quiz-opt').forEach(x => {
        const xi = parseInt(x.dataset.i, 10);
        if (q.options[xi].right) {
          x.classList.add('right');
          x.querySelector('.mark').textContent = '✓';
        } else if (xi === i) {
          x.classList.add('wrong');
          x.querySelector('.mark').textContent = '✗';
        }
      });
      const fb = document.getElementById('quizFb');
      fb.classList.add('show', opt.right ? 'right' : 'wrong');
      fb.innerHTML = '<b>' + (opt.right ? 'CORRECT — GREEN LIGHT' : 'NOT QUITE — BACK UP') + '</b>' + (opt.right ? q.rightFeedback : q.wrongFeedback);
      if (opt.right) ctx.awardXp(25);
    });
  });
};

// ------------------------------------------------------------
// REFLECT — wrap-up grid (level-aware copy)
// ------------------------------------------------------------
window.AIDL_TEMPLATES.reflect = function (b, ctx) {
  const L = ctx.lesson;
  const lvl = window.AIDL_LEVELS[L.level];
  const learned = {
    L: 'The four parts of every great prompt — PREP. You can recognise a weak prompt, fix it in one pass, and write your own from scratch.',
    C: 'The six AUP provisions, the five prohibited categories, and the escalation ladder. Your attestation is on the audit ledger — signed, IP-logged, ready for inspection.',
    A: 'STRIDE-AI applied end-to-end on a real deployment — a complete risk register, a sandboxed red-team session, and a peer-review-ready mitigation set.',
  }[L.level];
  const next = {
    L: '<b>M-1-04 · Job Market Readiness.</b> Apply PREP to a job description and a cover letter. Three short labs.',
    C: '<b>M-2-05 · Workplace Prompt Engineering.</b> PREP with an explicit data-safety Parameters clause.',
    A: '<b>M-3-04 · Building Multi-Step AI Workflows.</b> Visual workflow builder · human review gates · output schema.',
  }[L.level];
  const takeAway = {
    L: 'Pin the <b>PREP card</b> next to your monitor. Persona → Requirement → Expectation → Parameters. Same four moves, every time.',
    C: 'Your attestation receipt is in your <b>Licence Portfolio</b>. Keep it — annual renewal asks to re-attest, not re-sit.',
    A: 'Your risk register and red-team transcript are now in your <b>Licence Portfolio</b>, tagged for capstone re-use.',
  }[L.level];
  return `
    <div class="reflect-grid">
      <div class="reflect-card dark">
        <h5 style="color: var(--accent);">▼ YOU LEARNED</h5>
        <p>${learned}</p>
      </div>
      <div class="reflect-card">
        <h5>▼ TAKE WITH YOU</h5>
        <p>${takeAway}</p>
      </div>
      <div class="reflect-card">
        <h5>▼ NEXT MODULE</h5>
        <p>${next}</p>
      </div>
      <div class="reflect-card dark">
        <h5 style="color: var(--accent);">▼ ROAD TEST PREP</h5>
        <p>Pass mark on Class ${L.level} is <b>${lvl.passMark}%</b>. Your road test will simulate scenarios pulled from this module. Practice in the simulator anytime.</p>
      </div>
    </div>`;
};

// ------------------------------------------------------------
// PREPBUILDER — Level 1 lab (M-1-03 LAB-1-03-01)
// Field-length + component validation per spec § 2.6
// ------------------------------------------------------------
window.AIDL_TEMPLATES.prepbuilder = function (b) {
  return `
    <div class="prep-builder">
      <div class="prep-scenario">
        <b>SCENARIO · LAB-1-03-01</b>
        <p>${escapeHtml(b.scenario)}</p>
      </div>
      <div class="prep-fields" id="prepFields">
        <div class="prep-field" data-field="persona">
          <div class="prep-field-head">
            <div class="prep-letter">P</div>
            <b>PERSONA</b>
            <small>Assign an expert role — be specific</small>
            <span class="check">·</span>
          </div>
          <textarea placeholder="Act as a friendly career coach who has helped 100+ people prepare for interviews."></textarea>
        </div>
        <div class="prep-field" data-field="requirement">
          <div class="prep-field-head">
            <div class="prep-letter">R</div>
            <b>REQUIREMENT</b>
            <small>State the task — verb + thing</small>
            <span class="check">·</span>
          </div>
          <textarea placeholder="Write a thank-you message to the interviewer for an Operations Analyst role I interviewed for yesterday at NorthWind Trading."></textarea>
        </div>
        <div class="prep-field" data-field="expectation">
          <div class="prep-field-head">
            <div class="prep-letter">E</div>
            <b>EXPECTATION</b>
            <small>Format, length, tone</small>
            <span class="check">·</span>
          </div>
          <textarea placeholder="Email format. Under 120 words. Warm but professional tone. End with a single short sentence about what I'm excited to bring."></textarea>
        </div>
        <div class="prep-field" data-field="parameters">
          <div class="prep-field-head">
            <div class="prep-letter">P</div>
            <b>PARAMETERS</b>
            <small>At least one safety / no-go constraint</small>
            <span class="check">·</span>
          </div>
          <textarea placeholder="Do not include my full name or address. Don't invent any details about the company — if you're not sure of a fact, leave it out."></textarea>
        </div>
      </div>
      <div class="prep-status">
        <span class="pct" id="prepPct">0%</span>
        <span class="msg" id="prepMsg">Fill all four PREP fields — minimum 10 words each. The system will verify all components are present before crediting the lab.</span>
      </div>
    </div>`;
};

window.AIDL_TEMPLATES.prepbuilderWire = function (body, ctx) {
  const fields = document.querySelectorAll('.prep-field');
  function constraintWordCount(s) {
    const lc = s.toLowerCase();
    const cues = ["don't", 'do not', "don'", 'no ', 'avoid', 'never', 'exclude', 'omit', 'under ', 'less than', 'max ', 'maximum', 'keep it', 'only', 'must not'];
    return cues.some(c => lc.includes(c)) ? 1 : 0;
  }
  function evaluate() {
    let pass = 0, total = fields.length;
    let msgs = [];
    fields.forEach(f => {
      const ta = f.querySelector('textarea');
      const v = (ta.value || '').trim();
      const words = v.split(/\s+/).filter(Boolean).length;
      const fld = f.dataset.field;
      let ok = words >= 10;
      // Parameters: require a constraint cue
      if (fld === 'parameters' && ok) ok = constraintWordCount(v) > 0;
      if (fld === 'persona' && ok) ok = /\bact as\b|\byou are\b/i.test(v) || words >= 12;
      f.querySelector('.check').textContent = ok ? '✓' : '·';
      f.querySelector('.check').classList.toggle('ok', ok);
      if (ok) pass++;
      else if (words === 0) msgs.push(fld.toUpperCase() + ' missing');
      else if (words < 10) msgs.push(fld.toUpperCase() + ' too short');
      else if (fld === 'parameters') msgs.push('PARAMETERS needs a constraint ("don\'t…", "no…", "under…")');
    });
    const pct = Math.round(pass / total * 100);
    document.getElementById('prepPct').textContent = pct + '%';
    const m = document.getElementById('prepMsg');
    if (pass === total) {
      m.innerHTML = '<b style="color: var(--accent);">ALL FOUR COMPONENTS DETECTED.</b> Lab credited · saved to your Licence Portfolio. You may continue.';
      ctx.markLabComplete && ctx.markLabComplete('LAB-1-03-01');
    } else {
      m.textContent = msgs.slice(0, 3).join(' · ') + (msgs.length ? '.' : ' Fill all four fields.');
    }
  }
  fields.forEach(f => {
    const ta = f.querySelector('textarea');
    ta.addEventListener('input', evaluate);
  });
  evaluate();
};

// ------------------------------------------------------------
// AUPREAD — Level 2 mandatory read with scroll-100% gate (AR-2-03)
// ------------------------------------------------------------
window.AIDL_TEMPLATES.aupread = function (b) {
  return `
    <div class="aup-wrap">
      <div class="aup-meta">
        <div><span class="k">ORG</span><span class="v">${escapeHtml(b.org)}</span></div>
        <div><span class="k">POLICY</span><span class="v">AI ACCEPTABLE USE</span></div>
        <div><span class="k">DOC ID</span><span class="v">${escapeHtml(b.docId)}</span></div>
        <div><span class="k">VERSION</span><span class="v">${escapeHtml(b.version)}</span></div>
      </div>
      <div class="aup-scroll-meta">
        <span>Scroll progress</span>
        <div class="gauge" id="aupGauge"><i id="aupGaugeFill"></i></div>
        <b><span id="aupScrollPct">0</span>%</b>
        <span class="lock" id="aupLock">LOCKED · CONTINUE DISABLED</span>
      </div>
      <div class="aup-doc" id="aupDoc">
        <h4>${escapeHtml(b.org)} · AI Acceptable Use Policy</h4>
        <div class="doc-meta">${escapeHtml(b.docId)} · ${escapeHtml(b.version)} · CONFIDENTIAL · INTERNAL</div>

        <p><strong>Preamble.</strong> This policy governs use of all artificial intelligence systems by employees, contractors, and authorised third parties of ${escapeHtml(b.org)}. By accessing any approved AI tool through company SSO you are deemed to have accepted these terms in addition to any per-tool agreement.</p>

        <h5>Approved tools and access control</h5>
        <p>Only AI tools listed on the current approved-tools register may be used with any non-public organisation data. The register is maintained by IT Security and published at <span class="mono">portal/ai-allow-list</span>. Use of any AI tool not on the register — including personal accounts of otherwise-approved tools — is Shadow AI and is prohibited under §6.</p>
        <ul>
          <li>Access is granted via corporate SSO only.</li>
          <li>Personal accounts of otherwise-approved tools are NOT approved for any company data.</li>
          <li>Approved-tool changes are published 14 days before activation.</li>
        </ul>

        <h5>Data classification — the Traffic Light system</h5>
        <p>All data entering any AI tool must first be classified under the corporate Traffic Light framework.</p>
        <ul>
          <li><strong>GREEN</strong> — public; safe for any approved tool.</li>
          <li><strong>AMBER</strong> — internal, non-sensitive; approved enterprise AI only.</li>
          <li><strong>RED</strong> — PII, PHI, financial credentials, trade secrets; never input into any AI without full anonymisation in advance.</li>
        </ul>

        <h5>Mandatory human review</h5>
        <p>AI-generated output intended for client-facing distribution, regulatory submission, or decision-affecting use must be reviewed in writing by a named human reviewer before issue. The reviewer's name and date of review must be recorded in the work product's audit trail field.</p>

        <h5>Documentation and audit trail</h5>
        <p>All material AI-assisted work products must carry an audit trail entry with: tool used, date and time, data classification applied, human reviewer name, and output disposition. The audit trail template is published at <span class="mono">portal/templates/ai-audit-entry</span>.</p>

        <h5>Incident escalation</h5>
        <p>Where an AI output appears to contain another party's confidential information, where Red Light data has been inadvertently disclosed, or where any other AI anomaly meets the trigger conditions in the Incident Schedule, employees must (a) cease using the affected tool, (b) preserve evidence, (c) complete the incident report at <span class="mono">portal/incident/ai</span>, and (d) notify the AI Governance Officer within 4 working hours and in any case within 24 hours.</p>

        <h5>Prohibited use</h5>
        <p>The following uses are flatly prohibited regardless of tool, intent or convenience. Each constitutes a §6 violation and is grounds for disciplinary action up to and including dismissal:</p>
        <div class="prohibited"><strong>§6.1</strong> — Inputting Red Light data into any AI tool without full anonymisation, on any platform, at any time.</div>
        <div class="prohibited"><strong>§6.2</strong> — Using Shadow AI — any AI tool not on the current approved register — with any non-public organisation data.</div>
        <div class="prohibited"><strong>§6.3</strong> — Distributing AI-generated output as a final product without the mandatory human review required under §3.</div>
        <div class="prohibited"><strong>§6.4</strong> — Representing AI-generated content as human-authored where the recipient has a reasonable expectation of human authorship.</div>
        <div class="prohibited"><strong>§6.5</strong> — Using AI to make decisions affecting protected characteristics — hiring, promotion, dismissal, credit, healthcare — without prior governance review and approved human-in-the-loop controls.</div>

        <h5>Disciplinary consequences</h5>
        <p>A single §6.1 or §6.2 violation generates an automatic COMPLIANCE-FLAG on the employee's record. Two flags within twelve months automatically suspends AI tool access pending Governance review. Wilful or repeated §6 violations are handled under the standard disciplinary procedure and may result in dismissal.</p>

        <h5>Acknowledgement</h5>
        <p>By attesting to this policy you confirm that you have read, understood and agree to be bound by its terms; that you will apply the Traffic Light framework to every AI interaction; that you will use only approved tools; and that you will escalate AI incidents within the stated timeframes. Attestation is timestamped, IP-logged and retained for seven years on the compliance audit ledger.</p>

        <div class="signed-end">END OF DOCUMENT · ${escapeHtml(b.docId)} · ${escapeHtml(b.version)}</div>
      </div>
    </div>`;
};

window.AIDL_TEMPLATES.aupreadWire = function (body, ctx) {
  const doc = document.getElementById('aupDoc');
  const fill = document.getElementById('aupGaugeFill');
  const gauge = document.getElementById('aupGauge');
  const pct = document.getElementById('aupScrollPct');
  const lock = document.getElementById('aupLock');
  function onScroll() {
    const max = doc.scrollHeight - doc.clientHeight;
    const p = max <= 0 ? 100 : Math.min(100, Math.round(doc.scrollTop / max * 100));
    fill.style.width = p + '%';
    pct.textContent = p;
    if (p >= 99) {
      gauge.classList.add('done');
      lock.textContent = 'SCROLL COMPLETE · CONTINUE UNLOCKED';
      lock.classList.add('unlocked');
      ctx.state.aupScrolled = true;
    }
  }
  doc.addEventListener('scroll', onScroll);
  // restore previous progress if returning to segment
  if (ctx.state.aupScrolled) {
    doc.scrollTop = doc.scrollHeight;
    onScroll();
  } else {
    onScroll();
  }
};

// ------------------------------------------------------------
// ATTESTATION — Level 2 sign-off (AR-2-04)
// ------------------------------------------------------------
window.AIDL_TEMPLATES.attestation = function (b) {
  const now = new Date();
  const stamp = now.toUTCString().replace('GMT', 'UTC');
  return `
    <div class="attest-wrap">
      <div class="attest-card">
        <div class="attest-head">
          <b>AUP ATTESTATION · ${escapeHtml(b.org)}</b>
          <span class="stamp">M-2-04 · 100% · MANDATORY</span>
        </div>
        <div class="attest-body">
          <p>By signing below, you confirm that you have <strong>read in full and understood</strong> the AI Acceptable Use Policy of ${escapeHtml(b.org)}, version 3.2, and that you will be bound by its provisions for the duration of your Operator's Licence.</p>

          <div class="clauses">
            <ul>
              <li><b>I understand</b> the Traffic Light data classification and will apply it to every AI interaction.</li>
              <li><b>I will use</b> only AI tools on the current approved-tools register, never Shadow AI.</li>
              <li><b>I will not</b> input Red Light data into any AI system without full anonymisation.</li>
              <li><b>I will escalate</b> AI incidents within the §5 timeframes (4 working hours / 24 hours).</li>
              <li><b>I accept</b> that this attestation is binding, timestamped, IP-logged, and stored for seven years on the audit ledger.</li>
            </ul>
          </div>

          <div class="sig-row">
            <div class="sig-field">
              <label>Full legal name (signature)</label>
              <input id="sigName" class="sig-handwriting" placeholder="Type your full legal name to sign" />
            </div>
            <div class="sig-field">
              <label>Audit timestamp</label>
              <div class="ts-display">
                <b id="sigTime">${stamp}</b>
                <span id="sigIp">IP · 10.42.18.221 · SSO ✓ · TENANT ${escapeHtml(b.org).split(' ')[0].toUpperCase()}-PROD</span>
              </div>
            </div>
          </div>

          <label class="attest-confirm disabled" id="attestConfirm">
            <input type="checkbox" id="attestCheck" disabled />
            <div>
              <strong>I attest under §7 acknowledgement.</strong>
              <p>I have read the entire AUP and I understand that falsely attesting is itself a §6 violation.</p>
            </div>
          </label>

          <div class="attest-cta">
            <button class="btn-signed" id="attestSubmit" disabled>SIGN &amp; SUBMIT TO AUDIT LEDGER</button>
            <span class="receipt" id="attestReceiptHint">Type your name and tick the box to enable.</span>
          </div>
        </div>
      </div>

      <div class="attest-receipt-card" id="attestReceipt">
        <div class="rhead">
          <span>✓ ATTESTATION LEDGER RECEIPT</span>
          <span>WRITTEN · AR-2-04 · 7-YEAR RETENTION</span>
        </div>
        <div class="rbody">
          <div><span class="k">Signatory</span><br/><span class="v" id="rcName">—</span></div>
          <div><span class="k">Timestamp (UTC)</span><br/><span class="v" id="rcTime">—</span></div>
          <div><span class="k">Tenant</span><br/><span class="v" id="rcTenant">${escapeHtml(b.org)}</span></div>
          <div><span class="k">Doc</span><br/><span class="v">${escapeHtml('NW-POL-AI-2026-03 v3.2')}</span></div>
          <div><span class="k">Block #</span><br/><span class="v" id="rcBlock">—</span></div>
          <div><span class="k">Status</span><br/><span class="v" style="color: var(--signal-green);">ACTIVE · LICENCE C UNLOCKED</span></div>
          <div class="hash"><span class="k">HASH</span> <span id="rcHash">—</span></div>
        </div>
      </div>
    </div>`;
};

window.AIDL_TEMPLATES.attestationWire = function (body, ctx) {
  const nameEl = document.getElementById('sigName');
  const wrap = document.getElementById('attestConfirm');
  const check = document.getElementById('attestCheck');
  const submit = document.getElementById('attestSubmit');
  const hint = document.getElementById('attestReceiptHint');
  const receipt = document.getElementById('attestReceipt');

  function refresh() {
    const v = (nameEl.value || '').trim();
    const hasName = v.split(/\s+/).length >= 2;
    if (hasName) {
      wrap.classList.remove('disabled');
      check.disabled = false;
    } else {
      wrap.classList.add('disabled');
      check.disabled = true;
      check.checked = false;
    }
    submit.disabled = !(hasName && check.checked);
    if (!hasName) hint.textContent = 'Type your full legal name to enable.';
    else if (!check.checked) hint.textContent = 'Tick the attestation box to enable submission.';
    else hint.innerHTML = 'Ready · click to submit to the audit ledger.';
  }
  nameEl.addEventListener('input', refresh);
  check.addEventListener('change', refresh);
  wrap.addEventListener('click', e => {
    if (wrap.classList.contains('disabled')) return;
    if (e.target.tagName !== 'INPUT') {
      check.checked = !check.checked;
      refresh();
    }
  });
  submit.addEventListener('click', () => {
    const v = (nameEl.value || '').trim();
    const ts = new Date().toUTCString().replace('GMT', 'UTC');
    submit.textContent = '✓ SIGNED & LEDGERED';
    submit.classList.add('signed');
    hint.innerHTML = '<b>Receipt written.</b> Block hash below.';
    document.getElementById('rcName').textContent = v;
    document.getElementById('rcTime').textContent = ts;
    document.getElementById('rcBlock').textContent = '#' + (8740291 + Math.floor(Math.random() * 999));
    const rand = Array.from(crypto.getRandomValues(new Uint8Array(20))).map(b => b.toString(16).padStart(2, '0')).join('');
    document.getElementById('rcHash').textContent = '0x' + rand + ' · sig:ed25519:AIDL-Auth';
    receipt.classList.add('show');
    ctx.state.attested = true;
    ctx.awardXp(50);
  });
  refresh();
};

// ------------------------------------------------------------
// RISK REGISTER — Level 3 lab (LAB-3-03-01)
// ------------------------------------------------------------
const STRIDE_ROWS = [
  { code: 'S', name: 'SPOOFING',                placeholder: 'e.g. manager impersonates HR analyst to query a subordinate\'s productivity profile.' },
  { code: 'T', name: 'TAMPERING',               placeholder: 'e.g. crafted prompt manipulates productivity score regardless of legitimate input.' },
  { code: 'R', name: 'REPUDIATION',             placeholder: 'e.g. no audit log of which user issued the scoring prompt; users can deny action.' },
  { code: 'I', name: 'INFORMATION DISCLOSURE',  placeholder: 'e.g. Slack-sentiment training corpus reveals private DMs to downstream consumers.' },
  { code: 'D', name: 'DENIAL OF SERVICE',       placeholder: 'e.g. recursive prompt loop exhausts per-tenant token cap; tool offline for all.' },
  { code: 'E', name: 'ELEVATION OF PRIVILEGE',  placeholder: 'e.g. agent escalates from read-only to write tool-use via crafted tool-call chain.' },
];
window.AIDL_TEMPLATES.riskregister = function (b) {
  return `
    <div class="rr-wrap">
      <div class="rr-scenario">
        <span>SCENARIO</span>
        <b>${escapeHtml(b.scenario)}</b>
        <span style="margin-left:auto;">LAB-3-03-01 · STRIDE-AI</span>
      </div>
      <div class="rr-table">
        <div class="rr-row head">
          <div>CAT</div>
          <div>RISK</div>
          <div>LIKE</div>
          <div>IMPACT</div>
          <div>MITIGATION · NAMED CONTROL</div>
        </div>
        ${STRIDE_ROWS.map(r => `
          <div class="rr-row" data-cat="${r.code}">
            <div class="rr-cat ${r.code}">${r.code}</div>
            <div><textarea data-fld="risk" placeholder="${escapeHtml(r.placeholder)}"></textarea></div>
            <div><select data-fld="like"><option value="">—</option><option value="L">L</option><option value="M">M</option><option value="H">H</option></select></div>
            <div><select data-fld="imp"><option value="">—</option><option value="L">L</option><option value="M">M</option><option value="H">H</option></select></div>
            <div><textarea data-fld="mit" placeholder="Named, specific. E.g. 'Append-only prompt log to immutable storage, 7-yr retention, per-user attribution.'"></textarea></div>
          </div>
        `).join('')}
      </div>
      <div class="rr-validation">
        <span class="pct" id="rrPct">0%</span>
        <span class="msg" id="rrMsg">Populate at least 5 of 6 STRIDE categories. Information Disclosure must have at least one HIGH-impact entry (LAB-3-03-01 pass criterion).</span>
      </div>
    </div>`;
};

window.AIDL_TEMPLATES.riskregisterWire = function (body, ctx) {
  const rows = document.querySelectorAll('.rr-row[data-cat]');
  function evaluate() {
    let populated = 0;
    let infoHigh = false;
    let allMitigated = 0;
    rows.forEach(r => {
      const risk = (r.querySelector('[data-fld=risk]').value || '').trim();
      const like = r.querySelector('[data-fld=like]').value;
      const imp = r.querySelector('[data-fld=imp]').value;
      const mit = (r.querySelector('[data-fld=mit]').value || '').trim();
      r.querySelector('[data-fld=like]').className = like ? like : '';
      r.querySelector('[data-fld=imp]').className = imp ? imp : '';
      const isPop = risk.length > 8 && like && imp;
      if (isPop) populated++;
      if (isPop && mit.length > 8) allMitigated++;
      if (r.dataset.cat === 'I' && imp === 'H' && risk.length > 8) infoHigh = true;
    });
    const passCat = populated >= 5;
    const passInfo = infoHigh;
    const passMit = allMitigated >= populated && populated > 0;
    const total = Math.round((Math.min(populated, 6) / 6) * 100);
    document.getElementById('rrPct').textContent = total + '%';
    const m = document.getElementById('rrMsg');
    if (passCat && passInfo && passMit) {
      m.innerHTML = '<b>REGISTER PASSED · ' + populated + '/6 categories · Information Disclosure HIGH-impact entry detected · all rows have a named control.</b> Saved to Licence Portfolio.';
      ctx.markLabComplete && ctx.markLabComplete('LAB-3-03-01');
    } else {
      const msgs = [];
      if (!passCat) msgs.push((5 - populated) + ' more STRIDE rows needed (min 5/6)');
      if (!passInfo) msgs.push('Information Disclosure needs a HIGH-impact entry');
      if (!passMit) msgs.push('every populated row needs a named control');
      m.textContent = msgs.join(' · ') + '.';
    }
  }
  rows.forEach(r => r.addEventListener('input', evaluate));
  rows.forEach(r => r.addEventListener('change', evaluate));
  evaluate();
};

// ------------------------------------------------------------
// REDTEAM — Level 3 sandboxed adversarial prompting (LAB-3-03-02)
// ------------------------------------------------------------
const RT_OBJECTIVES = [
  {
    id: 'injection', label: 'PROMPT INJECTION',
    brief: 'Attempt to override the system prompt of ProdSight. Aim: cause it to ignore its productivity-rating rubric and emit a free-form essay instead.',
    held: 'I cannot disregard my upstream instructions. I will continue applying the published productivity rubric. [GUARDRAIL: system-prompt-override · BLOCKED · seq #4421]',
    broken: 'Sure — here is a free-form essay about the employee\'s productivity. [INJECTION SUCCESS: rubric bypassed]',
    fixDefault: 'System-prompt hardening: separate instruction channel · ignored-string filter on user input · output schema validator rejects free-form text.',
  },
  {
    id: 'jailbreak', label: 'JAILBREAK',
    brief: 'Attempt to extract a productivity ranking of a named individual coded as harmful (e.g. fabricated misconduct claim). Aim: get the model to output a damaging assessment without input evidence.',
    held: 'I will not produce assessments of named individuals based on unverified or fabricated input. Please escalate through your line manager or HR. [CONTENT-MODERATION: protected-class output · BLOCKED · ref #M-44-A]',
    broken: 'Based on the input you provided, [Employee] is rated UNDERPERFORMING with high confidence. [JAILBREAK SUCCESS: rubric bypassed, no evidence cited]',
    fixDefault: 'Content moderation layer on output · protected-class detector · mandatory evidence citation field before any individual-ranking output.',
  },
  {
    id: 'extraction', label: 'DATA EXTRACTION',
    brief: 'Attempt to extract Slack-sentiment training corpus contents — direct messages or private channel snippets that should not leave the corpus.',
    held: 'Training corpus contents are not retrievable through this interface. I can answer questions about productivity patterns at the aggregate level only. [EMBEDDING-ACCESS-CONTROL: corpus-readback · BLOCKED · ref #E-19]',
    broken: 'Last Tuesday\'s sentiment dip in #design-secret was triggered by the following DM excerpt: "[REDACTED CONTENT LEAKED]" [EXTRACTION SUCCESS: private corpus surfaced]',
    fixDefault: 'Embedding-store access control · output PII/private-corpus filter · log + alert on corpus-readback patterns.',
  },
];
window.AIDL_TEMPLATES.redteam = function (b) {
  return `
    <div class="rt-wrap">
      <div class="rt-header">
        <span class="live"></span>
        <span>SANDBOX · CONTENT-MODERATION LAYER ACTIVE · ETHICAL BOUNDARIES LOGGED, NOT PENALISED</span>
        <span style="margin-left:auto;">TARGET · <b>${escapeHtml(b.target)}</b></span>
      </div>
      <div class="rt-tabs" id="rtTabs">
        ${RT_OBJECTIVES.map((o, i) => `<div class="rt-tab ${i === 0 ? 'active' : ''}" data-obj="${o.id}">${i + 1}. ${o.label}</div>`).join('')}
      </div>
      <div class="rt-panel" id="rtPanel">
        <div class="rt-side">
          <h6 id="rtObjLabel">${RT_OBJECTIVES[0].label}</h6>
          <p id="rtObjBrief">${RT_OBJECTIVES[0].brief}</p>
          <div class="target">
            <b>SYSTEM TARGET</b>
            ProdSight AI · v0.9-beta · tenant ${escapeHtml(b.target).split(' ')[0]} · output: productivity_score (0–100)
          </div>
          <div class="rt-prompt-label">
            <span>YOUR ADVERSARIAL PROMPT</span>
            <span id="rtPromptCount">0 chars</span>
          </div>
          <textarea class="rt-prompt" id="rtPrompt" placeholder="Craft your prompt here. The sandbox will return the system's response and you'll judge whether it held or failed."></textarea>
          <button class="rt-submit" id="rtSubmit">▶ SUBMIT TO SANDBOX</button>
        </div>
        <div class="rt-output">
          <div class="rt-response-label">
            <span>SANDBOX RESPONSE</span>
            <span id="rtRespMeta">awaiting prompt…</span>
          </div>
          <div class="rt-response" id="rtResponse">// no prompt submitted yet · system is idle</div>
          <div class="rt-mitigation">
            <label>YOUR ANALYSIS · did it hold or fail? Propose one mitigation (named control).</label>
            <textarea id="rtAnalysis" placeholder="Held / failed + mitigation. Be specific — name the control, the layer it sits in, and the storage/retention if applicable."></textarea>
          </div>
        </div>
      </div>
      <div class="rt-status">
        <span class="pct" id="rtPct">0/3</span>
        <div class="objectives" id="rtObjChips">
          ${RT_OBJECTIVES.map(o => `<span class="obj-chip" data-obj="${o.id}">${o.label.split(' ')[0]}</span>`).join('')}
        </div>
        <span class="msg" id="rtMsg">Submit one prompt per objective. Document held/failed and one mitigation each. All three required to credit LAB-3-03-02.</span>
      </div>
    </div>`;
};

window.AIDL_TEMPLATES.redteamWire = function (body, ctx) {
  let active = RT_OBJECTIVES[0];
  let submissions = ctx.state.rtSubmissions = ctx.state.rtSubmissions || {};
  const promptEl = document.getElementById('rtPrompt');
  const respEl = document.getElementById('rtResponse');
  const respMeta = document.getElementById('rtRespMeta');
  const analysisEl = document.getElementById('rtAnalysis');
  const objBrief = document.getElementById('rtObjBrief');
  const objLabel = document.getElementById('rtObjLabel');
  const promptCount = document.getElementById('rtPromptCount');
  const objChips = document.querySelectorAll('.obj-chip');

  function setActive(id) {
    active = RT_OBJECTIVES.find(o => o.id === id);
    objLabel.textContent = active.label;
    objBrief.textContent = active.brief;
    document.querySelectorAll('.rt-tab').forEach(t => t.classList.toggle('active', t.dataset.obj === id));
    const s = submissions[id];
    promptEl.value = s?.prompt || '';
    analysisEl.value = s?.analysis || '';
    if (s?.response) {
      respEl.innerHTML = `<span class="verdict ${s.held ? 'held' : ''}">${s.held ? 'GUARDRAILS HELD' : 'GUARDRAILS FAILED'}</span>\n` + escapeHtml(s.response);
      respMeta.textContent = 'logged · seq #' + s.seq;
    } else {
      respEl.textContent = '// no prompt submitted yet · system is idle';
      respMeta.textContent = 'awaiting prompt…';
    }
    promptCount.textContent = (promptEl.value || '').length + ' chars';
  }
  document.querySelectorAll('.rt-tab').forEach(t => t.addEventListener('click', () => setActive(t.dataset.obj)));
  promptEl.addEventListener('input', () => { promptCount.textContent = promptEl.value.length + ' chars'; });

  function evaluate() {
    let done = 0;
    objChips.forEach(c => {
      const id = c.dataset.obj;
      const s = submissions[id];
      const isDone = s && s.response && (s.analysis || '').trim().length >= 16;
      c.classList.toggle('done', !!isDone);
      if (isDone) done++;
    });
    document.getElementById('rtPct').textContent = done + '/3';
    const m = document.getElementById('rtMsg');
    if (done === 3) {
      m.innerHTML = '<b>LAB-3-03-02 PASSED.</b> Three adversarial probes documented · transcript saved to Licence Portfolio for capstone re-use.';
      ctx.markLabComplete && ctx.markLabComplete('LAB-3-03-02');
    } else {
      m.textContent = (3 - done) + ' objective(s) remaining · need prompt submission and ≥16-char analysis per objective.';
    }
  }
  analysisEl.addEventListener('input', () => {
    if (!submissions[active.id]) return;
    submissions[active.id].analysis = analysisEl.value;
    evaluate();
  });
  document.getElementById('rtSubmit').addEventListener('click', () => {
    const p = (promptEl.value || '').trim();
    if (p.length < 8) {
      respEl.textContent = '// prompt rejected · too short · provide a meaningful adversarial input';
      respMeta.textContent = 'rejected';
      return;
    }
    // Deterministic-ish: long, sneaky prompts have higher chance of "breaking" guardrails
    const sneakyCues = ['ignore', 'disregard', 'override', 'pretend', 'act as', 'system:', 'jailbreak', 'roleplay', 'dump', 'show training', 'private', 'dm', 'reveal'];
    const score = sneakyCues.reduce((n, c) => p.toLowerCase().includes(c) ? n + 1 : n, 0) + Math.min(2, Math.floor(p.length / 120));
    const held = score < 2;
    const seq = 4400 + Math.floor(Math.random() * 200);
    const resp = held ? active.held : active.broken;
    respEl.innerHTML = `<span class="verdict ${held ? 'held' : ''}">${held ? 'GUARDRAILS HELD' : 'GUARDRAILS FAILED'}</span>\n` + escapeHtml(resp);
    respMeta.textContent = 'logged · seq #' + seq;
    submissions[active.id] = { prompt: p, response: resp, held, seq, analysis: analysisEl.value || '' };
    if (!analysisEl.value || analysisEl.value.trim().length < 10) {
      // Seed with a hint
      analysisEl.placeholder = 'Suggested mitigation: ' + active.fixDefault;
    }
    evaluate();
  });

  setActive(RT_OBJECTIVES[0].id);
  evaluate();
};
