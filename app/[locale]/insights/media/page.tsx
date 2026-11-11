import type { Metadata } from "next";
import type { MediaMention, MediaResource } from "@/lib/cms/generated";
import { getMediaPage } from "@/lib/cms/generated";

import MediaHeader from "./_components/media-header";
import MediaCoverage from "./_components/media-coverage";
import MediaResources from "./_components/media-resources";
import MediaBoilerplate from "./_components/media-boilerplate";
import MediaContact from "./_components/media-contact";
import {
  MEDIA_MENTIONS,
  MEDIA_RESOURCES,
  type MediaMention as MediaMentionItem,
  type MediaResource as MediaResourceItem,
} from "./_components/media-data";

export const metadata: Metadata = {
  title: "Media — Insights — Waterlight Group",
  description:
    "Selected coverage, press resources and media contact for Waterlight Group. Illustrative coverage and assets pending approval.",
};

function toCoverageMention(mention: MediaMention): MediaMentionItem {
  return {
    id: String(mention.id),
    publication: mention.publication,
    headline: mention.title || mention.postTitle,
    date: mention.date,
    dateLabel: mention.date_label,
  };
}

function toPressResource(resource: MediaResource): MediaResourceItem {
  return {
    id: String(resource.id),
    code: resource.code,
    title: resource.title || resource.postTitle,
    description: resource.description,
  };
}

export default async function MediaPage() {
  const data = await getMediaPage();

  const mentions = data.media_coverage.media_mentions.length
    ? data.media_coverage.media_mentions.map(toCoverageMention)
    : MEDIA_MENTIONS;

  const resources = data.media_resources.media_resources.length
    ? data.media_resources.media_resources.map(toPressResource)
    : MEDIA_RESOURCES;

  return (
    <main>
      <MediaHeader
        data={data.media_header}
        coverageCount={mentions.length}
        resourceCount={resources.length}
      />
      <MediaCoverage data={data.media_coverage} mentions={mentions} />
      <MediaResources data={data.media_resources} resources={resources} />
      <MediaBoilerplate data={data.media_boilerplate} />
      <MediaContact data={data.media_contact} />
    </main>
  );
}
