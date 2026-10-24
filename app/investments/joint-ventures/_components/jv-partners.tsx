import Reveal from "@/app/(home)/_components/reveal";

const PARTNERS = [
  {
    role: "Project Owners",
    focus: "Sites, offtake, permits or existing assets with a path to scale",
  },
  {
    role: "Technology Partners",
    focus: "Proven solutions that need deployment at scale with the right structure",
  },
  {
    role: "Financial Institutions / DFIs",
    focus: "Blended finance, risk participation and mobilisation aligned to bankable structures",
  },
  {
    role: "Strategic Partners",
    focus: "Capabilities that strengthen execution across water, energy, food, industry or digital",
  },
];

export default function JvPartners() {
  return (
    <section
      aria-labelledby="jv-partners-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="max-w-[64ch]">
          <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-accent uppercase">
            Who we partner with
          </p>
          <h2
            id="jv-partners-title"
            className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Complementary strengths
          </h2>
          <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted/80">
            We look for partners whose strengths fill gaps and whose incentives align
            with long-term delivery.
          </p>
        </Reveal>
        <div className="mt-[clamp(30px,5vw,56px)] grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PARTNERS.map((partner) => (
            <Reveal
              key={partner.role}
              className="relative flex h-full flex-col rounded-[2px] border border-white/10 bg-white/5 p-[clamp(22px,3.6vw,32px)] backdrop-blur-sm transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent/60"
            >
              <h3 className="font-sans text-[1.12rem] font-bold tracking-[0.03em] uppercase [font-stretch:112%]">
                {partner.role}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-[1.7] text-muted/76">
                {partner.focus}
              </p>
              <span className="mt-6 h-px w-10 bg-accent/80" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
