import { CONSTANTS } from "./constants";

export default {
  page: { slug: "vision-mission", label: "Vision & Mission" },
  sections: {
    vision_hero: {
      label: "Vision. Mission. Delivery.",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "background", type: "image" },
        { name: "background_alt", type: "text" },
        {
          name: "meta",
          type: "repeater",
          fields: [
            { name: "label", type: "text" },
            { name: "value", type: "text" },
          ],
        },
      ],
    },
    vision_statement: {
      label: "Our Vision",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    vision_mission: {
      label: "Our Mission",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "verbs",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "verb", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    vision_delivery: {
      label: "How the Vision is Delivered",
      fields: [
        ...CONSTANTS,
        {
          name: "stages",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "name", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    vision_commitments: {
      label: "Commitments We Publish",
      fields: [
        ...CONSTANTS,
        {
          name: "commitments",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    vision_conversion: {
      label: "Put the Vision to Work",
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
