import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "market-entry",
    label: "Market Entry",
  },
  sections: {
    market_entry_hero: {
      label: "Market entry to Africa & GCC.",
      fields: [
        ...CONSTANTS,
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    market_entry_intro: {
      label: "Enter with local context.",
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
    market_entry_form_section: {
      label: "Market entry enquiry",
      fields: [...CONSTANTS],
    },
  },
};
