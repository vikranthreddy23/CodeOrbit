# CodeOrbit — DSA Mentoring Landing Page

## Original Problem Statement
User wants a shareable demo website for **CodeOrbit** — a mentoring platform teaching Data Structures & Algorithms. Purpose: info-only showcase to share with prospective students. User will review demo first before requesting additions.

## User Choices (from ask_human)
- Goal: **Info-only showcase** (option c)
- Sections requested: Testimonials (extended by agent to a full landing page since a single-section site would be too thin)
- Visual style: **"You decide — surprise me"** (agent picked dark, terminal/space-orbit aesthetic)
- Backend: **Static demo only** (no data persistence)
- Key differentiator to highlight: **Mentors from Amazon, Uber & Adobe**

## Architecture
- **Frontend only** (React + Tailwind + shadcn UI base). No backend routes were added; MongoDB untouched.
- Single-page landing at `/`. Everything in `/app/frontend/src/App.js` + `/app/frontend/src/App.css`.
- Fonts loaded via Google Fonts in `public/index.html`: **Unbounded** (display), **IBM Plex Sans** (body), **JetBrains Mono** (accents).

## Design System
- Palette: pure black `#000`, zinc-950 surfaces, white text, single acid-green accent `#4ade80`. No purple/blue gradients.
- Sections: Nav → Hero (space-orbit visual + terminal snippet) → Mentor logo marquee → Curriculum bento grid → Stats → Testimonials → CTA/Footer.
- Motion: subtle marquee, orbit ring spin, hover lifts, pulse dot.

## What's Been Implemented (Dec 2025)
- Sticky nav with in-page anchors and Book Demo CTA
- Hero with headline "Command your career." + terminal snippet + dual CTA
- Infinite marquee showing Amazon / Uber / Adobe / Google / Microsoft logos (white via `brightness-0 invert`)
- Curriculum bento: Live sessions image card + Arrays/Trees/DP/System Design cards + Mock interview footer card
- Stats block (400+ problems, 92% placement, 1:8 ratio, 14w cohort)
- Testimonials grid (3 alumni cards with photo, quote, role)
- CTA section "Ready to orbit?" with mailto + WhatsApp links
- Footer with brand and enrolling status

## Prioritized Backlog (Next Actions)
- **P1**: Replace placeholder alumni names/photos and copy with the user's real data
- **P1**: Wire the WhatsApp link with the user's actual phone number, and the "Book demo" mailto to their real email
- **P2**: Add a "Meet the Mentors" section with photos and short bios (once user provides them)
- **P2**: Add pricing / batch schedule section
- **P2**: Add FAQ (Radix Accordion) once questions are known
- **P3**: Convert Book Demo CTA into a working lead-capture form saving to MongoDB (deferred per user's static-only choice)

## Personas
- **CS undergrad targeting FAANG/product companies** — main audience, wants credibility and structure
- **Working SWE prepping for switch** — wants mock interviews and time-efficient path
