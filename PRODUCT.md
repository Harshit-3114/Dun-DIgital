# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two equal primary audiences, both arriving to evaluate Dun Digital as a potential partner:

1. **Commercial decision-makers** — founders, owners, and marketing heads at SMBs across retail, jewelry, real estate, health care, and manufacturing, mostly India-based. Their job: find one accountable team to take their brand, content, media, and events off their plate.
2. **Institutional buyers** — industry bodies (e.g. CII summits/expos), government initiatives (e.g. Tamil Nadu Pollution Control Board), and event organizers. Their job: find a team that can run public-awareness campaigns, delegate-generation sprints, and live event coverage end to end.

Both audiences are skimming to answer: "Can this team carry my whole brief, and is there proof?"

## Product Purpose

The site is Dun Digital's public front door (dundigital.in). It exists to convert evaluation into conversation: demonstrate the eight connected service lines, show proof through selected work, and route visitors into an inquiry. Success is an inquiry submitted (drawer form, Google Form, or `hello@dun.digital` email) — with credibility and recall as the supporting outcome when conversion happens off-site later.

## Positioning

One accountable team for brands whose digital presence must "move as one" — strategy, design, content, media, PR, websites, and live events under a single point of contact, so clients never stitch together separate vendors. Founded in Chennai in 2024; operating model is fixed scopes with benchmarked delivery, expandable from a single service line to full retainer.

## Operating Context

- Static marketing site (Astro, fully static output); no accounts, no checkout, no backend.
- Conversion paths: inquiry drawer (demo/staged until `PUBLIC_INQUIRY_ENDPOINT` is set), optional Google Forms embed on /contact, and `mailto:hello@dun.digital`.
- Content is curated manually: 8 services, 4 case studies, 10 gallery frames, 12-industry pill cloud.
- Engagement signals used as proof: monthly retainers, a 45-post content calendar example, proposal-stage benchmarks explicitly labeled as not-yet-realised.

## Capabilities and Constraints

- Routes: `/`, `/about/`, `/services/` + 8 detail pages, `/case-studies/` + 4 detail pages, `/contact/`, custom 404. Trailing-slash canonicals; auto-generated sitemap (17 URLs, 404 excluded).
- Contact is email-only: no phone number, no office address, no live social profiles linked (footer socials were removed rather than faked).
- No analytics, no newsletter backend, no pricing pages. Undecided: real inquiry endpoint; newsletter automation.

## Brand Commitments

- Name: Dun Digital. Voice: direct, confident, plain-spoken ("Bring us the messy bit", "Make the next move", "Start a conversation").
- Visual world (incumbent, post-2026 redesign): "Electric Candy Editorial" — warm peach paper, deep plum ink, tangerine/grape/lime/bubblegum/sun accents, Bricolage Grotesque display + Manrope body + DM Mono labels, sticker pills with hard offset shadows. Do not regress to generic SaaS minimalism.
- Signature devices: typewriter hero headline (settles after 3 cycles), tilted ink marquee, sun-yellow gallery band, gradient-mesh contact panel, gradient footer wordmark.

## Evidence on Hand

- Real: 8 service definitions with deliverables/outcomes/`deliveredFor` (`src/data/content.ts`); 4 case studies (Raagam Polymound, Meendum Manjappai for TNPCB, Duggar Housing, Tamil Diaspora Day with labeled proposal benchmarks); 3 named partners with bios (Nicky Jain, Shikha Jain, Pooja Sathya Narayanan); ~38 client gallery images (`public/gallery/`).
- Absent (must not be fabricated): testimonials, quantified results beyond the labeled proposal benchmarks, client logos as trust marks, pricing, team photos, social proof counts beyond the stated stats (30+ clients, 12+ industries, 10 summits, 8 service lines).

## Product Principles

1. **One team, one thread** — every surface should reinforce single-accountability; never present services as disconnected offerings.
2. **Proof over promises** — claims must attach to a named client, artifact, or explicitly labeled benchmark; no invented validation.
3. **Conversation is the conversion** — every page ends one click from an inquiry; reduce anything that lengthens that path.
4. **Playful but precise** — the candy-editorial voice earns attention, but information (deliverables, benchmarks, next steps) stays exact and scannable.

## Accessibility & Inclusion

No product-specific mandated standard established. Baseline: honor `prefers-reduced-motion` (already implemented across motion systems), keyboard-operable nav/drawer/filters, visible focus, and readable contrast on body copy. Open decision: formal WCAG 2.2 AA audit has not been run.
