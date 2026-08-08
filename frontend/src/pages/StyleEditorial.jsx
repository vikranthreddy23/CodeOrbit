import { ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918951865075"; // CodeOrbit WhatsApp
const waLink = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const bookMsg = "Hi, I would like to learn more about CodeOrbit.";

/* ---------------------------------- NAV ---------------------------------- */
const Nav = () => (
  <header
    data-testid="ed-nav"
    className="fixed top-0 left-0 w-full z-50 bg-[#f7f3ea]/85 backdrop-blur-xl border-b border-black/8"
  >
    <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
      <a
        href="#top"
        className="text-2xl md:text-[28px] tracking-[-0.01em]"
        style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
      >
        Code<span className="text-[#c2410c]">Orbit</span>
      </a>
      <nav className="hidden md:flex items-center gap-9">
        {[
          ["Mentors", "mentors"],
          ["Roadmap", "roadmap"],
          ["Voices", "voices"],
        ].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-[12px] tracking-[0.2em] uppercase text-black font-bold hover:text-[#c2410c] transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {label}
          </a>
        ))}
      </nav>
      <a
        href={waLink(bookMsg)}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="ed-nav-cta"
        className="text-[11px] tracking-[0.15em] uppercase border-b-2 border-black pb-0.5 hover:text-[#c2410c] hover:border-[#c2410c] transition-colors"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Book demo →
      </a>
    </div>
  </header>
);

/* --------------------------------- HERO ---------------------------------- */
const Hero = () => (
  <section
    id="top"
    className="relative pt-40 md:pt-48 pb-24 overflow-hidden"
    style={{ backgroundColor: "#f7f3ea" }}
  >
    {/* Hero content */}
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <h1
            className="text-[64px] sm:text-[92px] lg:text-[128px] leading-[0.88] tracking-[-0.03em] text-black"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
          >
            The quiet art
            <br />
            of <span className="italic font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>solving hard</span>
            <br />
            problems.
          </h1>
        </div>
        <div className="col-span-12 md:col-span-4 md:pb-4">
          <p className="text-zinc-700 text-[15px] leading-relaxed max-w-sm">
            A slow, deliberate DSA mentoring program taught by senior engineers
            from <span className="italic text-black">Amazon</span>,{" "}
            <span className="italic text-black">Uber</span>, and{" "}
            <span className="italic text-black">Salesforce</span>. No grind
            culture. Only depth.
          </p>
          <div className="mt-8 flex flex-col gap-2">
            <a
              href={waLink(bookMsg)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="ed-hero-primary"
              className="group inline-flex items-center justify-between bg-black text-white px-6 py-4 hover:bg-[#c2410c] transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Book a free demo
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center justify-between border border-black/25 text-black px-6 py-4 hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              See the roadmap
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* -------------------------------- MENTORS -------------------------------- */
const Mentors = () => (
  <section
    id="mentors"
    className="border-y border-black/10 py-16"
    style={{ backgroundColor: "#f7f3ea" }}
  >
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-6">
          <p
            className="text-black text-2xl md:text-3xl leading-[1.2]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
          >
            Mentored by{" "}
            <span className="italic font-light">working</span> engineers.
          </p>
          <p className="mt-4 text-zinc-700 text-[15px] leading-relaxed max-w-lg">
            <span className="text-black font-semibold">6+ years</span> of
            hands-on mentoring.{" "}
            <span className="text-black font-semibold">2,000+ students</span>{" "}
            guided into offers at{" "}
            <span className="text-black">Adobe</span>,{" "}
            <span className="text-black">Swiggy</span>,{" "}
            <span className="text-black">Warner Bros</span>,{" "}
            <span className="text-black">Amazon</span>,{" "}
            <span className="text-black">Microsoft</span> — and many more.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-wrap items-center justify-around gap-10">
          {[
            { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
            { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
            { name: "Salesforce", url: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
          ].map((l) => (
            <img
              key={l.name}
              src={l.url}
              alt={l.name}
              className="h-8 md:h-10 w-auto opacity-100 hover:opacity-90 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* -------------------------------- ROADMAP -------------------------------- */
const Roadmap = () => {
  const steps = [
    {
      no: "01",
      title: "Basics of programming",
      desc: "Start from zero. No prerequisites required. Variables, loops, functions, and how a computer actually thinks. If you can type, you can begin.",
    },
    {
      no: "02",
      title: "Get mastered in programming",
      desc: "Recursion, complexity, clean code, debugging instincts. Genuine fluency — the kind that makes hard problems feel approachable, not scary.",
    },
    {
      no: "03",
      title: "DSA basics",
      desc: "Arrays, strings, linked lists, stacks, queues, trees, graphs. Learn each data structure until you can draw it, code it, and reason about it in your sleep.",
    },
    {
      no: "04",
      title: "Advanced DSA problems",
      desc: "Dynamic programming, greedy, backtracking, graph algorithms. The patterns behind every hard interview question — taught until they stop feeling like magic.",
    },
  ];
  return (
    <section id="roadmap" className="py-28 md:py-36" style={{ backgroundColor: "#f7f3ea" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-6">
            <h2
              className="text-4xl md:text-6xl leading-[0.95] tracking-tight text-black"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
            >
              A path from
              <br />
              <span className="italic font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>
                zero to fluent.
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
            <p className="text-zinc-700 text-[15px] leading-relaxed">
              <span className="text-black font-semibold">No prerequisites required.</span>{" "}
              You don&apos;t need a computer science background or a single line
              of code. We start from first principles and take you all the way
              to solving advanced interview problems.
            </p>
          </div>
        </div>

        <div className="border-t border-black/15">
          {steps.map((s) => (
            <article
              key={s.no}
              data-testid={`ed-roadmap-${s.no}`}
              className="grid grid-cols-12 gap-6 border-b border-black/15 py-8 md:py-10 group hover:bg-black/[0.03] transition-colors"
            >
              <div
                className="col-span-2 md:col-span-1 text-[11px] tracking-[0.2em] uppercase text-zinc-500 pt-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.no}
              </div>
              <h3
                className="col-span-10 md:col-span-4 text-2xl md:text-3xl text-black"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
              >
                {s.title}
              </h3>
              <p className="col-span-12 md:col-span-6 md:col-start-7 text-zinc-700 text-[15px] leading-relaxed">
                {s.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Outcome card */}
        <div className="mt-14 md:mt-16 border border-black/20 bg-white/50 p-8 md:p-12">
          <div
            className="text-[10px] tracking-[0.3em] uppercase text-[#c2410c] mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            The outcome
          </div>
          <p
            className="text-2xl md:text-4xl leading-[1.15] tracking-tight text-black max-w-4xl"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
          >
            By the end of the course, you&apos;ll have solved{" "}
            <span className="italic font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>
              400+ problems
            </span>{" "}
            on LeetCode, mastered every DSA pattern, and can solve them
            efficiently — even under time pressure.
          </p>
        </div>
      </div>
    </section>
  );
};

/* --------------------------- BEYOND THE CODE ----------------------------- */
const Beyond = () => (
  <section
    id="edge"
    className="py-24 md:py-32 border-y border-black/10"
    style={{ backgroundColor: "#efe8db" }}
  >
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <h2
        className="text-4xl md:text-6xl leading-[0.95] tracking-tight text-black max-w-3xl mb-14"
        style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
      >
        The unfair
        <br />
        <span className="italic font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>
          advantage.
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <article
          data-testid="ed-edge-interview"
          className="border border-black/20 bg-white/60 p-8 md:p-10 flex flex-col"
        >
          <div
            className="text-[10px] tracking-[0.3em] uppercase text-[#c2410c] mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Interview craft
          </div>
          <h3
            className="text-2xl md:text-3xl text-black leading-[1.15] mb-4"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
          >
            Mentors who&apos;ve sat on the{" "}
            <span className="italic font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>
              other chair.
            </span>
          </h3>
          <p className="text-zinc-700 text-[15px] leading-relaxed">
            Every mentor has actively taken interviews at their company. You&apos;ll
            learn exactly how answers are scored, how the hiring bar is raised,
            and the small moves that decide between a{" "}
            <span className="text-black">hire</span> and a{" "}
            <span className="text-black">pass</span>.
          </p>
        </article>

        <article
          data-testid="ed-edge-referrals"
          className="border border-black/20 bg-white/60 p-8 md:p-10 flex flex-col"
        >
          <div
            className="text-[10px] tracking-[0.3em] uppercase text-[#c2410c] mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Resume &amp; referrals
          </div>
          <h3
            className="text-2xl md:text-3xl text-black leading-[1.15] mb-4"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
          >
            Get past{" "}
            <span className="italic font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>
              ATS.
            </span>{" "}
            Get into the room.
          </h3>
          <p className="text-zinc-700 text-[15px] leading-relaxed">
            We help you craft an ATS-friendly resume that survives automated
            filtering — and open doors through the{" "}
            <span className="text-black">mentor network</span> for direct
            referrals into top product companies.
          </p>
        </article>
      </div>
    </div>
  </section>
);

/* -------------------------- VOICES / ALUMNI ------------------------- */
const Voices = () => {
  const featured = [
    {
      name: "Vishnu",
      outcome: "Interning at",
      company: "Adobe Canada",
      link: "https://www.linkedin.com/in/vishnu-sai-reddy-3a9b5a243/",
    },
    {
      name: "Keerthana Palle",
      outcome: "Landed offer at",
      company: "Philips",
      link: "https://www.linkedin.com/in/keerthana-palle-198209247/",
    },
  ];

  const marquee = [
    {
      quote:
        "The mock interviews were brutal in the best way. My mentor walked me through exactly how the bar-raiser would score every answer.",
      name: "Ananya R.",
      role: "SDE, Microsoft",
    },
    {
      quote:
        "I had been grinding LeetCode alone for eight months. DP finally clicked, and the difference wasn't the content — it was the accountability.",
      name: "Rohan K.",
      role: "SDE-2, Flipkart",
    },
    {
      quote:
        "Small cohorts, insane feedback. My mentor reviewed every submission line by line. Never had that anywhere else.",
      name: "Priya S.",
      role: "SWE, Atlassian",
    },
    {
      quote:
        "Started with zero programming background. Six months later I was cracking dynamic programming problems in real interviews.",
      name: "Vikram T.",
      role: "SDE, Adobe",
    },
    {
      quote:
        "My mentor had actively taken interviews at his company. The way he broke down system design questions was unmatched.",
      name: "Sneha M.",
      role: "SDE, Amazon",
    },
    {
      quote:
        "The resume review alone landed me two more interviews than my previous version. Then referrals opened doors I couldn't reach on my own.",
      name: "Arjun P.",
      role: "SDE, Swiggy",
    },
    {
      quote:
        "I switched from marketing to software engineering. No CS degree. Just this program and a lot of stubbornness. Best decision of my career.",
      name: "Kritika N.",
      role: "SWE, Warner Bros",
    },
    {
      quote:
        "Consistent 1:1 feedback every week. Not a single moment where I felt lost or stuck without someone to walk me through it.",
      name: "Aditya R.",
      role: "Senior SDE, Microsoft",
    },
    {
      quote:
        "The mock interviews felt harder than the real one. When I sat down for my Amazon loop, it felt oddly familiar. Cleared five out of five rounds.",
      name: "Meera S.",
      role: "SDE-2, Amazon",
    },
  ];
  const doubled = [...marquee, ...marquee];

  return (
    <section
      id="voices"
      className="py-24 md:py-32 border-y border-black/10 overflow-hidden"
      style={{ backgroundColor: "#efe8db" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2
          className="text-4xl md:text-6xl leading-[0.95] tracking-tight text-black max-w-3xl mb-14 md:mb-16"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
        >
          Recent alumni.
          <br />
          <span className="italic font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Real offers.
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((a, i) => (
            <figure
              key={i}
              data-testid={`ed-alumni-${i}`}
              className="border border-black/20 bg-white/60 p-8 md:p-10 flex flex-col justify-between min-h-[240px] group hover:border-black/40 transition-colors"
            >
              <div
                className="text-[10px] tracking-[0.3em] uppercase text-[#c2410c]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {a.outcome}
              </div>
              <div className="mt-6">
                <div
                  className="text-3xl md:text-5xl text-black leading-[1.05] tracking-tight"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
                >
                  {a.company}
                </div>
                <figcaption
                  className="mt-4 pt-4 border-t border-black/20 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-black"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span>{a.name}</span>
                  {a.link && (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`ed-alumni-link-${i}`}
                      className="inline-flex items-center gap-1.5 hover:text-[#c2410c] transition-colors"
                    >
                      LinkedIn
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Divider label */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-20 md:mt-24 mb-8">
        <div
          className="text-[10px] tracking-[0.3em] uppercase text-[#c2410c] flex items-center gap-4"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="w-8 h-px bg-[#c2410c]" />
          More voices from the cohort
        </div>
      </div>

      {/* Moving banner */}
      <div className="relative group">
        <div
          data-testid="ed-voices-marquee"
          className="flex gap-5 md:gap-6 w-max animate-marquee-slow group-hover:[animation-play-state:paused]"
        >
          {doubled.map((t, i) => (
            <figure
              key={i}
              className="w-[320px] md:w-[380px] shrink-0 border border-black/20 bg-white/60 p-6 md:p-7 flex flex-col"
            >
              <blockquote
                className="text-black text-[15px] md:text-base leading-[1.55] mb-5 flex-1"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption
                className="pt-4 border-t border-black/20 text-[10px] tracking-[0.2em] uppercase text-zinc-600"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="text-black">{t.name}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-24 md:w-40 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #efe8db 0%, rgba(239,232,219,0) 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 md:w-40 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #efe8db 0%, rgba(239,232,219,0) 100%)",
          }}
        />
      </div>
    </section>
  );
};

/* ---------------------------- CTA / COLOPHON ----------------------------- */
const CTA = () => (
  <section
    id="contact"
    className="py-32 md:py-40 relative overflow-hidden"
    style={{ backgroundColor: "#f7f3ea" }}
  >
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <h2
        className="text-5xl sm:text-7xl md:text-[120px] leading-[0.9] tracking-[-0.02em] text-black mb-10"
        style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
      >
        Write to us.
        <br />
        <span className="italic font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>
          Or don&apos;t.
        </span>
      </h2>
      <p className="text-zinc-700 text-lg max-w-lg leading-relaxed mb-10">
        A 30-minute conversation with a mentor. No pitch. No pressure. Just an
        honest look at whether we&apos;re the right fit for you.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-3">
        <a
          href={waLink(bookMsg)}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="ed-cta-primary"
          className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 hover:bg-[#c2410c] transition-colors"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          <MessageCircle className="w-4 h-4" />
          Book a free demo
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
        </a>
      </div>
    </div>
  </section>
);

/* --------------------------------- PAGE ---------------------------------- */
export default function StyleEditorial() {
  return (
    <div
      data-testid="style-editorial-page"
      className="min-h-screen"
      style={{ backgroundColor: "#f7f3ea", color: "#0a0a0a" }}
    >
      <Nav />
      <Hero />
      <Mentors />
      <Roadmap />
      <Beyond />
      <Voices />
      <CTA />
    </div>
  );
}
