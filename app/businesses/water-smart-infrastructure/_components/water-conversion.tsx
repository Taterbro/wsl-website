import Reveal from "../../../(home)/_components/reveal";
import { ROLE_ROUTES } from "../_data/water";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Partner with us", href: "/contact", variant: "glow" },
  { label: "Investment opportunities", href: "/investments/opportunities", variant: "ghost" },
];

export default function WaterConversion() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="water-partner"
        aria-labelledby="water-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[26vw] -left-[18vw] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.16),transparent_62%)] blur-[80px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-x-[clamp(30px,6vw,90px)] gap-y-[clamp(22px,3vw,34px)]">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                07 — Build with Waterlight
              </p>
              <h2
                id="water-conversion-title"
                className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Bring us the
                <br />
                water problem.
              </h2>
            </div>

            <div className="max-w-[42ch] pb-[clamp(2px,1vw,10px)]">
              <p className="text-[clamp(1.02rem,1.4vw,1.2rem)] leading-[1.6] text-muted/80">
                A utility under pressure, a site without reliable supply, a
                project that needs structuring — tell us where the chain breaks,
                and we will tell you what it takes to fix it.
              </p>
              <div className="mt-[clamp(20px,2.6vw,28px)] flex flex-wrap items-center gap-3">
                {CTAS.map((cta) => (
                  <a
                    key={cta.href}
                    href={cta.href}
                    className={
                      cta.variant === "glow"
                        ? `${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`
                        : `${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`
                    }
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[clamp(34px,5vw,56px)] grid grid-cols-5 border-t border-b border-accent/20 max-[1100px]:grid-cols-2 max-[620px]:grid-cols-1">
            {ROLE_ROUTES.map((role, index) => (
              <a
                key={role.role}
                href={role.href}
                className="group flex flex-col gap-2.5 border-accent/20 py-[clamp(18px,2.4vw,28px)] pr-[clamp(12px,2vw,28px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring max-[1100px]:border-b"
              >
                <span className="font-sans text-[0.64rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:112%]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-[clamp(0.92rem,1.3vw,1.08rem)] leading-[1.2] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:112%]">
                  {role.role}
                </span>
                <span className="text-[0.8rem] leading-[1.55] text-muted/60">
                  {role.copy}
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[0.66rem] font-semibold tracking-[0.06em] text-accent uppercase">
                  {role.link}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-6 max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
            Confidential investment material is never published on this website.
            Approved summaries are shown here, with full documentation released
            only through an authenticated process.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
