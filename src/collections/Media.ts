import type {
  CollectionConfig,
  Field,
  ImageUploadFormatOptions,
} from "payload";
const formatOptions: ImageUploadFormatOptions = {
  format: "webp",
  options: {
    quality: 80,
  },
};
export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    formatOptions,
    imageSizes: [
      {
        name: "small",
        height: 400,
      },
      {
        name: "medium",
        width: 1920,
        height: 1080,
        fit: "inside",
        withoutEnlargement: true,
        background: "#FFFFFF00",
      },
    ],
  },
};

export const MediaSelector: Field[] = [
  {
    name: "type",
    type: "select",
    options: [
      {
        label: "Media",
        value: "media",
      },
      {
        label: "Youtube Embed",
        value: "youtube",
      },
    ],
  },
  {
    name: "videoId",
    label: "Video ID",
    type: "text",
    admin: {
      condition: (data, _sibling) => _sibling.type === "youtube",
    },
  },

  {
    name: "media",
    type: "upload",
    relationTo: "media",
    admin: {
      condition: (data, _sibling) => _sibling.type === "media",
    },
  },
];
