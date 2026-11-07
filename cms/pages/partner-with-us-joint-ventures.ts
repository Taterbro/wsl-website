import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "partner-with-us-joint-ventures",
    label: "Joint Ventures",
  },
  sections: {
    joint_ventures_hero: {
      label: "Joint ventures & shared platforms.",
      fields: [
        ...CONSTANTS,
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    joint_ventures_intro: {
      label: "Build together, scale with intent.",
      fields: [
        ...CONSTANTS,
        {
          name: "steps",
          type: "repeater",
          fields: [
            { name: "title", type: "text" },
            { name: "copy", type: "textarea" },
          ],
        },
      ],
    },
    joint_ventures_form_section: {
      label: "Joint venture enquiry",
      fields: [...CONSTANTS],
    },
  },
};
