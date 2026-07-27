// ============================================================
// AIDL Juniors — CADET LESSON PACK · Class J · Ages 8–12
// Six lessons, one per route stop. Instructor: BUDDY.
// Registered on window.AIDL_JR_LESSONS (see junior-lessons.js).
// ============================================================

// ------------------------------------------------------------
// J-01 · MEET YOUR AI BUDDY
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['J-01'] = {
  id: 'J-01', level: 'J', next: 'J-02',
  title: 'J-01 · Meet Your AI Buddy',
  titleTop: 'J-01 · MEET YOUR AI BUDDY',
  sub: 'JUNIOR CADET · AGES 8–12 · WEEK 1 · 40 MIN · EARN 2 STARS',
  duration: 2400,
  instructor: 'BUDDY',
  instructorRole: 'YOUR AI BUDDY · CLASS J · CADET',
  starGoal: 2,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 300,
      title: 'HELLO · WELCOME ABOARD',
      eyebrow: 'STOP 01 · HELLO',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: 'HI!' },
        heading: 'Welcome to driving school!',
        sub: 'your very first lesson · a grown-up nearby is great',
        paragraphs: [
          'Hi! I\'m <strong>Buddy</strong>, your AI helper. This is your very first lesson — today we find out <strong>what AI actually is</strong>.',
          'AI stands for <strong>Artificial Intelligence</strong>. It\'s a clever computer program that can chat, answer questions, and help you make things. It learned by looking at <strong>LOTS and LOTS of examples</strong>.',
        ],
        examples: {
          title: 'What we\'ll do today',
          items: [
            { kind: 'good', text: 'Find out what AI is (and what it isn\'t!)' },
            { kind: 'good', text: 'Learn what AI is great at — and terrible at' },
            { kind: 'good', text: 'Play the Can-AI-Do-It sorting game' },
          ]
        },
        callout: { title: 'No rush!', body: 'The road at the bottom shows where you are. You can drive back anytime to hear something again. Ready? Let\'s roll!' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 300, end: 780,
      title: 'WHAT AI IS GREAT AT',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'rect', glyph: 'CAN DO' },
        heading: 'A super helper for ideas',
        sub: 'stories · questions · brainstorms',
        paragraphs: [
          'AI is amazing at <strong>words and ideas</strong>. It can tell you how volcanoes work, help you write a funny story, or think up games to play.',
          'Think of it like a <strong>super-fast helper</strong> who has read millions of books — and loves to share.',
        ],
        examples: {
          title: 'Things AI is great at',
          items: [
            { kind: 'good', text: 'Explaining things ("why is the sky blue?")' },
            { kind: 'good', text: 'Story, joke, and drawing ideas' },
            { kind: 'good', text: 'Helping you practise spelling or maths' },
          ]
        },
        callout: { title: 'Buddy tip', body: 'The more you tell me about what you want, the better I can help. We\'ll practise that in Lesson 2!' }
      }
    },
    {
      idx: 3, kind: 'concept', start: 780, end: 1200,
      title: 'A COMPUTER, NOT A PERSON',
      eyebrow: 'STOP 03 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'triangle', glyph: 'NOT ALIVE' },
        heading: 'AI is not a person',
        sub: 'it can\'t feel, see you, or know secrets',
        paragraphs: [
          'Here\'s the big one: AI can <em>sound</em> friendly, but it is <strong>a computer program, not a person</strong>. It doesn\'t have feelings, it can\'t see you, and it only knows what you type to it.',
          'And sometimes it <strong>makes things up</strong> that sound real but aren\'t! That\'s why we always <strong>check with a grown-up or a book</strong>.',
        ],
        examples: {
          title: 'Things AI CANNOT do',
          items: [
            { kind: 'bad', text: 'Feel happy, sad, or love you back' },
            { kind: 'bad', text: 'Know where you live (unless you tell it — don\'t!)' },
            { kind: 'bad', text: 'Always be right — it can make-believe' },
          ]
        },
        callout: { title: 'Remember', body: 'If an AI says something weird, scary, or wrong — stop and tell a grown-up. You\'re never in trouble for asking.', icRed: true, icIcon: '!' }
      }
    },
    {
      idx: 4, kind: 'quiz', start: 1200, end: 1560,
      title: 'QUICK CHECK · TRUE OR NOT?',
      eyebrow: 'STOP 04 · QUICK CHECK',
      body: {
        template: 'jrquiz',
        question: 'Which one of these is <strong>TRUE</strong> about your AI buddy?',
        options: [
          { letter: 'A', text: 'It\'s a real person typing really fast.', right: false },
          { letter: 'B', text: 'It\'s a computer program that learned from lots of examples.', right: true },
          { letter: 'C', text: 'It knows everything and is always right.', right: false },
          { letter: 'D', text: 'It can see you through the screen.', right: false },
        ],
        rightFeedback: 'Yes! ⭐ AI is a <b>computer program</b> that learned from millions of examples. It\'s clever with words — but it\'s not a person, it can\'t see you, and it\'s not always right.',
        wrongFeedback: 'Not quite! AI can <i>sound</i> like a person, but it\'s a computer program that learned from lots of examples. It can\'t see you — and it\'s definitely not always right!',
      }
    },
    {
      idx: 5, kind: 'jrsort', start: 1560, end: 2100,
      title: 'GAME · CAN AI DO IT?',
      eyebrow: 'STOP 05 · SORTING GAME',
      body: {
        template: 'jrsort',
        prompt: 'Tap each card to sort it. Which things CAN an AI do, and which can it NOT do?',
        greenLabel: 'AI CAN DO 🟢',
        redLabel: 'AI CANNOT DO 🔴',
        intro: 'GREEN = something AI can really do. RED = something AI cannot truly do.',
        items: [
          { text: 'Write a silly poem about socks', answer: 'green' },
          { text: 'Give you a real hug', answer: 'red' },
          { text: 'Explain how rainbows work', answer: 'green' },
          { text: 'Know your secrets without being told', answer: 'red' },
          { text: 'Think up birthday party games', answer: 'green' },
          { text: 'Feel happy or sad for real', answer: 'red' },
          { text: 'Help you practise times tables', answer: 'green' },
          { text: 'Always tell the truth', answer: 'red' },
        ],
      }
    },
    {
      idx: 6, kind: 'reflect', start: 2100, end: 2400,
      title: 'SHOW & TELL · FIRST RIDE DONE!',
      eyebrow: 'STOP 06 · SHOW & TELL',
      body: {
        template: 'jrreflect',
        learned: 'That <b>AI is a clever computer program</b> — great at words and ideas, but it\'s <b>not a person</b>, can\'t feel, and can even make things up!',
        take: 'AI is a helper, not a friend who knows you. It only knows what you type — so keep private stuff private, and check facts with a grown-up.',
        next: '<b>J-02 · Ask It Nicely.</b> Learn the 3 Magic Words and write your very first prompt!',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Hi! I\'m Buddy 🤖 Welcome to your very first AI driving lesson!' },
    { t: 180,  kind: 'note', text: 'See the little car at the bottom? That\'s you. Drive back anytime.' },
    { t: 340,  kind: 'msg',  text: 'AI is great at words and ideas — stories, questions, brainstorms.' },
    { t: 820,  kind: 'warn', text: 'Big one: I\'m a computer program, not a person. I can\'t see you or feel things.' },
    { t: 1040, kind: 'warn', text: 'And I can make things up sometimes! Always check with a grown-up or a book.' },
    { t: 1240, kind: 'msg',  text: 'Quick check time! Read all four before you tap one.' },
    { t: 1600, kind: 'msg',  text: 'Sorting game! Tap a card, then tap GREEN (AI can) or RED (AI can\'t).' },
    { t: 2140, kind: 'msg',  text: 'First lesson done — amazing driving! 🖐️ Next stop: Ask It Nicely.' },
  ]
};

// ------------------------------------------------------------
// J-02 · ASK IT NICELY: YOUR FIRST PROMPTS
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['J-02'] = {
  id: 'J-02', level: 'J', next: 'J-03',
  title: 'J-02 · Ask It Nicely: Your First Prompts',
  titleTop: 'J-02 · ASK IT NICELY',
  sub: 'JUNIOR CADET · AGES 8–12 · WEEK 2 · 45 MIN · EARN 3 STARS',
  duration: 2700,
  instructor: 'BUDDY',
  instructorRole: 'YOUR AI BUDDY · CLASS J · CADET',
  starGoal: 3,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 300,
      title: 'HELLO · READY TO ASK?',
      eyebrow: 'STOP 01 · HELLO',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: 'GO' },
        heading: 'Ready for your second ride?',
        sub: 'buckle up · this is going to be fun',
        paragraphs: [
          'Welcome back! Today you\'ll learn how to <strong>ask an AI for things the right way</strong> — we call it a <strong>prompt</strong>.',
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
      body: {
        template: 'jrreflect',
        learned: 'That a <b>prompt</b> is just your ask — and the 3 Magic Words to make it great: <b>CLEAR, KIND, SAFE</b>. You even built your own!',
        take: 'Before every ask, whisper the 3 Magic Words: <b>Clear, Kind, Safe</b>. And if an answer feels weird — tell a grown-up. Always OK to ask!',
        next: '<b>J-03 · Maker Lane.</b> Make things with your AI buddy — a quiz game, stories, and more!',
      }
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
    { t: 2620, kind: 'msg',  text: 'Lesson done! Next stop: J-03 · Maker Lane — build a quiz game with me.' },
  ]
};

// ------------------------------------------------------------
// J-03 · MAKER LANE: MAKE THINGS WITH AI
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['J-03'] = {
  id: 'J-03', level: 'J', next: 'J-04',
  title: 'J-03 · Maker Lane: Make Things With AI',
  titleTop: 'J-03 · MAKER LANE',
  sub: 'JUNIOR CADET · AGES 8–12 · WEEK 3 · 40 MIN · EARN 2 STARS',
  duration: 2400,
  instructor: 'BUDDY',
  instructorRole: 'YOUR AI BUDDY · CLASS J · CADET',
  starGoal: 2,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 300,
      title: 'WELCOME · TO MAKER LANE',
      eyebrow: 'STOP 01 · HELLO',
      body: {
        template: 'jrconcept',
        sign: { kind: 'rect', glyph: 'MAKER LANE →' },
        heading: 'Today, we make stuff!',
        sub: 'stories · games · ideas — with you in charge',
        paragraphs: [
          'You know what a prompt is. Now let\'s use prompts to <strong>MAKE things</strong> — stories, jokes, quiz games, ideas for drawings.',
          'Here\'s the secret of Maker Lane: <strong>the AI helps, but YOU are the maker</strong>. Your ideas, your choices, your creation.',
        ],
        examples: {
          title: 'Things kids make with AI',
          items: [
            { kind: 'good', text: 'A quiz game about animals for your family' },
            { kind: 'good', text: 'A comic story starring your pet' },
            { kind: 'good', text: 'Ideas for what to draw or build next' },
          ]
        },
        callout: { title: 'You\'re the boss', body: 'I give ideas and drafts. You pick, change, and make it yours. That\'s real making!' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 300, end: 780,
      title: 'YOU\'RE THE BOSS',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: 'BOSS' },
        heading: 'AI drafts, you decide',
        sub: 'your brain first, then the helper',
        paragraphs: [
          'Great makers <strong>think first</strong>. Before you ask the AI, decide: what am I making? Who is it for? What should it feel like — funny, spooky, exciting?',
          'Then the AI gives you a <strong>first draft</strong> — and you make it better. Change words. Add your ideas. If your teacher asks "did you make this?", you want to say <strong>"YES, with a little help!"</strong>',
        ],
        examples: {
          title: 'Boss moves',
          items: [
            { kind: 'good', text: 'Decide your idea BEFORE you ask' },
            { kind: 'good', text: 'Change the AI\'s words to sound like YOU' },
            { kind: 'bad', text: 'Copy everything without reading it' },
          ]
        },
        callout: { title: 'Own your work', body: 'Doing your own thinking is one of your Golden Rules. AI is your helper — not your homework machine!' }
      }
    },
    {
      idx: 3, kind: 'concept', start: 780, end: 1200,
      title: 'THE TRY-AGAIN TRICK',
      eyebrow: 'STOP 03 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'triangle', glyph: 'TRY AGAIN' },
        heading: 'First try boring? Ask again!',
        sub: 'makers never stop at draft one',
        paragraphs: [
          'Sometimes the AI\'s first answer is… kind of boring. That\'s normal! The trick is to <strong>ask again with more detail</strong>.',
          'Say what you want to change: <strong>"make it funnier"</strong>, <strong>"add a talking dog"</strong>, <strong>"make it shorter"</strong>. Every ask makes it more YOURS.',
        ],
        examples: {
          title: 'Try-again asks',
          items: [
            { kind: 'bad', text: '(first story is boring) …give up' },
            { kind: 'good', text: '"Make it sillier and add a sneezing dragon."' },
            { kind: 'good', text: '"Give me 3 different endings so I can pick."' },
          ]
        },
        callout: { title: 'Buddy tip', body: 'Asking again isn\'t failing — it\'s what pro makers do. I never get tired of trying again!' }
      }
    },
    {
      idx: 4, kind: 'quiz', start: 1200, end: 1560,
      title: 'QUICK CHECK · BE THE BOSS',
      eyebrow: 'STOP 04 · QUICK CHECK',
      body: {
        template: 'jrquiz',
        question: 'The AI wrote you a story, but it\'s a bit <strong>boring</strong>. What\'s the best maker move?',
        options: [
          { letter: 'A', text: 'Give up — AI is bad at stories.', right: false },
          { letter: 'B', text: 'Use the boring story anyway.', right: false },
          { letter: 'C', text: 'Ask again with details: "Make it funnier and add a talking cat."', right: true },
          { letter: 'D', text: 'Ask a totally different question about dinosaurs.', right: false },
        ],
        rightFeedback: 'Yes! ⭐ That\'s the <b>Try-Again Trick</b>. Tell the AI exactly what to change — funnier, shorter, add a character — and the next draft gets better. You\'re the boss!',
        wrongFeedback: 'Hmm, a real maker doesn\'t give up or settle for boring! The best move is to <i>ask again with details</i> about what to change. That\'s the Try-Again Trick.',
      }
    },
    {
      idx: 5, kind: 'jrbuilder', start: 1560, end: 2100,
      title: 'MAKER LANE · BUILD YOUR GAME',
      eyebrow: 'STOP 05 · MAKER LANE',
      body: {
        template: 'jrbuilder',
        scenario: 'You\'re making an animal quiz game to play with your family. Get the AI to help you write 5 fun quiz questions.',
        fields: [
          { key: 'clear', letter: '1', name: 'CLEAR', hint: 'Say exactly what you want',
            ph: 'Write 5 fun quiz questions about ocean animals, for kids, with 3 answer choices each.' },
          { key: 'kind', letter: '2', name: 'KIND', hint: 'Ask nicely — be friendly',
            ph: 'Please make them silly and fun — nothing scary or mean.' },
          { key: 'safe', letter: '3', name: 'SAFE', hint: 'No private stuff',
            ph: 'Don\'t use my name or my family\'s names — just say "player 1" and "player 2".' },
        ],
      }
    },
    {
      idx: 6, kind: 'reflect', start: 2100, end: 2400,
      title: 'SHOW & TELL · MAKER BADGE!',
      eyebrow: 'STOP 06 · SHOW & TELL',
      body: {
        template: 'jrreflect',
        learned: 'How to <b>make things with AI</b>: think first, let AI draft, then use the <b>Try-Again Trick</b> to make it better and truly yours.',
        take: 'YOU are the maker — AI is the helper. Never copy without reading, and keep asking again until it sounds like you.',
        next: '<b>J-04 · Traffic Light.</b> Learn the green-amber-red check that keeps every ask safe.',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Welcome to Maker Lane! 🛠️ Today we MAKE things together.' },
    { t: 200,  kind: 'note', text: 'Remember: I help, but YOU are the maker. Your ideas come first.' },
    { t: 340,  kind: 'msg',  text: 'Boss move #1: decide what you\'re making BEFORE you ask me.' },
    { t: 640,  kind: 'warn', text: 'Never copy without reading. Change my words so they sound like YOU.' },
    { t: 820,  kind: 'msg',  text: 'The Try-Again Trick: "make it funnier", "add a talking dog", "shorter please!"' },
    { t: 1240, kind: 'msg',  text: 'Quick check! What does a real maker do with a boring first draft?' },
    { t: 1600, kind: 'msg',  text: 'Game time! Fill the 3 boxes to build your quiz-game ask.' },
    { t: 1920, kind: 'note', text: 'Stuck on SAFE? Just say what NOT to include — like real names.' },
    { t: 2140, kind: 'msg',  text: 'Maker badge earned! 🌟 Go play your quiz with your family tonight!' },
  ]
};

// ------------------------------------------------------------
// J-04 · TRAFFIC LIGHT: GREEN, AMBER, RED
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['J-04'] = {
  id: 'J-04', level: 'J', next: 'J-05',
  title: 'J-04 · Traffic Light: Green, Amber, Red',
  titleTop: 'J-04 · TRAFFIC LIGHT',
  sub: 'JUNIOR CADET · AGES 8–12 · WEEK 4 · 40 MIN · EARN 2 STARS',
  duration: 2400,
  instructor: 'BUDDY',
  instructorRole: 'YOUR AI BUDDY · CLASS J · CADET',
  starGoal: 2,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 300,
      title: 'WELCOME · CHECK THE LIGHTS',
      eyebrow: 'STOP 01 · HELLO',
      body: {
        template: 'jrconcept',
        sign: { kind: 'octagon', glyph: 'STOP' },
        heading: 'The Traffic Light Check',
        sub: 'one quick check before every ask',
        paragraphs: [
          'Real drivers check the lights before they go. AI drivers do too! Before you send anything to an AI, run the <strong>Traffic Light Check</strong>.',
          '<strong>GREEN</strong> — safe and fun, go ahead! <strong>AMBER</strong> — has personal bits, ask a grown-up first. <strong>RED</strong> — private info, STOP, never share.',
        ],
        examples: {
          title: 'The three lights',
          items: [
            { kind: 'good', text: 'GREEN · "How do volcanoes work?" → GO' },
            { kind: 'bad', text: 'AMBER · "My name is Riley and I\'m 10…" → ASK FIRST' },
            { kind: 'bad', text: 'RED · "I live at 14 Maple Street…" → STOP!' },
          ]
        },
        callout: { title: 'Why it matters', body: 'The AI remembers what you type. Private things — your name, home, school, passwords — belong with YOU, not in a computer.' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 300, end: 780,
      title: 'WHAT COUNTS AS PRIVATE?',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'rect', glyph: 'ONE WAY →' },
        heading: 'Your info goes one way',
        sub: 'it stays with you',
        paragraphs: [
          'Private info is <strong>anything that says who you are or where to find you</strong>: your full name, home address, phone number, school, passwords — and photos of you or your family.',
          'Easy rule: if a <strong>stranger at the park shouldn\'t know it</strong>, an AI shouldn\'t either!',
        ],
        examples: {
          title: 'Always private (RED)',
          items: [
            { kind: 'bad', text: 'Full name + home address' },
            { kind: 'bad', text: 'Phone numbers and passwords' },
            { kind: 'bad', text: 'Photos of you, your family, your house' },
          ]
        },
        callout: { title: 'The park test', body: 'Would you tell it to a stranger at the park? No? Then don\'t type it to an AI. Simple as that!', icRed: true, icIcon: '!' }
      }
    },
    {
      idx: 3, kind: 'concept', start: 780, end: 1200,
      title: 'AMBER · THE ASK-FIRST LIGHT',
      eyebrow: 'STOP 03 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'triangle', glyph: 'ASK FIRST' },
        heading: 'When in doubt — amber',
        sub: 'grown-ups are your co-pilots',
        paragraphs: [
          'Some things aren\'t secret-secret, but they\'re still <strong>about you</strong> — your first name, your age, your town, your teacher. Those are <strong>AMBER</strong>.',
          'Amber means: <strong>check with a grown-up before you send</strong>. They\'ll help you decide, or help you take the personal bits out.',
        ],
        examples: {
          title: 'Amber examples',
          items: [
            { kind: 'bad', text: '"I\'m 10 and go to Westbrook Primary…"' },
            { kind: 'good', text: 'Fix: "Make a poster for a class trip" — no names needed!' },
            { kind: 'good', text: 'Not sure which light? Treat it as AMBER and ask.' },
          ]
        },
        callout: { title: 'The magic fix', body: 'Most amber asks turn GREEN if you just take the personal bits out. You usually don\'t need them anyway!' }
      }
    },
    {
      idx: 4, kind: 'quiz', start: 1200, end: 1560,
      title: 'QUICK CHECK · WHICH LIGHT?',
      eyebrow: 'STOP 04 · QUICK CHECK',
      body: {
        template: 'jrquiz',
        question: 'Which of these asks should get a <strong>RED light</strong>?',
        options: [
          { letter: 'A', text: '"Tell me a joke about penguins."', right: false },
          { letter: 'B', text: '"My password is sunny123 — remember it for me."', right: true },
          { letter: 'C', text: '"How do bees make honey?"', right: false },
          { letter: 'D', text: '"Give me ideas for a birthday card."', right: false },
        ],
        rightFeedback: 'Yes! ⭐ Passwords are <b>always RED</b> — never type them to an AI, ever. The other three are GREEN: fun, safe questions with nothing private in them.',
        wrongFeedback: 'Look again! Three of these are safe GREEN questions. The RED one shares a <i>password</i> — and passwords never, ever go into an AI.',
      }
    },
    {
      idx: 5, kind: 'jrsort', start: 1560, end: 2100,
      title: 'GAME · GREEN OR RED?',
      eyebrow: 'STOP 05 · SAFETY STOP',
      body: {
        template: 'jrsort',
        prompt: 'Run the Traffic Light Check! Sort each ask into GREEN (go) or RED (stop).',
        greenLabel: 'GREEN · GO 🟢',
        redLabel: 'RED · STOP 🔴',
        intro: 'GREEN = safe to send. RED = private info — never share it.',
        items: [
          { text: '"How do volcanoes work?"', answer: 'green' },
          { text: '"My address is 14 Maple Street."', answer: 'red' },
          { text: '"Tell me a joke about penguins."', answer: 'green' },
          { text: '"My password is sunny123."', answer: 'red' },
          { text: '"Ideas for a birthday card for grandma."', answer: 'green' },
          { text: '"Here\'s a photo of my family."', answer: 'red' },
          { text: '"What\'s a fun science fact?"', answer: 'green' },
          { text: '"My full name is Riley Lee."', answer: 'red' },
        ],
      }
    },
    {
      idx: 6, kind: 'reflect', start: 2100, end: 2400,
      title: 'SHOW & TELL · SAFETY STAR!',
      eyebrow: 'STOP 06 · SHOW & TELL',
      body: {
        template: 'jrreflect',
        learned: 'The <b>Traffic Light Check</b>: GREEN = safe, go! AMBER = personal, ask a grown-up. <b>RED = private, never share.</b>',
        take: 'The park test: if a stranger at the park shouldn\'t know it, don\'t type it to an AI. When in doubt, treat it as amber and ask.',
        next: '<b>J-05 · My AI Rules.</b> Put it all together into your 6 promises — and sign your name!',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Safety lesson today! 🚦 The Traffic Light Check — my favourite.' },
    { t: 200,  kind: 'note', text: 'GREEN go, AMBER ask a grown-up, RED stop. Say it with me!' },
    { t: 340,  kind: 'warn', text: 'Private = who you are or where to find you. Name, address, school, passwords, photos.' },
    { t: 620,  kind: 'msg',  text: 'The park test: would you tell a stranger at the park? No? Then don\'t type it!' },
    { t: 840,  kind: 'msg',  text: 'AMBER isn\'t bad — it just means "check with a grown-up first".' },
    { t: 1060, kind: 'note', text: 'Magic fix: take the personal bits out and most ambers turn green!' },
    { t: 1240, kind: 'msg',  text: 'Quick check! Which ask gets the RED light?' },
    { t: 1600, kind: 'msg',  text: 'Sorting game! GREEN bin = go, RED bin = never share.' },
    { t: 2140, kind: 'msg',  text: 'Safety star earned! 🌟 Next stop: your very own AI Rules.' },
  ]
};

// ------------------------------------------------------------
// J-05 · MY AI RULES
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['J-05'] = {
  id: 'J-05', level: 'J', next: 'J-06',
  title: 'J-05 · My AI Rules',
  titleTop: 'J-05 · MY AI RULES',
  sub: 'JUNIOR CADET · AGES 8–12 · WEEK 5 · 40 MIN · EARN 2 STARS',
  duration: 2400,
  instructor: 'BUDDY',
  instructorRole: 'YOUR AI BUDDY · CLASS J · CADET',
  starGoal: 2,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 300,
      title: 'WELCOME · RULES OF THE ROAD',
      eyebrow: 'STOP 01 · HELLO',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: 'RULES' },
        heading: 'Why do drivers have rules?',
        sub: 'rules keep everyone safe — and having fun',
        paragraphs: [
          'Every driver follows the rules of the road — not because rules are boring, but because they <strong>keep everyone safe</strong>.',
          'Today you\'ll learn your <strong>6 AI promises</strong>, check you really know them… and then go sign them in your portal to earn your <strong>My-Rules badge</strong>!',
        ],
        examples: {
          title: 'Today\'s route',
          items: [
            { kind: 'good', text: 'Meet your 6 promises' },
            { kind: 'good', text: 'Play Promise-or-Not to test yourself' },
            { kind: 'good', text: 'Then: sign your rules in the portal!' },
          ]
        },
        callout: { title: 'You\'ve seen these!', body: 'You already learned most of these rules in lessons 1–4. Today we make them YOUR promises.' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 300, end: 840,
      title: 'YOUR 6 PROMISES',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'triangle', glyph: '6 PROMISES' },
        heading: 'The promises you\'ll sign',
        sub: 'six short promises · you know them all',
        paragraphs: [
          'Here they are — your <strong>6 Golden Promises</strong>. Read each one and think: do I know why this matters?',
          'Every promise connects to something you\'ve learned: the Traffic Light, the park test, being the boss of your own work.',
        ],
        examples: {
          title: 'The 6 promises',
          items: [
            { kind: 'good', text: '1 · I keep private things private' },
            { kind: 'good', text: '2 · I ask a grown-up when unsure' },
            { kind: 'good', text: '3 · I am kind and polite' },
            { kind: 'good', text: '4 · I check before I believe' },
            { kind: 'good', text: '5 · I do my own thinking' },
            { kind: 'good', text: '6 · I speak up if something feels wrong' },
          ]
        },
        callout: { title: 'Promise 6 is special', body: 'If anything scary or yucky ever shows up, tell a grown-up right away. You will NEVER be in trouble for speaking up.', icRed: true, icIcon: '!' }
      }
    },
    {
      idx: 3, kind: 'concept', start: 840, end: 1200,
      title: 'CHECK BEFORE YOU BELIEVE',
      eyebrow: 'STOP 03 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'octagon', glyph: 'CHECK' },
        heading: 'The trickiest promise',
        sub: 'AI can make-believe!',
        paragraphs: [
          'Promise 4 is the trickiest: <strong>AI can say things that sound totally real but are made up</strong>. Grown-ups call it a "hallucination" — you can call it <strong>make-believe</strong>.',
          'So before you believe a fact from an AI, do the <strong>Is-It-Real check</strong>: Does a grown-up agree? Can I find it in a book? Does it make sense?',
        ],
        examples: {
          title: 'The Is-It-Real check',
          items: [
            { kind: 'good', text: '1 · Does a grown-up agree?' },
            { kind: 'good', text: '2 · Can I find it in a book?' },
            { kind: 'good', text: '3 · Does it make sense?' },
          ]
        },
        callout: { title: 'Buddy\'s confession', body: 'Even I get things wrong sometimes! A smart driver double-checks. That\'s not rude — it\'s exactly right.' }
      }
    },
    {
      idx: 4, kind: 'quiz', start: 1200, end: 1560,
      title: 'QUICK CHECK · WHAT DO YOU DO?',
      eyebrow: 'STOP 04 · QUICK CHECK',
      body: {
        template: 'jrquiz',
        question: 'The AI shows you something that feels <strong>scary and yucky</strong>. What do you do?',
        options: [
          { letter: 'A', text: 'Keep it secret — I might get in trouble.', right: false },
          { letter: 'B', text: 'Show all my friends first.', right: false },
          { letter: 'C', text: 'Close it and tell a grown-up right away.', right: true },
          { letter: 'D', text: 'Ask the AI to show me more.', right: false },
        ],
        rightFeedback: 'Exactly right! ⭐ That\'s Promise 6: <b>speak up</b>. Close it, tell a grown-up right away — and remember, you are NEVER in trouble for telling. Ever.',
        wrongFeedback: 'Think about Promise 6! The right move is always to close it and <i>tell a grown-up right away</i>. You\'re never in trouble for speaking up — grown-ups WANT you to tell them.',
      }
    },
    {
      idx: 5, kind: 'jrsort', start: 1560, end: 2100,
      title: 'GAME · PROMISE OR NOT?',
      eyebrow: 'STOP 05 · SORTING GAME',
      body: {
        template: 'jrsort',
        prompt: 'Which of these belong in your promises, and which are the OPPOSITE of your rules?',
        greenLabel: 'GOOD PROMISE 🟢',
        redLabel: 'NOT A PROMISE 🔴',
        intro: 'GREEN = a real Golden Promise. RED = breaks your rules!',
        items: [
          { text: 'I check facts with a grown-up or a book', answer: 'green' },
          { text: 'I share my password if the AI asks nicely', answer: 'red' },
          { text: 'I use kind words, always', answer: 'green' },
          { text: 'I pretend the AI\'s work is all mine', answer: 'red' },
          { text: 'I keep secrets secret', answer: 'green' },
          { text: 'I keep scary stuff to myself', answer: 'red' },
          { text: 'I tell a grown-up if something feels wrong', answer: 'green' },
          { text: 'I believe everything the AI says', answer: 'red' },
        ],
      }
    },
    {
      idx: 6, kind: 'reflect', start: 2100, end: 2400,
      title: 'SHOW & TELL · READY TO SIGN!',
      eyebrow: 'STOP 06 · SHOW & TELL',
      body: {
        template: 'jrreflect',
        learned: 'Your <b>6 Golden Promises</b> — private stays private, ask when unsure, be kind, check before you believe, do your own thinking, and <b>speak up</b>.',
        take: 'Promises only count if you keep them! Head to your portal, tick all 6 rules, and sign your name to earn your My-Rules badge.',
        next: '<b>J-06 · Show & Tell.</b> Your big finish — share what you made and earn your Junior Licence!',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'Big day! 📜 Today you learn your 6 promises — then you get to SIGN them.' },
    { t: 200,  kind: 'note', text: 'You already know most of these from lessons 1–4. Today they become YOURS.' },
    { t: 360,  kind: 'msg',  text: 'Read all 6 slowly. Which one do you think is hardest to keep?' },
    { t: 700,  kind: 'warn', text: 'Promise 6: if something scary shows up, tell a grown-up RIGHT AWAY. Never in trouble for telling.' },
    { t: 880,  kind: 'msg',  text: 'The Is-It-Real check: grown-up agrees? in a book? makes sense?' },
    { t: 1240, kind: 'msg',  text: 'Quick check! What\'s the right move when something feels yucky?' },
    { t: 1600, kind: 'msg',  text: 'Promise or Not! Sort the real promises from the rule-breakers.' },
    { t: 2140, kind: 'msg',  text: 'You know your rules! 🌟 Now go tick and sign them in your portal.' },
  ]
};

// ------------------------------------------------------------
// J-06 · SHOW & TELL: YOUR BIG FINISH
// ------------------------------------------------------------
window.AIDL_JR_LESSONS['J-06'] = {
  id: 'J-06', level: 'J', next: null,
  title: 'J-06 · Show & Tell: Your Big Finish',
  titleTop: 'J-06 · SHOW & TELL',
  sub: 'JUNIOR CADET · AGES 8–12 · WEEK 6 · 40 MIN · EARN 2 STARS',
  duration: 2400,
  instructor: 'BUDDY',
  instructorRole: 'YOUR AI BUDDY · CLASS J · CADET',
  starGoal: 2,
  segments: [
    {
      idx: 1, kind: 'concept', start: 0, end: 300,
      title: 'WELCOME · THE FINAL STOP',
      eyebrow: 'STOP 01 · HELLO',
      body: {
        template: 'jrconcept',
        sign: { kind: 'circle', glyph: '🏁' },
        heading: 'You made it to the finish line!',
        sub: 'lesson 6 of 6 · licence day is close',
        paragraphs: [
          'Look how far you\'ve driven! You know what AI is, how to ask it nicely, how to make things, the Traffic Light, and your 6 promises.',
          'The last stop is <strong>Show & Tell</strong>: you share something you made with AI — and teach someone what you learned. Teaching is the best way to remember!',
        ],
        examples: {
          title: 'Your journey so far',
          items: [
            { kind: 'good', text: 'J-01 · Met your AI buddy ✓' },
            { kind: 'good', text: 'J-02 · The 3 Magic Words ✓' },
            { kind: 'good', text: 'J-03 · Maker Lane ✓' },
            { kind: 'good', text: 'J-04 · Traffic Light ✓' },
            { kind: 'good', text: 'J-05 · Your 6 promises ✓' },
          ]
        },
        callout: { title: 'Licence day!', body: 'Finish this lesson and your Junior Cadet licence is complete. Grown-up high-fives guaranteed.' }
      }
    },
    {
      idx: 2, kind: 'concept', start: 300, end: 780,
      title: 'WHAT MAKES A GREAT SHOW & TELL',
      eyebrow: 'STOP 02 · LEARN',
      body: {
        template: 'jrconcept',
        sign: { kind: 'rect', glyph: 'SHOW IT' },
        heading: 'Show, tell, teach',
        sub: 'three parts · easy as pie',
        paragraphs: [
          'A great Show & Tell has three parts. <strong>SHOW</strong> — what you made (your story, quiz, or poem). <strong>TELL</strong> — how you asked the AI, and what YOU changed to make it yours.',
          '<strong>TEACH</strong> — share one thing you learned, like the 3 Magic Words or the Traffic Light. If your grown-up learns something new from YOU, that\'s a gold-star finish!',
        ],
        examples: {
          title: 'The three parts',
          items: [
            { kind: 'good', text: 'SHOW · the thing you made' },
            { kind: 'good', text: 'TELL · how you made it (and what YOU changed)' },
            { kind: 'good', text: 'TEACH · one rule or trick you learned' },
          ]
        },
        callout: { title: 'Be proud', body: 'The best part isn\'t the thing you made — it\'s that YOU know how to drive safely now. That\'s a big deal!' }
      }
    },
    {
      idx: 3, kind: 'quiz', start: 780, end: 1140,
      title: 'QUICK CHECK · GOLD-STAR FINISH',
      eyebrow: 'STOP 03 · QUICK CHECK',
      body: {
        template: 'jrquiz',
        question: 'Which of these is the <strong>best</strong> Show & Tell?',
        options: [
          { letter: 'A', text: '"The AI made this story. The end."', right: false },
          { letter: 'B', text: '"I made this story with AI help — I asked for a pirate cat, then made the ending funnier myself. Want to learn the 3 Magic Words?"', right: true },
          { letter: 'C', text: 'Showing nothing — too shy.', right: false },
          { letter: 'D', text: '"I typed my whole name and school into the AI to make it!"', right: false },
        ],
        rightFeedback: 'Perfect! ⭐ It has all three parts: <b>SHOW</b> (the story), <b>TELL</b> (how you asked and what YOU changed), and <b>TEACH</b> (the 3 Magic Words). Gold-star finish!',
        wrongFeedback: 'Remember the three parts: SHOW what you made, TELL how you made it yours, TEACH one thing you learned. And option D breaks the SAFE rule — never share your name and school!',
      }
    },
    {
      idx: 4, kind: 'jrbuilder', start: 1140, end: 1860,
      title: 'YOUR TURN · PLAN YOUR SHOW & TELL',
      eyebrow: 'STOP 04 · MAKER LANE',
      body: {
        template: 'jrbuilder',
        scenario: 'Plan your Show & Tell! Fill in the three parts you\'ll share with your grown-up (or your class).',
        safeKey: 'teach',
        fields: [
          { key: 'show', letter: '1', name: 'SHOW', hint: 'What did you make?',
            ph: 'My ocean-animal quiz game with 5 questions that I made in Maker Lane.' },
          { key: 'tell', letter: '2', name: 'TELL', hint: 'How did you make it yours?',
            ph: 'I asked for kid-friendly questions, then changed two of them to be about sharks because I love sharks.' },
          { key: 'teach', letter: '3', name: 'TEACH', hint: 'What will you teach them?',
            ph: 'I\'ll teach the Traffic Light check — never share private stuff like passwords or your address.' },
        ],
      }
    },
    {
      idx: 5, kind: 'reflect', start: 1860, end: 2400,
      title: 'GRADUATION · LICENCE EARNED!',
      eyebrow: 'STOP 05 · GRADUATION',
      body: {
        template: 'jrreflect',
        learned: 'Everything a Junior Cadet needs: what AI is, the <b>3 Magic Words</b>, making things YOUR way, the <b>Traffic Light</b>, and your <b>6 promises</b>.',
        take: 'You\'re a licensed Junior Cadet now! Keep your promises, keep checking facts, and keep making cool things — safely.',
        next: '<b>Go do your Show & Tell!</b> And when you turn 12, the Road Crew (Class T) is waiting for you.',
      }
    },
  ],
  commentary: [
    { t: 0,    kind: 'msg',  text: 'FINAL STOP! 🏁 I\'m so proud of how far you\'ve driven.' },
    { t: 200,  kind: 'note', text: 'Today: plan your Show & Tell, then collect your licence!' },
    { t: 360,  kind: 'msg',  text: 'Three parts: SHOW what you made, TELL how, TEACH one thing.' },
    { t: 640,  kind: 'note', text: 'Teaching someone is the best way to remember it forever.' },
    { t: 820,  kind: 'msg',  text: 'Quick check! Which Show & Tell gets the gold star?' },
    { t: 1180, kind: 'msg',  text: 'Now plan yours! Fill the three boxes — Show, Tell, Teach.' },
    { t: 1600, kind: 'note', text: 'For TEACH, pick your favourite: Magic Words, Traffic Light, or the park test.' },
    { t: 1900, kind: 'msg',  text: '🎓 LICENCE EARNED! You\'re officially a Junior Cadet driver!' },
    { t: 2200, kind: 'msg',  text: 'Go show your grown-up — and see you in Road Crew when you\'re 12!' },
  ]
};
