import ValueStages from "./value-stages";

export default function Investments() {
  return (
    <section
      id="investments"
      aria-labelledby="value-title"
      className="bg-secondary py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="max-w-[52ch]">
          <h2
            id="value-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            How we create
            <br />
            value
          </h2>
          <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal font-normal text-muted-foreground">
            One operating method, from raw opportunity to generational value.
            Select a stage to see what happens.
          </p>
        </div>
        <ValueStages />
      </div>
    </section>
  );
}
