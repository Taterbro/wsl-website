import Reveal from "../../../(home)/_components/reveal";
import { PRINCIPLES } from "../_data/agriculture";

export default function AgriculturePrinciples() {
  return (
    <section
      aria-labelledby="agriculture-principles-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-end gap-[clamp(26px,5vw,72px)] max-[900px]:grid-cols-1">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary"
              />
              06 — How we build
            </p>
            <h2
              id="agriculture-principles-title"
              className="font-sans text-[clamp(2.1rem,5.2vw,4.5rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Close
              <br />
              <span className="text-primary">the gaps.</span>
            </h2>
          </div>
          <p className="max-w-[52ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.65] text-muted-foreground">
            Value is lost between harvest and storage, field and processor,
            production and market. Our approach is built around those
            transitions — and around the evidence needed to finance them.
          </p>
        </div>

        <ol className="mt-[clamp(34px,4.8vw,58px)] list-none border-t border-border p-0">
          {PRINCIPLES.map((principle, index) => (
            <li key={principle.no} className="border-b border-border">
              <Reveal
                style={{ transitionDelay: `${index * 60}ms` }}
                className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none"
              >
                <div className="grid grid-cols-[auto_1fr] items-start gap-x-[clamp(18px,3vw,42px)] gap-y-4 py-[clamp(20px,3vw,32px)]">
                  <span className="font-sans text-[clamp(0.9rem,1.3vw,1.1rem)] font-extrabold tracking-[0.1em] text-primary [font-stretch:114%]">
                    {principle.no}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <h3 className="font-sans text-[clamp(1.15rem,2.2vw,1.8rem)] leading-[1.1] font-extrabold uppercase [font-stretch:112%]">
                        {principle.title}
                      </h3>
                      <span className="border border-primary/25 px-2 py-1 text-[0.56rem] font-semibold tracking-[0.12em] text-primary uppercase">
                        {principle.tag}
                      </span>
                    </div>
                    <p className="mt-2.5 max-w-[68ch] text-[clamp(0.88rem,1.1vw,1rem)] leading-[1.6] text-muted-foreground">
                      {principle.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mt-5 text-[0.74rem] leading-[1.55] text-muted-foreground/80">
          PLACEHOLDER — delivery principles, not verified performance claims.
        </p>
      </div>
    </section>
  );
}
