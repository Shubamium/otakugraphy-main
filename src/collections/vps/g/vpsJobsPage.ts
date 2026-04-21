import { GlobalConfig } from "payload";

export const vpsJobsPage: GlobalConfig = {
  slug: "vpsJobsPage",
  label: "Jobs",
  admin: {
    group: "Virtual Production Studio",
    livePreview: {
      url: `http://vps.${process.env.NEXT_PUBLIC_ROOT_URL}/jobs`,
    },
  },
  fields: [
    {
      name: "banner",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "subtitle",
      type: "text",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "aboutImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "cta",
      label: "Call To Action",
      type: "group",
      fields: [
        {
          name: "buttonText",
          type: "text",
        },
        {
          name: "buttonLink",
          type: "text",
        },
      ],
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "jobList",
      label: "Job List Background",
      type: "upload",
      relationTo: "media",
    },
  ],
};
