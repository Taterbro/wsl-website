import Link from "next/link";
import Reveal from "@/app/(home)/_components/reveal";

export default function JointVenturesCta() {
  return (
    <section
      aria-labelledby="jv-cta-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="grid gap-[clamp(24px,6vw,48px)] lg:grid-cols-[1.2fr_auto] lg:items-center">
          <div className="max-w-[64ch]">
            <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-primary/70 uppercase">
              Build with Waterlight
            </p>
            <h2
              id="jv-cta-title"
              className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Have a project
              <br />
              worth structuring?
            </h2>
            <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted-foreground">
              Share an approved summary — location, sector, need, status and any
              existing partners. We'll review and discuss fit.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/partner-with-us/project-owners"
              className="inline-flex items-center gap-2 rounded-[2px] border border-primary/40 px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-primary uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Propose a JV
            </Link>
            <Link
              href="/partner-with-us/technology-partners"
              className="inline-flex items-center gap-2 rounded-[2px] border border-border px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-foreground uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-primary/40 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Technology Partners
            </Link>
          </div>
        </Reveal>
        <p className="mt-10 text-[0.88rem] text-muted-foreground">
          {/* PLACEHOLDER: legal sign-off required. */}
          <Link href="/legal/investment-disclaimer" className="underline transition-colors hover:text-primary">
            Investment disclaimer
          </Link>
        </p>
      </div>
    </section>
  );
}
