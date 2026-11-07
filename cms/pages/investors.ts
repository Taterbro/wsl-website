import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "investors",
    label: "Investors",
  },
  sections: {
    investors_hero: {
      label: "Investors & family offices.",
      fields: [
        ...CONSTANTS,
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    investors_intro: {
      label: "Structured access, not an open data room.",
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
    investors_form_section: {
      label: "Investor enquiry",
      fields: [...CONSTANTS],
    },
  },
};
