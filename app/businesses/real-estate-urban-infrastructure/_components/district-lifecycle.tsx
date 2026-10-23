import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";

// PLACEHOLDER — lifecycle copy and imagery are illustrative until approved
// sector content is supplied.
const STAGES: { number: string; title: string; copy: string }[] = [
  {
    number: "01",
    title: "Plan",
    copy: "Set the brief: density, tenure, utilities and public realm.",
  },
  {
    number: "02",
    title: "Build",
    copy: "Deliver housing, commercial space and infrastructure together.",
  },
  {
    number: "03",
    title: "Operate",
    copy: "Run districts with shared services and performance data.",
  },
  {
    number: "04",
    title: "Renew",
    copy: "Retrofit, repurpose and reinvest as the city changes.",
  },
];

export default function DistrictLifecycle() {
  return (
    <section
      aria-labelledby="urban-lifecycle-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-col gap-[clamp(20px,3vw,36px)] lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                04 — District lifecycle
              </p>
              <h2
                id="urban-lifecycle-title"
                className="mt-4 max-w-[16ch] font-sans text-[clamp(2rem,4.4vw,3.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                A district is
                <br />
                never finished.
              </h2>
            </div>

            <div className="max-w-[46ch] lg:text-right">
              <p className="text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted/70">
                Value is created across the whole urban cycle — not only at
                handover. We stay through operations and renewal.
              </p>
              <a
                href="/businesses/technology-digital-infrastructure"
                className="mt-5 inline-flex items-center gap-2 border-b border-accent pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent"
              >
                Smart city systems
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="relative mt-[clamp(24px,3.6vw,44px)] aspect-[4/3] min-h-[220px] overflow-hidden border border-accent/25 sm:aspect-[21/9] sm:min-h-0">
            <Image
              src="/placeholders/district-panorama.png"
              alt="Panoramic urban district at the edge of the city (placeholder image)"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar/75 via-sidebar/10 to-transparent"
            />
            <p className="absolute top-4 left-4 border border-accent/35 bg-sidebar/80 px-2.5 py-1.5 text-[0.56rem] font-semibold tracking-[0.14em] text-accent uppercase">
              District lifecycle — 04
            </p>
            <p className="absolute right-4 bottom-4 max-w-[30ch] text-right text-[0.58rem] leading-[1.5] text-muted/65">
              PLACEHOLDER — panorama to be replaced with approved district
              imagery.
            </p>
          </div>

          <ol className="grid gap-px border-x border-b border-accent/20 bg-accent/20 sm:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((stage) => (
              <li
                key={stage.number}
                className="bg-sidebar p-[clamp(18px,2.4vw,28px)]"
              >
                <p className="font-sans text-[0.6rem] font-semibold tracking-[0.14em] text-accent uppercase tabular-nums">
                  {stage.number}
                </p>
                <h3 className="mt-2 font-sans text-[clamp(0.95rem,1.4vw,1.15rem)] font-extrabold tracking-[0.01em] uppercase [font-stretch:108%]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-[0.8rem] leading-[1.55] text-muted/65">
                  {stage.copy}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
