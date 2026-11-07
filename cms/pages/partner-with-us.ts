import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "partner-with-us",
    label: "Partner With Us",
  },
  sections: {
    partner_hero: {
      label: "Build with Waterlight.",
      fields: [
        ...CONSTANTS,
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    audience_selector: {
      label: "Who are you?",
      fields: [...CONSTANTS],
    },
    market_corridor: {
      label: "Market entry, both ways.",
      fields: [...CONSTANTS],
    },
    next_steps: {
      label: "A short, honest path.",
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
  },
};
