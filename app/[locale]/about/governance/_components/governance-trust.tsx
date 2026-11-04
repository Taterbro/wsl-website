import Reveal from "../../../(home)/_components/reveal";
import { CLAIM_MATRIX, GOVERNANCE_ROLES } from "../_data/governance";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

export default function GovernanceTrust() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="governance-trust-title"
        className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(30px,5vw,72px)] max-[980px]:grid-cols-1">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                04 — Trust &amp; publishing governance
              </p>
              <h2
                id="governance-trust-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Nothing goes
                <br />
                live unreviewed.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
                Before any material claim is published, it must have an owner, a
                source and an approval status. If something cannot be
                verified, it is labelled — or it is not published.
              </p>

              <div className="mt-[clamp(26px,3.4vw,38px)] border border-[rgba(9,29,42,0.16)]">
                <div className="grid grid-cols-[0.9fr_1.1fr] border-b border-[rgba(9,29,42,0.16)] bg-muted px-[clamp(16px,2.2vw,26px)] py-3 max-[680px]:hidden">
                  <span className="text-[0.66rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Claim type
                  </span>
                  <span className="text-[0.66rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Approval requirement
                  </span>
                </div>
                {CLAIM_MATRIX.map((row) => (
                  <div
                    key={row.claim}
                    className="grid grid-cols-[0.9fr_1.1fr] gap-x-[clamp(12px,2vw,26px)] border-b border-[rgba(9,29,42,0.16)] px-[clamp(16px,2.2vw,26px)] py-[clamp(12px,1.6vw,16px)] last:border-b-0 max-[680px]:grid-cols-1 max-[680px]:gap-y-2"
                  >
                    <span className="text-[0.88rem] font-semibold">
                      {row.claim}
                    </span>
                    <span className="text-[0.88rem] leading-[1.5] text-muted-foreground">
                      {row.approval}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[0.76rem] leading-[1.55] text-muted-foreground/80">
                PLACEHOLDER — the matrix reflects the Trust Centre standard.
                Owners and routing must be assigned inside the business before
                launch.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="border border-[rgba(9,29,42,0.16)] bg-card p-[clamp(20px,2.8vw,34px)]">
                <p className="mb-6 flex items-center gap-3 text-[0.76rem] font-semibold tracking-[0.1em] text-primary uppercase">
                  <span
                    aria-hidden="true"
                    className="h-px w-[clamp(20px,3vw,42px)] bg-primary/45"
                  />
                  05 — Who this speaks to
                </p>
                <h3 className="font-sans text-[clamp(1.4rem,2.8vw,2.2rem)] leading-[1.06] font-extrabold uppercase [font-stretch:116%]">
                  Governed for
                  <br />
                  scrutiny.
                </h3>
                <p className="mt-4 max-w-[48ch] text-[0.95rem] leading-[1.6] text-muted-foreground">
                  Governments, institutions and investors expect a group to be
                  able to show how decisions are made. We would rather show the
                  framework than overstate the roster.
                </p>
                <ul className="mt-[clamp(20px,2.8vw,28px)] list-none p-0">
                  {GOVERNANCE_ROLES.map((role) => (
                    <li key={role.role} className="border-t border-[rgba(9,29,42,0.16)]">
                      <a
                        href={role.href}
                        className="group flex items-start gap-[clamp(12px,1.6vw,20px)] py-[clamp(14px,2vw,22px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                      >
                        <span className="flex-1">
                          <span className="block font-sans text-[1rem] leading-[1.16] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-primary [font-stretch:114%]">
                            {role.role}
                          </span>
                          <span className="mt-1.5 block max-w-[38ch] text-[0.88rem] leading-[1.55] text-muted-foreground">
                            {role.copy}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="mt-0.5 text-primary transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                  <li className="border-t border-[rgba(9,29,42,0.16)]" />
                </ul>
              </div>

              <div className="mt-[clamp(16px,2.2vw,22px)] border border-[rgba(9,29,42,0.16)] bg-sidebar p-[clamp(20px,2.6vw,30px)] text-muted">
                <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
                  Build with Waterlight
                </p>
                <h4 className="mt-3 font-sans text-[clamp(1.25rem,2.2vw,1.8rem)] leading-[1.08] font-extrabold uppercase [font-stretch:114%]">
                  Need a governed partner?
                </h4>
                <p className="mt-3 max-w-[44ch] text-[0.92rem] leading-[1.6] text-muted/80">
                  Start a conversation through the route that fits your role.
                  Confidential material is released only through an authenticated
                  process.
                </p>
                <a
                  href="/contact"
                  className={`${BTN_BASE_CLASS} mt-[clamp(18px,2.4vw,26px)] bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`}
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
