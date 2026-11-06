import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "industrial-development",
    label: "Industrial Development",
  },
  sections: {
    sector_hero: {
      label: "Industrial Development.",
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
    capability_line: {
      label: "From blueprint to production.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "capabilities",
          type: "repeater",
          fields: [
            { name: "code", type: "text" },
            { name: "label", type: "text" },
            { name: "copy", type: "textarea" },
            { name: "chips", type: "text" }, // comma-separated
            { name: "image", type: "image" },
            { name: "image_alt", type: "text" },
          ],
        },
      ],
    },
    proof_strip: {
      label: "Built to be repeated.",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "stats",
          type: "repeater",
          fields: [
            { name: "value", type: "text" },
            { name: "label", type: "text" },
          ],
        },
      ],
    },
    localisation: {
      label: "Build it here. Not just assemble it.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "stages",
          type: "repeater",
          fields: [
            { name: "number", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    related_sectors: {
      label: "Industry touches every chain.",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "businesses",
          type: "relationship",
          collection: "business",
          max: 4,
        },
      ],
    },
    related_projects: {
      label: "The next plant starts here.",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "projects",
          type: "relationship",
          collection: "project",
          max: 3,
        },
      ],
    },
    sector_conversion: {
      label: "Put the plant on the map.",
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
