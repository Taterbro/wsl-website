import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { PROGRAMME } from "../_data/urban";

export default function UrbanProgramme() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="urban-programme"
        aria-labelledby="urban-programme-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[54ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                03 — What we deliver
              </p>
              <h2
                id="urban-programme-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Four ways in.
              </h2>
            </div>
            <p className="max-w-[38ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted-foreground">
              Most programmes mix more than one of these. The district plan is
              the thread that holds them together.
            </p>
          </div>

          <ul className="mt-[clamp(28px,4vw,52px)] m-0 grid list-none grid-cols-1 gap-x-[clamp(20px,3vw,44px)] gap-y-[clamp(24px,3.4vw,40px)] p-0 md:grid-cols-2">
            {PROGRAMME.map((line, index) => (
              <li
                key={line.no}
                className={
                  index % 2 === 1
                    ? "lg:translate-y-[clamp(20px,3vw,44px)] motion-reduce:translate-y-0"
                    : undefined
                }
              >
                <article className="group h-full border border-[rgba(9,29,42,0.16)] bg-background">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={line.image}
                      alt={line.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 44vw"
                      className="object-cover transition-transform duration-(--transition-slow) ease-(--ease-standard) motion-reduce:transition-none"
                    />
                    <span className="absolute top-0 left-0 bg-sidebar px-[12px] py-[8px] font-sans text-[0.62rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:114%]">
                      {line.no}
                    </span>
                  </div>

                  <div className="px-[clamp(16px,2.2vw,24px)] py-[clamp(16px,2.2vw,24px)]">
                    <h3 className="font-sans text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.2] font-extrabold uppercase [font-stretch:114%]">
                      {line.title}
                    </h3>
                    <p className="mt-3 max-w-[46ch] text-[0.95rem] leading-[1.6] text-muted-foreground">
                      {line.copy}
                    </p>

                    <ul className="mt-[clamp(14px,1.8vw,18px)] flex list-none flex-wrap gap-2 p-0">
                      {line.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-[2px] border border-[rgba(9,29,42,0.18)] px-[10px] py-[6px] text-[0.68rem] font-semibold tracking-[0.08em] text-muted-foreground uppercase"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={line.href}
                      className="mt-[clamp(16px,2vw,20px)] inline-flex items-center gap-2 font-sans text-[0.78rem] font-semibold tracking-[0.08em] text-primary uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      Go deeper
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Reveal>
  );
}
