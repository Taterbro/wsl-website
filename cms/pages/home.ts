const CONSTANTS = [
  { name: "label", type: "text" },
  { name: "description", type: "textarea" },
];

export default {
  page: { slug: "home", label: "Home" },
  sections: {
    group_thesis: {
      label: "Group Thesis",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "data",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "body", type: "textarea" },
            { name: "image", type: "image" },
          ],
        },
      ],
    },
    business_platforms: {
      label: "Business Platforms",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "text" },
        {
          name: "businesses",
          type: "relationship",
          collection: "business",
          max: 8,
        },
      ],
    },
    investments: {
      label: "Investments",
      fields: [
        ...CONSTANTS,
        {
          name: "stages",
          type: "repeater",
          fields: [
            { name: "number", type: "text" },
            { name: "label", type: "text" },
            { name: "description", type: "textarea" },
          ],
        },
      ],
    },
    innovation: {
      label: "Innovation",
      fields: [
        ...CONSTANTS,
        {
          name: "stages",
          type: "repeater",
          fields: [
            {
              name: "number",
              type: "text",
            },
            {
              name: "label",
              type: "text",
            },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    africa: {
      label: "Africa",
      fields: [
        ...CONSTANTS,
        {
          name: "indicators",
          type: "repeater",
          fields: [
            {
              name: "value",
              type: "text",
            },
            {
              name: "label",
              type: "textarea",
            },
            { name: "source", type: "text" },
          ],
        },
      ],
    },
    featured_projects: {
      label: "Featured Projects",
      fields: [
        ...CONSTANTS,
        {
          name: "projects",
          type: "relationship",
          collection: "project",
          max: 8,
        },
      ],
    },
    impact: {
      label: "Impact",
      fields: [
        ...CONSTANTS,
        {
          name: "wsi_description",
          type: "textarea",
        },
      ],
    },
  },
};
