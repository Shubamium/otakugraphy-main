"use client";
import { urlFor } from "@/app/db/sanity";
import "./media.scss";
type Props = {};

export default function Media({ data }: any) {
  return (
    <div
      className="media"
      onClick={() => {
        const mdEvent = new CustomEvent("md", {
          detail: {
            ...data,
          },
        });
        window.dispatchEvent(mdEvent);
      }}
    >
      {data.type === "image" && data.image && (
        <img
          src={urlFor(data.image).auto("format").url()}
          alt=""
          className="img"
        />
      )}
      {data.type === "video" && data.video && (
        <video
          src={data.video}
          className="video"
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          autoPlay
          muted
          controls
          loop
        />
      )}
    </div>
  );
}
