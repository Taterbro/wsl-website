import { PRIVACY_CONTACT } from "../_data/privacy";

const DETAILS: { label: string; value: string; href?: string }[] = [
  {
    label: "Email",
    value: PRIVACY_CONTACT.email,
    href: `mailto:${PRIVACY_CONTACT.email}`,
  },
  { label: "Post", value: PRIVACY_CONTACT.address },
  { label: "Response", value: PRIVACY_CONTACT.response },
];

export default function PrivacyContact() {
  return (
    <section
      id="privacy-contact"
      aria-labelledby="privacy-contact-title"
      className="scroll-mt-24 bg-sidebar py-[clamp(56px,8vw,104px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[0.9fr_1.1fr] items-start gap-[clamp(28px,5vw,80px)] max-[900px]:grid-cols-1">
          <div>
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              Privacy enquiries
            </p>
            <h2
              id="privacy-contact-title"
              className="mt-[clamp(16px,2.4vw,26px)] max-w-[14ch] font-sans text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Questions about your data?
            </h2>
            <p className="mt-5 max-w-[44ch] text-[clamp(0.94rem,1.2vw,1.05rem)] leading-[1.65] text-muted/75">
              Tell us what you need and we will route your request to the
              responsible privacy contact.
            </p>
          </div>

          <div className="border border-accent/20">
            <dl className="grid grid-cols-1 gap-px bg-accent/20">
              {DETAILS.map((detail) => (
                <div
                  key={detail.label}
                  className="grid grid-cols-[120px_1fr] gap-4 bg-sidebar px-[clamp(16px,2.4vw,28px)] py-[clamp(16px,2vw,22px)] max-[560px]:grid-cols-1 max-[560px]:gap-1.5"
                >
                  <dt className="text-[0.62rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                    {detail.label}
                  </dt>
                  <dd className="text-[0.92rem] leading-[1.55] break-words text-muted/85">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-accent/20 px-[clamp(16px,2.4vw,28px)] py-4 text-[0.72rem] leading-[1.55] text-muted/50">
              PLACEHOLDER — confirm the privacy mailbox and postal address before
              publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
