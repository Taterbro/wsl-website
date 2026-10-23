Create a skill called `waterlight-page-builder` for this Next.js project.

## Purpose

When I ask for a page (e.g. "build the Projects page", "make the WSWIS page"),
the skill generates it so it feels like the existing homepage and uses the
project's existing design tokens. The homepage is already built.

## Skill structure

- SKILL.md: short, with the workflow below and the trigger description.
- references/design-brief.md: the condensed brief (copy it from the section
  below). This is the ONLY design context the skill loads by default.

Do NOT make the skill read WSL-DESIGN-DOC.md in full. If a page needs
page-specific content structure (e.g. the sitemap, project card fields, WSWIS
flow), grep the doc by heading, read only that section, and never load the whole file.

## Workflow the skill should follow

1. Read references/design-brief.md.
2. Read the homepage ONLY to learn the tokens, shared components (buttons, cards,
   containers, headings, motion helpers) and spacing scale. Do NOT copy its section
   order, layout structure or hero composition. The homepage is a source of parts,
   not a template for pages.
3. Reuse existing components. Only create new ones when nothing fits, and put
   them next to the existing ones in the same style.
4. Build the page in the App Router (app/<route>/page.tsx), server components
   by default, "use client" only where interaction or motion needs it.
5. Fill all content with clearly marked placeholders (see rules).
6. Finish with a 3–5 line summary: route created, components reused/added,
   and which placeholders need real content.

## Page rules

- Show, don't tell. Lead with imagery, diagrams, maps, cards, stats and
  interactive sections. Copy is short: headline, one-line supporting text, labels.
  Only write long-form copy if I explicitly ask for it.
- Every page opens with a strong visual hero (large type + image/video slot),
  then alternates visual sections. No walls of text.
- Placeholder content: use realistic but obviously fake data. Images use
  next/image with a placeholder path or gradient block and a descriptive alt.
  Mark placeholder data with `// PLACEHOLDER` comments or a
  `placeholder` flag so it is easy to find and replace. Never present
  invented metrics, project names or footprint as fact.
- Mobile-first, responsive, WCAG 2.2 AA (contrast, keyboard nav, alt text,
  reduced-motion support).
- Motion is slightly restrained: subtle parallax, fade/slide on scroll, data count-ups,
  map transitions.
- Include a closing conversion section ("Build With Waterlight" style) where
  it makes sense for the page.
- Don't copy Brookfield or Hitachi layouts, copy or assets.

#### Variation rules

- Do not use the homepage's full-screen cinematic hero on inner pages.
  Reserve it for the homepage. Inner pages use a smaller, page-specific header.
- Choose a layout based on this page's purpose. Don't default to the
  hero → cards → dark section → CTA sequence.
- Vary section composition: a page should not repeat a layout pattern more
  than once. Mix full-bleed, split, grid, strip and editorial layouts.
- Before writing code, state in 3-4 lines the page's archetype, its single
  primary goal, and the section order you chose and why.

## references/design-brief.md content

### Brand

Waterlight Group: African-founded global enterprise platform that builds,
invests in and scales businesses, infrastructure and technologies.
Promise: "Building a Sustainable Future."
Descriptor: Investment • Industry • Innovation • Infrastructure • Impact
Thesis: "Africa is Now." Bridge: "From Africa to the World. From the World to Africa."
Character: institutional, ambitious, intelligent, modern, trustworthy,
sustainable, execution-focused.

### Feel

- NOT a conventional holding-company brochure. It should feel like a platform
  where serious global opportunities are discovered, structured and built.
- Spacious, premium, institutional, modern. Large typography, strong
  editorial photography, restrained motion.
- Institutional + future-facing + African confidence.
- Target visitor reaction: "This is an African-founded global group that
  understands investment, infrastructure and the future, and there may be a
  serious opportunity for us to work together."
- Tone: confident but evidence-led; global without pretending to be larger
  than current reality.
- Benchmarks (learn, don't copy): Brookfield's investment discipline plus
  Hitachi's multi-sector clarity, with Waterlight's own African identity.

### Visual system

- Palette: deep corporate tones with one restrained premium accent. Use the
  project's existing tokens only.
- Typography: modern international sans-serif, strong display hierarchy,
  oversized headline moments (e.g. "AFRICAN ROOTS. GLOBAL VISION.").
- Sections alternate between clean white fields and dark high-contrast
  sections (e.g. dark for value-creation, high-contrast for conversion).
- Cards: large imagery, short copy, clear status/sector label.
- Photography: authentic infrastructure, cities, people at work, technology,
  agriculture, industrial systems. No generic charity stock imagery.
- Maps: distinguish operating presence, partnerships, target markets and
  opportunities, so the footprint is never overstated.
- Data: only verified metrics in production; placeholders must be flagged.

### Reusable section patterns (from the homepage blueprint)

This is a menu of building blocks, not a sequence. Pick 3-5 that serve this page. Most pages should use a different subset than the homepage.

- Hero: full-bleed image/film, minimal headline, up to three CTAs.
- Thesis: oversized statement on a clean field plus a short narrative.
- Sector panels: horizontal/scrollable, premium imagery, one-line value prop.
- Value-creation lifecycle: animated stages (Identify → Originate → Structure
  → Mobilize → Build → Scale).
- Interactive technical illustration: hover/tap reveals components and markets.
- Project cards: large image, sector, geography, development-stage badge
  (Concept / Development / Investment Ready / Financing / Construction /
  Operational), opportunity type (Equity / Debt / JV / Technology / EPC /
  PPP), filters.
- Magazine-style insight cards (reports, perspectives, news).
- Global map with status legend; click a market for approved activity.
- Impact: measured outcomes plus a bridge to the independent Waterlight Save
  Initiative (a separate nonprofit, never styled as a commercial subsidiary).
- Conversion: role-based routes (Investors, Governments, Financial
  Institutions, Technology Partners, Project Owners, Market Entry).
- Footer: legal entities, offices, policies, newsletter.

### Sitemap (use for routes, nav, breadcrumbs and internal links)

Route pattern: /<section>/<sub-page> in kebab-case, e.g. /about/group-structure.
Parent routes should have an index page that links to their children.

- Home (/)
- About: Our Story | Vision & Mission | Group Structure | Leadership | Governance
- Our Businesses: Water & Smart Infrastructure | Energy | Agriculture |
  Technology & AI | Industry | Real Estate & Urban Infrastructure |
  Logistics | Climate & ESG
- Companies: Waterlight Africa Investments Ltd | Waterlight Industries Limited |
  Waterlight iHEAL Global Limited | Waterlight Limited
- Investments: Investment Strategy | Opportunities | Joint Ventures |
  Project Development | Investor Relations
- Projects: Portfolio | Project Map | Flagship Projects | Development Pipeline
- Innovation: WSWIS | Technology Partnerships | R&D / Innovation
- Global Markets: Africa | GCC | Europe | North America | Asia-Pacific |
  Emerging & Strategic Markets
- Impact: Sustainability | Development Partnerships | Waterlight Save Initiative |
  iHEAL Framework
- Insights: Research | Perspectives | News | Events | Media
- Leadership: Founder & Group CEO | Board | Executive Leadership |
  Advisory / Investment Committees (only as formally constituted)
- Partner With Us: Investors | Governments | Financial Institutions |
  Technology Partners | Project Owners | Market Entry
- Careers
- Contact / Global Offices
- Legal: Privacy | Terms | Cookies | Investment Disclaimer | Accessibility

### Page-specific notes

- WSWIS: "INTELLIGENT WATER INFRASTRUCTURE FOR A CHANGING WORLD." Animated
  flow: Solar Energy → Water Source/Treatment → Smart Storage → Intelligent
  Distribution → Digital Monitoring → Predictive Maintenance → Reliable
  End-User Access. Applications: smart cities, municipalities, institutions,
  healthcare, education, housing, commercial, agriculture, industry, communities.
- Eight business sectors: Water & Smart Infrastructure, Renewable Energy,
  Agriculture & Food Systems, Technology/AI & Digital Infrastructure,
  Industrial Development & Manufacturing, Real Estate & Urban Infrastructure,
  Logistics & Supply Chains, Climate & ESG.
- No confidential investment material on public pages; show approved summaries
  with a "Request access" CTA.

### Page archetypes (pick the one matching the request, then adapt)

- Section index (About, Our Businesses, Impact): compact header, then a visual
  grid or list of child pages. No full-screen hero.
- Detail page (a single business, company, market): split hero (image + key
  facts), a stats/proof strip, one or two focused visual blocks, related
  pages, CTA.
- Gallery/directory (Projects, Insights): slim header, filter bar, dense card
  grid, no storytelling sections.
- Product/technical (WSWIS): a single interactive diagram as the centrepiece,
  with applications below.
- People/trust (Leadership, Governance): portrait grid, credentials, structure
  diagram.
- Conversion (Partner With Us): audience selector first, then a short form or
  routes.
- Legal/utility: minimal, text-first, no imagery.
