import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./executive-shared";
import { EXEC_OPERATING } from "../_data/executive";

export default function ExecutiveOperating() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="executive-operating-title"
        className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[1fr_1fr] gap-[clamp(28px,4.6vw,68px)] max-[980px]:grid-cols-1">
            <div className="order-2 max-[980px]:order-1">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden border border-accent/20">
                  <Image
                    src="/placeholders/executive-operating.png"
                    alt="Placeholder artwork standing in for photography of an executive operating review"
                    fill
                    sizes="(max-width: 980px) 100vw, 46vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
                  PLACEHOLDER — approved photography slot.
                </figcaption>
              </figure>
            </div>

            <div className="order-1 max-[980px]:order-2">
              <Eyebrow tone="dark">02 — Operating model</Eyebrow>
              <h2
                id="executive-operating-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                From mandate
                <br />
                to outcome.
              </h2>

              <ol className="mt-[clamp(24px,3.4vw,38px)] flex flex-col">
                {EXEC_OPERATING.map((step, i) => (
                  <li
                    key={step.stage}
                    className="grid grid-cols-[auto_1fr] gap-x-[clamp(16px,2.4vw,28px)] border-t border-muted/15 py-[clamp(16px,2.2vw,24px)] last:border-b last:border-muted/15"
                  >
                    <span
                      className="row-span-2 pt-1 text-[0.62rem] font-semibold tracking-[0.14em] text-accent uppercase"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="text-[0.66rem] font-semibold tracking-[0.14em] text-muted/55 uppercase">
                        {step.stage}
                      </span>
                      <h3 className="mt-1.5 font-sans text-[clamp(1.05rem,1.9vw,1.5rem)] leading-[1.1] font-extrabold uppercase [font-stretch:114%]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[52ch] text-[0.92rem] leading-[1.6] text-muted/75">
                        {step.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
