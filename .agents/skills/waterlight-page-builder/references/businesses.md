# Our Businesses: page specifics

The Businesses section should be one of the most visually powerful parts of
the website. It is where the platform's breadth becomes tangible. Give it
more visual ambition, richer motion and stronger imagery than other inner
pages, while staying within the existing tokens and components.

## Scoped exception to the variation rules

Applies only to /businesses and its children:

- Pages may use a tall, immersive, image-led header (up to ~80vh) with
  oversized type. It must NOT replicate the homepage's full-screen cinematic
  hero: different composition, different image treatment, sector-specific.
- Motion may be richer than the site default (layered parallax, scroll-pinned
  sequences, animated diagrams), but must remain purposeful and respect
  prefers-reduced-motion with a static fallback for every animation.
- All other rules still apply: show don't tell, placeholders flagged, no
  invented metrics, WCAG 2.2 AA, mobile-first, no repeated layout pattern
  within a page.

## Canonical sectors (routes, names, capabilities)

Use these exact names and slugs. Capabilities are scope statements, shown as
short labels/chips or hotspot tags, never as claims of delivered projects.

| Route slug                        | Name                                | Capabilities                                                                                                                                                       |
| --------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| water-smart-infrastructure        | Water & Smart Infrastructure        | Smart water systems; Solar-powered water infrastructure; Water treatment; Water distribution; AI monitoring; Water reuse; Commercial and municipal water solutions |
| renewable-energy                  | Renewable Energy                    | Solar infrastructure; Distributed energy; Energy storage; Hybrid systems; Clean-energy infrastructure; Energy solutions for industry and communities               |
| agriculture-food-systems          | Agriculture & Food Systems          | Agri-infrastructure; Food processing; Agricultural technology; Food security; Cold-chain infrastructure; Climate-smart agriculture                                 |
| technology-digital-infrastructure | Technology & Digital Infrastructure | Artificial intelligence; Digital platforms; Smart infrastructure; Data systems; Fintech; Automation; Digital transformation                                        |
| industrial-development            | Industrial Development              | Manufacturing; Industrial facilities; Processing; Technology localization; Equipment production; Industrial partnerships                                           |
| real-estate-urban-infrastructure  | Real Estate & Urban Infrastructure  | Affordable housing; Smart cities; Commercial development; Urban infrastructure; Sustainable buildings                                                              |
| logistics-supply-chains           | Logistics & Supply Chains           | Transportation infrastructure; Warehousing; Distribution; Supply-chain technology; Cross-border trade infrastructure                                               |
| climate-esg-solutions             | Climate & ESG Solutions             | Climate-resilient infrastructure; Circular economy; Resource efficiency; Clean technologies; Sustainable investment                                                |

If the sitemap's shorter names (Energy, Technology & AI, Industry, Logistics,
Climate & ESG) are used in nav, use them as short labels only; the table
above is canonical for headings.

## Index page (/businesses)

Archetype: section index, elevated. This is the showpiece of the section.

- Open with a large editorial header and a visual sector selector, not a card
  list: eight sector panels as an immersive, interactive composition
  (e.g. full-height expanding image panels on desktop, snap-scroll stacked
  panels on mobile). Hover/focus reveals the sector's capabilities; click
  navigates to the sector page.
- Each panel: sector image slot, sector motif accent, name, one-line value
  prop, 3 capability chips max.
- Below the selector, add ONE connective section showing how sectors
  reinforce each other (e.g. a simple system diagram: water + energy +
  digital monitoring + agriculture). Visual, not prose.
- Close with the role-based conversion section.
- Every sector must be keyboard-reachable and have a visible focus state.

## Sector page (/businesses/<slug>)

Archetype: detail page, elevated. Use the sector's visual motif (below) as
the centrepiece so no two sector pages look alike.

- Immersive split or full-bleed header: sector image/video slot, name,
  one-line value prop, 3-4 flagged placeholder key facts.
- Capabilities presented as an interactive visual (motif-driven), NOT a
  bullet list. Every capability from the table must appear.
- One proof strip (placeholder stats with count-up, flagged).
- One focused visual block showing the sector's role in the value-creation
  lifecycle or its link to a related sector.
- Related sectors (visual links), related projects (placeholder cards with
  stage badge and opportunity type), then the conversion CTA.
- Vary composition between sector pages while staying coherent as a family.

## Visual motif per sector (centrepiece idea; adapt, don't repeat)

- Water & Smart Infrastructure: flowing-water/light treatment; link to the
  WSWIS flow (Solar > Treatment > Storage > Distribution > Monitoring).
  Cross-link to /innovation/wswis.
- Renewable Energy: energy-flow diagram (generation > storage > hybrid
  distribution > industry/communities); sun-arc or day-cycle animation.
- Agriculture & Food Systems: field-to-market chain (farm > processing >
  cold chain > distribution) as a horizontal journey.
- Technology & Digital Infrastructure: layered data/network grid with
  hover-revealed layers (data, AI, platforms, automation).
- Industrial Development: production-line or blueprint-style
  schematic (design > localize > manufacture > partner).
- Real Estate & Urban Infrastructure: stylised city or isometric
  cross-section with tappable zones (housing, commercial, utilities).
- Logistics & Supply Chains: corridor/route map with hubs, warehousing and
  cross-border nodes; status legend as per the global map rules.
- Climate & ESG Solutions: circular-economy loop diagram with resource
  efficiency and clean-tech nodes; bridge to /impact.

Use placeholder images still.

## Content rules specific to this section

- Short copy only: headline, one-line value prop, labels. No long-form.
- Do not state delivered projects, capacities, client names or footprint.
  All such data is placeholder-flagged.
- Photography direction per sector: authentic infrastructure, systems and
  people at work. No generic stock or charity imagery.
- No confidential investment material; use "Request access" CTAs.
- Keep sector data in one typed data file (e.g. lib/businesses.ts) so the
  index, sector pages, nav and related-links all read from a single source.
