---
target: homepage
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:C:\\Users\\harsh\\dun_digital\\src\\pages\\index.astro"
target_fingerprint: "sha256:d2c7b199da366c6d34137a5a763e18d89b48ce2a0eacd9051c84d90b1125739a"
target_path: "C:\\Users\\harsh\\dun_digital\\src\\pages\\index.astro"
timestamp: 2026-10-04T09-49-02Z
slug: src-pages-index-astro
closed: true
---
Method: dual-agent (A: ses_ef9b06989ffe · B: ses_ef9b06966ffe)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Drawer/gallery/counters give feedback; demo-mode copy leaks internals at peak trust |
| 2 | Match System / Real World | 3 | Plain-spoken SMB + institutional language; docked for generic "Gateway to excellence" caption |
| 3 | User Control and Freedom | 3 | Drawer Esc/backdrop/focus-restore, menu Esc/overlay; no destructive actions on surface |
| 4 | Consistency and Standards | 2 | Token alias drift (site.css vs global.css); service chip colors rotate arbitrarily |
| 5 | Error Prevention | 3 | Inline validation, honeypot, rate limit, focus-to-first-error |
| 6 | Recognition Rather Than Recall | 2 | Deliverables hidden behind hover-only disclosure; services known by title alone |
| 7 | Flexibility and Efficiency | n/a | Persuade surface with one task; no accelerators expected |
| 8 | Aesthetic and Minimalist Design | 2 | Disciplined tokens, but one scroll stacks hero + marquee + intro + services + method + cases + gallery + contact |
| 9 | Error Recovery | 3 | role=alert field + form errors with mailto fallback |
| 10 | Help and Documentation | n/a | No complex task; drawer + email is the help |
| **Total** | | **21/32** | **Acceptable (66%)** |

## Design Specificity Verdict

**LLM assessment**: Authored, not interchangeable. Chennai anchoring, named dual-audience proof (Raagam, TNPCB cloth-bag campaign, Duggar, Diaspora Day with labeled proposal benchmarks), enforced candy-editorial system with a codified one-accent rule. Generic residue: "Gateway to digital excellence" caption and "move as one" lede could belong to any agency.
**Deterministic scan**: 20 advisory hits, zero errors/warnings. 15 font-size (10px micro-labels below ramp, fluid clamp endpoints), 2 radius (14/20px between scale steps), 3 color (stale pre-redesign rgba values in gallery skeleton/hover — real drift, since fixed). Detector caught the stale palette leftovers the review underweighted; its size/radius hits are false positives against deliberate micro-label and frame geometry.

## Overall Impression

A confident, coherent marketing surface with honest proof mechanics and above-norm drawer engineering. Biggest opportunity: the conversion moment (mobile CTA persistence, demo-gated drawer copy, touch-invisible deliverables) — the three findings standing between evaluation and inquiry.

## What's Working

1. Proof honesty as design: proposal benchmarks explicitly labeled not-yet-realised; DESIGN.md forbids invented validation.
2. Drawer engineering: focus trap/restore, honeypot, rate limit, abort timeout, inline + form-level errors.
3. Motion discipline: transform/opacity-only, fine-pointer gating, comprehensive reduced-motion handling.

## Priority Issues

- **[P0] Demo copy ships as conversion UI** — `InquiryDrawer.astro:35-36` renders "Demo form. Set PUBLIC_INQUIRY_ENDPOINT…" at peak intent; footer confesses "No newsletter automation attached yet." Why: internal TODO language at the trust close kills institutional confidence. Fix: neutral copy in both modes, never render env-var names; footer becomes a mailto invite. Suggested: $impeccable clarify + $impeccable harden.
- **[P1] Mobile loses persistent conversion** — header CTA hidden ≤768px; hamburger buries Start-a-conversation 5th of 6 links. Why: mobile visitor must hold intent from hero to page end. Fix: keep compact island CTA on mobile. Suggested: $impeccable adapt.
- **[P1] Deliverables invisible on touch** — `.service-more` expands on hover/focus-within only; touch never reveals the "one roof" proof. Why: core differentiator unreachable on phones. Fix: expand by default under `(hover: none)`. Suggested: $impeccable adapt + $impeccable layout.
- **[P2] One-accent rule broken in code** — hero figcaptions, contact radials, case shadows, service chips rotate multiple accents per section vs DESIGN.md rule. Why: system contradicts its own documentation. Fix: revise rule to dominant-accent + micro-accent tolerance. Suggested: $impeccable document (rule revision, done this run).
- **[P2] Gallery is drag-only** — mouse-only drag handlers, no keyboard paging or visible controls; img alt duplicates visible caption. Why: keyboard and SR users get a lesser gallery. Fix: prev/next buttons, arrow-key paging, empty alt with article label carrying the name. Suggested: $impeccable adapt + $impeccable harden.

## Persona Red Flags

- **Jordan (first-timer)**: rotating H1 destabilizes the promise on first paint (mitigated: settles after 3 cycles); 12-pill industry cloud is non-clickable wallpaper, ungrouped SMB vs institutional; "Meet the team" link visually weaker than adjacent numerals.
- **Riley (stress tester)**: broken-image path removes `<img>` leaving bare ink stage; service arrow hit area relies on 8px pseudo-expansion; JS-stalled headings risk invisibility (noscript covers preloader only).
- **Casey (mobile)**: hero CTA pushed below 300px+ art; gallery 78vw tilted cards flirt with horizontal overflow; contact orbit decor precedes the Say-hello heading visually.

## Minor Observations

- Skip link targets top-of-main, acceptable.
- 10–11px mono on lime/sun and muted-on-paper carry contrast risk; no formal WCAG audit run (PRODUCT.md records this as open).
- Mosaic 9px caption pills are decorative at glance distance; acceptable.
- Detector's 15 size + 2 radius hits accepted as deliberate micro-label/frame geometry.

## Questions to Consider

- What would a 10-second institutional skim path look like if CII/TNPCB proof moved above the services fold?
- Which three pop shadows would you delete to let Bricolage do the work, per the recorded Restraint Direction?
- Is the inquiry drawer, alone, a strong enough trust close — or does proof need a new artifact (redacted deliverable, calendar screenshot)?
