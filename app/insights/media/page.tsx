import type { Metadata } from "next";
import MediaHeader from "./_components/media-header";
import MediaCoverage from "./_components/media-coverage";
import MediaResources from "./_components/media-resources";
import MediaBoilerplate from "./_components/media-boilerplate";
import MediaContact from "./_components/media-contact";
import { MEDIA_MENTIONS, MEDIA_RESOURCES } from "./_components/media-data";

export const metadata: Metadata = {
  title: "Media — Insights — Waterlight Group",
  description:
    "Selected coverage, press resources and media contact for Waterlight Group. Illustrative coverage and assets pending approval.",
};

export default function MediaPage() {
  return (
    <main>
      <MediaHeader
        coverageCount={MEDIA_MENTIONS.length}
        resourceCount={MEDIA_RESOURCES.length}
      />
      <MediaCoverage />
      <MediaResources />
      <MediaBoilerplate />
      <MediaContact />
    </main>
  );
}
