import Reveal from "../../../(home)/_components/reveal";
import type { ClimateEsgSolutionsSectorConversion } from "@/lib/cms/generated";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const FALLBACK_HEADING = "Build resilience\ninto the asset.";

const FALLBACK_DESCRIPTION =
  "Bring an asset, a portfolio or a climate requirement. We will help structure the lens around it.";

const ROLES: { number: string; title: string; copy: string; href: string }[] = [
  {
    number: "01",
    title: "Capital partners",
    copy: "Fund resilient assets and transition infrastructure.",
    href: "/investments/opportunities",
  },
  {
    number: "02",
    title: "Asset owners & operators",
    copy: "Retrofit, optimise and renew existing portfolios.",
    href: "/contact",
  },
  {
    number: "03",
    title: "Governments & cities",
    copy: "Build climate resilience into public infrastructure.",
    href: "/contact",
  },
  {
    number: "04",
    title: "Technology & ESG partners",
    copy: "Bring clean technology and measurement capability.",
    href: "/contact",
  },
];

export default function SectorConversion({
  data,
}: {
  data: ClimateEsgSolutionsSectorConversion;
}) {
  const heading = data.label || FALLBACK_HEADING;
  const headingLines = heading.split("\n");

  return (
    <section
      aria-labelledby="climate-conversion-title"
      className="relative isolate overflow-hidden bg-primary text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[clamp(80px,14vw,220px)] -right-[clamp(80px,14vw,220px)] size-[clamp(280px,44vw,620px)] rounded-full border border-muted/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[clamp(30px,7vw,120px)] -right-[clamp(30px,7vw,120px)] size-[clamp(180px,28vw,400px)] rounded-full border border-accent/15"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,140px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="flex items-center gap-3 text-[0.66rem] font-semibold tracking-[0.18em] text-accent uppercase">
                <span aria-hidden="true" className="h-px w-7 bg-accent" />
                07 — Build with Waterlight
              </p>
              <h2
                id="climate-conversion-title"
                className="mt-4 max-w-[12ch] font-sans text-[clamp(2.1rem,4.8vw,4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                {headingLines.length === 2 ? (
                  <>
                    {headingLines[0]}
                    <br />
                    {headingLines[1]}
                  </>
                ) : (
                  heading
                )}
              </h2>
              <p className="mt-5 max-w-[44ch] text-[clamp(0.95rem,1.25vw,1.05rem)] leading-[1.6] text-muted/75">
                {data.description || FALLBACK_DESCRIPTION}
              </p>
              <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className={`${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`}
                >
                  Start a conversation
                </a>
                <a
                  href="/impact/sustainability"
                  className={`${BTN_BASE_CLASS} border-muted/40 bg-transparent text-muted hover:bg-muted hover:text-primary`}
                >
                  Impact &amp; sustainability
                </a>
              </div>
            </div>

            <ul className="border-t border-muted/20">
              {ROLES.map((role) => (
                <li key={role.number}>
                  <div className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-[clamp(14px,2.4vw,26px)] gap-y-2 border-b border-muted/20 py-[clamp(16px,2.2vw,24px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                    <span
                      aria-hidden="true"
                      className="pt-1 font-sans text-[0.6rem] font-semibold tracking-[0.14em] text-accent uppercase tabular-nums"
                    >
                      {role.number}
                    </span>
                    <div>
                      <h3 className="font-sans text-[clamp(1.02rem,1.7vw,1.35rem)] leading-[1.15] font-extrabold tracking-[0.005em] uppercase [font-stretch:110%] transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:text-accent">
                        {role.title}
                      </h3>
                      <p className="mt-1.5 max-w-[42ch] text-[0.8rem] leading-[1.55] text-muted/65">
                        {role.copy}
                      </p>
                    </div>
                    {/* <span
                      aria-hidden="true"
                      className="pt-0.5 text-muted/60 transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:text-accent"
                    >
                      ↗
                    </span> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
