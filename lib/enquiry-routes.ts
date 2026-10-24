// Canonical audience routes for /partner-with-us ("Build with Waterlight").
// Form fields, validation, labels and HubSpot mapping are added here as each
// child route is built. Do not define route slugs or labels inline.

export interface EnquiryRoute {
  slug: string;
  href: string;
  selectorLabel: string;
  audience: string;
  summary: string;
}

export interface CorridorRoute {
  market: "africa" | "gcc";
  href: string;
  selectorLabel: string;
  audience: string;
  summary: string;
}

export const ENQUIRY_ROUTES: EnquiryRoute[] = [
  {
    slug: "investors",
    href: "/partner-with-us/investors",
    selectorLabel: "I am an Investor",
    audience: "Investors & family offices",
    summary:
      "Capital partners looking for structured, long-term exposure across essential-need sectors.",
  },
  {
    slug: "governments",
    href: "/partner-with-us/governments",
    selectorLabel: "I represent a Government",
    audience: "Governments & public agencies",
    summary:
      "Public agencies seeking private-sector delivery for water, energy and urban infrastructure.",
  },
  {
    slug: "financial-institutions",
    href: "/partner-with-us/financial-institutions",
    selectorLabel: "I represent a Financial Institution",
    audience: "Banks, DFIs & financiers",
    summary:
      "Financing partners covering project debt, structured credit and blended capital.",
  },
  {
    slug: "technology-partners",
    href: "/partner-with-us/technology-partners",
    selectorLabel: "I am a Technology Company",
    audience: "Corporates & technology firms",
    summary:
      "Technology owners seeking deployment, localisation and industrial partnerships.",
  },
  {
    slug: "project-owners",
    href: "/partner-with-us/project-owners",
    selectorLabel: "I have a Project",
    audience: "Project owners & sponsors",
    summary:
      "Sponsors with a project that needs capital, structuring and delivery capability.",
  },
  {
    slug: "joint-ventures",
    href: "/partner-with-us/joint-ventures",
    selectorLabel: "I want to establish a Joint Venture",
    audience: "JV partners",
    summary:
      "Partners ready to structure a shared vehicle around a sector, market or asset.",
  },
];

export const MARKET_ENTRY_HREF = "/partner-with-us/market-entry";

export const CORRIDOR_ROUTES: CorridorRoute[] = [
  {
    market: "africa",
    href: `${MARKET_ENTRY_HREF}?market=africa`,
    selectorLabel: "Africa",
    audience: "Market entry into Africa",
    summary:
      "Enter a country or sector with a partner that already operates on the ground.",
  },
  {
    market: "gcc",
    href: `${MARKET_ENTRY_HREF}?market=gcc`,
    selectorLabel: "GCC",
    audience: "Market entry into the GCC",
    summary:
      "Build a two-way corridor between the Gulf and African markets and projects.",
  },
];

export function getEnquiryRoute(slug: string): EnquiryRoute {
  const route = ENQUIRY_ROUTES.find((item) => item.slug === slug);
  if (!route) {
    throw new Error(`Unknown enquiry route: ${slug}`);
  }
  return route;
}
