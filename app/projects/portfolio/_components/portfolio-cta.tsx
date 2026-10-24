import Link from "next/link";
import Reveal from "@/app/(home)/_components/reveal";

export default function PortfolioCta() {
  return (
    <section
      aria-labelledby="portfolio-cta-title"
      className="relative overflow-hidden bg-sidebar py-[clamp(64px,9vw,120px)] text-muted"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-40 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="grid gap-[clamp(28px,6vw,64px)] lg:grid-cols-[1.25fr_auto] lg:items-end">
          <div className="max-w-[62ch]">
            <p className="font-sans text-[0.78rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Project information
            </p>
            <h2
              id="portfolio-cta-title"
              className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              Request the
              <br />
              full brief
            </h2>
            <p className="mt-5 text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.65] text-muted/75">
              Public summaries are deliberately brief. Tell us what you are
              evaluating and we will route the request to the project team.
            </p>
            <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.74rem] tracking-[0.04em] uppercase">
              <Link
                href="/investments/opportunities"
                className="text-muted/70 underline decoration-muted/25 underline-offset-4 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent hover:decoration-accent"
              >
                Investment opportunities
              </Link>
              <Link
                href="/legal/investment-disclaimer"
                className="text-muted/70 underline decoration-muted/25 underline-offset-4 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent hover:decoration-accent"
              >
                Investment disclaimer
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/partner-with-us/investors?source=portfolio"
              className="inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-sidebar uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(100,216,232,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Request access
            </Link>
            <Link
              href="/partner-with-us/project-owners"
              className="inline-flex items-center gap-2 rounded-[2px] border border-muted/40 px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-muted uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Project owners
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
