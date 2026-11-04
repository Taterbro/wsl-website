import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./board-shared";
import { BOARD_INTRO, BOARD_MEMBERS } from "../_data/board";

export default function BoardRoster() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="board-roster"
        aria-labelledby="board-roster-title"
        className="scroll-mt-[92px] bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[56ch]">
              <Eyebrow>02 — The roster</Eyebrow>
              <h2
                id="board-roster-title"
                className="mt-[clamp(20px,2.8vw,30px)] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Every member.
                <br />
                Every seat.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                Nine directors: one executive, eight independent. Each entry
                carries the role, the seat and the work the director brings to
                the Board&rsquo;s decisions.
              </p>
            </div>
            <a
              href="#board-committees"
              className="inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              How the board works
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <ul className="mt-[clamp(30px,4.4vw,52px)] grid list-none grid-cols-1 gap-[clamp(16px,2.2vw,28px)] p-0 sm:grid-cols-2 lg:grid-cols-3">
            {BOARD_MEMBERS.map((member) => (
              <li key={member.key}>
                <article className="group flex h-full flex-col border border-[rgba(9,29,42,0.16)] bg-background">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-background/80 via-background/5 to-transparent"
                    />
                    <span className="absolute top-[clamp(10px,1.4vw,16px)] left-[clamp(10px,1.4vw,16px)] rounded-[2px] bg-sidebar/85 px-[10px] py-[6px] text-[0.58rem] font-semibold tracking-[0.12em] text-accent uppercase">
                      {member.seat}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 border-t border-[rgba(9,29,42,0.16)] p-[clamp(16px,1.9vw,26px)]">
                    <h3 className="font-sans text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.1] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]">
                      {member.name}
                    </h3>
                    <p className="text-[0.68rem] font-semibold tracking-[0.12em] text-primary uppercase">
                      {member.role}
                    </p>
                    <p className="mt-1 text-[0.88rem] leading-[1.55] text-muted-foreground">
                      {member.focus}
                    </p>

                    {member.committees.length > 0 && (
                      <ul className="mt-1 flex list-none flex-wrap gap-1.5 p-0">
                        {member.committees.map((committee) => (
                          <li
                            key={committee}
                            className="rounded-[2px] border border-[rgba(9,29,42,0.16)] px-[9px] py-[5px] text-[0.58rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase"
                          >
                            {committee}
                          </li>
                        ))}
                      </ul>
                    )}

                    {member.social && (
                      <a
                        href={member.social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex w-fit items-center gap-2 pt-2 text-[0.7rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                      >
                        {member.social.label}
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only">
                          (opens in a new tab, placeholder profile)
                        </span>
                      </a>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-[80ch] text-[0.74rem] leading-[1.55] text-muted-foreground/80">
            PLACEHOLDER — {BOARD_INTRO.office.toLowerCase()} shown above is
            illustrative dummy content. Names, roles, committee memberships and
            photographs must be replaced with the confirmed register of directors
            and cleared portrait photography before publication.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
