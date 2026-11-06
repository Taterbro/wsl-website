export default {
  page: {
    slug: "portfolio",
    label: "Portfolio",
  },
  sections: {
    portfolio_header: {
      label: "Portfolio",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
    portfolio_grid: {
      label: "Find a project",
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
    portfolio_routes: {
      label: "See the portfolio differently",
      fields: [{ name: "heading", type: "text" }],
    },
    portfolio_cta: {
      label: "Request the full brief",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  },
};
