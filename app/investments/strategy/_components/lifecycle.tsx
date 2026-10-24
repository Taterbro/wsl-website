import Reveal from "@/app/(home)/_components/reveal";

const STAGES = [
  {
    no: "01",
    label: "Identify",
    definition: "Find commercially attractive opportunities and unmet market needs",
    detail:
      "We scan for essential needs across water, energy, food, housing, mobility and digital access where demand is structural and growing.",
    partners: ["Market intelligence", "Public sector", "Local partners"],
  },
  {
    no: "02",
    label: "Originate",
    definition: "Develop opportunities into structured projects",
    detail:
      "We shape opportunities into defined projects with clear sites, demand, sponsors and a credible route to delivery.",
    partners: ["Project owners", "Communities", "Technical advisors"],
  },
  {
    no: "03",
    label: "Structure",
    definition: "Determine ownership, financing, technology and implementation models",
    detail:
      "We design bankable vehicles — equity, debt, JV, EPC, PPP and blended finance — matched to risk and implementation needs.",
    partners: ["Investors", "Lenders", "Technology partners"],
  },
  {
    no: "04",
    label: "Mobilize",
    definition: "Connect projects with investors, institutions, lenders and strategic partners",
    detail:
      "We convene aligned capital and capabilities across Africa and global markets from the outset.",
    partners: ["DFIs", "Financial institutions", "Strategic partners"],
  },
  {
    no: "05",
    label: "Build",
    definition: "Execute through operating companies, JVs and specialist partners",
    detail:
      "We execute to institutional standards of quality, governance, safety and resilience.",
    partners: ["EPCs", "Operators", "Local contractors"],
  },
  {
    no: "06",
    label: "Scale",
    definition: "Expand successful models into additional markets",
    detail:
      "We replicate proven models, strengthen platforms and compound value for partners and communities.",
    partners: ["Operators", "Investors", "Strategic partners"],
  },
];

export default function Lifecycle() {
  return (
    <section
      aria-labelledby="lifecycle-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="max-w-[64ch]">
          <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-primary/70 uppercase">
            Full-lifecycle platform
          </p>
          <h2
            id="lifecycle-title"
            className="mt-4 font-sans text-[clamp(2.1rem,5.4vw,4.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            From opportunity to scale
          </h2>
          <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted-foreground">
            Waterlight acts as an originator, structurer and builder — not just a capital
            provider. Each stage is deliberate and designed to be bankable.
          </p>
        </Reveal>

        <div className="mt-[clamp(34px,6vw,72px)] grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {STAGES.map((stage) => (
            <Reveal
              key={stage.label}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2px] border border-border bg-card/60 transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_40px_80px_-60px_rgba(18,63,90,0.9)]"
            >
              <div className="flex items-start justify-between gap-4 px-[clamp(22px,4vw,36px)] pt-[clamp(24px,4vw,36px)]">
                <div>
                  <p className="font-sans text-[2.6rem] font-extrabold text-secondary [font-stretch:114%]">
                    {stage.no}
                  </p>
                  <h3 className="mt-2 font-sans text-[1.4rem] font-bold tracking-[0.03em] uppercase [font-stretch:112%]">
                    {stage.label}
                  </h3>
                </div>
                <span className="mt-2 h-px flex-1 bg-border/70" />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-[clamp(22px,4vw,36px)] pb-[clamp(24px,4vw,36px)]">
                <p className="text-[0.98rem] leading-[1.7] text-foreground/90">
                  {stage.definition}
                </p>
                <p className="text-[0.95rem] leading-[1.7] text-muted-foreground">
                  {stage.detail}
                </p>
                <div className="mt-auto pt-2">
                  <p className="text-[0.76rem] font-semibold tracking-[0.12em] text-primary/70 uppercase">
                    Typical partners
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {stage.partners.map((partner) => (
                      <span
                        key={partner}
                        className="rounded-[2px] border border-border px-2.5 py-1 text-[0.78rem] text-muted-foreground"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[0.88rem] text-muted-foreground">
          {/* PLACEHOLDER: confirm stage outcomes with leadership; no deal counts or capital mobilized shown. */}
          Outcomes are not published on this page — summaries are available on request.
        </p>
      </div>
    </section>
  );
}
