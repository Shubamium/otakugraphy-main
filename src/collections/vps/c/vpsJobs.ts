import { CollectionConfig } from "payload";

const vpsJobs: CollectionConfig = {
  slug: "vpsJobs",
  labels: {
    plural: "Job List",
    singular: "Job",
  },
  orderable: true,
  admin: {
    group: "Virtual Production Studio",

    livePreview: {
      url: `http://vps.${process.env.NEXT_PUBLIC_ROOT_URL}/`,
    },
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
