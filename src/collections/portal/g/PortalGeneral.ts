import { GlobalConfig } from "payload";

export const Portal: GlobalConfig = {
  slug: "portalGeneral",
  label: "General",
  admin: {
    group: "Portal",
  },
  fields: [
    {
      name: "heroBackground",
      relationTo: "media",
      type: "upload",
    },
    {
      name: "navigation",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "routeLink",
          type: "text",
        },
        {
          name: "background",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
