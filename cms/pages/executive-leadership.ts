import { CONSTANTS } from "./constants";

export default {
  page: { slug: "executive-leadership", label: "Executive Leadership" },
  sections: {
    executive_hero: {
      label: "The Team That Turns the Mandate Into Delivery",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        {
          name: "stats",
          type: "repeater",
          fields: [
            { name: "value", type: "text" },
            { name: "label", type: "text" },
          ],
        },
      ],
    },
    executive_functions: {
      label: "Six Functions, One Chain of Delivery",
      fields: [
        ...CONSTANTS,
        {
          name: "functions",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
            { name: "scope", type: "text" }, // comma-separated
          ],
        },
      ],
    },
    executive_operating: {
      label: "From Mandate to Outcome",
      fields: [
        { name: "heading", type: "text" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
        {
          name: "steps",
          type: "repeater",
          fields: [
            { name: "stage", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    executive_companies: {
      label: "Each Company, a Defined Mandate",
      fields: [
        ...CONSTANTS,
        {
          name: "companies",
          type: "relationship",
          collection: "company",
          max: 4,
        },
      ],
    },
    executive_accountability: {
      label: "Held to the Outcome",
      fields: [
        ...CONSTANTS,
        {
          name: "principles",
          type: "repeater",
          fields: [
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    executive_conversion: {
      label: "Bring a Problem to the People Who Build",
      fields: [
        ...CONSTANTS,
        {
          name: "roles",
          type: "repeater",
          fields: [
            { name: "role", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
  },
};
