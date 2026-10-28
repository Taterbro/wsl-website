# Impact: page specifics

Load ONLY for routes under /impact, and whenever building an "Impact bridge"
module on another page (e.g. a sector page, the iHEAL company page, the
homepage). This section holds three hard constraints: the commercial group
and the nonprofit stay clearly separate, status claims need documentation,
and no outcome is stated as fact unless verified.

## Scoped exceptions

- Tone: credible and humane, not promotional. Evidence-led. Dignity over
  drama; avoid poverty tropes and "saviour" framing.
- Archetypes are set per route below. No cinematic hero. A tall editorial
  header is allowed on /impact/iheal-framework only.
- Motion: restrained. Count-ups only for flagged placeholders or verified
  data. Static fallback under prefers-reduced-motion.

## Routes and archetypes

- /impact: section index. Compact header, then a visual grid of the four
  children. The Waterlight Save Initiative card is visually distinct from
  the other three (see "Separation rules").
- /impact/sustainability: editorial detail page. Sustainability and ESG
  approach shown as a visual framework plus a measured-outcomes strip
  (placeholder-flagged). Link to /our-businesses/climate-esg-solutions.
- /impact/development-partnerships: partner-type directory. Show partner
  CATEGORIES (multilateral, development finance, NGO, public sector,
  research) as labelled cards. Do not name partners, show logos or imply
  agreements without written approval. CTA to /partner-with-us.
- /impact/waterlight-save-initiative: a page about a separate organisation.
  Distinct treatment, external link, status wording placeholder.
- /impact/iheal-framework: framework explainer (see below).

## Separation rules (commercial group vs nonprofit)

- Waterlight Save Initiative is an independent nonprofit/development
  organisation. Never style it as a commercial subsidiary, list it under
  Companies, include it in group structure or ownership diagrams, or give
  it a "subsidiary" or "business" label.
- Visual treatment: its own colour accent or neutral frame from the
  existing tokens, no sector motif, no commercial card pattern. Wherever it
  appears, include the label "Independent nonprofit organisation".
- Use the full name "Waterlight Save Initiative" on first mention per page.
- No donation form, payment flow or fundraising on the group site. Link
  out to the organisation's own site: PLACEHOLDER URL, confirm with owner.
- Do not imply financial flows, shared governance or control between the
  group and the nonprofit.

## Claims and status (single source: lib/impact.ts)

Keep impact data in one typed file so pages never hardcode claims:

- statusClaims: each { value, approved, source } (e.g. 501(c)(3) status,
  UN ECOSOC-related status). Render only when approved === true; otherwise
  omit the claim entirely from the HTML. Wording must match current
  supporting documentation exactly. Never use UN, ECOSOC or any
  third-party logo or emblem.
- metrics: each { label, value, unit, period, methodology, kind, approved,
  placeholder }. kind is "Expected" or "Achieved". Show "Achieved" only if
  approved. Seeded values are placeholder: true. Never present invented
  beneficiaries, outcomes or coverage as fact.
- SDGs are shown as "areas of focus", not as claims of contribution,
  unless supporting evidence is supplied.
- Pillars (iHEAL) live here too, with the exact wording below.

## iHEAL framework (/impact/iheal-framework)

Purpose: present iHEAL as a development and impact framework, a shared
philosophy of sustainable development. It is not a service line and not a
description of what any Waterlight company does.

Pillars (exact wording):

- I: Innovation, Income & Infrastructure
- H: Healthcare & Hygiene
- E: Education & Empowerment
- A: Agriculture, Access to Food & Clean Water
- L: Living Standards, Leadership & Livelihood Opportunities

Rules:

- Centrepiece: the five letters as oversized type, each revealing its
  sub-terms on hover/tap/focus (keyboard-operable). Pillars are not
  sequential, so do not use a flow or stage diagram, and do not reuse the
  WSWIS or value-creation compositions.
- Visible framing line near the hero, e.g. "A development and impact
  framework that informs how Waterlight approaches opportunities. Not every
  Waterlight company undertakes every activity."
  // PLACEHOLDER: wording to be approved by the owner.
- Do not map pillars to sectors, subsidiaries or named companies.
- Waterlight iHEAL Global Limited is a separate company page under
  /companies. Link to it only as a "Related company" with a line stating it
  is a separate entity. Never present the framework as that company's
  offering.

## Impact bridge module (used on other pages)

A small, reusable block: one line, one visual, link to /impact. If it
mentions Waterlight Save Initiative, it must carry the "Independent
nonprofit organisation" label and the distinct treatment above.

## Content and imagery rules

- Short copy only: headline, one-line support, labels.
- Imagery: authentic people at work, institutions, infrastructure. No
  generic charity stock, no distressed-subject imagery. Real people need
  documented consent. All seeded images are placeholders with descriptive alt.
- Do not frame Waterlight's technologies (e.g. WSWIS) as only for
  underserved communities.

## Compliance and review flags

- Flag for human review before launch: status-claim wording, any partner
  names, framing line, the outbound link, and use of any third-party marks.
- Do not publish any claim lacking current supporting documentation.
