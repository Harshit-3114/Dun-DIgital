# Site Section Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking. Approved by user; executed inline.

**Goal:** Upgrade the mapped sections with coherent motion and reveal patterns ported from Magic UI / Fancy Components / React Bits (MIT) into vanilla Astro/CSS/JS.

**Architecture:** All changes in `src/pages/index.astro` (markup, scoped CSS, one inline script). No new dependencies. `prefers-reduced-motion` disables every new animation; one authored motion moment (marquee).

**Tech Stack:** Astro static, scoped CSS, vanilla TypeScript, IntersectionObserver + rAF.

## Global Constraints

- No git repo — no commits; verify with `npx astro check` + `npx astro build`.
- Transform/opacity (or `translate`) only; `linear` for marquee; `ease-out` entrances; stagger 30-80ms; UI motion under 500ms.
- No-JS must not hide content: reveal base-hidden states gated behind JS-set `data-animate` attributes.
- Hover gating: `@media (hover:hover) and (pointer:fine)` or JS matchMedia for parallax.

---

### Task 1: Signal band → infinite marquee

- [x] Duplicate track into two `.signal-copy` halves (each with gap + padding-right for seamless loop), `aria-hidden` on track, `translate:-50%` keyframe, 32s `linear` infinite, pause on hover, gradient-mask edge fades (`mask-image` + `-webkit-mask-image`), remove obsolete static `.signal-track` rules (incl. 420px query), reduced-motion: `animation:none`.

### Task 2: Proof-row stats → count-up on scroll

- [x] Add `data-countup` (+ `data-suffix` for "30+") to the four stats; JS rAF count-up (easeOutCubic, 1100ms, IntersectionObserver threshold 0.5, once); reduced-motion: instant final values; no-JS: static numbers remain.

### Task 3: Approach steps → staggered reveal

- [x] JS sets `data-animate` on `.approach-list`, observer adds `data-visible` once (threshold 0.25); CSS `animation:step-in` with nth-child delays 60-240ms, `backwards` fill; reduced-motion: instant.

### Task 4: Industries → staggered pill reveal + hover invert

- [x] JS sets `data-animate` on `.industry-cloud` + per-pill `--pill-delay` (30ms stagger); CSS `animation:pill-in`; hover invert (ink bg / paper text) with 150ms color transitions kept separate from the animation delay; reduced-motion: instant.

### Task 5: Nav + footer links → underline draw on hover

- [x] CSS-only `scaleX(0→1)` underline sweep (left origin, 300ms `--ease-out`) on `.desktop-nav a` + `.footer-top`; reduced-motion: `transition:none`.

### Task 6: Hero art → mouse parallax

- [x] Change `.reveal` fill `both` → `backwards` (animation fill was overriding inline transforms forever); JS lerped rAF parallax (±12px max, lerp 0.08) on `.hero-art`, gated by `(hover:hover) and (pointer:fine)` + reduced-motion matchMedia; transform set directly on the element.

### Task 7: Contact orbit → slow idle wobble

- [x] CSS `orbit-wobble` keyframes (rotate −1.2° ↔ 1.2°, 14s `ease-in-out` infinite alternate) on `.contact-orbit` — substitution noted: a 4/3 rectangle cannot rotate 360°, so gentle oscillation implements "idle life"; reduced-motion: none.

### Task 8: Verification

- [x] `npx astro check` (0 errors) + `npx astro build`.
- [x] Compiled asserts: duplicated `.signal-copy` (2 in HTML), marquee keyframe present, `data-countup` in HTML + script, `data-animate` CSS, underline `scaleX` rules, reduced-motion block covers all new elements.
- [x] `impeccable detect --json` — clean.
