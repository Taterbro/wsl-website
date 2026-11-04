import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";
import { getSector } from "@/lib/businesses";

const RELATED = [
  getSector("water-smart-infrastructure"),
  getSector("industrial-development"),
  getSector("logistics-supply-chains"),
  getSector("climate-esg-solutions"),
];

export default function RelatedSectors() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="technology-related-title"
        className="bg-muted py-[clamp(72px,10vw,140px)]"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[56ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                05 — Related sectors
              </p>
              <h2
                id="technology-related-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                The layer beneath
                <br />
                every sector.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[54ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                Digital systems reinforce water, industry, logistics and climate
                work. The same data, platforms and operating discipline run
                across each.
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

          <div className="mt-[clamp(30px,4.4vw,52px)] grid gap-[clamp(12px,1.6vw,20px)] sm:grid-cols-2">
            {RELATED.map((sector) => (
              <article
                key={sector.slug}
                className="border border-[rgba(9,29,42,0.16)] bg-background"
              >
                <Link
                  href={`/businesses/${sector.slug}`}
                  className="group flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring sm:flex-row"
                >
                  <div className="relative aspect-[16/9] overflow-hidden sm:aspect-auto sm:w-[40%] sm:min-h-[180px]">
                    <Image
                      src={sector.image}
                      alt={sector.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 22vw"
                      className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-foreground/55 via-transparent to-transparent"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center gap-2 p-[clamp(16px,2.2vw,24px)]">
                    <p className="text-[0.58rem] font-semibold tracking-[0.18em] text-primary/60 uppercase">
                      Related sector
                    </p>
                    <h3 className="font-sans text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.14] font-extrabold uppercase [font-stretch:112%]">
                      {sector.name}
                    </h3>
                    <p className="max-w-[38ch] text-[0.86rem] leading-[1.55] text-muted-foreground">
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
      </section>
    </Reveal>
  );
}
