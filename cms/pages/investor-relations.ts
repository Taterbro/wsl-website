export default {
  page: {
    slug: "investor-relations",
    label: "Investor Relations",
  },
  sections: {
    investor_relations_hero: {
      label: "Investor Relations",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    ir_principles: {
      label: "What investors can expect",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "principles",
          type: "repeater",
          fields: [
            { name: "title", type: "text" },
            { name: "body", type: "textarea" },
          ],
        },
      ],
    },
    ir_information: {
      label: "Process & scope",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "items",
          type: "repeater",
          fields: [
            { name: "title", type: "text" },
            { name: "body", type: "textarea" },
          ],
        },
      ],
    },
    investor_relations_cta: {
      label: "Start a conversation",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  },
};
