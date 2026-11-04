import { CONSTANTS } from "./constants";

export default {
  page: { slug: "our-story", label: "Our Story" },
  sections: {
    story_hero: {
      label: "Story Hero",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    story_origin: {
      label: "The Founding Idea",
      fields: [
        { name: "heading", type: "text" },
        { name: "description", type: "textarea" },
        { name: "body", type: "textarea" },
        {
          name: "pillars",
          type: "repeater",
          fields: [
            { name: "value", type: "text" },
            { name: "label", type: "text" },
            { name: "source", type: "text" },
          ],
        },
        {
          name: "fields",
          type: "repeater",
          fields: [
            { name: "image", type: "image" },
            { name: "image_alt", type: "text" },
            { name: "sector", type: "text" },
            { name: "title", type: "text" },
          ],
        },
      ],
    },
    story_milestones: {
      label: "How We Got Here",
      fields: [
        ...CONSTANTS,
        {
          name: "milestones",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
            { name: "tag", type: "text" },
          ],
        },
      ],
    },
    story_value_chain: {
      label: "One Chain, Carried End to End",
      fields: [
        ...CONSTANTS,
        {
          name: "chain",
          type: "repeater",
          fields: [
            { name: "no", type: "text" },
            { name: "label", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    story_founder: {
      label: "The Conviction Behind The Group",
      fields: [
        { name: "heading", type: "text" },
        { name: "attribution", type: "text" },
        { name: "body", type: "textarea" },
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    story_footprint: {
      label: "The Global Bridge",
      fields: [
        ...CONSTANTS,
        {
          name: "bridges",
          type: "repeater",
          fields: [
            { name: "left", type: "text" },
            { name: "right", type: "text" },
            { name: "items", type: "text" },
          ],
        },
        {
          name: "regions",
          type: "repeater",
          fields: [
            { name: "name", type: "text" },
            { name: "status", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    story_conversion: {
      label: "Build With Waterlight",
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
