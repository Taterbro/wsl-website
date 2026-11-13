import Link from "next/link";

import {
  PRIVACY_LAST_REVIEWED,
  PRIVACY_META,
  PRIVACY_SUMMARY,
  PRIVACY_UPDATED_ISO,
} from "../_data/privacy";

export default function PrivacyHero() {
  return (
    <section
      aria-labelledby="privacy-title"
      className="border-b border-border bg-background pt-[clamp(104px,11vw,156px)] pb-[clamp(40px,5.5vw,76px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium tracking-[0.08em] text-muted-foreground uppercase">
            <li>
              <Link
                href="/"
                className="transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>Legal</li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground">
              Privacy
            </li>
          </ol>
        </nav>

        <div className="mt-[clamp(28px,4vw,48px)] grid grid-cols-[1.35fr_0.65fr] items-start gap-[clamp(28px,5vw,72px)] max-[900px]:grid-cols-1">
          <div>
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary"
              />
              Legal &middot; Privacy
            </p>

            <h1
              id="privacy-title"
              className="mt-[clamp(18px,2.6vw,28px)] font-sans text-[clamp(2.9rem,8vw,6.6rem)] leading-[0.9] font-extrabold tracking-[-0.015em] uppercase [font-stretch:118%]"
            >
              Privacy
              <br />
              <span className="text-primary">Policy.</span>
            </h1>

            <p className="mt-[clamp(20px,2.8vw,32px)] max-w-[58ch] text-[clamp(1rem,1.35vw,1.16rem)] leading-[1.65] text-muted-foreground">
              {PRIVACY_SUMMARY}
            </p>

            <div className="mt-[clamp(24px,3.4vw,36px)] flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.72rem] font-semibold tracking-[0.1em] uppercase">
              <a
                href="#privacy-policy"
                className="inline-flex items-center gap-2 text-primary transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-foreground"
              >
                Read the policy
                <span aria-hidden="true">&darr;</span>
              </a>
              <a
                href="#privacy-contact"
                className="text-muted-foreground transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
              >
                Contact the privacy team
              </a>
            </div>
          </div>

          <aside aria-label="Policy details" className="w-full">
            <dl className="grid grid-cols-1 gap-px border border-border bg-border">
              {PRIVACY_META.map((item, index) => (
                <div
                  key={item.label}
                  className="bg-card px-[clamp(16px,2vw,24px)] py-[clamp(14px,1.8vw,20px)]"
                >
                  <dt className="text-[0.62rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-sans text-[clamp(0.86rem,1.15vw,0.98rem)] leading-[1.35] font-semibold text-foreground">
                    {item.label === "Last updated" ? (
                      <time dateTime={PRIVACY_UPDATED_ISO}>{item.value}</time>
                    ) : (
                      item.value
                    )}
                  </dd>
                  {index === 0 ? (
                    <p className="mt-2 text-[0.68rem] leading-[1.5] text-muted-foreground/80">
                      {PRIVACY_LAST_REVIEWED}
                    </p>
                  ) : null}
                </div>
              ))}
            </dl>

            <p className="mt-4 border-l-2 border-accent pl-4 text-[0.76rem] leading-[1.55] text-muted-foreground">
              PLACEHOLDER — this is illustrative copy for layout review. It must
              be reviewed by qualified legal counsel before publication.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
