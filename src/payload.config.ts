import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

import { s3Storage } from "@payloadcms/storage-s3";
import vpsHome from "./collections/vps/g/vpsHome";
import vpsGeneral from "./collections/vps/g/vpsGeneral";
import vpsJobs from "./collections/vps/c/vpsJobs";
import { Portal } from "./collections/portal/g/PortalGeneral";
import { vpsJobsPage } from "./collections/vps/g/vpsJobsPage";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: "http://localhost:3000",
      globals: ["vpsHeader", "vpsHome"],
    },
  },
  collections: [Users, Media, vpsJobs],
  globals: [vpsGeneral, vpsHome, Portal, vpsJobsPage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,

  plugins: [
    s3Storage({
      bucket: "otakugraphy",
      clientUploads: true,
      collections: {
        media: {
          disablePayloadAccessControl: true,
        },
      },
      config: {
        endpoint: "https://minio-api.venmiart.com",
        region: "us-east-1",
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.MINIO_AK ?? " ",
          secretAccessKey: process.env.MINIO_SK ?? " ",
        },
      },
    }),
  ],
});
