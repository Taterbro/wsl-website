import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "water-smart-infrastructure",
    label: "Water & Smart Infrastructure",
  },
  sections: {
    sector_hero: {
      label: "Water & Smart Infrastructure",
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
        { name: "flow", type: "text" }, // comma-separated
      ],
    },
    capability_system: {
      label: "One system. Seven capabilities.",
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
          ],
        },
      ],
    },
    proof_strip: {
      label: "The system in numbers.",
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
      label: "From need to reliable access.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
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
      label: "Reinforces the system.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "businesses",
          type: "relationship",
          collection: "business",
          max: 3,
        },
      ],
    },
    vision_conversion: {
      label: "Put the Vision to Work",
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
