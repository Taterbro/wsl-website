import Reveal from "../../../(home)/_components/reveal";
import type { TechnologyDigitalInfrastructureSystemsLayer } from "@/lib/cms/generated";

const FALLBACK_HEADING = "The physical\nworld, made\nreadable.";

const FALLBACK_DESCRIPTION =
  "Technology only matters when it changes what an operator can see, decide or do. The sector sits over water, energy, industry and cities — not beside them.";

const FALLBACK_IMAGE_ALT =
  "Digital monitoring platform connecting physical infrastructure (placeholder image)";

const FALLBACK_FLOW = ["Sense", "Model", "Act"];

// PLACEHOLDER — imagery and principles are illustrative until approved sector
// photography and content are supplied. Media has no value fallback; the image
// renders only from the CMS.
const FALLBACK_PRINCIPLES = [
  {
    no: "01",
    title: "Instrument",
    copy: "Sensors, telemetry and connected assets turn physical condition into live data.",
  },
  {
    no: "02",
    title: "Interpret",
    copy: "Models and dashboards turn data into decisions operators can act on.",
  },
  {
    no: "03",
    title: "Operate",
    copy: "Platforms and automation turn decisions into repeatable, auditable action.",
  },
];

export default function SystemsLayer({
  data,
}: {
  data: TechnologyDigitalInfrastructureSystemsLayer;
}) {
  const principles = data.principles.length
    ? data.principles
    : FALLBACK_PRINCIPLES;
  const flow = data.flow
    .split(",")
    .map((step) => step.trim())
    .filter(Boolean);
  const steps = flow.length ? flow : FALLBACK_FLOW;
  const heading = data.heading || FALLBACK_HEADING;
  const headingLines = heading.split("\n");
  const alt = data.image
    ? data.image.alt || data.image_alt || FALLBACK_IMAGE_ALT
    : "";

  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="technology-systems-title"
        className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-[clamp(30px,5vw,72px)] px-[clamp(20px,5vw,72px)] lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              04 — Physical meets digital
            </p>
            <h2
              id="technology-systems-title"
              className="max-w-[16ch] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              {headingLines.length === 3 ? (
                <>
                  {headingLines[0]}
                  <br />
                  {headingLines[1]}
                  <br />
                  {headingLines[2]}
                </>
              ) : (
                heading
              )}
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/78">
              {data.description || FALLBACK_DESCRIPTION}
            </p>

            <ol className="mt-[clamp(26px,3.6vw,42px)] list-none border-t border-accent/20 p-0">
              {principles.map((principle) => (
                <li
                  key={principle.no}
                  className="grid grid-cols-[2.2rem_1fr] gap-x-4 border-b border-accent/15 py-[clamp(12px,1.6vw,18px)]"
                >
                  <span className="pt-[3px] font-sans text-[0.66rem] font-extrabold tracking-[0.14em] text-accent [font-stretch:112%]">
                    {principle.no}
                  </span>
                  <div>
                    <h3 className="font-sans text-[clamp(0.96rem,1.35vw,1.15rem)] leading-[1.2] font-extrabold tracking-[0.02em] uppercase [font-stretch:112%]">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 max-w-[46ch] text-[0.88rem] leading-[1.55] text-muted/72">
                      {principle.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* <a
              href="/innovation/wswis"
              className="mt-[clamp(22px,3vw,32px)] inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.08em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Explore the WSWIS platform
              <span aria-hidden="true">→</span>
            </a> */}
          </div>

          <div className="relative min-h-[clamp(340px,48vw,680px)] overflow-hidden border border-accent/20 bg-sidebar-accent">
            {data.image ? (
              <div
                role={alt ? "img" : undefined}
                aria-label={alt || undefined}
                aria-hidden={alt ? undefined : true}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${data.image.url})` }}
              />
            ) : null}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar/90 via-sidebar/15 to-sidebar/55"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-55"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(100,216,232,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(100,216,232,0.08) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-[clamp(14px,2.2vw,26px)]">
              <p className="text-[0.6rem] font-semibold tracking-[0.2em] text-accent uppercase">
                Platform layer
              </p>
              {data.image ? (
                <p className="text-[0.6rem] font-semibold tracking-[0.18em] text-muted/60 uppercase">
                  PLACEHOLDER
                </p>
              ) : null}
            </div>

            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-x-3 gap-y-2 p-[clamp(14px,2.2vw,26px)] text-[0.66rem] font-semibold tracking-[0.14em] uppercase">
              {steps.map((step, index) => (
                <span key={step} className="flex items-center gap-3">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-accent/60">
                      →
                    </span>
                  )}
                  <span className="text-muted/80">{step}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
