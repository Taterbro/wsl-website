import Reveal from "@/app/(home)/_components/reveal";

const CAPABILITIES = [
  "Technical concept and scoping",
  "Commercial structuring and bankability",
  "Permitting and stakeholder engagement strategy",
  "EPC/operator selection and contracting strategy",
  "Financial structuring and blended finance",
  "Environmental, social and governance considerations",
  "Project governance and delivery oversight",
];

export default function DevelopmentCapabilities() {
  return (
    <section
      aria-labelledby="pd-capabilities-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid gap-[clamp(30px,6vw,80px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="max-w-[64ch]">
            <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-accent uppercase">
              What we bring
            </p>
            <h2
              id="pd-capabilities-title"
              className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Platform capabilities
            </h2>
            <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted/80">
              We combine project development, structuring and execution capability
              to move opportunities through to a deliverable state.
            </p>
            <p className="mt-4 text-[0.98rem] leading-[1.7] text-muted/76">
              {/* PLACEHOLDER: capabilities listed are illustrative; confirm scope with delivery team. */}
            </p>
          </Reveal>
          <Reveal className="rounded-[2px] border border-white/10 bg-white/5 p-[clamp(24px,5vw,44px)] backdrop-blur-sm">
            <ul className="grid gap-3 sm:grid-cols-2">
              {CAPABILITIES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.98rem] leading-[1.7] text-muted/80"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
