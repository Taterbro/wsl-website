import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { CASE_NOTE } from "../_data/logistics";

export default function LogisticsCase() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="logistics-case"
        aria-labelledby="logistics-case-title"
        className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[1.08fr_0.92fr] items-start gap-[clamp(26px,4vw,64px)] max-[980px]:grid-cols-1">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                04 — {CASE_NOTE.label}
              </p>
              <h2
                id="logistics-case-title"
                className="max-w-[24ch] font-sans text-[clamp(1.9rem,4.4vw,3.6rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                {CASE_NOTE.title}
              </h2>
              <p className="mt-[clamp(16px,2.2vw,22px)] max-w-[54ch] text-[clamp(0.98rem,1.25vw,1.08rem)] leading-[1.6] text-muted-foreground">
                {CASE_NOTE.copy}
              </p>

              <ol className="mt-[clamp(24px,3.4vw,40px)] m-0 list-none border-l border-[rgba(9,29,42,0.16)] p-0">
                {CASE_NOTE.steps.map((step) => (
                  <li
                    key={step.no}
                    className="relative pb-[clamp(18px,2.4vw,26px)] pl-[clamp(18px,2.4vw,28px)] last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-[6px] -left-[5px] h-[10px] w-[10px] rounded-full bg-primary"
                    />
                    <p className="font-sans text-[clamp(0.95rem,1.35vw,1.1rem)] leading-[1.25] font-extrabold uppercase [font-stretch:112%]">
                      <span className="mr-3 text-[0.64rem] font-extrabold tracking-[0.16em] text-primary [font-stretch:114%]">
                        {step.no}
                      </span>
                      {step.title}
                    </p>
                    <p className="mt-2 max-w-[52ch] text-[0.92rem] leading-[1.6] text-muted-foreground">
                      {step.copy}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="relative aspect-[4/3] overflow-hidden border border-[rgba(9,29,42,0.16)] max-[980px]:aspect-[16/10]">
              <Image
                src="/placeholders/logistics-hub.png"
                alt="Placeholder artwork standing in for photography of a distribution hub with racking and loading bays"
                fill
                sizes="(max-width: 980px) 100vw, 44vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-sidebar/60 via-transparent to-transparent"
              />
              <figcaption className="absolute bottom-4 left-4 text-[0.68rem] tracking-[0.1em] text-muted/60 uppercase">
                PLACEHOLDER — case photography
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
