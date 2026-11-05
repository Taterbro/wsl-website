import { CONSTANTS } from "./constants";

export default {
  page: { slug: "board", label: "Board" },
  sections: {
    board_hero: {
      label: "The Board That Answers for the Work",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        {
          name: "stats",
          type: "repeater",
          fields: [
            { name: "value", type: "text" },
            { name: "label", type: "text" },
          ],
        },
      ],
    },
    board_roster: {
      label: "Every Member. Every Seat.",
      fields: [
        ...CONSTANTS,
        {
          name: "people",
          type: "relationship",
          collection: "person",
          max: 9,
        },
      ],
    },
    board_conversion: {
      label: "Bring the Board a Real Problem",
      fields: [
        ...CONSTANTS,
        {
          name: "routes",
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
