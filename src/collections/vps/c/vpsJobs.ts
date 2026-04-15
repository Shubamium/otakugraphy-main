import { CollectionConfig } from "payload";

const vpsJobs: CollectionConfig = {
  slug: "vpsJobs",
  labels: {
    plural: "Job List",
    singular: "Job",
  },
  admin: {
    group: "Virtual Production Studio",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "icon",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "applyLink",
      type: "text",
    },
  ],
};

export default vpsJobs;
