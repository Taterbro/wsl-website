export interface NavItem {
  label: string;
  href: string;
}

export interface NavColumn {
  heading?: string;
  items: NavItem[];
}

export interface NavLink {
  label: string;
  href: string;
  columns: NavColumn[];
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "About",
    href: "/about",
    columns: [
      {
        items: [
          { label: "Our Story", href: "/about/our-story" },
          { label: "Vision & Mission", href: "/about/vision-mission" },
          { label: "Group Structure", href: "/about/group-structure" },
          { label: "Governance", href: "/about/governance" },
        ],
      },
      {
        heading: "Leadership",
        items: [
          { label: "Founder & Group CEO", href: "/leadership/founder-group-ceo" },
          { label: "Board", href: "/leadership/board" },
          { label: "Executive Leadership", href: "/leadership/executive-leadership" },
          {
            label: "Advisory / Investment Committees",
            href: "/leadership/advisory-investment-committees",
          },
        ],
      },
    ],
  },
  {
    label: "Our Businesses",
    href: "/businesses",
    columns: [
      {
        heading: "Sectors",
        items: [
          { label: "Water & Smart Infrastructure", href: "/businesses/water-smart-infrastructure" },
          { label: "Renewable Energy", href: "/businesses/renewable-energy" },
          { label: "Agriculture & Food Systems", href: "/businesses/agriculture-food-systems" },
          { label: "Technology & Digital Infrastructure", href: "/businesses/technology-digital-infrastructure" },
          { label: "Industrial Development", href: "/businesses/industrial-development" },
          { label: "Real Estate & Urban Infrastructure", href: "/businesses/real-estate-urban-infrastructure" },
          { label: "Logistics & Supply Chains", href: "/businesses/logistics-supply-chains" },
          { label: "Climate & ESG Solutions", href: "/businesses/climate-esg-solutions" },
        ],
      },
      {
        heading: "Companies",
        items: [
          { label: "Waterlight Africa Investments Ltd", href: "/companies/waterlight-africa-investments" },
          { label: "Waterlight Industries Limited", href: "/companies/waterlight-industries" },
          { label: "Waterlight iHEAL Global Limited", href: "/companies/waterlight-iheal-global" },
          { label: "Waterlight Limited", href: "/companies/waterlight-limited" },
        ],
      },
    ],
  },
  {
    label: "Investments",
    href: "/investments",
    columns: [
      {
        items: [
          { label: "Investment Strategy", href: "/investments/strategy" },
          { label: "Opportunities", href: "/investments/opportunities" },
          { label: "Joint Ventures", href: "/investments/joint-ventures" },
          { label: "Project Development", href: "/investments/project-development" },
          { label: "Investor Relations", href: "/investments/investor-relations" },
        ],
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    columns: [
      {
        items: [
          { label: "Portfolio", href: "/projects/portfolio" },
          { label: "Project Map", href: "/projects/project-map" },
          { label: "Flagship Projects", href: "/projects/flagship-projects" },
          { label: "Development Pipeline", href: "/projects/development-pipeline" },
        ],
      },
    ],
  },
  {
    label: "Innovation",
    href: "/innovation",
    columns: [
      {
        items: [
          { label: "WSWIS", href: "/innovation/wswis" },
          { label: "Technology Partnerships", href: "/innovation/technology-partnerships" },
          { label: "R&D / Innovation", href: "/innovation/rd-innovation" },
        ],
      },
    ],
  },
  {
    label: "Global Markets",
    href: "/global-markets",
    columns: [
      {
        items: [
          { label: "Africa", href: "/global-markets/africa" },
          { label: "GCC", href: "/global-markets/gcc" },
          { label: "Europe", href: "/global-markets/europe" },
          { label: "North America", href: "/global-markets/north-america" },
          { label: "Asia-Pacific", href: "/global-markets/asia-pacific" },
          { label: "Emerging & Strategic Markets", href: "/global-markets/emerging-strategic-markets" },
        ],
      },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
    columns: [
      {
        items: [
          { label: "Sustainability", href: "/impact/sustainability" },
          { label: "Development Partnerships", href: "/impact/development-partnerships" },
          { label: "Waterlight Save Initiative", href: "/impact/waterlight-save-initiative" },
          { label: "iHEAL Framework", href: "/impact/iheal-framework" },
        ],
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    columns: [
      {
        items: [
          { label: "Research", href: "/insights/research" },
          { label: "Perspectives", href: "/insights/perspectives" },
          { label: "News", href: "/insights/news" },
          { label: "Events", href: "/insights/events" },
          { label: "Media", href: "/insights/media" },
        ],
      },
    ],
  },
];

export const UTILITY_LINKS: NavItem[] = [
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
