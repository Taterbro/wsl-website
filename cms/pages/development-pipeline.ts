export default {
  page: {
    slug: "development-pipeline",
    label: "Development Pipeline",
  },
  sections: {
    pipeline_header: {
      label: "Development Pipeline",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
    pipeline_board: {
      label: "From concept to financing",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "stages",
          type: "repeater",
          fields: [
            { name: "stage", type: "text" },
            { name: "description", type: "textarea" },
          ],
        },
        {
          name: "projects",
          type: "relationship",
          collection: "project",
          max: 24,
        },
      ],
    },
    pipeline_geography: {
      label: "Where the pipeline is forming",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
    pipeline_cta: {
      label: "Bring a project into the pipeline",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  },
};
