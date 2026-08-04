// ============================================================
// AIDL Lesson Library — additional modules
// Extends window.AIDL_LESSONS (defined in lessons.js) so that
// every level (L / C / A) has a multi-lesson curriculum the
// Lesson Player can page between via the lesson picker.
//   L · Learner's Permit  → full set M-1-01…M-1-07 (see lessons-complete.js)
//   C · Operator's Licence → M-2-02 · M-2-04 · M-2-07
//   A · Specialist Endorse → M-3-01 · M-3-03 · M-3-06
// ============================================================
(function () {
  const L = window.AIDL_LESSONS;

  // ==========================================================
  // LEVEL 1 (L) — M-1-01 · Meet Your AI Co-Pilot
  // ==========================================================
  L['M-1-01'] = {
    id: 'M-1-01', level: 'L', next: 'M-1-02',
    title: 'M-1-01 · Meet Your AI Co-Pilot',
    titleTop: 'M-1-01 · MEET YOUR AI CO-PILOT',
    sub: 'LEVEL 1 · LEARNER\'S PERMIT · MODULE 1 OF 7 · 40 MIN · PASS MARK 70%',
    duration: 40 * 60,
    instructor: 'DRIVER ED',
    instructorRole: 'INSTRUCTOR · CLASS L · FUNDAMENTALS',
    passMark: 70,
    competencies: ['AI-CF-L-01'], los: ['LO-1-01-A', 'LO-1-01-B'],
    segments: [
      { idx: 1, kind: 'concept', start: 0, end: 480, title: 'WELCOME · KEYS TO THE CAR', eyebrow: 'SEGMENT 01 · WELCOME',
        body: { template: 'concept', sign: { kind: 'circle', glyph: 'GO' },
          heading: 'What is this thing, really?', sub: '8 min · introduction · no experience needed',
          paragraphs: [
            'An AI chatbot is a <strong>very good pattern-matcher</strong>. It read an enormous amount of text and learned to predict what words should come next. That\'s it — it doesn\'t "know" things the way you do.',
            'That one fact explains almost everything: why it\'s brilliant at drafting and terrible at facts, why it sounds confident even when it\'s wrong, and why <strong>your instructions matter so much</strong>.',
          ],
          examples: { title: 'What AI is great at (and not)', items: [
            { kind: 'good', text: 'Drafting, rephrasing, summarising, brainstorming' },
            { kind: 'good', text: 'Explaining ideas in simpler words' },
            { kind: 'bad', text: 'Being a reliable source of facts on its own' },
            { kind: 'bad', text: 'Knowing anything private about you unless you tell it' },
          ] },
          callout: { title: 'The co-pilot rule', body: 'You are always the driver. AI is the co-pilot — helpful with directions, never trusted to take the wheel alone.' } } },
      { idx: 2, kind: 'concept', start: 480, end: 1080, title: 'HOW A PROMPT BECOMES AN ANSWER', eyebrow: 'SEGMENT 02 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'rect', glyph: 'PROMPT →' },
          heading: 'You type, it predicts', sub: 'the prompt is the steering wheel',
          paragraphs: [
            'The words you type are called a <strong>prompt</strong>. The AI reads them and produces the most likely helpful continuation. Change the prompt, change the answer — every time.',
            'This is great news: it means you can get much better results just by <strong>asking better</strong>, no technical skill required.',
          ],
          examples: { title: 'Same goal, better prompt', items: [
            { kind: 'bad', text: '"tell me about dogs"' },
            { kind: 'good', text: '"Explain to a 10-year-old why dogs wag their tails, in 3 short sentences."' },
          ] } } },
      { idx: 3, kind: 'quiz', start: 1080, end: 1440, title: 'CHECKPOINT · WHAT AI IS', eyebrow: 'SEGMENT 03 · KNOWLEDGE CHECK',
        body: { template: 'quiz',
          question: 'Your AI answers a history question with total confidence, but the date is wrong. What most likely happened?',
          options: [
            { letter: 'A', text: 'It lied to you on purpose', right: false },
            { letter: 'B', text: 'It predicted likely-sounding text without checking a real source', right: true },
            { letter: 'C', text: 'Your internet is broken', right: false },
            { letter: 'D', text: 'AI never makes mistakes, so the textbook is wrong', right: false },
          ],
          rightFeedback: 'Exactly. AI predicts plausible words. That\'s a <b>hallucination</b> — confident, fluent, and sometimes wrong. Always verify facts that matter.',
          wrongFeedback: 'Not quite. AI doesn\'t lie or "decide" — it predicts likely text. When the likely text isn\'t true, you get a confident-sounding mistake called a hallucination.' } },
      { idx: 4, kind: 'concept', start: 1440, end: 2040, title: 'YOUR THREE HABITS', eyebrow: 'SEGMENT 04 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'triangle', glyph: 'CARE' },
          heading: 'Three habits from day one', sub: 'the basics that keep you safe',
          paragraphs: [
            'You don\'t need to memorise a rulebook yet. Just build three habits: <strong>keep private things private</strong>, <strong>check anything important</strong>, and <strong>stay in charge of the final decision</strong>.',
            'Everything else in your Learner\'s Permit builds on these three.',
          ],
          examples: { title: 'The three habits', items: [
            { kind: 'good', text: 'Never paste passwords, ID numbers, or a full home address' },
            { kind: 'good', text: 'Verify facts, dates, and numbers before you rely on them' },
            { kind: 'good', text: 'Read and edit AI output — make it yours before you use it' },
          ] },
          callout: { title: 'Coming up', body: 'Next module (M-1-03) teaches PREP — a simple 4-part recipe for prompts that actually work.' } } },
      { idx: 5, kind: 'reflect', start: 2040, end: 2400, title: 'WRAP · LICENCE STARTED', eyebrow: 'SEGMENT 05 · WRAP-UP',
        body: { template: 'reflect' } },
    ],
    commentary: [
      { t: 0, kind: 'msg', text: 'Welcome to your very first lesson! I\'m Driver Ed. There are no silly questions here.' },
      { t: 300, kind: 'note', text: 'Remember the one big idea: AI predicts likely text. It\'s a pattern-matcher, not an oracle.' },
      { t: 520, kind: 'msg', text: 'The prompt is your steering wheel. Better prompt in, better answer out.' },
      { t: 1100, kind: 'warn', text: 'Checkpoint coming — think about WHY AI gets facts wrong.' },
      { t: 1500, kind: 'msg', text: 'Three habits: keep private things private, check what matters, stay the decision-maker.' },
      { t: 2060, kind: 'msg', text: 'Nicely done. Your Learner\'s Permit is officially started. Next stop: the PREP framework.' },
    ],
  };

  // ==========================================================
  // LEVEL 1 (L) — M-1-07 · Personal Data & Safe Use
  // ==========================================================
  L['M-1-07'] = {
    id: 'M-1-07', level: 'L', next: null,
    title: 'M-1-07 · Personal Data & Safe Use',
    titleTop: 'M-1-07 · PERSONAL DATA & SAFE USE',
    sub: 'LEVEL 1 · LEARNER\'S PERMIT · MODULE 7 OF 7 · 45 MIN · PASS MARK 70%',
    duration: 45 * 60,
    instructor: 'DRIVER ED',
    instructorRole: 'INSTRUCTOR · CLASS L · FUNDAMENTALS',
    passMark: 70,
    competencies: ['AI-CF-L-07'], los: ['LO-1-07-A', 'LO-1-07-B'],
    segments: [
      { idx: 1, kind: 'concept', start: 0, end: 420, title: 'WHAT COUNTS AS PRIVATE', eyebrow: 'SEGMENT 01 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'octagon', glyph: 'STOP' },
          heading: 'The never-paste list', sub: 'personal data belongs to you',
          paragraphs: [
            'Some information should <strong>never</strong> go into a consumer AI tool. Once it\'s pasted, you\'ve lost control of where it goes.',
            'This is the single most important safety skill on your Learner\'s Permit.',
          ],
          examples: { title: 'Never paste these', items: [
            { kind: 'bad', text: 'Full name + home address together' },
            { kind: 'bad', text: 'Passwords, PINs, or verification codes' },
            { kind: 'bad', text: 'Bank details, card numbers, national ID' },
            { kind: 'bad', text: 'Someone else\'s private information' },
          ] },
          callout: { title: 'Why it matters', body: 'Free AI tools may use what you type to improve their models. Treat every prompt like a postcard — assume someone could read it.', icRed: true, icIcon: '!' } } },
      { idx: 2, kind: 'concept', start: 420, end: 960, title: 'ANONYMISE, THEN ASK', eyebrow: 'SEGMENT 02 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'circle', glyph: '[ ]' },
          heading: 'The placeholder trick', sub: 'get the help without the risk',
          paragraphs: [
            'You can still get help with real situations — just swap the private bits for <strong>placeholders</strong> first.',
            'Replace names with [Name], addresses with [Address], amounts with [Amount]. The AI drafts around the blanks; you fill them in afterwards.',
          ],
          examples: { title: 'Before → after', items: [
            { kind: 'bad', text: '"Write to my landlord Sam at 14 Maple St about my £900 deposit."' },
            { kind: 'good', text: '"Write to my landlord [Name] about returning my [Amount] deposit."' },
          ] } } },
      { idx: 3, kind: 'quiz', start: 960, end: 1320, title: 'CHECKPOINT · SPOT THE RISK', eyebrow: 'SEGMENT 03 · KNOWLEDGE CHECK',
        body: { template: 'quiz',
          question: 'Which of these is safe to paste into a free consumer AI tool as-is?',
          options: [
            { letter: 'A', text: 'A photo of your passport to "check it\'s valid"', right: false },
            { letter: 'B', text: 'Your CV with your phone number and address', right: false },
            { letter: 'C', text: 'A public news article you want summarised', right: true },
            { letter: 'D', text: 'A friend\'s medical results you want explained', right: false },
          ],
          rightFeedback: 'Correct. A public article contains no personal data — it\'s already published. The others all contain private information (yours or someone else\'s).',
          wrongFeedback: 'Look again. A, B and D all contain personal data — yours or another person\'s. Only the public article is safe to paste as-is.' } },
      { idx: 4, kind: 'prepbuilder', start: 1320, end: 1980, title: 'PRACTICE · SAFE PROMPT', eyebrow: 'SEGMENT 04 · GUIDED PRACTICE',
        body: { template: 'prepbuilder',
          scenario: 'You want help drafting a message to a company about a delayed order — without exposing your personal details.',
          instructions: 'Build a PREP prompt. In Parameters, spell out what the AI must NOT include (your real name, address, order number). Use placeholders instead.' } },
      { idx: 5, kind: 'reflect', start: 1980, end: 2700, title: 'WRAP · PERMIT COMPLETE', eyebrow: 'SEGMENT 05 · WRAP-UP',
        body: { template: 'reflect' } },
    ],
    commentary: [
      { t: 0, kind: 'warn', text: 'This is the safety module. If you remember one lesson from your Permit, make it this one.' },
      { t: 300, kind: 'msg', text: 'The never-paste list: passwords, IDs, bank details, addresses, other people\'s info.' },
      { t: 480, kind: 'note', text: 'The placeholder trick lets you get help on real situations safely. Swap in [Name], [Amount], [Address].' },
      { t: 980, kind: 'warn', text: 'Checkpoint — decide what\'s actually safe to paste.' },
      { t: 1360, kind: 'msg', text: 'Now build a safe prompt with placeholders. I\'ll check your Parameters line.' },
      { t: 2000, kind: 'msg', text: 'That\'s the last module in your Learner\'s Permit — licence earned. Well driven!' },
    ],
  };

  // ==========================================================
  // LEVEL 2 (C) — M-2-02 · The Traffic Light Data Check
  // ==========================================================
  L['M-2-02'] = {
    id: 'M-2-02', level: 'C', next: 'M-2-03',
    title: 'M-2-02 · The Traffic Light Data Check',
    titleTop: 'M-2-02 · THE TRAFFIC LIGHT DATA CHECK',
    sub: 'LEVEL 2 · OPERATOR · MODULE 2 OF 7 · 40 MIN · PASS MARK 75%',
    duration: 40 * 60,
    instructor: 'PROF. RAGGA',
    instructorRole: 'SPECIALIST · DATA CLASSIFICATION',
    passMark: 75,
    competencies: ['AI-CF-C-02'], los: ['LO-2-02-A', 'LO-2-02-B'],
    segments: [
      { idx: 1, kind: 'concept', start: 0, end: 420, title: 'THREE-SECOND CHECK', eyebrow: 'SEGMENT 01 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'octagon', glyph: 'CHECK' },
          heading: 'Classify before you paste', sub: 'the check that prevents most incidents',
          paragraphs: [
            'Before any prompt goes into an AI tool at work, run the <strong>Traffic Light check</strong>: is this data Green, Amber, or Red? Three seconds, every time.',
            'Nearly every AI compliance incident traces back to a skipped classification. Make it a reflex.',
          ],
          examples: { title: 'The three lights', items: [
            { kind: 'good', text: 'GREEN · public / non-personal → any approved tool' },
            { kind: 'good', text: 'AMBER · internal, non-sensitive → enterprise tool only' },
            { kind: 'bad', text: 'RED · PII, PHI, financial, secrets → never input' },
          ] },
          callout: { title: 'The habit', body: 'Say the colour out loud in your head before you hit paste. Green go, amber caution, red stop.' } } },
      { idx: 2, kind: 'concept', start: 420, end: 960, title: 'WHAT MAKES DATA RED', eyebrow: 'SEGMENT 02 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'octagon', glyph: 'RED' },
          heading: 'The red categories', sub: 'if any of these appear, stop',
          paragraphs: [
            'Red data is anything <strong>regulated, confidential, or personally identifying</strong>. It never enters any AI tool — enterprise or consumer — in raw form.',
            'The fix is always the same: anonymise it, and it becomes Amber.',
          ],
          examples: { title: 'Red flags', items: [
            { kind: 'bad', text: 'Names, emails, phone numbers, IDs (PII)' },
            { kind: 'bad', text: 'Medical or insurance data (PHI)' },
            { kind: 'bad', text: 'Salaries, contracts, pricing, source code' },
            { kind: 'good', text: 'Anonymise → replace with [Name], [Band], [Date] → now Amber' },
          ] } } },
      { idx: 3, kind: 'quiz', start: 960, end: 1320, title: 'CHECKPOINT · CLASSIFY IT', eyebrow: 'SEGMENT 03 · KNOWLEDGE CHECK',
        body: { template: 'quiz',
          question: 'A colleague wants to summarise the minutes of an internal strategy meeting (no names, no financials) using the company\'s approved enterprise AI. What light is this?',
          options: [
            { letter: 'A', text: 'Green — go ahead in any tool', right: false },
            { letter: 'B', text: 'Amber — internal but non-sensitive, enterprise tool only', right: true },
            { letter: 'C', text: 'Red — stop, never input', right: false },
            { letter: 'D', text: 'It depends on the colleague\'s job title', right: false },
          ],
          rightFeedback: 'Correct. Internal, non-sensitive content with no PII or financials is <b>Amber</b> — fine in the org\'s approved enterprise instance, never in a free consumer tool.',
          wrongFeedback: 'Re-check. It\'s internal (so not Green) but has no PII or financials (so not Red). Internal + non-sensitive = Amber → enterprise tool only.' } },
      { idx: 4, kind: 'concept', start: 1320, end: 1740, title: 'WHEN IN DOUBT', eyebrow: 'SEGMENT 04 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'triangle', glyph: 'ASK' },
          heading: 'Escalate the grey areas', sub: 'a good operator asks',
          paragraphs: [
            'Some data sits on the line. When you genuinely can\'t tell, treat it as the <strong>higher-risk</strong> colour and check with your data owner or Governance contact.',
            'Caution is never a mistake. Guessing wrong on Red is.',
          ],
          examples: { title: 'Escalate when…', items: [
            { kind: 'good', text: 'You\'re unsure whether a field counts as PII' },
            { kind: 'good', text: 'Data mixes public and internal content' },
            { kind: 'good', text: 'A client contract might cover the material' },
          ] } } },
      { idx: 5, kind: 'reflect', start: 1740, end: 2400, title: 'WRAP · CLASSIFIED', eyebrow: 'SEGMENT 05 · WRAP-UP',
        body: { template: 'reflect' } },
    ],
    commentary: [
      { t: 0, kind: 'msg', text: 'Prof. Ragga here. This module is the reflex that keeps you off the incident report.' },
      { t: 300, kind: 'note', text: 'Green go, amber caution, red stop. Say it before every paste.' },
      { t: 480, kind: 'warn', text: 'Red is regulated, confidential, or identifying. Raw Red never enters any tool.' },
      { t: 980, kind: 'warn', text: 'Checkpoint — classify a real scenario.' },
      { t: 1360, kind: 'msg', text: 'Grey areas exist. When unsure, round UP to the riskier colour and ask.' },
      { t: 1760, kind: 'msg', text: 'Classified and clear. Next: the Acceptable Use Policy attestation.' },
    ],
  };

  // ==========================================================
  // LEVEL 2 (C) — M-2-07 · Human-in-the-Loop Review
  // ==========================================================
  L['M-2-07'] = {
    id: 'M-2-07', level: 'C', next: null,
    title: 'M-2-07 · Human-in-the-Loop Review',
    titleTop: 'M-2-07 · HUMAN-IN-THE-LOOP REVIEW',
    sub: 'LEVEL 2 · OPERATOR · MODULE 7 OF 7 · 45 MIN · PASS MARK 75%',
    duration: 45 * 60,
    instructor: 'SGT. MERIDIAN',
    instructorRole: 'EXAMINER · COMPLIANCE & ROAD TESTS',
    passMark: 75,
    competencies: ['AI-CF-C-07'], los: ['LO-2-07-A', 'LO-2-07-B'],
    segments: [
      { idx: 1, kind: 'concept', start: 0, end: 420, title: 'AI DRAFTS, HUMANS DECIDE', eyebrow: 'SEGMENT 01 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'triangle', glyph: 'YIELD' },
          heading: 'The co-pilot never lands the plane', sub: 'accountability stays human',
          paragraphs: [
            'AI is a <strong>drafting assistant</strong>. For anything that goes to a client, a regulator, a court, or a person\'s record, a qualified human must review and own the output.',
            'This isn\'t bureaucracy — it\'s where accountability lives. If it has your name on it, you are responsible for it.',
          ],
          examples: { title: 'Always human-reviewed', items: [
            { kind: 'good', text: 'External communications & marketing' },
            { kind: 'good', text: 'Legal, financial, and regulatory documents' },
            { kind: 'good', text: 'HR and any decision affecting a person' },
          ] },
          callout: { title: 'The line', body: 'AI is the co-pilot, never the captain. A human signs off on anything that matters.' } } },
      { idx: 2, kind: 'concept', start: 420, end: 960, title: 'A REVIEW THAT ACTUALLY WORKS', eyebrow: 'SEGMENT 02 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'rect', glyph: 'REVIEW' },
          heading: 'Read like an editor, not a rubber stamp', sub: 'four things to check every time',
          paragraphs: [
            'A real review catches what AI gets wrong: <strong>facts, tone, bias, and leaks</strong>. Skimming and clicking approve is not review.',
            'Build the four-point pass into your workflow so it\'s automatic.',
          ],
          examples: { title: 'The four-point pass', items: [
            { kind: 'good', text: 'Facts — every claim, number, citation verified' },
            { kind: 'good', text: 'Tone — right voice for the audience' },
            { kind: 'good', text: 'Bias — fair, no skew or stereotype' },
            { kind: 'good', text: 'Leaks — no data that shouldn\'t be there' },
          ] } } },
      { idx: 3, kind: 'quiz', start: 960, end: 1320, title: 'CHECKPOINT · WHO SIGNS OFF', eyebrow: 'SEGMENT 03 · KNOWLEDGE CHECK',
        body: { template: 'quiz',
          question: 'An AI drafts a customer refund decision. It looks correct. Under human-in-the-loop, what must happen before it\'s sent?',
          options: [
            { letter: 'A', text: 'Nothing — if it looks correct, send it', right: false },
            { letter: 'B', text: 'A qualified person reviews and takes ownership of the decision', right: true },
            { letter: 'C', text: 'Ask the AI to double-check its own work', right: false },
            { letter: 'D', text: 'Forward it to the customer marked "AI-generated"', right: false },
          ],
          rightFeedback: 'Correct. A decision affecting a person needs a qualified human to review and own it. "Looks correct" and "AI checked itself" are not accountability.',
          wrongFeedback: 'Not quite. A person is affected, so a qualified human must review and take ownership before it goes out. AI cannot self-approve or be the decision-maker.' } },
      { idx: 4, kind: 'concept', start: 1320, end: 1740, title: 'DOCUMENT THE LOOP', eyebrow: 'SEGMENT 04 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'rect', glyph: 'LOG' },
          heading: 'Leave an audit trail', sub: 'who reviewed, what changed, when',
          paragraphs: [
            'For regulated work, note that AI assisted, who reviewed it, and what they changed. It protects you and satisfies the AUP\'s documentation clause.',
            'A one-line note is usually enough: "AI-assisted draft, reviewed and edited by [you], [date]."',
          ],
          examples: { title: 'What to record', items: [
            { kind: 'good', text: 'That AI was used, and which tool' },
            { kind: 'good', text: 'Who reviewed and approved' },
            { kind: 'good', text: 'Material changes made during review' },
          ] } } },
      { idx: 5, kind: 'reflect', start: 1740, end: 2700, title: 'WRAP · IN THE LOOP', eyebrow: 'SEGMENT 05 · WRAP-UP',
        body: { template: 'reflect' } },
    ],
    commentary: [
      { t: 0, kind: 'msg', text: 'Sgt. Meridian. Accountability doesn\'t transfer to a machine. Keep that front of mind.' },
      { t: 300, kind: 'warn', text: 'AI is co-pilot, never captain. A human owns anything that matters.' },
      { t: 480, kind: 'note', text: 'The four-point pass: facts, tone, bias, leaks. Every review, every time.' },
      { t: 980, kind: 'warn', text: 'Checkpoint — who signs off on a decision about a person?' },
      { t: 1360, kind: 'msg', text: 'Document the loop. One line covers you: AI-assisted, reviewed by you, dated.' },
      { t: 1760, kind: 'msg', text: 'Good. That completes the review track for your Operator\'s Licence.' },
    ],
  };

  // ==========================================================
  // LEVEL 3 (A) — M-3-01 · AI Governance Foundations
  // ==========================================================
  L['M-3-01'] = {
    id: 'M-3-01', level: 'A', next: 'M-3-02',
    title: 'M-3-01 · AI Governance Foundations',
    titleTop: 'M-3-01 · AI GOVERNANCE FOUNDATIONS',
    sub: 'LEVEL 3 · SPECIALIST · MODULE 1 OF 7 · 55 MIN · PASS MARK 80%',
    duration: 55 * 60,
    instructor: 'UNIT 0X-SAFE',
    instructorRole: 'SAFETY OFFICER · GOVERNANCE',
    passMark: 80,
    competencies: ['AI-CF-A-01'], los: ['LO-3-01-A', 'LO-3-01-B'],
    segments: [
      { idx: 1, kind: 'concept', start: 0, end: 480, title: 'BRIEFING · WHY GOVERNANCE', eyebrow: 'SEGMENT 01 · BRIEFING',
        body: { template: 'concept', sign: { kind: 'rect', glyph: 'GOV' },
          heading: 'From user to steward', sub: '8 min · the Specialist mandate',
          paragraphs: [
            'As a Specialist you stop being just a safe driver and become someone who <strong>designs the roads</strong>. Governance is the discipline of making AI use safe, legal, and accountable at scale.',
            'Three pillars hold it up: a <strong>policy</strong> layer (what\'s allowed), a <strong>control</strong> layer (how it\'s enforced), and an <strong>assurance</strong> layer (how you prove it).',
          ],
          examples: { title: 'The three pillars', items: [
            { kind: 'good', text: 'Policy — AUP, data classification, approved-tool list' },
            { kind: 'good', text: 'Control — access, logging, human gates, filters' },
            { kind: 'good', text: 'Assurance — audit, red-team, incident review' },
          ] },
          callout: { title: 'Pass criteria', body: 'Map a scenario to the three pillars, pass the regulatory-mapping quiz at 80%, and complete the framework exercise.' } } },
      { idx: 2, kind: 'concept', start: 480, end: 1080, title: 'THE REGULATORY LANDSCAPE', eyebrow: 'SEGMENT 02 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'triangle', glyph: 'LAW' },
          heading: 'What you\'re accountable to', sub: 'the frameworks that shape policy',
          paragraphs: [
            'Your organisation\'s AI policy doesn\'t exist in a vacuum — it maps to external frameworks. You don\'t need to be a lawyer, but you must know <strong>what applies and why</strong>.',
            'The big three you\'ll reference constantly: the EU AI Act (risk tiers), GDPR (personal data), and the NIST AI RMF (a voluntary control framework).',
          ],
          examples: { title: 'Know these by name', items: [
            { kind: 'good', text: 'EU AI Act — classifies systems by risk (banned → minimal)' },
            { kind: 'good', text: 'GDPR — lawful basis, data minimisation, subject rights' },
            { kind: 'good', text: 'NIST AI RMF — Govern, Map, Measure, Manage' },
            { kind: 'good', text: 'ISO/IEC 42001 — AI management system standard' },
          ] } } },
      { idx: 3, kind: 'quiz', start: 1080, end: 1440, title: 'CHECKPOINT · MAP THE PILLAR', eyebrow: 'SEGMENT 03 · KNOWLEDGE CHECK',
        body: { template: 'quiz',
          question: 'Your org decides that every AI-assisted hiring decision must be logged with the reviewer\'s name and retained for audit. Which governance pillar does this control primarily serve?',
          options: [
            { letter: 'A', text: 'Policy — it states what is allowed', right: false },
            { letter: 'B', text: 'Assurance — it produces evidence you can audit later', right: true },
            { letter: 'C', text: 'Neither — logging is an IT concern, not governance', right: false },
            { letter: 'D', text: 'It replaces the need for human review', right: false },
          ],
          rightFeedback: 'Correct. A retained, attributable log is an <b>assurance</b> mechanism — it lets you prove, after the fact, that the control worked. (The requirement to review is policy; the log is assurance.)',
          wrongFeedback: 'Re-examine. The log doesn\'t state the rule (policy) — it produces evidence you can inspect later. That\'s the assurance pillar.' } },
      { idx: 4, kind: 'concept', start: 1440, end: 2040, title: 'RISK-TIERING A USE CASE', eyebrow: 'SEGMENT 04 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'diamond', glyph: 'TIER' },
          heading: 'Not every use case is equal', sub: 'proportionate control',
          paragraphs: [
            'Governance is <strong>proportionate</strong>: a chatbot that suggests lunch spots doesn\'t need the controls of one that screens loan applications. Over-governing kills adoption; under-governing causes harm.',
            'Tier every use case by impact on people and exposure of data, then apply controls to match.',
          ],
          examples: { title: 'Tier by impact', items: [
            { kind: 'good', text: 'Minimal — internal brainstorming, no personal data' },
            { kind: 'good', text: 'Limited — customer-facing content, human-reviewed' },
            { kind: 'bad', text: 'High — decisions about people (hiring, credit, health)' },
            { kind: 'bad', text: 'Unacceptable — social scoring, covert manipulation' },
          ] } } },
      { idx: 5, kind: 'reflect', start: 2040, end: 3300, title: 'WRAP · STEWARDSHIP BEGINS', eyebrow: 'SEGMENT 05 · WRAP-UP',
        body: { template: 'reflect' } },
    ],
    commentary: [
      { t: 0, kind: 'msg', text: 'Unit 0X-Safe. This is where you stop driving and start building the roads.' },
      { t: 300, kind: 'note', text: 'Three pillars: policy, control, assurance. Every governance question maps to one of them.' },
      { t: 520, kind: 'warn', text: 'Know the big frameworks by name: EU AI Act, GDPR, NIST AI RMF, ISO 42001.' },
      { t: 1100, kind: 'warn', text: 'Checkpoint — which pillar does an audit log serve?' },
      { t: 1500, kind: 'msg', text: 'Governance is proportionate. Tier by impact, then match controls. Over-governing kills adoption.' },
      { t: 2060, kind: 'msg', text: 'Foundations laid. Next: risk assessment and red-teaming.' },
    ],
  };

  // ==========================================================
  // LEVEL 3 (A) — M-3-06 · Authoring the AI Charter
  // ==========================================================
  L['M-3-06'] = {
    id: 'M-3-06', level: 'A', next: 'M-3-07',
    title: 'M-3-06 · Authoring the AI Charter',
    titleTop: 'M-3-06 · AUTHORING THE AI CHARTER',
    sub: 'LEVEL 3 · SPECIALIST · MODULE 6 OF 7 · 60 MIN · PASS MARK 80%',
    duration: 60 * 60,
    instructor: 'UNIT 0X-SAFE',
    instructorRole: 'SAFETY OFFICER · GOVERNANCE',
    passMark: 80,
    competencies: ['AI-CF-A-06'], los: ['LO-3-06-A', 'LO-3-06-B'],
    segments: [
      { idx: 1, kind: 'concept', start: 0, end: 480, title: 'WHAT A CHARTER IS FOR', eyebrow: 'SEGMENT 01 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'rect', glyph: 'CHARTER' },
          heading: 'The document everything hangs from', sub: 'your capstone deliverable',
          paragraphs: [
            'An AI Charter is the <strong>top-level governing document</strong> for AI in an organisation. The AUP, the approved-tool list, and every control trace back to it.',
            'A good charter is short, principled, and enforceable. If it can\'t be operationalised, it\'s a poster, not a charter.',
          ],
          examples: { title: 'A charter states…', items: [
            { kind: 'good', text: 'Purpose & scope — what AI is for here' },
            { kind: 'good', text: 'Principles — the non-negotiables (safety, fairness, transparency)' },
            { kind: 'good', text: 'Roles — who owns, decides, and reviews' },
            { kind: 'good', text: 'Enforcement — how breaches are handled' },
          ] },
          callout: { title: 'Capstone link', body: 'Section 1 of your M-3-CAP blueprint is a charter you author. This module is your rehearsal.' } } },
      { idx: 2, kind: 'concept', start: 480, end: 1080, title: 'PRINCIPLES THAT HOLD UP', eyebrow: 'SEGMENT 02 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'triangle', glyph: 'VALUES' },
          heading: 'Write principles you can enforce', sub: 'testable, not aspirational',
          paragraphs: [
            'Weak principles are vibes ("we use AI responsibly"). Strong principles are <strong>testable commitments</strong> that translate into controls.',
            'For each principle, ask: what control proves we mean it? If there isn\'t one, rewrite the principle.',
          ],
          examples: { title: 'Vibe → testable', items: [
            { kind: 'bad', text: '"We value transparency."' },
            { kind: 'good', text: '"Every AI-assisted external document is labelled and logged."' },
            { kind: 'bad', text: '"We are fair."' },
            { kind: 'good', text: '"People-affecting decisions get a bias review before release."' },
          ] } } },
      { idx: 3, kind: 'quiz', start: 1080, end: 1440, title: 'CHECKPOINT · CHARTER OR NOT', eyebrow: 'SEGMENT 03 · KNOWLEDGE CHECK',
        body: { template: 'quiz',
          question: 'Which line belongs in an enforceable AI Charter?',
          options: [
            { letter: 'A', text: '"We will always use AI ethically and for good."', right: false },
            { letter: 'B', text: '"High-impact AI use cases require a documented risk assessment signed by a named owner before launch."', right: true },
            { letter: 'C', text: '"AI is the future and we embrace it."', right: false },
            { letter: 'D', text: '"Employees should try to be careful with data."', right: false },
          ],
          rightFeedback: 'Correct. It\'s specific, testable, and maps to a control (risk assessment + named owner + gate before launch). The others are aspirational statements you can\'t audit.',
          wrongFeedback: 'Look for the one you could actually audit. A, C and D are vibes. B names a trigger, an artefact, an owner, and a gate — that\'s enforceable.' } },
      { idx: 4, kind: 'concept', start: 1440, end: 2040, title: 'GET IT ADOPTED', eyebrow: 'SEGMENT 04 · CONCEPT',
        body: { template: 'concept', sign: { kind: 'diamond', glyph: 'BUY-IN' },
          heading: 'A charter no one follows is fiction', sub: 'adoption is part of the design',
          paragraphs: [
            'The best charter fails if it\'s handed down without buy-in. Design for adoption: <strong>co-author with the people it affects</strong>, sponsor it at the executive level, and give it a review cadence.',
            'A living charter is reviewed at least annually and after any major incident.',
          ],
          examples: { title: 'Adoption levers', items: [
            { kind: 'good', text: 'Executive sponsor named on the document' },
            { kind: 'good', text: 'Co-authored with legal, security, and end users' },
            { kind: 'good', text: 'Annual review + post-incident review built in' },
          ] } } },
      { idx: 5, kind: 'reflect', start: 2040, end: 3600, title: 'WRAP · CHARTER DRAFTED', eyebrow: 'SEGMENT 05 · WRAP-UP',
        body: { template: 'reflect' } },
    ],
    commentary: [
      { t: 0, kind: 'msg', text: 'The charter is the keystone. Everything else in governance hangs from it.' },
      { t: 300, kind: 'note', text: 'Short, principled, enforceable. If it can\'t be operationalised, it\'s a poster.' },
      { t: 520, kind: 'warn', text: 'Principles must be testable. For each one, name the control that proves it.' },
      { t: 1100, kind: 'warn', text: 'Checkpoint — spot the line that\'s actually enforceable.' },
      { t: 1500, kind: 'msg', text: 'Design for adoption: co-author, sponsor, and review. A charter no one follows is fiction.' },
      { t: 2060, kind: 'msg', text: 'Strong work. This rehearsal feeds Section 1 of your capstone blueprint directly.' },
    ],
  };
})();
