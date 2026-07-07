// ============================================================
// AIDL Lesson Player — engine
// Wires data (lessons.js) + templates (lesson-templates.js)
// into the page DOM.
// ============================================================
(function () {
  // --- pick lesson by ?lesson=ID, default Operator's Licence ---
  const params = new URLSearchParams(location.search);
  const id = params.get('lesson') || 'M-2-04';
  const LESSON = window.AIDL_LESSONS[id] || window.AIDL_LESSONS['M-2-04'];
  const LVL = window.AIDL_LEVELS[LESSON.level];
  const COMMENTARY = LESSON.commentary;

  // --- mount level theme + meta ---
  document.body.classList.remove('level-L', 'level-C', 'level-A');
  document.body.classList.add('level-' + LESSON.level);
  document.title = 'AIDL · ' + LESSON.title;
  document.getElementById('lessonTitle').childNodes[0].nodeValue = '\n    ' + LESSON.titleTop + '\n    ';
  document.getElementById('lessonSub').textContent = LESSON.sub;
  document.getElementById('instrName').textContent = LESSON.instructor;
  document.getElementById('instrFull').textContent = LESSON.instructor;
  document.getElementById('instrRoleFull').textContent = LESSON.instructorRole;
  document.getElementById('passMarkMeta').textContent = 'PASS MARK ' + LESSON.passMark + '%';
  document.getElementById('segCount').textContent = LESSON.segments.length;

  const tag = document.getElementById('levelTag');
  tag.innerHTML = 'LEVEL ' + LESSON.level + ' · ' + LVL.name.split("'")[0].toUpperCase() + '<small>' + LVL.audience + '</small>';

  document.getElementById('chapHeading').textContent = '▼ MODULE ' + LESSON.id + ' · ' + LESSON.segments.length + ' SEGMENTS';

  // --- level switcher ---
  document.querySelectorAll('#levelSwitch button').forEach(b => {
    if (b.dataset.level === LESSON.level) b.classList.add('active');
    b.addEventListener('click', () => {
      const target = b.dataset.lesson;
      if (target === id) return;
      location.search = '?lesson=' + encodeURIComponent(target);
    });
  });

  // --- state ---
  const STORAGE_KEY = 'aidl_lesson_' + LESSON.id;
  const state = {
    t: 0,
    playing: false,
    speed: 1,
    currentSeg: null,
    answeredQuiz: false,
    aupScrolled: false,
    attested: false,
    rtSubmissions: {},
    completedLabs: {},
    xp: { L: 80, C: 220, A: 410 }[LESSON.level] || 0,
  };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (typeof saved.t === 'number') state.t = saved.t;
    if (saved.xp) state.xp = saved.xp;
  } catch (e) {}
  document.getElementById('xpVal').textContent = '+' + state.xp;

  // --- helpers ---
  function fmt(s) {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const ss = Math.floor(s % 60).toString().padStart(2, '0');
    return m + ':' + ss;
  }
  function segAt(t) {
    return LESSON.segments.find(s => t >= s.start && t < s.end) || LESSON.segments[LESSON.segments.length - 1];
  }
  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ t: state.t, xp: state.xp })); } catch (e) {}
  }

  const ctx = {
    lesson: LESSON,
    state,
    awardXp(n) {
      state.xp += n;
      document.getElementById('xpVal').textContent = '+' + state.xp;
      persist();
    },
    markLabComplete(labId) {
      state.completedLabs[labId] = true;
    },
  };

  // --- render: chapter rail ---
  function renderChapList() {
    const cur = segAt(state.t);
    const html = LESSON.segments.map(s => {
      const cls = ['chap'];
      cls.push(s.kind);
      if (s.idx < cur.idx) cls.push('done');
      if (s.idx === cur.idx) cls.push('current');
      const dur = s.end - s.start;
      return `<div class="${cls.join(' ')}" data-jump="${s.start}">
        <span class="dur">${Math.round(dur / 60 * 10) / 10}m</span>
        <b>${s.title}</b>
        <small>SEG ${String(s.idx).padStart(2, '0')} · ${s.kind.toUpperCase()}</small>
      </div>`;
    }).join('');
    document.getElementById('chapList').innerHTML = html;
    document.querySelectorAll('.chap').forEach(el => {
      el.addEventListener('click', () => jumpTo(parseInt(el.dataset.jump, 10)));
    });
  }

  // --- render: road segments ---
  function renderSegments() {
    const tot = LESSON.duration;
    const cur = segAt(state.t);
    const html = LESSON.segments.map(s => {
      const w = ((s.end - s.start) / tot * 100).toFixed(3);
      const cls = ['seg'];
      cls.push(s.kind);
      if (s.idx < cur.idx) cls.push('done');
      if (s.idx === cur.idx) cls.push('current');
      return `<div class="${cls.join(' ')}" style="width: ${w}%" data-jump="${s.start}">
        <div class="label">CH ${String(s.idx).padStart(2, '0')}<small>${s.kind.toUpperCase()}</small></div>
      </div>`;
    }).join('');
    document.getElementById('segments').innerHTML = html;
    document.querySelectorAll('#segments .seg').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        jumpTo(parseInt(el.dataset.jump, 10));
      });
    });
  }

  // --- render: main stage ---
  function renderStage(seg) {
    state.currentSeg = seg;
    state.answeredQuiz = false;
    document.getElementById('segEyebrow').textContent = '▼ ' + seg.eyebrow;
    document.getElementById('segEyebrow').className = 'seg-eyebrow ' + seg.kind;
    document.getElementById('segIdx').textContent = seg.idx;
    document.getElementById('segTitle').innerHTML = seg.title.replace(' · ', '<br/>');

    const body = document.getElementById('stageBody');
    const tplName = seg.body.template;
    const tpl = window.AIDL_TEMPLATES[tplName];
    if (!tpl) {
      body.innerHTML = '<p>Unknown template: ' + tplName + '</p>';
      return;
    }
    body.innerHTML = tpl(seg.body, ctx);

    // template-specific wiring
    const wire = window.AIDL_TEMPLATES[tplName + 'Wire'];
    if (wire) wire(seg.body, ctx);

    // next-button label
    const nextBtn = document.getElementById('nextBtn');
    if (seg.idx === LESSON.segments.length) {
      nextBtn.textContent = 'Finish Lesson →';
    } else if (tplName === 'attestation') {
      nextBtn.textContent = 'Continue → after attest';
    } else if (tplName === 'aupread') {
      nextBtn.textContent = 'Continue → after scroll';
    } else {
      nextBtn.textContent = 'Continue →';
    }
  }

  // --- render: commentary feed ---
  function renderCommentary() {
    const upto = COMMENTARY.filter(c => c.t <= state.t);
    const html = upto.map((c, i) => {
      const isNow = i === upto.length - 1;
      return `<div class="msg ${c.kind} ${isNow ? 'now' : ''}">
        <div class="ts">${fmt(c.t)} · ${c.kind.toUpperCase()}</div>
        ${c.text}
      </div>`;
    }).join('');
    const el = document.getElementById('commentary');
    el.innerHTML = html;
    el.scrollTop = el.scrollHeight;
  }

  // --- render: playhead + time ---
  function renderPlayhead() {
    const stage = document.getElementById('roadStage');
    const w = stage.clientWidth;
    const ratio = state.t / LESSON.duration;
    document.getElementById('playhead').style.left = (ratio * w) + 'px';
  }
  function renderTime() {
    document.getElementById('tCur').textContent = fmt(state.t);
    document.getElementById('tTot').textContent = fmt(LESSON.duration);
    const pct = Math.round(state.t / LESSON.duration * 100);
    document.getElementById('topPct').textContent = pct;
    document.getElementById('topBar').style.width = pct + '%';
    const sc = document.getElementById('scrubber');
    sc.max = LESSON.duration;
    sc.value = state.t;

    const seg = segAt(state.t);
    const titleParts = seg.title.split(' · ');
    document.getElementById('chNow').textContent = 'Ch. ' + seg.idx + ' · ' + (titleParts[1] || titleParts[0]);
    const next = LESSON.segments[seg.idx]; // idx is 1-based, next is at array index = idx
    const nextTitle = next ? next.title.split(' · ').slice(-1)[0] : 'Wrap-up';
    document.getElementById('chNext').textContent = 'Next: ' + nextTitle;
  }

  // --- core ---
  function jumpTo(t) {
    state.t = Math.max(0, Math.min(LESSON.duration, t));
    const newSeg = segAt(state.t);
    if (!state.currentSeg || newSeg.idx !== state.currentSeg.idx) {
      renderStage(newSeg);
    }
    renderTime();
    renderPlayhead();
    renderChapList();
    renderSegments();
    renderCommentary();
    persist();
  }

  function tick() {
    if (!state.playing) return;
    state.t += 0.5 * state.speed;
    if (state.t >= LESSON.duration) {
      state.t = LESSON.duration;
      togglePlay(false);
    }
    const newSeg = segAt(state.t);
    if (!state.currentSeg || newSeg.idx !== state.currentSeg.idx) {
      renderStage(newSeg);
      renderChapList();
      renderSegments();
    }
    renderTime();
    renderPlayhead();
    if (Math.floor(state.t * 2) % 4 === 0) renderCommentary();
    persist();
  }

  function togglePlay(force) {
    state.playing = (force === undefined) ? !state.playing : force;
    document.getElementById('playIco').innerHTML = state.playing
      ? '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>'
      : '<path d="M8 5v14l11-7z"/>';
  }

  // --- events ---
  document.getElementById('playBtn').addEventListener('click', () => togglePlay());
  document.getElementById('prevBtn').addEventListener('click', () => {
    const seg = segAt(state.t);
    const prev = LESSON.segments[Math.max(0, seg.idx - 2)];
    jumpTo(prev.start);
  });
  document.getElementById('nextStepBtn').addEventListener('click', () => {
    const seg = segAt(state.t);
    const next = LESSON.segments[Math.min(LESSON.segments.length - 1, seg.idx)];
    jumpTo(next.start);
  });
  document.getElementById('nextBtn').addEventListener('click', () => {
    const seg = segAt(state.t);
    // Gate: aupread requires scroll complete
    if (seg.body.template === 'aupread' && !state.aupScrolled) {
      const lock = document.getElementById('aupLock');
      if (lock) {
        lock.style.animation = 'none';
        lock.offsetHeight;
        lock.style.animation = 'pulse 0.4s 3';
      }
      return;
    }
    // Gate: attestation requires signed
    if (seg.body.template === 'attestation' && !state.attested) {
      const submit = document.getElementById('attestSubmit');
      if (submit) {
        submit.style.animation = 'none';
        submit.offsetHeight;
        submit.style.animation = 'pulse 0.4s 3';
      }
      return;
    }
    const next = LESSON.segments[Math.min(LESSON.segments.length - 1, seg.idx)];
    if (next.idx === seg.idx) {
      const msg = {
        L: "M-1-03 complete. Learner's Permit progress saved — return to portal to continue.",
        C: "M-2-04 complete. AUP attestation written to compliance ledger. Operator's Licence path unlocked.",
        A: "M-3-03 complete. Risk register + red-team transcript saved to Licence Portfolio for M-3-CAP re-use.",
      }[LESSON.level] || 'Lesson complete.';
      alert(msg);
      return;
    }
    jumpTo(next.start);
  });
  document.getElementById('markDone').addEventListener('click', () => {
    const btn = document.getElementById('markDone');
    btn.textContent = '✓ Marked Complete';
    btn.style.background = 'var(--signal-green)';
  });

  document.getElementById('scrubber').addEventListener('input', e => jumpTo(parseFloat(e.target.value)));

  document.getElementById('speedBtn').addEventListener('click', () => {
    const speeds = [1, 1.5, 2, 0.75];
    const idx = speeds.indexOf(state.speed);
    state.speed = speeds[(idx + 1) % speeds.length];
    document.getElementById('speedBtn').textContent = state.speed + '×';
  });

  document.getElementById('composerSend').addEventListener('click', () => {
    const input = document.getElementById('composerInput');
    if (!input.value.trim()) return;
    const q = input.value.trim();
    const el = document.getElementById('commentary');
    el.innerHTML += `<div class="msg" style="border-left-color: var(--sky); margin-left: auto; max-width: 90%; text-align: right;"><div class="ts">YOU · ${fmt(state.t)}</div>${q}</div>`;
    input.value = '';
    setTimeout(() => {
      const replies = {
        L: 'Good question. Pause anytime — try it in the PREP Builder when you\'re back at your dashboard.',
        C: 'Logged. If this is a policy question, refer to §' + (Math.floor(Math.random() * 6) + 1) + ' of the AUP. Otherwise, escalate to your Governance contact via portal.',
        A: 'Noted. Sandbox transcript is logged for curriculum analytics. If this is a capstone question, save it — peer reviewers will ask about exactly this kind of edge case.',
      };
      el.innerHTML += `<div class="msg note now"><div class="ts">${LESSON.instructor} · just now</div>${replies[LESSON.level]}</div>`;
      el.scrollTop = el.scrollHeight;
    }, 700);
    el.scrollTop = el.scrollHeight;
  });

  // keyboard
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    else if (e.code === 'ArrowRight') jumpTo(state.t + 10);
    else if (e.code === 'ArrowLeft') jumpTo(state.t - 10);
  });

  window.addEventListener('resize', renderPlayhead);

  // --- init ---
  renderChapList();
  renderSegments();
  renderStage(segAt(state.t));
  renderTime();
  renderCommentary();
  setTimeout(renderPlayhead, 30);
  setInterval(tick, 500);
})();
