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
                {
                  name: "isDropdown",
                  type: "checkbox",
                },
                {
                  name: "dropdownList",
                  type: "array",
                  admin: {
                    condition: (data, _sibling) => _sibling.isDropdown,
                  },
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
        {
          name: "sectionOrder",
          admin: {},
          unique: true,
          fields: [
            {
              name: "ordering",
              admin: {
                description: "Top to Bottom -> Left To Right",
              },
              type: "select",
              hasMany: true,
              options: [
                {
                  label: "Hero",
                  value: "hero",
                },
                {
                  label: "Pro Shot",
                  value: "proShot",
                },
                {
                  label: "Showcase",
                  value: "showcase",
                },
                {
                  label: "Our Work",
                  value: "ourwork",
                },
                {
                  label: "Collaborator",
                  value: "collaborator",
                },
                {
                  label: "About/Overview",
                  value: "about",
                },
                {
                  label: "Founding Ambassador",
                  value: "foundingAmbassador",
                },
                {
                  label: "Bottom Navigation / External Links",
                  value: "bottomNavigation",
                },
                {
                  label: "Our Journey / Timeline",
                  value: "ourJourney",
                },
                {
                  label: "Team",
                  value: "team",
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
