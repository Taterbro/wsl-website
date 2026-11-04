import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const STEPS: { no: string; title: string; copy: string }[] = [
  {
    no: "01",
    title: "Pick a route",
    copy: "Choose the audience that fits your institution. The form adapts to that role.",
  },
  {
    no: "02",
    title: "We review the detail",
    copy: "The enquiry goes to the team that owns the relationship — not a shared inbox.",
  },
  {
    no: "03",
    title: "A named owner responds",
    copy: "You hear back with the next useful step, or an honest no.",
  },
];

export default function PartnershipsConversion() {
  return (
    <Reveal>
      <section
        aria-labelledby="partnerships-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[20vw] -bottom-[24vw] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[70px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="max-w-[58ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              05 — Build with Waterlight
            </p>
            <h2
              id="partnerships-conversion-title"
              className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Start with
              <br />
              the category.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[54ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted/80">
              Choose the route that matches your institution. The form adapts to
              your role, and the enquiry goes to the team that owns that
              relationship.
            </p>
            <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap items-center gap-3">
              <Link
                href="/partner-with-us"
                className={`${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`}
              >
                Partner with us
              </Link>
              <Link
                href="/contact"
                className={`${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`}
              >
                Contact the group
              </Link>
            </div>
          </div>

          <ol className="mt-[clamp(34px,5vw,58px)] grid list-none grid-cols-1 gap-px border border-accent/20 bg-accent/20 p-0 md:grid-cols-3">
            {STEPS.map((step) => (
              <li
                key={step.no}
                className="flex flex-col bg-sidebar p-[clamp(16px,2.3vw,26px)]"
              >
                <span className="font-sans text-[0.62rem] font-extrabold tracking-[0.16em] text-accent tabular-nums [font-stretch:112%]">
                  {step.no}
                </span>
                <h3 className="mt-4 font-sans text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.15] font-extrabold uppercase [font-stretch:112%]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.8rem] leading-[1.55] text-muted/60">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-[clamp(22px,3vw,34px)] max-w-[78ch] text-[0.64rem] leading-[1.55] text-muted/45">
            PLACEHOLDER — routing language requires owner approval. Nothing
            confidential is shared through the public forms.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
