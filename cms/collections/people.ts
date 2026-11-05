export default {
  postType: { slug: "person", label: "People" },
  fields: [
    { name: "title", type: "text" },
    { name: "role", type: "text" },
    { name: "seat", type: "text" },
    { name: "focus", type: "textarea" },
    { name: "committees", type: "text" }, // comma-separated
    { name: "image", type: "image" },
    { name: "image_alt", type: "text" },
    { name: "social_label", type: "text" },
    { name: "social_href", type: "text" },
  ],
};
