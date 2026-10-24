import Link from "next/link";
import Reveal from "@/app/(home)/_components/reveal";

export default function OpportunitiesCta() {
  return (
    <section
      aria-labelledby="opportunities-cta-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="grid gap-[clamp(24px,6vw,48px)] lg:grid-cols-[1.2fr_auto] lg:items-center">
          <div className="max-w-[64ch]">
            <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-accent uppercase">
              Role-based
            </p>
            <h2
              id="opportunities-cta-title"
              className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Investors, institutions
              <br />
              and project owners
            </h2>
            <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted/80">
              Tell us your focus and we will route your enquiry to the right team.
              Access is reviewed by people, not an automated login.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/partner-with-us/investors"
              className="inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-sidebar uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(100,216,232,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Investors
            </Link>
            <Link
              href="/partner-with-us/financial-institutions"
              className="inline-flex items-center gap-2 rounded-[2px] border border-muted/40 px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-muted uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Financial Institutions
            </Link>
            <Link
              href="/partner-with-us/project-owners"
              className="inline-flex items-center gap-2 rounded-[2px] border border-muted/40 px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-muted uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Project Owners
            </Link>
          </div>
        </Reveal>
        <p className="mt-10 text-[0.88rem] text-muted/60">
          {/* PLACEHOLDER: legal sign-off required. */}
          <Link href="/legal/investment-disclaimer" className="underline transition-colors hover:text-accent">
            Investment disclaimer
          </Link>
        </p>
      </div>
    </section>
  );
}
