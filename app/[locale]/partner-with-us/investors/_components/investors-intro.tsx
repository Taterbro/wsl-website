import Link from "next/link";

const STEPS: { title: string; copy: string }[] = [
  {
    title: "Review by people",
    copy: "We don't auto-approve. A named person reviews against mandate and fit.",
  },
  {
    title: "Only approved summaries",
    copy: "Public pages show gated summaries. Full materials are released through an authenticated process.",
  },
  {
    title: "Route to the right conversation",
    copy: "If there's a fit, we point you to the right opportunity or structure.",
  },
];

export default function InvestorsIntro() {
  return (
    <section
      aria-labelledby="investors-intro-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid gap-[clamp(30px,6vw,80px)] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-[clamp(24px,4vw,56px)] bg-primary" />
              For investors
            </p>
            <h2
              id="investors-intro-title"
              className="max-w-[14ch] font-sans text-[clamp(2.1rem,5.4vw,4.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Structured access,
              <br />
              not an open data room.
            </h2>
            <p className="mt-6 max-w-[44ch] text-[clamp(0.98rem,1.3vw,1.14rem)] leading-[1.7] text-muted-foreground">
              We work with investors who want exposure to essential needs across
              Africa and connected corridors. Tell us your mandate and we will
              route you to the right opportunities.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center rounded-[2px] border border-primary bg-primary px-[26px] py-[14px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-primary-foreground uppercase transition-colors transition-transform duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-px hover:bg-[#2b6a8d] motion-reduce:transform-none"
              >
                Start your enquiry
              </a>
              <Link
                href="/investments/opportunities"
                className="inline-flex items-center justify-center rounded-[2px] border border-border px-[26px] py-[14px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-primary hover:text-primary"
              >
                View opportunities
              </Link>
            </div>
          </div>

          <ol className="list-none p-0">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[auto_1fr] gap-[clamp(16px,2.4vw,28px)] border-t border-border py-[clamp(18px,2.6vw,30px)] last:border-b"
              >
                <span className="pt-1 font-sans text-[0.76rem] font-extrabold tracking-[0.16em] text-primary [font-stretch:112%]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-sans text-[clamp(1.12rem,1.8vw,1.42rem)] leading-[1.15] font-extrabold uppercase [font-stretch:112%]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-[0.92rem] leading-[1.6] text-muted-foreground">
                    {step.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
