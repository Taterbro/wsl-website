export default {
  page: {
    slug: "investments-joint-ventures",
    label: "Joint Ventures",
  },
  sections: {
    joint_ventures_hero: {
      label: "Joint Ventures",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    jv_approach: {
      label: "JV as a delivery model",
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
    jv_partners: {
      label: "Complementary strengths",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "partners",
          type: "repeater",
          fields: [
            { name: "role", type: "text" },
            { name: "focus", type: "textarea" },
          ],
        },
      ],
    },
    joint_ventures_cta: {
      label: "Have a project worth structuring?",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  },
};
