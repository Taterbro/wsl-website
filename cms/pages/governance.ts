import { CONSTANTS } from "./constants";

export default {
  page: { slug: "governance", label: "Governance" },
  sections: {
    governance_hero: {
      label: "Oversight That Survives Contact With Reality",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        {
          name: "principles",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "value", type: "text" },
          ],
        },
      ],
    },
    governance_map: {
      label: "Who Decides What",
      fields: [
        ...CONSTANTS,
        {
          name: "bodies",
          type: "repeater",
          fields: [
            { name: "name", type: "text" },
            { name: "tier", type: "text" },
            { name: "remit", type: "textarea" },
            { name: "status", type: "text" },
            { name: "scope", type: "text" }, // comma-separated
          ],
        },
      ],
    },
    governance_rights: {
      label: "Reserved Or Delegated",
      fields: [
        ...CONSTANTS,
        {
          name: "decision_rights",
          type: "repeater",
          fields: [
            { name: "title", type: "text" },
            { name: "note", type: "textarea" },
            { name: "items", type: "text" }, // comma-separated
          ],
        },
      ],
    },
    governance_seats: {
      label: "Seats, Not Profiles",
      fields: [
        ...CONSTANTS,
        {
          name: "seats",
          type: "repeater",
          fields: [
            { name: "seat", type: "text" },
            { name: "body", type: "text" },
            { name: "image", type: "image" },
            { name: "image_alt", type: "text" },
          ],
        },
        { name: "quote", type: "text" },
        { name: "attribution", type: "text" },
        { name: "quote_image", type: "image" },
        { name: "quote_image_alt", type: "text" },
      ],
    },
    governance_trust: {
      label: "Nothing Goes Live Unreviewed",
      fields: [
        ...CONSTANTS,
        {
          name: "claim_matrix",
          type: "repeater",
          fields: [
            { name: "claim", type: "text" },
            { name: "approval", type: "text" },
          ],
        },
        { name: "speaks_heading", type: "text" },
        { name: "speaks_description", type: "textarea" },
        {
          name: "roles",
          type: "repeater",
          fields: [
            { name: "role", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
        { name: "cta_heading", type: "text" },
        { name: "cta_description", type: "textarea" },
      ],
    },
  },
};
