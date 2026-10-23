import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { getSector } from "@/lib/businesses";

const CONNECTIONS: Record<string, string> = {
  "industrial-development":
    "Manufacturing output and equipment production",
  "agriculture-food-systems":
    "Cold chain, processing and harvest flows",
  "technology-digital-infrastructure":
    "Tracking, data and the digital control layer",
  "climate-esg-solutions":
    "Lower-emission routes and resilient trade assets",
};

const RELATED_SLUGS = [
  "industrial-development",
  "agriculture-food-systems",
  "technology-digital-infrastructure",
  "climate-esg-solutions",
] as const;

const RELATED = RELATED_SLUGS.map((slug) => ({
  ...getSector(slug),
  connection: CONNECTIONS[slug],
}));

export default function RelatedSectors() {
  return (
    <section
      aria-labelledby="logistics-related-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary"
                />
                05 — Connected sectors
              </p>
              <h2
                id="logistics-related-title"
                className="mt-4 max-w-[18ch] font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                A corridor
                <br />
                connects more.
              </h2>
            </div>
            <a
              href="/businesses"
              className="inline-flex items-center gap-2 self-start border-b border-primary pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-primary lg:self-auto"
            >
              All business sectors
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-[clamp(28px,4vw,48px)] grid gap-[clamp(16px,2.4vw,28px)] md:grid-cols-2">
            {RELATED.map((sector, index) => (
              <a
                key={sector.slug}
                href={`/businesses/${sector.slug}`}
                className="group grid overflow-hidden border border-foreground/15 bg-background transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-foreground/30 sm:grid-cols-[0.82fr_1.18fr]"
              >
                <div className="relative min-h-[190px] overflow-hidden bg-foreground/10 sm:min-h-[240px]">
                  <Image
                    src={sector.image}
                    alt={sector.alt}
                    fill
                    sizes="(min-width: 768px) 20vw, 100vw"
                    className="object-cover transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-[1.04] motion-reduce:transform-none"
                  />
                  <span className="absolute top-3 left-3 border border-accent/40 bg-sidebar/75 px-2 py-1 text-[0.54rem] font-semibold tracking-[0.12em] text-accent uppercase tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-col justify-between p-[clamp(16px,2.2vw,26px)]">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[0.52rem] font-semibold tracking-[0.14em] text-foreground/55 uppercase">
                        Linked sector
                      </p>
                      <span
                        aria-hidden="true"
                        className="grid size-7 shrink-0 place-items-center border border-foreground/20 text-[0.68rem] text-foreground/60 transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:border-primary group-hover:bg-primary group-hover:text-background"
                      >
                        ↗
                      </span>
                    </div>
                    <h3 className="mt-3 font-sans text-[clamp(1rem,1.6vw,1.3rem)] leading-[1.12] font-extrabold tracking-[0.005em] uppercase [font-stretch:110%]">
                      {sector.name}
                    </h3>
                    <p className="mt-2 max-w-[34ch] text-[0.78rem] leading-[1.55] text-foreground/65">
                      {sector.valueProp}
                    </p>
                  </div>

                  <p className="mt-[clamp(16px,2vw,22px)] border-t border-foreground/15 pt-3 text-[0.62rem] leading-[1.5] text-foreground/60">
                    Connects through{" "}
                    <span className="font-semibold text-foreground/80">
                      {sector.connection}
                    </span>
                    .
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
