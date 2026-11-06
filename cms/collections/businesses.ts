export default {
  postType: { slug: "business", label: "Businesses" },
  fields: [
    { name: "title", type: "text" },
    { name: "short_name", type: "text" },
    { name: "tags", type: "text" }, //comma separated texts
    { name: "image", type: "image" },
    { name: "image_alt", type: "text" },
    { name: "description", type: "textarea" },
  ],
};
