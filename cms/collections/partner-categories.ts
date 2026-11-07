export default {
  postType: { slug: "partner_category", label: "Partner Categories" },
  fields: [
    { name: "title", type: "text" },
    { name: "code", type: "text" },
    { name: "description", type: "textarea" },
    { name: "brings", type: "text" }, // comma-separated
    { name: "instruments", type: "text" }, // comma-separated
    { name: "engagement", type: "text" },
  ],
};
