import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "renewable-energy",
    label: "Renewable Energy",
  },
  sections: {
    sector_hero: {
      label: "Renewable Energy",
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
    capability_deck: {
      label: "Generation, storage, dispatch.",
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
      label: "A system, not a kit.",
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
    energy_cycle: {
      label: "The sun sets. The load does not.",
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
            { name: "image", type: "image" },
            { name: "image_alt", type: "text" },
          ],
        },
      ],
    },
    related_sectors: {
      label: "Power is the enabler.",
      fields: [
        ...CONSTANTS,
        {
          name: "businesses",
          type: "relationship",
          collection: "business",
          max: 3,
        },
      ],
    },
    related_projects: {
      label: "Where energy projects start.",
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
      label: "Power the next build.",
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
