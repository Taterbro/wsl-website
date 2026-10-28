import Reveal from "../../../(home)/_components/reveal";

// PLACEHOLDER — programme themes are illustrative. Programme descriptions,
// coverage, partners and results are the organisation's own to publish.
const THEMES: {
  no: string;
  title: string;
  copy: string;
}[] = [
  {
    no: "01",
    title: "Community water & health",
    copy: "Water, sanitation and hygiene-related programme work, described and reported by the organisation.",
  },
  {
    no: "02",
    title: "Local capability",
    copy: "Skills, training and local delivery capacity, where documented by the organisation.",
  },
  {
    no: "03",
    title: "Independent partnerships",
    copy: "Partnerships entered into by the organisation under its own governance and due diligence.",
  },
];

export default function ProgrammeFocus() {
  return (
    <section
      aria-labelledby="programme-title"
      className="border-y border-[#7a5414]/15 bg-[color-mix(in_srgb,var(--chart-4)_7%,var(--background))] py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-col gap-[clamp(18px,2.6vw,34px)] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[52ch]">
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-[#7a5414] uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-chart-4"
                />
                03 — Programme focus
              </p>
              <h2
                id="programme-title"
                className="mt-4 font-sans text-[clamp(2rem,4.6vw,3.8rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Its work.
                <br />
                Its own account.
              </h2>
            </div>

            <p className="max-w-[44ch] text-[0.78rem] leading-[1.6] text-foreground/60 lg:text-right">
              This page does not publish the organisation&apos;s programme
              results. Those belong on its own site, under its own reporting.
            </p>
          </div>

          <ol className="mt-[clamp(28px,4vw,46px)] list-none border-t border-[#7a5414]/20 p-0">
            {THEMES.map((theme) => (
              <li
                key={theme.no}
                className="grid grid-cols-[auto_1fr] items-start gap-x-[clamp(14px,2.4vw,34px)] gap-y-2 border-b border-[#7a5414]/20 py-[clamp(18px,2.6vw,30px)] md:grid-cols-[auto_1fr_auto]"
              >
                <span className="pt-1 font-sans text-[0.66rem] font-extrabold tracking-[0.16em] text-[#7a5414] tabular-nums [font-stretch:112%]">
                  {theme.no}
                </span>
                <div>
                  <h3 className="font-sans text-[clamp(1.1rem,1.9vw,1.55rem)] leading-[1.12] font-extrabold uppercase [font-stretch:112%]">
                    {theme.title}
                  </h3>
                  <p className="mt-2 max-w-[56ch] text-[0.86rem] leading-[1.55] text-foreground/65">
                    {theme.copy}
                  </p>
                </div>
                <p className="col-start-2 text-[0.54rem] font-semibold tracking-[0.1em] text-foreground/40 uppercase md:col-start-3 md:pt-1 md:text-right">
                  Awaiting organisation copy
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-5 max-w-[78ch] text-[0.6rem] leading-[1.55] text-foreground/50">
            PLACEHOLDER — programme themes are illustrative. No coverage,
            partner, beneficiary count or outcome is stated as fact. Programme
            detail is to be supplied and approved by the organisation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
