import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";
import { BUSINESS_SECTORS } from "@/lib/businesses";

const RELATED = BUSINESS_SECTORS.filter((sector) =>
  [
    "renewable-energy",
    "technology-digital-infrastructure",
    "climate-esg-solutions",
  ].includes(sector.slug)
);

export default function RelatedSectors() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section aria-labelledby="related-title" className="bg-muted py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[52ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span aria-hidden="true" className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45" />
                05 — Related sectors
              </p>
              <h2
                id="related-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Reinforces
                <br />
                the system.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[50ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                Water works with power, digital monitoring and climate resilience
                to keep service reliable over decades.
              </p>
            </div>
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Sector index
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] grid gap-[clamp(12px,1.4vw,18px)] md:grid-cols-3">
            {RELATED.map((sector) => (
              <article
                key={sector.slug}
                className="group relative overflow-hidden border border-[rgba(9,29,42,0.16)] bg-background"
              >
                <Link href={`/businesses/${sector.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={sector.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-[clamp(14px,1.8vw,22px)] text-background">
                    <p className="text-[0.64rem] font-semibold tracking-[0.16em] uppercase">
                      {sector.shortName}
                    </p>
                    <h3 className="font-sans text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.16] font-extrabold uppercase [font-stretch:112%]">
                      {sector.name}
                    </h3>
                    <p className="max-w-[36ch] text-[0.88rem] leading-[1.5] text-background/80">
                      {sector.valueProp}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
