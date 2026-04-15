import { MediaSelector } from "@/collections/Media";
import { Field, GlobalConfig } from "payload";

const vpsHome: GlobalConfig = {
  slug: "vpsJobs",
  label: "Jobs Page",
  admin: {
    group: "Virtual Production Studio",
    livePreview: {
      url: "http://vps.localhost:3000/",
    },
  },
  fields: [
    {
      name: "background",
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
      name: "ctaButton",
      type: "group",
      fields: [
        {
          name: "text",
          type: "text",
        },
        {
          name: "link",
          type: "text",
        },
      ],
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "sectionImage",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default vpsHome;
