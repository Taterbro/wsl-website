import Reveal from "../../../(home)/_components/reveal";

const BRIDGES: {
  no: string;
  title: string;
  copy: string;
  href: string;
  link: string;
}[] = [
  {
    no: "01",
    title: "Development partnerships",
    copy: "The partner categories the group works with — multilateral, development finance, NGO, public sector and research — without naming institutions or implying agreements.",
    href: "/impact/development-partnerships",
    link: "Partner categories",
  },
  {
    no: "02",
    title: "iHEAL framework",
    copy: "A development and impact framework that informs how Waterlight approaches opportunities. It is not a service line, and not every company undertakes every activity.",
    href: "/impact/iheal-framework",
    link: "Explore the framework",
  },
];

export default function ImpactBridge() {
  return (
    <section
      aria-labelledby="bridge-title"
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
                06 — Beyond the commercial group
              </p>
              <h2
                id="bridge-title"
                className="mt-4 font-sans text-[clamp(2rem,4.8vw,4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                One philosophy.
                <br />
                Separate organisations.
              </h2>
            </div>

            <p className="max-w-[44ch] text-[0.78rem] leading-[1.6] text-foreground/65 lg:text-right">
              Commercial performance and development impact are connected by a
              shared philosophy — not by shared ownership or financial flows.
            </p>
          </div>

          <div className="mt-[clamp(28px,4vw,46px)] grid gap-px border border-foreground/15 bg-foreground/15 md:grid-cols-2">
            {BRIDGES.map((bridge) => (
              <a
                key={bridge.no}
                href={bridge.href}
                className="group flex flex-col bg-background p-[clamp(20px,3vw,36px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-sans text-[0.68rem] font-extrabold tracking-[0.16em] text-chart-4 [font-stretch:112%]">
                    {bridge.no}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[0.95rem] text-primary transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
                <h3 className="mt-[clamp(20px,3vw,34px)] max-w-[16ch] font-sans text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.05] font-extrabold uppercase [font-stretch:112%]">
                  {bridge.title}
                </h3>
                <p className="mt-3 max-w-[42ch] text-[0.84rem] leading-[1.55] text-foreground/65">
                  {bridge.copy}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 self-start border-b border-primary/45 pb-0.5 text-[0.62rem] font-semibold tracking-[0.08em] uppercase">
                  {bridge.link}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-[clamp(16px,2.4vw,26px)] border border-chart-4/35 bg-[#f2ede2] p-[clamp(20px,3vw,36px)] text-foreground">
            <div className="grid gap-[clamp(18px,3vw,40px)] lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-[2px] border border-chart-4/35 bg-background/60 px-3 py-[7px] text-[0.58rem] font-semibold tracking-[0.1em] text-[#7a5414] uppercase">
                  Independent nonprofit organisation
                </span>
                <h3 className="mt-4 font-sans text-[clamp(1.5rem,2.8vw,2.3rem)] leading-[1.02] font-extrabold uppercase [font-stretch:112%]">
                  Waterlight Save Initiative
                </h3>
              </div>

              <div>
                <p className="max-w-[58ch] text-[0.86rem] leading-[1.6] text-foreground/70">
                  Waterlight Save Initiative is an independent
                  nonprofit/development organisation. It shares a philosophy of
                  sustainable development with the group, but it is a separate
                  organisation — not a commercial subsidiary, not part of the
                  group structure and not a channel for fundraising on this
                  site.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <a
                    href="/impact/waterlight-save-initiative"
                    className="inline-flex items-center gap-1.5 border-b border-[#7a5414]/50 pb-0.5 text-[0.66rem] font-semibold tracking-[0.08em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-[#7a5414]"
                  >
                    About the initiative
                    <span aria-hidden="true">↗</span>
                  </a>
                  <p className="text-[0.58rem] leading-[1.5] text-foreground/45">
                    External site link to be confirmed with the owner.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-[78ch] text-[0.6rem] leading-[1.55] text-foreground/55">
            PLACEHOLDER — partner categories, framework wording and nonprofit
            status language require owner and compliance review before launch.
            No partner names, logos or agreements are shown.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
