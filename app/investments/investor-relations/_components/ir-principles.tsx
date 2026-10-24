import Reveal from "@/app/(home)/_components/reveal";

const PRINCIPLES = [
  {
    title: "Discipline",
    body: "Essential needs first, bankability by design, governance from the outset.",
  },
  {
    title: "Transparency",
    body: "Clear structure and process. Public pages show approved summaries only; details shared on request.",
  },
  {
    title: "Alignment",
    body: "Shared incentives through JVs, aligned risk allocation and long-term thinking.",
  },
  {
    title: "Execution",
    body: "Platform capability across origination, structuring, mobilisation and build.",
  },
];

export default function IrPrinciples() {
  return (
    <section
      aria-labelledby="ir-principles-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="max-w-[64ch]">
          <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-primary/70 uppercase">
            Approach
          </p>
          <h2
            id="ir-principles-title"
            className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            What investors
            <br />
            can expect
          </h2>
          <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted-foreground">
            A measured approach focused on structural demand and deliverable
            opportunities.
          </p>
        </Reveal>
        <div className="mt-[clamp(30px,5vw,56px)] grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PRINCIPLES.map((item) => (
            <Reveal
              key={item.title}
              className="relative flex h-full flex-col rounded-[2px] border border-border bg-card/40 p-[clamp(22px,3.6vw,32px)] transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-1 hover:border-primary/40"
            >
              <h3 className="font-sans text-[1.12rem] font-bold tracking-[0.03em] uppercase [font-stretch:112%]">
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
    </section>
  );
}
