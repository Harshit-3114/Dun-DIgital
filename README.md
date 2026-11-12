# Dun Digital

The public website for **Dun Digital** — a Chennai studio that takes on branding, content, social, advertising, PR, shoots and live events for clients who want one accountable team instead of five vendors.

**Live site:** https://dundigital.in

---

## What this is

A fully static marketing site. No accounts, no checkout, no backend, and almost no client-side JavaScript — every page is pre-rendered HTML with a small amount of progressive enhancement for the gallery, the carousel and the enquiry drawer.

The site's job is to convert an evaluation into a conversation. It has to answer two questions for two different audiences:

| Audience | What they are asking | What the site must show |
|---|---|---|
| Commercial decision-makers (founders, owners, marketing heads) | "Can this team carry my whole brief?" | Capacity, breadth of service, and proof the work runs end to end |
| Institutional buyers (industry bodies, government initiatives, event organisers) | "Can you run a public-awareness campaign and cover the event live?" | Delivery evidence — press, creators, on-ground coverage, a single coordinated voice |

## The routes

19 URLs in the sitemap:

```
/                       home
/about                  who we are
/contact                enquiry paths
/events                 live events and coverage
/services               index of 8 service lines
/services/<slug>        8 service pages
/case-studies           index of 5 case studies
/case-studies/<slug>    5 case study pages
```

Plus a custom `/404`, which the sitemap filter excludes — 20 pages in the build.

## The content

Curated by hand in `src/data/content.ts`:

- **8 service lines** — branding & collaterals, social media marketing, advertising, website & e-commerce, PR & hampers, influencer marketing, brand shoots, and live event coverage.
- **5 case studies** — Raagam Polymound, Meendum Manjappai (TNPCB), Duggar Housing, Tamil Diaspora Day, and CII Summits & Expos.
- **12 industries** the studio works in, from manufacturing and jewelry to government initiatives and export & trade.
- A **10-frame gallery** on the home page, plus a 3-frame gallery on each of the service, case-study, about, contact and events pages.
- Client marks for **CII, Duggar, East Coast and TNPCB**.

Projected numbers are labelled as not-yet-realised rather than presented as traction. That was a deliberate choice and it is written into `PRODUCT.md`.

## Conversion paths

Three, so the site works before any backend is configured:

1. **Enquiry drawer** — opens over the page, posts JSON to `PUBLIC_INQUIRY_ENDPOINT` when that variable is set. Left empty, it runs in a staged/demo mode and sends nothing.
2. **Google Form embed** — optional, rendered on `/contact` when `PUBLIC_GOOGLE_FORM_EMBED_URL` is set.
3. **Email** — a `mailto:` fallback that always works.

The form carries a honeypot field (`data-honeypot`, hidden from sight and from tab order) and a client-side rate limit of one submit per 10 seconds. A bot that fills the honeypot gets a silent success. Because the honeypot is client-side, point `PUBLIC_INQUIRY_ENDPOINT` at a service that does its own filtering (Formspree, Resend, or your own API) rather than relying on this field alone.

## Configuration

Copy `.env.example` to `.env` and set what you need:

| Variable | Purpose |
|---|---|
| `PUBLIC_SITE_URL` | Canonical site URL for `<link rel="canonical">`, Open Graph tags and the sitemap. Production: `https://dundigital.in` |
| `PUBLIC_INQUIRY_ENDPOINT` | Where the enquiry drawer POSTs. Empty = staged mode, nothing is sent |
| `PUBLIC_GOOGLE_FORM_EMBED_URL` | Optional Google Form embed for `/contact` |

`.env` is gitignored; `.env.example` is committed.

## Running it

Requires **Node 22.12+** — Astro 7 sets that floor itself. `.nvmrc` pins `22`.

```bash
npm install
npm run dev        # http://localhost:4321
```

| Script | What it does |
|---|---|
| `npm run dev` | Astro dev server with HMR |
| `npm run build` | Static production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | `astro check` — TypeScript + template diagnostics |
| `npm run typecheck` | Alias for `npm run check` |
| `npm run audit` | `npm audit --audit-level=high` |

## Deploying

The build is plain static output, so any static host works.

```bash
npm run build     # -> dist/
```

`vercel.json` and `wrangler.jsonc` are included for Vercel and Cloudflare Pages. The sitemap is generated at build time and excludes `/404`; canonicals use trailing-slash form.

## Design

`DESIGN.md` holds the full token set — colour, typography, spacing, component specs, motion rules and accessibility requirements — and it was written **before** the UI. The palette is deliberately loud (tang, grape, limepop, bubble) against a warm paper ground, with Bricolage Grotesque for display and Manrope for body.

`PRODUCT.md` fixes who the site is for, what it must not become, and how success is measured. `CONTENT-REQUIREMENTS.md` states the content rules. Read `PRODUCT.md` before changing anything structural — it is the reason the site reads the way it does.

## Verification

The app is instrumented with [Reticle](https://docs.reticle.sh), an in-app verification layer that drives the real browser and produces a pass/fail verdict against a declared consequence. `AGENTS.md` and `RETICLE.md` describe the workflow for contributors and agents.

```bash
npx @reticlehq/server gate     # replay the saved flows against the changed files
```

## CI

`.github/workflows/ci.yml` runs on every pull request and every push to `main`:

```bash
npm ci
npm run check
npm run build
```

## Project layout

```
src/
  pages/          routes, including the [slug] generators
  components/     Astro components — CapabilityList, CaseStudyGrid, ContactForm,
                  GallerySection, InquiryDrawer, PhotoStrip, ScrollChrome, ReticleDev
  scripts/        contact-form.ts — validation, honeypot, rate limit, POST
  data/           content.ts — services, case studies, industries
  layouts/        SiteLayout and friends
  styles/         global CSS
  assets/         images, optimised at build time by sharp
public/
  clients/        client marks (CII, Duggar, East Coast, TNPCB)
  .well-known/    site verification files
```

## Licence

MIT — see [LICENSE](LICENSE).

Copyright (c) 2026 Harshit Shyamsukha.
