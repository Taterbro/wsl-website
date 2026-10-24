import Reveal from "@/app/(home)/_components/reveal";

const STEPS = [
  {
    no: "01",
    title: "Screen & Originate",
    body: "Assess need, demand, site, sponsors and fit with priority sectors.",
  },
  {
    no: "02",
    title: "Pre-Feasibility",
    body: "Technical concept, utility/logistics, environmental and social considerations, early commercial logic.",
  },
  {
    no: "03",
    title: "Structure & Bankability",
    body: "Ownership, governance, technology, offtake, risk allocation, financing model.",
  },
  {
    no: "04",
    title: "Mobilize Partners",
    body: "Align investors, DFIs, technology partners, EPCs/operators and relevant stakeholders.",
  },
  {
    no: "05",
    title: "Execution Readiness",
    body: "Permits path, contracts, procurement strategy, delivery plan and safeguards.",
  },
  {
    no: "06",
    title: "Build & Transition",
    body: "Execute through JV/operating company with clear handover to operations and scale plan.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section
      aria-labelledby="pd-process-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="max-w-[64ch]">
          <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-primary/70 uppercase">
            Development process
          </p>
          <h2
            id="pd-process-title"
            className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Disciplined from idea
            <br />
            to build readiness
          </h2>
          <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted-foreground">
            We don't just finance — we develop. Each step reduces uncertainty and
            increases bankability.
          </p>
        </Reveal>
        <div className="mt-[clamp(34px,6vw,72px)] grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {STEPS.map((step) => (
            <Reveal
              key={step.no}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2px] border border-border bg-card/40 transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_40px_80px_-60px_rgba(18,63,90,0.9)]"
            >
              <div className="flex items-start justify-between gap-4 px-[clamp(22px,4vw,36px)] pt-[clamp(24px,4vw,36px)]">
                <div>
                  <p className="font-sans text-[2.4rem] font-extrabold text-secondary [font-stretch:114%]">
                    {step.no}
                  </p>
                  <h3 className="mt-2 font-sans text-[1.26rem] font-bold tracking-[0.03em] uppercase [font-stretch:112%]">
                    {step.title}
                  </h3>
                </div>
                <span className="mt-2 h-px flex-1 bg-border/70" />
              </div>
              <div className="flex flex-1 flex-col px-[clamp(22px,4vw,36px)] pb-[clamp(24px,4vw,36px)]">
                <p className="mt-3 text-[0.98rem] leading-[1.7] text-muted-foreground">
                  {step.body}
                </p>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
