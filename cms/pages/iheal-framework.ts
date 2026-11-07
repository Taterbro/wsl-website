import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "iheal-framework",
    label: "iHEAL Framework",
  },
  sections: {
    iheal_hero: {
      label: "The iHEAL Framework.",
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
        { name: "framing", type: "textarea" },
      ],
    },
    iheal_pillars: {
      label: "Five letters. Five lenses.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "pillars",
          type: "repeater",
          fields: [
            { name: "letter", type: "text" },
            { name: "label", type: "text" },
          ],
        },
      ],
    },
    iheal_boundaries: {
      label: "A lens, not a service line.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "is", type: "text" }, // comma-separated
        { name: "is_not", type: "text" }, // comma-separated
        { name: "footer_note", type: "textarea" },
      ],
    },
    related_company: {
      label: "Waterlight iHEAL Global Limited",
      fields: [
        {
          name: "companies",
          type: "relationship",
          collection: "company",
          max: 1,
        },
        { name: "description", type: "textarea" },
      ],
    },
    iheal_closing: {
      label: "Read it in context.",
      fields: [...CONSTANTS],
    },
  },
};
