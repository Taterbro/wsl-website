// PLACEHOLDER — sector imagery and value propositions are illustrative until
// approved sector content and photography are supplied.

export interface BusinessSector {
  slug: string;
  name: string;
  shortName: string;
  valueProp: string;
  capabilities: string[];
  image: string;
  alt: string;
}

export const BUSINESS_SECTORS: BusinessSector[] = [
  {
    slug: "water-smart-infrastructure",
    name: "Water & Smart Infrastructure",
    shortName: "Water & Smart Infrastructure",
    valueProp:
      "Solar-powered, instrumented water systems built to keep delivering through drought, growth and grid failure.",
    capabilities: [
      "Smart water systems",
      "Solar-powered water infrastructure",
      "Water treatment",
      "Water distribution",
      "AI monitoring",
      "Water reuse",
      "Commercial and municipal water solutions",
    ],
    image: "/placeholders/group-sector-water.png",
    alt: "Water treatment and distribution infrastructure at dusk (placeholder image)",
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    shortName: "Energy",
    valueProp:
      "Solar, storage and hybrid systems that power industry, infrastructure and communities.",
    capabilities: [
      "Solar infrastructure",
      "Distributed energy",
      "Energy storage",
      "Hybrid systems",
      "Clean-energy infrastructure",
      "Energy solutions for industry and communities",
    ],
    image: "/placeholders/group-sector-energy.png",
    alt: "Solar generation and storage infrastructure (placeholder image)",
  },
  {
    slug: "agriculture-food-systems",
    name: "Agriculture & Food Systems",
    shortName: "Agriculture",
    valueProp:
      "Field-to-market infrastructure that reduces loss and strengthens food security.",
    capabilities: [
      "Agri-infrastructure",
      "Food processing",
      "Agricultural technology",
      "Food security",
      "Cold-chain infrastructure",
      "Climate-smart agriculture",
    ],
    image: "/placeholders/group-sector-agriculture.png",
    alt: "Agricultural processing and cold-chain infrastructure (placeholder image)",
  },
  {
    slug: "technology-digital-infrastructure",
    name: "Technology & Digital Infrastructure",
    shortName: "Technology & AI",
    valueProp:
      "AI, data and digital platforms that make physical infrastructure measurable and manageable.",
    capabilities: [
      "Artificial intelligence",
      "Digital platforms",
      "Smart infrastructure",
      "Data systems",
      "Fintech",
      "Automation",
      "Digital transformation",
    ],
    image: "/placeholders/group-sector-technology.png",
    alt: "Digital operations and data infrastructure (placeholder image)",
  },
  {
    slug: "industrial-development",
    name: "Industrial Development",
    shortName: "Industry",
    valueProp:
      "Manufacturing, processing and localisation that move value creation closer to demand.",
    capabilities: [
      "Manufacturing",
      "Industrial facilities",
      "Processing",
      "Technology localization",
      "Equipment production",
      "Industrial partnerships",
    ],
    image: "/placeholders/group-sector-industry.png",
    alt: "Industrial manufacturing facility (placeholder image)",
  },
  {
    slug: "real-estate-urban-infrastructure",
    name: "Real Estate & Urban Infrastructure",
    shortName: "Real Estate & Urban Infrastructure",
    valueProp:
      "Housing, commercial and urban systems designed for the next century of city growth.",
    capabilities: [
      "Affordable housing",
      "Smart cities",
      "Commercial development",
      "Urban infrastructure",
      "Sustainable buildings",
    ],
    image: "/placeholders/group-sector-real-estate.png",
    alt: "Urban development and housing infrastructure (placeholder image)",
  },
  {
    slug: "logistics-supply-chains",
    name: "Logistics & Supply Chains",
    shortName: "Logistics",
    valueProp:
      "Warehousing, distribution and trade corridors that connect production to demand.",
    capabilities: [
      "Transportation infrastructure",
      "Warehousing",
      "Distribution",
      "Supply-chain technology",
      "Cross-border trade infrastructure",
    ],
    image: "/placeholders/group-sector-logistics.png",
    alt: "Logistics terminal and trade corridor infrastructure (placeholder image)",
  },
  {
    slug: "climate-esg-solutions",
    name: "Climate & ESG Solutions",
    shortName: "Climate & ESG",
    valueProp:
      "Resilience, resource efficiency and clean technologies embedded in every asset.",
    capabilities: [
      "Climate-resilient infrastructure",
      "Circular economy",
      "Resource efficiency",
      "Clean technologies",
      "Sustainable investment",
    ],
    image: "/placeholders/group-sector-climate.png",
    alt: "Climate-resilient infrastructure and landscape (placeholder image)",
  },
];

export function getSector(slug: string): BusinessSector {
  const sector = BUSINESS_SECTORS.find((item) => item.slug === slug);
  if (!sector) {
    throw new Error(`Unknown business sector: ${slug}`);
  }
  return sector;
}
