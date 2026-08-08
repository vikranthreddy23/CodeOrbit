import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  ArrowUpRight,
  Terminal,
  Code2,
  GitBranch,
  Cpu,
  Layers,
  Network,
  Sparkles,
  Star,
  ChevronRight,
  Clock,
  Users,
  Trophy,
  MessageCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import StyleEditorial from "@/pages/StyleEditorial";
import StyleEditorialV2 from "@/pages/StyleEditorialV2";
import StyleBold from "@/pages/StyleBold";

/* ------------------------------------------------------------------ */
/* CONFIG — swap this with the real number (E.164, no + or spaces)    */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "918951865075"; // CodeOrbit WhatsApp

/* ------------------------------------------------------------------ */
/* BOOK DEMO DIALOG — collects details, sends to WhatsApp              */
/* ------------------------------------------------------------------ */
const BookDemoDialog = ({ open, onOpenChange }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    background: "",
    goal: "",
  });
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please share your name.";
    if (!form.phone.trim()) nextErrors.phone = "Please share a contact number.";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const lines = [
      "Hi CodeOrbit team! I'd like to book a *free demo* for the DSA mentoring cohort.",
      "",
      `• Name: ${form.name}`,
      `• Contact: ${form.phone}`,
      form.background ? `• Current role / college: ${form.background}` : null,
      form.goal ? `• Target / goal: ${form.goal}` : null,
      "",
      "Please share the next available slot. Thanks!",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onOpenChange(false);
    setForm({ name: "", phone: "", background: "", goal: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="book-demo-dialog"
        className="bg-zinc-950 border border-white/10 text-white sm:max-w-[480px] rounded-none p-0 gap-0"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] pulse-dot" />
            <span className="font-mono-c text-[10px] tracking-[0.25em] uppercase text-zinc-400">
              // Book a free demo
            </span>
          </div>
        </div>

        <DialogHeader className="px-6 pt-6 pb-2 text-left">
          <DialogTitle className="font-display font-black text-2xl md:text-3xl tracking-tight text-white">
            Send us your details.
          </DialogTitle>
          <DialogDescription className="text-zinc-500 text-sm mt-2">
            We&apos;ll open WhatsApp with your details pre-filled — one tap to
            send.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="px-6 pb-6 pt-4 space-y-4">
          <div className="space-y-1.5">
            <Label
              htmlFor="demo-name"
              className="font-mono-c text-[10px] tracking-[0.2em] uppercase text-zinc-500"
            >
              Your name *
            </Label>
            <Input
              id="demo-name"
              data-testid="demo-input-name"
              placeholder="e.g. Aditya Sharma"
              value={form.name}
              onChange={update("name")}
              className="bg-black border-white/15 text-white rounded-none focus-visible:ring-[#4ade80] focus-visible:ring-offset-0 h-11"
            />
            {errors.name && (
              <p className="text-red-400 text-xs font-mono-c">{errors.name}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="demo-phone"
              className="font-mono-c text-[10px] tracking-[0.2em] uppercase text-zinc-500"
            >
              Phone / WhatsApp *
            </Label>
            <Input
              id="demo-phone"
              data-testid="demo-input-phone"
              type="tel"
              placeholder="+91 98XXX XXXXX"
              value={form.phone}
              onChange={update("phone")}
              className="bg-black border-white/15 text-white rounded-none focus-visible:ring-[#4ade80] focus-visible:ring-offset-0 h-11"
            />
            {errors.phone && (
              <p className="text-red-400 text-xs font-mono-c">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="demo-bg"
              className="font-mono-c text-[10px] tracking-[0.2em] uppercase text-zinc-500"
            >
              College / Company (optional)
            </Label>
            <Input
              id="demo-bg"
              data-testid="demo-input-bg"
              placeholder="e.g. NIT Trichy, 3rd year"
              value={form.background}
              onChange={update("background")}
              className="bg-black border-white/15 text-white rounded-none focus-visible:ring-[#4ade80] focus-visible:ring-offset-0 h-11"
            />
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="demo-goal"
              className="font-mono-c text-[10px] tracking-[0.2em] uppercase text-zinc-500"
            >
              What&apos;s your goal? (optional)
            </Label>
            <Textarea
              id="demo-goal"
              data-testid="demo-input-goal"
              placeholder="e.g. Targeting SDE-1 at product companies in 6 months"
              value={form.goal}
              onChange={update("goal")}
              rows={3}
              className="bg-black border-white/15 text-white rounded-none focus-visible:ring-[#4ade80] focus-visible:ring-offset-0 resize-none"
            />
          </div>

          <button
            type="submit"
            data-testid="demo-submit"
            className="w-full bg-[#4ade80] text-black font-mono-c font-semibold text-xs uppercase tracking-[0.18em] px-6 py-4 hover:bg-white transition-colors inline-flex items-center justify-center gap-3 group"
          >
            <MessageCircle className="w-4 h-4" />
            Send on WhatsApp
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </button>
          <p className="text-center text-[10px] font-mono-c tracking-[0.15em] uppercase text-zinc-600">
            Opens WhatsApp · You review the message before sending
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

/* ------------------------------------------------------------------ */
/* NAV                                                                 */
/* ------------------------------------------------------------------ */
const Nav = ({ onBookDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-black/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          data-testid="nav-logo"
          href="#top"
          className="font-display font-black text-lg tracking-tight text-white"
        >
          code<span className="text-[#4ade80]">/</span>orbit
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Mentors", "#mentors"],
            ["Curriculum", "#curriculum"],
            ["Results", "#results"],
            ["Reviews", "#testimonials"],
          ].map(([label, href]) => (
            <a
              key={label}
              data-testid={`nav-link-${label.toLowerCase()}`}
              href={href}
              className="font-mono-c text-[11px] uppercase tracking-[0.22em] text-zinc-400 hover:text-white link-sweep"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          data-testid="nav-cta"
          onClick={onBookDemo}
          className="bg-white text-black font-mono-c font-semibold text-[11px] uppercase tracking-[0.18em] px-5 py-2.5 hover:bg-[#4ade80] transition-colors"
        >
          Book Demo
        </button>
      </div>
    </header>
  );
};

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */
const Hero = ({ onBookDemo }) => (
  <section
    id="top"
    data-testid="hero-section"
    className="relative min-h-screen w-full overflow-hidden bg-black grain"
  >
    {/* Space bg image */}
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1741997699658-d37ee7a2e010?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
    <div className="absolute inset-0 grid-bg opacity-40" />

    {/* Orbit ring decoration */}
    <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 orbit-spin hidden lg:block">
      <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-[#4ade80] shadow-[0_0_20px_#4ade80]" />
    </div>
    <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 orbit-spin hidden lg:block" style={{ animationDuration: "40s", animationDirection: "reverse" }} />

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-40 md:pt-48 pb-24">
      <div className="fade-rise">
        <div className="inline-flex items-center gap-2 border border-white/15 bg-black/40 backdrop-blur px-3 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] pulse-dot" />
          <span className="font-mono-c text-[10px] tracking-[0.25em] uppercase text-zinc-300">
            Cohort 07 — Now enrolling
          </span>
        </div>

        <h1 className="font-display font-black text-white leading-[0.9] text-[52px] sm:text-[72px] md:text-[96px] lg:text-[128px] tracking-[-0.04em] max-w-6xl">
          Command
          <br />
          your <span className="text-stroke">career.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed">
          Data Structures &amp; Algorithms mentoring — engineered by senior
          engineers from{" "}
          <span className="text-white font-medium">Amazon</span>,{" "}
          <span className="text-white font-medium">Uber</span>, and{" "}
          <span className="text-white font-medium">Adobe</span>. Built for the
          top 1% who refuse to grind LeetCode alone.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
          <button
            type="button"
            data-testid="hero-primary-cta"
            onClick={onBookDemo}
            className="group bg-white text-black font-mono-c font-semibold text-xs uppercase tracking-[0.18em] px-7 py-4 hover:bg-[#4ade80] transition-colors inline-flex items-center gap-3"
          >
            Book a free demo
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </button>
          <a
            data-testid="hero-secondary-cta"
            href="#curriculum"
            className="border border-white/25 text-white font-mono-c font-semibold text-xs uppercase tracking-[0.18em] px-7 py-4 hover:bg-white/5 transition-colors inline-flex items-center gap-3"
          >
            See curriculum
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Terminal snippet */}
        <div className="mt-16 max-w-xl border border-white/10 bg-zinc-950/80 backdrop-blur">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 font-mono-c text-[10px] text-zinc-500 uppercase tracking-widest">
              ~/codeorbit
            </span>
          </div>
          <div className="p-4 font-mono-c text-[13px] leading-relaxed">
            <div className="text-zinc-500">$ orbit --track dsa --level advanced</div>
            <div className="text-[#4ade80]">→ 14 weeks · 400+ problems · 1:1 mock interviews</div>
            <div className="text-zinc-500 mt-1">$ orbit mentors --list</div>
            <div className="text-white">
              amazon.<span className="text-zinc-500">sde3</span> uber.
              <span className="text-zinc-500">sde2</span> adobe.
              <span className="text-zinc-500">sde2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* MENTOR MARQUEE (logo ticker)                                        */
/* ------------------------------------------------------------------ */
const MentorMarquee = () => {
  const logos = [
    { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
    { name: "Adobe", url: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg" },
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
    { name: "Adobe", url: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg" },
  ];
  const items = [...logos, ...logos];
  return (
    <section id="mentors" data-testid="mentor-marquee" className="relative bg-black border-y border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6">
        <p className="font-mono-c text-[10px] tracking-[0.3em] uppercase text-zinc-500">
          // Mentors from
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-20 animate-marquee whitespace-nowrap w-max">
          {items.map((logo, i) => (
            <div key={i} className="flex items-center h-14 shrink-0">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 md:h-10 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* CURRICULUM BENTO                                                    */
/* ------------------------------------------------------------------ */
const Curriculum = () => {
  return (
    <section id="curriculum" data-testid="curriculum-section" className="relative bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono-c text-[10px] tracking-[0.3em] uppercase text-[#4ade80] mb-4">
              // 02 — Curriculum
            </p>
            <h2 className="font-display font-black text-white text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-2xl">
              Every module, drilled to muscle memory.
            </h2>
          </div>
          <p className="max-w-sm text-zinc-500 text-sm leading-relaxed">
            No fluff, no filler. Just the exact patterns that show up in FAANG
            interviews — taught by people who wrote them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Big card: image */}
          <div className="md:col-span-4 md:row-span-2 relative overflow-hidden border border-white/10 bg-zinc-950 card-lift min-h-[380px] group">
            <img
              src="https://images.unsplash.com/photo-1562813733-b31f71025d54?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400"
              alt="Developer coding"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
            <div className="relative h-full p-8 md:p-10 flex flex-col justify-end">
              <Terminal className="w-7 h-7 text-[#4ade80] mb-4" />
              <h3 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight mb-3">
                Live problem-solving sessions
              </h3>
              <p className="text-zinc-400 text-sm max-w-md">
                4x/week deep-dive sessions. Whiteboard live. Ship code live.
                Get roasted, get better.
              </p>
            </div>
          </div>

          {/* Small cards */}
          {[
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Arrays & Strings",
              desc: "Two pointers, sliding window, prefix sums.",
              tag: "01",
            },
            {
              icon: <GitBranch className="w-6 h-6" />,
              title: "Trees & Graphs",
              desc: "BFS/DFS, MST, topological sort, LCA.",
              tag: "02",
            },
            {
              icon: <Cpu className="w-6 h-6" />,
              title: "Dynamic Programming",
              desc: "Memo, tabulation, state compression.",
              tag: "03",
            },
            {
              icon: <Network className="w-6 h-6" />,
              title: "System Design 101",
              desc: "Rate limiters, caches, shard strategies.",
              tag: "04",
            },
          ].map((c) => (
            <div
              key={c.title}
              data-testid={`curriculum-card-${c.tag}`}
              className="md:col-span-2 relative border border-white/10 bg-zinc-950 hover:border-[#4ade80]/40 card-lift p-6 md:p-7 group"
            >
              <span className="absolute top-4 right-4 font-mono-c text-[10px] tracking-[0.25em] text-zinc-600">
                {c.tag}
              </span>
              <div className="text-white group-hover:text-[#4ade80] transition-colors mb-4">
                {c.icon}
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-1.5">
                {c.title}
              </h3>
              <p className="text-zinc-500 text-[13px] leading-relaxed">{c.desc}</p>
            </div>
          ))}

          {/* Full-width footer card */}
          <div className="md:col-span-6 relative border border-white/10 bg-zinc-950 card-lift p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-5">
              <Code2 className="w-8 h-8 text-[#4ade80] shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold text-white text-2xl mb-2">
                  Weekly mock interviews with real hiring bar
                </h3>
                <p className="text-zinc-500 text-sm max-w-xl">
                  1:1 mocks by engineers who have run loops at Amazon / Uber /
                  Adobe. Written feedback within 24h.
                </p>
              </div>
            </div>
            <span className="font-mono-c text-[10px] tracking-[0.25em] uppercase text-zinc-500 shrink-0">
              05 · Weekly · 1:1
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* STATS                                                               */
/* ------------------------------------------------------------------ */
const Stats = () => {
  const stats = [
    { value: "400+", label: "Problems solved", icon: <Sparkles className="w-4 h-4" /> },
    { value: "92%", label: "Placement rate", icon: <Trophy className="w-4 h-4" /> },
    { value: "1:8", label: "Mentor to student", icon: <Users className="w-4 h-4" /> },
    { value: "14w", label: "Cohort length", icon: <Clock className="w-4 h-4" /> },
  ];
  return (
    <section id="results" data-testid="stats-section" className="relative bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="font-mono-c text-[10px] tracking-[0.3em] uppercase text-[#4ade80] mb-10">
          // 03 — By the numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-testid={`stat-${i}`}
              className="border-l border-white/10 pl-6 md:pl-8"
            >
              <div className="flex items-center gap-2 text-zinc-500 mb-4">
                {s.icon}
                <span className="font-mono-c text-[10px] tracking-[0.25em] uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="font-display font-black text-[#4ade80] text-5xl md:text-7xl tracking-tight leading-none">
                {s.value}
              </div>
              <div className="font-mono-c text-[11px] tracking-[0.15em] uppercase text-zinc-400 mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* TESTIMONIALS                                                        */
/* ------------------------------------------------------------------ */
const Testimonials = () => {
  const list = [
    {
      name: "Ananya R.",
      role: "SDE @ Microsoft",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
      quote:
        "The mock interviews were brutal in the best way. My mentor from Amazon walked me through exactly how the bar-raiser would score every answer. I stopped guessing.",
    },
    {
      name: "Rohan K.",
      role: "SDE-2 @ Flipkart",
      img: "https://images.unsplash.com/photo-1609371497456-3a55a205d5eb?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
      quote:
        "I had been grinding LeetCode alone for 8 months. CodeOrbit compressed a year of confusion into 14 focused weeks. DP finally clicked.",
    },
    {
      name: "Priya S.",
      role: "SWE @ Atlassian",
      img: "https://images.unsplash.com/photo-1760552069633-c05f246a5d8c?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
      quote:
        "Small cohorts, insane accountability. My Uber mentor reviewed every submission line by line. Never had that anywhere else.",
    },
  ];
  return (
    <section id="testimonials" data-testid="testimonials-section" className="relative bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="font-mono-c text-[10px] tracking-[0.3em] uppercase text-[#4ade80] mb-4">
            // 04 — In their words
          </p>
          <h2 className="font-display font-black text-white text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl">
            Signals from alumni, not testimonials.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {list.map((t, i) => (
            <article
              key={t.name}
              data-testid={`testimonial-${i}`}
              className="border border-white/10 bg-zinc-950 p-7 md:p-8 card-lift hover:border-[#4ade80]/40 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-5 text-[#4ade80]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-zinc-300 text-[15px] leading-relaxed mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20 grayscale"
                />
                <div>
                  <div className="font-mono-c text-xs tracking-wider text-white">
                    {t.name}
                  </div>
                  <div className="font-mono-c text-[10px] tracking-[0.2em] uppercase text-zinc-500 mt-0.5">
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* CTA / FOOTER                                                        */
/* ------------------------------------------------------------------ */
const CTA = ({ onBookDemo }) => (
  <section
    id="contact"
    data-testid="cta-section"
    className="relative bg-black border-t border-white/10 overflow-hidden"
  >
    <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/50 to-transparent" />
    <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40">
      <p className="font-mono-c text-[10px] tracking-[0.3em] uppercase text-[#4ade80] mb-8">
        // 05 — Ready?
      </p>
      <h2 className="font-display font-black text-white text-6xl sm:text-8xl md:text-[144px] leading-[0.85] tracking-[-0.04em]">
        Ready to
        <br />
        orbit?
      </h2>
      <p className="mt-10 text-zinc-400 text-lg max-w-lg leading-relaxed">
        Book a 30-min free demo. Meet your mentor, see the syllabus, decide if
        it&apos;s for you.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
        <button
          type="button"
          data-testid="cta-primary"
          onClick={onBookDemo}
          className="group bg-[#4ade80] text-black font-mono-c font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 hover:bg-white transition-colors inline-flex items-center gap-3"
        >
          Book a free demo
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
        </button>
        <a
          data-testid="cta-secondary"
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hi CodeOrbit! I'd like to know more about the DSA mentoring program."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/25 text-white font-mono-c font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 hover:bg-white/5 transition-colors inline-flex items-center gap-3"
        >
          <MessageCircle className="w-4 h-4" />
          Chat on WhatsApp
        </a>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="font-display font-black text-white text-lg">
          code<span className="text-[#4ade80]">/</span>orbit
        </div>
        <div className="font-mono-c text-[10px] tracking-[0.25em] uppercase text-zinc-500">
          © {new Date().getFullYear()} CodeOrbit · DSA mentoring · Made for
          builders
        </div>
        <div className="flex items-center gap-2 font-mono-c text-[10px] tracking-[0.25em] uppercase text-zinc-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] pulse-dot" />
          Enrolling now
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* HOME PAGE                                                           */
/* ------------------------------------------------------------------ */
const Home = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);
  return (
    <div data-testid="home-page" className="min-h-screen bg-black text-white">
      <Nav onBookDemo={openDemo} />
      <Hero onBookDemo={openDemo} />
      <MentorMarquee />
      <Curriculum />
      <Stats />
      <Testimonials />
      <CTA onBookDemo={openDemo} />
      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/editorial-v2" replace />} />
          <Route path="/orbit" element={<Home />} />
          <Route path="/editorial" element={<StyleEditorial />} />
          <Route path="/editorial-v2" element={<StyleEditorialV2 />} />
          <Route path="/bold" element={<StyleBold />} />
          <Route path="*" element={<Navigate to="/editorial-v2" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
