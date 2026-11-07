import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "technology-partners",
    label: "Technology Partners",
  },
  sections: {
    technology_partners_hero: {
      label: "Technology partners.",
      fields: [
        ...CONSTANTS,
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    technology_partners_intro: {
      label: "Scale with industrial partners.",
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
    technology_partners_form_section: {
      label: "Technology partner enquiry",
      fields: [...CONSTANTS],
    },
  },
};
