export const URBAN_INTRO = {
  office: "Real Estate & Urban Infrastructure",
  strap: "01 — Our businesses",
  // PLACEHOLDER — the summary states the intended positioning of the
  // business and must be reconciled with the approved sector description
  // before publication.
  summary:
    "Affordable housing, commercial development, smart-city infrastructure and sustainable buildings — places planned, serviced and built to keep working for decades.",
} as const;

export const HERO_FACTS: { label: string; value: string }[] = [
  { label: "Deliver", value: "Housing · Commercial · Civic" },
  { label: "Systems", value: "Smart-city infrastructure" },
  { label: "Standard", value: "Sustainable buildings" },
];

export interface DistrictZone {
  id: string;
  no: string;
  title: string;
  copy: string;
}

// PLACEHOLDER — the district zoning model is illustrative and must be replaced
// with the approved masterplan description.
export const ZONES: DistrictZone[] = [
  {
    id: "housing",
    no: "01",
    title: "Affordable housing",
    copy: "Phased blocks delivered on serviced plots, with mixed tenure held across the programme rather than pushed to the edges.",
  },
  {
    id: "commercial",
    no: "02",
    title: "Commercial",
    copy: "Offices, retail and business space sized to the demand the district actually serves, not to the land available.",
  },
  {
    id: "civic",
    no: "03",
    title: "Civic & social",
    copy: "Schools, clinics and community space placed where walkable density needs them first.",
  },
  {
    id: "green",
    no: "04",
    title: "Green & public realm",
    copy: "Parks, water and shade designed in from the start, not added after the plots are locked.",
  },
  {
    id: "mobility",
    no: "05",
    title: "Mobility & access",
    copy: "Streets, transit and servicing routes drawn before the first plot is sold.",
  },
  {
    id: "systems",
    no: "06",
    title: "Utilities & digital",
    copy: "Power, water, waste and the digital layer planned as one infrastructure set.",
  },
];

export interface ProgrammeLine {
  no: string;
  title: string;
  copy: string;
  tags: string[];
  image: string;
  alt: string;
  href: string;
}

// PLACEHOLDER — programme lines and their delivery tags describe the intended
// structure of the business and must be confirmed before publication.
export const PROGRAMME: ProgrammeLine[] = [
  {
    no: "01",
    title: "Affordable housing",
    copy: "Homes delivered in phases against a serviced-land plan, with affordability held through the cycle.",
    tags: ["Phased delivery", "Mixed tenure", "Serviced plots"],
    image: "/placeholders/district-housing.png",
    alt: "Placeholder artwork standing in for photography of an affordable housing development",
    href: "/projects",
  },
  {
    no: "02",
    title: "Commercial development",
    copy: "Business space, retail and mixed-use blocks built to a letting strategy rather than to a floor-area target.",
    tags: ["Offices & retail", "Letting strategy", "Mixed use"],
    image: "/placeholders/district-commercial.png",
    alt: "Placeholder artwork standing in for photography of a commercial district",
    href: "/projects",
  },
  {
    no: "03",
    title: "Smart-city infrastructure",
    copy: "Utility, mobility and public-service systems integrated under one operating model for the district.",
    tags: ["Utility integration", "Digital layer", "Public systems"],
    image: "/placeholders/district-smart-city.png",
    alt: "Placeholder artwork standing in for a diagram of connected city systems",
    href: "/businesses/technology-ai",
  },
  {
    no: "04",
    title: "Sustainable buildings",
    copy: "Passive design, low-carbon systems and certification pathways resolved at design stage, not retrofitted later.",
    tags: ["Passive design", "Low-carbon systems", "Certification pathway"],
    image: "/placeholders/district-sustainable.png",
    alt: "Placeholder artwork standing in for photography of a sustainable building facade and landscaping",
    href: "/impact/sustainability",
  },
];

export const SCALE: { value: string; unit: string; label: string }[] = [
  { value: "12,400", unit: "homes", label: "Units planned across masterplans" },
  { value: "340", unit: "ha", label: "Land under active masterplans" },
  { value: "9", unit: "markets", label: "Markets with live programmes" },
  { value: "18", unit: "sites", label: "Sites currently in delivery" },
];

export const URBAN_ROUTES: { role: string; copy: string; href: string }[] = [
  {
    role: "Landowners & developers",
    copy: "Owners of land who need masterplanning, approvals and a development partner with an operating team.",
    href: "/contact",
  },
  {
    role: "City authorities",
    copy: "Municipalities planning housing, serviced land and district infrastructure under a single programme.",
    href: "/contact",
  },
  {
    role: "Capital & co-investment partners",
    copy: "Investors seeking structured exposure to housing and urban infrastructure with local execution.",
    href: "/investments/joint-ventures",
  },
  {
    role: "Technology & operating partners",
    copy: "Providers of digital, utility and building-systems technology who want deployment at district scale.",
    href: "/businesses/technology-ai",
  },
];
