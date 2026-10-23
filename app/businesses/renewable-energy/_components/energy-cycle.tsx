import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";

// PLACEHOLDER — imagery and stage descriptions are illustrative until approved
// sector photography and content are supplied.
const STAGES = [
  {
    no: "01",
    title: "Generate",
    copy: "Solar arrays sized to site, irradiance and load — not a generic kit.",
    image: "/placeholders/group-sector-energy.png",
    alt: "Solar array generating power at sunset (placeholder image)",
  },
  {
    no: "02",
    title: "Store",
    copy: "Battery systems that firm output and carry critical load after sunset.",
    image: "/placeholders/industry-facilities.png",
    alt: "Industrial facility with energy storage infrastructure (placeholder image)",
  },
  {
    no: "03",
    title: "Dispatch",
    copy: "Hybrid distribution into industry, infrastructure and communities.",
    image: "/placeholders/district-sustainable.png",
    alt: "Sustainable district receiving distributed power (placeholder image)",
  },
];

export default function EnergyCycle() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="energy-cycle-title"
        className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid items-end gap-[clamp(20px,3vw,44px)] lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                04 — System role
              </p>
              <h2
                id="energy-cycle-title"
                className="max-w-[16ch] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                The sun sets.
                <br />
                The load does not.
              </h2>
            </div>
            <div>
              <p className="max-w-[48ch] text-[clamp(0.98rem,1.3vw,1.12rem)] leading-[1.6] text-muted/75">
                Renewable supply only becomes infrastructure when generation,
                storage and dispatch are designed together — and operated as one
                asset.
              </p>
              <a
                href="/investments/project-development"
                className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.08em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                How projects are structured
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] grid gap-px border border-accent/20 bg-accent/20 md:grid-cols-3">
            {STAGES.map((stage) => (
              <article key={stage.no} className="group relative overflow-hidden bg-sidebar">
                <div className="relative aspect-[4/5] overflow-hidden max-[640px]:aspect-[4/3]">
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/20 to-sidebar/55"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-[clamp(18px,2.4vw,28px)]">
                    <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-accent uppercase">
                      {stage.no} — {stage.title}
                    </p>
                    <h3 className="mt-2 font-sans text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.02] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]">
                      {stage.title}
                    </h3>
                    <p className="mt-3 max-w-[34ch] text-[0.9rem] leading-[1.55] text-muted/78">
                      {stage.copy}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-[clamp(16px,2.2vw,24px)] max-w-[82ch] text-[0.72rem] leading-[1.6] text-muted/45">
            PLACEHOLDER — imagery and stage descriptions are illustrative.
            Generation, storage and dispatch are scope areas, not claims of
            delivered capacity.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
