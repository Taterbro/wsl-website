import BusinessRail, {
  type Sector,
} from "../../../(home)/_components/business-platforms/business-rail";

interface Milestone extends Sector {
  placeholder?: boolean;
}

// PLACEHOLDER: replace with approved group milestone dates and approved narrative
const MILESTONES: Milestone[] = [
  {
    no: "2011",
    title: "Founded in Africa",
    description:
      "The group starts as an engineering and infrastructure practice in its home market, delivering water and energy works for municipal and institutional clients.",
    tag: "Origin",
    placeholder: true,
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(95, 227, 198, 0.4), transparent 60%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "2014",
    title: "Capital enters the business",
    description:
      "An investment mandate lets the group hold assets rather than hand them over, funding the first long-life infrastructure positions.",
    tag: "Investment",
    placeholder: true,
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(218, 156, 67, 0.42), transparent 62%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "2016",
    title: "WSWIS takes shape",
    description:
      "The first integrated solar-to-tap system is designed — generation, treatment, storage, distribution and digital monitoring as one engineered asset.",
    tag: "Innovation",
    placeholder: true,
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(95, 227, 198, 0.32), transparent 60%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "2019",
    title: "Industry joins the portfolio",
    description:
      "Industrial development and manufacturing are added, so value is captured inside the economy and not only around it.",
    tag: "Industry",
    placeholder: true,
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(160, 160, 175, 0.36), transparent 62%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "2022",
    title: "The first global corridor",
    description:
      "Partnerships extend the group's work beyond its home market, opening a two-way corridor between African opportunity and global capital.",
    tag: "Global markets",
    placeholder: true,
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(95, 180, 220, 0.34), transparent 62%), linear-gradient(160deg, #0a2a33, #06181f)",
  },
  {
    no: "2026",
    title: "Eight platforms, five regions",
    description:
      "The group now operates as a multi-platform enterprise with one shared discipline: identify, structure, build, scale.",
    tag: "Today",
    placeholder: true,
    background:
      "radial-gradient(120% 90% at 80% 0%, rgba(95, 227, 198, 0.28), rgba(218, 156, 67, 0.18) 70%, transparent), linear-gradient(160deg, #0a2a33, #06181f)",
  },
];

export default function StoryMilestones() {
  return (
    <section
      id="story-milestones"
      aria-labelledby="story-milestones-title"
      className="max-w-screen overflow-x-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <BusinessRail
        title={
          <h2
            id="story-milestones-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            How we
            <br />
            got here
          </h2>
        }
        lede="Six moments that carried a single engineering practice into a multi-platform group."
        sectors={MILESTONES}
        label="Scrollable list of group milestones"
      />
      <p className="mx-auto mt-5 max-w-[1440px] px-[clamp(20px,5vw,72px)] text-[0.72rem] leading-[1.5] text-muted/55">
        PLACEHOLDER — milestone dates and narrative are working copy and are
        released only once approved by the group secretariat.
      </p>
    </section>
  );
}
