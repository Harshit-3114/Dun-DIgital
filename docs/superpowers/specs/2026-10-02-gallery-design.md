# Gallery Section — Design Spec

Date: 2026-10-02
Project: dun.digital (Astro static marketing site)
Status: Approved (user waived review gates)

## Context

The site is a single-page Astro static build with no React. Visual world: "midnight editorial gallery, flat stages, warm taupe" — black stages, warm taupe accent (#a9a498), Manrope + DM Mono, Tailwind v4. All imagery is currently placeholder-labeled. Existing sections: hero, signal band, intro, capabilities, approach, selected work (case studies), industries, contact.

Refero MCP was unavailable (subscription expired); visual research was substituted with React Bits (reactbits.dev, MIT+Commons Clause) and 21st.dev component-library patterns. React Bits patterns ported to vanilla Astro/JS: Blur Text, Split Text, Scroll Reveal, Shiny Text, Rolling Gallery (drag-strip concept). No React dependency is added.

## Goal

Add a pure-visual gallery section with a horizontal drag strip, active-frame indicator, tab-title window indicator, first-visit preloader, per-frame skeleton/blur-up states, and text effects (split/blur headings, shiny CTAs) — all coherent with the incumbent editorial world.

## Decisions (user-confirmed)

1. Gallery content: styled placeholder frames now, real images swap in later without redesign.
2. Placement: new separate section between Industries and Contact; Selected work stays as-is.
3. Pattern: horizontal drag strip (full-bleed, drag/scroll, frames bleed off-screen).
4. Window indicator: BOTH — tab title change on window blur AND active-frame indicator in the strip.
5. Loading: BOTH — first-visit page preloader AND per-frame skeleton/blur-up states ready for real images.
6. Text effects: split/blur reveals on section headings + light-sweep shine on CTA buttons.

## Architecture

- New `src/components/GallerySection.astro` — markup, scoped styles, and one vanilla `<script>` (Astro bundles it; site stays framework-free).
- Frame data defined in `index.astro` frontmatter (same pattern as `services`/`cases`): 6 frames, each `{ label, title, caption }`, passed as props. Content spans the eight service lines: (1) Brand systems, (2) Social & content, (3) Advertising, (4) Web & e-commerce, (5) PR & hampers, (6) Shoots & events.
- Preloader + tab-title scripts are site-level inline scripts in `index.astro` (they concern the whole page, not the gallery).
- GallerySection inserted between Industries and Contact. "Gallery" nav link added to desktop nav and mobile menu.
- No new dependencies. No React.

## Component: GallerySection.astro

### Strip
- Full-bleed horizontal strip: the section spans the viewport (escapes `.section-wrap`); inner track is an `overflow-x: auto` scroll container with `scroll-snap-type: x mandatory`.
- 6 frames, each an `<article>`: black editorial stage (like case-image language) with taupe frame border, mono label top-left, frame number bottom-right, caption below. Widths: ~78vw mobile, ~38vw desktop; gap 24px; edge padding so first/last frames can center.
- Drag: pointer events with `setPointerCapture`; drag-to-scroll (maps pointer delta to `scrollLeft`); snap disabled during drag, restored on release. Release paths: `pointerup`, `pointercancel`, `lostpointercapture`, window `blur` — each clears drag state and re-enables snap (next tap/drag works without reload).
- Scrollbar hidden visually but strip remains keyboard-scrollable (arrow keys natively scroll a focused scroll container).

### Active-frame indicator
- `01 / 06` DM Mono counter + thin taupe progress line.
- Active frame tracked by a rAF-throttled scroll handler computing the frame closest to the strip center (implementation substitution for the originally planned IntersectionObserver threshold 0.6 — more robust when multiple frames are visible at once). Counter and line width update accordingly.
- Counter marked `aria-hidden="true"` (decorative); the section has its own visible label for context.

### Skeletons / blur-up
- Each frame contains a shimmer skeleton layer (CSS keyframe, transform/opacity only).
- Frame data supports optional `image` URL later: when present, an `<img loading="lazy">` renders inside the stage; on `load` it blur-ups (opacity 0→1, blur 12px→0); on `error` the image is removed and the styled placeholder stage remains. Placeholders stay as-is today.

## Site-level scripts (index.astro)

### Preloader (first visit)
- Full-screen ink overlay: brand mark, "DUN DIGITAL", DM Mono count-up percentage.
- Gated by `sessionStorage["dd-visited"]`: shows once per browser session.
- Progress: min duration ~900ms, hard cap 2s after `window` load so it never hangs.
- Exit: curtain lifts (`translateY(-100%)`), then overlay removed; hero reveal animations run after the lift.
- `<noscript>` style hides the overlay when JS is absent; `prefers-reduced-motion` users skip the animation (overlay hides instantly); the gate still counts the visit.

### Tab-title window indicator
- `visibilitychange` (plus `blur`/`focus` fallback): blurred → `document.title = "Come back — Dun Digital ↗"`; visible → restore original title. Runs site-level.

## Text effects

### Split/blur headings (all section h2s)
- Small site-level script walks section `h2` elements, wraps each word in a `<span>` (progressive enhancement — headings render normally without JS).
- IntersectionObserver adds `.is-visible` when a heading enters the viewport; CSS transitions per-word opacity 0→1, blur 8px→0, translateY 12px→0, staggered ~40ms/word via `transition-delay` custom property.
- Hero `h1` keeps its existing reveal animation (not double-animated).

### Shiny CTAs
- `.button-outline` and `.header-cta` get a light-sweep shine on hover: CSS `::after` gradient sweeping via transform, 600ms, once per hover enter.

## Accessibility & reduced motion

- `prefers-reduced-motion`: preloader animation skipped (instant hide), word-splits render instantly (no stagger/blur), shine off, drag still functional (no momentum easing), existing reduced-motion blocks extended to cover new elements.
- Frames: focus-visible styles, `aria-label` per frame, semantic `<article>` markup.
- Gallery strip: `role="region"` + `aria-label`, `tabindex="0"` so keyboard users can scroll it with arrow keys.
- Tab-title effect and counter: harmless to AT (counter aria-hidden; title change is standard).

## Error handling / edge cases

- Drag interrupted (pointercancel / lost capture / window blur mid-drag): state cleared, snap restored, next gesture works.
- Preloader: hard 2s cap; never blocks if `load` is slow; sessionStorage prevents repeat per session.
- Split text: JS failure → plain headings (enhancement only).
- Image blur-up: `onerror` → remove img, keep placeholder stage.
- Resize: native scroll container absorbs width changes; observer re-evaluates naturally.

## Testing

- `npx astro check` + `npx astro build` must pass.
- Mechanical detector (`impeccable detect`) run once over changed files post-build.
- Manual checklist: drag at desktop + mobile widths, keyboard scroll + focus, reduced motion, no-JS, second visit (preloader gate), tab title on blur, skeleton/blur-up path with a temporary test image.
