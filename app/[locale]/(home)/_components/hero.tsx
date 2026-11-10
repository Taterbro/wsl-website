import type { HomeHomeHero } from "@/lib/cms/generated";

const WRAP_CLASS = "mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]";

const DESCRIPTOR_WORDS = [
  "Investment",
  "Industry",
  "Innovation",
  "Infrastructure",
  "Impact",
];

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Explore Waterlight Group", href: "#group", variant: "glow" },
  { label: "Investment Opportunities", href: "#investments", variant: "ghost" },
  { label: "Partner With Us", href: "#partner", variant: "ghost" },
];

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[8px] whitespace-nowrap rounded-[2px] border border-transparent px-[22px] py-[12px] font-sans text-[0.72rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const FALLBACK_HEADING = "Building Africa's Industrial Future";
const FALLBACK_DESCRIPTION =
  "Waterlight Group invests across industry, infrastructure and innovation to create lasting impact for African communities and global partners.";

export default function Hero({ data }: { data: HomeHomeHero }) {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[clamp(520px,min(100svh,56.25vw),840px)] flex-col justify-end overflow-hidden bg-sidebar pb-[clamp(28px,4.5vw,56px)] text-muted pt-[64px]"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {data.video ? (
          <video
            className="absolute inset-0 h-full w-full object-contain object-top md:object-center"
            src={data.video}
            poster={data.poster?.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-b from-sidebar/55 via-sidebar/15 to-sidebar/90" />
      </div>

      <div className={`relative z-2 ${WRAP_CLASS}`}>
        <div className="mb-[clamp(18px,3vw,32px)] flex flex-wrap items-center gap-[clamp(10px,1.6vw,22px)] text-[0.64rem] font-semibold tracking-[0.16em] uppercase text-accent max-[760px]:gap-[9px] max-[760px]:text-[0.58rem]">
          {DESCRIPTOR_WORDS.map((word) => (
            <span
              key={word}
              className="flex items-center gap-[clamp(10px,1.6vw,22px)] after:block after:h-[4px] after:w-[4px] after:rounded-full after:bg-chart-4 after:content-[''] last:after:hidden max-[760px]:gap-[9px]"
            >
              {word}
            </span>
          ))}
        </div>

        <h1 className="mb-[clamp(16px,2.4vw,28px)] max-w-[16ch] font-sans text-[clamp(2.1rem,6.2vw,5.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:120%]">
          <span className="block overflow-hidden">
            <span
              className={`block translate-y-[105%] animate-rise motion-reduce:translate-y-0`}
            >
              {data.heading || FALLBACK_HEADING}
            </span>
          </span>
        </h1>

        <p className="mb-[clamp(20px,3vw,32px)] max-w-[60ch] text-[clamp(0.9rem,1.15vw,1.02rem)] leading-[1.5] text-muted/86 opacity-0 animate-fade-in delay-[0.6s] motion-reduce:opacity-100">
          {data.description || FALLBACK_DESCRIPTION}
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
        className={`relative z-2 mt-[clamp(28px,4vw,48px)] flex flex-wrap items-end justify-between gap-6 border-t border-accent/20 pt-[16px] text-[0.68rem] tracking-[0.14em] uppercase text-muted/60 ${WRAP_CLASS}`}
      >
        <span>African roots. Global reach.</span>
      </div>
    </section>
  );
}
