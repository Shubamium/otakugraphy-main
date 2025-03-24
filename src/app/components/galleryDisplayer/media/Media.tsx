"use client";
import { urlFor } from "@/app/db/sanity";
import "./media.scss";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
type Props = {
  data?: any;
};

export default function Media({ data }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("empty");

  useEffect(() => {
    // const src = urlFor(data.image).auto("format").height(700).url();
    // const img = new Image();
    // img.src = src;
    // img.onload = (ev) => {
    //   setImageUrl(img.src);
    //   setLoaded(true);
    // };
  }, [data]);
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
      {data && (
        <>
          {data.type === "image" && data.image && (
            <>
              <img
                src={urlFor(data.image).auto("format").height(700).url()}
                alt=""
                className="img"
              />
              {/* <Blurhash hash={data.metadata.blurHash} className="blur" /> */}
            </>
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
        </>
      )}
    </div>
  );
}
