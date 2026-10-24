import Reveal from "@/app/(home)/_components/reveal";

const PRINCIPLES = [
  {
    title: "Essential needs first",
    body: "We focus on sectors where demand is structural — water, energy, food, housing, industry and digital access.",
  },
  {
    title: "Bankability by design",
    body: "Structure follows deliverability. Governance, offtake logic, technology fit and risk allocation are addressed early.",
  },
  {
    title: "Platform, not just capital",
    body: "We combine investment, project development, operating capability and strategic partnerships to move projects to execution.",
  },
  {
    title: "Africa-rooted, globally connected",
    body: "Africa is our foundation; we connect African opportunities to global capital, technology and markets, and vice versa.",
  },
];

export default function Principles() {
  return (
    <section
      aria-labelledby="principles-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="max-w-[64ch]">
          <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-accent uppercase">
            Investment principles
          </p>
          <h2
            id="principles-title"
            className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Discipline with purpose
          </h2>
          <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted/80">
            A measured approach: credible opportunities, aligned partners, and assets
            built to endure.
          </p>
        </Reveal>

        <div className="mt-[clamp(30px,5vw,56px)] grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {PRINCIPLES.map((principle) => (
          <Reveal
            key={principle.title}
            className="relative flex h-full flex-col rounded-[2px] border border-white/10 bg-white/5 p-[clamp(22px,3.6vw,32px)] backdrop-blur-sm transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-accent/60"
          >
              <h3 className="font-sans text-[1.12rem] font-bold tracking-[0.03em] uppercase [font-stretch:112%]">
                {principle.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-[1.7] text-muted/76">
                {principle.body}
              </p>
              <span className="mt-6 h-px w-10 bg-accent/80" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
