export type EntityKey =
  | "group"
  | "africa-investments"
  | "industries"
  | "iheal-global"
  | "limited"
  | "save-initiative";

export interface GroupEntity {
  key: EntityKey;
  name: string;
  shortName: string;
  role: string;
  mandate: string;
  responsibilities: string[];
  href?: string;
  independent?: boolean;
}

export interface SectorRoute {
  sector: string;
  href: string;
  line: string;
  image: string;
  alt: string;
  entities: EntityKey[];
}

// PLACEHOLDER — roles and mandates below are transcribed from the approved
// brand-architecture table. Legal descriptions, shareholdings and registered
// particulars must be validated by counsel before publication.
export const ENTITIES: GroupEntity[] = [
  {
    key: "group",
    name: "Waterlight Group",
    shortName: "Waterlight Group",
    role: "Master brand",
    mandate:
      "The corporate and global-facing identity of the group, through which every platform is presented to partners, capital providers and governments.",
    responsibilities: [
      "Group mandate and brand",
      "Cross-platform capital allocation",
      "External representation",
    ],
  },
  {
    key: "africa-investments",
    name: "Waterlight Africa Investments Ltd",
    shortName: "Africa Investments",
    role: "Investment & project development",
    mandate:
      "Investment, project development, strategic partnerships and the group’s capital platform.",
    responsibilities: [
      "Origination and project development",
      "Capital raising and structuring",
      "Strategic partnerships",
    ],
    href: "/companies/waterlight-africa-investments",
  },
  {
    key: "industries",
    name: "Waterlight Industries Limited",
    shortName: "Industries",
    role: "Industrial development & manufacturing",
    mandate:
      "Industrial development, manufacturing and production platform for the group’s operating assets.",
    responsibilities: [
      "Industrial and manufacturing assets",
      "Production and processing",
      "Delivery and operations",
    ],
    href: "/companies/waterlight-industries",
  },
  {
    key: "iheal-global",
    name: "Waterlight iHEAL Global Limited",
    shortName: "iHEAL Global",
    role: "Human capital & impact enterprise",
    mandate:
      "Human-capital, innovation, entrepreneurship and impact-oriented enterprise platform.",
    responsibilities: [
      "iHEAL programmes and frameworks",
      "Innovation, research and R&D",
      "Skills and enterprise development",
    ],
    href: "/companies/waterlight-iheal-global",
  },
  {
    key: "limited",
    name: "Waterlight Limited",
    shortName: "Waterlight Limited",
    role: "Corporate & strategic ventures",
    mandate:
      "Corporate and strategic ventures carried out strictly within its legally approved mandate.",
    responsibilities: [
      "Group-level ventures",
      "Corporate mandates",
      "Strategic holding activities",
    ],
    href: "/companies/waterlight-limited",
  },
  {
    key: "save-initiative",
    name: "Waterlight Save Initiative",
    shortName: "Save Initiative",
    role: "Independent nonprofit",
    mandate:
      "An independent nonprofit development organisation. It is presented separately and is never described as a commercial subsidiary of the group.",
    responsibilities: [
      "Community water and health programmes",
      "Independent development partnerships",
    ],
    href: "/impact/waterlight-save-initiative",
    independent: true,
  },
];

// PLACEHOLDER — shared group functions are indicative and must be confirmed
// against the approved group chart before publication.
export const GROUP_FUNCTIONS: string[] = [
  "Capital & treasury",
  "Legal & compliance",
  "People & culture",
  "Technology & data",
  "ESG & impact assurance",
];

// PLACEHOLDER — sector routing below shows the indicative group route for each
// sector. It is not an ownership map and must be confirmed before launch.
export const SECTOR_ROUTES: SectorRoute[] = [
  {
    sector: "Water & Smart Infrastructure",
    href: "/businesses/water-smart-infrastructure",
    line: "Solar-powered supply, treatment, storage and monitored distribution — financed through the capital platform, delivered through industrial capability.",
    image: "/placeholders/group-sector-water.png",
    alt: "Placeholder artwork standing in for photography of a solar-powered water treatment plant",
    entities: ["africa-investments", "industries"],
  },
  {
    sector: "Energy",
    href: "/businesses/energy",
    line: "Generation and integrated utilities sized for industrial, municipal and commercial demand.",
    image: "/placeholders/group-sector-energy.png",
    alt: "Placeholder artwork standing in for photography of a utility-scale energy installation",
    entities: ["africa-investments", "industries"],
  },
  {
    sector: "Agriculture & Food Systems",
    href: "/businesses/agriculture",
    line: "Production, processing and farm-to-market systems that connect rural supply to urban demand.",
    image: "/placeholders/group-sector-agriculture.png",
    alt: "Placeholder artwork standing in for photography of food processing and agricultural production",
    entities: ["africa-investments", "industries"],
  },
  {
    sector: "Technology, AI & Digital Infrastructure",
    href: "/businesses/technology-ai",
    line: "Digital infrastructure and applied AI, engineered for the connectivity, skills and cost base of the markets it enters.",
    image: "/placeholders/group-sector-technology.png",
    alt: "Placeholder artwork standing in for photography of data-centre and network infrastructure",
    entities: ["africa-investments", "limited"],
  },
  {
    sector: "Industrial Development & Manufacturing",
    href: "/businesses/industry",
    line: "Industrial parks, manufacturing lines and production platforms built to operate at scale.",
    image: "/placeholders/group-sector-industry.png",
    alt: "Placeholder artwork standing in for photography of an industrial manufacturing plant",
    entities: ["industries"],
  },
  {
    sector: "Real Estate & Urban Infrastructure",
    href: "/businesses/real-estate-urban-infrastructure",
    line: "Housing, mixed-use districts and civic infrastructure delivered through structured development vehicles.",
    image: "/placeholders/group-sector-real-estate.png",
    alt: "Placeholder artwork standing in for photography of urban housing and mixed-use construction",
    entities: ["africa-investments", "limited"],
  },
  {
    sector: "Logistics & Supply Chains",
    href: "/businesses/logistics",
    line: "Corridors, warehousing and supply-chain infrastructure linking production to market.",
    image: "/placeholders/group-sector-logistics.png",
    alt: "Placeholder artwork standing in for photography of a freight and warehousing corridor",
    entities: ["africa-investments", "industries"],
  },
  {
    sector: "Climate & ESG Solutions",
    href: "/businesses/climate-esg",
    line: "Measurement, adaptation and impact assurance applied across the group’s own portfolio.",
    image: "/placeholders/group-sector-climate.png",
    alt: "Placeholder artwork standing in for photography of climate monitoring and field measurement work",
    entities: ["iheal-global", "africa-investments"],
  },
];

export function entityByKey(key: EntityKey): GroupEntity {
  const found = ENTITIES.find((entity) => entity.key === key);
  if (!found) {
    throw new Error(`Unknown group entity: ${key}`);
  }
  return found;
}
