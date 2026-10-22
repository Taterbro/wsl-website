export const INDUSTRY_INTRO = {
  office: "Industry",
  strap: "01 — Our businesses",
  // PLACEHOLDER — the summary describes the intended positioning of the
  // business and must be reconciled with the approved sector description
  // before publication.
  summary:
    "Manufacturing, processing, technology localisation, industrial facilities and strategic production partnerships — industrial capacity built to run, not to announce.",
} as const;

export const HERO_FACTS: { label: string; value: string }[] = [
  { label: "Build", value: "Plants · Lines · Facilities" },
  { label: "Focus", value: "Localisation & processing" },
  { label: "Model", value: "Partner · Build · Operate" },
];

// PLACEHOLDER — the process line is illustrative and must be replaced with the
// approved value-chain description for the sector.
export const PROCESS_LINE: string[] = [
  "Feedstock",
  "Processing",
  "Quality control",
  "Output",
  "Market",
];

export interface Capability {
  key: string;
  no: string;
  title: string;
  strap: string;
  copy: string;
  items: string[];
  image: string;
  alt: string;
  link?: { label: string; href: string };
}

// PLACEHOLDER — capability lines, deliverables and routes describe the
// intended structure of the business and must be confirmed before publication.
export const CAPABILITIES: Capability[] = [
  {
    key: "manufacturing",
    no: "01",
    title: "Manufacturing & assembly",
    strap: "Production lines built for the product, not the brochure.",
    copy: "Line design, equipment integration and quality systems engineered together, so throughput and yield hold once the plant is handed over.",
    items: [
      "Production line design",
      "Equipment integration",
      "Quality systems",
      "Workforce training",
    ],
    image: "/placeholders/industry-manufacturing.png",
    alt: "Placeholder artwork standing in for photography of an industrial manufacturing floor",
    link: { label: "Our projects", href: "/projects" },
  },
  {
    key: "processing",
    no: "02",
    title: "Processing & value addition",
    strap: "Feedstock in, finished output out.",
    copy: "Process engineering from feedstock selection to packaging — with yield, energy use and quality tracked against the operating plan.",
    items: [
      "Feedstock selection",
      "Process engineering",
      "Yield optimisation",
      "Packaging readiness",
    ],
    image: "/placeholders/industry-processing.png",
    alt: "Placeholder artwork standing in for photography of a processing plant and pipework",
    link: { label: "Energy & utilities", href: "/businesses/energy" },
  },
  {
    key: "localisation",
    no: "03",
    title: "Technology localisation",
    strap: "Technology brought in, capability left behind.",
    copy: "Transferring a process or platform into a local supply chain — structuring IP, suppliers and operators so the capability stays in the market.",
    items: [
      "Technology transfer",
      "Local supply chains",
      "IP & licensing structuring",
      "Local operating capability",
    ],
    image: "/placeholders/industry-localisation.png",
    alt: "Placeholder artwork standing in for photography of a regional industrial supply network",
    link: { label: "Technology partnerships", href: "/innovation/technology-partnerships" },
  },
  {
    key: "facilities",
    no: "04",
    title: "Industrial facilities & utilities",
    strap: "The site, the utilities, the permits, the plant.",
    copy: "Land, services, permissions and construction handled as one scope, so the plant arrives with the utilities it depends on already in place.",
    items: [
      "Site selection & utilities",
      "Zoning & permitting",
      "EPC & construction",
      "Commissioning & ramp-up",
    ],
    image: "/placeholders/industry-facilities.png",
    alt: "Placeholder artwork standing in for photography of an industrial facility structure and plant",
    link: {
      label: "Real estate & urban infrastructure",
      href: "/businesses/real-estate-urban-infrastructure",
    },
  },
];

// PLACEHOLDER — scope items describe the intended remit of the business and
// must be confirmed against approved service lines.
export const SCOPE: string[] = [
  "Industrial zoning & permitting",
  "Utilities & off-site works",
  "EPC and construction",
  "Commissioning and ramp-up",
  "Operations and maintenance",
  "Workforce development",
];

export interface PartnershipModel {
  no: string;
  title: string;
  copy: string;
}

export const PARTNERSHIP_MODELS: PartnershipModel[] = [
  {
    no: "01",
    title: "Joint venture",
    copy: "Shared capital, shared governance, one industrial asset with a named operating partner.",
  },
  {
    no: "02",
    title: "Licensing & technology transfer",
    copy: "A process or platform comes in, and local capability is built around it.",
  },
  {
    no: "03",
    title: "Contract manufacturing",
    copy: "Production run for an owner who holds the brand, the market and the specification.",
  },
  {
    no: "04",
    title: "Strategic co-investment",
    copy: "Capital alongside an operator or manufacturer, structured to the asset and the ramp.",
  },
];

export const INDUSTRY_ROUTES: { role: string; copy: string; href: string }[] = [
  {
    role: "Industrial sponsors",
    copy: "Owners of processing plants, production lines or industrial assets looking for an operator, a partner or new capacity.",
    href: "/contact",
  },
  {
    role: "Manufacturers & technology owners",
    copy: "Process and equipment owners seeking a market, a local footprint and a partner who can build and run it.",
    href: "/innovation/technology-partnerships",
  },
  {
    role: "Governments & industrial parks",
    copy: "Public agencies building industrial parks, free zones and production capacity for local industry.",
    href: "/contact",
  },
  {
    role: "Capital & co-investment partners",
    copy: "Investors and lenders looking for structured industrial exposure with an operating team behind it.",
    href: "/investments/joint-ventures",
  },
];
