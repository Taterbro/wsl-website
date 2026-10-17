const METRICS: { label: string; caption: string }[] = [
  { label: "Jobs", caption: "Direct and indirect, by project" },
  { label: "Access", caption: "People reached by service" },
  { label: "Capacity", caption: "Energy, water and output built" },
];

const COMMITMENTS: string[] = [
  "Every metric carries a methodology, reporting period and source owner.",
  "Project-level impact is reported to the same standard as financial performance.",
  "Targets are published only when they have a credible delivery path.",
];

const IHEAL: { letter: string; label: string }[] = [
  { letter: "I", label: "Innovation, income & infrastructure" },
  { letter: "H", label: "Healthcare & hygiene" },
  { letter: "E", label: "Education & empowerment" },
  { letter: "A", label: "Agriculture, food & clean water access" },
  { letter: "L", label: "Living standards, leadership & livelihoods" },
];

export default function Impact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-title"
      className="bg-secondary py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="mb-[clamp(30px,4vw,46px)] max-w-[54ch]">
          <h2
            id="impact-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Impact &amp;
            <br />
            sustainability
          </h2>
          <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal font-normal text-muted-foreground">
            Commercial return and sustainable development are the same
            discipline: assets that last, measured honestly.
          </p>
        </div>
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] max-[1080px]:grid-cols-1 max-[1080px]:gap-[34px]">
          <div className="bg-muted p-[clamp(24px,3.5vw,44px)]">
            <h3 className="mb-2 font-sans text-[1.15rem] font-extrabold uppercase [font-stretch:114%]">
              Measured in the commercial group
            </h3>
            <p className="mb-5 text-[0.72rem] font-semibold tracking-[0.1em] text-primary uppercase">
              Verified metrics only
            </p>
            <div className="mt-[26px] grid grid-cols-3 gap-5 max-[760px]:grid-cols-2">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="border-t-2 border-primary pt-3"
                >
                  <b className="block font-sans text-[1.7rem] leading-none font-extrabold text-foreground [font-stretch:114%]">
                    {metric.label}
                  </b>
                  <span className="mt-1.5 block text-[0.74rem] text-muted-foreground">
                    {metric.caption}
                  </span>
                </div>
              ))}
            </div>
            <ul className="mt-[22px] flex list-none flex-col gap-3 p-0 pl-0">
              {COMMITMENTS.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.9rem] leading-[1.5] text-muted-foreground before:mt-2 before:h-1.5 before:w-1.5 before:flex-none before:rotate-45 before:bg-chart-4 before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary p-[clamp(24px,3.5vw,44px)]">
            <span className="mb-[18px] inline-flex items-center gap-2 rounded-[2px] border border-chart-4/16 px-3 py-[7px] text-[0.7rem] font-semibold tracking-[0.09em] text-[#855c18] uppercase">
              Independent nonprofit
            </span>
            <h3 className="mb-2 font-sans text-[1.15rem] font-extrabold uppercase [font-stretch:114%]">
              Waterlight Save Initiative
            </h3>
            <p className="mb-5 text-[0.72rem] font-semibold tracking-[0.1em] text-primary uppercase">
              Development partnerships
            </p>
            <p className="text-[0.94rem] leading-[1.6] text-muted-foreground">
              The Group and Waterlight Save Initiative share a philosophy of
              sustainable development, but they are separate organisations.
              Waterlight Save Initiative is an independent
              nonprofit/development organisation, presented here under Global
              Impact — not as a commercial subsidiary.
            </p>
            <div
              aria-label="The iHEAL framework"
              className="mt-5 grid gap-2"
            >
              {IHEAL.map((row) => (
                <div
                  key={row.letter}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-3 text-[0.82rem]"
                >
                  <b className="font-sans text-[1.05rem] font-extrabold text-primary [font-stretch:114%]">
                    {row.letter}
                  </b>
                  <span className="text-muted-foreground">{row.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
