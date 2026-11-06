export default {
  postType: { slug: "project", label: "Projects" },
  fields: [
    { name: "sector", type: "text" },
    { name: "stage", type: "text" },
    { name: "description", type: "textarea" },
    { name: "title", type: "text" },
    { name: "background", type: "image" },
    { name: "background_alt", type: "text" },
    { name: "location", type: "text" },
    { name: "opportunity", type: "text" },
  ],
};
