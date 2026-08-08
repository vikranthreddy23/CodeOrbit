import { ArrowUpRight, MessageCircle, Zap, Rocket, Trophy, Code2 } from "lucide-react";

const WHATSAPP_NUMBER = "918951865075";
const waLink = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const bookMsg =
  "Hey CodeOrbit! I want to book a FREE demo for your DSA cohort. Hit me back with a slot 🚀";

/* Brutalist button — thick border + offset shadow */
const brutalBtn =
  "inline-flex items-center gap-2 font-bold border-[3px] border-black bg-white text-black px-6 py-3.5 shadow-[6px_6px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all";

const monoStyle = { fontFamily: "'JetBrains Mono', monospace" };
const displayStyle = { fontFamily: "'Archivo Black', sans-serif" };
const bodyStyle = { fontFamily: "'Space Grotesk', sans-serif" };

/* ------------------------------- NAV ------------------------------- */
const Nav = () => (
  <header
    data-testid="bl-nav"
    className="fixed top-0 left-0 w-full z-50 bg-[#faff00] border-b-[3px] border-black"
  >
    <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
      <a href="#top" className="text-xl md:text-2xl text-black" style={displayStyle}>
        CODE<span className="bg-black text-[#faff00] px-1.5">/</span>ORBIT
      </a>
      <nav className="hidden md:flex items-center gap-6">
        {["Mentors", "Curriculum", "Reviews"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-[11px] tracking-[0.15em] uppercase font-bold text-black hover:bg-black hover:text-[#faff00] px-2 py-1 transition-colors"
            style={monoStyle}
          >
            {l}
          </a>
        ))}
      </nav>
      <a
        data-testid="bl-nav-cta"
        href={waLink(bookMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="border-[3px] border-black bg-white px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-bold shadow-[4px_4px_0_0_#000] hover:shadow-[1px_1px_0_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
        style={monoStyle}
      >
        Book Demo →
      </a>
    </div>
  </header>
);

/* ------------------------------- HERO ------------------------------- */
const Hero = () => (
  <section
    id="top"
    className="relative pt-32 md:pt-40 pb-20 border-b-[3px] border-black"
    style={{ backgroundColor: "#faff00", ...bodyStyle }}
  >
    {/* Dotted pattern overlay */}
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
    <div className="relative max-w-7xl mx-auto px-5 md:px-8">
      {/* Tag stickers */}
      <div className="flex flex-wrap gap-3 mb-8">
        <span
          className="inline-flex items-center gap-2 border-[3px] border-black bg-white px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-bold shadow-[4px_4px_0_0_#000]"
          style={monoStyle}
        >
          <Zap className="w-3 h-3" /> Cohort 07 — Live
        </span>
        <span
          className="inline-flex items-center gap-2 border-[3px] border-black bg-[#ff3d81] text-white px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-bold shadow-[4px_4px_0_0_#000]"
          style={monoStyle}
        >
          Only 12 seats left
        </span>
      </div>

      <h1
        className="text-[64px] sm:text-[100px] lg:text-[160px] leading-[0.85] tracking-[-0.03em] text-black uppercase"
        style={displayStyle}
      >
        Crack
        <br />
        <span className="inline-block bg-black text-[#faff00] px-4 -skew-x-6">DSA</span>
        <span className="inline-block">.</span>
        <br />
        Land the job.
      </h1>

      <div className="mt-10 grid grid-cols-12 gap-6">
        <p
          className="col-span-12 md:col-span-6 text-black text-lg md:text-xl leading-relaxed font-medium"
          style={bodyStyle}
        >
          DSA mentoring so good it feels illegal. Taught by engineers currently
          shipping at{" "}
          <span className="bg-black text-white px-1.5">Amazon</span>,{" "}
          <span className="bg-black text-white px-1.5">Uber</span>, and{" "}
          <span className="bg-black text-white px-1.5">Adobe</span>. No fluff.
          Just wins.
        </p>
        <div className="col-span-12 md:col-span-6 flex flex-col md:items-end gap-3">
          <a
            data-testid="bl-hero-primary"
            href={waLink(bookMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${brutalBtn} bg-[#3b82ff] text-white`}
            style={monoStyle}
          >
            <span className="text-[11px] tracking-[0.18em] uppercase">
              Book a free demo
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#curriculum"
            className={`${brutalBtn}`}
            style={monoStyle}
          >
            <span className="text-[11px] tracking-[0.18em] uppercase">
              See what you&apos;ll learn
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* --------------------------- MENTOR TAPE --------------------------- */
const MentorTape = () => (
  <section
    id="mentors"
    className="bg-black text-[#faff00] py-6 border-b-[3px] border-black overflow-hidden"
  >
    <div
      className="flex items-center gap-12 whitespace-nowrap animate-marquee"
      style={{ ...monoStyle, fontSize: 20 }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center gap-12 shrink-0">
          <span className="font-bold tracking-widest">AMAZON</span>
          <span>✦</span>
          <span className="font-bold tracking-widest">UBER</span>
          <span>✦</span>
          <span className="font-bold tracking-widest">ADOBE</span>
          <span>✦</span>
          <span className="font-bold tracking-widest">GOOGLE</span>
          <span>✦</span>
          <span className="font-bold tracking-widest">MICROSOFT</span>
          <span>✦</span>
        </div>
      ))}
    </div>
  </section>
);

/* --------------------------- CURRICULUM --------------------------- */
const Curriculum = () => {
  const cards = [
    {
      icon: <Code2 className="w-7 h-7" />,
      tag: "01",
      title: "Arrays & Strings",
      desc: "Two pointers. Sliding window. Prefix sums.",
      bg: "bg-white",
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      tag: "02",
      title: "Trees & Graphs",
      desc: "BFS. DFS. Topological sort. LCA.",
      bg: "bg-[#c4ff00]",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      tag: "03",
      title: "Dynamic Programming",
      desc: "Memo. Tabulation. State compression.",
      bg: "bg-[#3b82ff] text-white",
    },
    {
      icon: <Trophy className="w-7 h-7" />,
      tag: "04",
      title: "System Design",
      desc: "Rate limiters. Caches. Sharding.",
      bg: "bg-[#ff3d81] text-white",
    },
  ];
  return (
    <section
      id="curriculum"
      className="py-24 md:py-32 border-b-[3px] border-black"
      style={{ backgroundColor: "#fef9e7", ...bodyStyle }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div
              className="inline-block bg-black text-[#faff00] px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-bold mb-5"
              style={monoStyle}
            >
              // 02 THE STACK
            </div>
            <h2
              className="text-5xl md:text-7xl text-black uppercase leading-[0.9]"
              style={displayStyle}
            >
              What you&apos;ll
              <br />
              actually learn.
            </h2>
          </div>
          <p className="max-w-xs text-black font-medium text-lg">
            14 weeks. 4 modules. 400+ problems. Zero YouTube-length lectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <article
              key={c.tag}
              data-testid={`bl-card-${c.tag}`}
              className={`${c.bg} border-[3px] border-black p-6 shadow-[8px_8px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-[5px] hover:translate-y-[5px] transition-all min-h-[220px] flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between">
                {c.icon}
                <span
                  className="text-[11px] tracking-[0.25em] uppercase font-bold"
                  style={monoStyle}
                >
                  {c.tag}
                </span>
              </div>
              <div>
                <h3
                  className="text-2xl uppercase leading-tight mt-6"
                  style={displayStyle}
                >
                  {c.title}
                </h3>
                <p className="mt-2 font-medium text-sm">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----------------------------- STATS ----------------------------- */
const Stats = () => (
  <section className="border-b-[3px] border-black bg-white py-16">
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x-[3px] divide-black border-[3px] border-black shadow-[8px_8px_0_0_#000]">
      {[
        ["400+", "PROBLEMS"],
        ["92%", "PLACED"],
        ["1:8", "RATIO"],
        ["14w", "COHORT"],
      ].map(([v, l], i) => (
        <div
          key={l}
          className={`p-6 md:p-8 text-center ${i === 1 ? "bg-[#faff00]" : i === 3 ? "bg-[#c4ff00]" : "bg-white"}`}
        >
          <div className="text-5xl md:text-6xl text-black" style={displayStyle}>
            {v}
          </div>
          <div className="mt-2 text-[10px] tracking-[0.25em] uppercase font-bold" style={monoStyle}>
            {l}
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* -------------------------- TESTIMONIALS -------------------------- */
const Reviews = () => {
  const list = [
    {
      quote: "Brutal mocks. Amazon-level feedback. I stopped guessing.",
      name: "ANANYA R.",
      role: "SDE @ Microsoft",
      bg: "bg-[#faff00]",
    },
    {
      quote: "Grinding LeetCode alone was killing me. DP finally clicked here.",
      name: "ROHAN K.",
      role: "SDE-2 @ Flipkart",
      bg: "bg-white",
    },
    {
      quote: "My Uber mentor reviewed every submission LINE BY LINE.",
      name: "PRIYA S.",
      role: "SWE @ Atlassian",
      bg: "bg-[#3b82ff] text-white",
    },
  ];
  return (
    <section
      id="reviews"
      className="py-24 md:py-32 border-b-[3px] border-black"
      style={{ backgroundColor: "#fef9e7", ...bodyStyle }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div
          className="inline-block bg-black text-[#faff00] px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-bold mb-5"
          style={monoStyle}
        >
          // 03 REAL PEOPLE
        </div>
        <h2
          className="text-5xl md:text-7xl text-black uppercase leading-[0.9] mb-16"
          style={displayStyle}
        >
          They shipped.
          <br />
          You&apos;re next.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((t, i) => (
            <article
              key={i}
              data-testid={`bl-review-${i}`}
              className={`${t.bg} border-[3px] border-black p-7 shadow-[8px_8px_0_0_#000] flex flex-col`}
            >
              <div className="text-4xl mb-4" style={displayStyle}>
                &ldquo;
              </div>
              <p className="text-lg font-medium leading-snug mb-8 flex-1">
                {t.quote}
              </p>
              <div className="pt-4 border-t-[3px] border-black" style={monoStyle}>
                <div className="text-sm font-bold tracking-wider">{t.name}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase mt-1 opacity-70">
                  {t.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------ CTA ------------------------------ */
const CTA = () => (
  <section
    className="py-24 md:py-32 relative overflow-hidden"
    style={{ backgroundColor: "#faff00" }}
  >
    <div className="absolute inset-0 opacity-30 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
    <div className="relative max-w-7xl mx-auto px-5 md:px-8">
      <div
        className="inline-block bg-black text-[#faff00] px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-bold mb-6"
        style={monoStyle}
      >
        // 04 LET&apos;S TALK
      </div>
      <h2
        className="text-6xl sm:text-8xl md:text-[160px] uppercase leading-[0.85] text-black"
        style={displayStyle}
      >
        Book.
        <br />
        A. Free.
        <br />
        <span className="bg-black text-[#faff00] px-4 -skew-x-6 inline-block">
          Demo.
        </span>
      </h2>
      <p className="mt-10 text-black text-xl font-medium max-w-lg" style={bodyStyle}>
        30 minutes. Zero pressure. Meet a mentor, see the syllabus, ask us
        anything.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          data-testid="bl-cta-primary"
          href={waLink(bookMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${brutalBtn} bg-black text-[#faff00]`}
          style={monoStyle}
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs tracking-[0.18em] uppercase">
            Chat on WhatsApp
          </span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto px-5 md:px-8 mt-24 pt-6 border-t-[3px] border-black flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="text-black font-bold text-lg" style={displayStyle}>
        CODE/ORBIT © {new Date().getFullYear()}
      </div>
      <div
        className="text-[10px] tracking-[0.25em] uppercase text-black font-bold"
        style={monoStyle}
      >
        Made for people who ship
      </div>
    </div>
  </section>
);

/* ------------------------------ PAGE ------------------------------ */
export default function StyleBold() {
  return (
    <div
      data-testid="style-bold-page"
      className="min-h-screen"
      style={{ backgroundColor: "#fef9e7", color: "#0a0a0a" }}
    >
      <Nav />
      <Hero />
      <MentorTape />
      <Curriculum />
      <Stats />
      <Reviews />
      <CTA />
    </div>
  );
}
