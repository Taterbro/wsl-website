const CHAIN: { no: string; label: string; copy: string }[] = [
  { no: "01", label: "Opportunity", copy: "Essential-need demand, identified in market." },
  { no: "02", label: "Investment", copy: "Capital structured for the asset it funds." },
  { no: "03", label: "Innovation", copy: "Technology engineered for the context." },
  { no: "04", label: "Infrastructure", copy: "Built to institutional standards." },
  { no: "05", label: "Enterprise", copy: "Operating companies, not stalled projects." },
  { no: "06", label: "Impact", copy: "Outcomes measured, never asserted." },
  { no: "07", label: "Generational value", copy: "Long-horizon, compounding returns." },
];

export default function StoryValueChain() {
  return (
    <section
      id="story-value-chain"
      aria-labelledby="story-value-chain-title"
      className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="mb-[clamp(30px,4vw,48px)] max-w-[56ch]">
          <p className="mb-5 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
            The value-creation logic
          </p>
          <h2
            id="story-value-chain-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            One chain, carried end to end.
          </h2>
          <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted-foreground">
            The same sequence runs behind every platform — from the first
            signal of demand to the value that outlives the asset.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[13px] h-px bg-[rgba(9,29,42,0.16)] max-[1080px]:hidden"
          />
          <ol className="relative grid grid-cols-7 gap-x-[clamp(10px,1.6vw,22px)] max-[1080px]:grid-cols-4 max-[760px]:grid-cols-2">
            {CHAIN.map((step) => (
              <li key={step.no}>
                <span
                  aria-hidden="true"
                  className="block h-[26px] w-[26px] rounded-full border-2 border-primary bg-background"
                />
                <span className="mt-4 block font-sans text-[0.7rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  {step.no}
                </span>
                <span className="mt-1.5 block font-sans text-[1.05rem] leading-[1.1] font-extrabold uppercase [font-stretch:112%]">
                  {step.label}
                </span>
                <span className="mt-2 block text-[0.86rem] leading-[1.5] text-muted-foreground">
                  {step.copy}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
