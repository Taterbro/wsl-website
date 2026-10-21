import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./executive-shared";
import { ACCOUNTABILITY } from "../_data/executive";

export default function ExecutiveAccountability() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="executive-accountability-title"
        className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.78fr_1.22fr] gap-[clamp(24px,4.4vw,64px)] max-[980px]:grid-cols-1">
            <div>
              <Eyebrow>04 — Accountability</Eyebrow>
              <h2
                id="executive-accountability-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Held to
                <br />
                the
                <br />
                outcome.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[46ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                Authority is delegated, but accountability is not diffuse. Four
                principles keep performance and conduct traceable from the
                executive to the Board.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[rgba(9,29,42,0.16)] max-[680px]:grid-cols-1">
              {ACCOUNTABILITY.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-[clamp(10px,1.4vw,16px)] bg-background p-[clamp(20px,2.6vw,32px)]"
                >
                  <h3 className="font-sans text-[clamp(1.02rem,1.8vw,1.35rem)] leading-[1.14] font-extrabold uppercase [font-stretch:114%]">
                    {item.title}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.6] text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
