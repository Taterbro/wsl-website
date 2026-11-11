import Link from "next/link";
import type { StrategyStrategyCta } from "@/lib/cms/generated/pages/strategy";
import Reveal from "@/app/[locale]/(home)/_components/reveal";

const FALLBACK_HEADING = (
  <>
    Ready to structure
    <br />a bankable opportunity?
  </>
);

const FALLBACK_DESCRIPTION =
  "Share a summary of your opportunity and we will review with the relevant team. Approved summaries only — no confidential material required at first contact.";

export default function StrategyCta({ data }: { data: StrategyStrategyCta }) {
  return (
    <section
      aria-labelledby="strategy-cta-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="grid gap-[clamp(24px,6vw,48px)] lg:grid-cols-[1.2fr_auto] lg:items-center">
          <div className="max-w-[64ch]">
            <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-accent uppercase">
              Build with Waterlight
            </p>
            <h2
              id="strategy-cta-title"
              className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              {data.heading || FALLBACK_HEADING}
            </h2>
            <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted/80">
              {data.description || FALLBACK_DESCRIPTION}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/investments/opportunities"
              className="inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-sidebar uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(100,216,232,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Opportunities
            </Link>
            <Link
              href="/partner-with-us/investors"
              className="inline-flex items-center gap-2 rounded-[2px] border border-muted/40 px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-muted uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Partner With Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
