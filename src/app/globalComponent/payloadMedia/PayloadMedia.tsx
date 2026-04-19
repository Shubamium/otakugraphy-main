import { Media } from "@/payload-types";
import React from "react";

import "./payloadMedia.scss";
type Props = {
  media?: MediaSelector;
};

export type MediaSelector =
  | {
      type: "media" | "youtube";
      videoId?: string;
      media?: Media;
    }
  | undefined;
export default function PayloadMedia({ media }: Props) {
  if (media) {
    const isVideo = media.media?.mimeType?.startsWith("video") ?? false;
    if (media.type === "youtube") {
      return <StatelesMedia type="Youtube Embed" videoId={media.videoId} />;
    }
    if (isVideo) {
      return (
        <StatelesMedia
          type="Video"
          videoLink={media.media?.url ?? "undefined.mp4"}
        />
      );
    }

    return (
      <StatelesMedia
        type={"Image"}
        imageLink={
          media.media?.sizes?.medium?.url ?? media.media?.url ?? "undefined.png"
        }
      />
    );
  }
  return <div className="pmedia"></div>;
}

type SMProps = {
  type: "Video" | "Image" | "Youtube Embed";
  videoId?: string;
  videoLink?: string;
  imageLink?: string;
};
export function StatelesMedia({
  type,
  videoId,
  videoLink,
  imageLink,
}: SMProps) {
  return (
    <div className="pmedia">
      {type === "Image" && <img src={imageLink} />}

      {type === "Video" && <video controls src={videoLink} autoPlay muted />}
      {type === "Youtube Embed" && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          loading="lazy"
          title="YouTube video player"
          className="iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
