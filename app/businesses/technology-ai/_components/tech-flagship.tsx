import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { FLAGSHIP } from "../_data/technology";

export default function TechFlagship() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="tech-flagship"
        aria-labelledby="tech-flagship-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[1.06fr_0.94fr] items-start gap-[clamp(28px,4.4vw,68px)] max-[980px]:grid-cols-1">
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden border border-[rgba(9,29,42,0.16)]">
                <Image
                  src="/placeholders/tech-wswis.png"
                  alt="Placeholder artwork standing in for an illustration of instrumented water infrastructure feeding live operational data"
                  fill
                  sizes="(max-width: 980px) 100vw, 52vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-sidebar/70 via-transparent to-transparent"
                />
              </div>
              <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted-foreground/75">
                PLACEHOLDER — illustration slot for the WSWIS architecture. Replace
                with approved product artwork.
              </figcaption>
            </figure>

            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                {FLAGSHIP.eyebrow}
              </p>
              <h2
                id="tech-flagship-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                {FLAGSHIP.title}
              </h2>
              <p className="mt-[clamp(16px,2.2vw,22px)] max-w-[30ch] font-sans text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.35] font-bold uppercase [font-stretch:112%]">
                {FLAGSHIP.strap}
              </p>
              <p className="mt-[clamp(16px,2.2vw,22px)] max-w-[56ch] text-[clamp(0.98rem,1.25vw,1.08rem)] leading-[1.6] text-muted-foreground">
                {FLAGSHIP.copy}
              </p>

              <ul className="mt-[clamp(24px,3.4vw,36px)] list-none border-t border-[rgba(9,29,42,0.16)] p-0">
                {FLAGSHIP.routes.map((route) => (
                  <li key={route.href} className="border-b border-[rgba(9,29,42,0.16)]">
                    <a
                      href={route.href}
                      className="group flex items-center justify-between gap-4 py-[clamp(14px,1.8vw,20px)] text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      {route.label}
                      <span
                        aria-hidden="true"
                        className="text-primary transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-[clamp(30px,4.4vw,54px)] border-t border-[rgba(9,29,42,0.16)] pt-[clamp(18px,2.4vw,26px)]">
            <p className="text-[0.64rem] font-semibold tracking-[0.16em] text-primary uppercase">
              The WSWIS sequence
            </p>
            <ol className="mt-4 flex list-none flex-wrap items-center gap-x-2 gap-y-3 p-0">
              {FLAGSHIP.stages.map((stage, index) => (
                <li key={stage} className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2.5 rounded-[2px] border border-[rgba(9,29,42,0.16)] bg-background px-[12px] py-[8px] text-[0.76rem] font-semibold tracking-[0.04em] uppercase">
                    <span className="font-sans text-[0.62rem] font-extrabold text-primary [font-stretch:114%]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {stage}
                  </span>
                  {index < FLAGSHIP.stages.length - 1 && (
                    <span aria-hidden="true" className="text-primary/50">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
