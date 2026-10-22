import Reveal from "../../../(home)/_components/reveal";
import { OFFERINGS } from "../_data/agriculture";

export default function AgricultureOfferings() {
  return (
    <section
      aria-labelledby="agriculture-offerings-title"
      className="relative bg-secondary py-[clamp(72px,10vw,140px)] text-secondary-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-end gap-[clamp(26px,5vw,72px)] max-[900px]:grid-cols-1">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary"
              />
              04 — What we build
            </p>
            <h2
              id="agriculture-offerings-title"
              className="font-sans text-[clamp(2.1rem,5.2vw,4.5rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Five links,
              <br />
              <span className="text-primary">one system.</span>
            </h2>
          </div>
          <p className="max-w-[48ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.65] text-secondary-foreground/70">
            Each offering can stand alone, but the value comes from connecting
            production to processing, storage, movement and offtake.
          </p>
        </div>

        <ol className="mt-[clamp(34px,4.8vw,58px)] grid list-none grid-cols-5 gap-px border border-primary/15 bg-primary/15 p-0 max-[1000px]:grid-cols-3 max-[680px]:grid-cols-1">
          {OFFERINGS.map((offering, index) => (
            <li key={offering.no} className="bg-secondary">
              <Reveal
                style={{ transitionDelay: `${index * 70}ms` }}
                className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none"
              >
                <article className="flex h-full flex-col p-[clamp(18px,2.4vw,28px)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-sans text-[0.66rem] font-extrabold tracking-[0.14em] text-primary uppercase [font-stretch:112%]">
                      {offering.no}
                    </span>
                    <span className="border border-primary/25 px-2 py-1 text-[0.56rem] font-semibold tracking-[0.12em] text-secondary-foreground/55 uppercase">
                      {offering.tag}
                    </span>
                  </div>
                  <h3 className="mt-[clamp(30px,5vw,64px)] font-sans text-[clamp(1.02rem,1.5vw,1.3rem)] leading-[1.12] font-extrabold uppercase [font-stretch:110%]">
                    {offering.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-4 mb-3 h-px w-full bg-primary/20"
                  />
                  <p className="text-[clamp(0.84rem,1vw,0.92rem)] leading-[1.6] text-secondary-foreground/68">
                    {offering.copy}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mt-5 text-[0.74rem] leading-[1.55] text-secondary-foreground/55">
          PLACEHOLDER — offering scope is indicative and confirmed per project.
        </p>
      </div>
    </section>
  );
}
