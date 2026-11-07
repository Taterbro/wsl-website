export default {
  postType: { slug: "event", label: "Events" },
  fields: [
    { name: "title", type: "text" },
    { name: "summary", type: "textarea" },
    { name: "status", type: "text" },
    { name: "type", type: "text" },
    { name: "date", type: "text" },
    { name: "date_label", type: "text" },
    { name: "day", type: "text" },
    { name: "month", type: "text" },
    { name: "year", type: "text" },
    { name: "location", type: "text" },
    { name: "format", type: "text" },
  ],
};
