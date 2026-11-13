import { PRIVACY_SECTIONS } from "../_data/privacy";

export default function PrivacyBody() {
  return (
    <section
      id="privacy-policy"
      aria-labelledby="privacy-policy-heading"
      className="bg-background py-[clamp(56px,8vw,112px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[minmax(0,240px)_minmax(0,1fr)] items-start gap-[clamp(32px,6vw,96px)] max-[900px]:grid-cols-1">
          <aside className="max-[900px]:border-b max-[900px]:border-border max-[900px]:pb-6">
            <nav
              aria-label="On this page"
              className="lg:sticky lg:top-[104px] lg:max-h-[calc(100dvh-128px)] lg:overflow-y-auto lg:pr-2"
            >
              <h2
                id="privacy-policy-heading"
                className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase"
              >
                On this page
              </h2>
              <ol className="mt-4 grid grid-cols-2 gap-x-5 gap-y-1 max-[560px]:grid-cols-1 lg:flex lg:flex-col lg:gap-0 lg:border-l lg:border-border">
                {PRIVACY_SECTIONS.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-baseline gap-2.5 py-1.5 text-[0.82rem] leading-[1.4] text-muted-foreground transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:py-1.5 lg:pl-3"
                    >
                      <span
                        aria-hidden="true"
                        className="text-[0.62rem] font-semibold tracking-[0.1em] text-muted-foreground/50 tabular-nums group-hover:text-primary"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="max-w-[76ch]">
            {PRIVACY_SECTIONS.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="scroll-mt-32 border-t border-border pt-[clamp(28px,3.6vw,44px)] pb-[clamp(28px,3.6vw,44px)] first:border-t-0 first:pt-0 last:pb-0"
              >
                <div className="flex items-baseline gap-[clamp(12px,2vw,20px)]">
                  <span
                    aria-hidden="true"
                    className="font-sans text-[0.7rem] font-semibold tracking-[0.14em] text-primary tabular-nums"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2
                    id={`${section.id}-heading`}
                    className="font-sans text-[clamp(1.35rem,2.4vw,1.9rem)] leading-[1.1] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
                  >
                    {section.title}
                  </h2>
                </div>

                <div className="mt-[clamp(14px,2vw,20px)] space-y-4 text-[clamp(0.94rem,1.15vw,1rem)] leading-[1.72] text-muted-foreground">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.items ? (
                    <ul className="space-y-2.5 pt-1">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="relative pl-5 before:absolute before:top-[0.68em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-primary before:content-['']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                {section.note ? (
                  <p className="mt-5 border-l-2 border-accent bg-card px-4 py-3 text-[0.86rem] leading-[1.6] text-foreground/80">
                    {section.note}
                  </p>
                ) : null}
              </section>
            ))}

            <div className="mt-[clamp(32px,4vw,48px)] border-t border-border pt-5">
              <a
                href="#privacy-policy"
                className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.1em] text-primary uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-foreground"
              >
                <span aria-hidden="true">&uarr;</span>
                Back to top
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
