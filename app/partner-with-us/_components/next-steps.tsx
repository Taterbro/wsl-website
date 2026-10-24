import Link from "next/link";
import Reveal from "@/app/(home)/_components/reveal";

const STEPS: { title: string; copy: string }[] = [
  {
    title: "You pick a route",
    copy: "Choose the audience that fits you best. The form adapts to that role.",
  },
  {
    title: "We read the detail",
    copy: "Your enquiry is reviewed by the team that owns the relationship — not a shared inbox.",
  },
  {
    title: "The right person responds",
    copy: "A named owner comes back to you with the next useful step, or an honest no.",
  },
];

const SECONDARY_LINKS: { label: string; href: string }[] = [
  { label: "Careers", href: "/careers" },
  { label: "Newsroom", href: "/insights/media" },
  { label: "Contact & global offices", href: "/contact" },
];

export default function NextSteps() {
  return (
    <section
      aria-labelledby="next-steps-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="grid gap-[clamp(30px,6vw,80px)] lg:grid-cols-[0.8fr_1.2fr] motion-reduce:translate-y-0 motion-reduce:transition-none">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-[clamp(24px,4vw,56px)] bg-primary" />
              What happens next
            </p>
            <h2
              id="next-steps-title"
              className="max-w-[13ch] font-sans text-[clamp(2.1rem,5.4vw,4.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              A short,
              <br />
              honest path.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[clamp(0.98rem,1.3vw,1.12rem)] leading-[1.65] text-muted-foreground">
              No automated access, no promises. Just a direct route to the team
              that can say yes, ask better questions, or point you elsewhere.
            </p>
          </div>

          <ol className="list-none p-0">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[auto_1fr] gap-[clamp(16px,2.4vw,28px)] border-t border-border py-[clamp(20px,2.8vw,32px)] last:border-b"
              >
                <span className="pt-1 font-sans text-[0.78rem] font-extrabold tracking-[0.16em] text-primary [font-stretch:112%]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-sans text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.15] font-extrabold uppercase [font-stretch:112%]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-[52ch] text-[0.94rem] leading-[1.6] text-muted-foreground">
                    {step.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-[clamp(36px,5vw,64px)] flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
            {SECONDARY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.82rem] font-semibold tracking-[0.04em] text-muted-foreground uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="max-w-[56ch] text-[0.74rem] leading-[1.55] text-muted-foreground">
            {/* PLACEHOLDER: legal review required for consent and cross-border data. */}
            Nothing confidential is shared through these forms.{" "}
            <Link
              href="/legal/investment-disclaimer"
              className="underline decoration-border underline-offset-4 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
            >
              Investment disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
