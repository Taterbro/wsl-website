import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { SEATS } from "../_data/governance";

export default function GovernanceSeats() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="governance-seats-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[56ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                03 — Board &amp; committees
              </p>
              <h2
                id="governance-seats-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Seats, not
                <br />
                profiles.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                No names, titles or affiliations are published here. When
                formally approved and current, biographies and committee
                memberships will be added under Leadership, with dates of
                appointment.
              </p>
            </div>
            <a
              href="/leadership"
              className="inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Leadership pages
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-[clamp(30px,4.4vw,52px)] grid grid-cols-6 gap-[clamp(10px,1.2vw,16px)] max-[1180px]:grid-cols-3 max-[680px]:grid-cols-2">
            {SEATS.map((seat) => (
              <article
                key={`${seat.body}-${seat.seat}`}
                className="group border border-[rgba(9,29,42,0.16)] bg-background"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={seat.image}
                    alt={seat.alt}
                    fill
                    sizes="(max-width: 680px) 50vw, (max-width: 1180px) 33vw, 16vw"
                    className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) motion-reduce:transform-none group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />
                </div>
                <div className="flex flex-col gap-1.5 px-[clamp(10px,1.2vw,16px)] pb-[clamp(12px,1.4vw,18px)] -mt-6">
                  <span className="text-[0.6rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    {seat.seat}
                  </span>
                  <span className="font-sans text-[0.82rem] leading-[1.2] font-extrabold uppercase [font-stretch:114%]">
                    {seat.body}
                  </span>
                  <span className="mt-1 inline-flex w-fit rounded-[2px] border border-[rgba(9,29,42,0.16)] px-[8px] py-[5px] text-[0.58rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                    To be appointed
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-[clamp(26px,3.6vw,44px)] relative overflow-hidden border border-[rgba(9,29,42,0.16)]">
            <div className="relative h-[clamp(220px,28vw,340px)] w-full">
              <Image
                src="/placeholders/governance-quote.png"
                alt="Placeholder artwork standing in for photography of a formal board meeting"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-sidebar via-sidebar/92 to-sidebar/40" />
            </div>
            <div className="absolute inset-x-[clamp(16px,4vw,72px)] top-1/2 -translate-y-1/2 max-w-[78ch]">
              <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
                Founder statement
              </p>
              <blockquote className="mt-4 font-sans text-[clamp(1.25rem,3vw,2.4rem)] leading-[1.08] font-extrabold text-muted">
                &ldquo;The value of life is determined by the problems you solve
                for others.&rdquo;
              </blockquote>
              <p className="mt-5 text-[0.8rem] font-semibold tracking-[0.08em] text-muted/60 uppercase">
                Founder &amp; Group CEO
              </p>
              <p className="mt-2 text-[0.76rem] leading-[1.55] text-muted/55">
                PLACEHOLDER — title and identity published once formally approved
                and current.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
