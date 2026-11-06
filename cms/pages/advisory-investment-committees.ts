export default {
  page: {
    slug: "advisory-investment-committees",
    label: "Advisory / Investment Committees",
  },
  sections: {
    advisory_hero: {
      label: "Outside expertise. Structured challenge.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "chips",
          type: "repeater",
          fields: [{ name: "label", type: "text" }],
        },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    advisory_charters: {
      label: "One advises. One tests.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
    advisory_constitution: {
      label: "Appointed on merit and terms.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "criteria",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    advisory_flow: {
      label: "Advice that reaches the decision.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
    advisory_challenge: {
      label: "Challenge that cannot be waved away.",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "challenge",
          type: "repeater",
          fields: [
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    advisory_conversion: {
      label: "Engage the people who test the work.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  },
};
