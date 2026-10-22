import Reveal from "../../../(home)/_components/reveal";
import { SCALE } from "../_data/urban";

export default function UrbanScale() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="urban-scale"
        aria-labelledby="urban-scale-title"
        className="bg-background py-[clamp(64px,8vw,120px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[40ch]">
              <p className="mb-5 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                04 — Scale
              </p>
              <h2
                id="urban-scale-title"
                className="font-sans text-[clamp(1.8rem,4.2vw,3.4rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                The programme,
                <br />
                in numbers.
              </h2>
            </div>
            <p className="max-w-[40ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted-foreground">
              Districts are measured in homes, hectares and years. These are the
              measures we hold ourselves to.
            </p>
          </div>

          <dl className="mt-[clamp(28px,4vw,52px)] grid list-none grid-cols-2 gap-x-[clamp(20px,3vw,44px)] gap-y-[clamp(24px,3vw,36px)] border-t border-[rgba(9,29,42,0.16)] p-0 pt-[clamp(20px,2.6vw,32px)] lg:grid-cols-4">
            {SCALE.map((figure) => (
              <div key={figure.label}>
                <dt className="text-[0.62rem] font-semibold tracking-[0.16em] text-muted-foreground/70 uppercase">
                  {figure.label}
                </dt>
                <dd className="mt-3 flex items-baseline gap-2">
                  <span className="font-sans text-[clamp(2.2rem,5.4vw,4.6rem)] leading-[0.9] font-extrabold tracking-[-0.02em] text-primary [font-stretch:114%]">
                    {figure.value}
                  </span>
                  <span className="font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold tracking-[0.06em] uppercase [font-stretch:112%]">
                    {figure.unit}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-[clamp(20px,2.6vw,30px)] text-[0.7rem] leading-[1.55] text-muted-foreground/70">
            PLACEHOLDER — illustrative figures only, not reported results.
            Replace with approved portfolio data before publication.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
