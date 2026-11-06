export default {
  postType: { slug: "company", label: "Companies" },
  fields: [
    { name: "title", type: "text" },
    { name: "domain", type: "text" },
    { name: "leads", type: "text" }, // comma-separated
  ],
};
