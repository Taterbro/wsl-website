export default {
  postType: { slug: "business", label: "Businesses" },
  fields: [
    { name: "title", type: "text" },
    { name: "tags", type: "text" }, //comma separated texts
    { name: "image", type: "image" },
    { name: "description", type: "textarea" },
  ],
};
