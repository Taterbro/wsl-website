export default {
  page: {
    slug: "strategy",
    label: "Strategy",
  },
  sections: {
    strategy_hero: {
      label: "Investment Strategy",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    lifecycle: {
      label: "From opportunity to scale",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "stages",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "label", type: "text" },
            { name: "definition", type: "textarea" },
            { name: "detail", type: "textarea" },
            { name: "partners", type: "text" }, // comma-separated
          ],
        },
      ],
    },
    principles: {
      label: "Discipline with purpose",
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
    corridor_module: {
      label: "Connecting capital, technology and markets",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "nodes",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "role", type: "text" },
          ],
        },
        { name: "exchanges", type: "text" }, // comma-separated
      ],
    },
    strategy_cta: {
      label: "Ready to structure a bankable opportunity?",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  },
};
