import { useState } from "react";
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
            of <span className="highlight-mark" style={{ fontFamily: "'Manrope', sans-serif" }}>solving hard</span>
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
            <div className="relative group/demo">
              <button
                type="button"
                className="w-full group inline-flex items-center justify-between bg-black text-white px-6 py-4 hover:bg-[#c2410c] transition-colors cursor-pointer"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                Book a free demo
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>
              <div className="hidden group-hover/demo:flex flex-col absolute top-full left-0 w-full z-20 border border-black/15 shadow-lg">
                <a
                  href={waLink(bookMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white px-6 py-3.5 hover:bg-green-50 transition-colors border-b border-black/10"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}
                >
                  💬 WhatsApp
                </a>
                <a
                  href="mailto:contactcodeorbit@gmail.com?subject=Book%20a%20Demo%20-%20CodeOrbit&body=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20the%20DSA%20mentoring%20program."
                  className="flex items-center gap-3 bg-white px-6 py-3.5 hover:bg-orange-50 transition-colors"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}
                >
                  ✉️ Email
                </a>
              </div>
            </div>
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

      <div className="mt-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, #0f766e 0%, #115e59 100%)" }}>
          <div className="p-7 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Free Workshop</span>
              <span className="text-white/70 text-[11px] font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Aug 20</span>
            </div>
            <h3 className="text-white text-[28px] font-extrabold leading-tight mb-3" style={{ fontFamily: "'Manrope', sans-serif" }}>
              DSA Workshop
            </h3>
            <p className="text-white/80 text-[13px] leading-relaxed mb-5" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Clear all your doubts. Understand what the course covers. Get a complete roadmap for cracking interviews at product-based companies.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Live Q&A", "Career Guidance", "Course Walkthrough"].map((t) => (
                <span key={t} className="bg-white/15 text-white text-[11px] font-medium px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-white/20 flex items-center gap-2">
              <a
                href="https://wa.me/918951865075?text=Hi%2C%20I%20want%20to%20register%20for%20the%20free%20DSA%20workshop."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-white text-[#0f766e] text-[11px] font-bold uppercase tracking-wider px-3 py-2.5 rounded-full hover:bg-green-100 transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                💬 WhatsApp
              </a>
              <a
                href="mailto:contactcodeorbit@gmail.com?subject=Register%20for%20DSA%20Workshop&body=Hi%2C%20I%20want%20to%20register%20for%20the%20free%20DSA%20workshop."
                className="flex-1 text-center bg-white text-[#0f766e] text-[11px] font-bold uppercase tracking-wider px-3 py-2.5 rounded-full hover:bg-orange-100 transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ✉️ Email
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 rounded-xl overflow-hidden border border-black/10" style={{ background: "#fff" }}>
          <div className="p-7">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#c2410c] mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>What you'll get</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <div className="text-2xl mb-2">💬</div>
                <h4 className="text-black text-[15px] font-bold mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>Live Doubt Clearing</h4>
                <p className="text-zinc-600 text-[12px] leading-relaxed">Ask anything about DSA, programming, or career paths. No question too basic or advanced.</p>
              </div>
              <div>
                <div className="text-2xl mb-2">📋</div>
                <h4 className="text-black text-[15px] font-bold mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>Course Walkthrough</h4>
                <p className="text-zinc-600 text-[12px] leading-relaxed">400+ problems, mock interviews, resume building & placement support — all explained.</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="text-black text-[15px] font-bold mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>Career Guidance</h4>
                <p className="text-zinc-600 text-[12px] leading-relaxed">Plan your prep timeline and get insider tips from engineers who've cracked it.</p>
              </div>
            </div>
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
            <span className="highlight-mark">working</span> engineers.
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
const RoadmapTopic = ({ title, subtopics }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/15">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 md:py-8 group hover:bg-black/[0.03] transition-colors px-2"
      >
        <h3
          className="text-xl md:text-2xl text-black text-left"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
        >
          {title}
        </h3>
        <span
          className="w-8 h-8 flex items-center justify-center border border-black/20 text-black text-lg font-light shrink-0 ml-4 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? `${subtopics.length * 48 + 24}px` : "0px", opacity: open ? 1 : 0 }}
      >
        <ul className="pl-4 md:pl-10 pb-6 space-y-2">
          {subtopics.map((topic, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-zinc-700 text-[15px] leading-relaxed py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c] shrink-0" />
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const topics = [
    {
      title: "Programming Language",
      subtopics: [
        "Introduction, Variables & Operators",
        "Flow Control, Functions & Loops",
        "Arrays, Strings, Pointers & Reference",
      ],
    },
    {
      title: "Data Structures (Basics)",
      subtopics: [
        "Analysis of Algorithms (Time & Space Complexity)",
        "Arrays",
        "Recursion",
        "Hashing",
        "Searching",
        "Sorting",
        "Linked List",
        "Circular Linked List",
        "Doubly Linked List",
        "Stack",
        "Queue",
        "Dequeue",
        "Tree",
        "Binary Search Tree",
        "Heap",
      ],
    },
    {
      title: "Libraries",
      subtopics: [
        "STL Overview",
        "Pairs",
        "Vectors",
        "forward_list & list",
        "Dequeue",
        "Stack",
        "Queue",
        "Priority_Queue",
        "Hashing (Sets & Maps)",
      ],
    },
    {
      title: "Data Structures (Advanced)",
      subtopics: [
        "Mathematics",
        "Bit Magic",
        "Recursion",
        "Arrays",
        "Searching",
        "Sorting",
        "Matrix",
        "Hashing",
        "Strings",
        "LinkedList",
        "Stack",
        "Queue & Dequeue",
        "Tree",
        "Binary Search Tree",
        "Heap",
        "Graph",
        "Greedy",
        "Backtracking",
        "Dynamic Programming",
      ],
    },
    {
      title: "Interview Prep & Beyond",
      subtopics: [
        "Resume Crafting",
        "Mock Interviews",
        "Hacks to Clear Product Based Company Interviews",
      ],
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
              <span className="highlight-mark" style={{ fontFamily: "'Manrope', sans-serif" }}>
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
          {topics.map((t, i) => (
            <RoadmapTopic key={i} title={t.title} subtopics={t.subtopics} />
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
            <span className="highlight-mark" style={{ fontFamily: "'Manrope', sans-serif" }}>
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
        <span className="highlight-mark" style={{ fontFamily: "'Manrope', sans-serif" }}>
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
            <span className="highlight-mark" style={{ fontFamily: "'Manrope', sans-serif" }}>
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
            <span className="highlight-mark" style={{ fontFamily: "'Manrope', sans-serif" }}>
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
  const profiles = [
    {
      name: "Vishnu",
      quote:
        "Learning DSA helped me land a job in the USA, even in a tough market where most people were struggling to get callbacks.",
      image: "/profiles/vishnu.jpeg",
      link: "https://www.linkedin.com/in/vishnu-sai-reddy-3a9b5a243/",
    },
    {
      name: "Keerthana",
      quote:
        "When campus placements got competitive, DSA gave me the edge to secure an internship. It also helped me perform well enough to convert it into a full-time offer.",
      image: "/profiles/keerthana.jpeg",
      link: "https://www.linkedin.com/in/keerthana-palle-198209247/",
    },
    {
      name: "Srijan Iyer",
      quote:
        "I was stuck at a small startup with no growth. The resume crafting got me shortlisted at places I never expected, mock interviews taught me how to actually communicate my thinking, and I ended up at a product-based company with a 2.5x salary jump.",
      image: "/profiles/srijan.jpeg",
      link: "https://www.linkedin.com/in/srijan-tirunagari-24a2431ba/",
    },
    {
      name: "Manish Varma",
      quote:
        "I came from an electronics background with zero coding experience. This course took me from writing my first line of code to solving advanced problems, and it ultimately helped me switch domains entirely. Now I'm working as an SDE at a product-based company.",
      image: "/profiles/manish.jpeg",
      link: "https://www.linkedin.com/in/manish-varma-denamkonda-4ab120220/",
    },
    {
      name: "Poojitha",
      quote:
        "I had no structured approach to problem-solving before this. The step-by-step mentoring gave me clarity and confidence. I went from struggling with basic arrays to clearing multiple on-campus interviews back to back.",
      image: "/profiles/poojitha.jpeg",
      link: "https://www.linkedin.com/in/k-poojitha-reddy-311155266/",
    },
    {
      name: "Raghunath",
      quote:
        "I was grinding at a service-based company with no real growth in sight. This program sharpened my fundamentals, gave me the interview skills I was missing, and I made the switch to a product-based company with a 3x salary jump. Wish I'd started sooner.",
      image: "/profiles/raghunath.jpeg",
      link: "https://www.linkedin.com/in/m-venkata-raghu-nath-reddy-a6246016b/",
    },
    {
      name: "Gopichand",
      quote:
        "The role I was targeting demanded deep DSA knowledge and there was no shortcut. This course built that foundation solid enough that I cleared rounds where strong problem-solving was non-negotiable. Ended up switching with a 70% hike.",
      image: "/profiles/gopichand.jpeg",
      link: "https://www.linkedin.com/in/gopichand-reddy-pothireddy-a50949233/",
    },
    {
      name: "Kavya Mullacherry",
      quote:
        "I used to freeze during coding rounds, not because I didn't know the concepts, but because I'd never practised under pressure. The weekly mocks here changed that completely. By the time real interviews came, I felt calm and prepared.",
      image: "/profiles/kavya.png",
      link: "https://www.linkedin.com/in/kavya-mullachery-21aaa31b9/",
    },
    {
      name: "Praneeth Varma",
      quote:
        "Cracking interviews in the US market felt impossible until I had the right preparation. The structured approach to problem-solving and consistent practice gave me the confidence to clear interviews abroad and land an offer I never thought I'd get.",
      image: "/profiles/praneeth.png",
      link: "https://www.linkedin.com/in/sai-praneeth-varma-kalidindi-b11427222/",
    },
    {
      name: "Akash",
      quote:
        "I was inconsistent with my prep for months, starting and stopping without direction. This program gave me a clear path, weekly accountability, and mentors who actually cared. That structure made all the difference.",
      image: "/profiles/akash.jpeg",
      link: "https://www.linkedin.com/in/akash-babu-thottempudi-26603b1b0/",
    },
  ];

  const doubled = [...profiles, ...profiles, ...profiles, ...profiles];

  return (
    <section
      id="voices"
      className="py-24 md:py-32 border-y border-black/10 overflow-hidden"
      style={{ backgroundColor: "#efe8db" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-14 md:mb-16">
        <h2
          className="text-4xl md:text-6xl leading-[0.95] tracking-tight text-black max-w-3xl"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
        >
          They cracked it.
          <br />
          <span className="highlight-mark" style={{ fontFamily: "'Manrope', sans-serif" }}>
            You&apos;re next.
          </span>
        </h2>
      </div>

      {/* Scrolling profiles */}
      <div className="relative group overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing">
        <div
          data-testid="ed-voices-marquee"
          className="flex gap-6 md:gap-8 w-max animate-marquee-slow group-hover:[animation-play-state:paused]"
        >
          {doubled.map((p, i) => (
            <figure
              key={i}
              className="w-[300px] md:w-[360px] shrink-0 border border-black/20 bg-white/60 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-3 hover:shadow-xl"
            >
              <div className="w-full h-[280px] md:h-[340px] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <blockquote
                  className="text-black text-[15px] leading-[1.55] mb-5 flex-1"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  &ldquo;{p.quote}&rdquo;
                </blockquote>
                <figcaption className="pt-4 border-t border-black/20 flex items-center justify-between">
                  <span
                    className="text-[11px] tracking-[0.2em] uppercase text-black"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {p.name}
                  </span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-black hover:text-[#c2410c] transition-colors"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    LinkedIn
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </figcaption>
              </div>
            </figure>
          ))}
          {/* End card */}
          <figure className="w-[300px] md:w-[360px] shrink-0 border border-black/20 bg-white/60 overflow-hidden flex flex-col items-center justify-center min-h-[440px]">
            <div className="text-center px-6">
              <div
                className="text-3xl md:text-4xl text-black mb-3"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
              >
                & many more...
              </div>
              <p
                className="text-zinc-500 text-sm"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Join the next cohort
              </p>
            </div>
          </figure>
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
      <div className="grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-7">
          <h2
            className="text-5xl sm:text-7xl md:text-[120px] leading-[0.9] tracking-[-0.02em] text-black mb-10"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
          >
            Write to us.
            <br />
            <span className="highlight-mark" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Or don&apos;t.
            </span>
          </h2>
          <p className="text-zinc-700 text-lg max-w-lg leading-relaxed mb-10">
            A 30-minute conversation with a mentor. No pitch. No pressure. Just an
            honest look at whether we&apos;re the right fit for you.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <div className="relative group/demo">
              <button
                type="button"
                className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 hover:bg-[#c2410c] transition-colors cursor-pointer"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                <MessageCircle className="w-4 h-4" />
                Book a free demo
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>
              <div className="hidden group-hover/demo:flex flex-col absolute top-full left-0 w-full z-20 border border-black/15 shadow-lg">
                <a
                  href={waLink(bookMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white px-6 py-3.5 hover:bg-green-50 transition-colors border-b border-black/10"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}
                >
                  💬 WhatsApp
                </a>
                <a
                  href="mailto:contactcodeorbit@gmail.com?subject=Book%20a%20Demo%20-%20CodeOrbit&body=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20the%20DSA%20mentoring%20program."
                  className="flex items-center gap-3 bg-white px-6 py-3.5 hover:bg-orange-50 transition-colors"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}
                >
                  ✉️ Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Card */}
        <div className="col-span-12 md:col-span-5 rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, #0f766e 0%, #115e59 100%)" }}>
          <div className="p-7 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ fontFamily: "'JetBrains Mono', monospace" }}>🎯 Free Workshop</span>
            </div>
            <h3 className="text-white text-[28px] font-extrabold leading-tight mb-3" style={{ fontFamily: "'Manrope', sans-serif" }}>
              DSA Workshop
            </h3>
            <p className="text-white/80 text-[13px] leading-relaxed mb-5" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Clear all your doubts. Understand what the course covers. Get a complete roadmap for cracking interviews at product-based companies.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Live Q&A", "Career Guidance", "Course Walkthrough"].map((t) => (
                <span key={t} className="bg-white/15 text-white text-[11px] font-medium px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-white/20 flex items-center gap-2">
              <a
                href="https://wa.me/918951865075?text=Hi%2C%20I%20want%20to%20register%20for%20the%20free%20DSA%20workshop."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-white text-[#0f766e] text-[11px] font-bold uppercase tracking-wider px-3 py-2.5 rounded-full hover:bg-green-100 transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                💬 WhatsApp
              </a>
              <a
                href="mailto:contactcodeorbit@gmail.com?subject=Register%20for%20DSA%20Workshop&body=Hi%2C%20I%20want%20to%20register%20for%20the%20free%20DSA%20workshop."
                className="flex-1 text-center bg-white text-[#0f766e] text-[11px] font-bold uppercase tracking-wider px-3 py-2.5 rounded-full hover:bg-orange-100 transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ✉️ Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* --------------------------------- PAGE ---------------------------------- */
export default function StyleEditorialV2() {
  return (
    <div
      data-testid="style-editorial-v2-page"
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
