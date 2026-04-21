import { GlobalConfig, PayloadComponent, RowLabel } from "payload";

const vpsGeneral: GlobalConfig = {
  slug: "vpsGeneral",
  label: "General",
  admin: {
    group: "Virtual Production Studio",
    livePreview: {
      url: `http://vps.${process.env.NEXT_PUBLIC_ROOT_URL}/`,
    },
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "header",
          fields: [
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
              ],
            },
          ],
        },
        {
          name: "footer",
          fields: [
            {
              name: "copyright",
              type: "text",
            },
            {
              name: "actionButton",
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
          ],
        },
      ],
    },
  ],
};

export default vpsGeneral;
