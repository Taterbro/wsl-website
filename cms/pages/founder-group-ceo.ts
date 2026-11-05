import { CONSTANTS } from "./constants";

export default {
  page: { slug: "founder-group-ceo", label: "Founder & Group CEO" },
  sections: {
    founder_hero: {
      label: "Dr. Engr. Prince Ero Ibhafidon",
      fields: [
        { name: "name", type: "text" },
        { name: "role", type: "text" },
        { name: "office", type: "text" },
        { name: "quote", type: "textarea" },
        { name: "portrait", type: "image" },
        { name: "portrait_alt", type: "text" },
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
    founder_bio: {
      label: "From Conviction to Institution",
      fields: [
        { name: "heading", type: "text" },
        { name: "bio", type: "textarea" },
        {
          name: "remit",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "label", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    founder_structure: {
      label: "One Office. Formal Structures.",
      fields: [...CONSTANTS],
    },
    founder_next: {
      label: "The Office Within the Structure",
      fields: [...CONSTANTS],
    },
  },
};
