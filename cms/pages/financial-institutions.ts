import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "financial-institutions",
    label: "Financial Institutions",
  },
  sections: {
    financial_institutions_hero: {
      label: "Banks, DFIs & financiers.",
      fields: [
        ...CONSTANTS,
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    financial_institutions_intro: {
      label: "Structured finance for essential needs.",
      fields: [
        ...CONSTANTS,
        {
          name: "steps",
          type: "repeater",
          fields: [
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    financial_institutions_form_section: {
      label: "Financial institution enquiry",
      fields: [...CONSTANTS],
    },
  },
};
