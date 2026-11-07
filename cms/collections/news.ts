export default {
  postType: { slug: "news_item", label: "News" },
  fields: [
    { name: "title", type: "text" },
    { name: "excerpt", type: "textarea" },
    { name: "category", type: "text" },
    { name: "date", type: "text" },
    { name: "date_label", type: "text" },
    { name: "image", type: "image" },
    { name: "image_alt", type: "text" },
  ],
};
