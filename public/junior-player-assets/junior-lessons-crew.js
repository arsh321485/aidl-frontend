// ============================================================
// AIDL Juniors — ROAD CREW LESSON PACK · Class T · Ages 12–16
// Seven lessons, one per route stop. Instructor: CO-PILOT.
// Registered on window.AIDL_JR_LESSONS (see junior-lessons.js).
// ============================================================

// ------------------------------------------------------------
// T-01 · HOW AI THINKS
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['T-01'] = {
  id: 'T-01', level: 'T', next: 'T-02',
  title: 'T-01 · How AI Thinks',
  titleTop: 'T-01 · HOW AI THINKS',
  sub: 'ROAD CREW · AGES 12–16 · WEEK 1 · 60 MIN · EARN 2 STARS',
  duration: 3600,
  instructor: 'CO-PILOT',
  instructorRole: 'YOUR AI CO-PILOT · CLASS T · ROAD CREW',
  starGoal: 2,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 420,
      title: 'BRIEFING · UNDER THE HOOD',
      eyebrow: 'STOP 01 · BRIEFING',
      body: {
        template: 'jrconcept',
        sign: { kind: 'rect', glyph: 'START →' },
        heading: 'Look under the hood',
        sub: 'the best drivers know how the engine works',
        paragraphs: [
          'Welcome to Road Crew. You\'ve used AI before — now you\'ll understand <strong>how it actually works</strong>. That knowledge is what separates sharp drivers from passengers.',
          'Spoiler: AI doesn\'t "think" like you. It\'s a <strong>prediction machine</strong> — and once you get that, everything about its strengths and failures makes sense.',
        ],
        examples: {
          title: 'By the end you\'ll be able to',
          items: [
            { kind: 'good', text: 'Explain what an LLM actually does' },
            { kind: 'good', text: 'Say why AI can be confidently wrong' },
            { kind: 'good', text: 'Bust the most common AI myths' },
          ]
        },
        callout: { title: 'Independent mode', body: 'You\'ve got this solo — the road below saves your seat. Come and go as you like.' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 420, end: 1080,
      title: 'PREDICTION MACHINES',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: 'NEXT WORD' },
        heading: 'It predicts, it doesn\'t know',
        sub: 'the one idea that explains everything',
        paragraphs: [
          'A large language model (<strong>LLM</strong>) was trained on enormous amounts of text. Its core trick: given some words, <strong>predict the most likely next word</strong>. Then the next. Then the next.',
          'That\'s why it\'s brilliant at fluent writing — and why it has <strong>no built-in truth-checker</strong>. "Sounds likely" and "is true" are not the same thing.',
        ],
        examples: {
          title: 'Prediction in action',
          items: [
            { kind: 'good', text: '"The capital of France is ___" → "Paris" (very likely AND true)' },
            { kind: 'bad', text: '"The study by Dr ___ found…" → invents a likely-sounding name' },
            { kind: 'good', text: 'Rule: fluent ≠ factual. Always separate the two.' },
          ]
        },
        callout: { title: 'Say it back', body: 'One sentence to remember: an LLM predicts likely words — it doesn\'t look facts up in a database.' }
      }
    },
    {
      idx: 3, kind: 'concept', start: 1080, end: 1740,
      title: 'TRAINING DATA · WHERE IT LEARNED',
      eyebrow: 'STOP 03 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'triangle', glyph: 'DATA' },
        heading: 'You are what you eat',
        sub: 'training data shapes everything',
        paragraphs: [
          'AI learned from <strong>training data</strong> — mountains of text and images made by humans. Everything it "knows" comes from there, including human mistakes, gaps, and <strong>biases</strong>.',
          'It also has a <strong>cutoff</strong>: it wasn\'t trained on things that happened after its data was collected. Ask about very recent events and it may guess — confidently.',
        ],
        examples: {
          title: 'What training data means for you',
          items: [
            { kind: 'bad', text: 'Biased data in → biased answers out' },
            { kind: 'bad', text: 'Recent events → it may be out of date or guessing' },
            { kind: 'good', text: 'Common knowledge → usually strong ground' },
          ]
        },
        callout: { title: 'Whose voice is missing?', body: 'Because AI learned from human data, ask: whose point of view might be missing from this answer? We go deep on this in T-05.', icRed: true, icIcon: '?' }
      }
    },
    {
      idx: 4, kind: 'quiz', start: 1740, end: 2160,
      title: 'CHECKPOINT · WHY SO CONFIDENT?',
      eyebrow: 'STOP 04 · CHECKPOINT',
      body: {
        template: 'jrquiz',
        question: 'Why can an AI state something <strong>false</strong> with total confidence?',
        options: [
          { letter: 'A', text: 'It\'s lying on purpose to trick you.', right: false },
          { letter: 'B', text: 'It predicts likely-sounding words — it has no built-in truth-checker.', right: true },
          { letter: 'C', text: 'It\'s broken — normally AI is always right.', right: false },
          { letter: 'D', text: 'Someone typed the wrong answer into it.', right: false },
        ],
        rightFeedback: 'Exactly. ⭐ An LLM generates the most <b>likely</b> next words, not the most <b>true</b> ones. Fluent and confident is its default style — even when the content is invented. That\'s why YOU are the truth-checker.',
        wrongFeedback: 'Not quite. It isn\'t lying or broken — it\'s doing its job: predicting <i>likely</i> words. Likely-sounding and true aren\'t the same thing, and it has no built-in truth-checker. You are the truth-checker.',
      }
    },
    {
      idx: 5, kind: 'jrsort', start: 2160, end: 3000,
      title: 'DRILL · TRUE OR MYTH?',
      eyebrow: 'STOP 05 · MYTH-BUSTING',
      body: {
        template: 'jrsort',
        prompt: 'Time to bust some myths. Sort each claim about AI into TRUE or MYTH.',
        greenLabel: 'TRUE 🟢',
        redLabel: 'MYTH 🔴',
        intro: 'GREEN = actually true about today\'s AI. RED = a common myth.',
        items: [
          { text: 'AI predicts likely next words', answer: 'green' },
          { text: 'AI has feelings and opinions of its own', answer: 'red' },
          { text: 'AI learned from huge amounts of human-made data', answer: 'green' },
          { text: 'AI knows everything happening right now', answer: 'red' },
          { text: 'AI can be biased by its training data', answer: 'green' },
          { text: 'AI is always right if it sounds confident', answer: 'red' },
          { text: 'AI is great for brainstorming and drafts', answer: 'green' },
          { text: 'AI understands you the way a friend does', answer: 'red' },
        ],
      }
    },
    {
      idx: 6, kind: 'reflect', start: 3000, end: 3600,
      title: 'WRAP · ENGINE UNDERSTOOD',
      eyebrow: 'STOP 06 · WRAP-UP',
      body: {
        template: 'jrreflect',
        learned: 'That an LLM is a <b>prediction machine</b> trained on human data — fluent by design, <b>not fact-checked by design</b>, and shaped (and biased) by what it learned from.',
        take: 'One sentence: <b>likely-sounding ≠ true</b>. AI has no built-in truth-checker, so you are the truth-checker.',
        next: '<b>T-02 · Prompt Like a Pro.</b> Use what you now know to write prompts that get great answers — and fact-check them.',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Co-Pilot here 🚗 Welcome to Road Crew. Today we look under the hood.' },
    { t: 300,  kind: 'note', text: 'Best drivers understand the engine. Same for AI.' },
    { t: 480,  kind: 'msg',  text: 'Core idea: an LLM predicts the most LIKELY next word. That\'s the whole trick.' },
    { t: 860,  kind: 'warn', text: 'Fluent ≠ factual. It has no built-in truth-checker. Remember that.' },
    { t: 1140, kind: 'msg',  text: 'Training data: everything it knows came from human-made text — mistakes and biases included.' },
    { t: 1560, kind: 'note', text: 'It also has a cutoff — very recent events are shaky ground.' },
    { t: 1780, kind: 'msg',  text: 'Checkpoint. Why can it be confidently wrong? Think it through.' },
    { t: 2200, kind: 'msg',  text: 'Myth-busting drill! Sort TRUE from MYTH.' },
    { t: 3050, kind: 'msg',  text: 'Engine understood. 🌟 Next: prompting like a pro in T-02.' },
  ]
};

// ------------------------------------------------------------
// T-02 · PROMPT LIKE A PRO & FACT-CHECK
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['T-02'] = {
  id: 'T-02', level: 'T', next: 'T-03',
  title: 'T-02 · Prompt Like a Pro & Fact-Check',
  titleTop: 'T-02 · PROMPT LIKE A PRO',
  sub: 'ROAD CREW · AGES 12–16 · WEEK 2 · 60 MIN · EARN 3 STARS',
  duration: 3600,
  instructor: 'CO-PILOT',
  instructorRole: 'YOUR AI CO-PILOT · CLASS T · ROAD CREW',
  starGoal: 3,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 360,
      title: 'BRIEFING · TAKE THE WHEEL',
      eyebrow: 'STOP 01 · BRIEFING',
      body: {
        template: 'jrconcept',
        sign: { kind: 'rect', glyph: 'START →' },
        heading: 'You\'re driving now',
        sub: '6 min · Co-Pilot riding shotgun',
        paragraphs: [
          'You already know AI can write, explain, and brainstorm. This lesson levels you up: <strong>prompt like a pro</strong>, and — just as important — <strong>fact-check</strong> what comes back.',
          'Here\'s the truth pros know: <strong>AI sounds confident even when it\'s wrong</strong>. It sometimes "hallucinates" — makes stuff up. Your job is to catch it.',
        ],
        examples: {
          title: 'By the end you\'ll be able to',
          items: [
            { kind: 'good', text: 'Use the PRO method to write sharp prompts' },
            { kind: 'good', text: 'Spot when an AI is probably making things up' },
            { kind: 'good', text: 'Fact-check an answer in under a minute' },
          ]
        },
        callout: { title: 'Independent mode', body: 'You\'ve got this solo, but a parent check-in is still part of Road Crew. The road below saves your seat — come and go as you like.' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 360, end: 900,
      title: 'THE PRO METHOD',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: 'PRO' },
        heading: 'Persona · Request · Output',
        sub: 'three moves that upgrade any prompt',
        paragraphs: [
          '<strong>P — Persona.</strong> Tell the AI who to be: "Act as a science teacher explaining to a 13-year-old." This sets the tone and depth.',
          '<strong>R — Request.</strong> Say the task plainly, with a verb. <strong>O — Output.</strong> Say the shape: length, format, tone.',
        ],
        examples: {
          title: 'Weak prompt → PRO prompt',
          items: [
            { kind: 'bad', text: 'Tell me about climate change.' },
            { kind: 'good', text: 'Act as a geography teacher for teens. Explain 3 causes of climate change. Use 3 short bullet points, plain English.' },
            { kind: 'bad', text: 'Help with my essay.' },
            { kind: 'good', text: 'Act as a writing coach. Suggest 3 ways to make my intro paragraph stronger. Keep it under 100 words.' },
          ]
        },
        callout: { title: 'Reusable', body: 'PRO works for homework, hobbies, code, anything. Memorise it: Persona, Request, Output. Same three moves every time.' }
      }
    },
    {
      idx: 3, kind: 'concept', start: 900, end: 1500,
      title: 'WHEN AI MAKES STUFF UP',
      eyebrow: 'STOP 03 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'octagon', glyph: 'CHECK' },
        heading: 'Hallucinations are real',
        sub: 'confident ≠ correct',
        paragraphs: [
          'AI predicts words that <em>sound</em> right — it doesn\'t "know" facts the way a library does. So it can invent fake quotes, wrong dates, even fake book titles, and say them <strong>with total confidence</strong>.',
          'The fix is a habit: <strong>for anything that matters, check a second source</strong>. Never paste an AI fact into homework without verifying it.',
        ],
        examples: {
          title: 'Red flags that something might be made up',
          items: [
            { kind: 'bad', text: 'A super specific stat with no source ("73.4% of...")' },
            { kind: 'bad', text: 'A quote or study it can\'t link to' },
            { kind: 'bad', text: 'Details about very recent events' },
            { kind: 'good', text: 'Fix: ask "What\'s your source?" then check it yourself.' },
          ]
        },
        callout: { title: 'Golden rule', body: 'Treat AI like a smart friend who sometimes guesses. Great for ideas and drafts — but you verify the facts before you trust them.', icRed: true, icIcon: '!' }
      }
    },
    {
      idx: 4, kind: 'quiz', start: 1500, end: 1860,
      title: 'CHECKPOINT · SPOT THE RISK',
      eyebrow: 'STOP 04 · CHECKPOINT',
      body: {
        template: 'jrquiz',
        question: 'An AI gives you this for a history report: <strong>"In 1847, President Lincoln signed the Rainfall Act."</strong> What\'s the smartest next move?',
        options: [
          { letter: 'A', text: 'Paste it straight into the report — it sounds official.', right: false },
          { letter: 'B', text: 'Check a trusted source before using it — that "fact" looks made up.', right: true },
          { letter: 'C', text: 'Ask the AI if it\'s sure, and trust whatever it says.', right: false },
          { letter: 'D', text: 'Delete the whole report and start over.', right: false },
        ],
        rightFeedback: 'Exactly! ⭐ That "fact" has classic red flags — a very specific date and an official-sounding law you\'ve never heard of. Lincoln wasn\'t president in 1847, and there\'s no "Rainfall Act". Always <b>verify with a trusted source</b> before trusting it.',
        wrongFeedback: 'Think again. It <i>sounds</i> confident, but confident isn\'t the same as correct. Asking the AI "are you sure?" doesn\'t help — it can be confidently wrong twice. The pro move is to check an independent trusted source.',
      }
    },
    {
      idx: 5, kind: 'jrbuilder', start: 1860, end: 2520,
      title: 'LAB · BUILD A PRO PROMPT',
      eyebrow: 'STOP 05 · BUILD A BOT',
      body: {
        template: 'jrbuilder',
        scenario: 'You want AI help to study for a science quiz on the water cycle — and you want to be able to trust the answer.',
      }
    },
    {
      idx: 6, kind: 'jrsort', start: 2520, end: 2940,
      title: 'FACT-CHECK DRILL · TRUST OR VERIFY?',
      eyebrow: 'STOP 06 · CHECK YOURSELF',
      body: {
        template: 'jrsort',
        prompt: 'Tap each AI answer into GREEN (fine to use as-is) or RED (must fact-check first).',
      }
    },
    {
      idx: 7, kind: 'reflect', start: 2940, end: 3600,
      title: 'WRAP · ROAD-READY',
      eyebrow: 'STOP 07 · WRAP-UP',
      body: {
        template: 'jrreflect',
        learned: 'The <b>PRO method</b> (Persona · Request · Output) for sharp prompts — and the pro habit of <b>fact-checking</b> anything that matters.',
        take: 'Treat AI like a smart friend who sometimes guesses. Use it for ideas and drafts — then <b>verify the facts yourself</b> before you trust them.',
        next: '<b>T-03 · Build Your Own Helper Bot.</b> Design a bot that does one real job well.',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Co-Pilot here 🚗 You\'re driving this one. I\'ll flag the tricky corners.' },
    { t: 220,  kind: 'note', text: 'Two big skills today: prompt like a pro, and fact-check like a detective.' },
    { t: 400,  kind: 'msg',  text: 'PRO = Persona, Request, Output. Three moves. Works on everything.' },
    { t: 700,  kind: 'note', text: 'Steal my favourite Output line: "3 short bullets, plain English." Reuse it constantly.' },
    { t: 940,  kind: 'warn', text: 'Big one: AI sounds confident even when it\'s wrong. That\'s a "hallucination".' },
    { t: 1200, kind: 'msg',  text: 'The habit that separates pros from everyone else: verify anything that matters.' },
    { t: 1520, kind: 'msg',  text: 'Checkpoint! Read the "fact" carefully. Does it smell right?' },
    { t: 1880, kind: 'msg',  text: 'Lab time. Build a PRO prompt AND add how you\'ll check the answer.' },
    { t: 2300, kind: 'note', text: 'The CHECK box is what makes this pro-level. Name how you\'d verify it.' },
    { t: 2540, kind: 'msg',  text: 'Fact-check drill: sort each answer — fine as-is, or must-verify?' },
    { t: 2800, kind: 'warn', text: 'Anything with a specific stat, quote, or recent event = verify first.' },
    { t: 2960, kind: 'msg',  text: 'That\'s a wrap — you\'re road-ready. Stars earned! 🌟' },
    { t: 3300, kind: 'msg',  text: 'Next stop: T-03 · Build Your Own Helper Bot.' },
  ]
};

// ------------------------------------------------------------
// T-03 · BUILD YOUR OWN HELPER BOT
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['T-03'] = {
  id: 'T-03', level: 'T', next: 'T-04',
  title: 'T-03 · Build Your Own Helper Bot',
  titleTop: 'T-03 · BUILD A BOT',
  sub: 'ROAD CREW · AGES 12–16 · WEEK 3 · 60 MIN · EARN 2 STARS',
  duration: 3600,
  instructor: 'CO-PILOT',
  instructorRole: 'YOUR AI CO-PILOT · CLASS T · ROAD CREW',
  starGoal: 2,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 420,
      title: 'BRIEFING · FROM PROMPTS TO BOTS',
      eyebrow: 'STOP 01 · BRIEFING',
      body: {
        template: 'jrconcept',
        sign: { kind: 'rect', glyph: 'BOT LAB →' },
        heading: 'Build something that lasts',
        sub: 'a bot = a prompt you write once, use forever',
        paragraphs: [
          'A single prompt gets one answer. A <strong>helper bot</strong> is a set of standing instructions the AI follows <em>every time</em> — like a job description you write once.',
          'Today you\'ll design one. The golden rule of bot-building: <strong>one job, done well</strong>. A "does everything" bot does nothing well.',
        ],
        examples: {
          title: 'Helper bots students actually build',
          items: [
            { kind: 'good', text: 'Quiz Coach — turns your notes into practice questions' },
            { kind: 'good', text: 'Word Untangler — explains hard words with examples' },
            { kind: 'good', text: 'Feedback Buddy — critiques your draft, never rewrites it' },
          ]
        },
        callout: { title: 'Design first', body: 'Pros design on paper before they build. That\'s exactly what today\'s lab is for.' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 420, end: 1080,
      title: 'WRITING BOT INSTRUCTIONS',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: 'RULES' },
        heading: 'The job description',
        sub: 'job · rules · style',
        paragraphs: [
          'Good bot instructions cover three things. <strong>JOB</strong> — the one task it does. <strong>RULES</strong> — what it must always and never do. <strong>STYLE</strong> — tone, length, format of its answers.',
          'The RULES line is where safety lives: <strong>"never ask for or store personal info"</strong>, <strong>"help me learn — don\'t just give final answers"</strong>.',
        ],
        examples: {
          title: 'A solid instruction set (Quiz Coach)',
          items: [
            { kind: 'good', text: 'JOB · "Turn my notes into 5 practice questions with answers hidden below."' },
            { kind: 'good', text: 'RULES · "Never just give me the answer first. Never ask for personal info."' },
            { kind: 'good', text: 'STYLE · "Friendly, short questions, plain English."' },
          ]
        },
        callout: { title: 'Honesty rule', body: 'Notice the rule "help me learn, don\'t do it for me". A bot that does your homework isn\'t a helper — it\'s a cheat. Yours should make you smarter.', icRed: true, icIcon: '!' }
      }
    },
    {
      idx: 3, kind: 'concept', start: 1080, end: 1680,
      title: 'TEST · BREAK · IMPROVE',
      eyebrow: 'STOP 03 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'triangle', glyph: 'TEST IT' },
        heading: 'Every builder is a tester',
        sub: 'bots are never right first try',
        paragraphs: [
          'No bot works perfectly on draft one. Pros <strong>test with real examples</strong>, note what breaks, then <strong>tighten the instructions</strong> and try again.',
          'Try to break your own bot on purpose: give it a weird input, an off-topic question, a trick. Every break shows you a missing rule.',
        ],
        examples: {
          title: 'The test loop',
          items: [
            { kind: 'good', text: '1 · Test with 3 real examples' },
            { kind: 'bad', text: '2 · It gave the answer away instantly → found a break!' },
            { kind: 'good', text: '3 · Add a rule: "Always hide answers until I ask." Retest.' },
          ]
        },
        callout: { title: 'Iterating is the skill', body: 'Same lesson as prompting: the first draft is a starting point. Refine, retest, repeat.' }
      }
    },
    {
      idx: 4, kind: 'quiz', start: 1680, end: 2100,
      title: 'CHECKPOINT · SPOT THE BEST BOT',
      eyebrow: 'STOP 04 · CHECKPOINT',
      body: {
        template: 'jrquiz',
        question: 'Which of these is the <strong>best-designed</strong> helper bot?',
        options: [
          { letter: 'A', text: '"A bot that does all my homework so I can hand it in."', right: false },
          { letter: 'B', text: '"A bot that does everything: homework, jokes, life advice, weather."', right: false },
          { letter: 'C', text: '"A quiz coach: turns my notes into practice questions, never gives answers first, keeps it short and friendly."', right: true },
          { letter: 'D', text: '"A bot." (I\'ll figure out the rest later.)', right: false },
        ],
        rightFeedback: 'Exactly. ⭐ One clear <b>JOB</b> (quiz coach), real <b>RULES</b> (never answers-first), a defined <b>STYLE</b> (short, friendly). A does your homework and B does everything — both fail the design test.',
        wrongFeedback: 'Check the design rules: one job done well, rules that keep it honest, a clear style. A "do my homework" bot is cheating, and a "does everything" bot does nothing well.',
      }
    },
    {
      idx: 5, kind: 'jrbuilder', start: 2100, end: 3000,
      title: 'LAB · DESIGN YOUR BOT',
      eyebrow: 'STOP 05 · BUILD A BOT',
      body: {
        template: 'jrbuilder',
        scenario: 'Design your own helper bot on paper: one job, clear rules, a style — and a plan to test it before you trust it.',
        safeKey: 'test',
        fields: [
          { key: 'job', letter: 'J', name: 'JOB', hint: 'The ONE task your bot does',
            ph: 'Turn my class notes into 5 practice quiz questions with the answers hidden at the end.' },
          { key: 'rules', letter: 'R', name: 'RULES', hint: 'Always / never — include safety',
            ph: 'Never give answers before I try. Never ask for or store personal info. Stay on topic.' },
          { key: 'style', letter: 'S', name: 'STYLE', hint: 'Tone, length, format',
            ph: 'Friendly and encouraging. Short questions, plain English, numbered list.' },
          { key: 'test', letter: '✓', name: 'TEST', hint: 'How will you test and check it?',
            ph: 'Test it with 3 real pages of notes and try to break it with an off-topic question; check its facts against my textbook.' },
        ],
      }
    },
    {
      idx: 6, kind: 'reflect', start: 3000, end: 3600,
      title: 'WRAP · BOT BUILDER',
      eyebrow: 'STOP 06 · WRAP-UP',
      body: {
        template: 'jrreflect',
        learned: 'How to design a helper bot: <b>one JOB done well</b>, RULES that keep it safe and honest, a clear STYLE — and a <b>test loop</b> to improve it.',
        take: 'Build bots that make you smarter, not lazier. And never trust a bot you haven\'t tested — including your own.',
        next: '<b>T-04 · My AI Agreement.</b> The honesty rules of the road — credit, plagiarism, and where the line is.',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Bot Lab day 🔧 Today you design a helper bot of your own.' },
    { t: 260,  kind: 'note', text: 'Golden rule of bots: ONE job, done well.' },
    { t: 480,  kind: 'msg',  text: 'Instructions = JOB + RULES + STYLE. A job description for your AI.' },
    { t: 860,  kind: 'warn', text: 'The RULES line is where safety and honesty live. "Never ask for personal info. Don\'t do it for me."' },
    { t: 1140, kind: 'msg',  text: 'Then: test it, break it on purpose, tighten the rules, retest.' },
    { t: 1500, kind: 'note', text: 'Every break you find = a missing rule you just discovered. That\'s progress.' },
    { t: 1720, kind: 'msg',  text: 'Checkpoint! Which bot passes the design test?' },
    { t: 2140, kind: 'msg',  text: 'Lab time — fill all four boxes: Job, Rules, Style, Test.' },
    { t: 2700, kind: 'note', text: 'The TEST box is what separates builders from dreamers. Be specific.' },
    { t: 3050, kind: 'msg',  text: 'Bot designed! 🌟 Bring it to your next session — we\'ll build it for real.' },
  ]
};

// ------------------------------------------------------------
// T-04 · MY AI AGREEMENT
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['T-04'] = {
  id: 'T-04', level: 'T', next: 'T-05',
  title: 'T-04 · My AI Agreement: Honesty on the Road',
  titleTop: 'T-04 · MY AGREEMENT',
  sub: 'ROAD CREW · AGES 12–16 · WEEK 4 · 60 MIN · EARN 2 STARS',
  duration: 3600,
  instructor: 'CO-PILOT',
  instructorRole: 'YOUR AI CO-PILOT · CLASS T · ROAD CREW',
  starGoal: 2,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 420,
      title: 'BRIEFING · THE HONESTY LESSON',
      eyebrow: 'STOP 01 · BRIEFING',
      body: {
        template: 'jrconcept',
        sign: { kind: 'octagon', glyph: 'HONEST' },
        heading: 'Skills are easy. Integrity is the test.',
        sub: 'where exactly is the line?',
        paragraphs: [
          'You can prompt well and build bots. Now the harder question: <strong>what\'s honest use, and what\'s crossing the line?</strong>',
          'This lesson maps the line precisely — so when you sign your <strong>AI Agreement</strong> in the portal, you know exactly what you\'re signing.',
        ],
        examples: {
          title: 'Today\'s route',
          items: [
            { kind: 'good', text: 'Where the honesty line actually is' },
            { kind: 'good', text: 'Giving credit — how and when' },
            { kind: 'good', text: 'The Honest-or-Not sorting drill' },
          ]
        },
        callout: { title: 'Why it matters', body: 'Your work is proof of YOUR learning. Hand in AI\'s work as yours and the person you cheat is you — plus schools check, and trust is hard to win back.' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 420, end: 1140,
      title: 'THE LINE · HELP VS. CHEATING',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'triangle', glyph: 'THE LINE' },
        heading: 'One question finds the line',
        sub: '"did I do the thinking?"',
        paragraphs: [
          'The test is simple: <strong>after using AI, did the thinking happen in YOUR head?</strong> Brainstorming, explaining, quizzing, feedback — the thinking stays yours. That\'s help.',
          'Generating the essay, the answers, the project — the thinking happened in the machine. <strong>That\'s cheating</strong>, even if you tweak a few words after.',
        ],
        examples: {
          title: 'Same tool, different sides of the line',
          items: [
            { kind: 'good', text: '"Explain this concept, then quiz me on it." → help' },
            { kind: 'good', text: '"Critique my draft — what\'s weak?" → help' },
            { kind: 'bad', text: '"Write my essay so I can submit it." → cheating' },
            { kind: 'bad', text: 'Changing 5 words of an AI essay → still cheating' },
          ]
        },
        callout: { title: 'The swap test', body: 'Would you be comfortable telling your teacher exactly how you used AI? If you\'d hide it, you already know which side of the line you\'re on.', icRed: true, icIcon: '!' }
      }
    },
    {
      idx: 3, kind: 'concept', start: 1140, end: 1800,
      title: 'GIVE CREDIT · SAY HOW',
      eyebrow: 'STOP 03 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'rect', glyph: 'CITE IT' },
        heading: 'Credit is a strength move',
        sub: 'honesty makes your work more trusted, not less',
        paragraphs: [
          'When AI helped, <strong>say so, and say how</strong>: "I used AI to brainstorm topics and check my grammar; the analysis and writing are mine."',
          'And never cite sources you haven\'t checked — AI can <strong>invent realistic-looking citations</strong>. Every source in your work should be one you actually opened.',
        ],
        examples: {
          title: 'Good credit lines',
          items: [
            { kind: 'good', text: '"AI used for: brainstorming + grammar check."' },
            { kind: 'good', text: '"Ideas discussed with AI; all writing my own."' },
            { kind: 'bad', text: 'Pasting AI\'s bibliography without opening a single source' },
          ]
        },
        callout: { title: 'School rules first', body: 'Different teachers allow different AI use. Know the rule for each class — and when unsure, ask BEFORE, not after.' }
      }
    },
    {
      idx: 4, kind: 'quiz', start: 1800, end: 2220,
      title: 'CHECKPOINT · WHICH IS HONEST?',
      eyebrow: 'STOP 04 · CHECKPOINT',
      body: {
        template: 'jrquiz',
        question: 'You have an essay due on a book you\'ve read. Which use of AI is <strong>honest</strong>?',
        options: [
          { letter: 'A', text: 'Ask AI to write the essay, then change a few words.', right: false },
          { letter: 'B', text: 'Ask AI to discuss themes with you and critique YOUR draft — then note that AI helped.', right: true },
          { letter: 'C', text: 'Ask AI to write it "in the style of a 14-year-old" so nobody notices.', right: false },
          { letter: 'D', text: 'Buy a "human-written" essay online instead.', right: false },
        ],
        rightFeedback: 'Exactly. ⭐ The thinking stayed in YOUR head — AI sparred with your ideas and critiqued your draft. And you passed the swap test: you\'d happily tell the teacher how you used it.',
        wrongFeedback: 'Apply the test: did the thinking happen in your head? In A and C, the machine wrote the essay — disguising it makes it worse, not better. And D is old-fashioned cheating. B is the honest lane.',
      }
    },
    {
      idx: 5, kind: 'jrsort', start: 2220, end: 3000,
      title: 'DRILL · HONEST OR OVER THE LINE?',
      eyebrow: 'STOP 05 · CHECK YOURSELF',
      body: {
        template: 'jrsort',
        prompt: 'Sort each AI use: honest help, or over the line?',
        greenLabel: 'HONEST USE 🟢',
        redLabel: 'OVER THE LINE 🔴',
        intro: 'GREEN = the thinking stays yours. RED = cheating, harm, or privacy break.',
        items: [
          { text: 'Brainstorm essay topics with AI', answer: 'green' },
          { text: 'Submit an AI-written essay as your own', answer: 'red' },
          { text: 'Ask AI to explain a concept you don\'t get', answer: 'green' },
          { text: 'Keep a citation the AI invented', answer: 'red' },
          { text: 'Have AI quiz you before a test', answer: 'green' },
          { text: 'Make a fake image of a classmate', answer: 'red' },
          { text: 'Get AI feedback on YOUR draft, then revise it yourself', answer: 'green' },
          { text: 'Share a friend\'s personal info to get a better answer', answer: 'red' },
        ],
      }
    },
    {
      idx: 6, kind: 'reflect', start: 3000, end: 3600,
      title: 'WRAP · SIGN IT',
      eyebrow: 'STOP 06 · WRAP-UP',
      body: {
        template: 'jrreflect',
        learned: 'Where the line is: <b>help keeps the thinking in your head</b>; cheating moves it to the machine. Plus how to give credit — and why invented citations are a trap.',
        take: 'The swap test: if you\'d hide how you used AI from your teacher, you\'re on the wrong side of the line. Honesty over shortcuts, every time.',
        next: '<b>Sign your AI Agreement in the portal</b> — then T-05 · Check Yourself: bias, deepfakes & misinformation.',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'The honesty lesson 🤝 Skills are easy — integrity is the real test.' },
    { t: 300,  kind: 'note', text: 'By the end, you\'ll know exactly what you\'re signing in your Agreement.' },
    { t: 500,  kind: 'msg',  text: 'One question finds the line: did the thinking happen in YOUR head?' },
    { t: 900,  kind: 'warn', text: 'Changing 5 words of an AI essay is still cheating. The thinking wasn\'t yours.' },
    { t: 1200, kind: 'msg',  text: 'Credit is a strength move: "AI used for brainstorming + grammar. Writing mine."' },
    { t: 1560, kind: 'warn', text: 'AI can invent realistic fake citations. Never cite a source you haven\'t opened.' },
    { t: 1840, kind: 'msg',  text: 'Checkpoint! Use the swap test on each option.' },
    { t: 2260, kind: 'msg',  text: 'Sorting drill: honest help vs. over the line.' },
    { t: 3050, kind: 'msg',  text: 'You know the line. 🌟 Go sign your Agreement in the portal — then T-05.' },
  ]
};

// ------------------------------------------------------------
// T-05 · CHECK YOURSELF: BIAS, DEEPFAKES & MISINFORMATION
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['T-05'] = {
  id: 'T-05', level: 'T', next: 'T-06',
  title: 'T-05 · Check Yourself: Bias, Deepfakes & Misinformation',
  titleTop: 'T-05 · CHECK YOURSELF',
  sub: 'ROAD CREW · AGES 12–16 · WEEK 5 · 60 MIN · EARN 2 STARS',
  duration: 3600,
  instructor: 'CO-PILOT',
  instructorRole: 'YOUR AI CO-PILOT · CLASS T · ROAD CREW',
  starGoal: 2,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 420,
      title: 'BRIEFING · HAZARD TRAINING',
      eyebrow: 'STOP 01 · BRIEFING',
      body: {
        template: 'jrconcept',
        sign: { kind: 'triangle', glyph: 'HAZARDS' },
        heading: 'The advanced hazards',
        sub: 'bias · deepfakes · misinformation',
        paragraphs: [
          'You can already catch hallucinations. Today: the three hazards that fool even adults — <strong>bias</strong>, <strong>deepfakes</strong>, and <strong>misinformation</strong>.',
          'These matter beyond homework. They shape what you believe, what you share, and what you vote on someday. This is <strong>defensive driving for your brain</strong>.',
        ],
        examples: {
          title: 'The three hazards',
          items: [
            { kind: 'bad', text: 'BIAS · answers tilted by one-sided training data' },
            { kind: 'bad', text: 'DEEPFAKES · AI-made images/video/audio that look real' },
            { kind: 'bad', text: 'MISINFORMATION · false info spreading fast — often by accident' },
          ]
        },
        callout: { title: 'Goal', body: 'Not paranoia — a 30-second checking habit that runs automatically before you believe or share anything.' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 420, end: 1080,
      title: 'BIAS · WHOSE VOICE IS MISSING?',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: 'FAIR?' },
        heading: 'AI inherits human bias',
        sub: 'trained on us, flaws included',
        paragraphs: [
          'AI learned from human-made data — so it inherits human <strong>biases</strong>: it may over-represent some countries, groups, and viewpoints, and quietly leave others out.',
          'The fix isn\'t to distrust everything. It\'s one habit: for any big topic, ask <strong>"whose voice might be missing here?"</strong> — then go look for it.',
        ],
        examples: {
          title: 'Spotting bias',
          items: [
            { kind: 'bad', text: '"Describe a scientist" → always the same kind of person?' },
            { kind: 'bad', text: 'History answers that skip whole regions' },
            { kind: 'good', text: 'Fix: ask for other viewpoints, check diverse sources' },
          ]
        },
        callout: { title: 'It\'s subtle', body: 'Bias rarely announces itself. It just quietly shapes what gets said — and what doesn\'t. That\'s why you ask the missing-voice question on purpose.' }
      }
    },
    {
      idx: 3, kind: 'concept', start: 1080, end: 1740,
      title: 'DEEPFAKES & THE 30-SECOND CHECK',
      eyebrow: 'STOP 03 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'octagon', glyph: 'FAKE?' },
        heading: 'Seeing is no longer believing',
        sub: 'the 30-second check before you share',
        paragraphs: [
          '<strong>Deepfakes</strong> — AI images, audio, and video — can look completely real. A shocking clip of a celebrity "saying" something? Might be minutes of AI work.',
          'Before you believe or share, run the <strong>30-second check</strong>: STOP (feel the outrage? that\'s the trap) → SOURCE (who posted, why?) → SEARCH (are trusted outlets reporting it? reverse-search the image).',
        ],
        examples: {
          title: 'The 30-second check',
          items: [
            { kind: 'good', text: '1 · STOP — strong emotion is how fakes hook you' },
            { kind: 'good', text: '2 · SOURCE — who posted this, and why?' },
            { kind: 'good', text: '3 · SEARCH — trusted outlets? reverse image search?' },
          ]
        },
        callout: { title: 'Sharing = publishing', body: 'Forwarding a fake makes YOU part of the misinformation chain. Not sure it\'s real? Don\'t share it. That\'s the whole rule.', icRed: true, icIcon: '!' }
      }
    },
    {
      idx: 4, kind: 'quiz', start: 1740, end: 2160,
      title: 'CHECKPOINT · THE VIRAL CLIP',
      eyebrow: 'STOP 04 · CHECKPOINT',
      body: {
        template: 'jrquiz',
        question: 'A shocking video of a famous politician "confessing to a crime" is going viral from an account you\'ve never heard of. What\'s the smartest move?',
        options: [
          { letter: 'A', text: 'Share it fast — people need to know!', right: false },
          { letter: 'B', text: 'Run the 30-second check: pause, check the source, see if trusted outlets report it.', right: true },
          { letter: 'C', text: 'It looks completely real, so it must be real.', right: false },
          { letter: 'D', text: 'Ask an AI chatbot if the video is real and trust its answer.', right: false },
        ],
        rightFeedback: 'Exactly. ⭐ Shocking + unknown source + pressure to share fast = the classic deepfake pattern. <b>Stop, check the source, search trusted outlets.</b> If it were real, real newsrooms would have it within minutes.',
        wrongFeedback: '"Looks real" means nothing anymore — that\'s what deepfakes ARE. And sharing before checking makes you part of the chain. Run the 30-second check: stop, source, search.',
      }
    },
    {
      idx: 5, kind: 'jrsort', start: 2160, end: 3000,
      title: 'DRILL · SHARE-SAFE OR VERIFY FIRST?',
      eyebrow: 'STOP 05 · CHECK YOURSELF',
      body: {
        template: 'jrsort',
        prompt: 'You see each of these online. Sort them: safe to trust/share, or verify first?',
        greenLabel: 'SHARE-SAFE 🟢',
        redLabel: 'VERIFY FIRST 🔴',
        intro: 'GREEN = source known and confirmed. RED = classic fake/misinformation red flags.',
        items: [
          { text: 'A story confirmed by two trusted news outlets', answer: 'green' },
          { text: 'A shocking clip from an account you\'ve never heard of', answer: 'red' },
          { text: 'Your own photo of your own dog', answer: 'green' },
          { text: '"Scientists say…" post with no source named', answer: 'red' },
          { text: 'A study you traced back to the original journal', answer: 'green' },
          { text: 'A "leaked" celebrity quote only on meme pages', answer: 'red' },
          { text: 'A photo that\'s perfect… except the hands look wrong', answer: 'red' },
          { text: 'An article from an outlet you know, that others confirm', answer: 'green' },
        ],
      }
    },
    {
      idx: 6, kind: 'reflect', start: 3000, end: 3600,
      title: 'WRAP · EYES OPEN',
      eyebrow: 'STOP 06 · WRAP-UP',
      body: {
        template: 'jrreflect',
        learned: 'The three advanced hazards — <b>bias</b> (ask whose voice is missing), <b>deepfakes</b> (seeing ≠ believing), and <b>misinformation</b> — plus the <b>30-second check</b>: stop, source, search.',
        take: 'Strong emotion + pressure to share fast = the trap. Not sure it\'s real? Don\'t share it. That one rule keeps you out of the misinformation chain.',
        next: '<b>T-06 · Glossary Quiz.</b> Lock in the vocabulary — then it\'s Road Test time.',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Hazard training today ⚠️ Bias, deepfakes, misinformation.' },
    { t: 280,  kind: 'note', text: 'This is defensive driving for your brain. It matters way beyond homework.' },
    { t: 480,  kind: 'msg',  text: 'Bias habit: for any big topic ask "whose voice is missing?" — then go find it.' },
    { t: 900,  kind: 'note', text: 'Bias is quiet. It never announces itself. You have to ask on purpose.' },
    { t: 1140, kind: 'warn', text: 'Deepfakes: seeing is NOT believing anymore. A fake clip takes minutes to make.' },
    { t: 1460, kind: 'msg',  text: 'The 30-second check: STOP → SOURCE → SEARCH. Make it automatic.' },
    { t: 1780, kind: 'msg',  text: 'Checkpoint: the viral clip. What\'s the pro move?' },
    { t: 2200, kind: 'msg',  text: 'Sorting drill! Share-safe vs. verify-first.' },
    { t: 2700, kind: 'warn', text: 'Outrage + unknown source + "share now!" = the trap, every time.' },
    { t: 3050, kind: 'msg',  text: 'Eyes open. 🌟 Next: the Glossary Quiz — talk the talk.' },
  ]
};

// ------------------------------------------------------------
// T-06 · GLOSSARY QUIZ: TALK THE TALK
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['T-06'] = {
  id: 'T-06', level: 'T', next: 'T-07',
  title: 'T-06 · Glossary Quiz: Talk the Talk',
  titleTop: 'T-06 · GLOSSARY QUIZ',
  sub: 'ROAD CREW · AGES 12–16 · WEEK 6 · 60 MIN · EARN 3 STARS',
  duration: 3600,
  instructor: 'CO-PILOT',
  instructorRole: 'YOUR AI CO-PILOT · CLASS T · ROAD CREW',
  starGoal: 3,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 480,
      title: 'BRIEFING · WORDS ARE TOOLS',
      eyebrow: 'STOP 01 · BRIEFING',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: 'A→Z' },
        heading: 'Talk the talk',
        sub: 'precise words = precise thinking',
        paragraphs: [
          'Pre-Road-Test tune-up: locking in the <strong>vocabulary</strong>. If you can use words like <em>hallucination</em>, <em>bias</em>, and <em>training data</em> precisely, you can THINK about AI precisely.',
          'The test of real understanding isn\'t reciting a definition — it\'s <strong>explaining it to someone else</strong> in your own words. That\'s exactly what today\'s lab asks you to do.',
        ],
        examples: {
          title: 'Your core vocabulary',
          items: [
            { kind: 'good', text: 'LLM · prompt · generative AI · training data · algorithm' },
            { kind: 'good', text: 'Hallucination · bias · deepfake · misinformation' },
            { kind: 'good', text: 'PII · plagiarism · digital citizenship' },
          ]
        },
        callout: { title: 'Open book', body: 'Stuck on a word? The Glossary in your portal has all of them. Peeking is studying!' }
      }
    },
    {
      idx: 2, kind: 'quiz', start: 480, end: 960,
      title: 'CHECKPOINT · THE BIG ONE',
      eyebrow: 'STOP 02 · CHECKPOINT',
      body: {
        template: 'jrquiz',
        question: 'Which of these correctly describes a <strong>hallucination</strong>?',
        options: [
          { letter: 'A', text: 'When AI refuses to answer a question.', right: false },
          { letter: 'B', text: 'When AI states something false as if it were true — without "knowing" it\'s wrong.', right: true },
          { letter: 'C', text: 'When AI shows you a scary picture.', right: false },
          { letter: 'D', text: 'When the AI\'s server crashes.', right: false },
        ],
        rightFeedback: 'Correct. ⭐ A hallucination is AI stating false things as true. It isn\'t lying — it\'s predicting likely text with <b>no built-in truth-checker</b>. Which is why you always verify.',
        wrongFeedback: 'Back to T-01 thinking: AI predicts likely words. A hallucination is when those likely-sounding words are <i>false</i> — stated with full confidence. Not a crash, not a refusal.',
      }
    },
    {
      idx: 3, kind: 'jrsort', start: 960, end: 1920,
      title: 'DRILL · RIGHT OR WRONG DEFINITION?',
      eyebrow: 'STOP 03 · SORT THE WORDS',
      body: {
        template: 'jrsort',
        prompt: 'Each card pairs a word with a definition. Sort: is the definition RIGHT or WRONG?',
        greenLabel: 'RIGHT DEFINITION 🟢',
        redLabel: 'WRONG DEFINITION 🔴',
        intro: 'GREEN = the definition is correct. RED = nope, that\'s not what it means.',
        items: [
          { text: 'PROMPT = the instruction you give an AI', answer: 'green' },
          { text: 'LLM = a robot with human feelings', answer: 'red' },
          { text: 'DEEPFAKE = AI-made fake image, audio, or video', answer: 'green' },
          { text: 'BIAS = when AI is always correct', answer: 'red' },
          { text: 'ALGORITHM = step-by-step rules, like a recipe', answer: 'green' },
          { text: 'TRAINING DATA = the AI\'s private diary', answer: 'red' },
          { text: 'PII = info that can identify a person', answer: 'green' },
          { text: 'PLAGIARISM = a fancy word for teamwork', answer: 'red' },
        ],
      }
    },
    {
      idx: 4, kind: 'jrbuilder', start: 1920, end: 3000,
      title: 'LAB · TEACH-BACK',
      eyebrow: 'STOP 04 · TEACH IT',
      body: {
        template: 'jrbuilder',
        scenario: 'Pick ONE word from the glossary and prepare to teach it to someone who\'s never heard of it. If you can teach it, you own it.',
        safeKey: 'why',
        fields: [
          { key: 'word', letter: 'W', name: 'WORD', hint: 'Which term did you pick?',
            ph: 'Hallucination — when AI states false things as if they were true.' },
          { key: 'own', letter: 'O', name: 'OWN WORDS', hint: 'Explain it — no jargon',
            ph: 'The AI writes what sounds likely, not what\'s checked as true — so it can make things up without knowing it.' },
          { key: 'example', letter: 'E', name: 'EXAMPLE', hint: 'A real-life example',
            ph: 'It once gave me a book title and author that don\'t exist — it sounded completely real.' },
          { key: 'why', letter: '✓', name: 'WHY IT MATTERS', hint: 'What should they DO about it?',
            ph: 'Never trust an AI fact without checking a second source — verify quotes, stats, and dates before using them.' },
        ],
      }
    },
    {
      idx: 5, kind: 'reflect', start: 3000, end: 3600,
      title: 'WRAP · FLUENT',
      eyebrow: 'STOP 05 · WRAP-UP',
      body: {
        template: 'jrreflect',
        learned: 'The full Road Crew vocabulary — from <b>LLM</b> and <b>training data</b> to <b>hallucination</b>, <b>bias</b>, <b>deepfake</b>, and <b>PII</b> — and you taught one back in your own words.',
        take: 'If you can explain a word to a friend, you own it. Teach someone your word this week — for real.',
        next: '<b>T-07 · Road Test.</b> The final project: plan it, build it, present it, earn your licence.',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Tune-up day 🔤 Precise words = precise thinking.' },
    { t: 300,  kind: 'note', text: 'Stuck on a term? The portal Glossary is open-book. Peeking IS studying.' },
    { t: 520,  kind: 'msg',  text: 'Checkpoint: the most important word of the course. Nail it.' },
    { t: 1000, kind: 'msg',  text: 'Definition drill! Half of these are traps. Read carefully.' },
    { t: 1500, kind: 'note', text: 'The wrong ones sound almost right. That\'s what makes vocabulary matter.' },
    { t: 1960, kind: 'msg',  text: 'Teach-back lab: pick a word, explain it YOUR way, give a real example.' },
    { t: 2500, kind: 'note', text: 'The WHY box is the key: what should your listener DO differently?' },
    { t: 3050, kind: 'msg',  text: 'Fluent! 🌟 One stop left: the Road Test. See you there.' },
  ]
};

// ------------------------------------------------------------
// T-07 · ROAD TEST: YOUR PROJECT
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['T-07'] = {
  id: 'T-07', level: 'T', next: null,
  title: 'T-07 · Road Test: Your Project',
  titleTop: 'T-07 · ROAD TEST',
  sub: 'ROAD CREW · AGES 12–16 · WEEK 8 · 60 MIN · EARN 2 STARS',
  duration: 3600,
  instructor: 'CO-PILOT',
  instructorRole: 'YOUR AI CO-PILOT · CLASS T · ROAD CREW',
  starGoal: 2,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 480,
      title: 'BRIEFING · THE FINAL STOP',
      eyebrow: 'STOP 01 · BRIEFING',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: '🏁' },
        heading: 'Road Test day',
        sub: 'the last stop before your Class T licence',
        paragraphs: [
          'This is it. The Road Test isn\'t a written exam — it\'s a <strong>project</strong>: something real you make with AI, presented to your group, that shows every skill from T-01 to T-06.',
          'Today you\'ll learn what examiners look for, and <strong>plan your project</strong> so you walk in prepared.',
        ],
        examples: {
          title: 'What examiners look for',
          items: [
            { kind: 'good', text: 'Sharp PRO prompts, refined over drafts' },
            { kind: 'good', text: 'Facts verified — sources you actually opened' },
            { kind: 'good', text: 'Honest credit: what AI did vs. what YOU did' },
            { kind: 'good', text: 'Zero personal info shared along the way' },
          ]
        },
        callout: { title: 'Pick something you love', body: 'Best projects come from real interests — your sport, your music, your game, your cause. Passion shows.' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 480, end: 1200,
      title: 'PROJECT IDEAS & THE PLAN',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'rect', glyph: 'PLAN →' },
        heading: 'Four parts, one page',
        sub: 'goal · prompts · verify · credit',
        paragraphs: [
          'A Road-Test-ready plan fits on one page and has four parts: your <strong>GOAL</strong> (what you\'ll make and for whom), your <strong>PROMPTS</strong> (how AI will help), your <strong>VERIFY</strong> plan, and your <strong>CREDIT</strong> line.',
          'Past projects: a study-bot for a younger sibling, a fact-checked local-history mini-site, a training plan for a football season, a comic made WITH AI and honestly credited.',
        ],
        examples: {
          title: 'A goal that works',
          items: [
            { kind: 'bad', text: '"Something with AI." (too fuzzy to plan)' },
            { kind: 'good', text: '"A revision quiz-bot on WW2 for my study group, tested by 3 friends."' },
            { kind: 'good', text: '"A fact-checked guide to our town\'s history, with real sources listed."' },
          ]
        },
        callout: { title: 'Scope it small', body: 'A small project finished and verified beats a huge one half-done. One job, done well — sound familiar?' }
      }
    },
    {
      idx: 3, kind: 'quiz', start: 1200, end: 1680,
      title: 'CHECKPOINT · EXAMINER\'S EYES',
      eyebrow: 'STOP 03 · CHECKPOINT',
      body: {
        template: 'jrquiz',
        question: 'Two students present. Amir: small quiz-bot, showed his prompt drafts, verified facts against two sources, credited AI clearly. Blake: huge flashy site, but can\'t say which parts AI wrote, and two "facts" turn out fake. Who passes?',
        options: [
          { letter: 'A', text: 'Blake — the site looks way more impressive.', right: false },
          { letter: 'B', text: 'Amir — process, verification, and honesty are what\'s being tested.', right: true },
          { letter: 'C', text: 'Both — effort is all that counts.', right: false },
          { letter: 'D', text: 'Neither — using AI at all is cheating.', right: false },
        ],
        rightFeedback: 'Exactly. ⭐ The Road Test grades the <b>driver</b>, not the paint job: refined prompts, verified facts, honest credit. Blake\'s unverified fakes and mystery authorship are exactly what fails a Road Test.',
        wrongFeedback: 'Remember what\'s being tested: the DRIVER, not the paint job. Flashy doesn\'t matter if facts are fake and authorship is fuzzy. Verified, honest, and finished — that\'s a pass.',
      }
    },
    {
      idx: 4, kind: 'jrbuilder', start: 1680, end: 3000,
      title: 'LAB · YOUR PROJECT PLAN',
      eyebrow: 'STOP 04 · PLAN IT',
      body: {
        template: 'jrbuilder',
        scenario: 'Write your one-page Road Test project plan. This is the actual plan you\'ll bring to your Road Test session.',
        safeKey: 'verify',
        fields: [
          { key: 'goal', letter: 'G', name: 'GOAL', hint: 'What will you make, for whom?',
            ph: 'A revision quiz-bot about the water cycle for my study group, tested by 3 classmates.' },
          { key: 'prompts', letter: 'P', name: 'PROMPTS', hint: 'How will AI help? (PRO method)',
            ph: 'Act as a quiz coach → generate questions from my notes → 5 per topic, answers hidden, plain English.' },
          { key: 'verify', letter: 'V', name: 'VERIFY', hint: 'How will you check the facts?',
            ph: 'Check every question against my textbook and one trusted site; cut anything I can\'t verify from a source I opened.' },
          { key: 'credit', letter: 'C', name: 'CREDIT', hint: 'Your honesty line',
            ph: 'AI used for: generating draft questions. I selected, fixed, and verified them; the notes and final edit are mine.' },
        ],
      }
    },
    {
      idx: 5, kind: 'reflect', start: 3000, end: 3600,
      title: 'GRADUATION · CLASS T EARNED',
      eyebrow: 'STOP 05 · GRADUATION',
      body: {
        template: 'jrreflect',
        learned: 'How to plan and pass the Road Test: a scoped <b>GOAL</b>, PRO <b>PROMPTS</b>, a real <b>VERIFY</b> plan, and an honest <b>CREDIT</b> line. The examiner grades the driver, not the paint job.',
        take: 'You now drive AI the way pros do: think first, prompt sharp, verify always, credit honestly. Present your project — your Class T licence is waiting.',
        next: '<b>Present at your Road Test session</b> — then keep driving. The habits you built here work for life.',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Road Test day 🏁 Everything you\'ve learned, in one project.' },
    { t: 300,  kind: 'note', text: 'Examiners grade the driver, not the paint job: prompts, verification, honesty.' },
    { t: 540,  kind: 'msg',  text: 'Pick something you actually love. Passion makes better projects.' },
    { t: 900,  kind: 'note', text: 'Scope it SMALL. Finished and verified beats huge and half-done.' },
    { t: 1240, kind: 'msg',  text: 'Checkpoint: Amir vs. Blake. Think like an examiner.' },
    { t: 1720, kind: 'msg',  text: 'The big one — write your real project plan. All four boxes.' },
    { t: 2400, kind: 'note', text: 'VERIFY is where most plans are weak. Name your actual sources.' },
    { t: 3050, kind: 'msg',  text: '🎓 Plan complete — you\'re ready. Go earn that Class T licence!' },
    { t: 3400, kind: 'msg',  text: 'It\'s been a pleasure riding shotgun. Drive far. — Co-Pilot' },
  ]
};
