import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "events",
    label: "Events",
  },
  sections: {
    events_header: {
      label: "Events.",
      fields: [...CONSTANTS],
    },
    events_list: {
      label: "Upcoming & recent.",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "events",
          type: "relationship",
          collection: "event",
          max: 6,
        },
      ],
    },
    events_closing: {
      label: "Convene with us.",
      fields: [...CONSTANTS],
    },
  },
};
