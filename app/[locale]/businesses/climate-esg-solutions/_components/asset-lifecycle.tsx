import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";

// PLACEHOLDER — lifecycle copy and imagery are illustrative until approved
// sector content and photography are supplied.
const STAGES: { no: string; title: string; copy: string; lens: string }[] = [
  {
    no: "01",
    title: "Design",
    copy: "Set resilience, circularity and efficiency targets before capital is committed.",
    lens: "Targets",
  },
  {
    no: "02",
    title: "Build",
    copy: "Procure and construct against the climate brief, not after it.",
    lens: "Materials",
  },
  {
    no: "03",
    title: "Operate",
    copy: "Meter, report and optimise energy, water and material use in service.",
    lens: "Performance",
  },
  {
    no: "04",
    title: "Renew",
    copy: "Retrofit, recover and return materials to the loop at end of use.",
    lens: "Recovery",
  },
];

export default function AssetLifecycle() {
  return (
    <section
      aria-labelledby="climate-lifecycle-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
        <div className="mx-auto grid w-full max-w-[1440px] gap-[clamp(30px,5vw,68px)] px-[clamp(20px,5vw,72px)] lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary"
              />
              04 — Asset lifecycle
            </p>
            <h2
              id="climate-lifecycle-title"
              className="mt-4 max-w-[15ch] font-sans text-[clamp(2rem,4.2vw,3.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Climate across
              <br />
              the whole life.
            </h2>
            <p className="mt-[clamp(16px,2.2vw,24px)] max-w-[48ch] text-[clamp(0.96rem,1.25vw,1.08rem)] leading-[1.6] text-foreground/65">
              A climate commitment that stops at handover is a design note, not
              an outcome. The lens stays on through construction, operations and
              renewal.
            </p>

            <ol className="relative mt-[clamp(24px,3.6vw,40px)] before:absolute before:top-3 before:bottom-3 before:left-[9px] before:w-px before:bg-foreground/15">
              {STAGES.map((stage) => (
                <li
                  key={stage.no}
                  className="relative grid grid-cols-[auto_1fr] gap-x-[clamp(14px,2.2vw,24px)] pb-[clamp(18px,2.6vw,28px)] last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="relative z-10 mt-0.5 grid size-5 place-items-center rounded-full border border-primary/40 bg-background"
                  >
                    <span className="size-1.5 rounded-full bg-primary" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-sans text-[0.6rem] font-semibold tracking-[0.14em] text-primary/60 uppercase tabular-nums">
                        {stage.no}
                      </span>
                      <h3 className="font-sans text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.15] font-extrabold tracking-[0.01em] uppercase [font-stretch:110%]">
                        {stage.title}
                      </h3>
                      <span className="border border-foreground/20 px-2 py-0.5 text-[0.5rem] font-semibold tracking-[0.1em] text-foreground/55 uppercase">
                        {stage.lens}
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-[46ch] text-[0.84rem] leading-[1.55] text-foreground/60">
                      {stage.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative min-h-[clamp(380px,48vw,620px)] overflow-hidden bg-sidebar">
            <Image
              src="/placeholders/vision-impact.png"
              alt="Climate and community impact work in the field (placeholder image)"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar/90 via-sidebar/20 to-sidebar/35"
            />

            <p className="absolute top-[clamp(16px,2.4vw,28px)] left-[clamp(16px,2.4vw,28px)] border border-accent/35 bg-sidebar/80 px-2.5 py-1.5 text-[0.56rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Bridge — Impact
            </p>

            <div className="absolute inset-x-[clamp(16px,2.4vw,28px)] bottom-[clamp(16px,2.4vw,28px)] border border-accent/25 bg-sidebar/88 p-[clamp(18px,2.6vw,28px)] text-muted backdrop-blur-md">
              <p className="text-[0.56rem] font-semibold tracking-[0.16em] text-accent uppercase">
                From commitments to outcomes
              </p>
              <p className="mt-2.5 max-w-[34ch] font-sans text-[clamp(1.2rem,2.2vw,1.7rem)] leading-[1.06] font-extrabold tracking-[-0.01em] uppercase [font-stretch:112%]">
                Outcomes need a measurement home.
              </p>
              <p className="mt-3 max-w-[44ch] text-[0.82rem] leading-[1.55] text-muted/70">
                The climate lens runs into the group&apos;s wider impact
                reporting and development partnerships.
              </p>
              <a
                href="/impact/sustainability"
                className="mt-[clamp(14px,2vw,20px)] inline-flex items-center gap-2 border-b border-accent pb-1 text-[0.68rem] font-semibold tracking-[0.1em] text-muted uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent"
              >
                Impact &amp; sustainability
                <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-4 border-t border-accent/15 pt-3 text-[0.56rem] leading-[1.5] text-muted/55">
                PLACEHOLDER — lifecycle copy and bridge imagery are
                illustrative. The Waterlight Save Initiative is a separate
                nonprofit, not a commercial subsidiary.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
