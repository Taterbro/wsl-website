import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "governments",
    label: "Governments",
  },
  sections: {
    governments_hero: {
      label: "Governments & public agencies.",
      fields: [
        ...CONSTANTS,
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    governments_intro: {
      label: "Practical delivery with discipline.",
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
    governments_form_section: {
      label: "Government enquiry",
      fields: [...CONSTANTS],
    },
  },
};
