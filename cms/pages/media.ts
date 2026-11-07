import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "media",
    label: "Media",
  },
  sections: {
    media_header: {
      label: "Media.",
      fields: [...CONSTANTS],
    },
    media_coverage: {
      label: "In the media.",
      fields: [
        ...CONSTANTS,
        {
          name: "media_mentions",
          type: "relationship",
          collection: "media_mention",
          max: 5,
        },
      ],
    },
    media_resources: {
      label: "Approved material.",
      fields: [
        ...CONSTANTS,
        {
          name: "media_resources",
          type: "relationship",
          collection: "media_resource",
          max: 4,
        },
      ],
    },
    media_boilerplate: {
      label: "About Waterlight Group",
      fields: [
        { name: "heading", type: "text" },
        { name: "body", type: "textarea" },
      ],
    },
    media_contact: {
      label: "Media enquiries.",
      fields: [...CONSTANTS],
    },
  },
};
