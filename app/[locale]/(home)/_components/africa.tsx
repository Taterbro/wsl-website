import type { HomeAfrica } from "@/lib/cms/generated";

import Reveal from "./reveal";

const BTN_INK_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent bg-foreground px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-muted uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-primary";

export default function Africa({ data }: { data: HomeAfrica }) {
  return (
    <Reveal>
      <section
        id="africa"
        aria-labelledby="africa-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto grid max-w-[1440px] grid-cols-[0.95fr_1.05fr] items-start gap-[clamp(30px,5vw,80px)] px-[clamp(20px,5vw,72px)] max-[1080px]:grid-cols-1 max-[1080px]:gap-[34px]">
          <div>
            <h2
              id="africa-title"
              className="mb-6 font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Africa <em className="not-italic text-[#855c18]">is now.</em>
            </h2>
            <p className="max-w-[64ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal font-normal">
              {data.description}
            </p>
            <div className="mt-[30px] flex flex-wrap items-center gap-3">
              <a href="#projects" className={BTN_INK_CLASS}>
                Explore African Opportunities
              </a>
            </div>
          </div>
          <div>
            <dl className="mt-[30px] grid grid-cols-2 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)]">
              {data.indicators.map((indicator) => (
                <div
                  key={indicator.value}
                  className="bg-muted px-5 pt-[22px] pb-[22px]"
                >
                  <div className="font-sans text-[clamp(1.7rem,3vw,2.4rem)] leading-none font-extrabold text-primary [font-stretch:116%]">
                    {indicator.value}
                  </div>
                  <div className="mt-2.5 text-[0.82rem] font-medium">
                    {indicator.label}
                  </div>
                  <div className="mt-1.5 inline-flex items-center gap-[7px] text-[0.66rem] tracking-[0.03em] text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:border before:border-chart-4 before:content-['']">
                    {indicator.source}
                  </div>
                </div>
              ))}
            </dl>
            <p className="mt-3.5 max-w-[52ch] text-[0.72rem] leading-[1.5] text-muted-foreground">
              Every figure on this site carries an internal source owner,
              methodology and review date. Indicators shown here are
              placeholders pending verification, in line with our publishing
              governance.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
