---
name: Dun Digital
description: One accountable team for brands whose digital presence must move as one.
colors:
  tang: "#FF5A1F"
  grape: "#6C35FF"
  limepop: "#D4F542"
  bubble: "#FF7AD9"
  sun: "#FFC531"
  ink: "#1A1025"
  plum: "#3A2A5E"
  paper: "#FFF3E6"
  paper-deep: "#FFE7CF"
  card: "#FFFDF8"
  muted: "#6E6486"
  line: "#EAD9C2"
  lav: "#9A7EE6"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Manrope, Arial, sans-serif"
    fontSize: "clamp(50px, 7.2vw, 116px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, Manrope, Arial, sans-serif"
    fontSize: "clamp(30px, 3.2vw, 44px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.38
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  pill: "999px"
  card: "22px"
  tile: "18px"
  tag: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.limepop}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.tang}"
    textColor: "#FFFFFF"
  sticker:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  card-pop:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "28px 26px"
  chip-filter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 15px"
  chip-filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.limepop}"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "12px 0"
  photo-strip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "0px"
  lead-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "36px 34px"
---

# Design System: Dun Digital

## Overview

**Creative North Star: "The Sunny Newsstand"**

Dun Digital reads like the sunniest newsstand on the street: warm paper, oversized editorial headlines you can read from across the road, and color used the way a good newsstand uses covers — to earn the glance, then let typography and hierarchy do the selling. Every surface leads with a massive Bricolage Grotesque statement, supports it with plain-spoken Manrope copy, and stamps it with small mono labels that feel printed, not rendered.

The system is expressive but disciplined: one dominant accent per section, comfortable whitespace (88–110px section rhythm), and recurring signature devices — sticker pills with hard offset shadows, lime marker highlights behind key words, and a tilted ink marquee band. Nothing here wants to look like template SaaS minimalism; the confirmed anti-reference is flat gray minimalism with timid 1px hairlines and interchangeable geometric sans headlines.

**Key Characteristics:**
- Warm paper canvas with deep plum ink; never pure black on pure white.
- One accent per section; accents never compete on the same screen.
- Editorial type scale: giant display, confident headlines, quiet mono labels.
- Tactile surfaces: 1.5–2px ink borders with hard offset shadows (the current tactile peak of the system; future refinement direction is restraint — see Do's and Don'ts).
- Motion is springy and spatial: blur-and-rise entrances, staggered groups, zero layout-property animation.

## Colors

A warm paper world with five candy accents, each given a section to own so they never shout over each other.

### Primary
- **Tangerine Pop** (#FF5A1F): The action color. Primary CTAs on hover, key headline words, numerals, focus markers, preloader mark. If the visitor should press it or remember it, it is tangerine.

### Secondary
- **Grape Soda** (#6C35FF): The depth color. Dark-section CTA fills, headline emphasis words, hero-art shadow, footer wave wash, progress-bar tail. Grape carries premium weight where tangerine carries urgency.

### Tertiary
- **Acid Lime** (#D4F542): The energy color. Marker highlights behind hero words, sticker fills, active filter states, footer "back to top" pill, selection background. Lime is never body text — it is always a signal on top of ink or paper.
- **Bubblegum** (#FF7AD9): The warmth color. Alternating marquee words, caption chips, method-card tops, tag pills on case details. Used sparingly; one bubblegum moment per screen.
- **Marigold** (#FFC531): The sunlight color. Owns the gallery band end to end, plus sticker and method-card accents. Marigold backgrounds always carry ink text.

### Neutral
- **Warm Paper** (#FFF3E6): Page background everywhere light sections breathe.
- **Deep Paper** (#FFE7CF): Reserved for sun-band-adjacent warmth and deep section washes.
- **Card White** (#FFFDF8): Raised surfaces — method cards, partner cards, filter bars, benchmark tiles.
- **Plum Ink** (#1A1025): Text, header/footer ink, borders, dark-section grounds. The system's true black.
- **Studio Plum** (#3A2A5E): Body copy on paper where pure ink would feel harsh.
- **Muted Mauve** (#6E6486): Secondary text, eyebrows, captions.
- **Sand Line** (#EAD9C2): Hairlines and dividers on paper.
- **Soft Lavender** (#9A7EE6): Eyebrow text and tint fills; footer gradient tail.

### Named Rules
**The One-Accent-Per-Section Rule.** Each section crowns exactly one dominant candy accent for grounds, shadows, and headline emphasis. Micro-accents (10px chips, numerals, caption flags, alternating card shadows) may rotate through the family — they read as confetti, not competition. If two accents ever share the same visual weight on one screen, delete one.
**The Ink-Text-on-Candy Rule.** Marigold, lime, and bubblegum backgrounds always carry plum-ink text; grape and tangerine fills may carry white or paper text. Never place muted mauve text on a candy fill.

## Typography

**Display Font:** Bricolage Grotesque (with Manrope fallback)
**Body Font:** Manrope (with Arial fallback)
**Label/Mono Font:** DM Mono (monospace fallback)

**Character:** Bricolage brings quirky, expressive confidence to headlines — slightly condensed, high-contrast strokes that feel printed and joyful. Manrope stays invisible and highly legible for everything functional. DM Mono stamps the studio-printed feeling onto eyebrows, numerals, buttons-in-spirit, and captions.

### Hierarchy
- **Display** (800, clamp(50px, 7.2vw, 116px), 0.98): Hero and page-hero H1s only. Tight tracking (-0.03em). Rotating hero words sit on an acid-lime marker highlight.
- **Headline** (700, clamp(30px, 3.2vw, 44px), 1.04): Section H2s. Emphasis words set in grape (light sections) or lime (dark sections), never italic.
- **Title** (700, 20–26px, tight): Card titles, FAQ questions, method names, benchmark labels. Bricolage throughout.
- **Body** (400, 15–18px, 1.5): Manrope for ledes, bios, case copy. Long-form stays in the 60–75ch range via max-width containers.
- **Label** (700, 10–11px, 0.08–0.12em, uppercase): DM Mono for eyebrows, nav, stickers, counters, captions, form hints.

### Named Rules
**The Three-Voice Rule.** A screen may speak in Bricolage (statements), Manrope (explanations), and DM Mono (labels) — never a fourth voice, never Bricolage for body copy.
**The Marker Rule.** The cycling hero word rides in an ink pill with lime text (never body copy); headline emphasis inside sections uses flat grape/lime color, not pills.

## Layout

A centered editorial column (`min(1320px, 100% − 96px)`, mobile `100% − 42px`) with full-bleed color bands (marquee, FAQ paper-deep band, gallery, contact, footer) and contained ink CTA cards breaking the rhythm. Density is comfortable: 88–110px section padding desktop, 72–80px mobile. Signature compositions: two-column hero (copy left, mosaic art right, stacking on mobile), sticky section headings beside service/case lists, five-up method cards collapsing to one column, partner triptych with slight alternating tilts. Responsive behavior is single-column collapse below 768px with a second tightening at 420px; the floating island header shrinks to brand + hamburger, desktop nav and CTA hide. Spacing rhythm runs 8/16/24px for components and 90–150px for sections.

## Elevation & Depth

Depth is structural and tactile, not ambient: there are no soft blurred shadows anywhere in the system. Surfaces sit flat on paper by default and declare themselves with 1.5–2px ink borders plus hard offset shadows that read as printed stickers.

### Shadow Vocabulary
- **Pop** (`box-shadow: 4px 4px 0 #1A1025`): Cards, stickers, filter bars, pills with presence.
- **Pop Large** (`box-shadow: 8px 8px 0 #1A1025`, or 8px in grape/tangerine for feature frames): Hero art, case-detail image, belief panel.
- **Press** (`box-shadow: 3px 3px 0 #1A1025` shifting to 5–6px on hover with a −1/−2px lift): Buttons and CTAs; `:active` scales to 0.97.

### Named Rules
**The Sticker-Stock Rule.** If a surface has a shadow, it also has an ink border and a radius of 12px or more — shadows never float on bare rectangles.
**The Restraint Direction.** The system currently sits at its maximum tactile weight. Future refinement should remove shadows before adding any: prefer flat cards with stronger typography over more pop. (Recorded per user direction, 2026.)

## Shapes

Fully rounded pills (999px) for every interactive or label element: nav links, stickers, buttons, chips, tags, caption flags, back-to-top. Content containers use exaggerated squircle radii: 22px cards and frames, 18px tiles and mosaic cells, 12–14px number chips and badges. Borders are always 1.5–2px solid plum ink on light surfaces; dark surfaces use translucent paper borders or none. Geometry stays rectangular-with-radius — no blobs, arches, or clipped corners; playfulness comes from slight rotations (−2° to +2° on stickers, cards, and gallery frames, all removed under reduced motion and on small screens where noted).

## Components

### Buttons
Tactile pills with a conscience. **Shape:** fully rounded (999px), 1.5px ink border, 3px offset shadow. **Primary:** acid-lime fill, ink text, 16px 24px padding, 13px/800 type. **Hover:** tangerine fill, white text, lifts −1/−2px with a 5–6px shadow; `:active` scales to 0.97. **On dark:** ink fill, lime text, same geometry. **Focus:** visible 2px ring treatment on all controls.

### Stickers
- **Style:** mono uppercase 11px/700, 8px 16px padding, 1.5px ink border, 3px shadow, slight rotation (−2° default; lime +1.5°, bubblegum −1°). Fills rotate through marigold, lime, bubblegum, grape (white text), and ink (lime text).
- **State:** static labels, not buttons — they never carry actions, only eyebrows and counts.

### Cards / Containers
- **Corner Style:** 18–22px squircle; feature frames 26–28px.
- **Background:** card white on paper; ink on dark sections; marigold owns the gallery band; grape owns the belief panel (white text).
- **Shadow Strategy:** pop / pop-large per Elevation; alternating accent-colored shadows (tangerine, grape, marigold) across case-card sequences.
- **Border:** 1.5–2px ink, always with the shadow per the Sticker-Stock Rule.
- **Internal Padding:** 20–40px by prominence; alternating ±0.5° tilts on card sequences, straightened on mobile.

### Inputs / Fields
- **Style:** transparent background, no box — a single 1.5px sand-to-graphite bottom border, 12px vertical padding, 16px Manrope text; mono 11px labels above, live counts and `role=alert` errors below.
- **Focus:** bottom border shifts to ink; focus-visible rings on buttons.
- **Error / Disabled:** error red (#C22E2E) border + message; submit button shows disabled wait state while sending.

### Navigation
- **Style:** floating island pill (fixed, top 14px, 66px, blurred paper at 88%, 1.5px ink border, pop shadow). Mono uppercase 11px links as mini-pills: hover fills lime with ink border; current page is ink fill with lime text. Grape pill CTA with pop shadow, tangerine on hover.
- **Mobile:** island keeps brand only; the thumb dock (Home, Services, Work, Menu, Start) owns navigation and conversion, and its Menu button opens the same right slide-in panel (88vw/420px, dimmed backdrop with fade, focus moved to close, Esc closes).

### Gallery Frame (Signature Component)
Tilted sticker-card for campaign imagery: ink ground, 2px ink border, 20px radius, 5px offset shadow, alternating ±0.7° tilt; lime label chip top-left, sun display numeral bottom-right, shimmer skeleton until load, caption below in display title + muted description. Lives on the marigold band with an ink progress pill.

## Do's and Don'ts

Concrete guardrails grounded in the shipped implementation and confirmed user direction.

### Do:
- **Do** crown one candy accent per section and let typography carry the rest (One-Accent-Per-Section Rule).
- **Do** set display type in Bricolage 700–800 with tight tracking; keep body in Manrope and labels in DM Mono (Three-Voice Rule).
- **Do** pair every shadow with an ink border and ≥12px radius (Sticker-Stock Rule).
- **Do** animate only transform and opacity with the spring curve (`cubic-bezier(0.32, 0.72, 0, 1)`); gate hover motion to fine pointers and kill movement under reduced motion.
- **Do** label proposal-stage numbers as proposals, never results — proof over promises.
- **Do** end every page one click from an inquiry.

### Don't:
- **Don't** use gray minimalism, timid hairlines, or interchangeable geometric sans headlines — the confirmed anti-reference.
- **Don't** put two candy fills in competition on one screen, and don't set muted text on candy fills.
- **Don't** invent testimonials, metrics, pricing, or social profiles the company has not provided.
- **Don't** add shadows without borders, animate layout properties, or ship motion without reduced-motion handling.
- **Don't** flatten toward restraint by merely shrinking everything — remove shadows and let type do the work (per the Restraint Direction).
