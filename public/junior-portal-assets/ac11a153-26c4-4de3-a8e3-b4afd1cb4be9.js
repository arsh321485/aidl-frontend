/* AIDL JUNIORS · DRIVER PORTAL v2 — built on The Open Road AI Curriculum Framework v1.0
   Two tracks: cadet = Junior Cadet (8–12), crew = Road Crew (12–16) */

const STRANDS = [
  { id: 'S1', name: 'Sense & See', big: 'Perception', cadet: '"How do machines see, hear, and feel our town?"', crew: 'Sensors, computer vision, speech systems, and their failure modes' },
  { id: 'S2', name: 'Think & Decide', big: 'Representation & Reasoning', cadet: '"How does a machine make a choice?"', crew: 'Models, algorithms, search, optimization, uncertainty' },
  { id: 'S3', name: 'Learn & Grow', big: 'Learning', cadet: '"How do machines learn from examples?"', crew: 'Datasets, training, bias, evaluation, generative AI' },
  { id: 'S4', name: 'Talk & Team', big: 'Natural Interaction', cadet: '"How do we talk to machines — and what should we never tell them?"', crew: 'Prompting, interface design, appropriate reliance, disclosure' },
  { id: 'S5', name: 'Care & Community', big: 'Societal Impact', cadet: '"Is it fair? Is it kind? Who does it help in our town?"', crew: 'Fairness, privacy, labor, environment, governance, civic action' },
];

const SPIRAL = [
  { age: 'AGE 8–9', name: 'Notice & Name', p: 'Spot AI in daily life; sort and classify games.' },
  { age: 'AGE 10–11', name: 'Explain & Test', p: 'Rules vs. learning; train tiny models; find mistakes.' },
  { age: 'AGE 12–13', name: 'Build & Question', p: 'Datasets, simple ML tools, bias hunts, prompt craft.' },
  { age: 'AGE 14–16', name: 'Design & Lead', p: 'Community AI projects, audits, policy voice, capstone.' },
];

const LADDER = [
  { name: "Learner's Permit", who: 'Junior Cadet · all', color: 'var(--cream)', unlocks: 'Unplugged activities; teacher-driven demos on a projector.', gate: 'Class safety pledge signed with your guardian.' },
  { name: 'Green Licence', who: 'Junior Cadet · age 10+', color: 'var(--signal-green)', unlocks: 'Supervised, whole-class use of child-safe sandboxes — block coding and image classifiers on teacher accounts.', gate: 'Pass the "Machine or Human?" and "Private vs. Public info" checks.' },
  { name: 'Yellow Licence', who: 'Road Crew · entry', color: 'var(--sign-yellow)', unlocks: 'Small-group use of ML tools and school-managed, filtered generative AI with logged sessions.', gate: 'Data-privacy quiz; explain hallucination with a local example.' },
  { name: 'Blue Licence', who: 'Road Crew · age 14+', color: 'var(--sky)', unlocks: 'Individual project use of approved AI tools (per local law and platform age terms), with citation and disclosure norms.', gate: 'Bias-audit exercise; academic-integrity charter; guardian consent.' },
  { name: 'Crew Chief', who: 'Road Crew · capstone', color: 'var(--signal-red)', unlocks: 'Lead a team project with a real community client; mentor Junior Cadets.', gate: 'Capstone proposal approved by teacher + community panel.' },
];

const TIERS = {
  /* ------------------------------------------------ JUNIOR CADET 8–12 */
  cadet: {
    key: 'cadet', label: 'Junior Cadet', age: '8–12', cls: 'GREEN LICENCE · CADET', color: 'green',
    learner: 'Riley Lee', initials: 'RL', grownup: 'Jordan Lee', licId: 'AIDL-J-0042-1180', renewal: 'Term 3',
    nextLessonHref: 'Junior Lesson Player.html?lesson=J-05',
    identity: 'EXPLORER & APPRENTICE', coreQ: '"What is AI, and how does it see my world?"',
    licenceIdx: 1, doneThrough: 10, currentModule: 11, totalModules: 32,
    dash: {
      eyebrow: '▼ SEMESTER 2 · MODULE 11 OF 32 · LEARNER ON BOARD',
      hello: 'HI RILEY!<br/>READY TO DRIVE?',
      intro: 'You\'re in <b>Semester 2 · Teaching Machines</b>. Next stop: <b>My First Real Model</b> — your Green Licence gate. You\'ll train a real image classifier with your class!',
      ruleOfDay: { tag: 'CADET CODE 04', title: 'Machines make mistakes.', text: 'Always double-check what an AI tells you with a person or a book. That\'s why we keep a Mistake Museum!' },
      instructor: { name: 'DRIVER ED', role: 'YOUR FRIENDLY INSTRUCTOR', quote: '"Big day coming, Riley — you\'ve earned your shot at the Green Licence gate!"' },
    },
    stats: [
      { k: 'Modules Done', v: '10', d: 'of 32 · semester 2', cls: 'accent' },
      { k: 'Mistake Museum', v: '6', d: '+ 2 this week' },
      { k: 'Badges', v: '2', d: 'Spotter + Trainer', cls: 'dark' },
      { k: 'AI Notebook Pages', v: '14', d: 'keep drawing!' },
    ],
    upnext: [
      { d: '18', m: 'MAY', t: 'M11 · My First Real Model', s: 'Green Licence gate — train a classifier', cta: 'Play', href: 'Junior Lesson Player.html?lesson=J-05', btn: 'btn-green' },
      { d: '22', m: 'MAY', t: 'M12 · Mistake Museum', s: 'Try to confuse your class model', cta: 'Preview', view: 'route', btn: 'btn-yellow' },
      { d: '06', m: 'JUN', t: 'Community Showcase 2', s: 'Families play "Real or AI?"', cta: 'View', view: 'route', btn: 'btn-green' },
    ],
    route: [
      { n: 'S1', lbl: 'AI Around My Street', sub: 'Notice & Name', s: 'done' },
      { n: 'S2', lbl: 'Teaching Machines · here', sub: 'Explain & Test', s: 'current' },
      { n: 'S3', lbl: 'AI in My Community', sub: 'Apply', s: 'todo' },
      { n: 'S4', lbl: 'Cadet Capstone', sub: 'Create-lite', s: 'todo' },
    ],
    activity: [
      { icon: 'green', b: 'M10 · Train Your Human Classifier', t: 'Your team "trained" a blindfolded classmate with example cards — then broke it with a tricky spiky fruit!', when: 'Today' },
      { icon: 'red', b: 'Mistake Museum entry', t: 'The class model called a mango a "ball". Added to the museum with your drawing of why.', when: 'Yesterday' },
      { icon: '', b: 'M9 · Rules vs. Learning', t: 'Team Examples beat Team Rules at guessing fruit, 8–5. You explained why!', when: '3 days ago' },
    ],
    semesters: [
      { name: 'Semester 1', theme: 'AI Around My Home & Street', stage: 'Notice & Name', mods: [
        { n: 1, name: 'Machine or Human?', strands: ['S4','S5'], act: 'Sorting game: cards showing local services — bus announcement, market vendor, weather alert, radio DJ. Which involve AI?', hook: 'Cards redrawn with <span class="swap">⟨local transport, shops &amp; media⟩</span>' },
        { n: 2, name: 'The Robot Teacher Game', strands: ['S2'], act: 'One child is the "robot"; others write step-by-step rules to make it walk across the room or make a local dish.', hook: 'Instruction set is a <span class="swap">⟨local recipe or dance⟩</span>' },
        { n: 3, name: 'How Machines See', strands: ['S1'], act: 'Pixel-grid coloring: turn a photo of a local landmark into a grid and discover that images are numbers.', hook: 'Landmark = <span class="swap">⟨your town\'s mosque / temple / church / bridge / mountain⟩</span>' },
        { n: 4, name: 'How Machines Hear', strands: ['S1'], act: 'Clap-pattern game; visualize sound waves with rice on a drum; local-language voice assistant demo on the teacher\'s device.', hook: 'Test whether assistants understand <span class="swap">⟨the local accent / dialect⟩</span> — discuss why not' },
        { n: 5, name: 'Pattern Detectives', strands: ['S3'], act: 'Sort seeds, buttons, or fabric scraps by features; compare human sorting vs. "machine rules".', hook: 'Sort <span class="swap">⟨local crops, spices, or textile patterns⟩</span>' },
        { n: 6, name: 'Smart or Just Fast?', strands: ['S2','S5'], act: 'Calculator vs. thinking debate; story circle about cleverness and wisdom.', hook: 'A <span class="swap">⟨local folktale⟩</span> about cleverness vs. wisdom' },
        { n: 7, name: 'My Data Shadow', strands: ['S4','S5'], act: 'Trace your day: what info did machines collect? Draw your "data shadow".', hook: '<span class="swap">⟨Local transit cards, shop cameras, phone apps⟩</span>' },
        { n: 8, name: 'Community Showcase 1', strands: ['S1','S2','S3','S4','S5'], act: '"AI Spotters" poster walk for families.', hook: 'Families annotate posters with their own examples' },
      ]},
      { name: 'Semester 2', theme: 'Teaching Machines', stage: 'Explain & Test', gate: { after: 10, name: 'GREEN LICENCE GATE', text: 'Module 11 unlocks supervised class use of child-safe sandboxes. Gate: pass "Machine or Human?" and "Private vs. Public info" checks.' }, mods: [
        { n: 9, name: 'Rules vs. Learning', strands: ['S3'], act: 'Two teams guess fruit: one with written rules, one by seeing many examples. Which learns better?', hook: '<span class="swap">⟨Local fruits, vegetables, or fish⟩</span>' },
        { n: 10, name: 'Train Your Human Classifier', strands: ['S3'], act: 'Kids "train" a blindfolded classmate with example cards — then break it with a tricky example.', hook: 'Examples drawn from <span class="swap">⟨local animals &amp; plants⟩</span>' },
        { n: 11, name: 'My First Real Model', strands: ['S1','S3'], act: 'Green Licence gate. Supervised class use of a child-safe image classifier to recognize local objects.', hook: 'Classify <span class="swap">⟨local leaves, coins, gestures, or craft items⟩</span>' },
        { n: 12, name: 'When Machines Get It Wrong', strands: ['S3','S5'], act: 'Feed the class model confusing examples; keep a "Mistake Museum".', hook: 'Include items the training set ignored — <span class="swap">⟨local skin tones, garments, foods⟩</span>' },
        { n: 13, name: 'Fair Isn\'t Automatic', strands: ['S5'], act: 'Cookie-sharing simulation: a "rule" that seems fair but isn\'t; connect to a model trained only on some kids\' drawings.', hook: 'Fairness framed via <span class="swap">⟨local sharing customs — harvest, iftar, potluck, ubuntu⟩</span>' },
        { n: 14, name: 'Machines That Talk', strands: ['S4'], act: 'Teacher-mediated chatbot demo on the projector; the class hunts for one made-up "fact" about their own town.', hook: 'The hallucination is about <span class="swap">⟨local history⟩</span> — elders verify' },
        { n: 15, name: 'Real or AI-Made?', strands: ['S3','S5'], act: 'Spot-the-fake gallery: real vs. AI images of familiar places; learn the tell-tale signs.', hook: 'Images of <span class="swap">⟨the learners\' own city / landscape⟩</span>' },
        { n: 16, name: 'Community Showcase 2', strands: ['S1','S2','S3','S4','S5'], act: 'Families play "Real or AI?" and visit the Mistake Museum.', hook: 'Guest judge: <span class="swap">⟨a local elder or journalist⟩</span>' },
      ]},
      { name: 'Semester 3', theme: 'AI in My Community\'s Work', stage: 'Apply', mods: [
        { n: 17, name: 'AI Field Walk', strands: ['S1','S5'], act: 'Guided walk: where could sensors and AI exist here — traffic, irrigation, clinic, port, market?', hook: 'The walk <span class="swap">⟨is⟩</span> the localization' },
        { n: 18, name: 'Helping Hands: AI & Jobs', strands: ['S5'], act: 'Interview a family member: could a machine help or harm their work?', hook: '<span class="swap">⟨Local occupations — fishing, farming, tailoring, nursing, driving⟩</span>' },
        { n: 19, name: 'Weather & Water', strands: ['S1','S3'], act: 'Simple data logging with a rain gauge and temperature chart; predict tomorrow from patterns.', hook: '<span class="swap">⟨Monsoon, harmattan, snow, drought⟩</span> — whatever is local' },
        { n: 20, name: 'Maps & Machines', strands: ['S2'], act: 'Route-finding on a hand-drawn town map; act out "shortest path".', hook: 'The children\'s own <span class="swap">⟨school-to-home routes⟩</span>' },
        { n: 21, name: 'AI & My Language', strands: ['S1','S4','S5'], act: 'Test translation of a local proverb; explore why machines struggle with our language.', hook: '<span class="swap">⟨Proverbs, songs, or oral stories⟩</span> from the community' },
        { n: 22, name: 'Design a Helper', strands: ['S2','S4'], act: 'Teams sketch an AI helper for a real local problem — cardboard and role-play prototype.', hook: 'Problem nominated by <span class="swap">⟨community survey⟩</span>' },
        { n: 23, name: 'The Kindness Test', strands: ['S5'], act: 'Ethics circle: does our helper respect privacy, fairness, elders, and the environment?', hook: '<span class="swap">⟨Local values framework⟩</span> co-written with families' },
        { n: 24, name: 'Community Showcase 3', strands: ['S1','S2','S3','S4','S5'], act: 'Paper-prototype fair; the community votes with tokens.', hook: '<span class="swap">⟨Local leaders⟩</span> as "investors" with token budgets' },
      ]},
      { name: 'Semester 4', theme: 'Junior Cadet Capstone', stage: 'Create-lite', mods: [
        { n: '25–26', name: 'Pick & Plan', strands: ['S2','S4'], act: 'Teams pick one Semester-3 prototype to take further and plan the build.', hook: 'Client problem from the <span class="swap">⟨community survey⟩</span>' },
        { n: '27–28', name: 'Micro-Demo Build', strands: ['S1','S2','S3'], act: 'A working micro-demo: block coding with pre-trained blocks where devices allow — or a full "Wizard-of-Oz" role-played system where they don\'t.', hook: 'Delivery mode set by the <span class="swap">⟨Infrastructure Reality Check⟩</span>' },
        { n: 29, name: 'Fairness Check', strands: ['S5'], act: 'Test the demo the Kindness-Test way: who does it help, who does it miss?', hook: 'Judged against the <span class="swap">⟨local values charter⟩</span>' },
        { n: 30, name: 'Privacy Check', strands: ['S4','S5'], act: 'Trace every piece of info the helper uses. Anything private? Take it out.', hook: 'Rules from the <span class="swap">⟨Risk &amp; Law Snapshot⟩</span>' },
        { n: 31, name: 'Family Presentation', strands: ['S4'], act: 'Present the project to families — explaining a concept to a grown-up is the test.', hook: 'Presented in <span class="swap">⟨the home language⟩</span>' },
        { n: 32, name: 'Cadet Graduation', strands: ['S1','S2','S3','S4','S5'], act: 'Recite the Cadet Code, present your favorite Mistake Museum entry, receive the Road Crew invitation.', hook: 'Celebration styled by the <span class="swap">⟨Story &amp; Symbol Bank⟩</span>' },
      ]},
    ],
    code: {
      title: 'THE CADET CODE.',
      intro: 'Five golden rules, repeated ritually. Tap each one to promise it, then sign with your grown-up. You\'ll recite these at graduation!',
      sideTitle: 'MY PROMISES', sideNote: 'Promise all 5 and sign with your grown-up. This is your Learner\'s Permit pledge — and your graduation speech.',
      sign: 'I promise to follow the Cadet Code.',
      rules: [
        { b: 'AI is a tool, not a friend', p: 'It doesn\'t have feelings, even when it sounds like it does. It\'s a machine that finds patterns — it doesn\'t think, feel, or know you.' },
        { b: 'I keep my secrets secret', p: 'I never tell a machine my full name, address, school, photos, or secrets.' },
        { b: 'I stop and tell', p: 'If anything on a screen feels scary, weird, or too personal — I stop and tell a trusted adult.' },
        { b: 'I double-check machines', p: 'Machines make mistakes. I always double-check with a person or a book.' },
        { b: 'I am kind with technology', p: 'I never use it to trick, tease, or copy.' },
      ],
    },
    badges: {
      note: 'Your badge ladder follows your journey — earn all five to graduate as a Cadet.',
      ladder: [
        { name: 'Spotter', how: 'Spot and name AI in your daily life (Semester 1).', s: 'earned' },
        { name: 'Trainer', how: 'Train a model — human or machine — with good examples (Modules 9–11).', s: 'current' },
        { name: 'Tester', how: 'Break a model on purpose and add finds to the Mistake Museum.', s: 'locked' },
        { name: 'Helper', how: 'Design a helper for a real local problem and pass the Kindness Test.', s: 'locked' },
        { name: 'Cadet Graduate', how: 'Recite the Cadet Code and present your capstone to families.', s: 'locked' },
      ],
      portfolio: { title: 'MY AI NOTEBOOK', sub: 'Your evidence — drawings, museum entries, and family interviews. Process is gold; polish is nothing.', items: [
        { b: 'Drawings & data shadows', s: 'Pixel grids, data-shadow sketches, helper designs', n: 9 },
        { b: 'Mistake Museum entries', s: 'Every funny, unfair, or confusing AI mistake you caught', n: 6 },
        { b: 'Family interviews', s: 'What machines could help (or worry) the grown-ups you know', n: 2 },
        { b: 'Explain-it-back cards', s: 'Concepts you taught a family member — attested!', n: 3 },
      ]},
    },
    traffic: {
      title: 'TRAFFIC LIGHT<br/>GAME.',
      intro: 'Practice for your "Private vs. Public info" check — one of your two Green Licence gates. Green means go, amber means ask a grown-up, red means STOP.',
      verdicts: {
        idle: { lbl: 'CHECK THE LIGHTS', act: 'Type what you want to ask the AI. The lights will tell you if it\'s OK to share!' },
        green: { lbl: 'GREEN · GO!', act: 'This looks safe and fun. Remember: AI encounters happen with your teacher on the big screen!' },
        amber: { lbl: 'AMBER · ASK FIRST', act: 'Hmm — check with a grown-up before you send this one.' },
        red: { lbl: 'RED · STOP!', act: 'This has private info in it. Don\'t share it! Take the private bits out, then check again.' },
      },
      examples: {
        green: 'Can you help me write a funny short story about a dragon who is scared of broccoli?',
        amber: 'My name is Riley and I am 10 years old. Can you make a poster about my class trip?',
        red: 'My name is Riley Lee, I live at 14 Maple Street and my password is sunny123. Make me a profile.',
      },
      rules: [
        { c: 'green', h: '● GREEN · GO!', p: 'Fun, safe things to ask.', items: ['Story and drawing ideas', 'Homework questions ("how do volcanoes work?")', 'Jokes, riddles, and games'], action: 'OK — with your teacher driving the demo.' },
        { c: 'amber', h: '● AMBER · ASK FIRST', p: 'Check with a grown-up.', items: ['Your first name or age', 'Your city or town', 'Your school or teacher'], action: 'Ask a grown-up before you send.' },
        { c: 'red', h: '● RED · STOP!', p: 'Keep these private.', items: ['Full name + home address', 'Phone number or passwords', 'Photos of you or your family'], action: 'Never share. Take it out first.' },
      ],
    },
    glossary: {
      title: 'GLOSSARY.',
      intro: 'Big words made easy. These are the AI words you\'ll meet on your journey.',
      terms: [
        { term: 'AI', sub: 'Artificial Intelligence', def: 'A machine that finds patterns. It can talk, draw, and answer questions because it learned from LOTS of examples — but it does not think, feel, or know you.', tags: ['core'] },
        { term: 'Pattern', def: 'Something that repeats — stripes, seasons, sorting seeds by shape. Finding patterns is ALL an AI really does.', tags: ['core'] },
        { term: 'Pixel', def: 'One tiny square of a picture. To a machine, a photo of your town is just a big grid of pixel numbers.', tags: ['core'] },
        { term: 'Classifier', def: 'A machine (or a blindfolded classmate!) that sorts things into groups after seeing many examples.', tags: ['core'] },
        { term: 'Training', def: 'Teaching a machine with examples. Good examples make a good model — missing examples make mistakes.', tags: ['core'] },
        { term: 'Make-Believe', sub: 'Hallucination', def: 'When an AI says something that sounds real but is made up — even about your own town. That\'s why you always check!', tags: ['safety'] },
        { term: 'Mistake Museum', def: 'Our class collection of AI mistakes. Every mistake teaches us what the machine never learned.', tags: ['safety'] },
        { term: 'Data Shadow', def: 'The trail of info machines collect about your day — transit cards, cameras, apps. Know your shadow!', tags: ['privacy'] },
        { term: 'Private Info', def: 'Things that are just yours: full name, home, phone, photos, passwords. They never go into an AI.', tags: ['privacy'] },
        { term: 'Fair', def: 'A rule can seem fair but leave someone out — like a model trained only on some kids\' drawings. Fair isn\'t automatic.', tags: ['safety'] },
        { term: 'Algorithm', def: 'A list of steps a computer follows — like a recipe for making a cake, but for solving problems.', tags: ['core'] },
        { term: 'Stop & Tell', def: 'Our protocol: if something feels scary, weird, or too personal — stop, and tell our named trusted adult.', tags: ['privacy'] },
      ],
    },
    qref: {
      title: 'MY QUICK CARD', meta: 'JUNIOR CADET · AGES 8–12 · GREEN LICENCE',
      boxes: [
        { c: 'green', h: '● TRAFFIC LIGHTS', type: 'ul', items: ['<b>Green</b> · safe & fun → go ahead', '<b>Amber</b> · personal → ask a grown-up', '<b>Red</b> · private → STOP, never share'] },
        { c: 'yellow', h: '● THE CADET CODE', type: 'ol', items: ['AI is a tool, not a friend', 'Keep secrets secret', 'Stop & tell a trusted adult', 'Machines make mistakes — check', 'Be kind — never trick, tease, or copy'] },
        { c: 'red', h: '● NEVER SHARE', type: 'ul', items: ['Full name + address', 'Phone number or passwords', 'Photos of you or family', 'Your school', 'Your secrets'] },
        { c: '', h: '● MY LICENCE', type: 'ul', items: ['<b>Learner\'s Permit</b> · unplugged games ✓', '<b>Green Licence</b> · class sandboxes, age 10+', 'AI demos: teacher\'s screen only', 'No accounts in my name, ever'] },
        { c: 'dark', h: '● IS IT REAL?', type: 'ol', items: ['Does a grown-up agree?', 'Can I find it in a book?', 'Would an elder say it\'s true?'] },
        { c: 'amber', h: '● STOP & TELL IF…', type: 'ul', items: ['Something feels scary or weird', 'A machine asks about YOU', 'Someone is being mean', 'You\'re just not sure'] },
      ],
      foot: 'AIDL Juniors · Junior Cadet · Drive safe, be kind, have fun.',
    },
  },

  /* ------------------------------------------------ ROAD CREW 12–16 */
  crew: {
    key: 'crew', label: 'Road Crew', age: '12–16', cls: 'YELLOW LICENCE · CREW', color: 'sky',
    learner: 'Sam Rivera', initials: 'SR', grownup: 'A. Rivera', licId: 'AIDL-T-0096-3320', renewal: 'Year 1',
    nextLessonHref: 'Junior Lesson Player.html?lesson=T-05',
    identity: 'BUILDER & CITIZEN', coreQ: '"How do I build with AI, judge it, and shape it for my community?"',
    licenceIdx: 2, doneThrough: 8, currentModule: 9, totalModules: 34,
    dash: {
      eyebrow: '▼ SEMESTER 2 · MODULE 9 OF 34 · YELLOW LICENCE',
      hello: 'WELCOME BACK,<br/>SAM.',
      intro: 'Semester 2: <b>Bias, Power & Truth</b> — the critical core. Next up: <b>The Bias Hunt</b>. You\'ll audit an image generator for how it represents your people, dress, and streets.',
      ruleOfDay: { tag: 'CREW CODE 02', title: 'Verify — AI output is a claim, never a source.', text: 'Check it against people, primary sources, and your own reasoning. Your Hallucination Lab error report proved why.' },
      instructor: { name: 'PROF. RAGGA', role: 'SPECIALIST · AUDITS & PROMPTING', quote: '"Bring your Bias Hunt prompts, Sam — we compare against the heritage-center photos on Thursday."' },
    },
    stats: [
      { k: 'Modules Done', v: '8', d: 'of 34 · semester 2', cls: 'accent' },
      { k: 'Error Reports', v: '3', d: 'Hallucination Lab' },
      { k: 'Prompt Logs', v: '42', d: 'process is gold', cls: 'dark' },
      { k: 'Badges', v: '1', d: 'Fueler earned' },
    ],
    upnext: [
      { d: '18', m: 'MAY', t: 'M9 · The Bias Hunt', s: 'Audit an image generator for your community', cta: 'Play', href: 'Junior Lesson Player.html?lesson=T-05', btn: 'btn-sky' },
      { d: '22', m: 'MAY', t: 'M10 · Whose Data? Whose Language?', s: 'Measure translation quality with bilingual elders', cta: 'Preview', view: 'route', btn: 'btn-yellow' },
      { d: '06', m: 'JUN', t: 'Blue Licence gate check', s: 'Bias audit + integrity charter + consent', cta: 'View', view: 'ladder', btn: 'btn-sky' },
    ],
    route: [
      { n: 'S1', lbl: 'Under the Hood', sub: 'Yellow Licence', s: 'done' },
      { n: 'S2', lbl: 'Bias, Power & Truth · here', sub: 'Critical core', s: 'current' },
      { n: 'S3', lbl: 'Build for Someone', sub: 'Blue Licence studio', s: 'todo' },
      { n: 'S4', lbl: 'Capstone & Citizenship', sub: 'Crew Chief', s: 'todo' },
    ],
    activity: [
      { icon: 'green', b: 'M8 · Integrity Charter signed', t: 'Your class negotiated its AI-use policy with teachers and signed. Disclosure on all assessed work.', when: '3h ago' },
      { icon: 'red', b: 'M6 · Hallucination Lab', t: 'The LLM invented a "1923 flood" in your town. Your error report — checked against the library archive — is published.', when: 'Last week' },
      { icon: '', b: 'M7 · Prompting as Specification', t: 'You iterated a prompt to summarize a council report; documented what changed and why in your prompt log.', when: 'Last week' },
    ],
    semesters: [
      { name: 'Semester 1', theme: 'Under the Hood', stage: 'Foundations · Yellow Licence', mods: [
        { n: 1, name: 'The AI Landscape Audit', strands: ['S5'], act: 'Log every AI touchpoint in your week; the class builds a "local AI map".', hook: '<span class="swap">⟨Local apps, gov services, shops, transit⟩</span>' },
        { n: 2, name: 'Data Is the Fuel', strands: ['S3'], act: 'Collect a real class dataset — e.g. 200 photos of local street objects. Label it; discover labeling disagreements.', hook: 'The dataset is <span class="swap">⟨local by construction⟩</span>' },
        { n: 3, name: 'Train / Test / Break', strands: ['S3'], act: 'Train an image or sound classifier; hold out a test set; adversarial "break day".', hook: '<span class="swap">⟨Local objects, dialect words, bird calls⟩</span>' },
        { n: 4, name: 'How Models Learn', strands: ['S3'], act: 'Unplugged math: gradient-descent hill-walking game; decision trees on paper with local decision problems.', hook: '"Should the market open early?" tree with <span class="swap">⟨local weather &amp; festival features⟩</span>' },
        { n: 5, name: 'Generative AI Demystified', strands: ['S3','S4'], act: 'Next-word prediction game, then LLM anatomy: tokens, training data, temperature.', hook: 'Predict-the-next-word with <span class="swap">⟨local song lyrics / proverbs⟩</span> to expose data gaps' },
        { n: 6, name: 'Hallucination Lab', strands: ['S4','S5'], act: 'Query an LLM about local history and geography; fact-check against library, elders, archives; publish an "error report". The signature Road Crew safety lesson.', hook: 'Entirely <span class="swap">⟨local⟩</span> — that\'s the point' },
        { n: 7, name: 'Prompting as Specification', strands: ['S4'], act: 'Prompt-craft studio: iterate prompts for a defined task; compare outputs; document what changed and why.', hook: 'Tasks like <span class="swap">⟨translate a notice, summarize a council report⟩</span>' },
        { n: 8, name: 'Integrity Charter Workshop', strands: ['S5'], act: 'Draft the class AI-use policy for schoolwork; negotiate with teachers; sign.', hook: 'Aligned with <span class="swap">⟨the school\'s / nation\'s assessment rules⟩</span>' },
      ]},
      { name: 'Semester 2', theme: 'Bias, Power & Truth', stage: 'Critical core', mods: [
        { n: 9, name: 'The Bias Hunt', strands: ['S3','S5'], act: 'Audit an image generator or classifier for how it represents your people, dress, streets, and professions.', hook: '"Generate <span class="swap">⟨a doctor / a farmer / a wedding here⟩</span>" — analyze the results' },
        { n: 10, name: 'Whose Data? Whose Language?', strands: ['S5'], act: 'Investigate how well AI serves the local language(s); measure translation quality on 20 sentences with bilingual elders.', hook: 'The <span class="swap">⟨local / minority language⟩</span> gap becomes measurable evidence' },
        { n: 11, name: 'Deepfakes & Synthetic Media', strands: ['S1','S5'], act: 'Detection workshop; ethics of synthetic voices and faces; local media-law snapshot.', hook: 'Analyze a teacher-curated <span class="swap">⟨local misinformation case⟩</span>' },
        { n: 12, name: 'Recommender Systems & Attention', strands: ['S2','S5'], act: 'Simulate a feed algorithm with cards; compute engagement vs. wellbeing trade-offs.', hook: 'What goes viral <span class="swap">⟨here⟩</span>, and why' },
        { n: 13, name: 'Privacy Engineering', strands: ['S4','S5'], act: 'Threat-model a school app; learn anonymization, consent, and data minimization by fixing a leaky (mock) dataset.', hook: 'Mock data mirrors <span class="swap">⟨local formats — names, IDs, addresses⟩</span>' },
        { n: 14, name: 'AI, Work & Our Economy', strands: ['S5'], act: 'Sector study: how AI is entering the region\'s top three industries; interview workers.', hook: '<span class="swap">⟨Port, farm, factory, tourism, tech park⟩</span> — region-specific' },
        { n: 15, name: 'Environment & Compute', strands: ['S5'], act: 'Estimate the energy and water footprint of AI vs. local resource realities; debate.', hook: '<span class="swap">⟨Water-stressed regions⟩</span> foreground water; others energy / e-waste' },
        { n: 16, name: 'Mock Council: Regulate It', strands: ['S5'], act: 'Role-play: draft one AI rule for your city; defend it before a panel.', hook: 'Use the actual <span class="swap">⟨council / panchayat / municipality⟩</span> structure' },
      ]},
      { name: 'Semester 3', theme: 'Build for Someone', stage: 'Applied studio · Blue Licence', gate: { after: 16, name: 'BLUE LICENCE GATE', text: 'Age 14+, individual tool use. Gate: bias-audit exercise, academic-integrity charter, and guardian consent. Then the Data Ethics Gate before any data is gathered.' }, mods: [
        { n: '17–18', name: 'Client Discovery', strands: ['S5','S4'], act: 'Partner with a real local client — shop, clinic outreach, farm co-op, library, NGO — and define a problem AI might help with. Or conclude honestly that it shouldn\'t.', hook: 'Clients from the <span class="swap">⟨Partner Roster⟩</span>' },
        { n: '19–20', name: 'Data Ethics Gate', strands: ['S3','S5'], act: 'Consent forms, data-minimization plan, and community-review sign-off before any data is gathered.', hook: 'Rules from the <span class="swap">⟨Values &amp; Ethics Charter⟩</span>' },
        { n: '21–23', name: 'Build Sprint', strands: ['S1','S2','S3','S4'], act: 'Options ladder by resources: no-code ML tools · block/Python + pre-trained models · LLM workflow with human-in-the-loop · fully unplugged decision-support system. All valid.', hook: 'Rung chosen by the <span class="swap">⟨Infrastructure Reality Check⟩</span>' },
        { n: 24, name: 'Red-Team Day', strands: ['S3','S5'], act: 'Teams attack each other\'s projects: bias, privacy, failure, misuse.', hook: 'Attack scenarios from <span class="swap">⟨local contexts⟩</span>' },
        { n: 25, name: 'Iterate & Document', strands: ['S4'], act: 'Model cards / project cards: intended use, limits, data provenance, known failure modes.', hook: 'Written for <span class="swap">⟨your client⟩</span>, in plain language' },
        { n: 26, name: 'Mid-Showcase', strands: ['S1','S2','S3','S4','S5'], act: 'Client scores usefulness, safety, and respect for community norms.', hook: 'Scored against <span class="swap">⟨community norms⟩</span>' },
      ]},
      { name: 'Semester 4', theme: 'Capstone & Citizenship', stage: 'Crew Chief', mods: [
        { n: '27–30', name: 'Capstone Completion', strands: ['S1','S2','S3','S4','S5'], act: 'Finish, harden, and hand over the community project — with documentation and a maintenance / retirement plan.', hook: 'Handover to <span class="swap">⟨your community client⟩</span>' },
        { n: 31, name: 'Mentor Day', strands: ['S4','S5'], act: 'Teach one Junior Cadet session each — teaching as mastery assessment.', hook: 'You teach <span class="swap">⟨next year\'s Cadets⟩</span>' },
        { n: 32, name: 'Public Defense', strands: ['S5'], act: 'Panel of teacher + community client + external adult. Defend your technical AND ethical choices.', hook: 'External judge: <span class="swap">⟨librarian, engineer, or official⟩</span>' },
        { n: 33, name: 'Futures Studio', strands: ['S5'], act: 'Pathways: local further-study routes, vocational links, open-source communities, responsible-AI careers.', hook: '<span class="swap">⟨Local study &amp; career routes⟩</span>' },
        { n: 34, name: 'Graduation & Handover', strands: ['S1','S2','S3','S4','S5'], act: 'Crew Chiefs induct the next cohort; project artifacts enter the community archive.', hook: 'Artifacts join the <span class="swap">⟨community archive⟩</span>' },
      ]},
    ],
    code: {
      title: 'THE CREW CODE.',
      intro: 'Six commitments, taught, debated, and personally signed. This is what makes you an apprentice practitioner — not a passenger.',
      sideTitle: 'MY COMMITMENTS', sideNote: 'Acknowledge all 6 and sign. The Crew Code is a condition of every licence above Learner\'s Permit — and it\'s revocable.',
      sign: 'I have debated, understood, and signed the Crew Code.',
      rules: [
        { b: 'Disclose', p: 'I say when and how I used AI, always.' },
        { b: 'Verify', p: 'AI output is a draft or a claim, never a source. I check against people, primary sources, and my own reasoning.' },
        { b: 'Protect', p: 'My data, my family\'s data, my community\'s data. I never feed private or culturally-sensitive material to external systems without consent.' },
        { b: 'Own it', p: 'The work, the errors, and the consequences are mine — not the tool\'s.' },
        { b: 'People, not chatbots', p: 'AI is not a therapist, confidant, or friend. For personal struggles I go to people — my named human support channels.' },
        { b: 'Build for someone', p: 'Technology is judged by who it helps and who it burdens — here, in our community.' },
      ],
    },
    badges: {
      note: 'Five rungs from data handler to project leader. Evidence beats polish: prompt logs, error reports, and audits are gold.',
      ladder: [
        { name: 'Fueler', how: 'Collect, label, and question a real dataset (data).', s: 'earned' },
        { name: 'Mechanic', how: 'Train, test, and break a model; explain how it learns (models).', s: 'current' },
        { name: 'Inspector', how: 'Complete a bias hunt or hallucination error report (audit).', s: 'locked' },
        { name: 'Navigator', how: 'Pass the Data Ethics Gate and defend an ethics decision (ethics).', s: 'locked' },
        { name: 'Crew Chief', how: 'Lead a client capstone; mentor Junior Cadets; public defense.', s: 'locked' },
      ],
      portfolio: { title: 'MY PORTFOLIO', sub: 'Process evidence — valued over polished output on every assessment.', items: [
        { b: 'Prompt logs', s: 'Every iteration, with what changed and why', n: 42 },
        { b: 'Error reports', s: 'Published Hallucination Lab findings, elder-verified', n: 3 },
        { b: 'Red-team findings', s: 'Bias, privacy, and failure attacks on projects', n: 0 },
        { b: 'Project cards', s: 'Intended use, limits, data provenance, failure modes', n: 1 },
      ]},
    },
    traffic: {
      title: 'TRAFFIC LIGHT<br/>DATA CHECK.',
      intro: 'Your Yellow Licence rides on this: sessions are logged, and private data or undisclosed schoolwork use is a licence matter. Scan before you send.',
      verdicts: {
        idle: { lbl: 'SCAN IT', act: 'Type or paste your prompt. The signal updates as you write — a quick check before you send.' },
        green: { lbl: 'GREEN · GO', act: 'Safe — general knowledge or study help with no personal data. Go ahead, then verify the output.' },
        amber: { lbl: 'AMBER · CHECK', act: 'Personal details detected. Anonymise, minimise, or check with an adult before you send.' },
        red: { lbl: 'RED · STOP', act: 'Private info, or asking AI to do your work for you. That breaches the Crew Code and your Integrity Charter. Rethink the task.' },
      },
      examples: {
        green: 'Explain how photosynthesis works in simple terms, with one diagram idea I could draw for my biology homework.',
        amber: 'My name is Sam Rivera and I\'m in Year 9 at Westbrook Academy. Help me plan a presentation about my town.',
        red: 'Write my full History essay on World War 2 so I can hand it in as my own. Here is my login: sam_r / pass1234.',
      },
      rules: [
        { c: 'green', h: '● GREEN · GO', p: 'Safe in the school-managed environment.', items: ['General knowledge & "explain this"', 'Study help & brainstorming', 'Drafting you\'ll verify and disclose'], action: 'Go ahead — then verify and disclose.' },
        { c: 'amber', h: '● AMBER · CHECK', p: 'Has personal details.', items: ['Your name, age, year group', 'Your school or town', 'Names of friends / family'], action: 'Anonymise — data minimization first.' },
        { c: 'red', h: '● RED · STOP', p: 'Private, community-sensitive, or dishonest.', items: ['Addresses, phones, passwords, IDs', 'Community data without consent', '"Do my work so I can submit it"'], action: 'Don\'t send. Crew Code rules 1–4 apply.' },
      ],
    },
    glossary: {
      title: 'GLOSSARY.',
      intro: 'The vocabulary of a working practitioner — datasets, audits, gates, and governance.',
      terms: [
        { term: 'LLM', sub: 'Large Language Model', def: 'The tech behind chatbots: trained on huge text corpora, it predicts the next token. Powerful — and confidently wrong. Hence the Hallucination Lab.', tags: ['core'] },
        { term: 'Training Data', def: 'The fuel. Its quality, gaps, and biases shape everything the model does — including how badly it serves your language.', tags: ['core'] },
        { term: 'Hallucination', def: 'AI stating something false as fact. It isn\'t lying — it\'s predicting likely text. You published an error report; you know.', tags: ['safety'] },
        { term: 'Bias', def: 'Systematically unfair output from unbalanced data — wrong dress, wrong streets, missing people. Measurable. Hunt it.', tags: ['safety'] },
        { term: 'Bias Audit', def: 'A structured hunt: generate, count, compare against reality (e.g. heritage-center photos), report. A Blue Licence gate.', tags: ['safety'] },
        { term: 'Deepfake', def: 'Synthetic image, audio, or video that looks real. Detection: source-check, reverse-search, cross-confirm.', tags: ['safety'] },
        { term: 'Appropriate Reliance', def: 'The core skill: knowing when to trust AI, when to verify, and when to refuse to use it at all.', tags: ['core'] },
        { term: 'Disclosure', def: 'Saying when and how you used AI — mandatory on all assessed work. Crew Code rule 1.', tags: ['safety'] },
        { term: 'Data Minimization', def: 'Collect only what you need, keep it only as long as needed. Practiced by fixing a leaky mock dataset.', tags: ['privacy'] },
        { term: 'Consent', def: 'Permission, informed and revocable — required before gathering any community member\'s data. See Data Ethics Gate.', tags: ['privacy'] },
        { term: 'Data Ethics Gate', def: 'Consent forms + minimization plan + community review sign-off, BEFORE any data is gathered. No gate, no build.', tags: ['privacy'] },
        { term: 'Model Card', def: 'A project\'s honest label: intended use, limits, data provenance, known failure modes. You ship one with every build.', tags: ['core'] },
        { term: 'Red-Teaming', def: 'Attacking a system on purpose — bias, privacy, failure, misuse — to find weaknesses before the world does.', tags: ['safety'] },
        { term: 'Recommender System', def: 'An algorithm choosing what you see next, optimizing engagement — not your wellbeing. You simulated one with cards.', tags: ['core'] },
        { term: 'Human-in-the-Loop', def: 'A workflow where a person reviews and decides at the critical step. Build option (c) in the sprint ladder.', tags: ['core'] },
        { term: 'PII', sub: 'Personal Information', def: 'Anything that identifies a person: name, address, phone, ID numbers, photos. Never into external systems without consent.', tags: ['privacy'] },
      ],
    },
    qref: {
      title: 'ROAD CREW · QUICK CARD', meta: 'ROAD CREW · AGES 12–16 · YELLOW LICENCE',
      boxes: [
        { c: 'green', h: '● TRAFFIC LIGHT', type: 'ul', items: ['<b>Green</b> · public/study → go, then verify', '<b>Amber</b> · personal → anonymise / ask', '<b>Red</b> · private or dishonest → STOP'] },
        { c: 'yellow', h: '● THE CREW CODE', type: 'ol', items: ['Disclose — always say when AI helped', 'Verify — a claim, never a source', 'Protect — mine, my family\'s, my community\'s data', 'Own it — work, errors, consequences', 'People, not chatbots, for personal struggles', 'Build for someone'] },
        { c: 'red', h: '● LICENCE MATTERS', type: 'ul', items: ['Undisclosed AI use in assessed work', 'Personal or community data without consent', 'Companion / persona chatbot use', 'Skipping the Data Ethics Gate'] },
        { c: '', h: '● MY LICENCE PATH', type: 'ul', items: ['<b>Yellow</b> · logged group sessions ✓', '<b>Blue</b> · 14+, individual tools — gate: bias audit + charter + consent', '<b>Crew Chief</b> · lead a client capstone'] },
        { c: 'dark', h: '● BEFORE YOU TRUST', type: 'ol', items: ['Who made this and why?', 'Does a primary source confirm it?', 'Reverse-search the image', 'Would an elder / archive agree?'] },
        { c: 'amber', h: '● GO TO A PERSON FOR…', type: 'ul', items: ['Personal struggles — counselor, mentor, helpline', 'Money, safety, or health decisions', 'Anything you can\'t verify', 'Consent questions about others\' data'] },
      ],
      foot: 'AIDL Juniors · Road Crew · Disclose. Verify. Build for someone.',
    },
  },
};

/* ================================================= STATE */
let CURRENT = 'cadet';
function T() { return TIERS[CURRENT]; }
function chip(s) { return `<span class="strand-chip ${s}">${s}</span>`; }

/* ================================================= DASHBOARD */
function renderDashboard() {
  const t = T(), d = t.dash;
  const lic = LADDER[t.licenceIdx];
  const stamps = LADDER.map((l, i) => `<span class="lic-stamp" style="${i < t.licenceIdx ? 'background:var(--signal-green);' : i === t.licenceIdx ? 'background:var(--sign-yellow);' : 'opacity:.5;'}">${l.name}${i < t.licenceIdx ? ' ✓' : i === t.licenceIdx ? ' · held' : ''}</span>`).join('');
  const upnext = t.upnext.map(u => `
    <div class="upnext-item">
      <div class="day"><b>${u.d}</b><small>${u.m}</small></div>
      <div class="what"><b>${u.t}</b><small>${u.s}</small></div>
      ${u.href ? `<a class="btn ${u.btn}" href="${u.href}">${u.cta}</a>` : `<a class="btn ${u.btn}" href="#" onclick="goView('${u.view}'); return false;">${u.cta}</a>`}
    </div>`).join('');
  const stats = t.stats.map(s => `<div class="stat ${s.cls || ''}"><div class="k">${s.k}</div><div class="v">${s.v}</div><div class="delta">${s.d}</div></div>`).join('');
  const pct = 100 / (t.route.length - 1);
  const route = t.route.map((r, i) => `<div class="stop ${r.s}" style="left: ${(i * pct * 0.84 + 8).toFixed(1)}%;">${r.n}<span class="lbl">${r.lbl}</span><span class="sub">${r.sub}</span></div>`).join('');
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
        <a class="btn btn-yellow" href="${t.nextLessonHref}">Play Next Lesson →</a>
        <a class="btn btn-${t.color === 'green' ? 'green' : 'sky'}" href="#" onclick="goView('route'); return false;">Route Map →</a>
      </div>
    </div>
    <div class="dash-grid">
      <div class="license-card">
        <div class="lic-head"><span><b>${lic.name.toUpperCase()}</b> · ${t.label.toUpperCase()}</span><span>${t.identity}</span></div>
        <div class="lic-body">
          <div class="lic-portrait"><div class="agent"><div class="antenna"></div><div class="head"></div><div class="body"></div><div class="a-badge"></div></div></div>
          <div class="lic-info">
            <div class="name">${t.learner.toUpperCase()}</div>
            AGES ${t.age} TRACK<br/>
            GROWN-UP · ${t.grownup}<br/>
            RENEWS · ${t.renewal} · REVOCABLE<br/>
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
        <span class="tag live">MODULE ${t.currentModule} OF ${t.totalModules}</span>
      </div>
      <p style="color: var(--cream-3); margin: 0; font-size: 13px;">Four semesters, one spiral: ${t.coreQ}</p>
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
            <a class="btn" href="#" onclick="goView('code'); return false;">Read the Code</a>
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
          <a class="btn btn-yellow" style="margin-top: 14px;" href="#" onclick="goView('badges'); return false;">My Badges &amp; Portfolio →</a>
        </div>
      </div>
    </div>`;
}

/* ================================================= ROUTE MAP (curriculum) */
let semIdx = 1;
function renderRoute() {
  const t = T();
  semIdx = Math.min(semIdx, t.semesters.length - 1);
  const curSemOfLearner = t.route.findIndex(r => r.s === 'current');
  const tabs = t.semesters.map((s, i) => `
    <div class="section-tab ${i === semIdx ? 'active' : ''} ${i < curSemOfLearner ? 'done' : ''}" data-sec="${i}">${s.name}<small>${s.theme}</small></div>`).join('');
  const sem = t.semesters[semIdx];
  const modNum = m => typeof m.n === 'number' ? m.n : parseInt(m.n);
  const rows = sem.mods.map(m => {
    const first = modNum(m);
    const state = first < t.currentModule ? 'done' : first === t.currentModule ? 'current' : 'locked';
    const gateHtml = (sem.gate && modNum(m) === sem.gate.after + 1) ? `
      <div class="gate-banner"><div class="g-ico">GATE</div><div><b>${sem.gate.name}</b>${sem.gate.text}</div></div>` : '';
    return gateHtml + `
      <div class="mod-row ${state}">
        <div class="mod-num">${m.n}</div>
        <div class="mod-name"><div class="chips">${m.strands.map(chip).join('')}</div><b>${m.name}</b><span class="status">${state === 'done' ? '✓ Complete' : state === 'current' ? '▶ You are here' : 'Up ahead'}</span></div>
        <div class="mod-act">${m.act}</div>
        <div class="mod-hook"><span class="hk">⟨ ⟩ Localization swap point</span>${m.hook}</div>
      </div>`;
  }).join('');
  document.getElementById('view-route').innerHTML = `
    <div class="head">
      <div>
        <span class="eyebrow">▼ ${t.label.toUpperCase()} · 4 SEMESTERS · ${t.totalModules} MODULES</span>
        <h1>THE ROUTE MAP.</h1>
        <p>Your full journey, ${t.identity.toLowerCase()}. Every module has fixed parts — the concept, the outcome, the safety rule — and <b>⟨swap points⟩</b> that get repainted for your town. ~70% chassis, ~30% local.</p>
      </div>
      <a class="btn btn-yellow" href="${t.nextLessonHref}">Play Current Module →</a>
    </div>
    <div class="section-tabs" id="semTabs">${tabs}</div>
    <div class="card">
      <div class="card-head"><h3>${sem.name.toUpperCase()} · "${sem.theme.toUpperCase()}"</h3><span class="tag">${sem.stage.toUpperCase()}</span></div>
      ${rows}
    </div>`;
  document.querySelectorAll('#semTabs .section-tab').forEach(el => el.addEventListener('click', () => { semIdx = +el.dataset.sec; renderRoute(); }));
}

/* ================================================= LANES (strands) */
function renderLanes() {
  const t = T();
  const rows = STRANDS.map(s => `
    <div class="lane-row">
      <div class="lane-badge" style="background: var(--${s.id.toLowerCase()});${s.id === 'S5' ? ' color: var(--cream);' : ''}">${s.id}</div>
      <div class="lane-meta"><small>${s.big}</small><b>${s.name}</b><p>${CURRENT === 'cadet' ? s.cadet : s.crew}</p></div>
      <div class="lane-mods"><span class="hk">In the other track</span>${CURRENT === 'cadet' ? '<b>Road Crew:</b> ' + s.crew : '<b>Junior Cadet:</b> ' + s.cadet}</div>
    </div>`).join('');
  const mine = CURRENT === 'cadet' ? [0, 1] : [2, 3];
  const spiral = SPIRAL.map((s, i) => `
    <div class="spiral-step ${mine.includes(i) ? 'mine' : ''}"><div class="age">${s.age}${mine.includes(i) ? ' · YOUR TRACK' : ''}</div><b>${s.name}</b><p>${s.p}</p></div>`).join('');
  document.getElementById('view-lanes').innerHTML = `
    <div class="head">
      <div>
        <span class="eyebrow">▼ FIVE STRANDS · EVERY MODULE TAGGED</span>
        <h1>THE FIVE LANES.</h1>
        <p>Every module you play drives in one or more of these lanes. You revisit each lane every year with rising sophistication — that's the spiral.</p>
      </div>
    </div>
    <div class="card">${rows}</div>
    <div class="spiral">
      <div class="card-head" style="margin-bottom:4px;"><h3 style="color:var(--cream);">THE SPIRAL</h3><span class="tag">SAME LANES, RISING SKILL</span></div>
      <p style="color:var(--cream-3); margin:0; font-size:13px;">Concepts spiral: each strand is visited every year, deeper each time.</p>
      <div class="spiral-steps">${spiral}</div>
    </div>`;
}

/* ================================================= LICENCE LADDER */
function renderLadder() {
  const t = T();
  const rows = LADDER.map((l, i) => {
    const state = i < t.licenceIdx ? 'held' : i === t.licenceIdx ? 'current' : 'locked';
    const lbl = state === 'held' ? 'HELD ✓' : state === 'current' ? 'CURRENT' : 'LOCKED';
    return `
    <div class="ladder-row ${state}">
      <div class="lic-plate" style="background: ${l.color};${l.name === 'Crew Chief' ? ' color: var(--cream);' : ''}">${l.name.toUpperCase()}</div>
      <div class="ladder-meta"><small>${l.who}</small><b>${l.name}</b><p>${l.unlocks}</p></div>
      <div class="ladder-gate"><span class="hk">Gate — must demonstrate</span>${l.gate}</div>
      <div class="ladder-state ${state}">${lbl}</div>
    </div>`;
  }).join('');
  document.getElementById('view-ladder').innerHTML = `
    <div class="head">
      <div>
        <span class="eyebrow">▼ EARNED · VISIBLE · REVOCABLE</span>
        <h1>THE LICENCE LADDER.</h1>
        <p>Tool access is earned like a driving licence — and it can be taken away. One global rule with no exceptions: access always follows <b>both</b> this ladder <b>and</b> local law &amp; platform age terms. Where direct access isn't lawful, teacher-driven demo mode delivers every outcome.</p>
      </div>
    </div>
    <div class="ladder">${rows}</div>
    <div class="gate-banner" style="margin-top:8px;"><div class="g-ico">RAIL</div><div><b>${CURRENT === 'cadet' ? 'CADET SAFETY RAILS — HARD REQUIREMENTS' : 'CREW SAFETY RAILS — HARD REQUIREMENTS'}</b>${CURRENT === 'cadet'
      ? 'No unsupervised chatbot access, ever. No accounts in children\'s names. No photos, voices, names, or locations uploaded to any AI. Standing Stop &amp; Tell protocol with a named safeguarding adult.'
      : 'Generative AI only via school-managed, filtered, logged environments until Blue Licence. Companion-style and emotional-support AI are out of scope — with named human alternatives. Disclosure mandatory on all assessed work. No community data without the Data Ethics Gate.'}</div></div>`;
}

/* ================================================= CODE (sign-off) */
function renderCode() {
  const t = T();
  const total = t.code.rules.length;
  document.getElementById('codeHead').innerHTML = `
    <div>
      <span class="eyebrow">▼ ${t.label.toUpperCase()} · ${total} ${CURRENT === 'cadet' ? 'GOLDEN RULES' : 'COMMITMENTS'}</span>
      <h1>${t.code.title}</h1>
      <p>${t.code.intro}</p>
    </div>`;
  document.getElementById('aupList').innerHTML = t.code.rules.map((r, i) => `
    <div class="aup-rule" data-rule="${i}">
      <div class="aup-num">${i + 1}</div>
      <div class="aup-body"><b>${r.b}</b><p>${r.p}</p></div>
      <div class="aup-ack">${CURRENT === 'cadet' ? 'PROMISE' : 'AGREE'}</div>
    </div>`).join('');
  document.getElementById('aupSide').innerHTML = `
    <div class="aup-progress">
      <div class="card-head"><h3 style="color:var(--cream);">${t.code.sideTitle}</h3><span class="tag">AGES ${t.age}</span></div>
      <div class="big" id="ackBig">0 / ${total}</div>
      <div class="of">${CURRENT === 'cadet' ? 'promises made' : 'commitments signed'}</div>
      <div class="pbar"><i id="ackBar" style="width: 0%;"></i></div>
      <p style="margin: 14px 0 0; font-size: 12px; color: var(--cream-3); line-height:1.5;">${t.code.sideNote}</p>
    </div>
    <div class="signature">
      <h5>SIGN HERE</h5>
      <p style="margin:0; font-size: 12px; color: var(--muted);">${t.code.sign}</p>
      <div class="sig-line"><div class="lbl">My Name</div><input value="${t.learner}" /></div>
      <div class="sig-line"><div class="lbl">Signature</div><div class="sig">${t.learner}</div></div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div class="sig-line"><div class="lbl">Date</div><input value="17 Jul 2026" /></div>
        <div class="sig-line"><div class="lbl">Guardian</div><input value="${t.grownup}" /></div>
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
      const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][now.getMonth()];
      r.querySelector('.aup-ack').innerHTML = 'DONE ✓<span class="when">' + dd + ' ' + month + '</span>';
      updateAck();
    });
  });
  document.getElementById('aupSubmit').addEventListener('click', () => {
    const acked = document.querySelectorAll('#aupList .aup-rule.ack').length;
    if (acked < total) alert('Tick all ' + total + ' first! You have ' + acked + ' / ' + total + '.');
    else alert('Signed! The ' + (CURRENT === 'cadet' ? 'Cadet' : 'Crew') + ' Code is on your record. Drive well!');
  });
  updateAck();
}

/* ================================================= BADGES */
function renderBadges() {
  const t = T(), b = t.badges;
  const ladder = b.ladder.map(x => `
    <div class="badge-card ${x.s}">
      <div class="badge-shape">${x.name.split(' ')[0].toUpperCase()}</div>
      <b>${x.name}</b>
      <p>${x.how}</p>
      <span class="state">${x.s === 'earned' ? 'EARNED ✓' : x.s === 'current' ? 'IN PROGRESS' : 'LOCKED'}</span>
    </div>`).join('');
  const pf = b.portfolio.items.map(i => `
    <div class="pf-item">
      <div class="pf-ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14140f" stroke-width="2.5"><path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5"/></svg></div>
      <div><b>${i.b}</b><small>${i.s}</small></div>
      <div class="n">${i.n}</div>
    </div>`).join('');
  document.getElementById('view-badges').innerHTML = `
    <div class="head">
      <div>
        <span class="eyebrow">▼ PROCESS OVER POLISH</span>
        <h1>BADGES &amp; PORTFOLIO.</h1>
        <p>${b.note} We assess judgment and transfer — not tool output.</p>
      </div>
    </div>
    <div class="badge-ladder">${ladder}</div>
    <div class="portfolio">
      <div class="card">
        <div class="card-head"><h3>${b.portfolio.title}</h3><span class="tag">${b.portfolio.items.reduce((a, i) => a + i.n, 0)} ITEMS</span></div>
        <p style="color:var(--muted); font-size:13px; margin: 0 0 16px;">${b.portfolio.sub}</p>
        <div class="pf-grid">${pf}</div>
      </div>
    </div>`;
}

/* ================================================= TRAFFIC LIGHT */
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
      <span class="eyebrow">▼ ${CURRENT === 'cadet' ? 'GREEN LICENCE GATE PRACTICE' : 'YELLOW LICENCE · LOGGED SESSIONS'}</span>
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
  document.querySelectorAll('#tlPre button').forEach(b => b.addEventListener('click', () => {
    const eg = b.dataset.eg;
    document.getElementById('tlInput').value = eg === 'clear' ? '' : t.traffic.examples[eg];
    renderTL(document.getElementById('tlInput').value);
  }));
  renderTL(document.getElementById('tlInput').value);
}

/* ================================================= GLOSSARY */
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

/* ================================================= QUICK REF */
function renderQref() {
  const t = T(), q = t.qref;
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
      <div class="qref-foot"><span>${q.foot}</span><span>You've got this.</span></div>
    </div>`;
}

/* ================================================= TIER + VIEW SWITCHING */
const VIEWS = ['dashboard', 'route', 'lanes', 'ladder', 'code', 'badges', 'traffic', 'glossary', 'qref'];
const CRUMB = { dashboard: 'Dashboard', route: 'Route Map', lanes: 'The Five Lanes', ladder: 'Licence Ladder', code: 'The Code', badges: 'Badges & Portfolio', traffic: 'Traffic Light Check', glossary: 'Glossary', qref: 'Quick Reference' };

function goView(v) {
  VIEWS.forEach(x => document.getElementById('view-' + x).classList.toggle('active', x === v));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === v));
  document.getElementById('crumbHere').textContent = CRUMB[v];
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function applyTier(key) {
  CURRENT = key;
  const t = T();
  document.body.className = 'tier-' + key;
  document.querySelectorAll('.tier-toggle button').forEach(b => b.classList.toggle('active', b.dataset.tier === key));
  document.getElementById('sideName').textContent = t.learner.toUpperCase();
  document.getElementById('sideId').textContent = t.licId;
  document.getElementById('sideClass').textContent = t.cls;
  document.getElementById('sideMeter').style.width = Math.round(t.doneThrough / t.totalModules * 100) + '%';
  document.getElementById('sideProg').textContent = 'M' + t.currentModule + ' of ' + t.totalModules;
  document.getElementById('avInit').textContent = t.initials;
  document.getElementById('avName').textContent = t.learner;
  document.getElementById('avRole').textContent = t.label.toUpperCase();
  document.getElementById('navCode').textContent = key === 'cadet' ? 'The Cadet Code' : 'The Crew Code';
  try { localStorage.setItem('aidl-junior-tier', key); } catch (e) {}
  semIdx = t.route.findIndex(r => r.s === 'current');
  renderDashboard();
  renderRoute();
  renderLanes();
  renderLadder();
  renderCode();
  renderBadges();
  renderTrafficShell();
  renderGlossary();
  renderQref();
}

/* ================================================= INIT */
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
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initPortal);
else initPortal();
