import Image from "next/image";
import { Eyebrow, PortraitSlot } from "./founder-shared";
import { MANDATE, OFFICE, STATEMENT } from "../_data/founder";

export default function FounderStatement() {
  return (
    <section
      id="founder-statement"
      aria-labelledby="founder-statement-title"
      className="scroll-mt-[92px] bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[0.72fr_1.28fr] gap-[clamp(28px,5vw,80px)] max-[980px]:grid-cols-1">
          <PortraitSlot
            src="/placeholders/founder-field.png"
            alt="Placeholder artwork standing in for an approved photograph of the Founder and Group CEO in the field"
            sizes="(max-width: 980px) 100vw, 30vw"
            className="max-[980px]:hidden"
            label="PLACEHOLDER — field photography slot."
          />

          <div>
            <Eyebrow>01 — The conviction</Eyebrow>
            <blockquote className="mt-[clamp(20px,2.8vw,30px)]">
              <p
                id="founder-statement-title"
                className="max-w-[26ch] font-sans text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.06] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
              >
                &ldquo;{STATEMENT}&rdquo;
              </p>
              <footer className="mt-6 text-[0.78rem] font-medium tracking-[0.1em] text-muted-foreground uppercase">
                {OFFICE.role} — Waterlight Group
              </footer>
            </blockquote>

            <p className="mt-[clamp(22px,3vw,30px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              The sentence is the operating brief. It is why the group builds
              before it buys, why it starts with essential needs, and why each
              platform is measured on the lives and livelihoods it changes as
              well as the value it produces. This page describes the office —
              the person is confirmed and published only once formally approved.
            </p>

            <div className="mt-[clamp(28px,4vw,44px)] grid grid-cols-2 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] max-[680px]:grid-cols-1">
              {MANDATE.map((item) => (
                <article
                  key={item.no}
                  className="flex flex-col gap-2 bg-background px-[clamp(16px,2.2vw,28px)] py-[clamp(16px,2.2vw,26px)]"
                >
                  <span className="font-sans text-[0.78rem] font-extrabold tracking-[0.16em] text-chart-4 [font-stretch:114%]">
                    {item.no}
                  </span>
                  <h3 className="font-sans text-[1.05rem] leading-[1.14] font-extrabold uppercase [font-stretch:114%]">
                    {item.label}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.55] text-muted-foreground">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>

            <figure className="mt-[clamp(22px,3vw,32px)] hidden max-[980px]:block">
              <div className="relative aspect-[16/9] overflow-hidden border border-[rgba(9,29,42,0.16)]">
                <Image
                  src="/placeholders/founder-field.png"
                  alt="Placeholder artwork standing in for an approved photograph of the Founder and Group CEO in the field"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted-foreground">
                PLACEHOLDER — field photography slot.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
