import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { PARTNERSHIP_MODELS } from "../_data/industry";

export default function IndustryPartnerships() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="industry-partnerships"
        aria-labelledby="industry-partnerships-title"
        className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.72fr_1.28fr] items-start gap-[clamp(26px,4vw,64px)] max-[980px]:grid-cols-1">
            <figure className="relative aspect-[4/5] overflow-hidden border border-[rgba(9,29,42,0.16)] max-[980px]:aspect-[16/9]">
              <Image
                src="/placeholders/industry-partnership.png"
                alt="Placeholder artwork standing in for photography of two industrial operators working in partnership"
                fill
                sizes="(max-width: 980px) 100vw, 32vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-sidebar/55 via-transparent to-transparent"
              />
            </figure>

            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                04 — Partnership models
              </p>
              <h2
                id="industry-partnerships-title"
                className="font-sans text-[clamp(2rem,5vw,4.1rem)] leading-[0.95] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Ways to build
                <br />
                together.
              </h2>
              <p className="mt-[clamp(16px,2.2vw,22px)] max-w-[58ch] text-[clamp(0.98rem,1.25vw,1.08rem)] leading-[1.6] text-muted-foreground">
                Industrial projects rarely fit a single balance sheet. We bring
                capital, an operating team and a local footprint — structured to
                match how the parties actually share risk.
              </p>

              <ul className="mt-[clamp(24px,3.4vw,40px)] grid list-none grid-cols-1 gap-x-[clamp(20px,3vw,44px)] gap-y-[clamp(16px,2.2vw,24px)] p-0 sm:grid-cols-2">
                {PARTNERSHIP_MODELS.map((model) => (
                  <li
                    key={model.no}
                    className="border-t border-[rgba(9,29,42,0.16)] pt-[clamp(12px,1.6vw,16px)]"
                  >
                    <span className="font-sans text-[0.62rem] font-extrabold tracking-[0.16em] text-primary [font-stretch:114%]">
                      {model.no}
                    </span>
                    <h3 className="mt-2 font-sans text-[clamp(0.95rem,1.35vw,1.15rem)] leading-[1.25] font-extrabold uppercase [font-stretch:112%]">
                      {model.title}
                    </h3>
                    <p className="mt-2 max-w-[38ch] text-[0.92rem] leading-[1.55] text-muted-foreground">
                      {model.copy}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
