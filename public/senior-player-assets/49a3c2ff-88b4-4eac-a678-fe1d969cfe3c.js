// ============================================================
// AIDL Lesson Library
// Single source of truth for all Lesson Player content.
// Keyed by module ID from AIDL-SPEC-001.
// ============================================================
window.AIDL_LESSONS = {};
window.AIDL_LEVELS = {
  L: {
    code: 'L',
    name: "Learner's Permit",
    audience: 'General Public · Consumer',
    accent: 'sky',            // light blue accent
    accentColor: '#6fb3e0',
    passMark: 70,
    duration: '6–8 hrs total',
    moduleCount: 7,
  },
  C: {
    code: 'C',
    name: "Operator's Licence",
    audience: 'Corporate · Workplace',
    accent: 'red',
    accentColor: '#e23a2e',
    passMark: 75,
    duration: '8–10 hrs total',
    moduleCount: 9,
  },
  A: {
    code: 'A',
    name: 'Specialist Endorsement',
    audience: 'Advanced · AI Champion',
    accent: 'yellow',
    accentColor: '#ffcc00',
    passMark: 80,
    duration: '12–15 hrs total',
    moduleCount: 8,
  }
};

// ============================================================
// LEVEL 1 (L) — M-1-03 · The PREP Prompting Framework
// Learner's Permit. Friendly tone. 70% threshold.
// ============================================================
window.AIDL_LESSONS['M-1-03'] = {
  id: 'M-1-03',
  level: 'L',
  title: 'M-1-03 · The PREP Prompting Framework',
  titleTop: 'M-1-03 · THE PREP PROMPTING FRAMEWORK',
  sub: 'LEVEL 1 · LEARNER\'S PERMIT · MODULE 3 OF 7 · 50 MIN · PASS MARK 70%',
  duration: 50 * 60, // 3000s
  instructor: 'DRIVER ED',
  instructorRole: 'INSTRUCTOR · CLASS L · FUNDAMENTALS',
  passMark: 70,
  competencies: ['AI-CF-L-03'],
  los: ['LO-1-03-A', 'LO-1-03-B', 'LO-1-03-C'],
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 240,
      title: 'WELCOME · NEW DRIVER',
      eyebrow: 'SEGMENT 01 · WELCOME',
      body: {
        template: 'concept',
        sign: { kind: 'circle', glyph: 'GO' },
        heading: 'Your first real driving lesson',
        sub: '4 min · introduction · L-Permit pace',
        paragraphs: [
          'Welcome aboard. By the end of this module you\'ll know <strong>the four parts of every good AI prompt</strong>, and you\'ll have written one of your own that I\'ve checked.',
          'You\'ve got 50 minutes. Self-paced. Pause anytime. <strong>No prior tech experience needed</strong> — if you\'ve ever written an email, you can write a PREP prompt.',
        ],
        examples: {
          title: 'What we\'ll cover (LO-1-03)',
          items: [
            { kind: 'good', text: 'The four PREP components — Persona, Requirement, Expectation, Parameters' },
            { kind: 'good', text: 'Write your first complete PREP prompt' },
            { kind: 'good', text: 'Compare a weak prompt vs. a PREP prompt — see the difference' },
          ]
        },
        callout: { title: 'Take your time', body: 'No timer pressure on this module. The road below shows your progress — pause, scrub back, re-read. Your seat\'s saved when you leave.' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 240, end: 700,
      title: 'P · PERSONA',
      eyebrow: 'SEGMENT 02 · CONCEPT',
      body: {
        template: 'concept',
        sign: { kind: 'circle', glyph: 'P' },
        heading: 'Tell the AI who to be',
        sub: 'step 1 of 4 · sets the voice and depth',
        paragraphs: [
          'The first part of a great prompt is telling the AI what kind of expert to be. This changes the words it uses, what it knows about, and how careful it sounds.',
          'Strong personas are <strong>specific</strong>. "Act as a writer" is weak. "Act as a friendly career coach with 10 years\' experience helping people change industries" is strong.',
        ],
        examples: {
          title: 'Personas you might use today',
          items: [
            { kind: 'good', text: 'Act as a patient explainer who teaches science to 12-year-olds.' },
            { kind: 'good', text: 'Act as a friendly career coach who reviews CVs.' },
            { kind: 'good', text: 'Act as a Spanish tutor giving conversation practice.' },
            { kind: 'bad', text: 'Act as a smart person.' },
            { kind: 'bad', text: 'You are an AI.' },
          ]
        },
        callout: { title: 'Tip', body: 'Imagine you\'re hiring someone for an hour. What would you put in the job ad? That\'s your Persona.' }
      }
    },
    {
      idx: 3, kind: 'concept', start: 700, end: 1200,
      title: 'R · REQUIREMENT',
      eyebrow: 'SEGMENT 03 · CONCEPT',
      body: {
        template: 'concept',
        sign: { kind: 'circle', glyph: 'R' },
        heading: 'Say exactly what you want',
        sub: 'step 2 of 4 · the task itself',
        paragraphs: [
          'Now the task. Be <strong>plain and specific</strong>. The AI will do exactly what you ask — so ask exactly. Use a verb, name the thing, give the AI any text it needs to work with.',
          'Vague requirements ("help me with my CV") produce vague output. Specific ones ("rewrite the bullet below to highlight customer service skills") produce something usable.',
        ],
        examples: {
          title: 'Requirement — plain & precise',
          items: [
            { kind: 'good', text: 'Rewrite the bullet point below to highlight customer service skills.' },
            { kind: 'good', text: 'Draft a polite email asking my landlord to fix the broken radiator.' },
            { kind: 'good', text: 'Summarise the article below in three plain-English bullet points.' },
            { kind: 'bad', text: 'Help me with this.' },
            { kind: 'bad', text: 'Do something with my CV.' },
          ]
        }
      }
    },
    {
      idx: 4, kind: 'concept', start: 1200, end: 1620,
      title: 'E · EXPECTATION',
      eyebrow: 'SEGMENT 04 · CONCEPT',
      body: {
        template: 'concept',
        sign: { kind: 'circle', glyph: 'E' },
        heading: 'How should the output look?',
        sub: 'step 3 of 4 · format, length, tone',
        paragraphs: [
          'Without an Expectation, the AI guesses the format. Sometimes that\'s fine — often it gives you a 600-word essay when you wanted three bullets.',
          'Tell it: <strong>format, length, tone</strong>. That\'s it.',
        ],
        examples: {
          title: 'Format directives',
          items: [
            { kind: 'good', text: 'Reply as a single short paragraph, friendly tone, under 80 words.' },
            { kind: 'good', text: 'Give me three bullet points, plain English, no jargon.' },
            { kind: 'good', text: 'Write as a polite formal letter with greeting and sign-off.' },
            { kind: 'bad', text: 'Make it good.' },
          ]
        }
      }
    },
    {
      idx: 5, kind: 'quiz', start: 1620, end: 1860,
      title: 'CHECKPOINT · DIAGNOSE THE PROMPT',
      eyebrow: 'SEGMENT 05 · KNOWLEDGE CHECK',
      body: {
        template: 'quiz',
        question: 'Your friend writes this prompt: "Hi can you help me with a thank-you note." Which two PREP parts are missing the most?',
        options: [
          { letter: 'A', text: 'Persona and Parameters — no expert role, no safety limits', right: false },
          { letter: 'B', text: 'Requirement and Expectation — task too vague, no format', right: true },
          { letter: 'C', text: 'Parameters and Expectation — no length or constraints', right: false },
          { letter: 'D', text: 'All four are missing equally', right: false },
        ],
        rightFeedback: 'Spot on. The biggest problems are <b>Requirement</b> ("help" isn\'t a task — thank who, for what?) and <b>Expectation</b> (email? text? card? how long?). Persona and Parameters are also absent but those two are what break the prompt first.',
        wrongFeedback: 'Re-read it. "Help me with a thank-you note" doesn\'t say <i>what</i> to do (Requirement) or <i>what shape</i> the output takes (Expectation). Those are the two missing legs.',
      }
    },
    {
      idx: 6, kind: 'concept', start: 1860, end: 2280,
      title: 'P · PARAMETERS',
      eyebrow: 'SEGMENT 06 · CONCEPT',
      body: {
        template: 'concept',
        sign: { kind: 'octagon', glyph: 'LIMIT' },
        heading: 'Set the safety limits',
        sub: 'step 4 of 4 · what NOT to do',
        paragraphs: [
          'The last part: <strong>what NOT to include</strong>. This is where you protect yourself. Even on a consumer tool, you should always tell the AI what to leave out.',
          'For a Learner\'s Permit, a good Parameters line might be: "Don\'t include my full name or address. Don\'t invent any facts — if you don\'t know, just say so."',
        ],
        examples: {
          title: 'Useful Parameters for daily use',
          items: [
            { kind: 'good', text: 'Don\'t include my full name or address.' },
            { kind: 'good', text: 'If you\'re not sure of a fact, say "I\'m not certain" instead of guessing.' },
            { kind: 'good', text: 'Keep it under 150 words.' },
            { kind: 'good', text: 'No emojis. Plain language only.' },
          ]
        },
        callout: { title: 'Coming next', body: 'In Module 7 you\'ll learn the full safe-use checklist for personal data — the things you should NEVER paste into a consumer AI tool.' }
      }
    },
    {
      idx: 7, kind: 'prepbuilder', start: 2280, end: 2820,
      title: 'PREP BUILDER · YOUR TURN',
      eyebrow: 'SEGMENT 07 · GUIDED PRACTICE',
      body: {
        template: 'prepbuilder',
        scenario: 'You want the AI to help you write a thank-you message after a job interview.',
        instructions: 'Fill in all four PREP fields below. Each field needs at least one sentence. The system will check that all four parts are present before you can continue.',
      }
    },
    {
      idx: 8, kind: 'reflect', start: 2820, end: 3000,
      title: 'WRAP · NICE DRIVING',
      eyebrow: 'SEGMENT 08 · WRAP-UP',
      body: { template: 'reflect' }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Welcome! I\'m Driver Ed — I\'ll be your instructor for this module. No questions are silly here.' },
    { t: 180,  kind: 'note', text: 'Quick tip: the road below is your progress. The car is where you are right now. Scrub backwards anytime.' },
    { t: 280,  kind: 'msg',  text: 'PERSONA. The single biggest leverage you have. The two words "Act as" change everything.' },
    { t: 480,  kind: 'note', text: 'Try this at home: ask the AI the same question with no Persona, then with "Act as a [specific expert]". You\'ll see immediately.' },
    { t: 720,  kind: 'msg',  text: 'REQUIREMENT. Plain, specific, with a verb. If you can\'t say what you want in one sentence, you\'re not ready to prompt yet.' },
    { t: 1000, kind: 'warn', text: '"Help me" is never a Requirement. Always tell the AI exactly what action to take.' },
    { t: 1240, kind: 'msg',  text: 'EXPECTATION. Format and length. Most prompts die here — the AI gives you an essay when you wanted bullets.' },
    { t: 1500, kind: 'note', text: 'My favourite Expectation: "three bullet points, plain English, under 60 words total." Reuse it constantly.' },
    { t: 1640, kind: 'warn', text: 'Knowledge check coming up. Don\'t rush — read every option twice.' },
    { t: 1880, kind: 'msg',  text: 'PARAMETERS. Even on a free tool — always set limits. It costs you nothing and it protects you.' },
    { t: 2100, kind: 'note', text: 'A safety habit: "Don\'t include my full name or address" — paste that into every personal prompt as a baseline.' },
    { t: 2300, kind: 'msg',  text: 'Your turn. Build a PREP prompt for the thank-you message scenario. I\'ll check all four parts when you submit.' },
    { t: 2700, kind: 'note', text: 'No need to be perfect. Just make sure each of the four boxes has at least a sentence in it.' },
    { t: 2840, kind: 'msg',  text: 'Beautiful work. You can write a PREP prompt now — you\'ll use this skill every single week.' },
    { t: 2960, kind: 'msg',  text: 'Module complete. Next stop: M-1-04 · Job Market Readiness.' },
  ]
};

// ============================================================
// LEVEL 2 (C) — M-2-04 · The AI Acceptable Use Policy
// Operator's Licence. Compliance. 100% binary attestation.
// ============================================================
window.AIDL_LESSONS['M-2-04'] = {
  id: 'M-2-04',
  level: 'C',
  title: 'M-2-04 · AI Acceptable Use Policy (AUP)',
  titleTop: 'M-2-04 · AI ACCEPTABLE USE POLICY',
  sub: 'LEVEL 2 · OPERATOR · MODULE 4 OF 9 · 45 MIN · ATTESTATION-GATED · 100%',
  duration: 45 * 60, // 2700s
  instructor: 'SGT. MERIDIAN',
  instructorRole: 'EXAMINER · COMPLIANCE & ROAD TESTS',
  passMark: 100,
  competencies: ['AI-CF-C-03'],
  los: ['LO-2-04-A', 'LO-2-04-B', 'LO-2-04-C'],
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 240,
      title: 'BRIEFING · AUP IN SCOPE',
      eyebrow: 'SEGMENT 01 · BRIEFING',
      body: {
        template: 'concept',
        sign: { kind: 'rect', glyph: 'AUP →' },
        heading: 'Today\'s exam',
        sub: '4 min · Sgt. Meridian on the clipboard',
        paragraphs: [
          'This isn\'t an optional module. By the end of it you\'ll attest, on the record, to having read and understood your organisation\'s <strong>AI Acceptable Use Policy</strong>.',
          'Your attestation is <strong>time-stamped, IP-logged, and stored in the compliance audit ledger</strong> for seven years. Failure to attest blocks every module after this one.',
        ],
        examples: {
          title: 'Pass conditions (AR-2-03, AR-2-04)',
          items: [
            { kind: 'good', text: 'Scroll 100% of the AUP text — system-verified' },
            { kind: 'good', text: 'Pass the scenario judgement quiz (9/10)' },
            { kind: 'good', text: 'Sign the attestation — typed full name + checkbox' },
            { kind: 'bad', text: 'Skip the scroll · Skip the sign-off — both block downstream modules' },
          ]
        },
        callout: { title: 'Why this is binary', body: 'Pass marks across the Operator\'s Licence are 75%. This module is the exception. AUP attestation is 100% — you either signed or you didn\'t. There is no partial credit.', icRed: true, icIcon: '!' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 240, end: 600,
      title: 'AUP PROVISIONS',
      eyebrow: 'SEGMENT 02 · CONCEPT',
      body: {
        template: 'concept',
        sign: { kind: 'circle', glyph: '!' },
        heading: 'The mandatory provisions',
        sub: 'six clauses · every employee · every interaction',
        paragraphs: [
          'Every approved AUP at minimum spells out <strong>six provisions</strong>: which tools you may use, how to classify data, when human review is mandatory, how to document AI-assisted work, how to escalate incidents, and what counts as misuse.',
          'These provisions are <strong>injected at runtime</strong> from your organisation\'s org-config. The text below is your org\'s actual AUP — not a template.',
        ],
        examples: {
          title: 'The six provisions',
          items: [
            { kind: 'good', text: '§1 · Approved tools — list and allow-list URL' },
            { kind: 'good', text: '§2 · Data classification — Traffic Light system applies' },
            { kind: 'good', text: '§3 · Mandatory human review — for client-facing outputs' },
            { kind: 'good', text: '§4 · Documentation — audit trail requirements' },
            { kind: 'good', text: '§5 · Incident escalation — 72-hour rule' },
            { kind: 'good', text: '§6 · Prohibited use — five named categories' },
          ]
        }
      }
    },
    {
      idx: 3, kind: 'concept', start: 600, end: 960,
      title: 'FIVE PROHIBITED USES',
      eyebrow: 'SEGMENT 03 · CONCEPT',
      body: {
        template: 'concept',
        sign: { kind: 'octagon', glyph: 'NO' },
        heading: 'The five red lines',
        sub: 'memorise these · grounds for dismissal',
        paragraphs: [
          'There are five categories of AI use that are <strong>flatly prohibited</strong> regardless of tool, intent, or convenience. Violations are disciplinary matters under the AUP.',
          'These map directly to scenario questions on the M-2-04 quiz and on the capstone.',
        ],
        examples: {
          title: 'Prohibited — no exceptions',
          items: [
            { kind: 'bad', text: '§6.1 · Inputting Red Light data into any AI tool (PII, PHI, financials, credentials)' },
            { kind: 'bad', text: '§6.2 · Using Shadow AI — any non-approved tool, with any corporate data' },
            { kind: 'bad', text: '§6.3 · Distributing AI output as final without human review' },
            { kind: 'bad', text: '§6.4 · Misrepresenting AI-generated content as human-authored' },
            { kind: 'bad', text: '§6.5 · Using AI to make protected-class decisions without governance review' },
          ]
        },
        callout: { title: 'Consequences', body: 'A single §6.1 or §6.2 violation generates a COMPLIANCE-FLAG on your record (AR-2-05). Two flags suspends your AI tool access pending governance review (AR-2-12).', icRed: true, icIcon: '!' }
      }
    },
    {
      idx: 4, kind: 'quiz', start: 960, end: 1320,
      title: 'SCENARIO JUDGEMENT · §6 APPLIED',
      eyebrow: 'SEGMENT 04 · KNOWLEDGE CHECK',
      body: {
        template: 'quiz',
        question: 'An employee uses their <strong>personal ChatGPT account</strong> to draft a client proposal because the corporate Copilot is "slow today". They paste the client\'s name and project budget into the prompt. Which AUP provisions did they violate?',
        options: [
          { letter: 'A', text: 'Only §6.2 — Shadow AI (the tool is unsanctioned)', right: false },
          { letter: 'B', text: 'Only §6.1 — Red Light data (the client name + budget)', right: false },
          { letter: 'C', text: '§6.1 AND §6.2 — both Red Light data and Shadow AI', right: true },
          { letter: 'D', text: 'No violation — the employee\'s intent was reasonable', right: false },
        ],
        rightFeedback: 'Correct. Two distinct violations have occurred. <b>§6.2</b> — the personal ChatGPT account is not on the approved tool list. <b>§6.1</b> — the client identity plus project budget is Red Light data (PII + financial). Intent is irrelevant under the AUP. This is a reportable incident.',
        wrongFeedback: 'Re-examine the scenario. Both the <i>tool class</i> (personal account, not on allow-list) and the <i>data class</i> (client name + budget) cross AUP lines independently. Either one alone is a flag — together they\'re a textbook §6.1+§6.2.',
      }
    },
    {
      idx: 5, kind: 'concept', start: 1320, end: 1620,
      title: 'CONSEQUENCES · DISCIPLINARY',
      eyebrow: 'SEGMENT 05 · CONCEPT',
      body: {
        template: 'concept',
        sign: { kind: 'triangle', glyph: 'WARN' },
        heading: 'What happens after a flag',
        sub: 'AR-2-05 · AR-2-12 · audit ledger',
        paragraphs: [
          'A COMPLIANCE-FLAG is logged to your user record within 30 seconds of the violation. Your line manager and the AI Governance Officer are both notified.',
          'The flag is <strong>persistent</strong>. It stays on your record for two years. A second flag inside 12 months triggers automatic suspension of AI tool access pending an investigation.',
        ],
        examples: {
          title: 'The escalation ladder',
          items: [
            { kind: 'bad', text: '1× FLAG · Manager notified · Mandatory remediation training' },
            { kind: 'bad', text: '2× FLAG · AI access suspended · Governance review opens' },
            { kind: 'bad', text: '§6 wilful violation · HR disciplinary process · Up to dismissal' },
          ]
        }
      }
    },
    {
      idx: 6, kind: 'aupread', start: 1620, end: 2160,
      title: 'READ THE AUP · IN FULL',
      eyebrow: 'SEGMENT 06 · MANDATORY READ',
      body: {
        template: 'aupread',
        org: 'NORTHWIND TRADING CO.',
        version: 'v3.2 · effective 01 May 2026',
        docId: 'NW-POL-AI-2026-03',
      }
    },
    {
      idx: 7, kind: 'attestation', start: 2160, end: 2520,
      title: 'ATTESTATION · SIGN HERE',
      eyebrow: 'SEGMENT 07 · COMPLIANCE SIGN-OFF',
      body: {
        template: 'attestation',
        org: 'NORTHWIND TRADING CO.',
      }
    },
    {
      idx: 8, kind: 'reflect', start: 2520, end: 2700,
      title: 'WRAP · ON THE LEDGER',
      eyebrow: 'SEGMENT 08 · WRAP-UP',
      body: { template: 'reflect' }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Sgt. Meridian, examiner. This is a 100% module — there is no margin here. Settle in and pay attention.' },
    { t: 160,  kind: 'warn', text: 'Heads up: every action you take in this module is logged to the audit ledger. That\'s the point of attestation.' },
    { t: 280,  kind: 'msg',  text: 'Six provisions. Memorise them. They\'ll come up in every Operator road test.' },
    { t: 480,  kind: 'note', text: 'Your org\'s actual AUP is injected at runtime. The clauses you see are the ones you\'ll be examined on — not generic ones.' },
    { t: 640,  kind: 'msg',  text: 'The five red lines. If you only retain one slide from this module, retain this one.' },
    { t: 820,  kind: 'warn', text: '§6.1 and §6.2 generate <i>automatic</i> compliance flags. No human approval needed — the system writes them on detection.' },
    { t: 980,  kind: 'warn', text: 'Quiz time. The scenario is real — pulled from last quarter\'s incident reports, anonymised.' },
    { t: 1340, kind: 'msg',  text: 'Consequences. People underestimate this. A single §6 flag follows you for two years.' },
    { t: 1640, kind: 'msg',  text: 'Now read the AUP. <i>All</i> of it. The system tracks your scroll position — you cannot skip ahead.' },
    { t: 1900, kind: 'note', text: 'Take notes if it helps. The clauses you\'re unsure about — flag them now. We\'ll cover them in M-2-09 escalation.' },
    { t: 2180, kind: 'msg',  text: 'Attestation. Type your full legal name and tick the box. This signature is binding for the duration of your Operator\'s Licence.' },
    { t: 2360, kind: 'warn', text: 'Do not click attest until you have actually read the document. Falsely attesting is itself a §6 violation.' },
    { t: 2540, kind: 'msg',  text: 'Signed. Logged. Ledgered. You may proceed to M-2-05. Drive carefully out there.' },
  ]
};

// ============================================================
// LEVEL 3 (A) — M-3-03 · AI Risk Assessment & Red-Teaming
// Specialist Endorsement. Advanced. 80% threshold.
// ============================================================
window.AIDL_LESSONS['M-3-03'] = {
  id: 'M-3-03',
  level: 'A',
  title: 'M-3-03 · AI Risk Assessment & Red-Teaming',
  titleTop: 'M-3-03 · AI RISK ASSESSMENT & RED-TEAMING',
  sub: 'LEVEL 3 · SPECIALIST · MODULE 3 OF 8 · 65 MIN · PASS MARK 80%',
  duration: 65 * 60, // 3900s
  instructor: 'UNIT 0X-SAFE',
  instructorRole: 'SAFETY OFFICER · RED-TEAM SPECIALIST',
  passMark: 80,
  competencies: ['AI-CF-A-03'],
  los: ['LO-3-03-A', 'LO-3-03-B', 'LO-3-03-C'],
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 300,
      title: 'BRIEFING · STRIDE-AI',
      eyebrow: 'SEGMENT 01 · BRIEFING',
      body: {
        template: 'concept',
        sign: { kind: 'rect', glyph: 'STRIDE' },
        heading: 'Adversarial mindset, methodical framework',
        sub: '5 min · UNIT 0X-SAFE · Specialist track',
        paragraphs: [
          'STRIDE-AI is the threat-modelling framework you\'ll use to assess every enterprise AI deployment for the rest of your career. <strong>Six categories.</strong> Each maps to a class of failure mode the AI must be hardened against.',
          'This module is in two parts. Part 1: STRIDE-AI applied to a real deployment — you\'ll build a complete risk register. Part 2: a sandboxed red-team console where you\'ll probe a live model and document what holds and what breaks.',
        ],
        examples: {
          title: 'STRIDE-AI · the six categories',
          items: [
            { kind: 'good', text: 'S · Spoofing — impersonation of users, agents, or upstream systems' },
            { kind: 'good', text: 'T · Tampering — model weights, RAG corpus, or prompt-chain manipulation' },
            { kind: 'good', text: 'R · Repudiation — actions taken by AI that no one will own' },
            { kind: 'good', text: 'I · Information disclosure — prompt leakage, embedding inversion, PII exfiltration' },
            { kind: 'good', text: 'D · Denial of service — context-window flood, cost exhaustion, jailbreak loops' },
            { kind: 'good', text: 'E · Elevation of privilege — tool abuse, agent escalation, sandbox escape' },
          ]
        },
        callout: { title: 'Pass criteria', body: 'Risk register: 5 of 6 STRIDE categories populated. Red-team console: 3 attack objectives submitted with analysis. Quiz: 80%. Capstone gate (AR-3-03) unlocks on completion.' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 300, end: 720,
      title: 'SCENARIO · EMPLOYEE MONITORING AI',
      eyebrow: 'SEGMENT 02 · SCENARIO',
      body: {
        template: 'concept',
        sign: { kind: 'triangle', glyph: 'HAZARD' },
        heading: 'Your deployment',
        sub: 'productivity-monitoring AI · 1,800 employees · live in 90 days',
        paragraphs: [
          'Your organisation is rolling out an AI tool that <strong>monitors employee productivity</strong> by analysing screen activity, application focus time, and message sentiment. Vendor is reputable. Data stays in your tenant. Procurement is signed.',
          'You\'ve been pulled in by Governance to red-team it before launch. Your output is a STRIDE-AI risk register with mitigations, due Friday.',
        ],
        examples: {
          title: 'What you know',
          items: [
            { kind: 'good', text: 'Vendor · ProdSight AI · SaaS · ISO 27001 certified' },
            { kind: 'good', text: 'Inputs · keystroke metadata, app focus times, calendar, Slack sentiment' },
            { kind: 'good', text: 'Outputs · daily productivity score per employee, weekly team report' },
            { kind: 'good', text: 'Consumers · line managers, HR, executive dashboard' },
            { kind: 'bad', text: 'Unknown · model card, training data lineage, audit-log retention' },
          ]
        }
      }
    },
    {
      idx: 3, kind: 'riskregister', start: 720, end: 1620,
      title: 'BUILD THE RISK REGISTER',
      eyebrow: 'SEGMENT 03 · LAB · STRIDE-AI',
      body: {
        template: 'riskregister',
        scenario: 'ProdSight AI productivity monitor — pre-launch red-team.',
      }
    },
    {
      idx: 4, kind: 'redteam', start: 1620, end: 2640,
      title: 'RED-TEAM CONSOLE',
      eyebrow: 'SEGMENT 04 · LAB · ADVERSARIAL PROMPTING',
      body: {
        template: 'redteam',
        target: 'ProdSight AI · sandboxed instance',
      }
    },
    {
      idx: 5, kind: 'quiz', start: 2640, end: 2940,
      title: 'CHECKPOINT · STRIDE MAPPING',
      eyebrow: 'SEGMENT 05 · KNOWLEDGE CHECK',
      body: {
        template: 'quiz',
        question: 'A line manager realises she can craft a prompt that makes ProdSight rank a named direct report as <strong>"underperforming"</strong> regardless of input — and there is no log of who issued the prompt. Which two STRIDE-AI categories are simultaneously in play?',
        options: [
          { letter: 'A', text: 'Spoofing + Denial of Service', right: false },
          { letter: 'B', text: 'Tampering + Repudiation', right: true },
          { letter: 'C', text: 'Information disclosure + Elevation of privilege', right: false },
          { letter: 'D', text: 'Spoofing + Tampering', right: false },
        ],
        rightFeedback: 'Correct. <b>Tampering</b> — the prompt manipulates a scoring output regardless of legitimate input. <b>Repudiation</b> — without prompt provenance logging, the manager can deny ever having issued it. Mitigation must address <i>both</i>: input filtering (T) and tamper-evident audit logging (R).',
        wrongFeedback: 'Re-examine. The scoring output is being <i>manipulated</i> regardless of input → Tampering. There is <i>no audit log of who issued the prompt</i> → Repudiation. Both at once, and both need separate mitigations.',
      }
    },
    {
      idx: 6, kind: 'concept', start: 2940, end: 3360,
      title: 'MITIGATION LIBRARY',
      eyebrow: 'SEGMENT 06 · CONCEPT',
      body: {
        template: 'concept',
        sign: { kind: 'rect', glyph: 'GUARD' },
        heading: 'Standard mitigations · STRIDE-AI',
        sub: 'apply at least one per category in the register',
        paragraphs: [
          'There is a vetted mitigation library you should reach for first — these are the controls that pass Governance Charter review without requiring custom engineering.',
          'For each risk in your register, name a specific control. "Add monitoring" is not a control. "Tamper-evident append-only prompt log written to immutable storage, retained 7 years" is a control.',
        ],
        examples: {
          title: 'Library · STRIDE-AI controls',
          items: [
            { kind: 'good', text: 'S · SSO-only access · per-user signed prompt tokens · agent identity assertion' },
            { kind: 'good', text: 'T · Prompt-input sanitisation · RAG corpus checksum · output schema validation' },
            { kind: 'good', text: 'R · Append-only prompt + response log · per-user attribution · tamper-evident hash' },
            { kind: 'good', text: 'I · Output PII filter · embedding access controls · prompt injection detection' },
            { kind: 'good', text: 'D · Rate limits · cost-per-user caps · circuit breaker on jailbreak loops' },
            { kind: 'good', text: 'E · Tool-use allow-list · least-privilege agent scopes · human gate on sensitive tools' },
          ]
        },
        callout: { title: 'Capstone link', body: 'Your blueprint (M-3-CAP) Section 5 inherits this risk register directly. Make sure mitigations are named, specific, and operationally feasible — peer reviewers will mark you down for fluff.', icRed: true, icIcon: '!' }
      }
    },
    {
      idx: 7, kind: 'concept', start: 3360, end: 3720,
      title: 'PEER REVIEW · WHAT THEY GRADE',
      eyebrow: 'SEGMENT 07 · CAPSTONE PREP',
      body: {
        template: 'concept',
        sign: { kind: 'diamond', glyph: 'EXAM' },
        heading: 'Your risk register, peer-reviewed',
        sub: 'CAP-R-05 · 10 points · two reviewers',
        paragraphs: [
          'Section 5 of your capstone blueprint is the STRIDE-AI risk register from this module — peer-reviewed against the same rubric used here.',
          'Two Level 3 candidates will score your register within 72 hours of submission. Highest weights go to <strong>category coverage</strong>, <strong>mitigation specificity</strong>, and <strong>information disclosure depth</strong>.',
        ],
        examples: {
          title: 'Rubric · what scores 10/10',
          items: [
            { kind: 'good', text: 'All six STRIDE categories populated with at least one named risk' },
            { kind: 'good', text: 'Information Disclosure section contains at least one High-impact entry' },
            { kind: 'good', text: 'Every risk has likelihood, impact, owner, and a named control' },
            { kind: 'good', text: 'Controls are drawn from the mitigation library or justified novel' },
          ]
        }
      }
    },
    {
      idx: 8, kind: 'reflect', start: 3720, end: 3900,
      title: 'WRAP · ENDORSED RED-TEAM',
      eyebrow: 'SEGMENT 08 · WRAP-UP',
      body: { template: 'reflect' }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Unit 0X-Safe online. Long module — buckle in. This is the lesson your Specialist Endorsement hinges on.' },
    { t: 180,  kind: 'note', text: 'STRIDE was originally a Microsoft security framework. STRIDE-AI adapts it for model-and-agent failure modes. Same shape, different threats.' },
    { t: 340,  kind: 'msg',  text: 'Your deployment scenario. Real shape, fictional vendor. The kind of brief you\'ll get on day one as an AI Champion.' },
    { t: 540,  kind: 'warn', text: 'Notice what you DON\'T know — model card, training data, audit retention. Half your risk register will come from these unknowns.' },
    { t: 760,  kind: 'msg',  text: 'Risk register lab. Take your time. The system validates structure, not stylistic prose.' },
    { t: 1100, kind: 'note', text: 'A pattern: every productivity-monitoring AI fails Information Disclosure first. Look hard there.' },
    { t: 1400, kind: 'note', text: 'Mitigation specificity is the difference between a 6/10 register and a 10/10 register. Name the control, name the storage, name the retention.' },
    { t: 1640, kind: 'msg',  text: 'Red-Team Console. Sandboxed. Anything goes — content moderation is in place but ethical boundary probes are <i>encouraged</i>, not penalised.' },
    { t: 1900, kind: 'warn', text: 'The sandbox logs every prompt for curriculum analytics. Your name is attached, but there is no penalty for adversarial intent — that\'s the entire point.' },
    { t: 2200, kind: 'note', text: 'Three attack objectives: injection, jailbreak, extraction. Submit one prompt for each. Document what held, what broke, propose a fix.' },
    { t: 2660, kind: 'warn', text: 'Quiz checkpoint. Two STRIDE categories in play simultaneously. Common pattern — peer reviewers test for it.' },
    { t: 2960, kind: 'msg',  text: 'Mitigation library. Memorise the shape — at least one named control per category, drawn from this list or justified novel.' },
    { t: 3380, kind: 'msg',  text: 'Peer review preview. Your blueprint Section 5 inherits this work directly. Two reviewers, 72-hour window.' },
    { t: 3760, kind: 'msg',  text: 'Module clear. Risk register exported to your Licence Portfolio. Proceed to M-3-04 when ready.' },
  ]
};
