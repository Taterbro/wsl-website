import Link from "next/link";
import Reveal from "@/app/(home)/_components/reveal";

export default function CorridorModule() {
  return (
    <section
      aria-labelledby="corridor-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid gap-[clamp(30px,6vw,80px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="max-w-[64ch]">
            <p className="text-[0.8rem] font-semibold tracking-[0.12em] text-primary/70 uppercase">
              Strategic corridor
            </p>
            <h2
              id="corridor-title"
              className="mt-4 font-sans text-[clamp(2.1rem,5vw,4.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Connecting capital, technology and markets
            </h2>
            <p className="mt-5 text-[clamp(1.02rem,1.4vw,1.26rem)] leading-[1.7] text-muted-foreground">
              Waterlight positions itself as a platform through which international
              partners identify and develop opportunities across Africa, and African
              enterprises access technology, investment and international markets.
            </p>
            <p className="mt-4 text-[0.98rem] leading-[1.7] text-muted-foreground">
              {/* PLACEHOLDER: label as Target market / strategic dialogue unless confirmed operating presence or signed partnership. */}
              Shown here as positioning — no agreements, named partners, entities or
              capital commitments are implied.
            </p>
            <div className="mt-8">
              <Link
                href="/global-markets/gcc"
                className="inline-flex items-center gap-2 rounded-[2px] border border-primary/40 px-[clamp(18px,3vw,26px)] py-[clamp(10px,1.2vw,12px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-primary uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Explore GCC Markets
              </Link>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2px] border border-border bg-card/40">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <div className="grid gap-6 p-[clamp(24px,6vw,56px)]">
                <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                  <div className="flex flex-col items-center text-center">
                    <span className="rounded-[2px] border border-border px-4 py-2 font-sans text-[0.86rem] font-semibold tracking-[0.08em] uppercase">
                      Saudi Arabia
                    </span>
                    <p className="mt-2 text-[0.9rem] text-muted-foreground">
                      Capital &amp; technology
                    </p>
                  </div>
                  <div className="hidden h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent md:block" />
                  <div className="flex flex-col items-center text-center">
                    <span className="rounded-[2px] border border-accent/70 px-4 py-2 font-sans text-[0.86rem] font-semibold tracking-[0.08em] uppercase">
                      Africa
                    </span>
                    <p className="mt-2 text-[0.9rem] text-muted-foreground">
                      Platform foundation
                    </p>
                  </div>
                  <div className="hidden h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent md:block" />
                  <div className="flex flex-col items-center text-center">
                    <span className="rounded-[2px] border border-border px-4 py-2 font-sans text-[0.86rem] font-semibold tracking-[0.08em] uppercase">
                      Global Markets
                    </span>
                    <p className="mt-2 text-[0.9rem] text-muted-foreground">
                      Markets &amp; partners
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 text-center text-[0.9rem] text-muted-foreground md:grid-cols-3">
                  <p>Capital ↔ Opportunities</p>
                  <p>Technology ↔ Deployment</p>
                  <p>Markets ↔ Enterprises</p>
                </div>
                <p className="text-center text-[0.84rem] text-muted-foreground">
                  Target market / strategic dialogue
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
