import type { Business, HomeBusinessPlatforms } from "@/lib/cms/generated";

import BusinessRail, { type Sector } from "./business-rail";

const FALLBACK_BACKGROUND =
  "radial-gradient(120% 90% at 80% 0%, rgba(95, 227, 198, 0.32), transparent 60%), linear-gradient(160deg, #0a2a33, #06181f)";

function toSectors(businesses: Business[]): Sector[] {
  return businesses.map((business, index) => ({
    no: String(index + 1).padStart(2, "0"),
    title: business.title || business.postTitle,
    description: business.description,
    tag: business.tags,
    background: business.image
      ? `linear-gradient(160deg, rgba(6, 24, 31, 0.55), rgba(6, 24, 31, 0.85)), url(${business.image.url}) center/cover no-repeat`
      : FALLBACK_BACKGROUND,
  }));
}

export default function Businesses({ data }: { data: HomeBusinessPlatforms }) {
  return (
    <section
      id="businesses"
      aria-labelledby="businesses-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted max-w-screen overflow-x-hidden"
    >
      <BusinessRail
        title={
          <h2
            id="businesses-title"
            className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            {data.heading}
          </h2>
        }
        lede={data.description}
        sectors={toSectors(data.businesses)}
      />
    </section>
  );
}
