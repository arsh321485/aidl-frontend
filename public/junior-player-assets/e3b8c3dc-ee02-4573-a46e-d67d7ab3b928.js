// ============================================================
// AIDL Juniors — Lesson Library
// Single source of truth for the Junior Lesson Player.
// Two tiers: J = Junior Cadet (8–12), T = Road Crew (12–16).
// ============================================================
window.AIDL_JR_LESSONS = {};
window.AIDL_JR_LEVELS = {
  J: {
    code: 'J',
    name: 'Junior Cadet',
    audience: 'Ages 8–12 · With a grown-up',
    accentColor: '#2ec866',
    stars: 3,
    duration: '45 min · 6 weeks',
  },
  T: {
    code: 'T',
    name: 'Road Crew',
    audience: 'Ages 12–16 · More independent',
    accentColor: '#6fb3e0',
    stars: 3,
    duration: '60 min · 8 weeks',
  },
};

// ============================================================
// JUNIOR CADET (J) — J-03 · Ask It Nicely: Your First Prompts
// Friendly, playful. Star rewards. Grown-up nearby.
// ============================================================
window.AIDL_JR_LESSONS['J-03'] = {
  id: 'J-03',
  level: 'J',
  title: 'J-03 · Ask It Nicely: Your First Prompts',
  titleTop: 'J-03 · ASK IT NICELY',
  sub: 'JUNIOR CADET · AGES 8–12 · WEEK 3 · 45 MIN · EARN 3 STARS',
  duration: 45 * 60, // 2700s
  instructor: 'BUDDY',
  instructorRole: 'YOUR AI BUDDY · CLASS J · CADET',
  starGoal: 3,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 300,
      title: 'HELLO · MEET YOUR BUDDY',
      eyebrow: 'STOP 01 · HELLO',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: 'GO' },
        heading: 'Ready for your first ride?',
        sub: 'buckle up · this is going to be fun',
        paragraphs: [
          'Hi! I\'m <strong>Buddy</strong>, your AI helper. Today you\'ll learn how to <strong>ask an AI for things the right way</strong> — we call it a <strong>prompt</strong>.',
          'A prompt is just <strong>what you type to the AI</strong>. Ask a good question, get a good answer. Ask a fuzzy question, get a fuzzy answer!',
        ],
        examples: {
          title: 'What we\'ll do today',
          items: [
            { kind: 'good', text: 'Learn the 3 Magic Words for great asks' },
            { kind: 'good', text: 'Write your very own prompt' },
            { kind: 'good', text: 'Play the Keep-It-Private sorting game' },
          ]
        },
        callout: { title: 'No rush!', body: 'Take your time. The road at the bottom shows where you are. You can go back anytime. A grown-up nearby? Great — say hi to them too!' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 300, end: 780,
      title: 'WHAT IS A PROMPT?',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: '?' },
        heading: 'A prompt is your ask',
        sub: 'think of it like ordering at a café',
        paragraphs: [
          'Imagine ordering a smoothie. If you say <strong>"a drink please"</strong> you might get anything! But if you say <strong>"a small banana smoothie, not too sweet"</strong> — yum, exactly right.',
          'AI is the same. The <strong>clearer your ask</strong>, the better the answer. That\'s the whole secret!',
        ],
        examples: {
          title: 'Fuzzy ask vs. clear ask',
          items: [
            { kind: 'bad', text: 'Tell me about dogs.' },
            { kind: 'good', text: 'Tell me 3 fun facts about golden retriever puppies, in simple words.' },
            { kind: 'bad', text: 'Make a story.' },
            { kind: 'good', text: 'Write a short, funny story about a cat who becomes a pirate.' },
          ]
        },
        callout: { title: 'Try it out loud', body: 'Before you type, say your ask out loud. If a friend would know exactly what you mean, the AI will too!' }
      }
    },
    {
      idx: 3, kind: 'concept', start: 780, end: 1260,
      title: 'THE 3 MAGIC WORDS',
      eyebrow: 'STOP 03 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'triangle', glyph: 'CLEAR KIND SAFE' },
        heading: 'Clear · Kind · Safe',
        sub: 'your three-word checklist for every ask',
        paragraphs: [
          'Every time you ask an AI, remember three words: <strong>CLEAR, KIND, and SAFE</strong>.',
          '<strong>CLEAR</strong> — say exactly what you want. <strong>KIND</strong> — be nice, like you would to a person. <strong>SAFE</strong> — never share private stuff (more on that soon!).',
        ],
        examples: {
          title: 'The 3 Magic Words',
          items: [
            { kind: 'good', text: 'CLEAR — "Write 4 rhyming lines about autumn leaves."' },
            { kind: 'good', text: 'KIND — say please, and don\'t ask for mean things.' },
            { kind: 'good', text: 'SAFE — no full name, address, or passwords. Ever.' },
          ]
        },
        callout: { title: 'Buddy\'s promise', body: 'If an answer ever seems weird, scary, or wrong — stop and tell a grown-up. That\'s always the right move. You\'re never in trouble for asking.' }
      }
    },
    {
      idx: 4, kind: 'quiz', start: 1260, end: 1560,
      title: 'QUICK CHECK · SPOT THE BEST ASK',
      eyebrow: 'STOP 04 · QUICK CHECK',
      body: {
        template: 'jrquiz',
        question: 'Which one of these is the <strong>clearest</strong> prompt?',
        options: [
          { letter: 'A', text: 'Do homework stuff.', right: false },
          { letter: 'B', text: 'Explain how rainbows are made, in 3 simple sentences for a 9-year-old.', right: true },
          { letter: 'C', text: 'Tell me things.', right: false },
          { letter: 'D', text: 'Rainbow.', right: false },
        ],
        rightFeedback: 'Yes! ⭐ It says <b>exactly what you want</b> (how rainbows are made), <b>how much</b> (3 sentences), and <b>who it\'s for</b> (a 9-year-old). That\'s a super clear ask!',
        wrongFeedback: 'Not quite! Look for the ask that says exactly <i>what</i> you want, <i>how much</i>, and <i>who it\'s for</i>. Hint: it\'s the one about rainbows with 3 sentences.',
      }
    },
    {
      idx: 5, kind: 'jrbuilder', start: 1560, end: 2100,
      title: 'YOUR TURN · BUILD AN ASK',
      eyebrow: 'STOP 05 · MAKER LANE',
      body: {
        template: 'jrbuilder',
        scenario: 'You want the AI to help you write a short, funny poem about your favorite animal.',
      }
    },
    {
      idx: 6, kind: 'jrsort', start: 2100, end: 2460,
      title: 'SAFETY STOP · SHARE OR KEEP PRIVATE?',
      eyebrow: 'STOP 06 · SAFETY STOP',
      body: {
        template: 'jrsort',
        prompt: 'Tap each card to sort it. Which things are OK to type to an AI, and which should you keep private?',
      }
    },
    {
      idx: 7, kind: 'reflect', start: 2460, end: 2700,
      title: 'SHOW & TELL · GREAT DRIVING!',
      eyebrow: 'STOP 07 · SHOW & TELL',
      body: { template: 'jrreflect' }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Hi there! I\'m Buddy 🤖 I\'ll ride along the whole lesson. No question is ever silly!' },
    { t: 200,  kind: 'note', text: 'See the road at the bottom? That little car is you. You can drive back anytime to hear something again.' },
    { t: 340,  kind: 'msg',  text: 'A prompt is just your ask. Clear ask = great answer. Fuzzy ask = fuzzy answer!' },
    { t: 620,  kind: 'note', text: 'The smoothie trick works for anything. Say exactly what you want and how much.' },
    { t: 820,  kind: 'msg',  text: 'Three Magic Words: CLEAR, KIND, SAFE. Say them with me!' },
    { t: 1080, kind: 'warn', text: 'SAFE is the big one. Never type your full name, address, or passwords. If unsure, ask a grown-up.' },
    { t: 1280, kind: 'msg',  text: 'Quick check! Read all four, then pick the clearest one. Take your time.' },
    { t: 1580, kind: 'msg',  text: 'Now the fun part — build your own ask! Fill the three boxes: Clear, Kind, Safe.' },
    { t: 1900, kind: 'note', text: 'No perfect answers here. Just put a little in each box and I\'ll check it for you.' },
    { t: 2120, kind: 'msg',  text: 'Safety game time! Tap each card into GREEN (ok to share) or RED (keep private).' },
    { t: 2300, kind: 'warn', text: 'Remember: anything that says who you are or where you live is PRIVATE.' },
    { t: 2480, kind: 'msg',  text: 'Wow, look at you go! You just earned your stars. High five! 🖐️' },
    { t: 2620, kind: 'msg',  text: 'Lesson done! Next stop: J-04 · Maker Lane — build a quiz game with me.' },
  ]
};

// ============================================================
// ROAD CREW (T) — T-02 · Prompt Like a Pro & Fact-Check
// Ages 12–16. More independent. Teaches verifying answers.
// ============================================================
window.AIDL_JR_LESSONS['T-02'] = {
  id: 'T-02',
  level: 'T',
  title: 'T-02 · Prompt Like a Pro & Fact-Check',
  titleTop: 'T-02 · PROMPT LIKE A PRO',
  sub: 'ROAD CREW · AGES 12–16 · WEEK 3 · 60 MIN · EARN 3 STARS',
  duration: 60 * 60, // 3600s
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
      body: { template: 'jrreflect' }
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
