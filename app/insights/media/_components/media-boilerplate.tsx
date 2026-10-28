import Reveal from "../../../(home)/_components/reveal";

export default function MediaBoilerplate() {
  return (
    <section
      aria-labelledby="media-boilerplate-title"
      className="bg-sidebar py-[clamp(56px,8vw,112px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="mx-auto max-w-[980px]">
            <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Boilerplate
            </p>
            <h2
              id="media-boilerplate-title"
              className="mt-3 font-sans text-[0.78rem] font-semibold tracking-[0.14em] text-muted/50 uppercase"
            >
              About Waterlight Group
            </h2>
            <blockquote className="mt-[clamp(16px,2.4vw,26px)]">
              <p className="font-sans text-[clamp(1.35rem,2.8vw,2.35rem)] leading-[1.28] font-semibold tracking-[-0.01em] text-muted [font-stretch:104%]">
                “Waterlight Group is an African-founded global enterprise
                platform that builds, invests in and scales businesses,
                infrastructure and technologies.”
              </p>
            </blockquote>
            <p className="mt-[clamp(16px,2.2vw,24px)] max-w-[56ch] text-[0.76rem] leading-[1.55] text-muted/45">
              PLACEHOLDER — for media use. Confirm current wording and any
              descriptor before publication.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
