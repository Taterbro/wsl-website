import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "sustainability",
    label: "Sustainability",
  },
  sections: {
    sustainability_hero: {
      label: "Built to last. Measured honestly.",
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
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    esg_framework: {
      label: "Three lenses. One ledger.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "lenses",
          type: "repeater",
          fields: [
            { name: "code", type: "text" },
            { name: "name", type: "text" },
            { name: "statement", type: "textarea" },
            { name: "practices", type: "text" }, // comma-separated
            { name: "evidence", type: "text" },
            { name: "link_1_label", type: "text" },
            { name: "link_1_href", type: "text" },
            { name: "link_2_label", type: "text" },
            { name: "link_2_href", type: "text" },
          ],
        },
        { name: "ledger", type: "text" }, // comma-separated
      ],
    },
    outcomes_ledger: {
      label: "Outcomes, only when evidenced.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "metrics",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "value", type: "text" },
            { name: "unit", type: "text" },
            { name: "period", type: "text" },
            { name: "methodology", type: "text" },
            { name: "kind", type: "text" },
          ],
        },
      ],
    },
    decision_gates: {
      label: "ESG is a gate, not a paragraph.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "gates",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "name", type: "text" },
            { name: "copy", type: "textarea" },
            { name: "evidence", type: "text" },
            { name: "link", type: "text" },
            { name: "href", type: "text" },
          ],
        },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        { name: "quote", type: "textarea" },
      ],
    },
    focus_areas: {
      label: "Seven areas of focus.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "areas",
          type: "repeater",
          fields: [
            { name: "number", type: "text" },
            { name: "name", type: "text" },
            { name: "note", type: "text" },
          ],
        },
        { name: "footer_note", type: "textarea" },
      ],
    },
    sustainability_conversion: {
      label: "Bring the question early.",
      fields: [...CONSTANTS],
    },
  },
};
