export default {
  page: {
    slug: "project-development",
    label: "Project Development",
  },
  sections: {
    project_development_hero: {
      label: "Project Development",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    development_process: {
      label: "Disciplined from idea to build readiness",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "steps",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "title", type: "text" },
            { name: "body", type: "textarea" },
          ],
        },
      ],
    },
    development_capabilities: {
      label: "Platform capabilities",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "capabilities", type: "text" }, // comma-separated
      ],
    },
    project_development_cta: {
      label: "Have an opportunity ready for development?",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  },
};
