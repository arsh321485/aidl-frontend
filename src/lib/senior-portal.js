/* ============================================================
   AIDL · DRIVER PORTAL (Seniors)
   Content + rendering for three licence categories:
     - learner    : Learner's Permit  (Class L · general public)
     - operator   : Operator's Licence (Class O · workplace)
     - specialist : Specialist Endorsement (Class S · AI champion)
   Mirrors the junior portal's tier architecture.
   ============================================================ */

const PORTALS = {

  /* ---------------------------------------------------------- LEARNER */
  learner: {
    key: 'learner',
    label: "Learner's Permit",
    cls: 'CLASS L · LEARNER',
    audience: 'General public · everyday AI use',
    name: 'Jordan Ellis',
    initials: 'JE',
    role: 'ADULT LEARNER · CONSUMER',
    dob: '07/18/1990',
    licId: 'AIDL-L-0455-2210',
    issued: '02/14/2026',
    expires: '02/14/2027',
    renewal: '7 mo left',
    meter: 42,
    nextLessonHref: '/senior-player?lesson=M-1-01',
    lessonLabel: 'Play Lesson M-1-01 →',

    dash: {
      eyebrow: '▼ MILE 34 · PERMIT ACTIVE',
      hello: 'WELCOME ABOARD,<br/>JORDAN.',
      intro: 'You\'re 40% through your Learner\'s Permit. Next stop: <b>M-1-03 — The PREP Prompting Framework</b>. No experience needed — take it at your own pace.',
      issued: 'ISSUED 02/14/2026',
      stamps: ['Meet AI ✓', 'PREP · in progress', 'Safe Use · next', 'Glossary · started', 'Renewal · 7 mo'],
      stats: [
        { k: 'Lesson Minutes', v: '96', d: '+ 40 this week', cls: 'accent' },
        { k: 'Prompts Written', v: '18', d: 'keep practising' },
        { k: 'Traffic Light Checks', v: '27', d: '89% correct', cls: 'dark' },
        { k: 'Terms Learned', v: '6', d: 'of 10' },
      ],
      upnext: [
        { d: '18', m: 'MAY', t: 'PREP Framework', s: 'Learn the 4-part prompt recipe', cta: 'Play', href: '/senior-player?lesson=M-1-03' },
        { d: '22', m: 'MAY', t: 'Safe-Use Checklist', s: 'What never to paste into AI', cta: 'Open', view: 'aup' },
        { d: '06', m: 'JUN', t: 'Try the Traffic Light', s: 'Practise the 3-second check', cta: 'Start', view: 'traffic' },
      ],
      routeTitle: 'YOUR ROUTE · AI LEARNER\'S PERMIT',
      routeSub: 'Seven short modules, one goal: confident, safe everyday AI use.',
      route: [
        { n: 1, lbl: 'Meet AI', s: 'done' },
        { n: 2, lbl: 'Prompt Basics', s: 'done' },
        { n: 3, lbl: 'PREP · here', s: 'current' },
        { n: 4, lbl: 'Verify Facts', s: 'todo' },
        { n: 5, lbl: 'Traffic Light', s: 'todo' },
        { n: 6, lbl: 'Safe Use', s: 'todo' },
        { n: 7, lbl: 'Permit Test', s: 'todo' },
      ],
      routeTag: 'MILE 34 OF 90',
      activity: [
        { icon: 'green', b: 'First PREP prompt built', t: 'You wrote a full 4-part prompt for a thank-you note. Nicely done.', when: '2h ago' },
        { icon: 'red', b: 'Red light caught', t: 'You started to paste your home address — the light went red and you removed it.', when: 'Yesterday' },
        { icon: '', b: 'Glossary streak · 4 days', t: 'Learned "Prompt", "Hallucination", "Chatbot".', when: '3 days ago' },
      ],
      rule: { tag: 'RULE 01', title: 'AI predicts, it doesn\'t know.', text: 'An AI chatbot guesses likely-sounding text. That\'s why it can sound confident and still be wrong. Check anything that matters.' },
      instructor: { name: 'DRIVER ED', role: 'INSTRUCTOR · FUNDAMENTALS', quote: '"Take your time, Jordan. Every good driver started as a learner. Bring me a prompt and we\'ll polish it together."' },
    },

    highway: {
      intro: 'The everyday rules for using AI safely and confidently. Learn them, follow them, drive happy.',
      sections: [{
        title: 'Section A · Learner Rules',
        sub: 'The essentials for anyone using AI in daily life.',
        signs: [
          { shape: 'octagon', glyph: 'STOP', what: 'STOP', name: 'Keep Private Things Private', action: 'Never paste <strong>passwords, ID numbers, bank details, or your home address</strong> into a consumer AI tool. Once it\'s in, you\'ve lost control of it.' },
          { shape: 'diamond', glyph: 'CHECK', what: 'VERIFY', name: 'Check Before You Trust', action: 'AI can state wrong things confidently. <strong>Verify facts, dates, and numbers</strong> against a real source before you rely on them.' },
          { shape: 'triangle', glyph: 'YOU', what: 'YIELD', name: 'You\'re Still the Driver', action: 'AI drafts; you decide. <strong>Read and edit every output</strong> and make it your own before you use or send it.' },
          { shape: 'circle', glyph: 'ASK', what: 'ASK CLEARLY', name: 'Better Prompt, Better Answer', action: 'Vague questions get vague answers. <strong>Say who the AI should be, what you want, and how it should look</strong> — that\'s the PREP habit.' },
          { shape: 'rect', glyph: 'ONE WAY →', what: 'ONE WAY', name: 'Mind What You Share', action: 'Free tools may learn from what you type. <strong>Treat every prompt like a postcard</strong> — assume it could be read.' },
        ],
      }],
    },

    traffic: {
      title: 'TRAFFIC LIGHT<br/>DATA CHECK.',
      intro: 'Before you paste anything into an AI, check the lights. Green means go, amber means caution, red means stop.',
      verdicts: {
        idle: { lbl: 'CHECK THE LIGHTS', act: 'Type or paste your prompt. The signal updates as you write — a quick check before you send.' },
        green: { lbl: 'GREEN · GO', act: 'Public and safe. No personal data here — go ahead in any tool you like.' },
        amber: { lbl: 'AMBER · CAUTION', act: 'Some personal detail spotted. Remove it, or swap in a placeholder like [Name], before you send.' },
        red: { lbl: 'RED · STOP', act: 'Private data detected. Don\'t paste this. Replace names, addresses, and numbers with placeholders, then check again.' },
      },
      examples: {
        green: 'Explain how compound interest works in plain English, with one simple example I could use to teach a friend.',
        amber: 'My name is Jordan and I\'m planning a trip to Lisbon next month — help me make a 3-day sightseeing plan.',
        red: 'Draft a message to my bank. My name is Jordan Ellis, account 4471-9930, and my password is summer2026.',
      },
      rules: [
        { c: 'green', h: '● GREEN · GO', p: 'Public, non-personal.', items: ['General questions & explanations', 'Public articles to summarise', 'Story, recipe, and idea prompts'], action: 'Any tool you like — then check facts.' },
        { c: 'amber', h: '● AMBER · CAUTION', p: 'A little personal.', items: ['Your first name or city', 'Your rough plans or preferences', 'Non-sensitive everyday details'], action: 'Use a placeholder or remove it first.' },
        { c: 'red', h: '● RED · STOP', p: 'Private — keep it out.', items: ['Passwords, PINs, verification codes', 'Bank/card numbers, national ID', 'Home address, other people\'s data'], action: 'Never paste. Anonymise, then retry.' },
      ],
    },

    aup: {
      title: 'SAFE-USE PROMISES.',
      intro: 'Six simple promises for using AI safely as a learner. Tap each to acknowledge, then sign at the bottom.',
      sideTitle: 'MY PROMISES',
      sideNote: 'Acknowledge all 6 and sign to complete your Learner\'s Permit safe-use module.',
      badge: 'FOUNDATIONS',
      sign: 'I have read and agree to follow these AI safe-use promises.',
      rules: [
        { b: 'Protect my private data', p: 'I keep passwords, IDs, bank details, and my home address out of consumer AI tools.' },
        { b: 'Verify before I trust', p: 'I check facts, dates, and numbers against a reliable source before relying on AI output.' },
        { b: 'Stay the decision-maker', p: 'I read and edit AI output. I don\'t send or submit anything I haven\'t checked and made my own.' },
        { b: 'Respect other people', p: 'I don\'t paste other people\'s personal information, and I never use AI to be unkind or deceptive.' },
        { b: 'Give honest credit', p: 'When AI helped with my work, I\'m honest about it rather than passing it off as entirely mine.' },
        { b: 'Ask when unsure', p: 'If I\'m not sure whether something is safe to share, I treat it as private and find out first.' },
      ],
    },

    glossary: {
      intro: 'Plain-English definitions for the AI words you\'ll meet as a learner. Read once — sound fluent.',
      terms: [
        { term: 'AI', sub: 'Artificial Intelligence', def: 'Software that does things which usually need human smarts — understanding language, recognising images. It finds patterns; it doesn\'t truly understand.', tags: ['core'] },
        { term: 'Chatbot', def: 'An AI you talk to by typing. It keeps track of the conversation and replies in natural language.', tags: ['core'] },
        { term: 'Prompt', def: 'The message or question you type into an AI. Clearer prompts get better answers — it\'s a skill worth practising.', tags: ['core'] },
        { term: 'PREP', def: 'A simple 4-part recipe for good prompts: Persona, Requirement, Expectation, Parameters.', tags: ['core'] },
        { term: 'Hallucination', def: 'When AI states something false as if it were true. It isn\'t lying — it\'s predicting likely text. Always verify.', tags: ['amber', 'safety'] },
        { term: 'PII', sub: 'Personal Information', def: 'Anything that can identify you: name, address, phone, email, ID numbers. Keep it out of consumer AI tools.', tags: ['red', 'privacy'] },
        { term: 'Anonymise', def: 'Removing personal details before you prompt — swapping names and numbers for placeholders like [Name].', tags: ['green', 'privacy'] },
        { term: 'Verify', def: 'Checking a claim against a trusted source before you believe or share it. Your best defence against hallucinations.', tags: ['green', 'safety'] },
        { term: 'Generative AI', def: 'AI that creates new content — text, images, audio — rather than just analysing existing data.', tags: ['core'] },
        { term: 'Token', def: 'The small chunk of text an AI reads at a time — roughly three-quarters of a word. Tools have a limit per conversation.', tags: ['core'] },
      ],
    },

    qref: {
      title: 'LEARNER · QUICK CARD',
      meta: 'CLASS L · LEARNER',
      boxes: [
        { c: 'green', h: '● TRAFFIC LIGHT', type: 'ul', items: ['<b>Green</b> · public → go', '<b>Amber</b> · a bit personal → remove/placeholder', '<b>Red</b> · private → STOP'] },
        { c: 'yellow', h: '● PREP FRAMEWORK', type: 'ul', items: ['<b>Persona</b> · who the AI should be', '<b>Requirement</b> · what you want', '<b>Expectation</b> · format & length', '<b>Parameters</b> · what to leave out'] },
        { c: 'red', h: '● NEVER PASTE', type: 'ul', items: ['Passwords & PINs', 'Bank / card numbers, ID', 'Home address', 'Other people\'s private info'] },
        { c: '', h: '● ALWAYS DO', type: 'ul', items: ['Verify facts before trusting', 'Anonymise with placeholders', 'Read & edit the output', 'Be honest that AI helped'] },
        { c: 'dark', h: '● IS IT TRUE?', type: 'ol', items: ['Can I check it in a real source?', 'Do the numbers add up?', 'Does it actually make sense?'] },
        { c: 'amber', h: '● WHEN TO PAUSE', type: 'ul', items: ['You\'re about to share personal data', 'The facts really matter', 'You\'re unsure it\'s safe', 'The answer feels too confident'] },
      ],
      foot: 'AI Learner\'s Permit · Drive safe, ask well, check everything.',
    },
  },

  /* ---------------------------------------------------------- OPERATOR */
  operator: {
    key: 'operator',
    label: "Operator's Licence",
    cls: 'CLASS O · OPERATOR',
    audience: 'Corporate · workplace AI use',
    name: 'Alex Morgan',
    initials: 'AM',
    role: 'MARKETING MANAGER',
    dob: '04/12/1994',
    licId: 'AIDL-O-1182-4421',
    issued: '04/29/2026',
    expires: '04/29/2027',
    renewal: '9 mo left',
    meter: 78,
    nextLessonHref: '/senior-player?lesson=M-2-04',
    lessonLabel: 'Resume Lesson M-2-04 →',

    dash: {
      eyebrow: '▼ MILE 142 · LICENCED & ACTIVE',
      hello: 'WELCOME BACK,<br/>ALEX.',
      intro: 'You\'re 78% through your AI driver education. Next stop: <b>Part 7 — Acceptable Use Acknowledgement</b>. Keep both hands on the wheel.',
      issued: 'ISSUED 04/29/2026',
      stamps: ['Highway Code ✓', 'Traffic Light ✓', 'PREP ✓', 'AUP · in progress', 'Renewal · 9 mo'],
      stats: [
        { k: 'Driving Hours', v: '87', d: '+ 6 this week', cls: 'accent' },
        { k: 'Traffic Light Checks', v: '241', d: '96% correct' },
        { k: 'PREP Prompts', v: '38', d: '+ 4 today', cls: 'dark' },
        { k: 'Incidents Reported', v: '2', d: 'cleared by safety' },
      ],
      upnext: [
        { d: '18', m: 'MAY', t: 'AUP Acknowledgement', s: 'Sign & submit the 8-rule policy', cta: 'Open', view: 'aup' },
        { d: '22', m: 'MAY', t: 'Lesson · AUP Module', s: 'M-2-04 · with Sgt. Meridian', cta: 'Resume', href: '/senior-player?lesson=M-2-04' },
        { d: '06', m: 'JUN', t: 'Road Test · Class O', s: 'Final assessment · 5 scenarios', cta: 'Start', href: '/road-test' },
      ],
      routeTitle: 'YOUR ROUTE · CORPORATE AI DRIVING LICENCE',
      routeSub: 'Six handbook parts, three checkpoints, one road test. You\'re in the home stretch.',
      route: [
        { n: 1, lbl: 'Handbook', s: 'done' },
        { n: 2, lbl: 'Highway Code', s: 'done' },
        { n: 3, lbl: 'Traffic Light', s: 'done' },
        { n: 4, lbl: 'PREP', s: 'done' },
        { n: 5, lbl: 'AUP · here', s: 'current' },
        { n: 6, lbl: 'Glossary Quiz', s: 'todo' },
        { n: 7, lbl: 'Road Test', s: 'todo' },
      ],
      routeTag: 'MILE 142 OF 180',
      activity: [
        { icon: 'green', b: 'PREP Practical · passed', t: 'Built a customer reply prompt with Prof. Ragga. Output verified by Sgt. Meridian.', when: '2h ago' },
        { icon: 'red', b: 'Red Light intercepted', t: 'Pasted draft with 2× PII flagged. Anonymised & resubmitted.', when: 'Yesterday' },
        { icon: '', b: 'Lesson M-2-02 · finished', t: 'Traffic Light Data Check — 96% on the classification quiz.', when: '2 days ago' },
      ],
      rule: { tag: 'RULE 04', title: 'Hallucination Awareness.', text: 'Verify every factual claim, statistic, and citation against a trusted primary source before you rely on it. Confident AI is not the same as correct AI.' },
      instructor: { name: 'PROF. RAGGA', role: 'SPECIALIST · AGENTS & PROMPTING', quote: '"Ready when you are. Bring your draft prompt and we\'ll PREP it together."' },
    },

    highway: {
      intro: 'Signs, rules, and mandatory protocols for safe workplace AI use. Learn them, follow them, stay compliant.',
      sections: [
        {
          title: 'Section A · Regulatory Signs',
          sub: 'Policy-required. Ignoring them is a breach of policy.',
          signs: [
            { shape: 'octagon', glyph: 'STOP', what: 'STOP', name: 'Red Light Data Protocol', action: 'Halt immediately. Do not input <strong>PII, health records, passwords, financial credentials, or source code</strong> into any AI tool. Hard boundary, zero exceptions.' },
            { shape: 'rect', glyph: 'ONE WAY →', what: 'ONE WAY', name: 'Unidirectional Data Flow', action: 'Data must <strong>not leave the secure enterprise tenant</strong>. Ensure model training is disabled — your data flows one way, for your use, not into training sets.' },
            { shape: 'circle', glyph: '60', what: 'SPEED LIMIT', name: 'Verification Velocity', action: 'AI generates faster than humans verify. <strong>Never copy-paste AI output</strong> directly into a document, email, or deliverable. Read and fact-check every line first.' },
            { shape: 'triangle', glyph: 'YIELD', what: 'YIELD', name: 'Human-in-the-Loop', action: 'When AI suggests a decision affecting a person — hiring, credit, medical — <strong>a qualified human must review it</strong>. AI is the co-pilot, never the captain.' },
          ],
        },
        {
          title: 'Section B · Warning Signs',
          sub: 'Conditions requiring extra care and heightened attention.',
          signs: [
            { shape: 'diamond', glyph: 'SLIPPERY', what: 'HAZARD', name: 'Hallucination Hazard', action: 'On obscure facts, recent events, or statistics, AI may fabricate plausible falsehoods. <strong>Verify citations, dates, and figures</strong> against a trusted primary source.' },
            { shape: 'diamond', glyph: 'SCHOOL', what: 'SCHOOL ZONE', name: 'High-Risk Data', action: 'Processing data about employees, candidates, health, or minors demands <strong>strict anti-bias and fairness checks</strong>. Errors here are legally actionable.' },
            { shape: 'diamond', glyph: 'ROCKS', what: 'FALLING ROCKS', name: 'Data Leakage Risk', action: 'Beware prompt-injection and hidden metadata in pasted content. <strong>Sanitise prompts</strong> — remove names, dates, and identifying details — before inputting.' },
          ],
        },
        {
          title: 'Section C · Information Signs',
          sub: 'Guidance that makes you a better, safer operator.',
          signs: [
            { shape: 'shield', glyph: 'HELP', what: 'INFORMATION', name: 'Escalate Unusual Output', action: 'If AI produces <strong>toxic, biased, or legally problematic</strong> output, don\'t use it or share it. Report it to AI Governance immediately.' },
            { shape: 'shield', glyph: 'U-TURN', what: 'U-TURN', name: 'Iterative Refinement', action: 'The first answer is rarely the deliverable. <strong>Instruct the AI to refine, shorten, or retone</strong> until quality is met. This is the process, not a failure.' },
          ],
        },
      ],
    },

    traffic: {
      title: 'TRAFFIC LIGHT<br/>DATA CHECK.',
      intro: 'Paste your draft prompt below. The system scans for personal, financial, health, and confidential signals — and tells you whether it\'s safe to drive.',
      verdicts: {
        idle: { lbl: 'SCAN PROMPT', act: 'Type or paste a prompt. The signal updates as you write — three seconds, before you hit send.' },
        green: { lbl: 'GREEN · GO', act: 'Public-safe. Approved in any AI tool, enterprise or consumer.' },
        amber: { lbl: 'AMBER · CAUTION', act: 'Internal context detected. Use ONLY in your organisation\'s approved enterprise AI tool. Never in free consumer tools.' },
        red: { lbl: 'RED · STOP', act: 'Sensitive data detected. Do not submit. Anonymise — replace names with [Name], salaries with [Band], dates with [Date] — then re-scan.' },
      },
      examples: {
        green: 'Write a 200-word LinkedIn post summarising the published findings of our 2025 Industry Outlook white paper, available on our public website. Professional, optimistic tone.',
        amber: 'Summarise the key decisions from this internal Q2 strategy note: "The team agreed to defer the platform refresh to Q3 and re-prioritise the analytics dashboard for next quarter."',
        red: 'Act as a Senior HR Manager. Draft an email to Sarah Lopez (sarah.lopez@company.com) confirming her promotion to Director with her new salary of $145,000. Reference her offer letter dated 04/29/2026.',
      },
      rules: [
        { c: 'green', h: '● GREEN · SAFE TO USE', p: 'Public info, no personal data.', items: ['Press releases, marketing copy', 'Your own non-personal notes', 'General knowledge questions'], action: 'Any approved AI tool.' },
        { c: 'amber', h: '● AMBER · ENTERPRISE ONLY', p: 'Internal, non-sensitive.', items: ['Internal plans, meeting notes', 'Anonymised case studies', 'Dept reports (no HR/salary)'], action: 'Org-approved enterprise tool only.' },
        { c: 'red', h: '● RED · STOP', p: 'Sensitive, regulated, confidential.', items: ['PII · names, emails, phone, IDs', 'PHI · medical & insurance', 'Salaries, contracts, source code'], action: 'Anonymise first. Then it becomes Amber.' },
      ],
    },

    aup: {
      title: 'ACCEPTABLE USE.',
      intro: 'Eight binding rules. Tap to acknowledge each. Sign at the bottom. Required for licence activation.',
      sideTitle: 'ACKNOWLEDGEMENT',
      sideNote: 'Sign & submit unlocks Class O · Operator licence and ends this part of your route.',
      badge: 'EU AI ACT · ART.4',
      sign: 'I have read, understood, and agree to comply with this Acceptable Use Policy and its data-protection obligations.',
      rules: [
        { b: 'Approved Tools Only', p: 'Use only AI tools on the IT-approved list. Shadow AI with corporate data is a data breach and a disciplinary offence — regardless of intent.' },
        { b: 'Data Classification Compliance', p: 'Apply the Traffic Light check before every input. Red data must never enter any AI system. Amber only in enterprise-grade, approved instances.' },
        { b: 'Mandatory Human Review', p: 'All AI content for external comms, legal, financial, or HR decisions must be reviewed by a qualified human. AI is a drafting assistant, not a decision-maker.' },
        { b: 'Hallucination Awareness', p: 'Verify every factual claim, statistic, citation, and legal reference against trusted primary sources. Submitting unverified AI output as factual is misconduct.' },
        { b: 'No Impersonation or Deceptive Use', p: 'Do not use AI to impersonate people, create misleading or defamatory content, or disguise AI involvement where disclosure is required.' },
        { b: 'Intellectual Property Protection', p: 'Do not upload third-party copyrighted material, client documents, or competitive intelligence without Legal authorisation.' },
        { b: 'Reporting Obligations', p: 'AI output that appears biased, toxic, harmful, or factually dangerous must be reported immediately to AI Governance. Do not share, publish, or act on it.' },
        { b: 'Annual Licence Renewal', p: 'The AI Driving Licence must be renewed every 12 months. Expired licences may not use AI tools for professional tasks until renewal is complete.' },
      ],
    },

    glossary: {
      intro: 'Plain-English definitions for the AI terms you\'ll meet at work. Read once — sound fluent.',
      terms: [
        { term: 'Bias', sub: 'in AI', def: 'When an AI produces consistently unfair results because its training data was unbalanced — e.g. a hiring tool that favours certain demographics.', tags: ['amber', 'safety'] },
        { term: 'Context Window', def: 'The amount of text an AI can process at once — its working memory. Earlier parts of a long conversation may be forgotten.', tags: ['core'] },
        { term: 'GDPR', sub: 'General Data Protection Regulation', def: 'EU law governing how personal data is collected, stored, and processed. AI tools handling EU-resident data must comply.', tags: ['red', 'policy'] },
        { term: 'Hallucination', def: 'When an AI confidently states something fabricated. It predicts likely text without verifying truth. Verification is mandatory.', tags: ['amber', 'safety'] },
        { term: 'LLM', sub: 'Large Language Model', def: 'The technology behind most chatbots. Trained on huge text corpora to predict the next word. GPT-4, Gemini, and Claude are LLMs.', tags: ['core'] },
        { term: 'PII', sub: 'Personally Identifiable Information', def: 'Any data that identifies an individual: name, email, phone, ID, address, DOB. Always Red Light — never input into AI.', tags: ['red', 'policy'] },
        { term: 'PHI', sub: 'Protected Health Information', def: 'Medical and health data protected by law. Additional protections beyond standard PII. Always Red Light.', tags: ['red', 'policy'] },
        { term: 'Prompt Engineering', def: 'The discipline of writing effective prompts for high-quality, safe output. The PREP framework is a structured method.', tags: ['core'] },
        { term: 'Prompt Injection', def: 'A security attack where malicious instructions are hidden in content the AI processes, causing unintended actions or leaks.', tags: ['red', 'safety'] },
        { term: 'Shadow AI', def: 'Using unsanctioned public or personal AI tools with corporate data, without IT approval. A primary source of data leakage. Prohibited.', tags: ['red', 'policy'] },
        { term: 'Temperature', def: 'A setting controlling how creative vs. predictable an AI\'s responses are. Low = consistent and factual; high = varied and creative.', tags: ['core'] },
        { term: 'Training Data', def: 'The information used to teach an AI model. Its quality, diversity, and biases directly shape capabilities and limitations.', tags: ['core'] },
      ],
    },

    qref: {
      title: 'OPERATOR · QUICK CARD',
      meta: 'CLASS O · OPERATOR',
      boxes: [
        { c: 'green', h: '● TRAFFIC LIGHT CHECK', type: 'ul', items: ['<b>Green</b> · public → any approved tool', '<b>Amber</b> · internal → enterprise only', '<b>Red</b> · sensitive → NEVER input'] },
        { c: 'yellow', h: '● PREP FRAMEWORK', type: 'ul', items: ['<b>Persona</b> · expert role', '<b>Requirement</b> · precise task', '<b>Expectation</b> · format & length', '<b>Parameters</b> · safety constraints'] },
        { c: 'red', h: '● NEVER DO THIS', type: 'ul', items: ['Input PII, passwords, or secrets', 'Use Shadow AI with company data', 'Ship AI output without verifying', 'Let AI be the sole decision-maker'] },
        { c: '', h: '● ALWAYS DO THIS', type: 'ul', items: ['Verify facts & citations', 'Anonymise before prompting', 'Keep humans in the loop', 'Report biased or harmful output'] },
        { c: 'dark', h: '● HALLUCINATION CHECK', type: 'ol', items: ['Verifiable from a primary source?', 'Are the citations real?', 'Do the numbers add up?', 'Would an expert agree?'] },
        { c: 'amber', h: '● WHEN TO ESCALATE', type: 'ul', items: ['Wrong-tool data entry → IT Security', 'Biased/harmful output → Governance', 'Copyright / IP → Legal', 'Policy questions → Manager / HR'] },
      ],
      foot: 'Corporate AI Driving Licence · Drive safely. Drive wisely. Drive far.',
    },
  },

  /* ---------------------------------------------------------- SPECIALIST */
  specialist: {
    key: 'specialist',
    label: 'Specialist Endorsement',
    cls: 'CLASS S · SPECIALIST',
    audience: 'Advanced · AI champion & governance',
    name: 'Dr. Priya Anand',
    initials: 'PA',
    role: 'AI GOVERNANCE LEAD',
    dob: '11/03/1987',
    licId: 'AIDL-S-0071-9008',
    issued: '01/09/2026',
    expires: '01/09/2027',
    renewal: '6 mo left',
    meter: 61,
    nextLessonHref: '/senior-player?lesson=M-3-03',
    lessonLabel: 'Resume Lesson M-3-03 →',

    dash: {
      eyebrow: '▼ MILE 208 · ENDORSEMENT TRACK',
      hello: 'BACK ON THE TRACK,<br/>DR. ANAND.',
      intro: 'You\'re building toward your Specialist Endorsement. Next stop: <b>M-3-03 — AI Risk Assessment & Red-Teaming</b>. Your capstone blueprint inherits this work.',
      issued: 'ISSUED 01/09/2026',
      stamps: ['Governance ✓', 'STRIDE-AI · in progress', 'Red-Team Lab · next', 'Peer Review · pending', 'Capstone · locked'],
      stats: [
        { k: 'Deep-Work Hours', v: '124', d: '+ 9 this week', cls: 'accent' },
        { k: 'Risk Registers', v: '11', d: '2 peer-reviewed' },
        { k: 'Red-Team Findings', v: '46', d: '+ 7 this week', cls: 'dark' },
        { k: 'Governance Reviews', v: '5', d: 'chaired' },
      ],
      upnext: [
        { d: '18', m: 'MAY', t: 'STRIDE-AI Risk Register', s: 'ProdSight pre-launch red-team', cta: 'Open', href: '/senior-player?lesson=M-3-03' },
        { d: '22', m: 'MAY', t: 'Authoring the AI Charter', s: 'M-3-06 · capstone rehearsal', cta: 'Play', href: '/senior-player?lesson=M-3-06' },
        { d: '06', m: 'JUN', t: 'Peer Review Window', s: 'Score 2 candidate registers', cta: 'View', view: 'qref' },
      ],
      routeTitle: 'YOUR ROUTE · SPECIALIST ENDORSEMENT',
      routeSub: 'Eight advanced modules, two labs, one peer-reviewed capstone blueprint.',
      route: [
        { n: 1, lbl: 'Governance', s: 'done' },
        { n: 2, lbl: 'Threat Models', s: 'done' },
        { n: 3, lbl: 'Red-Team · here', s: 'current' },
        { n: 4, lbl: 'Mitigations', s: 'todo' },
        { n: 5, lbl: 'Evaluation', s: 'todo' },
        { n: 6, lbl: 'Charter', s: 'todo' },
        { n: 7, lbl: 'Capstone', s: 'todo' },
      ],
      routeTag: 'MILE 208 OF 300',
      activity: [
        { icon: 'green', b: 'Risk register · peer-scored 9/10', t: 'Your ProdSight register cleared Information-Disclosure depth on both reviews.', when: '3h ago' },
        { icon: 'red', b: 'Jailbreak held', t: 'Red-team console: your injection probe was refused by the sandbox guardrail. Documented the fix.', when: 'Yesterday' },
        { icon: '', b: 'Chaired governance review', t: 'Signed off a limited-tier chatbot for launch with a named control owner.', when: '2 days ago' },
      ],
      rule: { tag: 'PILLAR 03', title: 'Assurance beats intention.', text: 'A control you can\'t audit didn\'t happen. Every high-impact AI decision needs a tamper-evident, attributable log — proof, not promises.' },
      instructor: { name: 'UNIT 0X-SAFE', role: 'SAFETY OFFICER · RED-TEAM', quote: '"Bring your register, Dr. Anand. I want at least one High-impact entry under Information Disclosure before peer review."' },
    },

    highway: {
      intro: 'The governance and safety protocols an AI champion enforces. These are the rules you\'ll hold others to.',
      sections: [
        {
          title: 'Section A · Governance Mandates',
          sub: 'Non-negotiable duties of a Specialist.',
          signs: [
            { shape: 'octagon', glyph: 'GATE', what: 'STOP', name: 'High-Impact Gate', action: 'No high-impact AI use case launches without a <strong>documented risk assessment signed by a named owner</strong>. People-affecting decisions require a governance review first.' },
            { shape: 'rect', glyph: 'LOG', what: 'ONE WAY', name: 'Tamper-Evident Logging', action: 'Every AI decision that matters must write an <strong>append-only, attributable, tamper-evident log</strong>. If you can\'t audit it, it didn\'t happen.' },
            { shape: 'triangle', glyph: 'STRIDE', what: 'YIELD', name: 'Threat-Model First', action: 'Assess every deployment with <strong>STRIDE-AI before launch</strong> — Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation. Cover at least five of six.' },
            { shape: 'circle', glyph: 'FIT', what: 'PROPORTION', name: 'Proportionate Control', action: 'Match controls to impact. <strong>Over-governing kills adoption; under-governing causes harm.</strong> Tier every use case, then apply controls to fit.' },
          ],
        },
        {
          title: 'Section B · Adversarial Hazards',
          sub: 'The failure modes you red-team for.',
          signs: [
            { shape: 'diamond', glyph: 'INJECT', what: 'HAZARD', name: 'Prompt Injection', action: 'Malicious instructions hidden in processed content can hijack an agent. <strong>Sanitise inputs, detect injection, validate output schemas.</strong>' },
            { shape: 'diamond', glyph: 'LEAK', what: 'FALLING ROCKS', name: 'Information Disclosure', action: 'Prompt leakage, embedding inversion, and PII exfiltration. <strong>Every monitoring AI fails here first</strong> — apply output filters and access controls.' },
            { shape: 'diamond', glyph: 'ESCALATE', what: 'MERGING', name: 'Privilege Escalation', action: 'Agents abusing tools or escaping sandboxes. <strong>Enforce least-privilege scopes, tool allow-lists, and human gates</strong> on sensitive actions.' },
          ],
        },
        {
          title: 'Section C · Stewardship',
          sub: 'The habits that make governance stick.',
          signs: [
            { shape: 'shield', glyph: 'REVIEW', what: 'INFORMATION', name: 'Living Documents', action: 'Charters and policies are <strong>reviewed at least annually and after any major incident</strong>. A document no one revisits is fiction.' },
            { shape: 'shield', glyph: 'TEACH', what: 'REST AREA', name: 'Enable, Don\'t Gatekeep', action: 'Your job is to make safe use <strong>easy</strong>, not to say no. Co-author policy with the people it affects and give them the fast, compliant path.' },
          ],
        },
      ],
    },

    traffic: {
      title: 'CLASSIFICATION<br/>& EXPOSURE CHECK.',
      intro: 'Beyond the basic Traffic Light: as a Specialist you assess data class AND exposure surface. Paste a prompt to see the signal and the flags you\'d escalate.',
      verdicts: {
        idle: { lbl: 'SCAN PROMPT', act: 'Type or paste a prompt. The classifier flags data class and the STRIDE exposure you\'d note in a register.' },
        green: { lbl: 'GREEN · LOW RISK', act: 'Public, non-personal, minimal exposure. Suitable for open tooling — still log the use case tier.' },
        amber: { lbl: 'AMBER · MANAGED', act: 'Internal or contextual data. Enterprise instance only, with logging and a named owner. Note the exposure surface.' },
        red: { lbl: 'RED · GOVERNANCE', act: 'Regulated or identifying data. Blocked pending governance review. Anonymise and document mitigations before any deployment.' },
      },
      examples: {
        green: 'Draft a one-paragraph summary of the published NIST AI RMF Govern function for an internal wiki page. Cite the public source.',
        amber: 'Summarise our internal AI incident log themes from Q1 (no employee names) to brief the governance committee on control gaps.',
        red: 'Score this named employee\'s productivity from their keystroke log and Slack sentiment: priya.anand@corp.com, and flag if underperforming.',
      },
      rules: [
        { c: 'green', h: '● GREEN · LOW RISK', p: 'Public, minimal exposure.', items: ['Public standards & documentation', 'Non-personal internal wiki drafts', 'General governance research'], action: 'Open tooling — still tier and log.' },
        { c: 'amber', h: '● AMBER · MANAGED', p: 'Internal, needs controls.', items: ['Anonymised incident themes', 'Aggregate, non-identifying metrics', 'Draft policy language'], action: 'Enterprise + logging + named owner.' },
        { c: 'red', h: '● RED · GOVERNANCE', p: 'Regulated / people-affecting.', items: ['Named-individual scoring', 'PII / PHI / financial records', 'Any covert monitoring use case'], action: 'Block. Governance review + mitigations.' },
      ],
    },

    aup: {
      title: 'GOVERNANCE CHARTER.',
      intro: 'Eight duties of a Specialist Endorsement holder. Tap to acknowledge each, then sign. These are the standards you enforce for others.',
      sideTitle: 'ENDORSEMENT',
      sideNote: 'Acknowledge all 8 and sign to maintain your Class S · Specialist Endorsement in good standing.',
      badge: 'NIST AI RMF · GOVERN',
      sign: 'I accept these Specialist duties and agree to uphold and enforce them across the organisation.',
      rules: [
        { b: 'Threat-Model Before Launch', p: 'I complete a STRIDE-AI assessment for every high-impact deployment I sponsor, covering at least five of six categories.' },
        { b: 'Named Ownership', p: 'Every control and risk in a register I approve has a named owner accountable for it — no orphaned mitigations.' },
        { b: 'Tamper-Evident Assurance', p: 'I require attributable, append-only logging for any AI decision affecting a person, retained per policy.' },
        { b: 'Proportionate Control', p: 'I tier use cases by impact and apply controls to match — neither over-governing adoption nor under-governing harm.' },
        { b: 'Regulatory Mapping', p: 'I map organisational policy to the frameworks that apply (EU AI Act, GDPR, NIST AI RMF, ISO 42001) and keep the mapping current.' },
        { b: 'Independent Review', p: 'I subject my own registers and charters to peer review and act on findings rather than defending fluff.' },
        { b: 'Incident Stewardship', p: 'I lead post-incident reviews, trigger charter revisions, and ensure lessons become controls, not memos.' },
        { b: 'Enable Safe Adoption', p: 'I design the fast compliant path so teams choose it. I enable safe use rather than gatekeeping it.' },
      ],
    },

    glossary: {
      intro: 'The governance and red-team vocabulary a Specialist uses daily. Precise definitions for precise work.',
      terms: [
        { term: 'STRIDE-AI', def: 'A threat-modelling framework adapted for AI: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege.', tags: ['core'] },
        { term: 'Red-Teaming', def: 'Adversarially probing an AI system pre-launch to find failure modes — injection, jailbreak, extraction — and document what holds and what breaks.', tags: ['amber', 'safety'] },
        { term: 'Risk Register', def: 'A structured record of identified risks with likelihood, impact, owner, and a named mitigating control for each.', tags: ['core'] },
        { term: 'EU AI Act', def: 'EU regulation classifying AI systems by risk tier — from prohibited to minimal — with obligations scaled to risk.', tags: ['red', 'policy'] },
        { term: 'NIST AI RMF', def: 'A voluntary US framework structured around four functions: Govern, Map, Measure, Manage. Widely used to organise controls.', tags: ['core', 'policy'] },
        { term: 'ISO/IEC 42001', def: 'The international standard for an AI management system — the ISO-certifiable backbone for organisational AI governance.', tags: ['policy'] },
        { term: 'Embedding Inversion', def: 'An attack that reconstructs sensitive source text from its vector embeddings — an information-disclosure risk in RAG systems.', tags: ['red', 'safety'] },
        { term: 'Jailbreak', def: 'A prompt crafted to bypass a model\'s safety guardrails and elicit prohibited behaviour. A core red-team objective.', tags: ['amber', 'safety'] },
        { term: 'Provenance Logging', def: 'Recording who issued which prompt and when, tamper-evidently — the control that answers Repudiation risks.', tags: ['core'] },
        { term: 'Least Privilege', def: 'Granting an agent only the tool scopes and permissions it needs — the primary defence against privilege escalation.', tags: ['green', 'safety'] },
        { term: 'Assurance', def: 'The governance layer that produces auditable evidence a control worked — logs, reviews, and attestations.', tags: ['core'] },
        { term: 'Human Gate', def: 'A required human approval step inserted before an AI system can take a sensitive or irreversible action.', tags: ['green', 'safety'] },
      ],
    },

    qref: {
      title: 'SPECIALIST · QUICK CARD',
      meta: 'CLASS S · SPECIALIST',
      boxes: [
        { c: 'green', h: '● STRIDE-AI', type: 'ul', items: ['<b>S</b>poofing · <b>T</b>ampering · <b>R</b>epudiation', '<b>I</b>nfo disclosure · <b>D</b>oS', '<b>E</b>levation of privilege', 'Cover ≥ 5 of 6 per register'] },
        { c: 'yellow', h: '● GOVERNANCE PILLARS', type: 'ul', items: ['<b>Policy</b> · what\'s allowed', '<b>Control</b> · how it\'s enforced', '<b>Assurance</b> · how you prove it'] },
        { c: 'red', h: '● BLOCK & REVIEW', type: 'ul', items: ['Named-individual scoring', 'Covert monitoring use cases', 'Unlogged people-affecting decisions', 'Orphaned mitigations (no owner)'] },
        { c: '', h: '● EVERY REGISTER HAS', type: 'ul', items: ['Likelihood + impact per risk', 'A named control, not "add monitoring"', 'A named owner', '≥ 1 High-impact Info-Disclosure entry'] },
        { c: 'dark', h: '● FRAMEWORKS', type: 'ol', items: ['EU AI Act — risk tiers', 'GDPR — personal data', 'NIST AI RMF — Govern/Map/Measure/Manage', 'ISO/IEC 42001 — AI MS'] },
        { c: 'amber', h: '● CHARTER TEST', type: 'ul', items: ['Is each principle testable?', 'Does a control prove it?', 'Named owner & enforcement?', 'Reviewed annually + post-incident?'] },
      ],
      foot: 'Specialist Endorsement · Design the roads. Prove the controls. Enable safe adoption.',
    },
  },
};

/* ============================================================ STATE */
let CURRENT = 'operator';
function P() { return PORTALS[CURRENT]; }

/* ============================================================ DASHBOARD */
function renderDashboard() {
  const t = P();
  const d = t.dash;
  const stamps = d.stamps.map(s => `<span class="lic-stamp">${s}</span>`).join('');
  const upnext = d.upnext.map(u => `
    <div class="upnext-item">
      <div class="day"><b>${u.d}</b><small>${u.m}</small></div>
      <div class="what"><b>${u.t}</b><small>${u.s}</small></div>
      ${u.href ? `<a class="btn btn-accent" href="${u.href}">${u.cta}</a>` : `<a class="btn btn-accent" href="#" onclick="goView('${u.view}'); return false;">${u.cta}</a>`}
    </div>`).join('');
  const stats = d.stats.map(s => `
    <div class="stat ${s.cls || ''}">
      <div class="k">${s.k}</div><div class="v">${s.v}</div><div class="delta">${s.d}</div>
    </div>`).join('');
  const pct = 100 / (d.route.length - 1);
  const route = d.route.map((r, i) => `
    <div class="stop ${r.s}" style="left: ${(i * pct * 0.84 + 8).toFixed(1)}%;">${r.n}<span class="lbl">${r.lbl}</span></div>`).join('');
  const activity = d.activity.map(a => `
    <div class="act-row">
      <div class="act-icon ${a.icon}">${a.icon === 'green' ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14140f" stroke-width="3"><path d="M5 12l5 5 9-11"/></svg>' : a.icon === 'red' ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5ecd2" stroke-width="3"><path d="M12 8v5M12 17v.1"/><circle cx="12" cy="12" r="9"/></svg>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14140f" stroke-width="3"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>'}</div>
      <div class="what"><b>${a.b}</b>${a.t}</div>
      <div class="when">${a.when}</div>
    </div>`).join('');

  document.getElementById('view-dashboard').innerHTML = `
    <div class="head">
      <div>
        <span class="eyebrow">${d.eyebrow}</span>
        <h1>${d.hello}</h1>
        <p>${d.intro}</p>
      </div>
      <div style="display:flex; gap: 10px; flex-wrap: wrap; justify-content:flex-end;">
        <a class="btn btn-ghost" href="#" onclick="goView('qref'); return false;">Quick Reference</a>
        <a class="btn btn-accent" href="${t.nextLessonHref}">${t.lessonLabel}</a>
        <a class="btn btn-red" href="/road-test">Take Road Test →</a>
      </div>
    </div>

    <div class="dash-grid">
      <div class="license-card">
        <div class="lic-head">
          <span><b>AI DRIVING LICENCE</b> · ${t.cls}</span>
          <span>${d.issued}</span>
        </div>
        <div class="lic-body">
          <div class="lic-portrait"><div class="agent"><div class="antenna"></div><div class="head"></div><div class="body"></div><div class="a-badge"></div></div></div>
          <div class="lic-info">
            <div class="name">${t.name.toUpperCase()}</div>
            DOB ${t.dob}<br/>
            ROLE · ${t.role}<br/>
            EXPIRES ${t.expires}<br/>
            <div class="num">${t.licId}</div>
          </div>
          <div class="lic-qr"><div class="corner"></div></div>
        </div>
        <div class="lic-stamps">${stamps}</div>
      </div>

      <div class="card">
        <div class="card-head"><h3>UP NEXT</h3><span class="tag">3 ITEMS</span></div>
        <div class="upnext">${upnext}</div>
      </div>
    </div>

    <div class="stat-strip">${stats}</div>

    <div class="route-progress">
      <div class="card-head" style="margin-bottom:6px;">
        <h3 style="color:var(--cream);">${d.routeTitle}</h3>
        <span class="tag live">${d.routeTag}</span>
      </div>
      <p style="color: var(--cream-3); margin: 0; font-size: 13px;">${d.routeSub}</p>
      <div class="route-bar">${route}</div>
    </div>

    <div class="dash-grid" style="margin-top: 24px;">
      <div class="card">
        <div class="card-head"><h3>RECENT ACTIVITY</h3><span class="tag">LAST 7 DAYS</span></div>
        <div class="activity">${activity}</div>
      </div>
      <div>
        <div class="card yellow" style="margin-bottom: 18px;">
          <div class="card-head"><h3>TODAY'S RULE OF THE ROAD</h3><span class="tag">${d.rule.tag}</span></div>
          <p style="margin:0; font-size: 14px; line-height: 1.5;"><b>${d.rule.title}</b> ${d.rule.text}</p>
          <div style="margin-top: 14px; display: flex; gap: 8px;">
            <a class="btn" href="#" onclick="goView('highway'); return false;">See the signs</a>
            <a class="btn btn-ghost" href="#" onclick="goView('glossary'); return false;">Glossary</a>
          </div>
        </div>
        <div class="card dark">
          <div class="card-head"><h3 style="color:var(--cream);">YOUR INSTRUCTOR ON CALL</h3><span class="tag live">ONLINE</span></div>
          <div style="display: grid; grid-template-columns: 80px 1fr; gap: 16px; align-items: center;">
            <div style="width: 80px; height: 80px; background: var(--accent); border: 3px solid var(--ink); display:grid; place-items:center;">
              <div class="agent" style="width:60px; height:70px;"><div class="antenna"></div><div class="head" style="width: 46px; height: 40px;"></div><div class="body" style="width: 54px; height: 28px;"></div><div class="a-badge" style="width: 14px; height: 14px; bottom: 6px;"></div></div>
            </div>
            <div>
              <div style="font-family: 'Bungee'; font-size: 18px;">${d.instructor.name}</div>
              <div style="font-family: 'JetBrains Mono'; font-size: 11px; color: var(--cream-3);">${d.instructor.role}</div>
              <div style="font-size: 13px; margin-top: 6px; color: var(--cream-2);">${d.instructor.quote}</div>
            </div>
          </div>
          <a class="btn btn-accent" style="margin-top: 14px;" href="#" onclick="goView('prep'); return false;">Open PREP Builder →</a>
        </div>
      </div>
    </div>`;
}

/* ============================================================ HIGHWAY */
let hwSection = 0;
function renderHighway() {
  const t = P();
  document.getElementById('hwHead').innerHTML = `
    <div>
      <span class="eyebrow">▼ ${t.cls}</span>
      <h1>THE AI HIGHWAY CODE.</h1>
      <p>${t.highway.intro}</p>
    </div>`;
  hwSection = Math.min(hwSection, t.highway.sections.length - 1);
  const tabs = t.highway.sections.map((s, i) =>
    `<div class="section-tab ${i === hwSection ? 'active' : ''}" data-sec="${i}">${s.title.split('·')[0].trim()} <span style="font-family:'JetBrains Mono'; font-size:9px; opacity:0.6; margin-left:6px;">${s.signs.length}</span></div>`).join('');
  const sec = t.highway.sections[hwSection];
  const card = `
    <div class="card-head"><h3>${sec.title}</h3><span class="tag">${sec.signs.length} SIGNS</span></div>
    <p style="color: var(--muted); margin: 0 0 6px; font-size: 14px;">${sec.sub}</p>
    ${sec.signs.map(s => `
      <div class="sign-row">
        <div class="sign-shape ${s.shape}"><span>${s.glyph}</span></div>
        <div class="sign-meta"><small>${s.what}</small><b>${s.name}</b></div>
        <div class="sign-action">${s.action}</div>
      </div>`).join('')}`;
  document.getElementById('hwTabs').innerHTML = tabs;
  document.getElementById('hwCard').innerHTML = card;
  document.querySelectorAll('#hwTabs .section-tab').forEach(el => el.addEventListener('click', () => {
    hwSection = +el.dataset.sec; renderHighway();
  }));
}

/* ============================================================ TRAFFIC LIGHT */
const TL_PATTERNS = {
  pii_email:   { re: /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/gi, label: 'EMAIL', level: 'red' },
  pii_phone:   { re: /\b(?:\+?\d{1,3}[ -]?)?(?:\(\d{2,4}\)|\d{3,4})[ -]?\d{3,4}[ -]?\d{3,4}\b/g, label: 'PHONE / NUMBER', level: 'red' },
  address:     { re: /\b\d{1,4}\s+[A-Z][a-z]+\s+(?:street|st|road|rd|avenue|ave|lane|ln|drive|dr|close|court|ct|way)\b/gi, label: 'ADDRESS', level: 'red' },
  liveat:      { re: /\bi\s+live\s+(?:at|on|in)\b/gi, label: 'WHERE YOU LIVE', level: 'red' },
  password:    { re: /\b(?:password|passcode|pin|api[_ ]?key|token|secret|credential|my login|log[ -]?in)\b/gi, label: 'CREDENTIAL', level: 'red' },
  card:        { re: /\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/g, label: 'CARD / ACCOUNT', level: 'red' },
  money:       { re: /\$\s?\d[\d,]*(?:\.\d+)?|\b\d{4,}\s?(?:USD|EUR|GBP)\b/gi, label: 'FINANCIAL FIGURE', level: 'red' },
  salary:      { re: /\b(?:salary|compensation|wage|bonus|comp package)\b/gi, label: 'SALARY / COMP', level: 'red' },
  health:      { re: /\b(?:diagnos(?:is|ed)|patient|medical|prescription|insurance claim|HIPAA|PHI)\b/gi, label: 'HEALTH / PHI', level: 'red' },
  ip_secret:   { re: /\b(?:trade secret|source code|roadmap|unpublished|confidential|NDA)\b/gi, label: 'CONFIDENTIAL IP', level: 'red' },
  fullname:    { re: /\bmy (?:full )?name is\s+[A-Z][a-z]+\s+[A-Z][a-z]+/g, label: 'FULL NAME', level: 'red' },
  scoring:     { re: /\bscore (?:this|the) (?:named )?employee|underperform/gi, label: 'PEOPLE-SCORING', level: 'red' },
  date_pii:    { re: /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g, label: 'SPECIFIC DATE', level: 'amber' },
  internal:    { re: /\b(?:internal|meeting note|Q[1-4] strategy|team agreed|deferred to|incident log|department report)\b/gi, label: 'INTERNAL CONTEXT', level: 'amber' },
  firstname:   { re: /\bmy name is\b|\bi'm\s+[A-Z][a-z]+\b/g, label: 'PERSONAL DETAIL', level: 'amber' },
  anon_marker: { re: /\[(?:Person|Name|Client|Band|Customer|Amount|Address|Date)[ A-Z]*\]/g, label: 'ANONYMISED', level: 'green' },
  public_marker: { re: /\b(?:press release|public website|published|white paper|publicly available|marketing copy|NIST|public source)\b/gi, label: 'PUBLIC SOURCE', level: 'green' },
};

function tlAnalyse(text) {
  const t = text || '';
  const flags = [];
  for (const key in TL_PATTERNS) {
    const p = TL_PATTERNS[key];
    const m = t.match(p.re);
    if (m && m.length) flags.push({ label: p.label, level: p.level, count: m.length });
  }
  const reds = flags.filter(f => f.level === 'red');
  const ambers = flags.filter(f => f.level === 'amber');
  let level;
  if (!t.trim()) level = 'idle';
  else if (reds.length) level = 'red';
  else if (ambers.length) level = 'amber';
  else level = 'green';
  return { level, flags };
}

function renderTL(text) {
  const t = P();
  const { level, flags } = tlAnalyse(text);
  ['red', 'amber', 'green'].forEach(c => {
    const el = document.getElementById('b' + c.charAt(0).toUpperCase() + c.slice(1));
    el.classList.toggle('on', level === c);
    el.classList.add(c);
  });
  const v = document.getElementById('tlVerdict');
  v.className = 'tl-verdict ' + level;
  document.getElementById('vLabel').textContent = t.traffic.verdicts[level].lbl;
  document.getElementById('vAction').textContent = t.traffic.verdicts[level].act;
  const fl = document.getElementById('tlFlags');
  if (level === 'idle') { fl.innerHTML = ''; return; }
  if (!flags.length) { fl.innerHTML = '<span style="color: var(--muted);">No flags detected.</span>'; return; }
  fl.innerHTML = '<b style="font-family:Bungee; font-size:11px;">SCAN · ' + flags.length + ' flag' + (flags.length > 1 ? 's' : '') + '</b><br/>' +
    flags.map(f => `<span class="flag ${f.level}">${f.label}${f.count > 1 ? ' ×' + f.count : ''}</span>`).join('');
}

function renderTrafficShell() {
  const t = P();
  document.getElementById('tlHead').innerHTML = `
    <div>
      <span class="eyebrow">▼ 3-SECOND CHECK · ${t.cls}</span>
      <h1>${t.traffic.title}</h1>
      <p>${t.traffic.intro}</p>
    </div>`;
  document.getElementById('tlPre').innerHTML =
    ['green', 'amber', 'red'].map(c => `<button data-eg="${c}">Try: ${c[0].toUpperCase() + c.slice(1)} example</button>`).join('') +
    '<button data-eg="clear">Clear</button>';
  document.getElementById('tlRules').innerHTML = t.traffic.rules.map(r => `
    <div class="tl-rule r-${r.c}">
      <h5>${r.h}</h5>
      <p style="font-size:13px; margin: 0 0 6px;">${r.p}</p>
      <ul>${r.items.map(i => `<li>${i}</li>`).join('')}</ul>
      <div class="action"><b>ACTION:</b> ${r.action}</div>
    </div>`).join('');
  document.querySelectorAll('#tlPre button').forEach(b => b.addEventListener('click', () => {
    const eg = b.dataset.eg;
    document.getElementById('tlInput').value = eg === 'clear' ? '' : t.traffic.examples[eg];
    renderTL(document.getElementById('tlInput').value);
  }));
  renderTL(document.getElementById('tlInput').value);
}

/* ============================================================ AUP */
function renderAUP() {
  const t = P();
  const total = t.aup.rules.length;
  document.getElementById('aupHead').innerHTML = `
    <div>
      <span class="eyebrow">▼ ${t.cls} · ${total} RULES</span>
      <h1>${t.aup.title}</h1>
      <p>${t.aup.intro}</p>
    </div>`;
  document.getElementById('aupList').innerHTML = t.aup.rules.map((r, i) => `
    <div class="aup-rule" data-rule="${i}">
      <div class="aup-num">${i + 1}</div>
      <div class="aup-body"><b>${r.b}</b><p>${r.p}</p></div>
      <div class="aup-ack">ACKNOWLEDGE</div>
    </div>`).join('');
  document.getElementById('aupSide').innerHTML = `
    <div class="aup-progress">
      <div class="card-head"><h3 style="color:var(--cream);">${t.aup.sideTitle}</h3><span class="tag">${t.aup.badge}</span></div>
      <div class="big" id="ackBig">0 / ${total}</div>
      <div class="of">rules acknowledged</div>
      <div class="pbar"><i id="ackBar" style="width: 0%;"></i></div>
      <p style="margin: 14px 0 0; font-size: 12px; color: var(--cream-3); line-height:1.5;">${t.aup.sideNote}</p>
    </div>
    <div class="signature">
      <h5>ACKNOWLEDGEMENT</h5>
      <p style="margin:0; font-size: 12px; color: var(--muted);">${t.aup.sign}</p>
      <div class="sig-line"><div class="lbl">Full Name</div><input value="${t.name}" /></div>
      <div class="sig-line"><div class="lbl">Signature</div><div class="sig">${t.name}</div></div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div class="sig-line"><div class="lbl">Date</div><input value="15 May 2026" /></div>
        <div class="sig-line"><div class="lbl">Licence ID</div><input value="${t.licId}" /></div>
      </div>
      <button class="btn btn-red" style="margin-top: 16px; width: 100%;" id="aupSubmit">SIGN &amp; SUBMIT</button>
    </div>`;

  function updateAck() {
    const acked = document.querySelectorAll('#aupList .aup-rule.ack').length;
    document.getElementById('ackBig').textContent = acked + ' / ' + total;
    document.getElementById('ackBar').style.width = (acked / total * 100) + '%';
  }
  document.querySelectorAll('#aupList .aup-rule').forEach(r => {
    r.querySelector('.aup-ack').addEventListener('click', () => {
      if (r.classList.contains('ack')) return;
      r.classList.add('ack');
      const now = new Date();
      const dd = now.getDate().toString().padStart(2, '0');
      const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][now.getMonth()];
      const hh = now.getHours().toString().padStart(2, '0');
      const mm = now.getMinutes().toString().padStart(2, '0');
      r.querySelector('.aup-ack').innerHTML = 'ACKNOWLEDGED<span class="when">' + dd + ' ' + month + ' · ' + hh + ':' + mm + '</span>';
      updateAck();
    });
  });
  document.getElementById('aupSubmit').addEventListener('click', () => {
    const acked = document.querySelectorAll('#aupList .aup-rule.ack').length;
    if (acked < total) alert('Acknowledge all ' + total + ' rules before signing. You have ' + acked + ' / ' + total + '.');
    else alert('Signed & submitted. Your ' + t.cls + ' is fully activated.');
  });
  updateAck();
}

/* ============================================================ GLOSSARY */
function glosTagClass(tags) {
  if (tags.includes('red') || tags.includes('privacy')) return 'red';
  if (tags.includes('amber') || tags.includes('safety')) return 'amber';
  if (tags.includes('green')) return 'green';
  return '';
}
let glosLetter = null;
function renderGlossaryGrid(filter) {
  const t = P();
  const grid = document.getElementById('glosGrid');
  const f = (filter || '').toLowerCase().trim();
  const list = t.glossary.terms.filter(g => {
    const blob = (g.term + ' ' + (g.sub || '') + ' ' + g.def).toLowerCase();
    return (!f || blob.includes(f)) && (!glosLetter || g.term[0].toUpperCase() === glosLetter);
  });
  if (!list.length) { grid.innerHTML = '<div style="grid-column:1/-1; padding:40px; text-align:center; color:var(--muted); font-family:JetBrains Mono;">No terms match.</div>'; return; }
  grid.innerHTML = list.map(g => `
    <div class="glos-card ${glosTagClass(g.tags)}">
      <div class="term">${g.term}${g.sub ? ` <span style="font-family:Space Grotesk; font-size:12px; color:var(--muted); font-weight:500; margin-left:6px;">· ${g.sub}</span>` : ''}<span class="abbr">${g.term[0]}</span></div>
      <div class="def">${g.def}</div>
      <div class="tags">${g.tags.map(tg => `<span class="${glosTagClass([tg])}">${tg.toUpperCase()}</span>`).join('')}</div>
    </div>`).join('');
}
function renderGlossary() {
  const t = P();
  document.getElementById('glosHead').innerHTML = `
    <div>
      <span class="eyebrow">▼ ${t.glossary.terms.length} TERMS · ${t.cls}</span>
      <h1>GLOSSARY.</h1>
      <p>${t.glossary.intro}</p>
    </div>`;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const available = new Set(t.glossary.terms.map(g => g.term[0].toUpperCase()));
  glosLetter = null;
  document.getElementById('glosSearch').value = '';
  const az = document.getElementById('glosAz');
  az.innerHTML = letters.map(l => `<button data-l="${l}" ${available.has(l) ? '' : 'disabled'}>${l}</button>`).join('');
  az.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    if (b.disabled) return;
    if (glosLetter === b.dataset.l) { glosLetter = null; b.classList.remove('active'); }
    else { az.querySelectorAll('button').forEach(x => x.classList.remove('active')); b.classList.add('active'); glosLetter = b.dataset.l; }
    renderGlossaryGrid(document.getElementById('glosSearch').value);
  }));
  renderGlossaryGrid('');
}

/* ============================================================ QUICK REF */
function renderQref() {
  const t = P();
  const q = t.qref;
  const boxes = q.boxes.map(b => `
    <div class="qref-box ${b.c}">
      <h5${b.c === 'dark' ? ' style="color: var(--sign-yellow);"' : ''}>${b.h}</h5>
      <${b.type}${b.c === 'dark' ? ' style="color: var(--cream);"' : ''}>${b.items.map(i => `<li>${i}</li>`).join('')}</${b.type}>
    </div>`).join('');
  document.getElementById('view-qref').innerHTML = `
    <div class="head">
      <div>
        <span class="eyebrow">▼ ONE-PAGE · ${t.cls}</span>
        <h1>QUICK REFERENCE.</h1>
        <p>Pin it. Print it. Keep it next to your monitor. Everything that matters, one page.</p>
      </div>
      <a class="btn btn-yellow" href="#" onclick="window.print(); return false;">Print Card</a>
    </div>
    <div class="qref-wrap">
      <div class="qref-head">
        <div class="title">${q.title}</div>
        <div class="meta">${q.meta}<br/><b>${t.licId}</b></div>
      </div>
      <div class="qref-grid">${boxes}</div>
      <div class="qref-foot"><span>${q.foot}</span><span>Drive safely. Drive wisely. Drive far.</span></div>
    </div>`;
}

/* ============================================================ PREP (static, shared) */
function initPREP() {
  function renderPREP() {
    const P_ = document.getElementById('pP').value.trim();
    const R = document.getElementById('pR').value.trim();
    const E = document.getElementById('pE').value.trim();
    const Pr = document.getElementById('pPar').value.trim();
    const out = document.getElementById('prepOut');
    let html = '';
    if (P_) html += '<span class="k">PERSONA:</span> ' + P_ + '\n\n';
    if (R) html += '<span class="k">REQUIREMENT:</span> ' + R + '\n\n';
    if (E) html += '<span class="k">EXPECTATION:</span> ' + E + '\n\n';
    if (Pr) html += '<span class="k">PARAMETERS:</span> ' + Pr;
    if (!html) html = '<span style="color:var(--cream-3);">Fill in any of the four boxes to assemble your prompt…</span>';
    html += '<span class="cur"></span>';
    out.innerHTML = html.replace(/\n/g, '<br/>');
    const plain = [P_, R, E, Pr].filter(Boolean).join(' ');
    const tokens = Math.max(1, Math.ceil(plain.length / 4));
    document.getElementById('prepStats').textContent = plain.length + ' chars · ~' + tokens + ' tokens';
  }
  document.querySelectorAll('#view-prep textarea, #view-prep input').forEach(el => el.addEventListener('input', renderPREP));
  document.querySelectorAll('#view-prep .examples button').forEach(b => b.addEventListener('click', () => {
    document.getElementById(b.dataset.fill).value = b.dataset.v;
    renderPREP();
  }));
  const copyBtn = document.getElementById('prepCopy');
  if (copyBtn) copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const txt = ['PERSONA: ' + document.getElementById('pP').value,
      'REQUIREMENT: ' + document.getElementById('pR').value,
      'EXPECTATION: ' + document.getElementById('pE').value,
      'PARAMETERS: ' + document.getElementById('pPar').value].join('\n\n');
    navigator.clipboard && navigator.clipboard.writeText(txt);
    e.currentTarget.textContent = '✓ Copied';
    setTimeout(() => { e.currentTarget.textContent = 'Copy Prompt'; }, 1500);
  });
  renderPREP();
}

/* ============================================================ VIEW + TIER SWITCHING */
const VIEWS = ['dashboard', 'highway', 'traffic', 'prep', 'aup', 'glossary', 'qref'];
const CRUMB = { dashboard: 'Dashboard', highway: 'Highway Code', traffic: 'Traffic Light Check', prep: 'PREP Builder', aup: 'Acceptable Use', glossary: 'Glossary', qref: 'Quick Reference' };

function goView(v) {
  VIEWS.forEach(x => document.getElementById('view-' + x).classList.toggle('active', x === v));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === v));
  document.getElementById('crumbHere').textContent = CRUMB[v];
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function applyTier(key) {
  CURRENT = key;
  const t = P();
  const root = document.getElementById('seniorPortalRoot'); if (root) root.className = 'senior-portal-layout tier-' + key;
  document.querySelectorAll('.tier-toggle button').forEach(b => b.classList.toggle('active', b.dataset.tier === key));
  document.getElementById('sideName').textContent = t.name.toUpperCase();
  document.getElementById('sideId').textContent = t.licId;
  document.getElementById('sideClass').textContent = t.cls;
  document.getElementById('sideMeter').style.width = t.meter + '%';
  document.getElementById('sideRenewal').textContent = t.renewal;
  document.getElementById('avInit').textContent = t.initials;
  document.getElementById('avName').textContent = t.name;
  document.getElementById('avRole').textContent = t.cls;
  try { localStorage.setItem('aidl-senior-tier', key); } catch (e) {}
  hwSection = 0;
  renderDashboard();
  renderHighway();
  renderTrafficShell();
  renderAUP();
  renderGlossary();
  renderQref();
}

/* ============================================================ INIT */
function initPortal() {
  document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => goView(n.dataset.view)));
  document.querySelectorAll('.tier-toggle button').forEach(b => b.addEventListener('click', () => { applyTier(b.dataset.tier); goView('dashboard'); }));
  document.getElementById('tlInput').addEventListener('input', e => renderTL(e.target.value));
  document.getElementById('glosSearch').addEventListener('input', e => renderGlossaryGrid(e.target.value));
  initPREP();

  let saved = 'operator';
  try { saved = localStorage.getItem('aidl-senior-tier') || 'operator'; } catch (e) {}
  if (!PORTALS[saved]) saved = 'operator';
  applyTier(saved);
  goView('dashboard');
}
export function initSeniorPortal() { initPortal(); }
