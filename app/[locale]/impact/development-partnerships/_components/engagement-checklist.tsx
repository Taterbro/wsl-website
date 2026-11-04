import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";

// PLACEHOLDER — readiness criteria are illustrative until approved partnership
// guidance is supplied.
const CRITERIA: {
  no: string;
  title: string;
  copy: string;
  ask: string;
}[] = [
  {
    no: "01",
    title: "Mandate",
    copy: "What your institution is mandated to fund, finance or deliver.",
    ask: "Mandate and instrument",
  },
  {
    no: "02",
    title: "Geography",
    copy: "Where the mandate can be deployed, and any corridor constraints.",
    ask: "Markets and regions",
  },
  {
    no: "03",
    title: "Stage",
    copy: "Whether you engage at concept, development, construction or operation.",
    ask: "Project stage",
  },
  {
    no: "04",
    title: "Timeline",
    copy: "The decision window, approval path and any reporting obligations.",
    ask: "Decision timeline",
  },
];

export default function EngagementChecklist() {
  return (
    <section
      aria-labelledby="checklist-title"
      className="border-y border-foreground/10 bg-secondary py-[clamp(64px,8vw,112px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-col gap-[clamp(18px,2.6vw,34px)] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[52ch]">
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                03 — First conversation
              </p>
              <h2
                id="checklist-title"
                className="mt-4 font-sans text-[clamp(2rem,4.6vw,3.8rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Bring the mandate.
                <br />
                We will bring the map.
              </h2>
            </div>

            <p className="max-w-[42ch] text-[0.78rem] leading-[1.6] text-foreground/60 lg:text-right">
              A useful first conversation needs four things. None of them is a
              pitch deck.
            </p>
          </div>

          <ol className="mt-[clamp(28px,4vw,46px)] grid list-none grid-cols-1 gap-px border border-foreground/15 bg-foreground/15 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {CRITERIA.map((item) => (
              <li
                key={item.no}
                className="flex flex-col bg-secondary p-[clamp(16px,2.3vw,26px)]"
              >
                <div className="flex items-center justify-between gap-3 border-b border-foreground/15 pb-3">
                  <span className="font-sans text-[0.68rem] font-extrabold tracking-[0.16em] text-chart-4 tabular-nums [font-stretch:112%]">
                    {item.no}
                  </span>
                  <span className="text-[0.52rem] font-semibold tracking-[0.12em] text-foreground/40 uppercase">
                    Required
                  </span>
                </div>
                <h3 className="mt-[clamp(14px,1.8vw,20px)] font-sans text-[clamp(1.1rem,1.6vw,1.35rem)] leading-[1.1] font-extrabold uppercase [font-stretch:112%]">
                  {item.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.82rem] leading-[1.55] text-foreground/65">
                  {item.copy}
                </p>
                <p className="mt-4 border-t border-foreground/10 pt-3 text-[0.58rem] font-semibold tracking-[0.08em] text-foreground/50 uppercase">
                  {item.ask}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-[clamp(20px,2.8vw,32px)] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[64ch] text-[0.66rem] leading-[1.55] text-foreground/60">
              If your institution does not fit one category, use the selector
              anyway. It will route the enquiry to the closest owner, or tell
              you honestly that there is no fit.
            </p>
            <Link
              href="/partner-with-us"
              className="inline-flex shrink-0 items-center gap-2 self-start border-b border-primary pb-1 text-[0.68rem] font-semibold tracking-[0.08em] text-foreground uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary sm:self-auto"
            >
              Route an enquiry
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <p className="mt-5 max-w-[78ch] text-[0.6rem] leading-[1.55] text-foreground/50">
            PLACEHOLDER — readiness criteria and routing language are
            illustrative until approved partnership guidance is supplied.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
