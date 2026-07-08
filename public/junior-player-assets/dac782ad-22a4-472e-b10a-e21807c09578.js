// ============================================================
// AIDL Juniors — Segment template renderers
// window.AIDL_JR_TEMPLATES[name](body, ctx) -> html
// ============================================================
window.AIDL_JR_TEMPLATES = {};

function jrEscape(s) {
  return (s == null ? '' : String(s))
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ------------------------------------------------------------
// CONCEPT — big friendly sign + text + examples + buddy tip
// ------------------------------------------------------------
window.AIDL_JR_TEMPLATES.jrconcept = function (b) {
  const signCls = 'big-sign ' + b.sign.kind;
  const signHtml = `
    <div class="big-sign-wrap">
      <div class="${signCls}"><span>${jrEscape(b.sign.glyph)}</span></div>
      <div class="sign-post"></div>
    </div>`;
  const examplesHtml = b.examples ? `
    <div class="examples">
      <h5>${jrEscape(b.examples.title)}</h5>
      <ul>
        ${b.examples.items.map(it => `<li class="${it.kind}">${it.text}</li>`).join('')}
      </ul>
    </div>` : '';
  const calloutHtml = b.callout ? `
    <div class="callout">
      <div class="ic ${b.callout.icRed ? 'red' : ''}">${jrEscape(b.callout.icIcon || '★')}</div>
      <div>
        <b>${jrEscape(b.callout.title)}</b>
        <p>${b.callout.body}</p>
      </div>
    </div>` : '';
  return `
    <div class="concept">
      ${signHtml}
      <div class="concept-body">
        <div class="sub">${jrEscape(b.sub || '')}</div>
        <h3>${jrEscape(b.heading || '')}</h3>
        ${(b.paragraphs || []).map(p => `<p>${p}</p>`).join('')}
        ${examplesHtml}
        ${calloutHtml}
      </div>
    </div>`;
};

// ------------------------------------------------------------
// QUIZ — multiple choice, kid tone
// ------------------------------------------------------------
window.AIDL_JR_TEMPLATES.jrquiz = function (b) {
  return `
    <div class="quiz-block">
      <div class="quiz-tag">★ QUICK CHECK · TAP AN ANSWER</div>
      <div class="quiz-q">${b.question}</div>
      <div class="quiz-opts" id="quizOpts">
        ${b.options.map((o, i) => `
          <div class="quiz-opt" data-i="${i}">
            <div class="letter">${jrEscape(o.letter)}</div>
            <div>${o.text}</div>
            <div class="mark"></div>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quizFb"></div>
    </div>`;
};

window.AIDL_JR_TEMPLATES.jrquizWire = function (body, ctx) {
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
      fb.innerHTML = '<b>' + (opt.right ? 'YES! GREEN LIGHT 🟢' : 'OOPS — LET\'S BACK UP 🟡') + '</b>' + (opt.right ? q.rightFeedback : q.wrongFeedback);
      if (opt.right) ctx.awardStar('quiz');
    });
  });
};

// ------------------------------------------------------------
// JRBUILDER — kid prompt builder
//   Cadet (J): CLEAR / KIND / SAFE (3 boxes)
//   Crew  (T): PERSONA / REQUEST / OUTPUT / CHECK (4 boxes)
// ------------------------------------------------------------
const JR_BUILDER_FIELDS = {
  J: [
    { key: 'clear', letter: '1', name: 'CLEAR', hint: 'Say exactly what you want',
      ph: 'Write a short, funny poem about my pet turtle, Speedy.' },
    { key: 'kind', letter: '2', name: 'KIND', hint: 'Ask nicely — be friendly',
      ph: 'Please make it silly and cheerful — nothing mean.' },
    { key: 'safe', letter: '3', name: 'SAFE', hint: 'No private stuff',
      ph: 'Don\'t use my full name or where I live. Just say "my turtle".' },
  ],
  T: [
    { key: 'persona', letter: 'P', name: 'PERSONA', hint: 'Who should the AI be?',
      ph: 'Act as a friendly science tutor for a 13-year-old.' },
    { key: 'request', letter: 'R', name: 'REQUEST', hint: 'The task — use a verb',
      ph: 'Explain the 4 stages of the water cycle so I can revise for a quiz.' },
    { key: 'output', letter: 'O', name: 'OUTPUT', hint: 'Shape: length, format, tone',
      ph: '4 short bullet points, plain English, then one quiz question to test me.' },
    { key: 'check', letter: '✓', name: 'CHECK', hint: 'How will you fact-check it?',
      ph: 'I\'ll compare it with my textbook and a trusted science website before trusting it.' },
  ],
};

window.AIDL_JR_TEMPLATES.jrbuilder = function (b, ctx) {
  const lvl = ctx.lesson.level;
  const fields = JR_BUILDER_FIELDS[lvl] || JR_BUILDER_FIELDS.J;
  const goalWords = lvl === 'T' ? 8 : 5;
  return `
    <div class="prep-builder">
      <div class="prep-scenario">
        <b>YOUR MISSION</b>
        <p>${jrEscape(b.scenario)}</p>
      </div>
      <div class="prep-fields" id="prepFields" data-goal="${goalWords}">
        ${fields.map(f => `
          <div class="prep-field" data-field="${f.key}">
            <div class="prep-field-head">
              <div class="prep-letter">${jrEscape(f.letter)}</div>
              <b>${jrEscape(f.name)}</b>
              <small>${jrEscape(f.hint)}</small>
              <span class="check">·</span>
            </div>
            <textarea placeholder="${jrEscape(f.ph)}"></textarea>
          </div>
        `).join('')}
      </div>
      <div class="prep-status">
        <span class="pct" id="prepPct">0%</span>
        <span class="msg" id="prepMsg">Fill every box with at least a few words. I\'ll check them and give you a star!</span>
      </div>
    </div>`;
};

window.AIDL_JR_TEMPLATES.jrbuilderWire = function (body, ctx) {
  const wrap = document.getElementById('prepFields');
  const goal = parseInt(wrap.dataset.goal, 10) || 5;
  const fields = document.querySelectorAll('.prep-field');
  const safeKey = ctx.lesson.level === 'T' ? 'check' : 'safe';
  function safeCue(s) {
    const lc = s.toLowerCase();
    const cues = ["don't", 'do not', "don'", 'no ', 'not ', 'never', 'private', 'without', 'check', 'verify', 'source', 'compare', 'trusted', 'double'];
    return cues.some(c => lc.includes(c));
  }
  function evaluate() {
    let pass = 0; const total = fields.length; const msgs = [];
    fields.forEach(f => {
      const ta = f.querySelector('textarea');
      const v = (ta.value || '').trim();
      const words = v.split(/\s+/).filter(Boolean).length;
      const fld = f.dataset.field;
      let ok = words >= goal;
      if (ok && fld === safeKey) ok = safeCue(v);
      f.querySelector('.check').textContent = ok ? '✓' : '·';
      f.querySelector('.check').classList.toggle('ok', ok);
      if (ok) pass++;
      else if (words === 0) msgs.push(f.querySelector('b').textContent + ' is empty');
      else if (words < goal) msgs.push(f.querySelector('b').textContent + ' needs a bit more');
      else if (fld === safeKey) msgs.push(f.querySelector('b').textContent + ' — add how you\'ll keep it safe / check it');
    });
    const pct = Math.round(pass / total * 100);
    document.getElementById('prepPct').textContent = pct + '%';
    const m = document.getElementById('prepMsg');
    if (pass === total) {
      m.innerHTML = '<b style="color: var(--accent);">AWESOME — every box is filled! 🌟</b> Star earned and saved. You can keep tweaking or drive on.';
      ctx.awardStar('builder');
    } else {
      m.textContent = msgs.slice(0, 3).join(' · ') + '.';
    }
  }
  fields.forEach(f => f.querySelector('textarea').addEventListener('input', evaluate));
  evaluate();
};

// ------------------------------------------------------------
// JRSORT — tap-to-sort game (safety for J, fact-check for T)
// ------------------------------------------------------------
const JR_SORT_ITEMS = {
  J: {
    greenLabel: 'OK TO SHARE 🟢',
    redLabel: 'KEEP PRIVATE 🔴',
    intro: 'GREEN = fine to type to an AI. RED = private, keep it to yourself (or ask a grown-up).',
    items: [
      { text: 'A made-up story idea', answer: 'green' },
      { text: 'My favourite colour', answer: 'green' },
      { text: 'My full home address', answer: 'red' },
      { text: 'A maths question from class', answer: 'green' },
      { text: 'My password', answer: 'red' },
      { text: 'My full real name', answer: 'red' },
      { text: 'A drawing idea for a dragon', answer: 'green' },
      { text: 'A photo of my face', answer: 'red' },
    ],
  },
  T: {
    greenLabel: 'FINE AS-IS 🟢',
    redLabel: 'MUST FACT-CHECK 🔴',
    intro: 'GREEN = safe to use straight away. RED = verify with a trusted source first.',
    items: [
      { text: 'A brainstorm of essay topic ideas', answer: 'green' },
      { text: '"The population of Brazil is 214,300,102."', answer: 'red' },
      { text: 'A reworded, clearer version of my own sentence', answer: 'green' },
      { text: 'A quote it says is by Einstein', answer: 'red' },
      { text: 'A list of pros and cons to think about', answer: 'green' },
      { text: 'The date a recent law was passed', answer: 'red' },
      { text: 'A study plan / revision schedule', answer: 'green' },
      { text: 'A "scientific study" with no link', answer: 'red' },
    ],
  },
};

window.AIDL_JR_TEMPLATES.jrsort = function (b, ctx) {
  const set = JR_SORT_ITEMS[ctx.lesson.level] || JR_SORT_ITEMS.J;
  return `
    <div class="sort-wrap">
      <div class="sort-intro">${jrEscape(b.prompt)} <span class="sort-key">${jrEscape(set.intro)}</span></div>
      <div class="sort-stage">
        <div class="sort-bin green" data-bin="green">
          <div class="bin-head">${jrEscape(set.greenLabel)}</div>
          <div class="bin-drop" id="binGreen"></div>
        </div>
        <div class="sort-pool" id="sortPool">
          ${set.items.map((it, i) => `<div class="sort-card" data-i="${i}" data-ans="${it.answer}">${jrEscape(it.text)}</div>`).join('')}
        </div>
        <div class="sort-bin red" data-bin="red">
          <div class="bin-head">${jrEscape(set.redLabel)}</div>
          <div class="bin-drop" id="binRed"></div>
        </div>
      </div>
      <div class="sort-status">
        <span class="pct" id="sortPct">0 / ${set.items.length}</span>
        <span class="msg" id="sortMsg">Tap a card, then tap GREEN or RED to sort it. Get them all right for a star!</span>
      </div>
    </div>`;
};

window.AIDL_JR_TEMPLATES.jrsortWire = function (body, ctx) {
  const set = JR_SORT_ITEMS[ctx.lesson.level] || JR_SORT_ITEMS.J;
  const total = set.items.length;
  let selected = null;
  const pool = document.getElementById('sortPool');
  const bins = { green: document.getElementById('binGreen'), red: document.getElementById('binRed') };
  const placed = {};

  function select(card) {
    if (card.classList.contains('locked')) return;
    if (selected === card) { card.classList.remove('picked'); selected = null; return; }
    if (selected) selected.classList.remove('picked');
    selected = card;
    card.classList.add('picked');
  }
  function evaluate() {
    let correct = 0;
    document.querySelectorAll('.sort-card.locked').forEach(c => {
      if (c.dataset.ans === c.dataset.binned) correct++;
    });
    const done = Object.keys(placed).length;
    document.getElementById('sortPct').textContent = correct + ' / ' + total;
    const m = document.getElementById('sortMsg');
    if (done < total) {
      m.textContent = (total - done) + ' card(s) left to sort. Tap a card, then a bin.';
    } else if (correct === total) {
      m.innerHTML = '<b style="color: var(--accent);">PERFECT SORT! 🌟</b> Every card in the right bin. Star earned!';
      ctx.awardStar('sort');
    } else {
      m.innerHTML = '<b>Close! ' + correct + '/' + total + ' right.</b> Red cards glow — tap one to send it back and try again.';
    }
  }
  function place(card, bin) {
    card.dataset.binned = bin;
    card.classList.remove('picked');
    card.classList.add('locked', 'in-' + bin);
    const right = card.dataset.ans === bin;
    card.classList.toggle('ok', right);
    card.classList.toggle('bad', !right);
    bins[bin].appendChild(card);
    placed[card.dataset.i] = bin;
    selected = null;
    evaluate();
  }
  function unplace(card) {
    delete placed[card.dataset.i];
    card.classList.remove('locked', 'in-green', 'in-red', 'ok', 'bad');
    delete card.dataset.binned;
    pool.appendChild(card);
    evaluate();
  }
  pool.addEventListener('click', e => {
    const card = e.target.closest('.sort-card');
    if (card) select(card);
  });
  Object.keys(bins).forEach(bin => {
    document.querySelector('.sort-bin[data-bin="' + bin + '"]').addEventListener('click', () => {
      if (selected) place(selected, bin);
    });
    bins[bin].addEventListener('click', e => {
      const card = e.target.closest('.sort-card.bad');
      if (card) { e.stopPropagation(); unplace(card); }
    });
  });
  evaluate();
};

// ------------------------------------------------------------
// REFLECT — kid wrap-up + star tally
// ------------------------------------------------------------
window.AIDL_JR_TEMPLATES.jrreflect = function (b, ctx) {
  const L = ctx.lesson;
  const learned = {
    J: 'That a <b>prompt</b> is just your ask — and the 3 Magic Words to make it great: <b>CLEAR, KIND, SAFE</b>. You even built your own!',
    T: 'The <b>PRO method</b> (Persona · Request · Output) for sharp prompts — and the pro habit of <b>fact-checking</b> anything that matters.',
  }[L.level];
  const take = {
    J: 'Before every ask, whisper the 3 Magic Words: <b>Clear, Kind, Safe</b>. And if an answer feels weird — tell a grown-up. Always OK to ask!',
    T: 'Treat AI like a smart friend who sometimes guesses. Use it for ideas and drafts — then <b>verify the facts yourself</b> before you trust them.',
  }[L.level];
  const next = {
    J: '<b>J-04 · Maker Lane.</b> Build your own quiz game with Buddy. Bring your best ideas!',
    T: '<b>T-03 · Build Your Own Helper Bot.</b> Design a bot that does one real job well.',
  }[L.level];
  const starsEarned = Object.keys(ctx.state.stars || {}).length;
  const goal = L.starGoal || 3;
  const starRow = Array.from({ length: goal }, (_, i) =>
    `<span class="star ${i < starsEarned ? 'lit' : ''}">★</span>`).join('');
  return `
    <div class="reflect-wrap">
      <div class="star-banner">
        <div class="star-row">${starRow}</div>
        <div class="star-count"><b id="reflectStars">${starsEarned}</b> / ${goal} stars this lesson</div>
      </div>
      <div class="reflect-grid">
        <div class="reflect-card dark">
          <h5 style="color: var(--accent);">▼ YOU LEARNED</h5>
          <p>${learned}</p>
        </div>
        <div class="reflect-card">
          <h5>▼ TAKE WITH YOU</h5>
          <p>${take}</p>
        </div>
        <div class="reflect-card">
          <h5>▼ NEXT STOP</h5>
          <p>${next}</p>
        </div>
        <div class="reflect-card dark">
          <h5 style="color: var(--accent);">▼ SHOW A GROWN-UP</h5>
          <p>Show someone the prompt you built today and teach them the 3 Magic Words (or the PRO method). Teaching it is the best way to remember it!</p>
        </div>
      </div>
    </div>`;
};

window.AIDL_JR_TEMPLATES.jrreflectWire = function (body, ctx) {
  const el = document.getElementById('reflectStars');
  if (el) el.textContent = Object.keys(ctx.state.stars || {}).length;
};
