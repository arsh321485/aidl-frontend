<template>
  <nav class="nav">
    <div class="wrap nav-inner">
      <div class="brand"><span class="brand-mark">AI</span><span class="brand-name">AIDL</span><span class="brand-sub">JUNIORS</span></div>
      <div class="nav-links nav-adult">
        <a href="#trainings">Trainings</a>
        <a href="#juniors" class="nav-link-juniors">Ages 8–16</a>
        <a href="#instructors">Instructors</a>
        <a href="#licenses">Licenses</a>
        <a href="#verify">Verify</a>
        <a href="#enroll">For Teams</a>
      </div>
      <div class="nav-links nav-junior">
        <a href="#juniors">Junior Programs</a>
        <a href="#juniors">The Route</a>
        <a href="#instructors">Instructors</a>
        <a href="#licenses">Licenses</a>
        <a href="#enroll">Enroll</a>
      </div>
      <div class="nav-cta">
        <button class="switch-path" type="button" @click="resetPath">↺ Switch Path</button>
        <a class="btn btn-yellow cta-adult" href="#enroll">Enroll Today →</a>
        <a class="btn btn-green cta-junior" href="#enroll">Enroll Your Learner →</a>
      </div>
    </div>
  </nav>

  <section class="split" id="splitChooser">
    <div class="split-panel adult">
      <button class="split-close" type="button" @click="closeSplitPanel('adult')">✕ CLOSE</button>
      <div class="split-content">
        <span class="split-eyebrow">▸ FOR ADULTS &amp; TEAMS</span>
        <h2 class="split-title">DRIVE&nbsp;AI.</h2>
        <p class="split-sub">Three license classes — Learner, Operator, Specialist. Get behind the wheel, log your hours, and earn a credential employers can verify.</p>
        <div class="split-actions">
          <a class="btn btn-yellow" href="#trainings" @click.prevent="choose('adult', '#trainings')">Explore Classes →</a>
          <a class="btn" href="#enroll" @click.prevent="choose('adult', '#enroll')">Enroll →</a>
        </div>
      </div>
    </div>
    <div class="split-panel junior">
      <button class="split-close" type="button" @click="closeSplitPanel('junior')">✕ CLOSE</button>
      <div class="split-content">
        <span class="split-eyebrow">▸ JUNIORS · AGES 8–16</span>
        <h2 class="split-title">LEARN&nbsp;AI.</h2>
        <p class="split-sub">Two safe, age-tuned tracks — Junior Cadet (8–12) and Road Crew (12–16). Supervised agents, a parent dashboard, and a real junior license.</p>
        <div class="split-actions">
          <a class="btn btn-green" href="#juniors" @click.prevent="choose('junior', '#juniors')">Explore Juniors →</a>
          <a class="btn" href="#enroll" @click.prevent="choose('junior', '#enroll')">Enroll a Learner →</a>
        </div>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="sun"></div>
    <div class="cloud c1"></div>
    <div class="cloud c2"></div>
    <div class="cloud c3"></div>
    <div class="mtn m1"></div>
    <div class="mtn m2"></div>
    <div class="mtn m3"></div>

    <div class="road"></div>
    <div class="road-dash">
      <svg viewBox="0 0 1440 484" preserveAspectRatio="none">
        <path class="dash-stroke" d="M 720 0 L 720 484"></path>
        <path class="dash-stroke" d="M 720 0 L 200 484" style="animation-duration: 1.4s"></path>
        <path class="dash-stroke" d="M 720 0 L 1240 484" style="animation-duration: 1.4s"></path>
      </svg>
    </div>

    <div class="road-sign rs-1"><div class="plate diamond"><span>NEXT EXIT<br/>AI 101</span></div><div class="post"></div></div>
    <div class="road-sign rs-2"><div class="plate round green">START</div><div class="post"></div></div>
    <div class="road-sign rs-3"><div class="plate white">LEARN<br/>DRIVE<br/>EARN</div><div class="post"></div></div>
    <div class="road-sign rs-4"><div class="plate red">DRIVE<br/>SAFE</div><div class="post"></div></div>

    <div class="hero-headline">
      <div class="hero-eyebrow"><span class="blink"></span> <span class="v-adult">NOW ENROLLING · COHORT 06</span><span class="v-junior">NOW ENROLLING · JUNIOR PERMITS</span></div>
      <h1 class="hero-title">LICENSE TO<span class="l2 v-adult">DRIVE&nbsp;AI</span><span class="l2 v-junior">LEARN&nbsp;AI</span></h1>
      <p class="hero-sub v-adult">The driving school for the AI era. Get behind the wheel, log your hours, and earn a verifiable license that proves you can operate AI — safely, skilfully, at speed.</p>
      <p class="hero-sub v-junior">The driving school for young minds in the AI era. Two safe, age-tuned tracks for ages 8–16 — learn, play, and build with AI, then earn a real junior license.</p>
    </div>

    <div class="dashboard">
      <div class="dash-bg"></div>
      <div class="wrap dash-inner">
        <div class="gauge-cluster">
          <div class="gauge kmh">
            <div class="tick" style="transform: rotate(0deg)"></div>
            <div class="tick" style="transform: rotate(30deg)"></div>
            <div class="tick" style="transform: rotate(60deg)"></div>
            <div class="tick" style="transform: rotate(90deg)"></div>
            <div class="tick" style="transform: rotate(-30deg)"></div>
            <div class="tick" style="transform: rotate(-60deg)"></div>
            <div class="tick" style="transform: rotate(-90deg)"></div>
            <div class="needle"></div>
            <div class="center"></div>
            <div class="label"><span class="v-adult">PROMPTS/MIN · 87</span><span class="v-junior">FUN/MIN · 99</span></div>
          </div>
          <div class="gauge lvl">
            <div class="tick" style="transform: rotate(-60deg)"></div>
            <div class="tick" style="transform: rotate(-30deg)"></div>
            <div class="tick" style="transform: rotate(0deg)"></div>
            <div class="tick" style="transform: rotate(30deg)"></div>
            <div class="tick" style="transform: rotate(60deg)"></div>
            <div class="needle"></div>
            <div class="center"></div>
            <div class="label"><span class="v-adult">SKILL LVL · L2</span><span class="v-junior">BADGES · 3</span></div>
          </div>
        </div>

        <div class="wheel">
          <div class="wheel-hub"><div class="wheel-hub-inner">AIDL</div></div>
        </div>

        <div class="infotainment">
          <div class="row"><span>NOW PLAYING</span><span>● REC</span></div>
          <div class="big"><span class="v-adult">LESSON 04</span><span class="v-junior">LESSON 02</span></div>
          <div class="row"><span><span class="v-adult">RAG · Retrieval</span><span class="v-junior">Meet Your AI Buddy</span></span><span>14:22 / 22:00</span></div>
          <div class="bar"><i></i></div>
          <div class="row" style="margin-top:14px;"><span>NEXT</span><span><span class="v-adult">EVALS &amp; SAFETY</span><span class="v-junior">MAKER LANE</span></span></div>
        </div>
      </div>
    </div>
  </section>

  <div class="marquee">
    <div class="marquee-track v-adult">
      <span>★ 24,500+ LICENSED OPERATORS</span><i>●</i>
      <span>96% PASS RATE</span><i>●</i>
      <span>EMPLOYER-VERIFIED</span><i>●</i>
      <span>4 HOURS A WEEK</span><i>●</i>
      <span>INSTRUCTORS ON CALL 24/7</span><i>●</i>
      <span>★ 24,500+ LICENSED OPERATORS</span><i>●</i>
      <span>96% PASS RATE</span><i>●</i>
      <span>EMPLOYER-VERIFIED</span><i>●</i>
      <span>4 HOURS A WEEK</span><i>●</i>
      <span>INSTRUCTORS ON CALL 24/7</span><i>●</i>
    </div>
    <div class="marquee-track v-junior">
      <span>★ KID-SAFE BY DESIGN</span><i>●</i>
      <span>PARENT DASHBOARD</span><i>●</i>
      <span>NO ADS · NO DATA SALES</span><i>●</i>
      <span>SUPERVISED AGENTS</span><i>●</i>
      <span>SCREEN-TIME FRIENDLY</span><i>●</i>
      <span>★ KID-SAFE BY DESIGN</span><i>●</i>
      <span>PARENT DASHBOARD</span><i>●</i>
      <span>NO ADS · NO DATA SALES</span><i>●</i>
      <span>SUPERVISED AGENTS</span><i>●</i>
      <span>SCREEN-TIME FRIENDLY</span><i>●</i>
    </div>
  </div>

  <section class="band roadmap" id="curriculum" data-aud="adult">
    <div class="wrap">
      <span class="section-eyebrow">▼ THE ROUTE</span>
      <h2 class="section-title">YOUR ROAD<br/>FROM 0 TO LICENSED.</h2>
      <p class="section-sub">Every program is mapped like a real driving course — signs, checkpoints, road hazards. You always know what's ahead, what you've passed, and how far to the next milestone.</p>
    </div>

    <div class="roadmap-stage">
      <div class="lane-line top"></div>
      <div class="lane-line bot"></div>
      <div class="lane-line solid top"></div>
      <div class="lane-line solid bot"></div>

      <div class="wrap roadmap-signs">
        <div class="feature-sign diamond">
          <div class="badge"><span>FUNDAMENTALS<br/>AHEAD</span></div>
          <div class="post"></div>
          <div class="desc"><strong>WEEK 01–02</strong>Models, tokens, context windows. The mechanics of the machine.</div>
        </div>
        <div class="feature-sign shield">
          <div class="badge">PROMPT<br/>HIGHWAY</div>
          <div class="post"></div>
          <div class="desc"><strong>WEEK 03–04</strong>Defensive prompting, structured outputs, controlled creativity.</div>
        </div>
        <div class="feature-sign green">
          <div class="badge">JCT 7<br/>AGENTS</div>
          <div class="post"></div>
          <div class="desc"><strong>WEEK 05–06</strong>Tools, memory, multi-step reasoning. Build your first agent.</div>
        </div>
        <div class="feature-sign octagon">
          <div class="badge">SAFETY<br/>STOP</div>
          <div class="post"></div>
          <div class="desc"><strong>WEEK 07</strong>Hallucinations, jailbreaks, red teaming. Slow down and inspect.</div>
        </div>
        <div class="feature-sign">
          <div class="badge">FINAL EXAM<br/>2 MI</div>
          <div class="post"></div>
          <div class="desc"><strong>WEEK 08</strong>Live driving test on a real-world brief. No autopilot allowed.</div>
        </div>
      </div>
    </div>
  </section>

  <section class="band trainings" id="trainings" data-aud="adult">
    <div class="wrap">
      <div class="top">
        <div>
          <span class="section-eyebrow">▼ THREE CLASSES</span>
          <h2 class="section-title">PICK YOUR<br/>CLASS OF LICENSE.</h2>
        </div>
        <p class="section-sub">Just like a real DMV — three tiers, three exam standards, three certifications. Start with a learner's permit. Stack up to specialist.</p>
      </div>

      <div class="training-grid">
        <div class="tr-card">
          <div class="tr-head">
            <span class="tr-level">CLASS L · ENTRY</span>
            <span class="tr-stamp">14-DAY START</span>
          </div>
          <div class="tr-icon">
            <svg viewBox="0 0 60 60" fill="none">
              <rect x="6" y="20" width="48" height="32" rx="4" fill="#ffcc00" stroke="#14140f" stroke-width="3"></rect>
              <rect x="14" y="12" width="32" height="14" rx="2" fill="#fff" stroke="#14140f" stroke-width="3"></rect>
              <text x="30" y="22" text-anchor="middle" font-family="Bungee" font-size="9" fill="#14140f">L</text>
              <circle cx="20" cy="50" r="6" fill="#14140f"></circle>
              <circle cx="40" cy="50" r="6" fill="#14140f"></circle>
            </svg>
          </div>
          <h3 class="tr-name">LEARNER'S<br/>PERMIT</h3>
          <p class="tr-desc">For the new driver. Learn how AI models actually work, write your first useful prompts, and pass the written exam.</p>
          <div class="tr-meta">
            <div><b>4 WK</b>duration</div>
            <div><b>2 HR</b>per week</div>
            <div><b>$0</b>tuition</div>
            <div><b>L1</b>certificate</div>
          </div>
          <ul class="tr-list">
            <li>What models can and can't do</li>
            <li>Prompt fundamentals</li>
            <li>Safe-use basics</li>
            <li>Written road-rules exam</li>
          </ul>
          <a class="btn" href="#enroll">Start Free</a>
        </div>

        <div class="tr-card featured">
          <div class="tr-head">
            <span class="tr-level">CLASS O · CORE</span>
            <span class="tr-stamp">★ MOST POPULAR</span>
          </div>
          <div class="tr-icon">
            <svg viewBox="0 0 60 60" fill="none">
              <rect x="4" y="22" width="52" height="30" rx="3" fill="#e23a2e" stroke="#14140f" stroke-width="3"></rect>
              <rect x="14" y="14" width="32" height="14" rx="2" fill="#fff" stroke="#14140f" stroke-width="3"></rect>
              <circle cx="30" cy="21" r="3" fill="#14140f"></circle>
              <circle cx="16" cy="50" r="6" fill="#14140f"></circle>
              <circle cx="44" cy="50" r="6" fill="#14140f"></circle>
              <path d="M30 28 V40" stroke="#14140f" stroke-width="3" stroke-linecap="round"></path>
            </svg>
          </div>
          <h3 class="tr-name">OPERATOR'S<br/>LICENSE</h3>
          <p class="tr-desc">For the everyday driver. Ship real work with AI — from research to writing to building agents you'd actually trust.</p>
          <div class="tr-meta">
            <div><b>8 WK</b>duration</div>
            <div><b>5 HR</b>per week</div>
            <div><b>$490</b>tuition</div>
            <div><b>L2</b>certificate</div>
          </div>
          <ul class="tr-list">
            <li>Build &amp; deploy 3 agents</li>
            <li>RAG, tools, eval frameworks</li>
            <li>1:1 instructor reviews</li>
            <li>Practical road test</li>
          </ul>
          <a class="btn btn-red" href="#enroll">Get In Queue →</a>
        </div>

        <div class="tr-card adv">
          <div class="tr-head">
            <span class="tr-level">CLASS S · PRO</span>
            <span class="tr-stamp">COHORT-BASED</span>
          </div>
          <div class="tr-icon">
            <svg viewBox="0 0 60 60" fill="none">
              <path d="M30 6 L52 16 V32 C52 44 42 52 30 56 C18 52 8 44 8 32 V16 Z" fill="#ffcc00" stroke="#14140f" stroke-width="3"></path>
              <text x="30" y="36" text-anchor="middle" font-family="Bungee" font-size="14" fill="#14140f">S</text>
            </svg>
          </div>
          <h3 class="tr-name">SPECIALIST<br/>ENDORSEMENT</h3>
          <p class="tr-desc">For the pro driver. Domain-deep tracks in healthcare, legal, security, and engineering — taught by industry instructors.</p>
          <div class="tr-meta">
            <div><b>12 WK</b>duration</div>
            <div><b>8 HR</b>per week</div>
            <div><b>$1,890</b>tuition</div>
            <div><b>L3</b>endorsement</div>
          </div>
          <ul class="tr-list">
            <li>Domain capstone project</li>
            <li>Industry advisor pairing</li>
            <li>Compliance &amp; governance</li>
            <li>Practical + oral defense</li>
          </ul>
          <a class="btn btn-yellow" href="#enroll">Apply →</a>
        </div>
      </div>
    </div>
  </section>

  <section class="band juniors" id="juniors" data-aud="junior">
    <div class="wrap">
      <div class="top">
        <div>
          <span class="section-eyebrow">▼ JUNIOR LICENSES</span>
          <h2 class="section-title">LEARNER PERMITS<br/>FOR AGES 8–16.</h2>
        </div>
        <p class="section-sub">Same driving school, two safe age-tuned tracks for younger drivers. Supervised agents, a parent dashboard, and a real, verifiable AIDL Junior license at the finish.</p>
      </div>

      <div class="jr-grid">
        <div class="jr-card kid">
          <div class="jr-top">
            <div class="jr-age">8–12<small>JUNIOR CADET · CLASS J</small></div>
            <div class="jr-badge">JR</div>
          </div>
          <div class="jr-body">
            <h3 class="jr-name">JUNIOR CADET</h3>
            <div class="jr-tag">BEGINNER · WITH A GROWN-UP</div>
            <p class="jr-desc">A playful first ride. Kids meet a friendly AI buddy, learn what AI is (and isn't), make stories, art, and quizzes — and learn the golden rules of using AI kindly and safely.</p>
            <div class="jr-meta">
              <div><b>6 WK</b>length</div>
              <div><b>45 MIN</b>session</div>
              <div><b>2×/WK</b>cadence</div>
              <div><b>J1</b>license</div>
            </div>
            <ul class="jr-list">
              <li>What is AI? Robots, smarts &amp; pretend</li>
              <li>Ask-it-nicely: your first safe prompts</li>
              <li>Make a story, a comic, and a quiz</li>
              <li>Spotting "make-believe" answers</li>
              <li>Be kind, be private, ask a grown-up</li>
            </ul>
            <a class="btn btn-green" href="#enroll">Start Junior Cadet →</a>
          </div>
        </div>

        <div class="jr-card teen">
          <div class="jr-top">
            <div class="jr-age">12–16<small>ROAD CREW · CLASS T</small></div>
            <div class="jr-badge">RC</div>
          </div>
          <div class="jr-body">
            <h3 class="jr-name">ROAD CREW</h3>
            <div class="jr-tag">INTERMEDIATE · MORE INDEPENDENT</div>
            <p class="jr-desc">For teens ready to take the wheel. Real prompting skills, AI for homework done honestly, building a simple bot, plus a serious look at bias, misinformation, and digital citizenship.</p>
            <div class="jr-meta">
              <div><b>8 WK</b>length</div>
              <div><b>60 MIN</b>session</div>
              <div><b>2×/WK</b>cadence</div>
              <div><b>T2</b>license</div>
            </div>
            <ul class="jr-list">
              <li>Prompting like a pro &amp; fact-checking</li>
              <li>AI for study — the honest way</li>
              <li>Build your own helper bot</li>
              <li>Bias, deepfakes &amp; misinformation</li>
              <li>Digital citizenship &amp; road test project</li>
            </ul>
            <a class="btn btn-sky" href="#enroll">Start Road Crew →</a>
          </div>
        </div>
      </div>

      <div class="jr-toggle">
        <button type="button" :class="{ active: jrRoute === 'k', k: jrRoute === 'k' }" @click="jrRoute = 'k'">ROUTE · AGES 8–12</button>
        <button type="button" :class="{ active: jrRoute === 't', t: jrRoute === 't' }" @click="jrRoute = 't'">ROUTE · AGES 12–16</button>
      </div>

      <div class="jr-stage">
        <div class="jr-lane solid top"></div>
        <div class="jr-lane mid"></div>
        <div class="jr-lane solid bot"></div>

        <div class="wrap jr-route k" :class="{ hidden: jrRoute !== 'k' }">
          <div class="jr-stop"><div class="badge">MEET YOUR<br/>AI BUDDY</div><div class="post"></div><div class="desc"><strong>WEEK 01–02</strong>What AI is, what it isn't, and how to say hello.</div></div>
          <div class="jr-stop"><div class="badge">ASK IT<br/>NICELY</div><div class="post"></div><div class="desc"><strong>WEEK 03</strong>Your first prompts — make a story and a picture.</div></div>
          <div class="jr-stop"><div class="badge">MAKER<br/>LANE</div><div class="post"></div><div class="desc"><strong>WEEK 04–05</strong>Build a quiz game and a comic with your buddy.</div></div>
          <div class="jr-stop"><div class="badge">SAFETY<br/>STOP</div><div class="post"></div><div class="desc"><strong>WEEK 06</strong>Make-believe answers, privacy, and asking grown-ups.</div></div>
          <div class="jr-stop"><div class="badge">SHOW &amp;<br/>TELL</div><div class="post"></div><div class="desc"><strong>FINISH</strong>Share your project and earn your J1 license.</div></div>
        </div>

        <div class="wrap jr-route t" :class="{ hidden: jrRoute !== 't' }">
          <div class="jr-stop"><div class="badge">HOW AI<br/>THINKS</div><div class="post"></div><div class="desc"><strong>WEEK 01–02</strong>Models, training, and why AI gets things wrong.</div></div>
          <div class="jr-stop"><div class="badge">PROMPT<br/>HIGHWAY</div><div class="post"></div><div class="desc"><strong>WEEK 03–04</strong>Prompting like a pro and fact-checking answers.</div></div>
          <div class="jr-stop"><div class="badge">BUILD A<br/>BOT</div><div class="post"></div><div class="desc"><strong>WEEK 05–06</strong>Make your own helper bot for a real task.</div></div>
          <div class="jr-stop"><div class="badge">CHECK<br/>YOURSELF</div><div class="post"></div><div class="desc"><strong>WEEK 07</strong>Bias, deepfakes, misinformation &amp; digital citizenship.</div></div>
          <div class="jr-stop"><div class="badge">ROAD<br/>TEST</div><div class="post"></div><div class="desc"><strong>WEEK 08</strong>Present your project and earn your T2 license.</div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="band instructors" id="instructors">
    <div class="wrap">
      <span class="section-eyebrow" style="background:var(--sign-yellow); color:var(--ink);">▼ MEET THE INSTRUCTORS</span>
      <h2 class="section-title">YOUR INSTRUCTORS<br/>ARE AGENTS.</h2>
      <p class="section-sub">Each instructor is a specialised AI agent with a permanent memory of your progress. They ride shotgun while you practice, grade your road tests, and never lose patience after the 14th attempt.</p>

      <div class="ins-grid">
        <div class="ins-card">
          <div class="ins-photo">
            <div class="agent"><div class="antenna"></div><div class="head"></div><div class="body"></div><div class="a-badge"></div></div>
          </div>
          <div class="ins-body">
            <h4 class="ins-name">DRIVER ED</h4>
            <div class="ins-role">INSTRUCTOR · CLASS L</div>
            <p class="ins-bio">Your first instructor. Patient, structured, never ironic. Walks you through fundamentals with diagrams and pop quizzes.</p>
            <div class="ins-tags"><span>FUNDAMENTALS</span><span>SOCRATIC</span><span>FRIENDLY</span></div>
            <div class="ins-meta">
              <div><b>1,240</b>lessons given</div>
              <div><b>4.9★</b>rating</div>
              <div><b>24/7</b>availability</div>
            </div>
          </div>
        </div>

        <div class="ins-card">
          <div class="ins-photo">
            <div class="agent"><div class="antenna"></div><div class="head"></div><div class="body"></div><div class="a-badge"></div></div>
          </div>
          <div class="ins-body">
            <h4 class="ins-name">SGT. MERIDIAN</h4>
            <div class="ins-role">EXAMINER · ROAD TESTS</div>
            <p class="ins-bio">Hands on the clipboard. Runs your practical exams, simulates edge cases, and writes a brutally honest report.</p>
            <div class="ins-tags"><span>EXAMS</span><span>STRICT</span><span>FAIR</span></div>
            <div class="ins-meta">
              <div><b>8,910</b>exams scored</div>
              <div><b>4.7★</b>rating</div>
              <div><b>96%</b>pass rate</div>
            </div>
          </div>
        </div>

        <div class="ins-card">
          <div class="ins-photo">
            <div class="agent"><div class="antenna"></div><div class="head"></div><div class="body"></div><div class="a-badge"></div></div>
          </div>
          <div class="ins-body">
            <h4 class="ins-name">PROF. RAGGA</h4>
            <div class="ins-role">SPECIALIST · AGENTS &amp; RAG</div>
            <p class="ins-bio">Your guide through the tricky junctions — retrieval, tools, agent loops. Will whiteboard for as long as you'll let her.</p>
            <div class="ins-tags"><span>AGENTS</span><span>RAG</span><span>EVALS</span></div>
            <div class="ins-meta">
              <div><b>612</b>projects coached</div>
              <div><b>4.9★</b>rating</div>
              <div><b>L3</b>specialist</div>
            </div>
          </div>
        </div>

        <div class="ins-card">
          <div class="ins-photo">
            <div class="agent"><div class="antenna"></div><div class="head"></div><div class="body"></div><div class="a-badge"></div></div>
          </div>
          <div class="ins-body">
            <h4 class="ins-name">UNIT 0X-SAFE</h4>
            <div class="ins-role">SAFETY OFFICER</div>
            <p class="ins-bio">Red-teams every project you ship. Pulls you over for hallucinations, prompt injection, and shoddy evals.</p>
            <div class="ins-tags"><span>SAFETY</span><span>RED TEAM</span><span>EVALS</span></div>
            <div class="ins-meta">
              <div><b>3,402</b>audits run</div>
              <div><b>4.8★</b>rating</div>
              <div><b>0</b>incidents</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="band enroll" id="enroll">
    <div class="wrap">
      <span class="section-eyebrow">▼ ENROLLMENT</span>
      <h2 class="section-title">SIGN UP AT<br/>THE FRONT DESK.</h2>
      <p class="section-sub" style="color:var(--ink);">Walk in like a real driving school. Hand over your details, pick your class, get a learner's permit in your inbox within 5 minutes.</p>

      <div class="enroll-grid">
        <div class="enroll-left">
          <div class="enroll-steps">
            <div class="step">
              <div class="step-num">1</div>
              <div>
                <h4>FILL IN THE FORM</h4>
                <p>Name, email, your goal, your starting class. No GMAT, no resume, no nonsense.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-num">2</div>
              <div>
                <h4>GET YOUR LEARNER'S PERMIT</h4>
                <p>An ID card lands in your inbox. Use it to access lessons, agents, and the practice yard.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-num">3</div>
              <div>
                <h4>BOOK YOUR FIRST LESSON</h4>
                <p>Pick a slot with an instructor agent. They'll meet you in the simulator and you're driving.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-num">4</div>
              <div>
                <h4>PASS, GET LICENSED</h4>
                <p>Take the road test. Get a verifiable, shareable license that employers can check against our registry.</p>
              </div>
            </div>
          </div>
        </div>

        <form class="form-card" @submit.prevent="handleSubmit">
          <div class="form-header">
            <span>AIDL · FRONT DESK</span>
            <span class="stamp">APPLICATION</span>
          </div>
          <div class="form-body">
            <div class="form-row">
              <div class="field">
                <label>First Name <span>*</span></label>
                <input type="text" v-model="form.firstName" />
              </div>
              <div class="field">
                <label>Last Name <span>*</span></label>
                <input type="text" v-model="form.lastName" />
              </div>
            </div>
            <div class="form-row">
              <div class="field full">
                <label>Email <span>*</span></label>
                <input type="email" placeholder="you@company.com" v-model="form.email" />
              </div>
            </div>
            <div class="form-row">
              <div class="field">
                <label>Date of Birth</label>
                <input type="text" placeholder="MM/DD/YYYY" v-model="form.dob" />
              </div>
              <div class="field">
                <label>Country</label>
                <select v-model="form.country">
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>Germany</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>
            <div class="field full" style="margin-bottom: 16px;">
              <label>Pick Your Class</label>
              <div class="choice-group five-cols" id="classChoice">
                <div class="choice" :class="{ active: activeClass === 'L' }" @click="activeClass = 'L'">CLASS&nbsp;L</div>
                <div class="choice" :class="{ active: activeClass === 'O' }" @click="activeClass = 'O'">CLASS&nbsp;O</div>
                <div class="choice" :class="{ active: activeClass === 'S' }" @click="activeClass = 'S'">CLASS&nbsp;S</div>
                <div class="choice" :class="{ active: activeClass === 'J' }" @click="activeClass = 'J'" style="font-size:10px;">JUNIOR<br/>8–12</div>
                <div class="choice" :class="{ active: activeClass === 'T' }" @click="activeClass = 'T'" style="font-size:10px;">CREW<br/>12–16</div>
              </div>
            </div>
            <div class="field full">
              <label>Why are you learning to drive AI? <span>OPTIONAL</span></label>
              <input type="text" placeholder="One line is fine — we'll calibrate your route." v-model="form.why" />
            </div>
          </div>
          <div class="form-foot">
            <div class="tiny">EST. ARRIVAL · 5&nbsp;MIN</div>
            <button type="submit" class="btn btn-red">GET MY PERMIT →</button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <section class="band licenses" id="licenses">
    <div class="wrap">
      <span class="section-eyebrow">▼ THE CREDENTIALS</span>
      <h2 class="section-title">LICENSES<br/>YOU CAN EARN.</h2>
      <p class="section-sub">Each license is a verifiable credential, signed by AIDL and timestamped on a public registry. Hiring managers, clients, and platforms can check it in one click.</p>

      <div class="lic-grid">
        <div class="lic-card">
          <div class="lic-top">
            <span><b>LEARNER'S PERMIT</b> · CLASS L</span>
            <span>ISSUED 03/14/2026</span>
          </div>
          <div class="lic-main">
            <div class="lic-portrait"><div class="agent"><div class="antenna"></div><div class="head"></div><div class="body"></div><div class="a-badge"></div></div></div>
            <div class="lic-info">
              <b>ALEX MORGAN</b>
              DOB 04/12/1994<br/>
              EXPIRES 03/14/2027<br/>
              HOURS LOGGED · 14 / 20
              <div class="lic-num">AIDL-L-0042-9381</div>
            </div>
          </div>
          <div class="lic-stamps">
            <span class="lic-stamp">Fundamentals ✓</span>
            <span class="lic-stamp">Written Exam ✓</span>
            <span class="lic-stamp">Safe-Use ✓</span>
          </div>
        </div>

        <div class="lic-card gold">
          <div class="lic-top">
            <span><b>OPERATOR'S LICENSE</b> · CLASS O</span>
            <span>ISSUED 04/29/2026</span>
          </div>
          <div class="lic-main">
            <div class="lic-portrait"><div class="agent"><div class="antenna"></div><div class="head"></div><div class="body"></div><div class="a-badge"></div></div></div>
            <div class="lic-info">
              <b>JAMIE OKAFOR</b>
              DOB 08/02/1991<br/>
              EXPIRES 04/29/2028<br/>
              HOURS LOGGED · 87 / 80
              <div class="lic-num">AIDL-O-1182-4421</div>
            </div>
          </div>
          <div class="lic-stamps">
            <span class="lic-stamp">Prompt ✓</span>
            <span class="lic-stamp">RAG ✓</span>
            <span class="lic-stamp">Agents ✓</span>
            <span class="lic-stamp">Road Test ✓</span>
          </div>
        </div>

        <div class="lic-card red">
          <div class="lic-top">
            <span><b>SPECIALIST ENDORSEMENT</b> · CLASS S</span>
            <span>ISSUED 05/04/2026</span>
          </div>
          <div class="lic-main">
            <div class="lic-portrait"><div class="agent"><div class="antenna"></div><div class="head"></div><div class="body"></div><div class="a-badge"></div></div></div>
            <div class="lic-info">
              <b>PRIYA REDDY</b>
              DOB 11/19/1988<br/>
              EXPIRES NEVER<br/>
              DOMAIN · HEALTHCARE
              <div class="lic-num">AIDL-S-HC-2204</div>
            </div>
          </div>
          <div class="lic-stamps">
            <span class="lic-stamp">Compliance ✓</span>
            <span class="lic-stamp">Capstone ✓</span>
            <span class="lic-stamp">Oral Defense ✓</span>
          </div>
        </div>

        <div class="lic-card green">
          <div class="lic-top">
            <span><b>SAFETY ENDORSEMENT</b> · ADD-ON</span>
            <span>ISSUED 04/01/2026</span>
          </div>
          <div class="lic-main">
            <div class="lic-portrait"><div class="agent"><div class="antenna"></div><div class="head"></div><div class="body"></div><div class="a-badge"></div></div></div>
            <div class="lic-info">
              <b>SAM CHEN</b>
              DOB 02/22/1996<br/>
              EXPIRES 04/01/2027<br/>
              RED-TEAM HOURS · 32
              <div class="lic-num">AIDL-X-SAFE-0918</div>
            </div>
          </div>
          <div class="lic-stamps">
            <span class="lic-stamp">Eval ✓</span>
            <span class="lic-stamp">Red Team ✓</span>
            <span class="lic-stamp">Incident Drill ✓</span>
          </div>
        </div>
      </div>

      <div class="verify" id="verify">
        <div class="verify-left">
          <h3>VERIFY A<br/>LICENSE.</h3>
          <p>Enter a license number to confirm an operator's credentials. Used by hiring teams, clients, and platforms to check who's actually licensed to drive AI.</p>
          <div class="verify-form">
            <input type="text" v-model="licInput" />
            <button type="button" @click="verify">VERIFY</button>
          </div>
        </div>
        <div class="verify-right">
          <div class="verify-status">
            <span class="verify-dot"></span>
            <div>
              <b :style="{ color: verifyResult.statusColor }">{{ verifyResult.status }}</b><br/>
              <span>{{ verifyResult.time }}</span>
            </div>
          </div>
          <div class="verify-result">
            <div><div class="k">Holder</div><div class="v">{{ verifyResult.holder }}</div></div>
            <div><div class="k">Class</div><div class="v acc">{{ verifyResult.cls }}</div></div>
            <div><div class="k">Issued</div><div class="v">{{ verifyResult.issued }}</div></div>
            <div><div class="k">Expires</div><div class="v">{{ verifyResult.expires }}</div></div>
            <div><div class="k">Hours Logged</div><div class="v">{{ verifyResult.hours }}</div></div>
            <div><div class="k">Endorsements</div><div class="v ok">{{ verifyResult.end }}</div></div>
            <div class="verify-hash">REGISTRY HASH · 0x9f2c…b14d8a · sig:ed25519:AIDL-Auth · public-verify ✓</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="foot">
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <a class="brand" href="#" style="color: var(--cream);"><span class="brand-mark">AI</span><span>AIDL</span></a>
          <p class="foot-brand-blurb">The AI Driving License. A driving school for the AI era — for adults &amp; teams and for young learners aged 8–16. Real instructors, verifiable credentials. Get licensed, then go build.</p>
        </div>
        <div>
          <h5>PROGRAMS</h5>
          <ul>
            <li><a href="#">Class L / O / S · Adults</a></li>
            <li><a href="#">Junior Cadet · 8–12</a></li>
            <li><a href="#">Road Crew · 12–16</a></li>
            <li><a href="#">Practice Yard</a></li>
          </ul>
        </div>
        <div>
          <h5>VERIFY</h5>
          <ul>
            <li><a href="#">Public Registry</a></li>
            <li><a href="#">Employer Portal</a></li>
            <li><a href="#">Parent Dashboard</a></li>
            <li><a href="#">Trust Center</a></li>
          </ul>
        </div>
        <div>
          <h5>COMPANY</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Instructors</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-bot">
        <div>© 2026 AIDL · ISSUED UNDER PUBLIC REGISTRY · CLASS L/O/S + J/T</div>
        <div>BUILT FOR OPERATORS &amp; YOUNG LEARNERS · v2.6</div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import '../styles/home-landing.css'

const jrRoute = ref<'k' | 't'>('k')

const activeClass = ref<'L' | 'O' | 'S' | 'J' | 'T'>('O')

function syncBodyClasses() {
  const b = document.body
  b.classList.remove('pre-choice', 'mode-adult', 'mode-junior', 'focus-adult', 'focus-junior')
  if (preChoice.value) {
    b.classList.add('pre-choice')
  } else if (mode.value === 'adult') {
    b.classList.add('mode-adult', 'focus-adult')
  } else if (mode.value === 'junior') {
    b.classList.add('mode-junior', 'focus-junior')
  }
}

const preChoice = ref(true)
const mode = ref<'adult' | 'junior' | null>(null)

function choose(path: 'adult' | 'junior', hash?: string) {
  preChoice.value = false
  mode.value = path
  syncBodyClasses()
  window.scrollTo(0, 0)
  if (hash) {
    requestAnimationFrame(() => {
      window.location.hash = hash
    })
  }
}

function closeSplitPanel(panel: 'adult' | 'junior') {
  choose(panel === 'adult' ? 'junior' : 'adult')
}

function resetPath() {
  preChoice.value = true
  mode.value = null
  syncBodyClasses()
  window.scrollTo(0, 0)
}

onMounted(syncBodyClasses)
onUnmounted(() => {
  document.body.classList.remove('pre-choice', 'mode-adult', 'mode-junior', 'focus-adult', 'focus-junior')
})

const form = reactive({
  firstName: 'Alex',
  lastName: 'Morgan',
  email: 'alex@company.com',
  dob: '04/12/1994',
  country: 'United States',
  why: 'Build agents for my product team.'
})

function handleSubmit() {
  alert('Application received! Check your inbox for a learner’s permit.')
}

const licInput = ref('AIDL-O-1182-4421')

interface RegistryEntry {
  holder: string
  cls: string
  iss: string
  exp: string
  hrs: string
  end: string
}

const REGISTRY: Record<string, RegistryEntry> = {
  'AIDL-O-1182-4421': { holder: 'Jamie Okafor', cls: 'CLASS O · OPERATOR',    iss: '04/29/2026', exp: '04/29/2028', hrs: '87 hrs · road test ✓', end: '+ Safety, + RAG' },
  'AIDL-L-0042-9381': { holder: 'Alex Morgan',  cls: 'CLASS L · LEARNER',     iss: '03/14/2026', exp: '03/14/2027', hrs: '14 hrs · in progress',    end: '—' },
  'AIDL-S-HC-2204':   { holder: 'Priya Reddy',  cls: 'CLASS S · HEALTHCARE',  iss: '05/04/2026', exp: 'Never',      hrs: '212 hrs · capstone ✓', end: '+ Compliance' },
  'AIDL-X-SAFE-0918': { holder: 'Sam Chen',     cls: 'SAFETY ENDORSEMENT',         iss: '04/01/2026', exp: '04/01/2027', hrs: '32 red-team hrs',               end: '—' }
}

const verifyResult = reactive({
  status: 'VERIFIED · ACTIVE',
  statusColor: '#2ec866',
  time: 'Checked just now · Registry block #4,221,098',
  holder: 'Jamie Okafor',
  cls: 'CLASS O · OPERATOR',
  issued: '04/29/2026',
  expires: '04/29/2028',
  hours: '87 hrs · road test ✓',
  end: '+ Safety, + RAG'
})

function verify() {
  const k = licInput.value.trim().toUpperCase()
  const r = REGISTRY[k]
  if (r) {
    verifyResult.status = 'VERIFIED · ACTIVE'
    verifyResult.statusColor = '#2ec866'
    verifyResult.time = 'Checked just now · Registry block #' + (4221000 + Math.floor(Math.random() * 200))
    verifyResult.holder = r.holder
    verifyResult.cls = r.cls
    verifyResult.issued = r.iss
    verifyResult.expires = r.exp
    verifyResult.hours = r.hrs
    verifyResult.end = r.end
  } else {
    verifyResult.status = 'NOT FOUND'
    verifyResult.statusColor = '#e23a2e'
    verifyResult.time = 'No matching record in the registry.'
    verifyResult.holder = '—'
    verifyResult.cls = '—'
    verifyResult.issued = '—'
    verifyResult.expires = '—'
    verifyResult.hours = '—'
    verifyResult.end = '—'
  }
}
</script>

<style>
:root {
  --cream: #f5ecd2;
  --cream-2: #f0e3bd;
  --asphalt: #14140f;
  --asphalt-2: #1f1e16;
  --sign-yellow: #ffcc00;
  --sign-amber: #ff9d00;
  --signal-red: #e23a2e;
  --signal-green: #2ec866;
  --sky: #6fb3e0;
  --line-white: #f6f1de;
  --ink: #14140f;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: var(--cream); color: var(--ink); font-family: "Space Grotesk", system-ui, sans-serif; }
body { overflow-x: hidden; }

.display { font-family: "Bungee", "Space Grotesk", sans-serif; letter-spacing: 0.02em; }
.mono { font-family: "JetBrains Mono", monospace; }

.wrap { max-width: 1440px; margin: 0 auto; padding: 0 56px; }

/* NAV */
.nav { position: sticky; top: 0; z-index: 50; background: var(--cream); border-bottom: 3px solid var(--ink); }
.nav-inner { display: flex; align-items: center; gap: 32px; height: 76px; }
.nav .brand {
  display: flex; align-items: center; gap: 12px;
  font-family: "Bungee", sans-serif; font-size: 20px;
  text-decoration: none; color: var(--ink);
  border-bottom: none;
  padding: 0;
  cursor: default;
}
.brand-mark {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--sign-yellow); border: 3px solid var(--ink);
  display: grid; place-items: center; font-family: "Bungee", sans-serif; font-size: 16px;
  box-shadow: 3px 3px 0 var(--ink);
  text-decoration: none;
}
.brand-name {
  font-family: "Bungee", sans-serif;
  text-decoration: none;
  color: var(--ink);
}
.nav-links { display: flex; gap: 28px; margin-left: 24px; }
.nav-links a { color: var(--ink); text-decoration: none; font-weight: 600; font-size: 15px; }
.nav-links a:hover { color: var(--signal-red); }
.nav-cta { margin-left: auto; display: flex; gap: 12px; align-items: center; }

.btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 12px 22px; background: var(--ink); color: var(--cream);
  border: 3px solid var(--ink); font-family: "Bungee", sans-serif; font-size: 14px;
  text-decoration: none; box-shadow: 4px 4px 0 var(--sign-yellow);
  transition: transform .12s, box-shadow .12s; cursor: pointer;
}
.btn:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--sign-yellow); }
.btn.btn-yellow { background: var(--sign-yellow); color: var(--ink); box-shadow: 4px 4px 0 var(--ink); }
.btn.btn-yellow:hover { box-shadow: 6px 6px 0 var(--ink); }
.btn.btn-red { background: var(--signal-red); color: var(--cream); box-shadow: 4px 4px 0 var(--ink); }
.btn.btn-red:hover { box-shadow: 6px 6px 0 var(--ink); }

/* HERO */
.hero {
  position: relative; height: 880px; overflow: hidden;
  background: linear-gradient(180deg, #98c8eb 0%, #c8e0f0 45%, #e9d398 60%, #c98c4a 75%, #4a3a25 100%);
  border-bottom: 6px solid var(--ink);
}
.sun {
  position: absolute; left: 50%; top: 38%; transform: translate(-50%, -50%);
  width: 220px; height: 220px; border-radius: 50%;
  background: radial-gradient(circle, #ffdd55 0%, #ff9d00 60%, transparent 70%);
  filter: blur(2px);
}
.cloud { position: absolute; background: var(--cream); border: 3px solid var(--ink); border-radius: 40px; }
.cloud.c1 { width: 120px; height: 40px; top: 80px; left: 12%; }
.cloud.c2 { width: 90px;  height: 30px; top: 140px; left: 70%; }
.cloud.c3 { width: 160px; height: 44px; top: 60px; left: 60%; }

.mtn { position: absolute; bottom: 38%; width: 0; height: 0; border-style: solid; }
.mtn.m1 { left: 8%;  border-width: 0 90px 80px 90px;  border-color: transparent transparent #6e5a3a transparent; }
.mtn.m2 { left: 22%; border-width: 0 120px 110px 120px; border-color: transparent transparent #5a4830 transparent; }
.mtn.m3 { right: 12%; border-width: 0 140px 130px 140px; border-color: transparent transparent #6e5a3a transparent; }

.road {
  position: absolute; left: 50%; bottom: 0; transform: translateX(-50%);
  width: 100%; height: 55%; background: var(--asphalt);
  clip-path: polygon(38% 0, 62% 0, 100% 100%, 0% 100%);
}
.road-dash { position: absolute; left: 0; right: 0; bottom: 0; height: 55%; pointer-events: none; }
.road-dash svg { width: 100%; height: 100%; overflow: visible; }
.dash-stroke {
  stroke: var(--line-white); stroke-width: 14;
  stroke-dasharray: 36 44; stroke-linecap: square; fill: none;
  animation: dashmove 1.8s linear infinite;
}
@keyframes dashmove { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -80; } }

.road-sign { position: absolute; display: flex; flex-direction: column; align-items: center; }
.road-sign .post { width: 5px; background: #6b5b3e; height: 60px; }
.road-sign .plate {
  background: var(--sign-yellow); color: var(--ink);
  border: 4px solid var(--ink); padding: 10px 14px;
  font-family: "Bungee", sans-serif; font-size: 13px;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.4);
  text-align: center; line-height: 1.05;
}
.road-sign .plate.diamond { width: 100px; height: 100px; transform: rotate(45deg); display: grid; place-items: center; padding: 0; }
.road-sign .plate.diamond > span { display: block; transform: rotate(-45deg); font-size: 11px; }
.road-sign .plate.round { border-radius: 50%; width: 84px; height: 84px; display: grid; place-items: center; padding: 0; }
.road-sign .plate.green { background: var(--signal-green); }
.road-sign .plate.red   { background: var(--signal-red); color: var(--cream); }
.road-sign .plate.white { background: var(--cream); }

.rs-1 { left: 6%;  bottom: 30%; }
.rs-1 .post { height: 80px; }
.rs-2 { right: 7%; bottom: 26%; }
.rs-2 .post { height: 100px; }
.rs-3 { left: 16%; bottom: 18%; }
.rs-3 .post { height: 110px; }
.rs-4 { right: 18%; bottom: 14%; }
.rs-4 .post { height: 130px; }

.hero-headline {
  position: absolute; left: 50%; top: 120px; transform: translateX(-50%);
  text-align: center; z-index: 5; width: min(1100px, 92%);
}
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--ink); color: var(--sign-yellow);
  padding: 8px 18px; font-family: "Bungee", sans-serif; font-size: 13px;
  border: 3px solid var(--ink); box-shadow: 4px 4px 0 var(--signal-red);
  margin-bottom: 22px;
}
.hero-eyebrow .blink {
  width: 10px; height: 10px; border-radius: 50%; background: var(--signal-red);
  animation: blink 1s steps(2) infinite;
}
@keyframes blink { 50% { opacity: 0.15; } }

.hero-title {
  font-family: "Bungee", sans-serif;
  font-size: 132px; line-height: 0.92; color: var(--ink);
  text-shadow: 6px 6px 0 var(--sign-yellow); margin: 0;
}
.hero-title .l2 { display: block; color: var(--signal-red); text-shadow: 6px 6px 0 var(--ink); }
.hero-sub {
  margin-top: 24px; font-size: 19px; max-width: 620px;
  color: var(--ink); font-weight: 500;
  background: rgba(245, 236, 210, 0.7);
  padding: 10px 18px; border: 2px solid var(--ink); display: inline-block;
}

.dashboard { position: absolute; left: 0; right: 0; bottom: 0; height: 280px; z-index: 8; }
.dash-bg {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, #2a2820 0%, #14140f 60%, #0a0a07 100%);
  clip-path: polygon(0 30%, 12% 12%, 88% 12%, 100% 30%, 100% 100%, 0 100%);
  border-top: 4px solid var(--ink);
}
.dash-inner {
  position: absolute; inset: 0;
  display: grid; grid-template-columns: 1fr auto 1fr;
  align-items: center; padding: 70px 80px 30px;
  color: var(--cream);
}
.gauge-cluster { display: flex; gap: 30px; align-items: center; }
.gauge {
  width: 110px; height: 110px; border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, #1e1c16, #0a0a07 70%);
  border: 4px solid #3a3528; position: relative;
  box-shadow: inset 0 0 18px rgba(0,0,0,0.7);
}
.gauge .tick { position: absolute; left: 50%; top: 6px; width: 2px; height: 8px; background: var(--cream-2); opacity: 0.6; transform-origin: 50% 49px; }
.gauge .needle { position: absolute; left: 50%; bottom: 50%; width: 3px; height: 42px; background: var(--signal-red); transform-origin: 50% 100%; transform: translateX(-50%) rotate(-50deg); border-radius: 2px; }
.gauge .center { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 14px; height: 14px; border-radius: 50%; background: var(--sign-yellow); border: 2px solid var(--ink); }
.gauge .label { position: absolute; left: 50%; bottom: -22px; transform: translateX(-50%); font-family: "JetBrains Mono", monospace; font-size: 10px; color: var(--cream-2); white-space: nowrap; }
.gauge.kmh .needle { transform: translateX(-50%) rotate(35deg); }
.gauge.lvl .needle { transform: translateX(-50%) rotate(-25deg); background: var(--signal-green); }

.wheel {
  width: 320px; height: 320px;
  border-radius: 50%; border: 22px solid var(--asphalt);
  background: radial-gradient(circle at 50% 50%, transparent 0 70px, #1a1810 71px 80px, transparent 81px);
  position: relative;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.6);
  margin-top: -120px;
}
.wheel::before, .wheel::after {
  content: ""; position: absolute; left: 50%; top: 50%;
  background: var(--asphalt); transform: translate(-50%, -50%); border-radius: 8px;
}
.wheel::before { width: 16px; height: 200px; }
.wheel::after  { width: 200px; height: 16px; }
.wheel-hub {
  position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);
  width: 110px; height: 110px; border-radius: 50%;
  background: linear-gradient(145deg, #2a2820, #14140f);
  border: 3px solid #3a3528;
  display: grid; place-items: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4); z-index: 2;
}
.wheel-hub-inner {
  width: 84px; height: 84px; border-radius: 50%;
  background: var(--sign-yellow); border: 3px solid var(--ink);
  display: grid; place-items: center;
  font-family: "Bungee", sans-serif; font-size: 22px; color: var(--ink);
}

.infotainment {
  background: #0a0a07; border: 3px solid #3a3528; border-radius: 10px;
  padding: 16px 18px; color: var(--signal-green);
  font-family: "JetBrains Mono", monospace; width: 280px;
  margin-left: auto; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
}
.infotainment .row { display: flex; justify-content: space-between; font-size: 11px; color: var(--cream-2); }
.infotainment .big { font-family: "Bungee", sans-serif; color: var(--sign-yellow); font-size: 22px; margin: 6px 0 8px; }
.infotainment .bar { height: 8px; background: #2a2820; border-radius: 4px; overflow: hidden; margin-top: 10px; }
.infotainment .bar > i { display: block; height: 100%; width: 68%; background: var(--signal-green); }

/* SECTIONS */
section.band { position: relative; padding: 120px 0; border-bottom: 4px solid var(--ink); }
.section-eyebrow { display: inline-block; background: var(--ink); color: var(--sign-yellow); padding: 6px 14px; font-family: "Bungee", sans-serif; font-size: 12px; margin-bottom: 18px; }
.section-title { font-family: "Bungee", sans-serif; font-size: 64px; line-height: 1.0; margin: 0 0 16px; }
.section-sub { font-size: 17px; max-width: 620px; color: #3a3528; }

/* ROADMAP */
.roadmap { background: var(--cream-2); padding-bottom: 0; }
.roadmap-stage {
  position: relative; height: 720px; margin-top: 60px;
  background: var(--asphalt);
  border-top: 6px solid var(--ink); border-bottom: 6px solid var(--ink);
  overflow: hidden;
}
.lane-line { position: absolute; left: 0; right: 0; height: 6px; background: repeating-linear-gradient(90deg, var(--line-white) 0 40px, transparent 40px 80px); }
.lane-line.top { top: 38%; }
.lane-line.bot { bottom: 38%; }
.lane-line.solid { height: 4px; background: var(--sign-yellow); }
.lane-line.solid.top { top: 18%; }
.lane-line.solid.bot { bottom: 22%; }

.roadmap-signs {
  position: relative; z-index: 3;
  display: flex; justify-content: space-between;
  padding: 60px 80px 28px; height: 100%; align-items: flex-end;
}
.feature-sign { width: 220px; display: flex; flex-direction: column; align-items: center; color: var(--cream); }
.feature-sign .badge {
  background: var(--sign-yellow); color: var(--ink);
  border: 4px solid var(--ink); padding: 18px 16px;
  text-align: center; box-shadow: 6px 6px 0 rgba(0,0,0,0.5);
  font-family: "Bungee", sans-serif; font-size: 14px;
  min-height: 100px; width: 100%;
  display: grid; place-items: center; line-height: 1.1;
}
.feature-sign.shield .badge {
  background: var(--cream);
  clip-path: polygon(50% 0, 100% 18%, 100% 70%, 50% 100%, 0 70%, 0 18%);
  padding: 22px 14px 32px;
}
.feature-sign.octagon .badge {
  background: var(--signal-red); color: var(--cream);
  clip-path: polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%);
  padding: 26px 14px;
}
.feature-sign.diamond .badge {
  background: var(--sign-yellow);
  width: 140px; height: 140px; transform: rotate(45deg);
  padding: 0; display: grid; place-items: center; min-height: unset;
}
.feature-sign.diamond .badge > span { display: block; transform: rotate(-45deg); width: 95px; }
.feature-sign.green .badge { background: var(--signal-green); color: var(--ink); }
.feature-sign .post { width: 6px; background: #c8c0a8; height: 80px; margin-top: -2px; }
.feature-sign .post::before { content: ""; display: block; width: 18px; height: 4px; background: #c8c0a8; margin: 8px 0 0 -6px; }
.feature-sign .desc { margin-top: 36px; color: var(--cream); font-size: 13px; text-align: center; line-height: 1.4; max-width: 180px; position: relative; top: 22px; }
.feature-sign .desc strong { color: var(--sign-yellow); font-family: "Bungee", sans-serif; font-size: 12px; display: block; margin-bottom: 4px; letter-spacing: 0.05em; }

/* TRAININGS */
.trainings { background: var(--cream); }
.trainings .top { display: flex; justify-content: space-between; align-items: flex-end; gap: 40px; }
.training-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 60px; }
.tr-card {
  background: var(--cream-2); border: 4px solid var(--ink);
  box-shadow: 10px 10px 0 var(--ink); padding: 32px; position: relative;
  display: flex; flex-direction: column; min-height: 540px;
}
.tr-card.featured { background: var(--sign-yellow); }
.tr-card.adv { background: var(--ink); color: var(--cream); box-shadow: 10px 10px 0 var(--signal-red); }

.tr-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; }
.tr-level { font-family: "JetBrains Mono", monospace; font-size: 11px; padding: 4px 10px; background: var(--ink); color: var(--cream); border: 2px solid var(--ink); }
.tr-card.adv .tr-level { background: var(--cream); color: var(--ink); }
.tr-card.featured .tr-level { background: var(--ink); color: var(--sign-yellow); }
.tr-stamp { font-family: "Bungee", sans-serif; font-size: 11px; color: var(--ink); border: 2px solid var(--ink); padding: 4px 8px; transform: rotate(-3deg); }
.tr-card.adv .tr-stamp { color: var(--cream); border-color: var(--cream); }

.tr-icon {
  width: 100px; height: 100px;
  border: 4px solid var(--ink); background: var(--cream);
  display: grid; place-items: center;
  margin: 8px 0 22px; box-shadow: 5px 5px 0 var(--ink);
}
.tr-card.adv .tr-icon { background: var(--sign-yellow); border-color: var(--sign-yellow); box-shadow: 5px 5px 0 var(--signal-red); }
.tr-icon svg { width: 60px; height: 60px; }
.tr-name { font-family: "Bungee", sans-serif; font-size: 30px; line-height: 0.95; margin: 0 0 10px; }
.tr-desc { font-size: 15px; line-height: 1.45; margin-bottom: 22px; }
.tr-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; font-family: "JetBrains Mono", monospace; font-size: 11px; margin-bottom: 22px; padding: 14px 0; border-top: 2px dashed currentColor; border-bottom: 2px dashed currentColor; }
.tr-meta b { font-family: "Bungee", sans-serif; font-weight: normal; font-size: 13px; display: block; }

.tr-list { list-style: none; padding: 0; margin: 0 0 26px; font-size: 14px; }
.tr-list li { padding: 6px 0; display: flex; gap: 10px; align-items: flex-start; }
.tr-list li::before { content: ""; flex: 0 0 14px; height: 14px; margin-top: 4px; background: var(--ink); clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
.tr-card.adv .tr-list li::before { background: var(--sign-yellow); }
.tr-card.featured .tr-list li::before { background: var(--signal-red); }

.tr-card .btn { margin-top: auto; align-self: flex-start; }

/* INSTRUCTORS */
.instructors { background: var(--asphalt); color: var(--cream); }
.instructors .section-title { color: var(--cream); }
.instructors .section-sub { color: var(--cream-2); }
.ins-grid { margin-top: 60px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.ins-card { background: var(--cream); color: var(--ink); border: 4px solid var(--ink); box-shadow: 8px 8px 0 var(--sign-yellow); overflow: hidden; }
.ins-card:nth-child(2) { box-shadow: 8px 8px 0 var(--signal-red); }
.ins-card:nth-child(3) { box-shadow: 8px 8px 0 var(--signal-green); }
.ins-card:nth-child(4) { box-shadow: 8px 8px 0 var(--sky); }

.ins-photo {
  height: 180px; position: relative;
  background: repeating-linear-gradient(45deg, transparent 0 10px, rgba(0,0,0,0.06) 10px 12px), var(--sign-yellow);
  border-bottom: 4px solid var(--ink);
  display: grid; place-items: center; overflow: hidden;
}
.ins-card:nth-child(2) .ins-photo { background: repeating-linear-gradient(45deg, transparent 0 10px, rgba(0,0,0,0.08) 10px 12px), var(--signal-red); }
.ins-card:nth-child(3) .ins-photo { background: repeating-linear-gradient(45deg, transparent 0 10px, rgba(0,0,0,0.06) 10px 12px), var(--signal-green); }
.ins-card:nth-child(4) .ins-photo { background: repeating-linear-gradient(45deg, transparent 0 10px, rgba(0,0,0,0.06) 10px 12px), var(--sky); }

.agent { width: 110px; height: 130px; position: relative; filter: drop-shadow(3px 3px 0 var(--ink)); }
.agent .head { position: absolute; left: 50%; top: 0; transform: translateX(-50%); width: 80px; height: 70px; background: var(--ink); border: 3px solid var(--ink); border-radius: 16px 16px 12px 12px; }
.agent .head::before, .agent .head::after { content: ""; position: absolute; top: 22px; width: 14px; height: 14px; background: var(--sign-yellow); border-radius: 50%; }
.agent .head::before { left: 14px; }
.agent .head::after { right: 14px; }
.agent .antenna { position: absolute; left: 50%; top: -16px; width: 3px; height: 16px; background: var(--ink); transform: translateX(-50%); }
.agent .antenna::before { content: ""; position: absolute; left: 50%; top: -8px; width: 12px; height: 12px; background: var(--signal-red); border: 2px solid var(--ink); border-radius: 50%; transform: translateX(-50%); }
.agent .body { position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); width: 100px; height: 56px; background: var(--cream-2); border: 3px solid var(--ink); border-radius: 14px 14px 6px 6px; }
.agent .a-badge { position: absolute; left: 50%; bottom: 14px; transform: translateX(-50%); width: 28px; height: 28px; background: var(--sign-yellow); border: 2px solid var(--ink); border-radius: 50%; }

.ins-body { padding: 22px; }
.ins-name { font-family: "Bungee", sans-serif; font-size: 22px; margin: 0 0 4px; }
.ins-role { font-family: "JetBrains Mono", monospace; font-size: 11px; color: #6a624a; margin-bottom: 14px; }
.ins-bio { font-size: 13px; line-height: 1.45; margin-bottom: 14px; }
.ins-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.ins-tags span { font-family: "JetBrains Mono", monospace; font-size: 10px; padding: 3px 8px; background: var(--ink); color: var(--cream); }
.ins-meta { margin-top: 14px; padding-top: 12px; border-top: 2px dashed var(--ink); display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; font-family: "JetBrains Mono", monospace; font-size: 10px; }
.ins-meta div b { display: block; font-family: "Bungee", sans-serif; font-size: 14px; }

/* ENROLL */
.enroll { background: var(--sign-yellow); }
.enroll-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-top: 50px; align-items: start; }
.enroll-left h2 { color: var(--ink); }
.enroll-steps { display: grid; gap: 14px; margin-top: 28px; }
.step { display: flex; gap: 18px; align-items: flex-start; background: var(--cream); border: 3px solid var(--ink); padding: 16px 18px; box-shadow: 5px 5px 0 var(--ink); }
.step-num { flex: 0 0 48px; height: 48px; background: var(--ink); color: var(--sign-yellow); font-family: "Bungee", sans-serif; font-size: 22px; display: grid; place-items: center; }
.step h4 { margin: 0 0 4px; font-family: "Bungee", sans-serif; font-size: 16px; }
.step p { margin: 0; font-size: 13px; }

.form-card { background: var(--cream); border: 4px solid var(--ink); box-shadow: 12px 12px 0 var(--ink); padding: 0; overflow: hidden; }
.form-header { background: var(--ink); color: var(--cream); padding: 18px 24px; display: flex; justify-content: space-between; align-items: center; font-family: "Bungee", sans-serif; font-size: 16px; }
.form-header .stamp { background: var(--signal-red); color: var(--cream); padding: 4px 10px; font-size: 12px; transform: rotate(-4deg); border: 2px solid var(--cream); }
.form-body { padding: 28px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-family: "JetBrains Mono", monospace; font-size: 10px; text-transform: uppercase; color: var(--ink); display: flex; justify-content: space-between; }
.field input, .field select { height: 44px; border: 3px solid var(--ink); background: var(--cream-2); padding: 0 14px; font-family: "Space Grotesk", sans-serif; font-size: 15px; font-weight: 600; }
.field input:focus, .field select:focus { outline: none; background: var(--sign-yellow); }
.field.full { grid-column: 1 / -1; }
.choice-group { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 4px; }
.choice { border: 3px solid var(--ink); background: var(--cream-2); padding: 10px; text-align: center; cursor: pointer; font-family: "Bungee", sans-serif; font-size: 12px; user-select: none; }
.choice.active { background: var(--sign-yellow); box-shadow: inset 0 0 0 3px var(--ink); }
.form-foot { background: var(--cream-2); border-top: 3px dashed var(--ink); padding: 18px 28px; display: flex; justify-content: space-between; align-items: center; }
.form-foot .tiny { font-family: "JetBrains Mono", monospace; font-size: 10px; }

/* LICENSES */
.licenses { background: var(--cream); }
.lic-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; margin-top: 50px; }
.lic-card {
  background: linear-gradient(135deg, #fff3c4 0%, #ffd60a 100%);
  border: 4px solid var(--ink); box-shadow: 10px 10px 0 var(--ink);
  padding: 26px; position: relative; overflow: hidden;
}
.lic-card.gold   { background: linear-gradient(135deg, #ffe27a 0%, #f5b800 100%); }
.lic-card.red    { background: linear-gradient(135deg, #ffc8c0 0%, #e23a2e 100%); color: var(--cream); }
.lic-card.green  { background: linear-gradient(135deg, #c0eecf 0%, #2ec866 100%); }

.lic-card::before { content: ""; position: absolute; right: -40px; top: -40px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%); pointer-events: none; }
.lic-top { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid currentColor; padding-bottom: 12px; margin-bottom: 16px; font-family: "JetBrains Mono", monospace; font-size: 11px; }
.lic-top b { font-family: "Bungee", sans-serif; font-size: 14px; }
.lic-main { display: grid; grid-template-columns: 90px 1fr; gap: 18px; align-items: center; }
.lic-portrait { width: 90px; height: 110px; background: rgba(0,0,0,0.08); border: 2px solid currentColor; display: grid; place-items: center; position: relative; }
.lic-portrait .agent { width: 70px; height: 90px; filter: drop-shadow(2px 2px 0 currentColor); }
.lic-portrait .agent .head { width: 56px; height: 50px; }
.lic-portrait .agent .head::before, .lic-portrait .agent .head::after { top: 16px; width: 10px; height: 10px; }
.lic-portrait .agent .head::before { left: 10px; }
.lic-portrait .agent .head::after { right: 10px; }
.lic-portrait .agent .body { width: 68px; height: 36px; }
.lic-portrait .agent .a-badge { width: 18px; height: 18px; bottom: 8px; }
.lic-portrait .agent .antenna { top: -10px; height: 12px; }
.lic-portrait .agent .antenna::before { width: 8px; height: 8px; }
.lic-info { font-family: "JetBrains Mono", monospace; font-size: 12px; line-height: 1.5; }
.lic-info b { font-family: "Bungee", sans-serif; font-size: 22px; display: block; line-height: 1; margin-bottom: 8px; }
.lic-num { font-family: "JetBrains Mono", monospace; font-size: 18px; letter-spacing: 0.1em; margin-top: 12px; }
.lic-stamps { margin-top: 16px; display: flex; gap: 8px; flex-wrap: wrap; border-top: 2px dashed currentColor; padding-top: 12px; }
.lic-stamp { border: 2px solid currentColor; padding: 3px 8px; font-family: "JetBrains Mono", monospace; font-size: 9px; text-transform: uppercase; }

/* VERIFY */
.verify { margin-top: 60px; background: var(--ink); color: var(--cream); border: 4px solid var(--ink); box-shadow: 12px 12px 0 var(--signal-green); display: grid; grid-template-columns: 1fr 1.2fr; gap: 0; overflow: hidden; }
.verify-left { padding: 40px; border-right: 3px dashed #3a3528; }
.verify-left h3 { font-family: "Bungee", sans-serif; font-size: 36px; margin: 0 0 12px; line-height: 1; }
.verify-left p { color: var(--cream-2); font-size: 15px; line-height: 1.5; }
.verify-form { margin-top: 26px; display: flex; gap: 0; }
.verify-form input { flex: 1; height: 56px; background: var(--asphalt-2); color: var(--cream); border: 3px solid var(--cream); border-right: none; padding: 0 16px; font-family: "JetBrains Mono", monospace; font-size: 16px; letter-spacing: 0.1em; }
.verify-form input::placeholder { color: #6a624a; }
.verify-form button { height: 56px; padding: 0 22px; background: var(--signal-green); color: var(--ink); border: 3px solid var(--cream); font-family: "Bungee", sans-serif; font-size: 14px; cursor: pointer; }
.verify-right { padding: 40px; background: var(--asphalt-2); }
.verify-status { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
.verify-dot { width: 16px; height: 16px; border-radius: 50%; background: var(--signal-green); box-shadow: 0 0 0 4px rgba(46, 200, 102, 0.25); animation: pulse 1.6s ease-in-out infinite; }
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(46, 200, 102, 0.25); }
  50% { box-shadow: 0 0 0 10px rgba(46, 200, 102, 0.05); }
}
.verify-status b { font-family: "Bungee", sans-serif; font-size: 18px; color: var(--signal-green); }
.verify-status span { font-family: "JetBrains Mono", monospace; font-size: 12px; color: var(--cream-2); }

.verify-result { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 24px; font-family: "JetBrains Mono", monospace; font-size: 13px; }
.verify-result .k { color: var(--cream-2); font-size: 10px; text-transform: uppercase; margin-bottom: 2px; }
.verify-result .v { color: var(--cream); font-weight: 600; }
.verify-result .v.acc { color: var(--sign-yellow); }
.verify-result .v.ok { color: var(--signal-green); }
.verify-hash { grid-column: 1 / -1; margin-top: 10px; padding-top: 14px; border-top: 2px dashed #3a3528; color: var(--cream-2); font-size: 11px; word-break: break-all; }

/* MARQUEE */
.marquee { background: var(--ink); color: var(--sign-yellow); border-top: 4px solid var(--ink); border-bottom: 4px solid var(--ink); overflow: hidden; padding: 18px 0; }
.marquee-track { display: flex; gap: 50px; animation: scroll 30s linear infinite; white-space: nowrap; width: max-content; }
.marquee-track span { font-family: "Bungee", sans-serif; font-size: 22px; }
.marquee-track i { color: var(--signal-red); font-style: normal; }
@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* FOOTER */
footer.foot { background: var(--ink); color: var(--cream); padding: 70px 0 30px; border-top: 6px solid var(--sign-yellow); }
.foot-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 50px; }
.foot h5 { font-family: "Bungee", sans-serif; font-size: 14px; margin: 0 0 16px; color: var(--sign-yellow); }
.foot ul { list-style: none; padding: 0; margin: 0; }
.foot ul li { padding: 4px 0; font-size: 14px; }
.foot ul li a { color: var(--cream); text-decoration: none; }
.foot ul li a:hover { color: var(--sign-yellow); }
.foot-bot { border-top: 1px solid #3a3528; margin-top: 50px; padding-top: 24px; display: flex; justify-content: space-between; font-family: "JetBrains Mono", monospace; font-size: 11px; color: var(--cream-2); }
.foot-brand-blurb { font-size: 14px; line-height: 1.6; color: var(--cream-2); margin: 14px 0 0; }
</style>
