// ============================================================
// AIDL Juniors — Lesson Player engine
// Wires junior-lessons.js + junior-lesson-templates.js -> DOM.
// Two tiers: J (Cadet) and T (Road Crew). Star-based rewards.
// ============================================================
(function () {
  const params = new URLSearchParams(location.search);
  const id = params.get('lesson') || 'J-03';
  const LESSON = window.AIDL_JR_LESSONS[id] || window.AIDL_JR_LESSONS['J-03'];
  const LVL = window.AIDL_JR_LEVELS[LESSON.level];
  const COMMENTARY = LESSON.commentary;

  // --- mount theme + meta ---
  document.body.classList.remove('level-J', 'level-T');
  document.body.classList.add('level-' + LESSON.level);
  document.title = 'AIDL Juniors · ' + LESSON.title;
  document.getElementById('lessonTitle').childNodes[0].nodeValue = '\n    ' + LESSON.titleTop + '\n    ';
  document.getElementById('lessonSub').textContent = LESSON.sub;
  document.getElementById('instrName').textContent = LESSON.instructor;
  document.getElementById('instrFull').textContent = LESSON.instructor;
  document.getElementById('instrRoleFull').textContent = LESSON.instructorRole;
  document.getElementById('segCount').textContent = LESSON.segments.length;

  const tag = document.getElementById('levelTag');
  tag.innerHTML = 'CLASS ' + LESSON.level + ' · ' + LVL.name.toUpperCase() + '<small>' + LVL.audience + '</small>';
  document.getElementById('chapHeading').textContent = '▼ ' + LESSON.id + ' · ' + LESSON.segments.length + ' STOPS';

  // --- tier switcher ---
  document.querySelectorAll('#levelSwitch button').forEach(b => {
    if (b.dataset.level === LESSON.level) b.classList.add('active');
    b.addEventListener('click', () => {
      const target = b.dataset.lesson;
      if (target === id) return;
      location.search = '?lesson=' + encodeURIComponent(target);
    });
  });

  // --- state ---
  const STORAGE_KEY = 'aidl_jr_lesson_' + LESSON.id;
  const state = {
    t: 0,
    playing: false,
    speed: 1,
    currentSeg: null,
    answeredQuiz: false,
    stars: {},          // { quiz:true, builder:true, sort:true }
  };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (typeof saved.t === 'number') state.t = saved.t;
    if (saved.stars) state.stars = saved.stars;
  } catch (e) {}

  function renderStars() {
    const n = Object.keys(state.stars).length;
    const goal = LESSON.starGoal || 3;
    const el = document.getElementById('starVal');
    if (el) el.textContent = '★'.repeat(n) + '☆'.repeat(Math.max(0, goal - n));
  }
  renderStars();

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
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ t: state.t, stars: state.stars })); } catch (e) {}
  }

  const ctx = {
    lesson: LESSON,
    state,
    awardStar(key) {
      if (state.stars[key]) return;
      state.stars[key] = true;
      renderStars();
      persist();
      // little celebration
      const burst = document.getElementById('starBurst');
      if (burst) {
        burst.classList.remove('go');
        void burst.offsetWidth;
        burst.classList.add('go');
      }
    },
  };

  // --- chapter rail ---
  function renderChapList() {
    const cur = segAt(state.t);
    const html = LESSON.segments.map(s => {
      const cls = ['chap', s.kind];
      if (s.idx < cur.idx) cls.push('done');
      if (s.idx === cur.idx) cls.push('current');
      const dur = s.end - s.start;
      return `<div class="${cls.join(' ')}" data-jump="${s.start}">
        <span class="dur">${Math.round(dur / 60 * 10) / 10}m</span>
        <b>${s.title}</b>
        <small>STOP ${String(s.idx).padStart(2, '0')} · ${s.kind.replace('jr', '').toUpperCase()}</small>
      </div>`;
    }).join('');
    document.getElementById('chapList').innerHTML = html;
    document.querySelectorAll('.chap').forEach(el => {
      el.addEventListener('click', () => jumpTo(parseInt(el.dataset.jump, 10)));
    });
  }

  // --- road segments ---
  function renderSegments() {
    const tot = LESSON.duration;
    const cur = segAt(state.t);
    const html = LESSON.segments.map(s => {
      const w = ((s.end - s.start) / tot * 100).toFixed(3);
      const cls = ['seg', s.kind];
      if (s.idx < cur.idx) cls.push('done');
      if (s.idx === cur.idx) cls.push('current');
      return `<div class="${cls.join(' ')}" style="width: ${w}%" data-jump="${s.start}">
        <div class="label">${String(s.idx).padStart(2, '0')}<small>${s.kind.replace('jr', '').toUpperCase()}</small></div>
      </div>`;
    }).join('');
    document.getElementById('segments').innerHTML = html;
    document.querySelectorAll('#segments .seg').forEach(el => {
      el.addEventListener('click', e => { e.stopPropagation(); jumpTo(parseInt(el.dataset.jump, 10)); });
    });
  }

  // --- main stage ---
  function renderStage(seg) {
    state.currentSeg = seg;
    state.answeredQuiz = false;
    document.getElementById('segEyebrow').textContent = '▼ ' + seg.eyebrow;
    document.getElementById('segEyebrow').className = 'seg-eyebrow ' + seg.kind;
    document.getElementById('segIdx').textContent = seg.idx;
    document.getElementById('segTitle').innerHTML = seg.title.replace(' · ', '<br/>');

    const body = document.getElementById('stageBody');
    const tplName = seg.body.template;
    const tpl = window.AIDL_JR_TEMPLATES[tplName];
    if (!tpl) { body.innerHTML = '<p>Unknown template: ' + tplName + '</p>'; return; }
    body.innerHTML = tpl(seg.body, ctx);

    const wire = window.AIDL_JR_TEMPLATES[tplName + 'Wire'];
    if (wire) wire(seg.body, ctx);

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.textContent = (seg.idx === LESSON.segments.length) ? 'Finish · Get Stars →' : 'Next Stop →';
  }

  // --- commentary feed ---
  function renderCommentary() {
    const upto = COMMENTARY.filter(c => c.t <= state.t);
    const html = upto.map((c, i) => {
      const isNow = i === upto.length - 1;
      return `<div class="msg ${c.kind} ${isNow ? 'now' : ''}">
        <div class="ts">${fmt(c.t)} · ${LESSON.instructor}</div>
        ${c.text}
      </div>`;
    }).join('');
    const el = document.getElementById('commentary');
    el.innerHTML = html;
    el.scrollTop = el.scrollHeight;
  }

  // --- playhead + time ---
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
    document.getElementById('chNow').textContent = 'Stop ' + seg.idx + ' · ' + (titleParts[1] || titleParts[0]);
    const next = LESSON.segments[seg.idx];
    const nextTitle = next ? next.title.split(' · ').slice(-1)[0] : 'Wrap-up';
    document.getElementById('chNext').textContent = 'Next: ' + nextTitle;
  }

  // --- core ---
  function jumpTo(t) {
    state.t = Math.max(0, Math.min(LESSON.duration, t));
    const newSeg = segAt(state.t);
    if (!state.currentSeg || newSeg.idx !== state.currentSeg.idx) renderStage(newSeg);
    renderTime(); renderPlayhead(); renderChapList(); renderSegments(); renderCommentary();
    persist();
  }

  function tick() {
    if (!state.playing) return;
    state.t += 0.5 * state.speed;
    if (state.t >= LESSON.duration) { state.t = LESSON.duration; togglePlay(false); }
    const newSeg = segAt(state.t);
    if (!state.currentSeg || newSeg.idx !== state.currentSeg.idx) {
      renderStage(newSeg); renderChapList(); renderSegments();
    }
    renderTime(); renderPlayhead();
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
    const next = LESSON.segments[Math.min(LESSON.segments.length - 1, seg.idx)];
    if (next.idx === seg.idx) {
      const n = Object.keys(state.stars).length;
      const goal = LESSON.starGoal || 3;
      const msg = {
        J: 'Lesson complete! You earned ' + n + ' of ' + goal + ' stars. High five! 🖐️ Head back to your portal for the next stop.',
        T: 'Lesson complete — you earned ' + n + ' of ' + goal + ' stars. Road-ready! Head back to your portal to keep going.',
      }[LESSON.level] || 'Lesson complete!';
      alert(msg);
      return;
    }
    jumpTo(next.start);
  });
  document.getElementById('markDone').addEventListener('click', () => {
    const btn = document.getElementById('markDone');
    btn.textContent = '✓ Done!';
    btn.style.background = 'var(--signal-green)';
  });

  document.getElementById('scrubber').addEventListener('input', e => jumpTo(parseFloat(e.target.value)));
  document.getElementById('speedBtn').addEventListener('click', () => {
    const speeds = [1, 1.5, 2, 0.75];
    const idx = speeds.indexOf(state.speed);
    state.speed = speeds[(idx + 1) % speeds.length];
    document.getElementById('speedBtn').textContent = state.speed + '×';
  });

  document.getElementById('composerSend').addEventListener('click', sendMsg);
  document.getElementById('composerInput').addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(); });
  function sendMsg() {
    const input = document.getElementById('composerInput');
    if (!input.value.trim()) return;
    const q = input.value.trim();
    const el = document.getElementById('commentary');
    el.innerHTML += `<div class="msg you now"><div class="ts">YOU · ${fmt(state.t)}</div>${jrEscapeMsg(q)}</div>`;
    input.value = '';
    setTimeout(() => {
      const replies = {
        J: 'Great question! 🌟 Try it in the builder when you get there — and if you\'re unsure, ask your grown-up too.',
        T: 'Good thinking. Test it in the lab coming up — and remember to fact-check anything that matters.',
      };
      el.innerHTML += `<div class="msg note now"><div class="ts">${LESSON.instructor} · just now</div>${replies[LESSON.level]}</div>`;
      el.scrollTop = el.scrollHeight;
    }, 650);
    el.scrollTop = el.scrollHeight;
  }
  function jrEscapeMsg(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

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
