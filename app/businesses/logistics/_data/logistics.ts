export const LOGISTICS_INTRO = {
  office: "Logistics",
  strap: "01 — Our businesses",
  // PLACEHOLDER — the summary states the intended positioning of the
  // business and must be reconciled with the approved sector description
  // before publication.
  summary:
    "Warehousing, distribution, transport infrastructure, cross-border trade and supply-chain technology — corridors planned so goods arrive when they are meant to.",
} as const;

export const HERO_FACTS: { label: string; value: string }[] = [
  { label: "Network", value: "Ports · Hubs · Corridors" },
  { label: "Goods", value: "Cold chain · Bulk · Parts" },
  { label: "Control", value: "Customs-ready · Tracked" },
];

export interface CorridorNode {
  no: string;
  label: string;
  mode: string;
  day: string;
}

// PLACEHOLDER — the corridor sequence is illustrative and must be replaced
// with the approved lane description before publication.
export const CORRIDOR: CorridorNode[] = [
  { no: "01", label: "Origin plant", mode: "Road", day: "Day 0" },
  { no: "02", label: "Port terminal", mode: "Sea", day: "Day 3" },
  { no: "03", label: "Border crossing", mode: "Customs", day: "Day 5" },
  { no: "04", label: "Bonded warehouse", mode: "Rail", day: "Day 7" },
  { no: "05", label: "Distribution market", mode: "Road", day: "Day 9" },
];

export interface Lane {
  lane: string;
  modes: string;
  transit: string;
  status: string;
}

// PLACEHOLDER — lane names, transit times and statuses are illustrative and
// must be confirmed against the approved network before publication.
export const LANES: Lane[] = [
  {
    lane: "Port to inland hub",
    modes: "Sea · Road",
    transit: "6–9 days",
    status: "In operation",
  },
  {
    lane: "Plant to regional DC",
    modes: "Road",
    transit: "2 days",
    status: "In operation",
  },
  {
    lane: "Cold-chain corridor",
    modes: "Air · Road",
    transit: "48 hours",
    status: "Pilot",
  },
  {
    lane: "Cross-border consolidation",
    modes: "Road · Rail",
    transit: "3–5 days",
    status: "Feasibility",
  },
];

export interface Service {
  key: string;
  title: string;
  copy: string;
  items: string[];
}

// PLACEHOLDER — service lines and their delivery items describe the intended
// structure of the business and must be confirmed before publication.
export const SERVICES: Service[] = [
  {
    key: "warehousing",
    title: "Warehousing",
    copy: "Facilities designed around dwell time, throughput and the paperwork that has to move with the goods.",
    items: [
      "Bonded & free-zone storage",
      "Temperature-controlled zones",
      "Cross-dock & consolidation",
      "Inventory systems",
    ],
  },
  {
    key: "distribution",
    title: "Distribution",
    copy: "The last hundred kilometres decide whether a supply chain is efficient or merely fast.",
    items: [
      "Last-mile delivery",
      "City fulfilment",
      "Returns handling",
      "Route optimisation",
    ],
  },
  {
    key: "transport",
    title: "Transport infrastructure",
    copy: "Port links, rail corridors and heavy-haul routes treated as assets to be built and maintained, not rented.",
    items: [
      "Port & terminal links",
      "Rail corridors",
      "Heavy-haul routes",
      "Fleet & driver networks",
    ],
  },
  {
    key: "trade",
    title: "Cross-border trade",
    copy: "Customs, duty and documentation structured ahead of the shipment, so borders are a step rather than a stop.",
    items: [
      "Customs documentation",
      "Tariff & duty structuring",
      "Bonded movements",
      "Trade compliance",
    ],
  },
  {
    key: "supply-chain",
    title: "Supply-chain technology",
    copy: "Visibility and exception handling wired into the operation — a control tower that reports on the network, not on a dashboard.",
    items: [
      "Shipment visibility",
      "Lane & ETA tracking",
      "Warehouse systems",
      "Exception alerts",
    ],
  },
];

export interface CaseStep {
  no: string;
  title: string;
  copy: string;
}

export const CASE_NOTE = {
  label: "Case note",
  title: "One cold chain, four borders, a single plan.",
  copy: "A processed-food exporter moving product between a factory, a port, a bonded store and three city markets — with the documentation, the temperature and the timing handled as one chain.",
  // PLACEHOLDER — the case narrative is illustrative and describes no actual
  // project; it must be replaced with an approved client story.
  steps: [
    {
      no: "01",
      title: "Origin & pre-cooling",
      copy: "Goods held at temperature from the line, with reefer capacity booked against the sailing, not the invoice.",
    },
    {
      no: "02",
      title: "Export documentation",
      copy: "Certificates, duties and declarations prepared before the container is closed.",
    },
    {
      no: "03",
      title: "Bonded storage",
      copy: "Goods held in bond until the market window opens, avoiding duty on stock that has not sold.",
    },
    {
      no: "04",
      title: "Final mile & cold rooms",
      copy: "City delivery sequenced to the receiving hours of each market, with cold-room handover on arrival.",
    },
  ] satisfies CaseStep[],
} as const;

export const LOGISTICS_ROUTES: { role: string; copy: string; href: string }[] = [
  {
    role: "Shippers & manufacturers",
    copy: "Producers moving goods across borders who need warehousing, customs and the last mile held by one team.",
    href: "/contact",
  },
  {
    role: "Importers & retailers",
    copy: "Buyers who need stock landed, cleared, stored and delivered to the shelf on a schedule they can plan around.",
    href: "/contact",
  },
  {
    role: "Technology & fleet partners",
    copy: "Providers of tracking, warehouse systems and fleet operations who want deployment across a working network.",
    href: "/innovation/technology-partnerships",
  },
  {
    role: "Capital & trade partners",
    copy: "Investors and trade-finance houses looking for logistics exposure with contracted demand behind it.",
    href: "/investments/joint-ventures",
  },
];
