export interface HeroFact {
  label: string;
  value: string;
}

export type StageKey =
  | "capture"
  | "treat"
  | "store"
  | "distribute"
  | "monitor";

export interface SystemStage {
  key: StageKey;
  no: string;
  label: string;
  summary: string;
  components: string[];
}

export interface Capability {
  no: string;
  title: string;
  copy: string;
  tag: string;
  delivery: string;
}

export interface Application {
  title: string;
  copy: string;
}

export interface Principle {
  no: string;
  title: string;
  copy: string;
}

export interface RoleRoute {
  role: string;
  copy: string;
  href: string;
  link: string;
}

// PLACEHOLDER — the facts describe positioning, not verified operating data.
export const HERO_FACTS: HeroFact[] = [
  { label: "Scope", value: "Source to tap" },
  { label: "Energy", value: "Solar-first" },
  { label: "Model", value: "Build · Own · Operate" },
];

export const SYSTEM_STAGES: SystemStage[] = [
  {
    key: "capture",
    no: "01",
    label: "Capture",
    summary:
      "Water is drawn from the source the site can actually sustain — borehole, river, reservoir or transfer — and moved with the least energy and loss.",
    components: [
      "Solar pumping",
      "Boreholes & intakes",
      "Raw-water transfer",
      "Source protection",
    ],
  },
  {
    key: "treat",
    no: "02",
    label: "Treat",
    summary:
      "Treatment is sized to the water quality and the use, not to a catalogue. Filtration, disinfection and reuse are selected for local operation and spares.",
    components: [
      "Filtration",
      "Disinfection",
      "Desalination & reuse",
      "Quality monitoring",
    ],
  },
  {
    key: "store",
    no: "03",
    label: "Store",
    summary:
      "Instrumented storage buffers supply against demand peaks, grid failure and drought, so service continues when the source or the power does not.",
    components: [
      "Reservoirs & tanks",
      "Level telemetry",
      "Pressure buffering",
      "Emergency reserve",
    ],
  },
  {
    key: "distribute",
    no: "04",
    label: "Distribute",
    summary:
      "Pressure-managed, district-metered networks deliver water where it is needed, with leakage visible by zone rather than discovered after a failure.",
    components: [
      "District metering",
      "Pressure management",
      "Leak detection",
      "Customer metering",
    ],
  },
  {
    key: "monitor",
    no: "05",
    label: "Monitor",
    summary:
      "Telemetry turns physical assets into live operating data — for operators, financiers and maintenance teams — and predicts failures before they interrupt service.",
    components: [
      "SCADA & telemetry",
      "Operating dashboards",
      "Predictive maintenance",
      "Verified reporting",
    ],
  },
];

// PLACEHOLDER — capability scope and delivery structures are indicative and
// must be confirmed against approved mandate and project documentation.
export const CAPABILITIES: Capability[] = [
  {
    no: "01",
    title: "Municipal & utility networks",
    copy: "Distribution upgrades, non-revenue-water reduction, district metering and pressure management for growing cities and utilities.",
    tag: "Municipal",
    delivery: "EPC · O&M · PPP",
  },
  {
    no: "02",
    title: "Industrial & process water",
    copy: "Intake, treatment, cooling and effluent reuse designed around production continuity and discharge compliance.",
    tag: "Industrial",
    delivery: "BOO · O&M",
  },
  {
    no: "03",
    title: "Solar-powered supply",
    copy: "Solar pumping and hybrid backup that remove fuel dependence and running cost from the water supply chain.",
    tag: "Off-grid",
    delivery: "EPC · Own & operate",
  },
  {
    no: "04",
    title: "Treatment & reuse",
    copy: "Filtration, disinfection, desalination and reuse loops matched to water quality, skills base and cost per unit served.",
    tag: "Treatment",
    delivery: "Design-build · O&M",
  },
  {
    no: "05",
    title: "Digital operations",
    copy: "Metering, telemetry, dashboards and predictive maintenance that make performance visible and financeable.",
    tag: "Digital",
    delivery: "Managed service",
  },
];

export const APPLICATIONS: Application[] = [
  {
    title: "Municipalities",
    copy: "City and utility networks under growth, leakage and outage pressure.",
  },
  {
    title: "Healthcare",
    copy: "Continuous supply for facilities where interruption is a clinical risk.",
  },
  {
    title: "Education",
    copy: "Campus-scale water that keeps schools and institutions open.",
  },
  {
    title: "Housing & mixed-use",
    copy: "Instrumented supply for new districts and serviced developments.",
  },
  {
    title: "Industry",
    copy: "Process water, cooling and reuse tied to production uptime.",
  },
  {
    title: "Agriculture",
    copy: "Solar irrigation and storage for productive, climate-exposed land.",
  },
];

// PLACEHOLDER — these are delivery principles, not verified performance claims.
export const PRINCIPLES: Principle[] = [
  {
    no: "01",
    title: "Design to the operating budget",
    copy: "Assets are sized for local skills, spares and power before construction — because a system that cannot be maintained is not infrastructure.",
  },
  {
    no: "02",
    title: "Instrument from day one",
    copy: "Measurement is part of the build, not an upgrade. Every stage reports so failures are predicted rather than discovered.",
  },
  {
    no: "03",
    title: "Publish only what is verified",
    copy: "Outcomes carry a stated method, a reporting period and a named owner. Nothing is presented as an achievement before it can be evidenced.",
  },
];

export const ROLE_ROUTES: RoleRoute[] = [
  {
    role: "Municipalities & utilities",
    copy: "A network, a service gap or a resilience problem that needs a delivery partner.",
    href: "/contact",
    link: "Start a conversation",
  },
  {
    role: "Investors & DFIs",
    copy: "Structured exposure to essential water infrastructure with visible operating data.",
    href: "/investments/opportunities",
    link: "Investment opportunities",
  },
  {
    role: "Industrial water users",
    copy: "Supply security, treatment and reuse for production sites and industrial parks.",
    href: "/contact",
    link: "Discuss requirements",
  },
  {
    role: "Technology partners",
    copy: "Metering, treatment, pumping and analytics technologies ready for deployment.",
    href: "/innovation/technology-partnerships",
    link: "Technology partnerships",
  },
  {
    role: "Project owners",
    copy: "A water project that needs capital, structuring and delivery capability.",
    href: "/contact",
    link: "Submit a project",
  },
];
