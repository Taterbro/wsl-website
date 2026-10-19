export interface NavLink {
  label: string;
  href: string;
  subLinks: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "About",
    href: "/about",
    subLinks: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Group Structure", href: "/about/group-structure" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Governance", href: "/about/governance" },
    ],
  },
  {
    label: "Our Businesses",
    href: "/businesses",
    subLinks: [
      { label: "Water & Smart Infrastructure", href: "/businesses/water-smart-infrastructure" },
      { label: "Energy", href: "/businesses/energy" },
      { label: "Agriculture", href: "/businesses/agriculture" },
      { label: "Technology & AI", href: "/businesses/technology-ai" },
      { label: "Industry", href: "/businesses/industry" },
      { label: "Real Estate & Urban Infrastructure", href: "/businesses/real-estate-urban-infrastructure" },
      { label: "Logistics", href: "/businesses/logistics" },
      { label: "Climate & ESG", href: "/businesses/climate-esg" },
    ],
  },
  {
    label: "Companies",
    href: "/companies",
    subLinks: [
      { label: "Waterlight Africa Investments Ltd", href: "/companies/waterlight-africa-investments" },
      { label: "Waterlight Industries Limited", href: "/companies/waterlight-industries" },
      { label: "Waterlight iHEAL Global Limited", href: "/companies/waterlight-iheal-global" },
      { label: "Waterlight Limited", href: "/companies/waterlight-limited" },
    ],
  },
  {
    label: "Investments",
    href: "/investments",
    subLinks: [
      { label: "Investment Strategy", href: "/investments/strategy" },
      { label: "Opportunities", href: "/investments/opportunities" },
      { label: "Joint Ventures", href: "/investments/joint-ventures" },
      { label: "Project Development", href: "/investments/project-development" },
      { label: "Investor Relations", href: "/investments/investor-relations" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    subLinks: [
      { label: "Portfolio", href: "/projects/portfolio" },
      { label: "Project Map", href: "/projects/project-map" },
      { label: "Flagship Projects", href: "/projects/flagship-projects" },
      { label: "Development Pipeline", href: "/projects/development-pipeline" },
    ],
  },
  {
    label: "Innovation",
    href: "/innovation",
    subLinks: [
      { label: "WSWIS", href: "/innovation/wswis" },
      { label: "Technology Partnerships", href: "/innovation/technology-partnerships" },
      { label: "R&D / Innovation", href: "/innovation/rd-innovation" },
    ],
  },
  {
    label: "Global Markets",
    href: "/global-markets",
    subLinks: [
      { label: "Africa", href: "/global-markets/africa" },
      { label: "GCC", href: "/global-markets/gcc" },
      { label: "Europe", href: "/global-markets/europe" },
      { label: "North America", href: "/global-markets/north-america" },
      { label: "Asia-Pacific", href: "/global-markets/asia-pacific" },
      { label: "Emerging & Strategic Markets", href: "/global-markets/emerging-strategic-markets" },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
    subLinks: [
      { label: "Sustainability", href: "/impact/sustainability" },
      { label: "Development Partnerships", href: "/impact/development-partnerships" },
      { label: "Waterlight Save Initiative", href: "/impact/waterlight-save-initiative" },
      { label: "iHEAL Framework", href: "/impact/iheal-framework" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    subLinks: [
      { label: "Research", href: "/insights/research" },
      { label: "Perspectives", href: "/insights/perspectives" },
      { label: "News", href: "/insights/news" },
      { label: "Events", href: "/insights/events" },
      { label: "Media", href: "/insights/media" },
    ],
  },
  {
    label: "Leadership",
    href: "/leadership",
    subLinks: [
      { label: "Founder & Group CEO", href: "/leadership/founder-group-ceo" },
      { label: "Board", href: "/leadership/board" },
      { label: "Executive Leadership", href: "/leadership/executive-leadership" },
      { label: "Advisory / Investment Committees", href: "/leadership/advisory-investment-committees" },
    ],
  },
  {
    label: "Partner With Us",
    href: "/partner-with-us",
    subLinks: [
      { label: "Investors", href: "/partner-with-us/investors" },
      { label: "Governments", href: "/partner-with-us/governments" },
      { label: "Financial Institutions", href: "/partner-with-us/financial-institutions" },
      { label: "Technology Partners", href: "/partner-with-us/technology-partners" },
      { label: "Project Owners", href: "/partner-with-us/project-owners" },
      { label: "Market Entry", href: "/partner-with-us/market-entry" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    subLinks: [],
  },
  {
    label: "Contact / Global Offices",
    href: "/contact",
    subLinks: [],
  },
  {
    label: "Legal",
    href: "/legal",
    subLinks: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "Investment Disclaimer", href: "/legal/investment-disclaimer" },
      { label: "Accessibility", href: "/legal/accessibility" },
    ],
  },
];
