export default {
  page: {
    slug: "flagship-projects",
    label: "Flagship Projects",
  },
  sections: {
    flagship_header: {
      label: "Flagship Projects",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
    flagship_showcase: {
      label: "Flagship Showcase",
      fields: [
        {
          name: "projects",
          type: "relationship",
          collection: "project",
          max: 3,
        },
      ],
    },
    flagship_dossier: {
      label: "Inside the lead project",
      fields: [{ name: "heading", type: "text" }],
    },
    flagship_cta: {
      label: "Build with Waterlight",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  },
};
