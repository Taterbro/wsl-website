// PLACEHOLDER — illustrative newsroom entries. Titles, dates, categories and
// imagery are not published announcements. Replace with approved items and
// add article routes before linking any card.

export type NewsCategory =
  | "Group"
  | "Projects"
  | "Partnerships"
  | "People";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string;
  dateLabel: string;
  image: string;
  imageAlt: string;
}

export const NEWS_CATEGORIES = [
  "All",
  "Group",
  "Projects",
  "Partnerships",
  "People",
] as const;

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "platform-priorities",
    title: "Waterlight outlines platform priorities for the year ahead",
    excerpt:
      "A short placeholder note on the group's focus across infrastructure, industry and investment.",
    category: "Group",
    date: "2026-10-12",
    dateLabel: "12 Oct 2026",
    image: "/placeholders/vision-hero.png",
    imageAlt:
      "Placeholder image standing in for a wide view of African infrastructure and urban development",
  },
  {
    id: "pipeline-expansion",
    title: "Project development pipeline expands across three markets",
    excerpt:
      "Placeholder summary of early-stage project work. No project names or commitments are implied.",
    category: "Projects",
    date: "2026-10-03",
    dateLabel: "03 Oct 2026",
    image: "/placeholders/industry-facilities.png",
    imageAlt:
      "Placeholder image of industrial facilities and manufacturing infrastructure",
  },
  {
    id: "development-finance-dialogue",
    title: "Development finance dialogue focuses on bankable infrastructure",
    excerpt:
      "A placeholder update on category-level conversations with development finance institutions.",
    category: "Partnerships",
    date: "2026-09-24",
    dateLabel: "24 Sep 2026",
    image: "/placeholders/logistics-corridor.png",
    imageAlt:
      "Placeholder image of a transport corridor and logistics infrastructure",
  },
  {
    id: "water-resilience",
    title: "Waterlight joins regional discussion on water resilience",
    excerpt:
      "Placeholder note on a convening. Participation does not imply an agreement or endorsement.",
    category: "Group",
    date: "2026-09-15",
    dateLabel: "15 Sep 2026",
    image: "/placeholders/story-field-water.png",
    imageAlt:
      "Placeholder image of water infrastructure in the field",
  },
  {
    id: "institutional-leadership",
    title: "Leadership note: building institutions, not just assets",
    excerpt:
      "A placeholder perspective from the group on long-term operating capability.",
    category: "People",
    date: "2026-09-02",
    dateLabel: "02 Sep 2026",
    image: "/placeholders/story-founder-portrait.png",
    imageAlt:
      "Placeholder portrait image standing in for a leadership photograph",
  },
  {
    id: "climate-screening",
    title: "Climate and ESG screening embedded earlier in project design",
    excerpt:
      "Placeholder update on how environmental and social considerations enter screening.",
    category: "Projects",
    date: "2026-08-21",
    dateLabel: "21 Aug 2026",
    image: "/placeholders/group-sector-climate.png",
    imageAlt:
      "Placeholder image representing climate and environmental systems",
  },
];
