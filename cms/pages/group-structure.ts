import { CONSTANTS } from "./constants";

export default {
  page: { slug: "group-structure", label: "Group Structure" },
  sections: {
    structure_hero: {
      label: "One Group. Four Platforms. One Mandate.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        {
          name: "facts",
          type: "repeater",
          fields: [
            { name: "value", type: "text" },
            { name: "label", type: "text" },
          ],
        },
      ],
    },
    structure_diagram: {
      label: "Select Any Node To See Its Mandate",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
    structure_companies: {
      label: "Four Companies. Four Mandates.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    structure_sectors: {
      label: "Which Entity Does What",
      fields: [
        ...CONSTANTS,
        {
          name: "businesses",
          type: "relationship",
          collection: "business",
          max: 8,
        },
      ],
    },
    structure_conversion: {
      label: "Start With The Right Entity",
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
