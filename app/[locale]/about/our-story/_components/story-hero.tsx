import Image from "next/image";

const WRAP_CLASS = "mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  {
    label: "How the group is built",
    href: "/about/group-structure",
    variant: "glow",
  },
  { label: "Start a conversation", href: "/contact", variant: "ghost" },
];

export default function StoryHero() {
  return (
    <section
      aria-labelledby="story-hero-title"
      className="relative overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[30vw] -right-[26vw] h-[68vw] w-[68vw] rounded-full bg-[radial-gradient(circle,rgba(95,227,198,0.22),transparent_62%)] blur-[70px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-18vw] left-[-16vw] h-[46vw] w-[46vw] rounded-full bg-[radial-gradient(circle,rgba(218,156,67,0.16),transparent_64%)] blur-[80px]"
      />

      <div
        className={`relative grid grid-cols-[1.05fr_0.95fr] items-end gap-[clamp(32px,5vw,72px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(48px,7vw,96px)] max-[1080px]:grid-cols-1 max-[1080px]:gap-[clamp(30px,5vw,48px)] ${WRAP_CLASS}`}
      >
        <div>
          <p className="mb-[clamp(20px,3vw,30px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
            <span
              aria-hidden="true"
              className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
            />
            Our story
          </p>
          <h1
            id="story-hero-title"
            className="max-w-[15ch] font-sans text-[clamp(2.5rem,7.4vw,6.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
          >
            It started with <span className="text-accent">water.</span>
            <br />
            It became a platform.
          </h1>
          <p className="mt-[clamp(22px,3vw,30px)] max-w-[54ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.55] text-muted/85">
            Waterlight Group began as an engineering-led response to one problem
            — African cities could not finance, build or maintain the water
            their growth depended on. The same discipline now runs across eight
            business platforms and five operating regions.
          </p>
          <div className="mt-[clamp(28px,4vw,42px)] flex flex-wrap items-center gap-3">
            {CTAS.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={
                  cta.variant === "glow"
                    ? `${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2]`
                    : `${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`
                }
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        <figure>
          <div className="relative aspect-[16/11] overflow-hidden border border-accent/20">
            <Image
              src="/placeholders/story-hero-archive.png"
              alt="Placeholder artwork standing in for archival photography of Waterlight engineers on a water treatment plant"
              fill
              sizes="(max-width: 1080px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
            PLACEHOLDER — archival image slot. Replace with an approved founding
            photograph.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
