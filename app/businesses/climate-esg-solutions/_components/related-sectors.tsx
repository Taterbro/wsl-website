import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { getSector } from "@/lib/businesses";

const CONNECTIONS: Record<string, string> = {
  "water-smart-infrastructure":
    "Resilient water systems under climate stress",
  "renewable-energy": "Clean generation and storage at asset scale",
  "industrial-development": "Circular material flows and low-carbon process",
  "logistics-supply-chains": "Lower-emission corridors and resilient trade nodes",
};

const RELATED_SLUGS = [
  "water-smart-infrastructure",
  "renewable-energy",
  "industrial-development",
  "logistics-supply-chains",
] as const;

const RELATED = RELATED_SLUGS.map((slug) => ({
  ...getSector(slug),
  connection: CONNECTIONS[slug],
}));

export default function RelatedSectors() {
  return (
    <section
      aria-labelledby="climate-related-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                05 — Connected sectors
              </p>
              <h2
                id="climate-related-title"
                className="mt-4 max-w-[18ch] font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                No sector is
                <br />
                climate-neutral.
              </h2>
            </div>
            <a
              href="/businesses"
              className="inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-muted uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent lg:self-auto"
            >
              All business sectors
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-[clamp(28px,4vw,48px)] flex snap-x snap-mandatory gap-[clamp(12px,2vw,22px)] overflow-x-auto pb-2">
            {RELATED.map((sector, index) => (
              <a
                key={sector.slug}
                href={`/businesses/${sector.slug}`}
                className="group relative w-[min(78vw,300px)] shrink-0 snap-start overflow-hidden border border-accent/20 lg:w-auto lg:min-w-0 lg:flex-1"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={sector.image}
                    alt={sector.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 78vw"
                    className="object-cover transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-[1.04] motion-reduce:transform-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/20 to-sidebar/45"
                  />

                  <div className="absolute inset-0 flex flex-col justify-between p-[clamp(14px,2vw,22px)]">
                    <div className="flex items-start justify-between gap-3">
                      <span className="border border-accent/40 bg-sidebar/75 px-2 py-1 text-[0.54rem] font-semibold tracking-[0.12em] text-accent uppercase tabular-nums">
                        0{index + 1}
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid size-8 place-items-center border border-muted/35 text-[0.7rem] text-muted/80 transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:border-accent group-hover:bg-accent group-hover:text-sidebar"
                      >
                        ↗
                      </span>
                    </div>

                    <div>
                      <h3 className="max-w-[16ch] font-sans text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.12] font-extrabold tracking-[0.005em] uppercase [font-stretch:108%]">
                        {sector.name}
                      </h3>
                      <p className="mt-2 border-t border-accent/25 pt-2 text-[0.66rem] leading-[1.5] text-muted/65">
                        {sector.connection}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
