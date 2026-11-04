export default {
  postType: { slug: "project", label: "Projects" },
  fields: [
    { name: "sector", type: "text" },
    { name: "stage", type: "text" },
    { name: "description", type: "textarea" },
    { name: "title", type: "text" },
    { name: "background", type: "image" },
    { name: "location", type: "text" },
  ],
};
