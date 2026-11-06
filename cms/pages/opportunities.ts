export default {
  page: {
    slug: "opportunities",
    label: "Opportunities",
  },
  sections: {
    opportunities_hero: {
      label: "Opportunities",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
    opportunities_grid: {
      label: "Available opportunities",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "projects",
          type: "relationship",
          collection: "project",
          max: 24,
        },
      ],
    },
    opportunities_cta: {
      label: "Investors, institutions and project owners",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  },
};
