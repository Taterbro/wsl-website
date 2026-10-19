const WRAP_CLASS = "mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]";

const CAUSTIC_CLASSES = [
  "left-[-18vw] top-[-24vw] h-[80vw] w-[80vw] bg-[radial-gradient(circle_at_50%_50%,rgba(95,227,198,0.55),transparent_62%)] animate-drift-1",
  "right-[-14vw] top-[-8vw] h-[70vw] w-[70vw] bg-[radial-gradient(circle_at_50%_50%,rgba(20,96,107,0.85),transparent_60%)] animate-drift-2",
  "left-[22vw] bottom-[-30vw] h-[60vw] w-[60vw] bg-[radial-gradient(circle_at_50%_50%,rgba(95,227,198,0.32),transparent_60%)] animate-drift-3",
  "right-[12vw] bottom-[-16vw] h-[40vw] w-[40vw] bg-[radial-gradient(circle_at_50%_50%,rgba(218,156,67,0.2),transparent_60%)] animate-drift-4",
];

const DESCRIPTOR_WORDS = [
  "Investment",
  "Industry",
  "Innovation",
  "Infrastructure",
  "Impact",
];

const HEADLINE_LINES = ["Building a", "Sustainable", "Future."];

const LINE_DELAYS = ["delay-[0s]", "delay-[0.12s]", "delay-[0.24s]"];

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Explore Waterlight Group", href: "#group", variant: "glow" },
  { label: "Investment Opportunities", href: "#investments", variant: "ghost" },
  { label: "Partner With Us", href: "#partner", variant: "ghost" },
];

const GRAIN_DATA_URI =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";
export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-sidebar pb-[clamp(38px,6vw,72px)] text-muted lg:pt-[80px]"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {CAUSTIC_CLASSES.map((classes) => (
          <div
            key={classes}
            className={`absolute rounded-full opacity-55 blur-[60px] mix-blend-screen will-change-transform ${classes}`}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-b from-sidebar/55 via-sidebar/15 to-sidebar/90" />
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{ backgroundImage: GRAIN_DATA_URI }}
        />
      </div>

      <div className={`relative z-2 ${WRAP_CLASS}`}>
        <div className="mb-[clamp(24px,4vw,44px)] flex flex-wrap items-center gap-[clamp(12px,2vw,26px)] text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-accent max-[760px]:gap-[10px] max-[760px]:text-[0.64rem]">
          {DESCRIPTOR_WORDS.map((word) => (
            <span
              key={word}
              className="flex items-center gap-[clamp(12px,2vw,26px)] after:block after:h-[5px] after:w-[5px] after:rounded-full after:bg-chart-4 after:content-[''] last:after:hidden max-[760px]:gap-[10px]"
            >
              {word}
            </span>
          ))}
        </div>

        <h1 className="mb-[clamp(22px,3vw,34px)] max-w-[16ch] font-sans text-[clamp(2.7rem,8.6vw,7.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:120%]">
          {HEADLINE_LINES.map((line, index) => (
            <span key={line} className="block overflow-hidden">
              <span
                className={`block translate-y-[105%] animate-rise motion-reduce:translate-y-0 ${LINE_DELAYS[index]}`}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p className="mb-[clamp(28px,4vw,40px)] max-w-[60ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.55] text-muted/86 opacity-0 animate-fade-in delay-[0.6s] motion-reduce:opacity-100">
          Waterlight Group is an African-founded global enterprise platform
          investing in, developing and scaling businesses, infrastructure and
          technologies that address critical needs and create sustainable
          economic value.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {CTAS.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              className={
                cta.variant === "glow"
                  ? `${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2]`
                  : `${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`relative z-2 mt-[clamp(40px,6vw,70px)] flex flex-wrap items-end justify-between gap-6 border-t border-accent/20 pt-[18px] text-[0.74rem] tracking-[0.14em] uppercase text-muted/60 ${WRAP_CLASS}`}
      >
        <span>African roots. Global reach.</span>
      </div>
    </section>
  );
}
