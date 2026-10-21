import WswisStages from "./wswis-stages";

const APPLICATIONS = [
  { label: "Smart cities", highlight: true },
  { label: "Municipalities", highlight: false },
  { label: "Healthcare", highlight: false },
  { label: "Education", highlight: false },
  { label: "Housing", highlight: false },
  { label: "Agriculture", highlight: false },
  { label: "Industry", highlight: false },
  { label: "Communities", highlight: false },
];

export default function Innovation() {
  return (
    <section
      id="innovation"
      aria-labelledby="wswis-title"
      className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[1.1fr_0.9fr] items-end gap-[clamp(28px,5vw,80px)] max-[1080px]:grid-cols-1 max-[1080px]:gap-[34px]">
          <div>
            <h2
              id="wswis-title"
              className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Intelligent water
              <br />
              infrastructure
            </h2>
            <p className="mt-5 max-w-[64ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal font-normal text-muted/72">
              WSWIS — the Waterlight Smart Water Infrastructure System — is our
              flagship platform for a changing world: solar-powered,
              instrumented and predictive end to end.
            </p>
          </div>
          <div
            aria-label="Applied across"
            className="mt-5 flex flex-wrap gap-2"
          >
            {APPLICATIONS.map((app) => (
              <span
                key={app.label}
                className={
                  app.highlight
                    ? "rounded-[2px] border border-chart-4/16 px-[13px] py-[7px] text-[0.74rem] tracking-[0.04em] text-chart-4"
                    : "rounded-[2px] border border-accent/20 px-[13px] py-[7px] text-[0.74rem] tracking-[0.04em] text-muted/82"
                }
              >
                {app.label}
              </span>
            ))}
          </div>
        </div>
        <WswisStages />
      </div>
    </section>
  );
}
