import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "real-estate-urban-infrastructure",
    label: "Real Estate & Urban Infrastructure",
  },
  sections: {
    sector_hero: {
      label: "Real Estate & Urban Infrastructure.",
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
    city_zones: {
      label: "Five zones. One city.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "zones",
          type: "repeater",
          fields: [
            { name: "code", type: "text" },
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
      label: "A city is a portfolio.",
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
    district_lifecycle: {
      label: "A district is never finished.",
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
      label: "The city is a system of systems.",
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
      label: "Sites in preparation.",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "projects",
          type: "relationship",
          collection: "project",
          max: 3,
          filter: { field: "sector", value: "real-estate-urban-infrastructure" },
        },
      ],
    },
    sector_conversion: {
      label: "Build the next city block.",
      fields: [...CONSTANTS],
    },
  },
};
