import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { getSector } from "@/lib/businesses";

const RELATED_SLUGS = [
  "technology-digital-infrastructure",
  "water-smart-infrastructure",
  "renewable-energy",
  "logistics-supply-chains",
] as const;

const RELATED = RELATED_SLUGS.map((slug) => getSector(slug));

export default function RelatedSectors() {
  return (
    <section
      aria-labelledby="industrial-related-title"
      className="bg-muted py-[clamp(72px,10vw,140px)]"
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
                id="industrial-related-title"
                className="mt-4 max-w-[18ch] font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                Industry touches
                <br />
                every chain.
              </h2>
            </div>
            <a
              href="/businesses"
              className="inline-flex items-center gap-2 self-start border-b border-accent pb-1 text-[0.72rem] font-semibold tracking-[0.1em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-accent lg:self-auto"
            >
              All business sectors
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ul className="mt-[clamp(28px,4vw,48px)] border-t border-foreground/15">
            {RELATED.map((sector, index) => (
              <li key={sector.slug} className="border-b border-foreground/15">
                <a
                  href={`/businesses/${sector.slug}`}
                  className="group grid grid-cols-[82px_1fr_auto] items-center gap-[clamp(14px,2.4vw,30px)] py-[clamp(14px,1.8vw,20px)] lg:grid-cols-[112px_1fr_auto]"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-foreground/10">
                    <Image
                      src={sector.image}
                      alt={sector.alt}
                      fill
                      sizes="(min-width: 1024px) 112px, 82px"
                      className="object-cover transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-[1.05] motion-reduce:transform-none"
                    />
                  </div>

                  <div>
                    <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase tabular-nums">
                      Sector {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 font-sans text-[clamp(1.05rem,2vw,1.5rem)] leading-[1.1] font-extrabold tracking-[-0.005em] uppercase [font-stretch:110%]">
                      {sector.name}
                    </h3>
                    <p className="mt-1.5 max-w-[62ch] text-[0.8rem] leading-[1.5] text-foreground/60">
                      {sector.valueProp}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="grid size-[clamp(38px,4vw,50px)] place-items-center border border-foreground/20 text-foreground/60 transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:border-accent group-hover:bg-accent group-hover:text-sidebar"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
