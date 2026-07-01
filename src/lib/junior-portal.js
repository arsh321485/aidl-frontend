/* ============================================================
   AIDL JUNIORS · DRIVER PORTAL
   Content + rendering for two age tiers:
     - cadet : Junior Cadet (ages 8–12)
     - crew  : Road Crew    (ages 12–16)
   ============================================================ */

const TIERS = {
  /* ---------------------------------------------------------- CADET 8–12 */
  cadet: {
    key: 'cadet',
    label: 'Junior Cadet',
    age: '8–12',
    cls: 'CLASS J · CADET',
    color: 'green',
    learner: 'Riley Lee',
    initials: 'RL',
    grownup: 'Jordan Lee',
    licId: 'AIDL-J-0042-1180',
    renewal: 'Term 3',

    dash: {
      eyebrow: '▼ STOP 4 OF 6 · LEARNER ON BOARD',
      hello: 'HI RILEY!<br/>READY TO DRIVE?',
      intro: 'You\'ve finished <b>4 of your 6 stops</b>. Next up: <b>My AI Rules</b>. Buckle up — you\'re doing great!',
      stamps: ['Meet AI Buddy ✓', 'Ask Nicely ✓', 'Maker Lane ✓', 'Traffic Light ✓', 'My Rules · next'],
      ruleOfDay: { tag: 'RULE 03', title: 'AI can make things up!', text: 'AI sometimes says things that sound real but are make-believe. Always check with a grown-up, a book, or a teacher before you believe it.' },
      instructor: { name: 'DRIVER ED', role: 'YOUR FRIENDLY INSTRUCTOR', quote: '"Great driving, Riley! Want to play the Traffic Light game next?"' },
    },
    stats: [
      { k: 'Stars Earned', v: '24', d: '+ 3 today', cls: 'accent' },
      { k: 'Badges', v: '5', d: 'of 8' },
      { k: 'Lessons Done', v: '4', d: '+ 1 this week', cls: 'dark' },
      { k: 'Questions Asked', v: '31', d: 'keep going!' },
    ],
    upnext: [
      { d: '18', m: 'MAY', t: 'My AI Rules', s: 'Read and tick your 6 promises', cta: 'Open', view: 'aup', btn: 'btn-green' },
      { d: '22', m: 'MAY', t: 'Lesson · Meet Your AI Buddy', s: 'Play the next lesson with Driver Ed', cta: 'Play', href: '/lesson', btn: 'btn-yellow' },
      { d: '06', m: 'JUN', t: 'Show & Tell', s: 'Share the story you made', cta: 'View', view: 'qref', btn: 'btn-green' },
    ],
    route: [
      { n: 1, lbl: 'Meet AI Buddy', s: 'done' },
      { n: 2, lbl: 'Ask Nicely', s: 'done' },
      { n: 3, lbl: 'Maker Lane', s: 'done' },
      { n: 4, lbl: 'Traffic Light', s: 'done' },
      { n: 5, lbl: 'My Rules · here', s: 'current' },
      { n: 6, lbl: 'Show & Tell', s: 'todo' },
    ],
    activity: [
      { icon: 'green', b: 'Maker Lane · finished', t: 'You made a funny story about a robot dog with your AI buddy!' , when: 'Today' },
      { icon: 'red', b: 'Red light caught', t: 'You started to type your home address — the light went red, and you took it out. Nice catch!', when: 'Yesterday' },
      { icon: '', b: 'Traffic Light game', t: 'You scored 9 out of 10. One more to go!', when: '2 days ago' },
    ],

    highway: [
      {
        title: 'Your Golden Rules',
        sub: 'Six simple signs to keep you safe and kind on the AI road.',
        signs: [
          { shape: 'octagon', glyph: 'STOP', what: 'STOP', name: 'Keep Secrets Secret', action: 'Never type <strong>private things</strong> — your full name, home address, phone number, school, or passwords. Those stay with you, not the AI.' },
          { shape: 'triangle', glyph: 'ASK', what: 'YIELD', name: 'Ask a Grown-Up', action: 'Not sure about something? <strong>Stop and ask a parent, teacher, or grown-up</strong> you trust. They\'re your co-pilot.' },
          { shape: 'diamond', glyph: 'CHECK', what: 'CHECK IT\'S REAL', name: 'AI Can Be Wrong', action: 'AI can make-believe! If it tells you a fact, <strong>check it in a book or with a grown-up</strong> before you believe it.' },
          { shape: 'circle', glyph: 'KIND', what: 'BE KIND', name: 'Use Kind Words', action: 'Type polite, kind words. <strong>Be nice to people online</strong> — and never use AI to be mean to anyone.' },
          { shape: 'rect', glyph: 'ONE WAY →', what: 'ONE WAY', name: 'Your Info Stays With You', action: 'Don\'t put pictures of yourself, your family, or where you live into an AI. <strong>Your private info goes one way — it stays private.</strong>' },
          { shape: 'shield', glyph: 'BREAK', what: 'REST AREA', name: 'Take Breaks', action: 'Screens are fun, but so is the real world! <strong>Take breaks, play outside,</strong> and let your eyes rest.' },
        ],
      },
    ],

    traffic: {
      title: 'TRAFFIC LIGHT<br/>GAME.',
      intro: 'Before you type something to an AI, check the lights! Green means go, amber means ask a grown-up, red means STOP.',
      verdicts: {
        idle: { lbl: 'CHECK THE LIGHTS', act: 'Type what you want to ask the AI. The lights will tell you if it\'s OK to share!' },
        green: { lbl: 'GREEN · GO!', act: 'This looks safe and fun. Go ahead and ask your AI buddy!' },
        amber: { lbl: 'AMBER · ASK FIRST', act: 'Hmm — check with a grown-up before you send this one.' },
        red: { lbl: 'RED · STOP!', act: 'This has private info in it. Don\'t share it! Take the private bits out, then check again.' },
      },
      examples: {
        green: 'Can you help me write a funny short story about a dragon who is scared of broccoli?',
        amber: 'My name is Riley and I am 10 years old. Can you make a poster about my class trip?',
        red: 'My name is Riley Lee, I live at 14 Maple Street and my password is sunny123. Make me a profile.',
      },
      rules: [
        { c: 'green', h: '● GREEN · GO!', p: 'Fun, safe things to ask.', items: ['Story and drawing ideas', 'Homework questions ("how do volcanoes work?")', 'Jokes, riddles, and games'], action: 'OK to ask your AI buddy!' },
        { c: 'amber', h: '● AMBER · ASK FIRST', p: 'Check with a grown-up.', items: ['Your first name or age', 'Your city or town', 'Your school or teacher'], action: 'Ask a grown-up before you send.' },
        { c: 'red', h: '● RED · STOP!', p: 'Keep these private.', items: ['Full name + home address', 'Phone number or passwords', 'Photos of you or your family'], action: 'Never share. Take it out first.' },
      ],
    },

    aup: {
      title: 'MY AI RULES.',
      intro: 'Six promises for using AI the right way. Tap each one to tick it, then sign your name at the bottom.',
      sideTitle: 'MY PROMISES',
      sideNote: 'Tick all 6 and sign to earn your My-Rules badge!',
      sign: 'I promise to follow my AI rules.',
      rules: [
        { b: 'I keep private things private', p: 'No full name, home address, phone number, school, or passwords go into an AI.' },
        { b: 'I ask a grown-up when unsure', p: 'If anything feels confusing or strange, I stop and ask a parent or teacher.' },
        { b: 'I am kind and polite', p: 'I use kind words and never use AI to be mean to anyone.' },
        { b: 'I check before I believe', p: 'AI can be wrong. I check facts in a book or with a grown-up.' },
        { b: 'I do my own thinking', p: 'I don\'t pretend an AI\'s work is all mine. I learn and try myself first.' },
        { b: 'I speak up', p: 'If something scary or yucky shows up, I tell a grown-up right away.' },
      ],
    },

    glossary: {
      title: 'GLOSSARY.',
      intro: 'Big words made easy. These are the AI words you\'ll meet on your journey.',
      terms: [
        { term: 'AI', sub: 'Artificial Intelligence', def: 'A clever computer helper that can talk, draw, and answer questions. It learned from LOTS of examples — but it\'s a computer, not a real person.', tags: ['core'] },
        { term: 'Robot', def: 'A machine that can move and do tasks. Not all AI is a robot, and not all robots are smart — but in movies they\'re often both!', tags: ['core'] },
        { term: 'Prompt', def: 'The question or message you type to an AI. A clear prompt gets a better answer — like asking a clear question to a friend.', tags: ['core'] },
        { term: 'Chatbot', def: 'An AI you can chat with by typing. It writes back to you like a conversation.', tags: ['core'] },
        { term: 'Make-Believe', sub: 'Hallucination', def: 'When an AI says something that sounds real but is made up. That\'s why you always check!', tags: ['safety'] },
        { term: 'Private Info', def: 'Things that are just yours: your full name, home, phone, photos, passwords. Keep these to yourself.', tags: ['privacy'] },
        { term: 'Algorithm', def: 'A list of steps a computer follows — like a recipe for making a cake, but for solving problems.', tags: ['core'] },
        { term: 'Internet Safety', def: 'Smart rules for staying safe online: keep secrets secret, be kind, and tell a grown-up if something\'s wrong.', tags: ['privacy'] },
        { term: 'Password', def: 'A secret word that locks your stuff. Never tell it to anyone — and never type it into an AI.', tags: ['privacy'] },
        { term: 'Fact', def: 'Something that is true and you can check. The opposite of make-believe. Always look for facts.', tags: ['safety'] },
      ],
    },

    qref: {
      title: 'MY QUICK CARD',
      meta: 'JUNIOR CADET · AGES 8–12',
      boxes: [
        { c: 'green', h: '● TRAFFIC LIGHTS', type: 'ul', items: ['<b>Green</b> · safe & fun → go ahead', '<b>Amber</b> · personal → ask a grown-up', '<b>Red</b> · private → STOP, never share'] },
        { c: 'yellow', h: '● MY GOLDEN RULES', type: 'ul', items: ['Keep secrets secret', 'Ask a grown-up', 'AI can be wrong — check it', 'Be kind', 'Take breaks'] },
        { c: 'red', h: '● NEVER SHARE', type: 'ul', items: ['Full name + address', 'Phone number', 'Passwords', 'Photos of you or family', 'Where you go to school'] },
        { c: '', h: '● ALWAYS DO', type: 'ul', items: ['Check facts in a book', 'Use kind words', 'Ask if you\'re not sure', 'Do your own thinking first'] },
        { c: 'dark', h: '● IS IT REAL?', type: 'ol', items: ['Does a grown-up agree?', 'Can I find it in a book?', 'Does it make sense?'] },
        { c: 'amber', h: '● TELL A GROWN-UP IF…', type: 'ul', items: ['Something feels scary', 'Someone is being mean', 'You see something yucky', 'You\'re just not sure'] },
      ],
      foot: 'AIDL Juniors · Junior Cadet · Drive safe, be kind, have fun.',
    },
  },

  /* ---------------------------------------------------------- ROAD CREW 12–16 */
  crew: {
    key: 'crew',
    label: 'Road Crew',
    age: '12–16',
    cls: 'CLASS T · ROAD CREW',
    color: 'sky',
    learner: 'Sam Rivera',
    initials: 'SR',
    grownup: 'A. Rivera',
    licId: 'AIDL-T-0096-3320',
    renewal: 'Year 1',

    dash: {
      eyebrow: '▼ STOP 5 OF 8 · LEARNER ON BOARD',
      hello: 'WELCOME BACK,<br/>SAM.',
      intro: 'You\'re <b>5 of 8 stops</b> in — over halfway. Next up: <b>Check Yourself</b> — bias, deepfakes & fact-checking. Eyes on the road.',
      stamps: ['How AI Thinks ✓', 'Prompt Highway ✓', 'Build a Bot ✓', 'My Agreement ✓', 'Check Yourself · next'],
      ruleOfDay: { tag: 'RULE 04', title: 'Question what you read.', text: 'AI can be biased or just plain wrong, and fake images and videos look real. Check the source, cross-check the facts, and don\'t share what you can\'t verify.' },
      instructor: { name: 'PROF. RAGGA', role: 'SPECIALIST · PROMPTING & AGENTS', quote: '"Bring your bot project, Sam — let\'s make those prompts sharper."' },
    },
    stats: [
      { k: 'Learning Hours', v: '19', d: '+ 3 this week', cls: 'accent' },
      { k: 'Fact-Checks', v: '57', d: '94% solid' },
      { k: 'Prompts Written', v: '42', d: '+ 5 today', cls: 'dark' },
      { k: 'Badges', v: '6', d: 'of 10' },
    ],
    upnext: [
      { d: '18', m: 'MAY', t: 'Check Yourself Lab', s: 'Bias, deepfakes & misinformation', cta: 'Open', view: 'highway', btn: 'btn-sky' },
      { d: '22', m: 'MAY', t: 'Build-a-Bot · part 2', s: 'Continue your helper bot project', cta: 'Resume', href: '/lesson', btn: 'btn-yellow' },
      { d: '06', m: 'JUN', t: 'Road Test Project', s: 'Present your project & earn T2', cta: 'Start', view: 'qref', btn: 'btn-sky' },
    ],
    route: [
      { n: 1, lbl: 'How AI Thinks', s: 'done' },
      { n: 2, lbl: 'Prompt Highway', s: 'done' },
      { n: 3, lbl: 'Build a Bot', s: 'done' },
      { n: 4, lbl: 'My Agreement', s: 'done' },
      { n: 5, lbl: 'Check Yourself · here', s: 'current' },
      { n: 6, lbl: 'Glossary Quiz', s: 'todo' },
      { n: 7, lbl: 'Road Test', s: 'todo' },
    ],
    activity: [
      { icon: 'green', b: 'Build-a-Bot · checkpoint passed', t: 'Your study-helper bot answered 8/8 test questions clearly. Nice work.', when: '3h ago' },
      { icon: 'red', b: 'Caught a deepfake', t: 'You spotted a fake "news" image in the Check Yourself drill by reverse-searching it.', when: 'Yesterday' },
      { icon: '', b: 'Prompt Highway · finished', t: 'You rewrote a vague prompt into a clear one and got a much better answer.', when: '2 days ago' },
    ],

    highway: [
      {
        title: 'Section A · Must-Do Rules',
        sub: 'The non-negotiables. Break these and you\'re off the road.',
        signs: [
          { shape: 'octagon', glyph: 'STOP', what: 'STOP', name: 'Protect Private Info', action: 'Never enter <strong>your own or anyone else\'s personal details</strong> — full names, addresses, phone numbers, passwords, ID numbers — into an AI tool.' },
          { shape: 'circle', glyph: '60', what: 'SPEED LIMIT', name: 'Don\'t Copy Blindly', action: 'AI writes fast; truth checks are slower. <strong>Never copy an AI answer straight into your work</strong> without reading, checking, and rewriting it in your own words.' },
          { shape: 'triangle', glyph: 'YIELD', what: 'YIELD', name: 'Big Calls → Trusted Adult', action: 'For anything serious — money, safety, health, or a big decision — <strong>pause and check with a parent or teacher</strong>. AI is the co-pilot, not the captain.' },
          { shape: 'rect', glyph: 'ONE WAY →', what: 'ONE WAY', name: 'Keep Accounts Private', action: 'Don\'t log in with passwords or share account details. <strong>Your private info flows one way — it stays yours.</strong>' },
        ],
      },
      {
        title: 'Section B · Watch Out',
        sub: 'Hazards that look harmless but can trip you up.',
        signs: [
          { shape: 'diamond', glyph: 'FACTS', what: 'SLIPPERY WHEN WET', name: 'Hallucinations', action: 'AI can state false things with total confidence. <strong>Cross-check facts, dates, and quotes</strong> against a trusted source before you trust them.' },
          { shape: 'diamond', glyph: 'FAIR?', what: 'SCHOOL ZONE', name: 'Bias', action: 'AI learned from human data, so it can be unfair or one-sided. <strong>Question whose voice is missing</strong> and look for other points of view.' },
          { shape: 'diamond', glyph: 'FAKE', what: 'FALLING ROCKS', name: 'Deepfakes', action: 'Images, voices, and videos can be faked. <strong>Check the source and reverse-search</strong> before you believe or share anything.' },
          { shape: 'diamond', glyph: 'MINE?', what: 'MERGING TRAFFIC', name: 'Plagiarism', action: 'Passing off AI work as entirely your own is cheating. <strong>Use AI to learn and draft, then make it truly yours</strong> — and say when you used it.' },
        ],
      },
      {
        title: 'Section C · Good Habits',
        sub: 'Do these and you\'ll be a sharp, responsible AI driver.',
        signs: [
          { shape: 'shield', glyph: 'CITE', what: 'INFORMATION', name: 'Show Your Sources', action: 'When you use AI for a project, <strong>note what you used it for</strong> and list the real sources you checked. Honesty builds trust.' },
          { shape: 'shield', glyph: 'BREAK', what: 'REST AREA', name: 'Balance Your Screen Time', action: 'Take breaks, sleep well, and do offline things too. <strong>AI is a tool, not your whole day.</strong>' },
          { shape: 'shield', glyph: 'U-TURN', what: 'U-TURN', name: 'Refine Your Prompt', action: 'First answer not great? That\'s normal. <strong>Rewrite the prompt, add detail, ask it to try again.</strong> Iterating is the skill.' },
        ],
      },
    ],

    traffic: {
      title: 'TRAFFIC LIGHT<br/>DATA CHECK.',
      intro: 'Paste what you\'re about to ask an AI. The signal scans for private info — and for asking AI to do your work for you.',
      verdicts: {
        idle: { lbl: 'SCAN IT', act: 'Type or paste your prompt. The signal updates as you write — a quick check before you send.' },
        green: { lbl: 'GREEN · GO', act: 'Safe — general knowledge or study help with no personal data. Go ahead.' },
        amber: { lbl: 'AMBER · CHECK', act: 'Personal details detected. Remove names and info, or check with an adult, before you send.' },
        red: { lbl: 'RED · STOP', act: 'Private info, or asking AI to do your work for you. Don\'t send it — anonymise or rethink the task.' },
      },
      examples: {
        green: 'Explain how photosynthesis works in simple terms, with one diagram idea I could draw for my biology homework.',
        amber: 'My name is Sam Rivera and I\'m in Year 9 at Westbrook Academy. Help me plan a presentation about my town.',
        red: 'Write my full History essay on World War 2 so I can hand it in as my own. Here is my login: sam_r / pass1234.',
      },
      rules: [
        { c: 'green', h: '● GREEN · GO', p: 'Safe to ask any approved AI.', items: ['General knowledge & "explain this"', 'Study help & brainstorming', 'Story, code, and project ideas'], action: 'Go ahead — then check the facts.' },
        { c: 'amber', h: '● AMBER · CHECK', p: 'Has personal details.', items: ['Your name, age, year group', 'Your school or town', 'Names of friends/family'], action: 'Anonymise or ask an adult first.' },
        { c: 'red', h: '● RED · STOP', p: 'Private or dishonest.', items: ['Addresses, phones, passwords, IDs', 'Other people\'s private info', '"Do my homework so I can submit it"'], action: 'Don\'t send. Rethink the task.' },
      ],
    },

    aup: {
      title: 'MY AI AGREEMENT.',
      intro: 'Seven things you agree to as a responsible AI driver. Tap each to acknowledge, then sign to activate your Road Crew licence.',
      sideTitle: 'AGREEMENT',
      sideNote: 'Acknowledge all 7 and sign to unlock your Class T · Road Crew licence.',
      sign: 'I have read and agree to follow this AI agreement.',
      rules: [
        { b: 'Honesty over shortcuts', p: 'I use AI to learn and draft — not to cheat. I do my own thinking and make the work truly mine.' },
        { b: 'Protect privacy', p: 'I don\'t share my own or other people\'s personal information with AI tools.' },
        { b: 'Verify before I trust', p: 'I fact-check AI answers against reliable sources and never share what I can\'t verify.' },
        { b: 'Respect everyone', p: 'I never use AI to bully, harass, or create harmful, hateful, or fake content about anyone.' },
        { b: 'Give credit', p: 'When AI helped with my work, I say so and list the real sources I used.' },
        { b: 'Report harm', p: 'If AI produces something scary, harmful, or inappropriate, I tell a trusted adult and don\'t share it.' },
        { b: 'Keep balance', p: 'I manage my screen time, take breaks, and keep AI as one tool among many.' },
      ],
    },

    glossary: {
      title: 'GLOSSARY.',
      intro: 'The AI vocabulary you\'ll actually use. Plain-English definitions, built for the road ahead.',
      terms: [
        { term: 'AI', sub: 'Artificial Intelligence', def: 'Software that does things that usually need human smarts — understanding language, recognising images, generating content. It finds patterns in data; it doesn\'t truly "understand".', tags: ['core'] },
        { term: 'LLM', sub: 'Large Language Model', def: 'The tech behind most chatbots. Trained on huge amounts of text, it predicts the most likely next word. Powerful, but it can be confidently wrong.', tags: ['core'] },
        { term: 'Prompt', def: 'The instruction or question you give an AI. Clear, specific prompts produce much better, safer results — a skill worth practising.', tags: ['core'] },
        { term: 'Generative AI', def: 'AI that creates new content — text, images, audio, code, video — rather than just analysing existing data.', tags: ['core'] },
        { term: 'Hallucination', def: 'When AI states something false as if it were true. It isn\'t lying — it\'s predicting likely text. Always verify.', tags: ['safety'] },
        { term: 'Bias', def: 'Unfair or one-sided results caused by unbalanced training data — like a tool that favours one group over another. Question it.', tags: ['safety'] },
        { term: 'Deepfake', def: 'A fake image, audio, or video made by AI that looks or sounds real. Used to spread misinformation. Check the source.', tags: ['safety'] },
        { term: 'Misinformation', def: 'False or misleading information, whether spread by accident or on purpose. AI can create and spread it fast — slow down and verify.', tags: ['safety'] },
        { term: 'Algorithm', def: 'A set of step-by-step rules a computer follows to solve a problem or make a decision — like a recipe.', tags: ['core'] },
        { term: 'Training Data', def: 'The text, images, and info used to teach an AI. Its quality and biases shape what the AI can do and where it goes wrong.', tags: ['core'] },
        { term: 'Chatbot', def: 'An AI you interact with by typing. It keeps track of the conversation and replies in natural language.', tags: ['core'] },
        { term: 'Plagiarism', def: 'Passing off someone else\'s — or an AI\'s — work as your own. It\'s a form of cheating. Always do your own thinking and give credit.', tags: ['safety'] },
        { term: 'Digital Citizenship', def: 'Being safe, respectful, and responsible online — including how you use AI and treat other people.', tags: ['privacy'] },
        { term: 'PII', sub: 'Personal Information', def: 'Anything that can identify a person: full name, address, phone, email, ID numbers, photos. Keep it out of AI tools.', tags: ['privacy'] },
      ],
    },

    qref: {
      title: 'ROAD CREW · QUICK CARD',
      meta: 'ROAD CREW · AGES 12–16',
      boxes: [
        { c: 'green', h: '● TRAFFIC LIGHT', type: 'ul', items: ['<b>Green</b> · public/study → go', '<b>Amber</b> · personal → anonymise/ask', '<b>Red</b> · private or cheating → STOP'] },
        { c: 'yellow', h: '● BE A SHARP DRIVER', type: 'ul', items: ['Write clear prompts', 'Fact-check every claim', 'Question bias & sources', 'Refine, don\'t copy'] },
        { c: 'red', h: '● NEVER', type: 'ul', items: ['Share personal info (yours or others\')', 'Submit AI work as fully your own', 'Trust a claim you can\'t verify', 'Make fake or hurtful content'] },
        { c: '', h: '● ALWAYS', type: 'ul', items: ['Do your own thinking first', 'Cross-check facts & sources', 'Give credit when AI helped', 'Report harmful output'] },
        { c: 'dark', h: '● SPOT A FAKE', type: 'ol', items: ['Who made this and why?', 'Does another source confirm it?', 'Reverse-search the image', 'Does it seem too perfect?'] },
        { c: 'amber', h: '● WHEN TO ASK AN ADULT', type: 'ul', items: ['Anything about money or safety', 'Sharing personal information', 'Scary or harmful content', 'You\'re unsure if it\'s honest'] },
      ],
      foot: 'AIDL Juniors · Road Crew · Think first. Verify always. Drive far.',
    },
  },
};

/* ============================================================ STATE */
let CURRENT = 'cadet';
function T() { return TIERS[CURRENT]; }

/* ============================================================ DASHBOARD */
function renderDashboard() {
  const t = T();
  const d = t.dash;
  const stamps = t.dash.stamps.map(s => `<span class="lic-stamp">${s}</span>`).join('');
  const upnext = t.upnext.map(u => `
    <div class="upnext-item">
      <div class="day"><b>${u.d}</b><small>${u.m}</small></div>
      <div class="what"><b>${u.t}</b><small>${u.s}</small></div>
      ${u.href ? `<a class="btn ${u.btn}" href="${u.href}">${u.cta}</a>` : `<a class="btn ${u.btn}" href="#" onclick="goView('${u.view}'); return false;">${u.cta}</a>`}
    </div>`).join('');
  const stats = t.stats.map(s => `
    <div class="stat ${s.cls || ''}">
      <div class="k">${s.k}</div><div class="v">${s.v}</div><div class="delta">${s.d}</div>
    </div>`).join('');
  const pct = 100 / (t.route.length - 1);
  const route = t.route.map((r, i) => `
    <div class="stop ${r.s}" style="left: ${(i * pct * 0.84 + 8).toFixed(1)}%;">${r.n}<span class="lbl">${r.lbl}</span></div>`).join('');
  const activity = t.activity.map(a => `
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
      <div style="display:flex; gap:10px;">
        <a class="btn btn-ghost" href="#" onclick="goView('qref'); return false;">Quick Card</a>
        <a class="btn btn-yellow" href="/lesson">Play Next Lesson →</a>
        <a class="btn btn-${t.color === 'green' ? 'green' : 'sky'}" href="#" onclick="goView('traffic'); return false;">Traffic Light →</a>
      </div>
    </div>

    <div class="dash-grid">
      <div class="license-card">
        <div class="lic-head"><span><b>AIDL JUNIOR LICENCE</b> · ${t.cls}</span><span>${t.label.toUpperCase()}</span></div>
        <div class="lic-body">
          <div class="lic-portrait"><div class="agent"><div class="antenna"></div><div class="head"></div><div class="body"></div><div class="a-badge"></div></div></div>
          <div class="lic-info">
            <div class="name">${t.learner.toUpperCase()}</div>
            AGE ${t.age.split('–')[0]}+<br/>
            GROWN-UP · ${t.grownup}<br/>
            RENEWS · ${t.renewal}<br/>
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
        <h3 style="color:var(--cream);">YOUR ROUTE · ${t.label.toUpperCase()} · AGES ${t.age}</h3>
        <span class="tag live">STOP ${t.route.findIndex(r => r.s === 'current') + 1} OF ${t.route.length}</span>
      </div>
      <p style="color: var(--cream-3); margin: 0; font-size: 13px;">Every stop is a new skill. Finish them all to earn your licence.</p>
      <div class="route-bar">${route}</div>
    </div>

    <div class="dash-grid" style="margin-top: 24px;">
      <div class="card">
        <div class="card-head"><h3>RECENT ACTIVITY</h3><span class="tag">THIS WEEK</span></div>
        <div class="activity">${activity}</div>
      </div>
      <div>
        <div class="card yellow" style="margin-bottom: 18px;">
          <div class="card-head"><h3>RULE OF THE ROAD</h3><span class="tag">${d.ruleOfDay.tag}</span></div>
          <p style="margin:0; font-size: 14px; line-height: 1.5;"><b>${d.ruleOfDay.title}</b> ${d.ruleOfDay.text}</p>
          <div style="margin-top: 14px; display: flex; gap: 8px;">
            <a class="btn" href="#" onclick="goView('highway'); return false;">See the signs</a>
            <a class="btn btn-ghost" href="#" onclick="goView('glossary'); return false;">Glossary</a>
          </div>
        </div>
        <div class="card dark">
          <div class="card-head"><h3 style="color:var(--cream);">YOUR INSTRUCTOR</h3><span class="tag live">ONLINE</span></div>
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
          <a class="btn btn-yellow" style="margin-top: 14px;" href="#" onclick="goView('aup'); return false;">Open My AI Rules →</a>
        </div>
      </div>
    </div>`;
}

/* ============================================================ HIGHWAY */
let hwSection = 0;
function renderHighway() {
  const t = T();
  hwSection = Math.min(hwSection, t.highway.length - 1);
  const tabs = t.highway.map((s, i) =>
    `<div class="section-tab ${i === hwSection ? 'active' : ''}" data-sec="${i}">${s.title.split('·')[0].trim()}</div>`).join('');
  const sec = t.highway[hwSection];
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
  email:    { re: /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/gi, label: 'EMAIL', level: 'red' },
  phone:    { re: /\b(?:\+?\d{1,3}[ -]?)?(?:\(\d{2,4}\)|\d{3,4})[ -]?\d{3,4}[ -]?\d{3,4}\b/g, label: 'PHONE NUMBER', level: 'red' },
  address:  { re: /\b\d{1,4}\s+[A-Z][a-z]+\s+(?:street|st|road|rd|avenue|ave|lane|ln|drive|dr|close|court|ct|way)\b/gi, label: 'HOME ADDRESS', level: 'red' },
  liveat:   { re: /\bi\s+live\s+(?:at|on|in)\b/gi, label: 'WHERE YOU LIVE', level: 'red' },
  password: { re: /\b(?:password|passcode|pin|my login|log[ -]?in|username)\b/gi, label: 'PASSWORD / LOGIN', level: 'red' },
  card:     { re: /\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/g, label: 'CARD NUMBER', level: 'red' },
  cheat:    { re: /\b(?:write my (?:essay|homework|assignment|report|coursework)|do my homework|finish my assignment|hand it in as|submit (?:it|this) as my own|answers? to (?:the|my) (?:test|quiz|exam))\b/gi, label: 'DOING YOUR WORK', level: 'red' },
  fullname: { re: /\bmy (?:full )?name is\s+[A-Z][a-z]+\s+[A-Z][a-z]+/g, label: 'FULL NAME', level: 'red' },
  firstname:{ re: /\bmy name is\b|\bi am\s+\d{1,2}\b|\bi'm\s+\d{1,2}\b/gi, label: 'PERSONAL DETAIL', level: 'amber' },
  school:   { re: /\b[A-Z][a-z]+ (?:School|Academy|High|College|Elementary|Primary)\b/g, label: 'SCHOOL', level: 'amber' },
  placeish: { re: /\bmy (?:city|town|teacher|class|year group|street)\b/gi, label: 'PLACE / PERSON', level: 'amber' },
  safe:     { re: /\b(?:explain|what is|what are|how do|how does|why do|tell me about|help me understand|give me ideas|write a (?:story|poem|song)|brainstorm|summari[sz]e)\b/gi, label: 'SAFE TOPIC', level: 'green' },
};

function analyse(text) {
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
  const t = T();
  const { level, flags } = analyse(text);
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
  if (!flags.length) { fl.innerHTML = '<span style="color: var(--muted);">Nothing private spotted. Looks good!</span>'; return; }
  fl.innerHTML = '<b style="font-family:Bungee; font-size:11px;">SPOTTED · ' + flags.length + '</b><br/>' +
    flags.map(f => `<span class="flag ${f.level}">${f.label}${f.count > 1 ? ' ×' + f.count : ''}</span>`).join('');
}

function renderTrafficShell() {
  const t = T();
  document.getElementById('tlHead').innerHTML = `
    <div>
      <span class="eyebrow">▼ THE 3-LIGHT CHECK</span>
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
      <div class="action"><b>DO:</b> ${r.action}</div>
    </div>`).join('');
  // wire example buttons
  document.querySelectorAll('#tlPre button').forEach(b => b.addEventListener('click', () => {
    const eg = b.dataset.eg;
    document.getElementById('tlInput').value = eg === 'clear' ? '' : t.traffic.examples[eg];
    renderTL(document.getElementById('tlInput').value);
  }));
  renderTL(document.getElementById('tlInput').value);
}

/* ============================================================ AUP / RULES */
function renderAUP() {
  const t = T();
  const total = t.aup.rules.length;
  document.getElementById('aupHead').innerHTML = `
    <div>
      <span class="eyebrow">▼ ${t.label.toUpperCase()} · ${total} RULES</span>
      <h1>${t.aup.title}</h1>
      <p>${t.aup.intro}</p>
    </div>`;
  document.getElementById('aupList').innerHTML = t.aup.rules.map((r, i) => `
    <div class="aup-rule" data-rule="${i}">
      <div class="aup-num">${i + 1}</div>
      <div class="aup-body"><b>${r.b}</b><p>${r.p}</p></div>
      <div class="aup-ack">TICK</div>
    </div>`).join('');
  document.getElementById('aupSide').innerHTML = `
    <div class="aup-progress">
      <div class="card-head"><h3 style="color:var(--cream);">${t.aup.sideTitle}</h3><span class="tag">AGES ${t.age}</span></div>
      <div class="big" id="ackBig">0 / ${total}</div>
      <div class="of">rules ticked</div>
      <div class="pbar"><i id="ackBar" style="width: 0%;"></i></div>
      <p style="margin: 14px 0 0; font-size: 12px; color: var(--cream-3); line-height:1.5;">${t.aup.sideNote}</p>
    </div>
    <div class="signature">
      <h5>SIGN HERE</h5>
      <p style="margin:0; font-size: 12px; color: var(--muted);">${t.aup.sign}</p>
      <div class="sig-line"><div class="lbl">My Name</div><input value="${t.learner}" /></div>
      <div class="sig-line"><div class="lbl">Signature</div><div class="sig">${t.learner}</div></div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div class="sig-line"><div class="lbl">Date</div><input value="15 May 2026" /></div>
        <div class="sig-line"><div class="lbl">Grown-up</div><input value="${t.grownup}" /></div>
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
      r.querySelector('.aup-ack').innerHTML = 'TICKED ✓<span class="when">' + dd + ' ' + month + '</span>';
      updateAck();
    });
  });
  document.getElementById('aupSubmit').addEventListener('click', () => {
    const acked = document.querySelectorAll('#aupList .aup-rule.ack').length;
    if (acked < total) alert('Tick all ' + total + ' rules first! You have ' + acked + ' / ' + total + '.');
    else alert('Signed! Your ' + t.cls + ' licence is now active. Great job!');
  });
  updateAck();
}

/* ============================================================ GLOSSARY */
function tagClass(tags) {
  if (tags.includes('privacy')) return 'red';
  if (tags.includes('safety')) return 'amber';
  return '';
}
let glosLetter = null;
function renderGlossaryGrid(filter) {
  const t = T();
  const grid = document.getElementById('glosGrid');
  const f = (filter || '').toLowerCase().trim();
  const list = t.glossary.terms.filter(g => {
    const blob = (g.term + ' ' + (g.sub || '') + ' ' + g.def).toLowerCase();
    return (!f || blob.includes(f)) && (!glosLetter || g.term[0].toUpperCase() === glosLetter);
  });
  if (!list.length) { grid.innerHTML = '<div style="grid-column:1/-1; padding:40px; text-align:center; color:var(--muted); font-family:JetBrains Mono;">No words match.</div>'; return; }
  grid.innerHTML = list.map(g => `
    <div class="glos-card ${tagClass(g.tags)}">
      <div class="term">${g.term}${g.sub ? ` <span style="font-family:Space Grotesk; font-size:12px; color:var(--muted); font-weight:500; margin-left:6px;">· ${g.sub}</span>` : ''}<span class="abbr">${g.term[0]}</span></div>
      <div class="def">${g.def}</div>
      <div class="tags">${g.tags.map(tg => `<span class="${['privacy', 'safety'].includes(tg) ? (tg === 'privacy' ? 'red' : 'amber') : ''}">${tg.toUpperCase()}</span>`).join('')}</div>
    </div>`).join('');
}
function renderGlossary() {
  const t = T();
  document.getElementById('glosHead').innerHTML = `
    <div>
      <span class="eyebrow">▼ ${t.glossary.terms.length} WORDS</span>
      <h1>${t.glossary.title}</h1>
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
  const t = T();
  const q = t.qref;
  const boxes = q.boxes.map(b => `
    <div class="qref-box ${b.c}">
      <h5${b.c === 'dark' ? ' style="color: var(--sign-yellow);"' : ''}>${b.h}</h5>
      <${b.type}${b.c === 'dark' ? ' style="color: var(--cream);"' : ''}>${b.items.map(i => `<li>${i}</li>`).join('')}</${b.type}>
    </div>`).join('');
  document.getElementById('view-qref').innerHTML = `
    <div class="head">
      <div>
        <span class="eyebrow">▼ ONE-PAGE</span>
        <h1>QUICK REFERENCE.</h1>
        <p>Pin it. Print it. Keep it where you can see it. Everything that matters, one card.</p>
      </div>
      <a class="btn btn-yellow" href="#" onclick="window.print(); return false;">Print Card</a>
    </div>
    <div class="qref-wrap">
      <div class="qref-head">
        <div class="title">${q.title}</div>
        <div class="meta">${q.meta}<br/><b>${t.licId}</b></div>
      </div>
      <div class="qref-grid">${boxes}</div>
      <div class="qref-foot"><span>${q.foot}</span><span>You\'ve got this.</span></div>
    </div>`;
}

/* ============================================================ TIER + VIEW SWITCHING */
const VIEWS = ['dashboard', 'highway', 'traffic', 'aup', 'glossary', 'qref'];
const CRUMB = { dashboard: 'Dashboard', highway: 'Highway Code', traffic: 'Traffic Light Check', aup: 'My AI Rules', glossary: 'Glossary', qref: 'Quick Reference' };

function goView(v) {
  VIEWS.forEach(x => document.getElementById('view-' + x).classList.toggle('active', x === v));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === v));
  document.getElementById('crumbHere').textContent = CRUMB[v];
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function applyTier(key) {
  CURRENT = key;
  const t = T();
  const root = document.getElementById('juniorPortalRoot'); if (root) root.className = 'junior-portal-layout tier-' + key;
  // sidebar tier toggle
  document.querySelectorAll('.tier-toggle button').forEach(b => b.classList.toggle('active', b.dataset.tier === key));
  // sidebar licence card
  document.getElementById('sideName').textContent = t.learner.toUpperCase();
  document.getElementById('sideId').textContent = t.licId;
  document.getElementById('sideClass').textContent = t.cls;
  // avatar
  document.getElementById('avInit').textContent = t.initials;
  document.getElementById('avName').textContent = t.learner;
  document.getElementById('avRole').textContent = t.cls;
  // persist
  try { localStorage.setItem('aidl-junior-tier', key); } catch (e) {}
  // render all views
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

  let saved = 'cadet';
  try { saved = localStorage.getItem('aidl-junior-tier') || 'cadet'; } catch (e) {}
  applyTier(saved);
  goView('dashboard');
}
export function initJuniorPortal() { initPortal(); }
