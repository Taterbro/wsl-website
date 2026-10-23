import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";
import { getSector } from "@/lib/businesses";

const FEATURED = getSector("water-smart-infrastructure");
const SUPPORTING = [
  getSector("industrial-development"),
  getSector("climate-esg-solutions"),
];

export default function RelatedSectors() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="energy-related-title"
        className="bg-muted py-[clamp(72px,10vw,140px)]"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[54ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                05 — Related sectors
              </p>
              <h2
                id="energy-related-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Power is the
                <br />
                enabler.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                Energy unlocks water, industry and climate resilience. These
                sectors share the same sites, partners and operating discipline.
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

          <div className="mt-[clamp(30px,4.4vw,52px)] grid gap-[clamp(12px,1.6vw,20px)] lg:grid-cols-[1.15fr_0.85fr]">
            <article className="group relative overflow-hidden border border-[rgba(9,29,42,0.16)] bg-background">
              <Link
                href={`/businesses/${FEATURED.slug}`}
                className="relative block min-h-[clamp(320px,42vw,520px)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
              >
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/25 to-foreground/10"
                />
                <div className="absolute inset-x-0 bottom-0 p-[clamp(20px,3vw,38px)] text-background">
                  <p className="text-[0.64rem] font-semibold tracking-[0.18em] uppercase">
                    Related sector · {FEATURED.shortName}
                  </p>
                  <h3 className="mt-3 max-w-[16ch] font-sans text-[clamp(1.6rem,3.4vw,2.7rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]">
                    {FEATURED.name}
                  </h3>
                  <p className="mt-4 max-w-[42ch] text-[0.92rem] leading-[1.55] text-background/80">
                    {FEATURED.valueProp}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.76rem] font-semibold tracking-[0.06em] uppercase">
                    Explore sector
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </article>

            <div className="flex flex-col gap-[clamp(12px,1.6vw,20px)]">
              {SUPPORTING.map((sector) => (
                <article
                  key={sector.slug}
                  className="flex-1 border border-[rgba(9,29,42,0.16)] bg-background"
                >
                  <Link
                    href={`/businesses/${sector.slug}`}
                    className="group flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring sm:flex-row"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden sm:aspect-auto sm:w-[42%] sm:min-h-[170px]">
                      <Image
                        src={sector.image}
                        alt={sector.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 24vw"
                        className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-t from-foreground/55 via-transparent to-transparent"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center gap-2 p-[clamp(16px,2.2vw,24px)]">
                      <p className="text-[0.6rem] font-semibold tracking-[0.18em] text-primary/65 uppercase">
                        Related sector
                      </p>
                      <h3 className="font-sans text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.12] font-extrabold uppercase [font-stretch:112%]">
                        {sector.name}
                      </h3>
                      <p className="max-w-[36ch] text-[0.86rem] leading-[1.55] text-muted-foreground">
                        {sector.valueProp}
                      </p>
                      <span className="mt-1 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.06em] text-primary uppercase">
                        Explore
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
