import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";
import { SAVE_INITIATIVE } from "@/lib/impact";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border px-[clamp(18px,2.6vw,26px)] py-[clamp(11px,1.2vw,14px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const RELATED: { code: string; title: string; href: string }[] = [
  {
    code: "I-01",
    title: "Impact overview",
    href: "/impact",
  },
  {
    code: "I-02",
    title: "Development Partnerships",
    href: "/impact/development-partnerships",
  },
  {
    code: "I-03",
    title: "Sustainability",
    href: "/impact/sustainability",
  },
];

export default function InitiativeOutbound() {
  return (
    <section
      aria-labelledby="initiative-outbound-title"
      className="border-t border-[#7a5414]/20 bg-[color-mix(in_srgb,var(--chart-4)_10%,var(--background))] py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="mx-auto max-w-[68ch] text-center">
            <span className="inline-flex items-center gap-2 rounded-[2px] border border-chart-4/45 bg-background/60 px-3 py-[7px] text-[0.6rem] font-semibold tracking-[0.1em] text-[#7a5414] uppercase">
              {SAVE_INITIATIVE.label}
            </span>
            <h2
              id="initiative-outbound-title"
              className="mt-[clamp(18px,2.6vw,28px)] font-sans text-[clamp(2rem,4.8vw,4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Waterlight Save
              <br />
              Initiative continues
              <br />
              on its own site.
            </h2>
            <p className="mx-auto mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(0.98rem,1.3vw,1.14rem)] leading-[1.65] text-foreground/65">
              Its programmes, governance, reporting and external
              communications belong to the organisation. This site does not
              process donations or speak on its behalf.
            </p>
            <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap items-center justify-center gap-3">
              <a
                href={SAVE_INITIATIVE.externalSite}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_BASE_CLASS} border-chart-4 bg-chart-4 text-[#241c12] hover:-translate-y-px hover:bg-[#e0b566] motion-reduce:transform-none`}
              >
                Visit the organisation
                <span aria-hidden="true">↗</span>
              </a>
              <Link
                href="/impact"
                className={`${BTN_BASE_CLASS} border-foreground/25 bg-transparent text-foreground hover:bg-foreground hover:text-background`}
              >
                Back to Impact
              </Link>
            </div>
            <p className="mt-3 text-[0.58rem] leading-[1.5] text-foreground/45">
              PLACEHOLDER external URL — confirm with the owner. No donation
              form, payment flow or fundraising is hosted on this site.
            </p>
          </div>

          <nav
            aria-label="Related impact pages"
            className="mt-[clamp(34px,5vw,58px)] border-t border-[#7a5414]/20"
          >
            <ul className="grid list-none grid-cols-1 gap-px bg-[#7a5414]/20 p-0 sm:grid-cols-3">
              {RELATED.map((item) => (
                <li key={item.href} className="bg-[color-mix(in_srgb,var(--chart-4)_10%,var(--background))]">
                  <Link
                    href={item.href}
                    className="group flex h-full items-center justify-between gap-4 px-[clamp(14px,2vw,22px)] py-[clamp(16px,2.2vw,24px)] transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:bg-background focus-visible:bg-background focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#7a5414]"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-sans text-[0.56rem] font-extrabold tracking-[0.14em] text-[#7a5414] tabular-nums [font-stretch:112%]">
                        {item.code}
                      </span>
                      <span className="font-sans text-[clamp(0.78rem,1.1vw,0.92rem)] leading-[1.2] font-bold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-[#7a5414] [font-stretch:108%]">
                        {item.title}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[#7a5414] transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
