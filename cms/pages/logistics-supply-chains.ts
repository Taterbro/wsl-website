import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "logistics-supply-chains",
    label: "Logistics & Supply Chains",
  },
  sections: {
    sector_hero: {
      label: "Logistics & Supply Chains.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        {
          name: "manifest",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "value", type: "text" },
          ],
        },
      ],
    },
    corridor_map: {
      label: "Five nodes. One corridor.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "nodes",
          type: "repeater",
          fields: [
            { name: "code", type: "text" },
            { name: "label", type: "text" },
            { name: "type", type: "text" },
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
      label: "A corridor is a system.",
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
    corridor_stack: {
      label: "One corridor. Four layers.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        {
          name: "layers",
          type: "repeater",
          fields: [
            { name: "code", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    related_sectors: {
      label: "A corridor connects more.",
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
      label: "Freight in preparation.",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "projects",
          type: "relationship",
          collection: "project",
          max: 3,
          filter: { field: "sector", value: "logistics-supply-chains" },
        },
      ],
    },
    sector_conversion: {
      label: "Move goods through a Waterlight corridor.",
      fields: [...CONSTANTS],
    },
  },
};
