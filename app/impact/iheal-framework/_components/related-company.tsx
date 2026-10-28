import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";

export default function RelatedCompany() {
  return (
    <section
      id="related-company"
      aria-labelledby="related-company-title"
      className="bg-background py-[clamp(56px,7vw,96px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="border-y border-foreground/15">
            <div className="grid gap-[clamp(18px,3vw,36px)] py-[clamp(20px,3.2vw,34px)] lg:grid-cols-[0.32fr_1fr_auto] lg:items-center">
              <div>
                <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-foreground/50 uppercase">
                  Related company
                </p>
                <p className="mt-1.5 text-[0.62rem] font-semibold tracking-[0.08em] text-foreground/40 uppercase">
                  Separate entity
                </p>
              </div>

              <div>
                <h2
                  id="related-company-title"
                  className="font-sans text-[clamp(1.3rem,2.6vw,2.2rem)] leading-[1.05] font-extrabold tracking-[-0.005em] uppercase [font-stretch:110%]"
                >
                  Waterlight iHEAL Global Limited
                </h2>
                <p className="mt-2 max-w-[64ch] text-[clamp(0.8rem,1.05vw,0.92rem)] leading-[1.55] text-foreground/60">
                  A separate company. The iHEAL framework is not its offering,
                  product or service line, and this page does not describe its
                  operations.
                </p>
              </div>

              <Link
                href="/companies/waterlight-iheal-global"
                className="inline-flex w-fit items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-foreground/25 px-[clamp(16px,2.2vw,22px)] py-[clamp(10px,1.1vw,13px)] font-sans text-[0.72rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard) hover:bg-foreground hover:text-background lg:justify-self-end"
              >
                Company page
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
