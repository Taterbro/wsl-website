import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "project-owners",
    label: "Project Owners",
  },
  sections: {
    project_owners_hero: {
      label: "Project owners & sponsors.",
      fields: [
        ...CONSTANTS,
        { name: "image", type: "image" },
        { name: "image_alt", type: "text" },
      ],
    },
    project_owners_intro: {
      label: "Capital meets delivery capability.",
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
    project_owners_form_section: {
      label: "Project owner enquiry",
      fields: [...CONSTANTS],
    },
  },
};
