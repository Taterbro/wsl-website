import Link from "next/link";

export default function PipelineCta() {
  return (
    <section
      aria-labelledby="pipeline-cta-title"
      className="border-t border-primary/40 bg-primary text-primary-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(60px,9vw,112px)]">
        <div className="grid gap-[clamp(28px,6vw,64px)] lg:grid-cols-[1.25fr_auto] lg:items-end">
          <div className="max-w-[60ch]">
            <p className="font-sans text-[0.74rem] font-semibold tracking-[0.14em] text-accent uppercase">
              Pipeline enquiry
            </p>
            <h2
              id="pipeline-cta-title"
              className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              Bring a project
              <br />
              into the pipeline
            </h2>
            <p className="mt-5 max-w-[54ch] text-[clamp(1rem,1.4vw,1.18rem)] leading-[1.6] text-primary-foreground/75">
              Project owners can introduce an opportunity for development.
              Investors and partners can request the approved summary for any
              pipeline entry.
            </p>
            <p className="mt-5 text-[0.72rem] tracking-[0.04em] text-primary-foreground/50 uppercase">
              Public summaries only.{" "}
              <Link
                href="/legal/investment-disclaimer"
                className="underline decoration-primary-foreground/25 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Investment disclaimer
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/partner-with-us/project-owners?source=pipeline"
              className="inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-sidebar uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(100,216,232,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Project owners
            </Link>
            <Link
              href="/partner-with-us/investors?source=pipeline"
              className="inline-flex items-center gap-2 rounded-[2px] border border-primary-foreground/35 px-[clamp(18px,3vw,28px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-primary-foreground uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Investors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
