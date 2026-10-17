import Reveal from "../reveal";

const LIST_INSIGHTS: {
  cat: string;
  title: string;
  topic: string;
}[] = [
  {
    cat: "Research",
    title: "Water security as industrial policy",
    topic: "Water & infrastructure",
  },
  {
    cat: "Report",
    title: "Building bankable water infrastructure",
    topic: "Structuring",
  },
  {
    cat: "Corporate news",
    title: "Waterlight Group sets out its 2026 delivery programme",
    topic: "Newsroom",
  },
];

const BTN_GHOST_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-current bg-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-foreground uppercase transition-colors transition-transform duration-(--transition-normal) ease-(--ease-standard) hover:bg-foreground hover:text-muted motion-reduce:transition-none";

export default function Insights() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-title"
      className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2
            id="insights-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Insights
          </h2>
          <a href="#insights" className={BTN_GHOST_CLASS}>
            All insights
          </a>
        </div>
        <Reveal>
          <div className="mt-[clamp(30px,4vw,46px)] grid grid-cols-[1.2fr_1fr] gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] max-[1080px]:grid-cols-1">
            <article className="flex flex-col gap-[14px] bg-background p-[clamp(22px,3vw,38px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-secondary motion-reduce:transition-none">
              <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-[#855c18] uppercase">
                Perspective
              </span>
              <h3 className="font-sans text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.02] font-bold tracking-[-0.01em] uppercase [font-stretch:110%]">
                Africa is now: the continent&apos;s infrastructure decade has
                already begun
              </h3>
              <p className="flex-1 text-[0.92rem] leading-[1.55] text-muted-foreground">
                Why the case for African infrastructure has moved from promise
                to pipeline — and what serious partners should be structuring
                today.
              </p>
              <div className="flex justify-between gap-3 border-t border-[rgba(9,29,42,0.16)] pt-3 text-[0.72rem] text-muted-foreground">
                <span>Investment thesis</span>
                <a
                  href="#insights"
                  className="text-[0.78rem] font-semibold text-foreground transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary motion-reduce:transition-none"
                >
                  Read perspective
                </a>
              </div>
            </article>
            <div className="grid gap-px bg-[rgba(9,29,42,0.16)]">
              {LIST_INSIGHTS.map((insight) => (
                <article
                  key={insight.title}
                  className="flex flex-col gap-[14px] bg-background p-[clamp(22px,3vw,38px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-secondary motion-reduce:transition-none"
                >
                  <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-primary uppercase">
                    {insight.cat}
                  </span>
                  <h3 className="font-sans text-[clamp(1.1rem,1.8vw,1.55rem)] leading-[1.12] font-bold tracking-[-0.005em] [font-stretch:110%]">
                    {insight.title}
                  </h3>
                  <div className="flex justify-between gap-3 border-t border-[rgba(9,29,42,0.16)] pt-3 text-[0.72rem] text-muted-foreground">
                    <span>{insight.topic}</span>
                    <a
                      href="#insights"
                      className="text-[0.78rem] font-semibold text-foreground transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary motion-reduce:transition-none"
                    >
                      Read
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
