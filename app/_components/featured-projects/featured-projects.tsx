import ProjectGrid from "./project-grid";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="max-w-[54ch]">
          <h2
            id="projects-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Featured
            <br />
            projects
          </h2>
          <p className="mt-5 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal font-normal text-muted-foreground">
            Public summaries by sector, geography and development stage.
            Detailed materials are released to qualified parties through the
            investor gateway.
          </p>
        </div>
        <ProjectGrid />
      </div>
    </section>
  );
}
