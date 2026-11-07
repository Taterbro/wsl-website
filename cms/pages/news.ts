import { CONSTANTS } from "./constants";

export default {
  page: {
    slug: "news",
    label: "News",
  },
  sections: {
    news_header: {
      label: "News & Updates.",
      fields: [...CONSTANTS],
    },
    news_grid: {
      label: "Latest updates.",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "news_items",
          type: "relationship",
          collection: "news_item",
          max: 6,
        },
      ],
    },
    news_closing: {
      label: "Media enquiries.",
      fields: [...CONSTANTS],
    },
  },
};
