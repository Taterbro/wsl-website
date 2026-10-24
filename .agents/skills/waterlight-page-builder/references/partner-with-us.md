# Partner With Us / Build With Waterlight: page specifics

Load ONLY for routes under /partner-with-us, and whenever building a
"Build With Waterlight" conversion section on any other page. "Build With
Waterlight" is the headline/CTA brand; /partner-with-us is its route. They
are the same system.

Purpose: a business-development platform, not a Contact Us page. Every
visitor picks who they are and gets a different, qualifying enquiry form.

## Scoped exceptions

- Archetype: Conversion. Audience selector first, then the route's form.
  Slim, confident header; no cinematic hero.
- High-contrast treatment is encouraged here (dark field, strong accent).
- Motion minimal: selection state, form transitions. Static under
  prefers-reduced-motion.

## Canonical routes (single source: lib/enquiry-routes.ts)

| Slug                   | Selector label                      | Audience                      |
| ---------------------- | ----------------------------------- | ----------------------------- | --- |
| investors              | I am an Investor                    | Investors / family offices    |
| governments            | I represent a Government            | Governments / public agencies |
| financial-institutions | I represent a Financial Institution | FIs / DFIs                    |
| technology-partners    | I am a Technology Company           | Corporates / technology firms |
| project-owners         | I have a Project                    | Project owners                |
| joint-ventures         | I want to establish a Joint Venture | JV partners                   |
| market-entry           | I am interested in Market Entry     | Switch: Africa                | GCC |

Selector cards for Africa and GCC market entry may appear separately but
link to /partner-with-us/market-entry?market=africa|gcc. Use "GCC", never
"Saudi" as a label. Strategic Partner: PLACEHOLDER, not built until the
client defines its fields (default: fold into technology-partners).

Index /partner-with-us shows the selector with all routes. Each child route
shows who the route is for, what happens next (labels only), and the form.

## Qualification fields per route (from the design doc)

Common to all: full name, work email, organisation, role/title, country,
optional message, required consent checkbox linking to /legal/privacy.

- investors: investment focus, geography, ticket range (banded), sectors,
  institution
- governments: agency, country, project/priority, PPP interest
- financial-institutions: financing type, sectors, geography, project criteria
- technology-partners: technology, deployment model, certifications, target
  markets
- project-owners: project, country, stage, capital need, approvals, ownership
- joint-ventures: sector, contribution, market, proposed structure
- market-entry (africa): target country/sector, product/service, desired support
- market-entry (gcc): target market, sector, local partnership requirement

Sector values come from lib/businesses.ts. Stage values come from the
project schema in lib/projects.ts. Never define these inline.

## Form engine

- ONE reusable form component driven by lib/enquiry-routes.ts (fields,
  validation schema, labels, HubSpot mapping per route). Do not write
  nine separate forms.
- The Investments "Request access" form reuses this engine as the
  `investors` config, with project slug prefilled from the query string.
  If app/investments/\_components has its own form, refactor it onto the
  shared engine instead of keeping two.
- Submission, validation, honeypot, rate limiting, env vars, states and
  success copy follow the "Access flow" rules in investments.md. Add a
  hidden `route` field so HubSpot can route and report by audience.
- Success copy never promises access, timelines or outcomes.
- PLACEHOLDER: confirm per-route HubSpot form vs one form with a route
  property, and the internal owner and response SLA for each route.

## Trust rules

- No client or partner logos, endorsements or named partners without
  written approval.
- Governments page: no implied endorsement or relationship; positioning
  language only.
- No return figures, offers or solicitation (see investments.md).
- Link /legal/investment-disclaimer on investors and project-owners routes.
- Flag for legal review: consent wording, cross-border personal data.

## Out of scope

Careers and Media are separate audiences with their own routes. Do not add
them to the selector. Link to them in the footer or as secondary links only.
