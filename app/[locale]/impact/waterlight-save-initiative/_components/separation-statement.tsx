import Reveal from "../../../(home)/_components/reveal";
import { SAVE_INITIATIVE } from "@/lib/impact";

const IS: string[] = [
  "An independent nonprofit/development organisation",
  "A separate mandate, governance and programme agenda",
  "Responsible for its own reporting and external communications",
  "Presented separately from the commercial group",
];

const IS_NOT: string[] = [
  "A commercial subsidiary or group company",
  "Part of the group structure or an ownership diagram",
  "A channel for group financial flows or shared control",
  "A donation form, payment flow or fundraising page on this site",
];

export default function SeparationStatement() {
  return (
    <section
      aria-labelledby="separation-title"
      className="border-y border-foreground/10 bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="max-w-[58ch]">
            <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-[#7a5414] uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-chart-4"
              />
              02 — The separation
            </p>
            <h2
              id="separation-title"
              className="mt-4 font-sans text-[clamp(2rem,4.8vw,4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Separate
              <br />
              by design.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.6] text-foreground/70">
              The distinction is structural, not a footnote. The commercial
              group and Waterlight Save Initiative share a philosophy of
              sustainable development — not ownership, governance or financial
              flows.
            </p>
          </div>

          <div className="mt-[clamp(30px,4.5vw,54px)] grid gap-[clamp(22px,3.4vw,44px)] lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            <div className="border-t-2 border-foreground/20 pt-[clamp(16px,2.2vw,24px)]">
              <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/45 uppercase">
                Commercial group
              </p>
              <h3 className="mt-2 font-sans text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.05] font-extrabold uppercase [font-stretch:112%]">
                Waterlight Group
              </h3>
              <p className="mt-3 max-w-[40ch] text-[0.84rem] leading-[1.6] text-foreground/60">
                Investment, industry, infrastructure and technology platforms
                presented through the commercial group.
              </p>
            </div>

            <div className="flex items-center gap-4 lg:flex-col lg:justify-center">
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-[repeating-linear-gradient(90deg,rgba(214,162,74,0.55)_0_4px,transparent_4px_9px)] lg:h-full lg:w-px lg:bg-[repeating-linear-gradient(180deg,rgba(214,162,74,0.55)_0_4px,transparent_4px_9px)]"
              />
              <p className="shrink-0 text-center text-[0.54rem] leading-[1.5] font-semibold tracking-[0.12em] text-[#7a5414] uppercase">
                No ownership
                <br className="hidden lg:block" /> No shared control
              </p>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-[repeating-linear-gradient(90deg,rgba(214,162,74,0.55)_0_4px,transparent_4px_9px)] lg:h-full lg:w-px lg:bg-[repeating-linear-gradient(180deg,rgba(214,162,74,0.55)_0_4px,transparent_4px_9px)]"
              />
            </div>

            <div className="border-t-2 border-chart-4 pt-[clamp(16px,2.2vw,24px)]">
              <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-[#7a5414] uppercase">
                {SAVE_INITIATIVE.label}
              </p>
              <h3 className="mt-2 font-sans text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.05] font-extrabold uppercase [font-stretch:112%]">
                {SAVE_INITIATIVE.name}
              </h3>
              <p className="mt-3 max-w-[40ch] text-[0.84rem] leading-[1.6] text-foreground/60">
                A separate development organisation with its own mandate,
                programmes and reporting.
              </p>
            </div>
          </div>

          <div className="mt-[clamp(30px,4.5vw,54px)] grid gap-px border border-foreground/15 bg-foreground/15 md:grid-cols-2">
            <div className="bg-background p-[clamp(18px,2.6vw,30px)]">
              <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-[#7a5414] uppercase">
                It is
              </p>
              <ul className="mt-4 list-none p-0">
                {IS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-t border-foreground/10 py-3 text-[0.82rem] leading-[1.5] text-foreground/70 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1.5 w-1.5 flex-none rotate-45 bg-chart-4"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[color-mix(in_srgb,var(--chart-4)_7%,var(--background))] p-[clamp(18px,2.6vw,30px)]">
              <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-foreground/45 uppercase">
                It is not
              </p>
              <ul className="mt-4 list-none p-0">
                {IS_NOT.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-t border-foreground/10 py-3 text-[0.82rem] leading-[1.5] text-foreground/60 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-px w-3 flex-none bg-foreground/35"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-5 max-w-[78ch] text-[0.6rem] leading-[1.55] text-foreground/50">
            PLACEHOLDER — separation language requires owner and compliance
            review. No financial flow, shared governance or control is implied
            between the group and Waterlight Save Initiative.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
