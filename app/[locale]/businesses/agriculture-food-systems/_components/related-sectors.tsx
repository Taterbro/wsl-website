import Link from "next/link";
import { getSector } from "@/lib/businesses";
import type {
  AgricultureFoodSystemsRelatedSectors,
  Business,
} from "@/lib/cms/generated";
import Reveal from "../../../(home)/_components/reveal";

type Sector = {
  slug: string;
  name: string;
  valueProp: string;
  image: string | null;
  alt: string;
};

const FALLBACK_HEADING = "One chain,\nmany sectors.";

const FALLBACK_DESCRIPTION =
  "Food systems depend on water, movement, climate resilience and digital visibility. These sectors share the same fields, assets and operators.";

const FALLBACK_IMAGE_ALT = "Related business sector infrastructure";

const FALLBACK_SECTORS: Sector[] = [
  "water-smart-infrastructure",
  "logistics-supply-chains",
  "climate-esg-solutions",
  "technology-digital-infrastructure",
].map((slug) => {
  const sector = getSector(slug);
  return {
    slug: sector.slug,
    name: sector.name,
    valueProp: sector.valueProp,
    image: null,
    alt: sector.alt,
  };
});

function toSector(business: Business): Sector {
  return {
    slug: business.slug,
    name: business.title || business.postTitle || business.slug,
    valueProp: business.description,
    image: business.image?.url ?? null,
    alt: business.image?.alt || business.image_alt,
  };
}

export default function RelatedSectors({
  data,
}: {
  data: AgricultureFoodSystemsRelatedSectors;
}) {
  const sectors = data.businesses.length
    ? data.businesses.map(toSector)
    : FALLBACK_SECTORS;
  const heading = data.label || FALLBACK_HEADING;
  const headingLines = heading.split("\n");

  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="agriculture-related-title"
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
                id="agriculture-related-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                {headingLines.length === 2 ? (
                  <>
                    {headingLines[0]}
                    <br />
                    {headingLines[1]}
                  </>
                ) : (
                  heading
                )}
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                {data.description || FALLBACK_DESCRIPTION}
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

          <div className="mt-[clamp(30px,4.4vw,52px)] grid gap-[clamp(12px,1.6vw,20px)] sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => {
              const alt = sector.image
                ? sector.alt || FALLBACK_IMAGE_ALT
                : "";

              return (
                <article
                  key={sector.slug}
                  className="group flex flex-col border border-[rgba(9,29,42,0.16)] bg-background"
                >
                  <Link
                    href={`/businesses/${sector.slug}`}
                    className="flex flex-1 flex-col focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-sidebar">
                      {sector.image ? (
                        <div
                          role={alt ? "img" : undefined}
                          aria-label={alt || undefined}
                          aria-hidden={alt ? undefined : true}
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.04]"
                          style={{ backgroundImage: `url(${sector.image})` }}
                        />
                      ) : null}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-t from-foreground/85 via-foreground/15 to-transparent"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-[clamp(14px,1.8vw,20px)] text-background">
                        <p className="text-[0.58rem] font-semibold tracking-[0.18em] uppercase">
                          Related sector
                        </p>
                        <h3 className="mt-2 font-sans text-[clamp(1rem,1.35vw,1.2rem)] leading-[1.14] font-extrabold uppercase [font-stretch:112%]">
                          {sector.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-[clamp(14px,1.8vw,20px)]">
                      <p className="flex-1 text-[0.86rem] leading-[1.55] text-muted-foreground">
                        {sector.valueProp}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.06em] text-primary uppercase">
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
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
