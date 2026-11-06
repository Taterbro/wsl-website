import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "agriculture-food-systems",
    label: "Agriculture & Food Systems",
  },
  sections: {
    sector_hero: {
      label: "Agriculture & Food Systems.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "facts",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "value", type: "text" },
          ],
        },
        {
          name: "mosaic",
          type: "repeater",
          fields: [
            { name: "image", type: "image" },
            { name: "image_alt", type: "text" },
            { name: "label", type: "text" },
          ],
        },
      ],
    },
    capability_journey: {
      label: "Six links in one chain.",
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
      label: "The chain in numbers.",
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
    role_in_platform: {
      label: "Infrastructure behind the harvest.",
      fields: [
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "chain", type: "text" },
        {
          name: "steps",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    related_sectors: {
      label: "One chain, many sectors.",
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
      label: "The pipeline starts in the field.",
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
      label: "Grow the next chain.",
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
