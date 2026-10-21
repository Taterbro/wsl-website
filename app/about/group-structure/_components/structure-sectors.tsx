import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { SECTOR_ROUTES, entityByKey } from "../_data/structure";

export default function StructureSectors() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="group-sectors-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[56ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                04 — Sector routes
              </p>
              <h2
                id="group-sectors-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Which entity
                <br />
                does what.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                Eight sectors, three routes through the group: capital and
                development, industrial delivery, and the people and
                innovation that keep both running.
              </p>
            </div>
            <a
              href="/businesses"
              className="inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              All businesses
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] grid grid-cols-4 gap-[clamp(12px,1.4vw,20px)] max-[1180px]:grid-cols-2 max-[680px]:grid-cols-1">
            {SECTOR_ROUTES.map((route) => (
              <article
                key={route.href}
                className="group flex flex-col border border-[rgba(9,29,42,0.16)] bg-background transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-primary/45"
              >
                <a
                  href={route.href}
                  className="relative block aspect-[16/10] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
                >
                  <Image
                    src={route.image}
                    alt={route.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1180px) 50vw, 25vw"
                    className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.04]"
                  />
                </a>
                <div className="flex flex-1 flex-col gap-3 p-[clamp(14px,1.8vw,22px)]">
                  <h3 className="font-sans text-[clamp(0.98rem,1.2vw,1.1rem)] leading-[1.14] font-extrabold uppercase [font-stretch:114%]">
                    <a
                      href={route.href}
                      className="transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      {route.sector}
                    </a>
                  </h3>
                  <p className="flex-1 text-[0.86rem] leading-[1.55] text-muted-foreground">
                    {route.line}
                  </p>
                  <ul className="flex list-none flex-wrap gap-[6px] border-t border-[rgba(9,29,42,0.16)] p-0 pt-3">
                    {route.entities.map((key) => {
                      const entity = entityByKey(key);
                      return (
                        <li key={key}>
                          <a
                            href={entity.href}
                            className="inline-flex items-center rounded-[2px] border border-[rgba(9,29,42,0.16)] px-[10px] py-[6px] text-[0.68rem] font-semibold tracking-[0.06em] text-primary uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                          >
                            {entity.shortName}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-[clamp(22px,3vw,34px)] max-w-[78ch] text-[0.76rem] leading-[1.6] text-muted-foreground/80">
            PLACEHOLDER — sector routes show the indicative group path for each
            sector. They are not an ownership map and must be confirmed against
            the approved group chart before publication.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
