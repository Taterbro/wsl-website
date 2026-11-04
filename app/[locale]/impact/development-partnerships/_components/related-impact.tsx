import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";

// PLACEHOLDER — related-page summaries are illustrative. Waterlight Save
// Initiative is a separate independent nonprofit organisation, not a partner
// category or a commercial subsidiary.
const RELATED: {
  code: string;
  title: string;
  copy: string;
  href: string;
  label?: string;
}[] = [
  {
    code: "I-01",
    title: "Sustainability",
    copy: "How environmental, social and governance decisions are embedded in the commercial group.",
    href: "/impact/sustainability",
  },
  {
    code: "I-02",
    title: "iHEAL framework",
    copy: "A development and impact framework, not a service line or a description of any company's offering.",
    href: "/impact/iheal-framework",
  },
  {
    code: "I-03",
    title: "Waterlight Save Initiative",
    copy: "A separate organisation with a development mandate of its own. Not part of the commercial group.",
    href: "/impact/waterlight-save-initiative",
    label: "Independent nonprofit organisation",
  },
];

export default function RelatedImpact() {
  return (
    <section
      aria-labelledby="related-impact-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-col gap-[clamp(18px,2.6vw,34px)] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[52ch]">
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                04 — Related pages
              </p>
              <h2
                id="related-impact-title"
                className="mt-4 font-sans text-[clamp(2rem,4.6vw,3.8rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Continue
                <br />
                through Impact.
              </h2>
            </div>

            <p className="max-w-[42ch] text-[0.78rem] leading-[1.6] text-foreground/60 lg:text-right">
              Related pages, not partner categories. Each one sets out a
              different part of the group&apos;s approach to development.
            </p>
          </div>

          <ul className="mt-[clamp(28px,4vw,46px)] list-none border-t border-foreground/15 p-0">
            {RELATED.map((item) => (
              <li key={item.href} className="border-b border-foreground/15">
                <Link
                  href={item.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-[clamp(14px,2.4vw,34px)] gap-y-2 py-[clamp(18px,2.6vw,30px)] transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:bg-muted focus-visible:bg-muted focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
                >
                  <span className="pt-1 font-sans text-[0.6rem] font-extrabold tracking-[0.16em] text-chart-4 tabular-nums [font-stretch:112%]">
                    {item.code}
                  </span>
                  <span>
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="font-sans text-[clamp(1.1rem,1.9vw,1.55rem)] leading-[1.12] font-extrabold uppercase [font-stretch:112%]">
                        {item.title}
                      </span>
                      {item.label ? (
                        <span className="border border-chart-4/45 bg-chart-4/[0.08] px-2 py-1 text-[0.5rem] font-semibold tracking-[0.1em] text-[#7a5414] uppercase">
                          {item.label}
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-2 block max-w-[58ch] text-[0.86rem] leading-[1.55] text-foreground/60">
                      {item.copy}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="pt-1 text-[1rem] text-primary transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-[78ch] text-[0.6rem] leading-[1.55] text-foreground/50">
            PLACEHOLDER — related-page summaries and the nonprofit label require
            owner and compliance review. No partner names, logos or third-party
            marks are used.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
