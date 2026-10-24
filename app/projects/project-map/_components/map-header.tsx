import Link from "next/link";

const READING_RULES = [
  {
    index: "01",
    title: "Country level only",
    detail: "Positions are indicative and never show an exact site or asset.",
  },
  {
    index: "02",
    title: "Verified layers only",
    detail:
      "A marker means approved project activity or a stated target market.",
  },
  {
    index: "03",
    title: "Restricted detail",
    detail: "Full project information is released on request after review.",
  },
];

export default function MapHeader() {
  return (
    <section
      aria-labelledby="project-map-title"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(48px,7vw,88px)]">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium tracking-[0.06em] text-muted-foreground uppercase">
            <li>
              <Link
                href="/"
                className="transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>Projects</li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground">
              Project Map
            </li>
          </ol>
        </nav>

        <div className="mt-[clamp(28px,4vw,44px)] grid gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1.6fr_0.7fr] lg:items-end">
          <div>
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
              Projects · Geographic view
            </p>
            <h1
              id="project-map-title"
              className="mt-4 font-sans text-[clamp(3rem,8vw,6.6rem)] leading-[0.86] font-extrabold tracking-[-0.015em] uppercase [font-stretch:120%]"
            >
              Project Map
            </h1>
            <p className="mt-6 max-w-[62ch] text-[clamp(1rem,1.5vw,1.22rem)] leading-[1.65] text-muted-foreground">
              Where approved project activity and strategic target markets sit
              today. The map separates each layer so presence is never
              overstated.
            </p>
            <p className="mt-4 text-[0.7rem] tracking-[0.06em] text-muted-foreground/75 uppercase">
              Illustrative view · placeholder locations · country-level only
            </p>
          </div>

          <aside className="border-l-2 border-accent pl-[clamp(18px,2.5vw,28px)]">
            <h2 className="font-sans text-[0.74rem] font-semibold tracking-[0.14em] text-primary uppercase">
              How to read this map
            </h2>
            <ol className="mt-4 space-y-3.5">
              {READING_RULES.map((rule) => (
                <li key={rule.index} className="flex gap-3">
                  <span className="mt-0.5 font-sans text-[0.66rem] font-semibold tracking-[0.08em] text-accent-foreground/60">
                    {rule.index}
                  </span>
                  <span>
                    <span className="block text-[0.84rem] font-semibold text-foreground">
                      {rule.title}
                    </span>
                    <span className="mt-0.5 block text-[0.78rem] leading-[1.5] text-muted-foreground">
                      {rule.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
