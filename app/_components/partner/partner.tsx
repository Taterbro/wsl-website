import PartnerPanel from "./partner-panel";

export default function Partner() {
  return (
    <section
      id="partner"
      aria-labelledby="partner-title"
      className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[30vw] -right-[24vw] h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(95,227,198,0.22),transparent_62%)] blur-[70px]"
      />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-[0.9fr_1.1fr] items-start gap-[clamp(30px,5vw,80px)] px-[clamp(20px,5vw,72px)] max-[1080px]:grid-cols-1 max-[1080px]:gap-[34px]">
        <PartnerPanel
          heading={
            <h2
              id="partner-title"
              className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Build with
              <br />
              Waterlight.
            </h2>
          }
          lede={
            <p className="mt-[22px] max-w-[64ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal font-normal text-muted/85">
              Whether you are investing, entering a new market, developing
              infrastructure, deploying technology or seeking a joint-venture
              partner, we are interested in opportunities where long-term value
              can be built together.
            </p>
          }
        />
      </div>
    </section>
  );
}
