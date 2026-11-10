import type { OurStoryStoryFounder } from "@/lib/cms/generated";

const LINKS: { label: string; href: string }[] = [
  { label: "Founder & Group CEO", href: "/leadership/founder-group-ceo" },
  { label: "Executive leadership", href: "/leadership/executive-leadership" },
  { label: "Governance", href: "/about/governance" },
];

const FALLBACK_HEADING =
  "“The value of life is determined by the problems you solve for others.”";

const FALLBACK_ATTRIBUTION = "Founder & Group CEO — Waterlight Group";

const FALLBACK_BODY =
  "That is why the group builds before it buys, and why each platform is measured on the lives and livelihoods it changes — not only on the return it produces.";

const FALLBACK_IMAGE_ALT =
  "Placeholder artwork standing in for an approved portrait of the Founder and Group CEO";

export default function StoryFounder({
  data,
}: {
  data: OurStoryStoryFounder;
}) {
  const imageAlt = data.image
    ? data.image.alt || data.image_alt || FALLBACK_IMAGE_ALT
    : "";

  return (
    <section
      id="story-founder"
      aria-labelledby="story-founder-title"
      className="bg-sidebar-accent py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[0.75fr_1.25fr] items-center gap-[clamp(30px,5vw,80px)] px-[clamp(20px,5vw,72px)] max-[1080px]:grid-cols-1">
        <figure>
          <div className="relative aspect-[4/5] overflow-hidden border border-accent/20">
            {data.image ? (
              <div
                role={imageAlt ? "img" : undefined}
                aria-label={imageAlt || undefined}
                aria-hidden={imageAlt ? undefined : true}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${data.image.url})` }}
              />
            ) : null}
          </div>
          {data.image ? (
            <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
              PLACEHOLDER — approved portrait slot. Published only with written
              consent.
            </figcaption>
          ) : null}
        </figure>

        <div>
          <p className="mb-6 text-[0.72rem] font-semibold tracking-[0.14em] text-accent uppercase">
            The conviction behind the group
          </p>
          <blockquote>
            <p
              id="story-founder-title"
              className="font-sans text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.06] font-extrabold tracking-[-0.01em] uppercase [font-stretch:112%]"
            >
              {data.heading || FALLBACK_HEADING}
            </p>
            <footer className="mt-6 text-[0.78rem] font-medium tracking-[0.1em] text-muted/65 uppercase">
              {data.attribution || FALLBACK_ATTRIBUTION}
            </footer>
          </blockquote>
          <p className="mt-7 max-w-[56ch] text-[1rem] leading-[1.6] text-muted/80">
            {data.body || FALLBACK_BODY}
          </p>
          <ul className="mt-8 flex list-none flex-wrap gap-x-[clamp(18px,3vw,40px)] gap-y-3 p-0">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent"
                >
                  {link.label}
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
