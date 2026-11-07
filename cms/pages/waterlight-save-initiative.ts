export default {
  page: {
    slug: "waterlight-save-initiative",
    label: "Waterlight Save Initiative",
  },
  sections: {
    initiative_hero: {
      label: "Waterlight Save Initiative.",
      fields: [
        { name: "label", type: "text" },
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "facts",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "value", type: "text" },
          ],
        },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    separation_statement: {
      label: "Separate by design.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "group_label", type: "text" },
        { name: "group_name", type: "text" },
        { name: "group_description", type: "textarea" },
        { name: "initiative_label", type: "text" },
        { name: "initiative_name", type: "text" },
        { name: "initiative_description", type: "textarea" },
        { name: "is", type: "text" }, // comma-separated
        { name: "is_not", type: "text" }, // comma-separated
      ],
    },
    programme_focus: {
      label: "Its work. Its own account.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "themes",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    accountability_ledger: {
      label: "A claim needs a document.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "records",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "value", type: "textarea" },
          ],
        },
      ],
    },
    initiative_outbound: {
      label: "Waterlight Save Initiative continues on its own site.",
      fields: [
        { name: "label", type: "text" },
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
  },
};
