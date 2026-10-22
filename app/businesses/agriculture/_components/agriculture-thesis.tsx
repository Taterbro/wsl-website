import Reveal from "../../../(home)/_components/reveal";

export default function AgricultureThesis() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="agriculture-thesis-title"
        className="relative isolate overflow-hidden bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(9,29,42,0.055) 0px, rgba(9,29,42,0.055) 1px, transparent 1px, transparent 30px)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="mx-auto max-w-[1000px] text-center">
            <p className="mb-[clamp(22px,3vw,34px)] flex items-center justify-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(18px,3vw,40px)] bg-primary/45"
              />
              02 — The thesis
              <span
                aria-hidden="true"
                className="h-px w-[clamp(18px,3vw,40px)] bg-primary/45"
              />
            </p>

            <h2
              id="agriculture-thesis-title"
              className="mx-auto max-w-[18ch] font-sans text-[clamp(1.95rem,4.8vw,4.2rem)] leading-[1.02] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
            >
              A harvest is not food
              <br />
              until it reaches
              <br />
              <span className="text-primary">a market.</span>
            </h2>

            <p className="mx-auto mt-[clamp(22px,3vw,32px)] max-w-[62ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.65] text-muted-foreground">
              Production is only one link. Value is created — or lost — in
              processing, storage, transport and offtake. Waterlight invests
              across the chain, not just the farm.
            </p>

            <a
              href="#value-chain"
              className="mt-[clamp(20px,2.6vw,28px)] inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Follow the chain
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
