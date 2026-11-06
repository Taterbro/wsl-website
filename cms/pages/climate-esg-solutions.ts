import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "climate-esg-solutions",
    label: "Climate & ESG Solutions",
  },
  sections: {
    sector_hero: {
      label: "Climate & ESG Solutions.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        {
          name: "conditions",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "value", type: "text" },
          ],
        },
      ],
    },
    circular_loop: {
      label: "Five loops. One system.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "capabilities",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "copy", type: "textarea" },
            { name: "chips", type: "text" }, // comma-separated
            { name: "connection", type: "text" },
            { name: "image", type: "image" },
            { name: "image_alt", type: "text" },
          ],
        },
      ],
    },
    proof_strip: {
      label: "Every asset has a climate ledger.",
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
    asset_lifecycle: {
      label: "Climate across the whole life.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "stages",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
            { name: "lens", type: "text" },
          ],
        },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        { name: "bridge_heading", type: "text" },
        { name: "bridge_description", type: "textarea" },
      ],
    },
    related_sectors: {
      label: "No sector is climate-neutral.",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "businesses",
          type: "relationship",
          collection: "business",
          max: 4,
        },
        { name: "connections", type: "text" }, // comma-separated, matches business order
      ],
    },
    related_projects: {
      label: "Assets in transition.",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "projects",
          type: "relationship",
          collection: "project",
          max: 3,
          filter: { field: "sector", value: "climate-esg-solutions" },
        },
      ],
    },
    sector_conversion: {
      label: "Build resilience into the asset.",
      fields: [...CONSTANTS],
    },
  },
};
