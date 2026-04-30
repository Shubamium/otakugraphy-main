import { MediaSelector } from "@/collections/Media";
import { Field, GlobalConfig } from "payload";

const HeroSectionFields: Field = {
  name: "heroSection",
  type: "group",
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
      name: "callToAction",
      type: "text",
    },
    {
      name: "callToActionLink",
      type: "text",
    },
  ],
};

const ProSectionFields: Field = {
  name: "proSection",
  type: "group",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "media",
      type: "group",
      fields: [...MediaSelector],
    },
  ],
};
const AboutSectionFields: Field = {
  name: "aboutSection",
  type: "group",
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
      name: "media",
      type: "group",
      fields: [...MediaSelector],
    },
  ],
};
const GallerySectionFields: Field = {
  name: "gallerySection",
  type: "group",
  fields: [
    {
      name: "mediaList",
      type: "array",
      fields: [...MediaSelector],
    },
  ],
};

const BottomNavSectionFields: Field = {
  name: "bottomNavSection",
  label: "Bottom Navigation Section",
  type: "group",
  fields: [
    {
      name: "navigationList",
      label: "List",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "subtitle",
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
        {
          name: "tags",
          type: "text",
          hasMany: true,
        },
      ],
    },
  ],
};
const OurWorkSectionFields: Field = {
  name: "ourwork",
  label: "Our Work Section",
  type: "group",
  fields: [
    {
      name: "headingBanner",
      label: "Heading Banner Background",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "titleTop",
      label: "Title Top",
      type: "text",
    },
    {
      name: "titleCenter",
      label: "Title Center",
      type: "text",
    },
    {
      name: "titleBottom",
      label: "Title Bottom",
      type: "text",
    },
    {
      name: "worksList",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "thumbnail",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "fullPreview",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
const TeamSectionFields: Field = {
  name: "team",
  label: "Team Section",
  type: "group",
  fields: [
    {
      name: "subtitle",
      type: "text",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
    },
    {
      name: "teamList",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "pfp",
          label: "Profile Picture",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "role",
          type: "text",
        },
        {
          name: "description",
          type: "richText",
        },
      ],
    },
  ],
};
const vpsHome: GlobalConfig = {
  slug: "vpsHome",
  label: "Home Page",
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
          name: "Hero",
          fields: [HeroSectionFields],
        },
        {
          name: "ProShot",
          label: "ProShot Section",
          fields: [ProSectionFields],
        },
        {
          name: "About",
          fields: [AboutSectionFields],
        },
        {
          name: "Gallery",
          fields: [GallerySectionFields],
        },
        {
          name: "Bottom Navigation",
          fields: [BottomNavSectionFields],
        },
        {
          name: "Our Work",
          fields: [OurWorkSectionFields],
        },
        {
          name: "Team",
          fields: [TeamSectionFields],
        },
      ],
    },
  ],
};

export default vpsHome;
