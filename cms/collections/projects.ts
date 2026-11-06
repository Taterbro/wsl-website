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
    { name: "country", type: "text" },
    { name: "region", type: "text" },
    { name: "investment_size", type: "text" },
    { name: "impact_area", type: "text" }, // comma-separated
    { name: "access", type: "text" },
    { name: "investment_status", type: "text" },
    { name: "problem", type: "textarea" },
    { name: "solution", type: "textarea" },
    { name: "technology", type: "text" }, // comma-separated
    { name: "sdgs", type: "text" }, // comma-separated numbers
  ],
};
