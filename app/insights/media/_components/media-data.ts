// PLACEHOLDER — illustrative media coverage and resource entries. Outlet
// names, headlines, dates and assets are not confirmed. Do not publish
// external coverage links or downloadable files without approval.

export interface MediaMention {
  id: string;
  publication: string;
  headline: string;
  date: string;
  dateLabel: string;
}

export interface MediaResource {
  id: string;
  code: string;
  title: string;
  description: string;
}

export const MEDIA_MENTIONS: MediaMention[] = [
  {
    id: "platform-approach",
    publication: "Pan-African business daily",
    headline:
      "Waterlight outlines platform approach to infrastructure and industry",
    date: "2026-10-14",
    dateLabel: "14 Oct 2026",
  },
  {
    id: "beyond-holding-company",
    publication: "International financial news outlet",
    headline:
      "African-founded groups look beyond the traditional holding-company model",
    date: "2026-09-28",
    dateLabel: "28 Sep 2026",
  },
  {
    id: "bankability-question",
    publication: "Regional infrastructure journal",
    headline: "Project preparation and the bankability question",
    date: "2026-09-12",
    dateLabel: "12 Sep 2026",
  },
  {
    id: "institutions-interview",
    publication: "Business radio programme",
    headline: "Interview: building institutions across markets",
    date: "2026-08-30",
    dateLabel: "30 Aug 2026",
  },
  {
    id: "local-content",
    publication: "Industry trade publication",
    headline: "Local content and the long view on industrial capability",
    date: "2026-08-18",
    dateLabel: "18 Aug 2026",
  },
];

export const MEDIA_RESOURCES: MediaResource[] = [
  {
    id: "boilerplate",
    code: "M-01",
    title: "Group boilerplate",
    description:
      "Short and long-form descriptions of Waterlight Group for publication.",
  },
  {
    id: "leadership",
    code: "M-02",
    title: "Leadership biographies",
    description:
      "Current role descriptions and approved portrait photography.",
  },
  {
    id: "brand",
    code: "M-03",
    title: "Brand marks & usage",
    description:
      "Logo files and basic guidance for approved editorial use.",
  },
  {
    id: "imagery",
    code: "M-04",
    title: "Imagery & captions",
    description:
      "Cleared photography with descriptive captions and consent notes.",
  },
];
