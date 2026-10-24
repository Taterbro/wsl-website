# Investments: page specifics

Load ONLY for routes under /investments, and for the corridor module on
/global-markets/gcc. This is where the site becomes commercially powerful:
it must show Waterlight participating across the whole investment lifecycle,
not just "investing in projects".

## Scoped exceptions

Applies to /investments and its children:

- Slim, confident headers are the default (gallery/directory and detail
  archetypes). The lifecycle page may use a tall header per the Businesses
  exception, but never the homepage hero composition.
- Motion: purposeful and tied to the lifecycle (staged reveal, connecting
  lines). Static fallback under prefers-reduced-motion.
- Dense and credible beats cinematic here. Favour structured data, filters
  and diagrams over imagery.

## Canonical lifecycle (use these exact stages, in order)

| #   | Stage     | One-line definition                                                           |
| --- | --------- | ----------------------------------------------------------------------------- |
| 1   | Identify  | Find commercially attractive opportunities and unmet market needs             |
| 2   | Originate | Develop opportunities into structured projects                                |
| 3   | Structure | Determine ownership, financing, technology and implementation models          |
| 4   | Mobilize  | Connect projects with investors, institutions, lenders and strategic partners |
| 5   | Build     | Execute through operating companies, JVs and specialist partners              |
| 6   | Scale     | Expand successful models into additional markets                              |

Rules:

- Every stage must appear on the lifecycle visual, with its definition.
- Reuse the structure of the homepage's investments/value-stages component
  for parts and tokens, but do not reproduce the homepage's treatment.
  The Investments page should go deeper: per-stage expand/hover showing
  what Waterlight does and which partner types are involved (labels only).
- Do not claim stage outcomes (deals closed, capital mobilized). Any
  number is placeholder-flagged.

## Canonical project schema (single source: lib/projects.ts)

One typed data file feeds Opportunities, Projects > Portfolio, sector-page
"related projects", and the Project Map. Fields:

- id, slug, name (PLACEHOLDER), summary (one line)
- sector: must be a slug from lib/businesses.ts (never free text)
- country, region
- investmentSize: banded range (e.g. "$10-50M"), PLACEHOLDER
- stage: Concept | Development | Investment Ready | Financing |
  Under Construction | Operational
- opportunityType: Equity | Debt | JV | Technology | EPC | PPP
- impactArea: PLACEHOLDER list, to be confirmed by the client
- access: "public" | "gated"
- placeholder: boolean (true for all seeded data)
- image slot with descriptive alt

## Access flow: enquiry to human review

Flow: visitor submits "Request access" form -> server handler -> HubSpot
(contact + form submission) -> Waterlight team reviews and contacts the
investor directly. The site never grants access itself and has no investor
login. Do not build login, accounts or a data room UI.

Form fields:

- Full name, work email, organisation, role type (Investor, Government, Financial Institution, Technology Partner, Project Owner, Market Entry), country
- Sector interest (values from lib/businesses.ts), indicative ticket size (banded range), optional message
- Required consent checkbox with a link to /legal/privacy
- Hidden fields: source page, project slug (prefilled when opened from a project card via query string), submission timestamp

Implementation rules:

- Submit via a Next.js server action or route handler. Never call HubSpot
  from the client with a private token.
- Credentials from env vars (e.g. HUBSPOT_PORTAL_ID HUBSPOT_FORM_GUID, and HUBSPOT_ACCESS_TOKEN if the API is used). Never hardcode. If they are missing, log a clear server-side warning and return a safe error state; do not pretend the submission succeeded.
- Validate server-side (e.g. zod), add a honeypot field and basic rate limiting. Do not trust client validation.
- States: idle, submitting, success, error. Keyboard-accessible, inline
  errors tied to fields with aria-describedby, focus moves to the status
  message on submit.
- Success copy: "Thanks. Your enquiry has been received. Our team will
  review it and be in touch." No promise of access or timelines unless
  the client supplies them.
- Mark `// PLACEHOLDER: confirm HubSpot form fields and property names with whoever owns the HubSpot account`.

## Opportunities page (/investments/opportunities)

Archetype: gallery/directory, upgraded to a portal.

- Slim header. Filter bar with all six filters: Sector, Country,
  Investment Size, Development Stage, Investment Type, Impact Area.
  Filters must be keyboard-operable, show active count, have a clear-all,
  and reflect state in the URL query string so views are shareable.
- Card grid with stage badge + opportunity-type label + sector label.
- Gated items show public summary fields only, plus a lock state and a
  "Request access" CTA. Never render confidential fields client-side, even
  hidden. Gating must be designed so the data is not in the page payload.
- Empty-filter state and result count.
- Role-based conversion section at the end (Investors, Financial
  Institutions, Project Owners, etc.).

## Corridor module: Saudi Arabia <-> Africa <-> Global Markets

Headline: "Connecting capital, technology and markets."
Purpose: show Waterlight as a platform through which international
partners identify and develop opportunities across Africa, and African
enterprises access technology, investment and international markets.

- Render as a three-node visual (Saudi Arabia, Africa, Global Markets) with
  two-way flows labelled capital, technology, markets. Prefer a diagram or
  map arc over copy.
- Appears as ONE module on /investments/investment-strategy and on
  /global-markets/gcc. It is not a standalone section or nav item, and
  Saudi Arabia must not dominate any page. The group stays Africa-rooted
  and globally oriented.
- Use the map legend rules: label the corridor as "Target market /
  strategic dialogue" unless the client confirms an operating presence or
  signed partnership. Never imply agreements, named partners, entities or
  capital commitments.
- All copy must read as positioning, not as announcement.

## Compliance and trust rules

- No offer, solicitation or implied return on any page. Do not show yields,
  IRRs or return figures, even as placeholders.
- Every Investments page links to /legal/investment-disclaimer in a visible
  footer note.
- No confidential investment material on public pages; approved summaries
  plus "Request access".
- Flag for human review: the disclaimer wording and any gating logic need
  legal sign-off before launch.
