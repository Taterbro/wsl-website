import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./advisory-shared";
import { CRITERIA } from "../_data/advisory";

export default function AdvisoryConstitution() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="advisory-constitution-title"
        className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(28px,4.6vw,68px)] max-[980px]:grid-cols-1">
            <div>
              <Eyebrow tone="dark">02 — How members are appointed</Eyebrow>
              <h2
                id="advisory-constitution-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Appointed
                <br />
                on merit
                <br />
                and terms.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
                Membership is not honorary. A seat on either committee follows a
                defined appointment process, a fixed term and a recorded duty of
                care.
              </p>

              <dl className="mt-[clamp(24px,3.4vw,38px)] border-t border-muted/15">
                {CRITERIA.map((item) => (
                  <div
                    key={item.key}
                    className="grid grid-cols-[auto_1fr] gap-x-[clamp(16px,2.4vw,30px)] border-b border-muted/15 py-[clamp(16px,2.2vw,26px)]"
                  >
                    <dt
                      className="font-sans text-[clamp(1.2rem,2.2vw,1.7rem)] leading-none font-extrabold text-accent [font-stretch:114%]"
                      aria-hidden="true"
                    >
                      {item.no}
                    </dt>
                    <dd>
                      <span className="block font-sans text-[clamp(1.05rem,1.9vw,1.45rem)] leading-[1.1] font-extrabold uppercase [font-stretch:114%]">
                        {item.title}
                      </span>
                      <span className="mt-2 block max-w-[52ch] text-[0.9rem] leading-[1.6] text-muted/75">
                        {item.copy}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="max-[980px]:order-first">
              <figure className="sticky top-[110px] max-[980px]:static">
                <div className="relative aspect-[4/3] overflow-hidden border border-accent/20">
                  <Image
                    src="/placeholders/advisory-deliberation.png"
                    alt="Placeholder artwork standing in for photography of a committee in deliberation"
                    fill
                    sizes="(max-width: 980px) 100vw, 46vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
                  PLACEHOLDER — approved photography slot. Constitution criteria
                  are indicative and must be confirmed against the approved terms
                  of reference.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
