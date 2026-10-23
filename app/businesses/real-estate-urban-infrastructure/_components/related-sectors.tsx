import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { getSector } from "@/lib/businesses";
import { cn } from "@/lib/utils";

const RELATED_SLUGS = [
  "technology-digital-infrastructure",
  "water-smart-infrastructure",
  "renewable-energy",
  "climate-esg-solutions",
] as const;

const RELATED = RELATED_SLUGS.map((slug) => getSector(slug));

export default function RelatedSectors() {
  return (
    <section
      aria-labelledby="urban-related-title"
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
                id="urban-related-title"
                className="mt-4 max-w-[18ch] font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                The city is a
                <br />
                system of systems.
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

          <div className="mt-[clamp(28px,4vw,48px)] grid grid-cols-2 gap-x-[clamp(12px,2vw,22px)] gap-y-[clamp(20px,3vw,34px)] lg:grid-cols-4">
            {RELATED.map((sector, index) => (
              <a
                key={sector.slug}
                href={`/businesses/${sector.slug}`}
                className={cn(
                  "group flex flex-col",
                  index % 2 === 1 && "lg:mt-[clamp(24px,4vw,56px)]"
                )}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-foreground/10">
                  <Image
                    src={sector.image}
                    alt={sector.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-[1.04] motion-reduce:transform-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-sidebar/70 via-transparent to-transparent"
                  />
                  <span className="absolute top-3 left-3 border border-accent/40 bg-sidebar/75 px-2 py-1 text-[0.54rem] font-semibold tracking-[0.12em] text-accent uppercase tabular-nums">
                    0{index + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute right-3 bottom-3 grid size-8 place-items-center border border-muted/35 text-[0.7rem] text-muted/80 transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:border-accent group-hover:bg-accent group-hover:text-sidebar"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="mt-4 font-sans text-[clamp(0.95rem,1.5vw,1.2rem)] leading-[1.15] font-extrabold tracking-[0.005em] uppercase [font-stretch:108%]">
                  {sector.name}
                </h3>
                <p className="mt-2 max-w-[34ch] text-[0.78rem] leading-[1.55] text-foreground/65">
                  {sector.valueProp}
                </p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
