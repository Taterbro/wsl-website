import WorldMap from "./world-map";

export default function GlobalMarkets() {
  return (
    <section
      id="markets"
      aria-labelledby="markets-title"
      className="bg-sidebar-accent py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="mb-[clamp(30px,4vw,48px)] max-w-[56ch]">
          <h2
            id="markets-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Global markets
          </h2>
          <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal font-normal text-muted/72">
            Operations, partnerships, projects and target markets are shown
            separately. We never present target markets as presence.
          </p>
        </div>
        <WorldMap />
      </div>
    </section>
  );
}
