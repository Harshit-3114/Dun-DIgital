# Gallery Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking. This plan is executed inline (user waived review gates).

**Goal:** Add a full-bleed horizontal drag-strip gallery section with active-frame indicator, tab-title window indicator, first-visit preloader, per-frame skeleton/blur-up states, and split/blur heading + shiny CTA text effects.

**Architecture:** New `GallerySection.astro` component (markup + scoped styles + vanilla script) inserted between Industries and Contact; site-level effects (preloader, tab title, split headings, shiny CTAs) as inline script + CSS in `index.astro`. No React, no new dependencies.

**Tech Stack:** Astro static, Tailwind v4 (components), scoped CSS (page), vanilla TypeScript in Astro `<script>` tags.

## Global Constraints

- No git repo — no commit steps; verify with `npx astro check` + `npx astro build`.
- No React/new runtime dependencies; all JS vanilla.
- Preserve incumbent visual world: black stages, warm taupe (`--stone` #a9a498), Manrope + DM Mono.
- Page breakpoint: 768px (matches Tailwind `md:`); reduced-motion must disable every new animation.
- No-JS must not break the page (progressive enhancement only).
- Frame data pattern matches existing `services`/`cases` arrays in index.astro frontmatter.

---

### Task 1: GallerySection component + integration

**Files:**
- Create: `src/components/GallerySection.astro`
- Modify: `src/pages/index.astro` (frontmatter data + section insert + desktop nav link)
- Modify: `src/components/MobileNav.astro` (mobile menu link)

**Interfaces:**
- Produces: `GallerySection` component consuming prop `frames: { label: string; title: string; caption: string }[]`; section anchor `#gallery`; hook attributes `data-gallery-strip`, `data-gallery-current`, `data-gallery-progress`, `data-gallery-frame`, `data-frame-stage`, `data-frame-image`, `data-frame-skeleton`.

- [x] **Step 1: Create GallerySection.astro** — full component: head (label, h2, indicator with counter + progress line), full-bleed strip (overflow-x auto, scroll-snap, drag for mouse only), 6 frames (black stage, taupe border, mono label, skeleton shimmer, frame number, caption). Scoped styles + reduced-motion block + script (closest-to-center active tracking, rAF-throttled; pointer drag with capture; release on pointerup/pointercancel/lostpointercapture/blur; image blur-up on load, remove on error).

- [x] **Step 2: Add frame data to index.astro frontmatter** — `galleryFrames` array, 6 frames spanning: Brand systems / Social & content / Advertising / Web & e-commerce / PR & hampers / Shoots & events.

- [x] **Step 3: Insert `<GallerySection frames={galleryFrames} />` between Industries and Contact; add `<a href="#gallery">Gallery</a>` to desktop-nav.**

- [x] **Step 4: Add Gallery link to MobileNav menu** (same class pattern as existing `data-menu-link` items).

- [x] **Step 5: Verify** — `npx astro check` (0 errors) + `npx astro build` (passes) + compiled CSS contains `.gallery-strip` and `scroll-snap-type`.

### Task 2: Preloader (first visit)

**Files:**
- Modify: `src/pages/index.astro` (head noscript style, preloader markup after `<body>`, body `data-preloading` attribute, CSS, script)

**Interfaces:**
- Produces: `[data-preloader]` overlay, `[data-preloader-count]` percentage, `body[data-preloading]` gate removed on curtain lift; `sessionStorage["dd-visited"]` gate.

- [x] **Step 1: Add markup + CSS** — fixed ink overlay (brand mark + DM Mono count), `translate 700ms` curtain lift via `.is-done`, `<noscript>` style hiding overlay and forcing reveals to `animation:none`, `body[data-preloading] .reveal { animation-play-state:paused }`.

- [x] **Step 2: Add script** — sessionStorage gate (skip + remove if visited or reduced-motion); else count-up (creep to 90% until `load`, jump to 100%; min 900ms, hard cap 2s), then curtain lift, remove `data-preloading`, remove overlay after 750ms.

- [x] **Step 3: Verify** — build passes; compiled HTML contains `dd-visited` and `data-preloader`.

### Task 3: Tab-title indicator + split/blur headings + shiny CTAs

**Files:**
- Modify: `src/pages/index.astro` (scripts + CSS)

**Interfaces:**
- Produces: `document.title` swap on blur; `h2.is-visible` + `.split-word` spans (child-node-safe split preserving `<br>`/`<em>`); `.button-outline`/`.header-cta` shine `::after`.

- [x] **Step 1: Tab-title script** — `visibilitychange` + `blur`/`focus` fallback: hidden → `Come back — Dun Digital ↗`, visible → restore original.

- [x] **Step 2: Split-heading script** — walk `main section h2`, wrap words in `.split-word` spans with 40ms stagger (recurse into element nodes so `<em>`/`<br>` survive), IntersectionObserver threshold 0.3 adds `.is-visible` once.

- [x] **Step 3: CSS** — `.split-word { display:inline-block; opacity:0; filter:blur(8px); translate:0 12px; transition:... }`, `h2.is-visible .split-word` revealed; shine sweep `::after` on CTAs; extend reduced-motion block (split-word instant, shine hidden, preloader no transition).

- [x] **Step 4: Verify** — build passes; compiled CSS contains `.split-word` and shine rules; built HTML script contains `is-visible`.

### Task 4: Full verification

- [x] **Step 1:** `npx astro check` — 0 errors.
- [x] **Step 2:** `npx astro build` — passes; check dist sizes.
- [x] **Step 3:** Compiled-output asserts: gallery selectors scoped correctly (component elements carry cid), no `[data-astro-cid]` mismatches, `scroll-snap-type:x` present, `transition-property:translate` used for drag/curtain, reduced-motion block covers new elements.
- [x] **Step 4:** Run `impeccable detect --json` over changed files — expect no findings.
- [x] **Step 5:** Update spec doc with the observer substitution note (scroll-based closest-center instead of IntersectionObserver threshold 0.6 for the active frame — more robust with multiple frames visible).
