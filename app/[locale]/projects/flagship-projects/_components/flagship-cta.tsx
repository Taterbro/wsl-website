import Link from "next/link";
import type { Project } from "@/lib/projects";

interface FlagshipCtaProps {
  project?: Project;
}

export default function FlagshipCta({ project }: FlagshipCtaProps) {
  const href = project
    ? `/partner-with-us/investors?source=flagship&project=${project.slug}`
    : "/partner-with-us/investors?source=flagship";

  return (
    <section
      aria-labelledby="flagship-cta-title"
      className="relative overflow-hidden bg-sidebar py-[clamp(64px,9vw,120px)] text-muted"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[6%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid gap-[clamp(28px,6vw,64px)] lg:grid-cols-[1.2fr_auto] lg:items-end">
          <div className="max-w-[60ch]">
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Flagship enquiry
            </p>
            <h2
              id="flagship-cta-title"
              className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              Build with
              <br />
              Waterlight
            </h2>
            <p className="mt-5 text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.65] text-muted/75">
              Request the approved project summary or introduce a capability,
              market or capital partnership.
            </p>
            <p className="mt-5 text-[0.72rem] tracking-[0.04em] text-muted/50 uppercase">
              Access is reviewed by the project team.{" "}
              <Link
                href="/legal/investment-disclaimer"
                className="underline decoration-muted/25 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Investment disclaimer
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-sidebar uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(100,216,232,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Request project information
            </Link>
            <Link
              href="/partner-with-us/investors"
              className="inline-flex items-center gap-2 rounded-[2px] border border-muted/40 px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-muted uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Investors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
