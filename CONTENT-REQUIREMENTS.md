# Dun Digital — Content, Image & Data Requirements

What to send, in what shape, and exactly where each item will appear on the site.
Nothing here will be invented: anything marked **required for publish** blocks its section until you provide it.

---

## 1. Testimonials & proof (new "Proof wall" section on home)

Status: section does not exist yet — it will be built the day this content arrives.

| # | Item | Spec | Where it appears |
|---|------|------|------------------|
| 1.1 | Client quotes (3–5) | 1–2 sentences each, plain language. Per quote: **full name, role, company**, and one line confirming **permission to publish** (e.g. "approved for website use"). Max ~180 characters per quote so cards stay even. | Proof wall cards on `/` |
| 1.2 | Client logos (5–8, optional but high value) | **SVG preferred**, PNG with transparent background accepted (min height 80px). Only logos you have **written permission** to display. | Logo strip above proof wall on `/` |
| 1.3 | Hard metrics (2–4) | Per metric: **number + unit, label, time period, and context** (e.g. "135 leads in 13 days, Meta ads, Tamil Diaspora Day"). Realised results only — proposal targets stay labeled as proposals, per site policy. | Proof wall stat tiles on `/` |
| 1.4 | Permission note | One line per client asset: who approved it and when. Kept on file, never published. | Internal record |

**Required for publish:** 1.1 + 1.4 (minimum 3 quotes). Logos and metrics are optional enhancements.

---

## 2. Contact coordinates (contact page grid + footer)

Current state: email-only. Anything you add here goes live in the coordinates grid on `/contact/` and the footer.

| # | Item | Spec | Where it appears |
|---|------|------|------------------|
| 2.1 | Phone / WhatsApp | Full international format (e.g. +91 …). State whether calls, WhatsApp, or both — and **preferred hours**. | Contact grid card, footer |
| 2.2 | Studio address | Street + area + city + PIN, plus one line on visits (walk-in / by appointment / remote-first). | Contact grid card |
| 2.3 | Social profiles | Full URLs for each active profile (Instagram, LinkedIn, …). **Only profiles that are live and maintained** — dead links are worse than none. | Footer "Start here" column |
| 2.4 | Response promise | Confirm or correct: "we reply within 2 business days." If different, give the exact SLA wording. | Drawer, contact page, footer |

**Required for publish:** nothing — email-only remains the fallback. Each item ships independently.

---

## 3. Team & about page

| # | Item | Spec | Where it appears |
|---|------|------|------------------|
| 3.1 | Partner photos (3) | Portrait orientation, min **800×1000px**, JPG ≤ 400KB each, consistent background if possible (same shoot day ideal). Named: Nicky Jain, Shikha Jain, Pooja Sathya Narayanan. | Partner cards on `/about/` (monogram marks are the current fallback) |
| 3.2 | Bio updates | Corrections/additions to the three published bios, if any. Max ~280 characters each to preserve card rhythm. | Partner cards on `/about/` |
| 3.3 | Team beyond partners (optional) | If you want a wider team shown: photo + name + role per person, same photo spec as 3.1. | New team grid on `/about/` |
| 3.4 | Hiring | Are you hiring? If yes: role titles + one-line each + how to apply (email link). If no, nothing changes. | Small strip on `/about/` (only if applicable) |

**Required for publish:** nothing — monograms remain until photos arrive.

---

## 4. Press & coverage (footer + case studies)

| # | Item | Spec | Where it appears |
|---|------|------|------------------|
| 4.1 | Coverage links (any number) | Per item: **outlet name, article title, full URL, publication date**. | "In the press" list — footer or about, depending on volume |
| 4.2 | Press logos (optional) | Same spec as 1.2. Only with permission. | Alongside 4.1 |

**Required for publish:** nothing — section is built only if ≥2 items arrive.

---

## 5. Brand & social assets

| # | Item | Spec | Where it appears |
|---|------|------|------------------|
| 5.1 | Logo files | Master artwork: **SVG** + high-res PNG (transparent, min 2000px wide). Confirms the current "D" mark or replaces it. | Header, footer, manifest icon |
| 5.2 | Social share image | **1200×630px** JPG/PNG ≤ 300KB. Used when any page link is shared on WhatsApp/Twitter/LinkedIn. Without it, shares show a gallery photo. | `og:image` / `twitter:image` on all pages |
| 5.3 | Favicon (optional) | If the "D" mark should change; otherwise the current SVG stands. | Browser tab, app icons |

**Required for publish:** 5.2 strongly recommended — it controls how the brand looks in every shared link.

---

## 6. Gallery & case imagery (ongoing)

The gallery currently runs 38 photos across 6 folders. For new additions:

| # | Item | Spec |
|---|------|------|
| 6.1 | Photos | JPG, **landscape preferred** (frames crop to 4:3), min **1600px wide**, ≤ 500KB each. No screenshots of text-heavy screens — they render poorly at card size. |
| 6.2 | Captions | Per photo: client/project name + one line of context (what the viewer is looking at). Captions double as image `alt` text. |
| 6.3 | Case-study heroes | The 3 imageless cases (Meendum Manjappai, Duggar Housing, Tamil Diaspora Day) currently use tinted grounds. One landscape image each (same spec as 6.1) promotes them to full photographic cards. |

---

## 7. Going live (data, not content)

These unblock functionality, not pages:

| # | Item | Spec |
|---|------|------|
| 7.1 | Inquiry endpoint | Where should drawer submissions POST as JSON? One of: a Formspree/ Basin endpoint URL, a Resend/API route you own, or "keep mailto-only" (drawer stays in staged mode). Set as `PUBLIC_INQUIRY_ENDPOINT`. |
| 7.2 | Contact form | Google Forms embed URL for `/contact/`, or confirm the drawer + email is enough (section stays hidden until provided). |
| 7.3 | Newsletter | Email provider + list ID for real signup, or confirm mailto-only (current "Get the notes" button stays). |
| 7.4 | Analytics (optional) | Privacy-friendly analytics snippet (e.g. Plausible/Umami domain + script) if you want traffic data. Nothing ships without it — the site currently has zero tracking. |

---

## How to send

- Text (quotes, bios, addresses, links): paste into chat or one shared doc — keep the numbering (1.1, 2.3, …) so items land in the right slots.
- Images/logos: original files, not screenshots or chat-compressed forwards; name files `clientname-usetype.ext` (e.g. `raagam-logo.svg`, `nicky-jain-portrait.jpg`).
- Partial sends are fine: every numbered item ships independently the moment it arrives. Sections marked "built on arrival" (proof wall, press list, team grid) appear with the first valid item, not before.
