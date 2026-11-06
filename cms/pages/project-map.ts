export default {
  page: {
    slug: "project-map",
    label: "Project Map",
  },
  sections: {
    map_header: {
      label: "Project Map",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "reading_rules_heading", type: "text" },
        {
          name: "reading_rules",
          type: "repeater",
          fields: [
            { name: "index", type: "text" },
            { name: "title", type: "text" },
            { name: "detail", type: "textarea" },
          ],
        },
      ],
    },
    map_index: {
      label: "Markets in view",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "projects",
          type: "relationship",
          collection: "project",
          max: 24,
        },
        {
          name: "target_markets",
          type: "repeater",
          fields: [
            { name: "name", type: "text" },
            { name: "note", type: "textarea" },
          ],
        },
      ],
    },
    map_cta: {
      label: "A market in mind?",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  },
};
