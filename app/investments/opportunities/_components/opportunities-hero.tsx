import Link from "next/link";
import Image from "next/image";

export default function OpportunitiesHero() {
  return (
    <section
      aria-labelledby="opportunities-hero-title"
      className="bg-sidebar text-muted"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(64px,9vw,120px)]">
        <div className="max-w-[72ch]">
          <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-accent uppercase">
            Investments
          </p>
          <h1
            id="opportunities-hero-title"
            className="mt-4 font-sans text-[clamp(2.4rem,6.6vw,5.6rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
          >
            Opportunities
          </h1>
          <p className="mt-6 max-w-[58ch] text-[clamp(1.05rem,1.6vw,1.32rem)] leading-[1.6] text-muted/80">
            Approved summaries of selected opportunities. Full details are gated
            and made available on request following review.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/partner-with-us/investors"
              className="inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-sidebar uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(100,216,232,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Request Access
            </Link>
            <Link
              href="/investments/strategy"
              className="inline-flex items-center gap-2 rounded-[2px] border border-muted/40 px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-muted uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Investment Strategy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
