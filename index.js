/* ===== Contact form (preserves your backend call) ===== */
async function postMessage(e) {
    // play nice with inline onclicks and modern listeners
    if (e && typeof e.preventDefault === "function") e.preventDefault();
  
    // 获取用户输入的数据
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageContent = document.getElementById('messageContent').value;
  
    try {
      // 使用fetch API发送数据到后端
      const response = await fetch('http://localhost:5000/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: messageContent }),
      });
  
      const responseData = await response.json();
  
      if (response.ok && responseData.status === 'success') {
        alert('Message sent successfully!');
        // 清空表单
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('messageContent').value = '';
      } else {
        alert('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to send message.');
    }
  }
  
  /* =======================================================
     Questioning Equity: card list + full-page view (hash router)
     No globals leaked. No framework. No drama.
  ========================================================= */
  (function () {
    const posts = [
      {
        slug: "on-questioning-equity",
  title: "On “Questioning Equity”",
  date: "August 17, 2025",
  minutes: 12,
  tags: ["essay", "Questioning Equity", "AI", "education"],
  excerpt:
    "The deepest divide in AI isn’t access. It’s the capacity to ask useful, higher-order questions — and that gap is widening.",
  content: `
    <h2>Introduction</h2>
    <p>In the summer of 2025, I stumbled into a discovery that feels both obvious and enormous: the greatest inequity in AI isn’t about access, it’s about use. I’m even more excited that it comes with a name: Questioning Equity.</p>
    <p>I’ve been buzzing for days. The world has been fixated on the split between children who can use AI to learn better and those who can’t access it at all. What I see is different: among the vast majority of people who do have AI, most only manage basic back-and-forth, while a smaller group has become professional-level users, drawing deep, multi-dimensional benefits. If this keeps up, already advantaged kids will grow ten times faster, compounding knowledge and skill, while the “majority” keep falling behind, drifting from disadvantaged to permanently sidelined. It’s a thrilling realization. It’s also a sad story.</p>

    <h2>A sad story</h2>
    <p>I flew back to Beijing from New Jersey for the summer. Between errands and jet lag, two problems kept ambushing me.</p>
    <p>First, the market cooled on our AI learning robot. Some parents were ecstatic at first, bought the device, then returned it. One apologized: “Sorry, my daughter’s in puberty. She just doesn’t want to study.”</p>
    <p>Second, I went back to the social welfare home where I volunteered last summer, working with 18 autistic young people, most a year or two older than me. I watched, I asked questions, I tried to teach them to use our AI robot to make stories, music, art, even short videos. I truly believed it would take just a handful of steps. I thought I knew them well. Maybe I was drunk on my faith in AI. I was certain I could at least teach their class monitor, the cleverest one, T.</p>
    <p>One day passed. Then two. I had to slow down, match his pace, protect his emotions. Break a sentence into pieces. Repeat one step many times. As of today, I still haven’t succeeded.</p>
    <p>I kept thinking back to a trip, right before last Lunar New Year, to Mengjin in Henan. We brought robots with simple “digital avatars” and donated them to left-behind children. The kids were delighted. They uploaded photos of parents who were working far from home and couldn’t come back for the holiday. Seeing a parent’s face on the screen say, in English, “I love you, my dear kid,” was electric.</p>
    <p>There was a girl, X, unusually fair for eleven, huge dark eyes, beautiful. She rarely spoke; when she had to, she’d smile first and half-cover her mouth, voice small and low. Her mother had passed away. Her father drives ride-hail in another city and refused to come home even for the New Year. She generated a digital avatar of her grandmother. We secretly wondered whether, after we left, she might upload her mother’s photo and talk to her in whispers.</p>
    <p>But there was another set of moments we’ve replayed for half a year: after the children created these family avatars, we told them, gently, they could talk about anything. Chat in English daily to practice. Ask any question. Share whatever was on their minds. Bring homework problems. We kept our tone soft, careful not to disturb their feelings. And yet, in front of us, five children were almost all… silent. They didn’t know what to say to a digital mother or father.</p>
    <p>Only one, the sharpest boy, Y, a fast-talking ten-year-old who lives with his grandfather, opened the robot quickly, generated Grandpa, and fired two questions: “Why are apples sweet?” “Why do sunflowers face the sun?” We were astonished. What a bright kid, we thought. He will reap so much from this machine.</p>
    <p>But those two questions kept echoing in me. After what I witnessed at the welfare home, where some kids seemed even more adrift in front of AI, I finally understood why the echo bothered me. Our whole point in building this robot was to give every child a set of wings. I’ll say it plainly: our dream is to leverage AI for educational equity. And yet the hardest question kept staring back:</p>
    <p><em>Can AI really deliver educational equity?</em></p>
    <p>Consider another scene. My little sister in Beijing’s Haidian District, the peak of China’s education pyramid. After finishing her daily bilingual public-speaking lesson with our robot, she sat cross-legged on the rug and briefed her digital teacher like a pint-sized director.</p>
    <p>“Help me optimize my summer schedule,” she said. “Two hours a day to review TOEFL, and I need to pre-study seventh-grade math. Stagger the sessions so I don’t burn out.” The AI produced a draft. She frowned. “The reading block doesn’t make sense. In the morning I want to focus on polynomial addition and subtraction. At noon you’ll be my TOEFL speaking examiner. In the afternoon we’ll do reading, and you’ll break down long, difficult sentences. Also, we still have to work on the song you and I are composing. Adjust it.”</p>
    <p>Give her three more months. She has four sci-fi novellas co-created with AI; last week she received the proofs for copyediting, with her name on the title page and a line that reads “Completed with AI.” She’ll ask the AI to map the structure of a medieval castle so she can write it accurately, to generate multiple plot arcs and then pick one to rewrite. She even wonders, “If the AI bubble-tea menu in ‘Future City’ were designed at the same level as Doubao, the app we use now, then what would make ‘Future City’ feel futuristic?”</p>
    <p>Two kids: one asking about the sweetness of apples in the cold, one orchestrating a summer of writing in a warm room. One treats AI as a talking encyclopedia and asks the most childlike questions, which, for a boy in a rigid system in rural Henan, may do almost nothing. The other treats AI as an end-to-end collaborator, assistant, and tutor across study and creation. What separates them isn’t access. Today’s tools live on every phone and are cheap to the point of free. The gap is whether they can ask the right questions. Useful questions. Questions that help them grow in full. Higher-order questions.</p>

    <h2>The invisible chasm</h2>
    <p>The sociologist Daniel Bell wrote in <em>The Coming of Post-Industrial Society</em> that each technological revolution redefines what counts as a “useful capability.” Steam power favored muscle. Electrification favored operational skill. In the age of AI, the most valuable ability may be shifting from “doing” to “asking.”</p>
    <p>AI is a well. If you know whether you’re fetching drinking water, washing something, or irrigating a field, it will deliver the water you need. If you don’t know what a well can do, or don’t know what you need, then a well is just a heavy stone by the road.</p>
    <p>At a private school in Hangzhou, a fifth-grade assignment was “use AI to design a community garden.” One boy asked, “When is the rainy season in Hangzhou? How do we design drainage so it won’t flood?” Then, “We have seniors and little kids in the neighborhood. Which plants are toxic and should be avoided?” Finally, “How do we make it beautiful and also encourage neighbors to help maintain it?” He wasn’t just using AI. He was solving a problem with AI at his side.</p>
    <p>In a county-level middle school in Yunnan, the scene was very different. In computer class, the teacher told students to use AI to look up the “significance of the 1911 Revolution.” Most copy-pasted, turned it in, and called it done. One student asked, “Then why didn’t the revolution fully succeed?” His desk mate nudged him: “The teacher didn’t ask that. Just finish and hand it in.”</p>
    <p>This difference isn’t about intelligence. It’s about the soil that grows questions. My cousin grew up trailing her mother, a journalist, and hearing at the dinner table, “How do you frame a question to dig toward the truth?” X’s grandmother repeats, “Listen in class. Don’t ask silly questions.” Some studies suggest that children in high-income families hear over 30 exploratory questions per hour from parents (“What do you think happens if…?”), while children in low-income families hear more directives (“Stop running.” “Eat now.”).</p>
    <p>The linguist Betty Hart’s famous “30-million-word gap” study found that by age four, children from poor families had heard 30 million fewer words than their wealthy peers. Today, the more lethal deficit may be a “30-million-question gap.” It’s not just fewer words; it’s far fewer chances to be guided into thinking, <em>What should I ask?</em></p>
    <p>As AI drives the cost of solving problems toward zero, the ability to pose problems becomes the new watershed. It’s like a race. One runner knows where the finish line is and can ask AI to optimize the route and breathing. The other doesn’t even know the direction of the finish line. The map AI hands over might as well be hieroglyphs.</p>

    <h2>Inequality, amplified</h2>
    <p>During the Industrial Revolution, people feared machines would take jobs. The real divide wasn’t “machine or no machine.” It was who learned to run the machine and who only fed cotton into it. Two generations later, the machine had nailed class in place.</p>
    <p>AI’s cruelty is its amplification. A child already good at learning can use AI to gather sources, practice reasoning, and create; the speedup might be tenfold. A child who doesn’t know how to learn may use AI to copy answers and outsource essays, standing still or sliding backward. It’s strapping rockets to the fast and ankle weights to the slow. A ten-meter gap becomes a thousand.</p>
    <p>Some data suggest students at elite American high schools are seven times more likely than their peers to use AI for genuinely creative learning. They use it to code, run research projects, simulate business plans. Students in ordinary schools use it mostly to get through assignments. This difference snowballs. Ask one good question today, make a bit of progress tomorrow, which teaches you how to ask a better question the day after. Meanwhile, those standing still grow less and less aware of what they don’t know.</p>
    <p>This is no longer the old “digital divide.” The first generation was device access. The second was user skills. The third is whether you can use AI to grow yourself: the Questioning Divide, and the fight for Questioning Equity. Yesterday people competed for land, then for knowledge. Now, for the right and the ability to ask.</p>
    <p>Last week in a startup incubator in Shenzhen, I met a 17-year-old who had used AI-generated code to build a campus used-book mini-app. He made more than 50,000 yuan in six months. He told me he didn’t know how to code at first, so he kept asking AI: “I want to build a mini-app. What’s the first thing to learn?” “What’s causing this error?” “How can I make the interface look better?” Back in his hometown, a cousin the same age left school after junior high to work. The only AI on his phone identifies songs in short videos. Among his coworkers, that already counts as “advanced AI use.”</p>
    <p>That’s when it hit me: the gap in questioning isn’t innate. A seed in snow can sprout given a little sun and rain. The trouble is that some seeds are tended in a greenhouse while others shiver in the wind, waiting for someone to teach them what to ask of spring.</p>
    <p>AI won’t deliver equality by itself, just as books don’t deliver knowledge by themselves. Real fairness isn’t getting AI into every child’s hands. It’s getting every child to ask and to dare to ask: why apples are sweet, why sunflowers track the light, how to make a life that stretches beyond the snow right in front of them.</p>
    <p><strong>AI can answer every question. It can never replace the soul that dares to ask.</strong></p>

    <h2>Postscript</h2>
    <p>A Chinese entrepreneur once said: “Ninety-five percent of people don’t know what they don’t know.” Among children facing AI, a large share — maybe the vast majority — have no goal they want AI to help them achieve. If you don’t know what you want, you can’t possibly know how to ask for it. The development of AI interaction skills depends heavily on early language environments, family investment, and exposure to technology.</p>
    <p>As the social sorting power of questioning grows, theories of educational equity have to bring this dimension to the center. The first digital divide focused on access. The second on skill. In the AI era we need a third digital divide: the Questioning Divide and a fight for Questioning Equity.</p>
    <p>Otherwise we spiral into a loop: educational advantage becomes economic advantage; educational disadvantage hardens into more disadvantage. Every technological shift concentrates resources in the hands of those already positioned to benefit. AI will not be an exception.</p>
    <p>I need to organize my thoughts. There’s so much to do.</p>
    <ul>
      <li>Most people now can use AI in some form.</li>
      <li>Their ability to use it varies wildly, producing huge differences in outcomes.</li>
      <li>Education and wealth/class already track each other; AI multiplies that correlation many times over.</li>
      <li>Class hardens: the children at the top of the world pull further ahead; those at the bottom fall further behind.</li>
      <li>I should write a full paper on this. I don’t have the time.</li>
    </ul>
    <p><em>Late night, August 17, 2025, Beijing</em></p>
  `
      },
      {
        slug: "small-lights",
  title: "Days in a teen mental-rehab center",
  date: "August 19, 2025",
  minutes: 7,
  tags: ["field notes", "mental health", "education"],
  excerpt:
    "Field notes from a summer in an adolescent mental-health center: progress measured in eyelashes, breaths, and the one word spoken at the right time.",
  content: `
    <p><i>Summer 2025 was overbooked, but I kept returning to the adolescent mental rehabilitation center in Beijing where I’d interned before. What follows isn’t diagnosis or argument, just field notes: the texture of days measured in tiny steps, the kind that never make headlines and still matter.</i></p>

    <p>Some children look no different at first glance. Only when they speak does it feel as if someone pressed slow motion. Their eyes hover in midair for a long while before finding a landing spot. When they pass an object, their fingers curl and uncurl several times in the air before they can hold it steady.</p>

    <p>Others remain silent, as if sealed beneath an invisible glass bell. No matter how many small stories I tell, crouched beside them, their gaze stays pinned to the floor by their toes. Only when sunlight slips through the blinds and scatters onto the tiles do their lashes give the slightest tremor.</p>

    <p>The corridors are punctured by sudden bursts of laughter. A few boys who love to grin will stare up at the ceiling, mouths stretched almost to their ears, as if they’ve spotted a secret only they can decode. Passing them, you sometimes hear a private murmur, half words to the air: loops of numbers, splinters of phrases, a tape that keeps catching in the machine.</p>

    <p>Daily care unfolds like a puzzle you take apart into patient pieces. Most instructions need to be broken down to their smallest joints. If you want someone to fetch a coat, you can’t say “Get your coat.” You take a hand and say, “Stand up.” Once they’re steady, you guide them to the lockers. You point down the rows: “Which one is yours?” After a finger points or a muffled sound confirms it, you teach the turn of the key, the pull of the door. Coat in hand, you still have to remind, “Close the locker,” and then escort them back to class, step by step. What takes seconds elsewhere can take ten minutes here.</p>

    <p>There are always a few “little grown-ups” in the crowd. The boy who always misbuttons his shirt never misses a classmate’s routine; at naptime he taps shoulders one by one. The ponytailed girl outruns me at arithmetic and every morning helps the teacher hand out meal boxes, lining up the spoons with perfect care. They are small fulcrums, steadying this pocket-sized world in their own way.</p>

    <p>Inattention is the baseline. During a movie, someone will stand and circle the screening room. Someone else will drift into a trance at a bright fleck on the screen. Another will flip a water-bottle lid open and shut, open and shut. The teachers chant, “Walk when you walk, talk when you talk,” because two streams of input at once are too much. Walking while speaking can make a body freeze. Standing still to speak makes a foot start drawing circles on the floor.</p>

    <p>Speech comes in ciphers. The tall boy delivers every sentence like a chant that rattles the eardrums. The girl in the blue jacket needs half a minute of silence before her throat can push out a few words, each one like something dug out of sand. The boy who never lifts his head knots his tongue so tightly you have to lean in and guess. The round-faced girl waves every morning and says “Good morning” seven or eight times in a row, each one as earnest as the last. Some children speak like machines, their tone flat as paper. Ask “Are you hungry?” and you get back the very same contour, “Are you hungry,” and for a second you can’t tell if it’s a question or a statement.</p>

    <p>Emotional minefields detonate without warning. A boy quietly drawing may snap a pencil and rip his notebook to shreds, muttering blurred curses. A girl who was laughing and clapping a minute ago may suddenly shove someone, her eyes bristling with the irritation of being startled. You can’t push back. We’re taught to squat to eye level and repeat, “Slowly, it’s okay,” until they deflate like balloons. Then you wipe the tears from their cheeks.</p>

    <p>Days pass in this delicate, particular rhythm. Some of these teenagers may never master elaborate social codes or live entirely on their own. Even so: when the boy who misbuttons his shirt hands a coat, correctly, to a classmate who runs cold; when the silent girl points to a rainbow outside the window and for the first time says, “Pretty,” patience finally lands somewhere solid. Here, growth is never an arrow climbing a chart. It’s a string of tiny moments, like winter light escaping through a crack. Faint, and indisputably real.</p>
  `
      },
      {
        slug: "question-aware-agent-for-ibot",
        title: "Designing a Question-Aware Agent for iBot",
        date: "July 28, 2025",
        minutes: 8,
        tags: ["agents", "product", "iBot"],
        excerpt:
          "The agent isn’t smart because it answers. It’s smart because it knows what to ask next.",
        content: `
          <p>Architecture in one breath: detect intent → map to a problem tree → propose next questions 
          → run tool calls → summarize deltas → ask again. The loop centers on uncertainty reduction, 
          not word count.</p>
  
          <h3>Signals that matter</h3>
          <ul>
            <li>Latency to first meaningful sub-question</li>
            <li>Diversity of lenses tried (example, counterexample, analogy, constraint)</li>
            <li>Quality of exit criteria (“good enough” tests)</li>
          </ul>
  
          <p>Ship it small: start with two domains, instrument everything, and promote the patterns that 
          shorten the distance from “stuck” to “moving.”</p>
        `
      }
    ];
  
    const listEl = document.getElementById("qe-blog-list");
    const viewEl = document.getElementById("qe-blog-view");
    const qeSection = document.getElementById("questioning-equity");
  
    function renderList() {
      if (!listEl || !viewEl) return;
  
      listEl.innerHTML = posts.map(p => `
        <article class="blog-card" data-slug="${p.slug}" tabindex="0" role="button" aria-label="Open post: ${p.title}">
          <h3>${p.title}</h3>
          <div class="meta">${p.date} · ${p.minutes} min read</div>
          <p>${p.excerpt}</p>
        </article>
      `).join("");
  
      listEl.classList.remove("hidden");
      viewEl.classList.add("hidden");
  
      listEl.querySelectorAll(".blog-card").forEach(card => {
        const slug = card.getAttribute("data-slug");
        const open = () => (location.hash = `#post/${slug}`);
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
        });
      });
    }
  
    function renderPost(slug) {
      if (!listEl || !viewEl) return;
  
      const post = posts.find(p => p.slug === slug);
      if (!post) { renderList(); return; }
  
      document.title = `${post.title} — Shaoheng Ren`;
  
      const tags = post.tags.map(t => `<span class="blog-tag">#${t}</span>`).join("");
      viewEl.innerHTML = `
        <button class="btn_one back" id="qe-back" aria-label="Back to posts">← Back</button>
        <h1>${post.title}</h1>
        <div class="meta">${post.date} · ${post.minutes} min read</div>
        <article class="blog-body">${post.content}</article>
        <div class="blog-tags" aria-label="tags">${tags}</div>
      `;
  
      listEl.classList.add("hidden");
      viewEl.classList.remove("hidden");
  
      const back = document.getElementById("qe-back");
      if (back) {
        back.onclick = function () {
          location.hash = "#questioning-equity";
          // Let the hashchange handler flip views
        };
      }
  
      // bring the section into view so it feels like an SPA
      if (qeSection) {
        const top = qeSection.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  
    function router() {
      const m = location.hash.match(/^#post\/([a-z0-9\-]+)/i);
      if (m) return renderPost(m[1]);
      renderList();
    }
  
    document.addEventListener("DOMContentLoaded", () => {
      if (listEl && viewEl) {
        router();
        window.addEventListener("hashchange", router);
      }
    });
  })();

  /* =======================================================
     Page dynamics: typewriter hero, glassy header, scroll
     progress, reveal-on-scroll, back-to-top.
  ========================================================= */
  (function () {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* --- Typewriter tagline --- */
    function typewriter() {
      const el = document.getElementById("typed-text");
      if (!el) return;
      const phrases = [
        "building an AI robot.",
        "writing poems & fairy tales.",
        "blasting Led Zeppelin.",
        "asking better questions."
      ];
      if (reduceMotion) { el.textContent = phrases[0]; return; }

      let phrase = 0, char = 0, deleting = false;
      function tick() {
        const current = phrases[phrase];
        el.textContent = current.slice(0, char);
        let delay = deleting ? 45 : 95;
        if (!deleting && char === current.length) {
          delay = 2200; deleting = true;
        } else if (deleting && char === 0) {
          deleting = false;
          phrase = (phrase + 1) % phrases.length;
          delay = 400;
        } else {
          char += deleting ? -1 : 1;
        }
        setTimeout(tick, delay);
      }
      tick();
    }

    /* --- Header + progress + back-to-top on scroll --- */
    function onScroll() {
      const header = document.getElementById("header");
      const progress = document.getElementById("scroll-progress");
      const toTop = document.getElementById("back-to-top");
      const y = window.scrollY;

      if (header) header.classList.toggle("scrolled", y > 60);
      if (toTop) toTop.classList.toggle("show", y > window.innerHeight * 0.8);
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
      }
    }

    /* --- Reveal sections as they enter the viewport --- */
    function setupReveal() {
      const targets = document.querySelectorAll(".reveal");
      if (!targets.length) return;
      if (reduceMotion || !("IntersectionObserver" in window)) {
        targets.forEach(t => t.classList.add("visible"));
        return;
      }
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      targets.forEach(t => io.observe(t));
    }

    document.addEventListener("DOMContentLoaded", () => {
      typewriter();
      setupReveal();
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });

      const toTop = document.getElementById("back-to-top");
      if (toTop) {
        toTop.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        });
      }
    });
  })();
