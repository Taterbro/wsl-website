import Link from "next/link";
import type { InvestorRelationsInvestorRelationsHero } from "@/lib/cms/generated/pages/investor-relations";

const FALLBACK_HEADING = "Investor Relations";
const FALLBACK_DESCRIPTION =
  "A disciplined, Africa-rooted platform with a focus on bankable infrastructure and industrial opportunities across priority sectors.";
const FALLBACK_IMAGE_ALT =
  "Institutional investment and governance (placeholder image)";

interface InvestorRelationsHeroProps {
  data?: InvestorRelationsInvestorRelationsHero;
}

export default function InvestorRelationsHero({
  data,
}: InvestorRelationsHeroProps) {
  const heading = data?.heading || FALLBACK_HEADING;
  const description = data?.description || FALLBACK_DESCRIPTION;
  const imageUrl = data?.image?.url ?? "";
  const imageAlt = data?.image?.alt || data?.image_alt || FALLBACK_IMAGE_ALT;

  return (
    <section
      aria-labelledby="ir-hero-title"
      className="relative overflow-hidden bg-sidebar text-muted"
    >
      <div className="absolute inset-0">
        {imageUrl ? (
          <div
            role="img"
            aria-label={imageAlt}
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-sidebar via-sidebar/90 to-sidebar/70" />
      </div>
      <div className="relative mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(80px,12vw,150px)]">
        <div className="max-w-[72ch]">
          <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-accent uppercase">
            Investments
          </p>
          <h1
            id="ir-hero-title"
            className="mt-4 font-sans text-[clamp(2.6rem,7vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
          >
            {heading}
          </h1>
          <p className="mt-6 max-w-[58ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.6] text-muted/80">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/partner-with-us/investors"
              className="inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-sidebar uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(100,216,232,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Contact IR
            </Link>
            <Link
              href="/investments/opportunities"
              className="inline-flex items-center gap-2 rounded-[2px] border border-muted/40 px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-muted uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
