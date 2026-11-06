import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "technology-digital-infrastructure",
    label: "Technology & Digital Infrastructure",
  },
  sections: {
    sector_hero: {
      label: "Technology & Digital Infrastructure.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        {
          name: "facts",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "value", type: "text" },
          ],
        },
      ],
    },
    capability_stack: {
      label: "Seven layers. One operating system.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "capabilities",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "copy", type: "textarea" },
            { name: "applications", type: "text" }, // comma-separated
            { name: "image", type: "image" },
            { name: "image_alt", type: "text" },
          ],
        },
      ],
    },
    proof_strip: {
      label: "A live layer on physical assets.",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "stats",
          type: "repeater",
          fields: [
            { name: "value", type: "text" },
            { name: "suffix", type: "text" },
            { name: "label", type: "text" },
          ],
        },
      ],
    },
    systems_layer: {
      label: "The physical world, made readable.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "principles",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        { name: "flow", type: "text" }, // comma-separated
      ],
    },
    related_sectors: {
      label: "The layer beneath every sector.",
      fields: [
        ...CONSTANTS,
        {
          name: "businesses",
          type: "relationship",
          collection: "business",
          max: 4,
        },
      ],
    },
    related_projects: {
      label: "Where the stack meets the asset.",
      fields: [
        ...CONSTANTS,
        {
          name: "projects",
          type: "relationship",
          collection: "project",
          max: 3,
        },
      ],
    },
    sector_conversion: {
      label: "Build the systems layer.",
      fields: [
        ...CONSTANTS,
        {
          name: "roles",
          type: "repeater",
          fields: [
            { name: "role", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
  },
};
