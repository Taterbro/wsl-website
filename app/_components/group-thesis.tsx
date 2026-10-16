import Reveal from "./reveal";

const METRICS: { label: string; value: string }[] = [
  { label: "Business platforms", value: "8" },
  { label: "Operating markets", value: "5 regions" },
  { label: "Value-creation stages", value: "6" },
  { label: "Group entities", value: "5 + nonprofit" },
];

export default function GroupThesis() {
  return (
    <Reveal>
      <section
        id="group"
        aria-labelledby="group-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[1.35fr_0.85fr] items-end gap-[clamp(32px,6vw,90px)] px-[clamp(20px,5vw,72px)] max-[1080px]:grid-cols-1 max-[1080px]:gap-[34px]">
        <div>
          <p className="mb-5 text-[0.78rem] font-semibold tracking-[0.1em] uppercase text-primary">
            The group in one line
          </p>
          <h2
            id="group-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            African roots.
            <br />
            <span className="text-primary">Global vision.</span>
          </h2>
        </div>
        <div>
          <p>
            We originate and build essential assets where they are needed most
            — connecting African opportunity with global capital, technology,
            expertise and markets. The result is not a fund or a single
            business, but an operating group that carries an opportunity from
            first identification through to generational value.
          </p>
          <p className="mt-4 text-muted-foreground">
            From Africa to the world. From the world to Africa.
          </p>
          <dl className="mt-[26px] grid grid-cols-2 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)]">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="bg-muted px-[18px] pt-[18px] pb-4"
              >
                <dt className="mb-1.5 text-[0.7rem] tracking-[0.08em] uppercase text-muted-foreground">
                  {metric.label}
                </dt>
                <dd className="m-0 font-sans text-[1.5rem] leading-none font-extrabold [font-stretch:114%]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </section>
    </Reveal>
  );
}
