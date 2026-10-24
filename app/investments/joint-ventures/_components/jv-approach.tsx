import Reveal from "@/app/(home)/_components/reveal";

const APPROACH = [
  {
    title: "Originate together",
    body: "We co-develop opportunities where local insight, site access or demand meets Waterlight's platform capabilities.",
  },
  {
    title: "Structure for bankability",
    body: "Clear ownership, governance, technology fit and financing aligned from day one.",
  },
  {
    title: "Build to execute",
    body: "Through operating companies, specialist partners and disciplined delivery to institutional standards.",
  },
  {
    title: "Scale what works",
    body: "Proven JV models can be expanded into adjacent opportunities and new markets.",
  },
];

export default function JvApproach() {
  return (
    <section
      aria-labelledby="jv-approach-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid gap-[clamp(30px,6vw,80px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal className="max-w-[64ch]">
            <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-primary/70 uppercase">
              How we partner
            </p>
            <h2
              id="jv-approach-title"
              className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              JV as a delivery model
            </h2>
            <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted-foreground">
              JVs are how we combine complementary strengths — technology, offtake,
              land/site access, execution capability or capital — to deliver projects
              that would be harder alone.
            </p>
            <p className="mt-4 text-[0.98rem] leading-[1.7] text-muted-foreground">
              {/* PLACEHOLDER: no named JV partners or deal terms published. */}
              Focus is on structure and capability, not public deal lists.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {APPROACH.map((item) => (
              <Reveal
                key={item.title}
                className="relative flex h-full flex-col rounded-[2px] border border-border bg-card/40 p-[clamp(22px,3.6vw,30px)] transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-1 hover:border-primary/40"
              >
                <h3 className="font-sans text-[1.1rem] font-bold tracking-[0.03em] uppercase [font-stretch:112%]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-[1.7] text-muted-foreground">
                  {item.body}
                </p>
                <span className="mt-6 h-px w-10 bg-accent/70" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
