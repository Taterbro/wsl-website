// PLACEHOLDER — illustrative event listings. Titles, dates, locations,
// formats and summaries are not confirmed appearances. Replace with approved
// entries and add event detail pages before linking any row.

export type EventStatus = "Upcoming" | "Recent";

export type EventType =
  | "Convening"
  | "Roundtable"
  | "Briefing"
  | "Forum"
  | "Workshop";

export type EventFormat = "In person" | "Virtual" | "Hybrid";

export interface EventItem {
  id: string;
  title: string;
  summary: string;
  status: EventStatus;
  type: EventType;
  date: string;
  dateLabel: string;
  day: string;
  month: string;
  year: string;
  location: string;
  format: EventFormat;
}

export const EVENT_FILTERS = ["All", "Upcoming", "Recent"] as const;

export const EVENTS: EventItem[] = [
  {
    id: "infrastructure-dialogue",
    title: "Infrastructure dialogue: bankability and delivery",
    summary:
      "A placeholder convening on project preparation, delivery models and the conditions for bankable infrastructure.",
    status: "Upcoming",
    type: "Convening",
    date: "2026-11-18",
    dateLabel: "18 Nov 2026",
    day: "18",
    month: "Nov",
    year: "2026",
    location: "Lagos, Nigeria",
    format: "In person",
  },
  {
    id: "water-resilience-roundtable",
    title: "Water resilience roundtable",
    summary:
      "A placeholder roundtable on water systems, resilience planning and institutional coordination.",
    status: "Upcoming",
    type: "Roundtable",
    date: "2026-11-05",
    dateLabel: "05 Nov 2026",
    day: "05",
    month: "Nov",
    year: "2026",
    location: "Nairobi, Kenya",
    format: "Hybrid",
  },
  {
    id: "gcc-africa-corridor-briefing",
    title: "GCC–Africa investment corridor briefing",
    summary:
      "A placeholder briefing on cross-border investment, trade corridors and market-entry questions.",
    status: "Recent",
    type: "Briefing",
    date: "2026-10-22",
    dateLabel: "22 Oct 2026",
    day: "22",
    month: "Oct",
    year: "2026",
    location: "Dubai, UAE",
    format: "In person",
  },
  {
    id: "industrial-capability-forum",
    title: "Industrial capability and local content forum",
    summary:
      "A placeholder forum on manufacturing capability, skills and local supply-chain development.",
    status: "Recent",
    type: "Forum",
    date: "2026-10-09",
    dateLabel: "09 Oct 2026",
    day: "09",
    month: "Oct",
    year: "2026",
    location: "Johannesburg, South Africa",
    format: "In person",
  },
  {
    id: "climate-finance-workshop",
    title: "Climate finance and project preparation workshop",
    summary:
      "A placeholder workshop on early-stage project preparation and climate-aligned finance.",
    status: "Recent",
    type: "Workshop",
    date: "2026-09-24",
    dateLabel: "24 Sep 2026",
    day: "24",
    month: "Sep",
    year: "2026",
    location: "London, United Kingdom",
    format: "Hybrid",
  },
  {
    id: "platform-priorities-briefing",
    title: "Platform priorities: media briefing",
    summary:
      "A placeholder media briefing on the group's platform priorities and operating approach.",
    status: "Recent",
    type: "Briefing",
    date: "2026-09-12",
    dateLabel: "12 Sep 2026",
    day: "12",
    month: "Sep",
    year: "2026",
    location: "Virtual",
    format: "Virtual",
  },
];
