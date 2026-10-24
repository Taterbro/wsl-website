# Projects: page specifics

Load ONLY for routes under /projects. Reads from lib/projects.ts (shared
with Opportunities and sector pages). Do not define project data inline.

## Routes and archetypes

- /projects: section index, compact header, links to four children
- /projects/portfolio: gallery/directory, all approved projects, filters
  matching Opportunities (Sector, Country, Stage, Opportunity Type,
  Impact Area), URL-query state
- /projects/project-map: map is the centrepiece. Four statuses: Established
  Operations; Active Partnerships; Projects / Opportunities; Strategic
  Target Markets. Never imply presence, office or investment where none
  is verified. Placeholder markers default to "Projects / Opportunities"
  or "Strategic Target Markets".
- /projects/flagship-projects: editorial, large cards, flagship === true
- /projects/development-pipeline: stages Concept to Financing only, shown
  as a staged board or timeline, not a card grid
- /projects/<slug>: individual project page (reserve the slugs portfolio,
  project-map, flagship-projects, development-pipeline)

## Individual project page

Archetype: detail page, elevated. Short copy; lead with media.
Sections (vary composition, no repeated pattern):

- Header: media slot, name, country, sector, stage badge, opportunity type
- Key facts strip: country, sector, stage, investment status, value range
  (only if approved)
- Problem to Waterlight solution: a visual before/after or flow, not prose
- Technology: tags or a small diagram
- Partners: only if approved (names and logos need written permission);
  otherwise omit the block entirely
- SDGs: icon row with numbers and labels
- Expected economic impact: labelled "Expected", placeholder-flagged
- Gallery/video
- Related projects (same sector or country), then conversion CTA
  (Request information / Partner / Invest) via the shared enquiry engine
  with the project slug prefilled

## Rules

- Use generateStaticParams, notFound() for unknown slugs, and per-project
  metadata.
- Fields with approved === false or access === "gated" must be absent from
  the rendered HTML and page payload, not hidden with CSS or client logic.
- Access pages only through getProjects()/getProject(slug).
- No yields, returns or offer language. Link /legal/investment-disclaimer.
- All seeded projects are placeholder: true. Never use real-sounding
  names, partners or values as fact.
- Stage values: Concept, Development, Investment Ready, Financing,
  Construction, Operational.
