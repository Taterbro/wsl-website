import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "development-partnerships",
    label: "Development Partnerships",
  },
  sections: {
    partnerships_hero: {
      label: "Partnership, by category.",
      fields: [
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
        {
          name: "partner_categories",
          type: "relationship",
          collection: "partner_category",
          max: 5,
        },
      ],
    },
    partner_directory: {
      label: "Five categories. No implied agreements.",
      fields: [
        ...CONSTANTS,
        {
          name: "partner_categories",
          type: "relationship",
          collection: "partner_category",
          max: 5,
        },
      ],
    },
    engagement_checklist: {
      label: "Bring the mandate. We will bring the map.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "criteria",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
            { name: "ask", type: "text" },
          ],
        },
        { name: "footer_note", type: "textarea" },
      ],
    },
    related_impact: {
      label: "Continue through Impact.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "items",
          type: "repeater",
          fields: [
            { name: "code", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
            { name: "href", type: "text" },
            { name: "label", type: "text" },
          ],
        },
      ],
    },
    partnerships_conversion: {
      label: "Start with the category.",
      fields: [
        ...CONSTANTS,
        {
          name: "steps",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
  },
};
