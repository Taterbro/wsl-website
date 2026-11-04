import Reveal from "../../../(home)/_components/reveal";

const VERBS: { no: string; verb: string; copy: string }[] = [
  {
    no: "01",
    verb: "Identify",
    copy: "Essential-need demand read from the market — not from a trend report.",
  },
  {
    no: "02",
    verb: "Mobilize",
    copy: "Capital, technology and expertise assembled around one specific asset.",
  },
  {
    no: "03",
    verb: "Develop",
    copy: "Enterprises and projects built to operate, not to be handed over at completion.",
  },
  {
    no: "04",
    verb: "Deploy",
    copy: "Solutions engineered for the climate, grid, skills and cost base they must live in.",
  },
];

const SECTORS: { label: string; href: string }[] = [
  {
    label: "Water & Smart Infrastructure",
    href: "/businesses/water-smart-infrastructure",
  },
  { label: "Energy", href: "/businesses/energy" },
  { label: "Agriculture & Food Systems", href: "/businesses/agriculture" },
  {
    label: "Technology, AI & Digital Infrastructure",
    href: "/businesses/technology-ai",
  },
  {
    label: "Industrial Development & Manufacturing",
    href: "/businesses/industry",
  },
  {
    label: "Real Estate & Urban Infrastructure",
    href: "/businesses/real-estate-urban-infrastructure",
  },
  { label: "Logistics & Supply Chains", href: "/businesses/logistics" },
  { label: "Climate & ESG", href: "/businesses/climate-esg" },
];

export default function VisionMission() {
  return (
    <Reveal>
      <section
        id="mission"
        aria-labelledby="vision-mission-title"
        className="scroll-mt-[92px] bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="max-w-[44ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
              />
              02 — Our mission
            </p>
            <h2
              id="vision-mission-title"
              className="font-sans text-[clamp(1.4rem,3vw,2.5rem)] leading-[1.14] font-extrabold tracking-[-0.01em]"
            >
              To identify opportunities, mobilize capital, develop enterprises
              and deploy innovative solutions across critical sectors.
            </h2>
            <p className="mt-[clamp(20px,2.6vw,28px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              Four verbs carry the mission. Each one is a discipline with owners,
              a stage gate and a standard — not an aspiration.
            </p>
          </div>

          <ol className="mt-[clamp(34px,5vw,60px)] grid list-none grid-cols-4 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] p-0 max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
            {VERBS.map((verb) => (
              <li
                key={verb.no}
                className="flex flex-col gap-3 bg-muted px-[clamp(18px,2.4vw,32px)] pt-[clamp(20px,2.4vw,30px)] pb-[clamp(20px,2.4vw,30px)]"
              >
                <span className="font-sans text-[0.8rem] font-extrabold tracking-[0.16em] text-chart-4 [font-stretch:112%]">
                  {verb.no}
                </span>
                <h3 className="font-sans text-[clamp(1.05rem,1.5vw,1.35rem)] leading-[1.1] font-extrabold uppercase [font-stretch:112%]">
                  {verb.verb}
                </h3>
                <p className="text-[0.9rem] leading-[1.55] text-muted-foreground">
                  {verb.copy}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-[clamp(36px,5vw,64px)] border-t border-[rgba(9,29,42,0.16)] pt-[clamp(20px,2.6vw,28px)]">
            <h3 className="text-[0.72rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Critical sectors
            </h3>
            <ul className="mt-4 flex list-none flex-wrap gap-[10px] p-0">
              {SECTORS.map((sector) => (
                <li key={sector.href}>
                  <a
                    href={sector.href}
                    className="inline-flex items-center gap-2 rounded-[2px] border border-[rgba(9,29,42,0.16)] px-[14px] py-[9px] text-[0.8rem] font-medium transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {sector.label}
                    <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
