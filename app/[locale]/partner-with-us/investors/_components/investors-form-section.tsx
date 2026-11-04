import EnquiryForm from "@/components/enquiry/enquiry-form";
import { getEnquiryConfig } from "@/components/enquiry/route-configs";

export default function InvestorsForm() {
  const config = getEnquiryConfig("investors");
  return (
    <section
      id="enquiry"
      aria-labelledby="investors-form-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[980px] px-[clamp(20px,5vw,72px)]">
        <header className="max-w-[62ch]">
          <p className="mb-5 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
            <span aria-hidden="true" className="h-px w-[clamp(24px,4vw,56px)] bg-primary" />
            Enquiry
          </p>
          <h2
            id="investors-form-title"
            className="font-sans text-[clamp(2rem,4.8vw,3.8rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            {config.title}
          </h2>
          <p className="mt-4 text-[clamp(0.98rem,1.35vw,1.16rem)] leading-[1.65] text-muted-foreground">
            {config.subtitle}
          </p>
        </header>

        <div className="mt-[clamp(26px,3.6vw,40px)]">
          <EnquiryForm config={config} sourcePage="/partner-with-us/investors" />
        </div>

        <p className="mt-6 text-[0.76rem] leading-[1.6] text-muted-foreground">
          {/* PLACEHOLDER: legal sign-off required. */}
          By submitting, you agree to our{" "}
          <a
            href={config.privacyHref}
            className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
          >
            Privacy Policy
          </a>
          {config.disclaimerHref ? (
            <>
              {" "}
              and acknowledge the{" "}
              <a
                href={config.disclaimerHref}
                className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
              >
                Investment Disclaimer
              </a>
              .
            </>
          ) : (
            "."
          )}
        </p>
      </div>
    </section>
  );
}
