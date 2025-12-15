"use client";
import { urlFor } from "@/app/db/sanity";
import "./media.scss";
import { CSSProperties, useEffect, useRef, useState } from "react";

import { HiInformationCircle } from "react-icons/hi";

type Props = {
  data?: any;
  n?: any;
  p?: any;
  disabled?: boolean;
  imageHeight?: number;
};

export default function Media({ data, n, p, disabled, imageHeight }: Props) {
  // const [loaded, setLoaded] = useState(false);
  // const [imageUrl, setImageUrl] = useState("empty");
  // const [z, setZ] = useState(1);
  const vidRef = useRef<HTMLVideoElement>(null);
  // useEffect(() => {
  //   // const src = urlFor(data.image).auto("format").height(700).url();
  //   // const img = new Image();
  //   // img.src = src;
  //   // img.onload = (ev) => {
  //   //   setImageUrl(img.src);
  //   //   setLoaded(true);
  //   // };
  // }, [data]);
  useEffect(() => {
    if (disabled) return;
    const playVid = (newD: any) => {
      if (vidRef.current) {
        if (newD.detail && newD.detail._id === data._id) {
          // console.log(newD.detail);
          vidRef.current.pause();
        } else if (newD.detail && newD.detail._id !== data._id) {
          vidRef.current.play();
          vidRef.current.volume = 0;
        }
      }
    };
    window.addEventListener("md", playVid);

    return () => {
      window.removeEventListener("md", playVid);
    };
  }, []);

  useEffect(() => {
    if (disabled) return;

    const fstest = async () => {
      document.addEventListener("fullscreenchange", () => {
        const fs = document.fullscreenElement;
        fs?.requestFullscreen();

        if (vidRef.current && document.fullscreenElement === vidRef.current) {
          vidRef.current.volume = 1.0;
          vidRef.current.muted = false;
          console.log("hi", vidRef.current);
        }
      });
    };
    fstest();
  }, []);
  const openMediaDetail = () => {
    const mdEvent = new CustomEvent("md", {
      detail: {
        ...data,
      },
    });
    window.dispatchEvent(mdEvent);
  };
  return (
    <div
      className="media"
      onClick={(e) => {
        if (disabled) return;
        if (data && data.type !== "video") {
          openMediaDetail();
        }
      }}
      // key={data._id}
      // layout="preserve-aspect"
      // layoutId={data._id}
      // transition={{
      //   duration: 0.05,
      // }}
      // style={{
      //   zIndex: z,
      //   willChange: "transform,z-index",
      // }}
      // onUpdate={(latest) => {
      //   if ((latest.scale as number) > 1) setZ(100);
      //   else setZ(1);
      // }}
    >
      {data && (
        <>
          <p className="alt">{data.gd && data.gd.alt}</p>
          {data.type === "image" && data.image && (
            <>
              <img
                src={urlFor(data.image)
                  .auto("format")
                  .height(imageHeight ?? 1080)
                  .url()}
                alt={data.gd && data.gd.alt}
                key={data.image}
                className="img"
              />
              {/* <Blurhash hash={data.metadata.blurHash} className="blur" /> */}
            </>
          )}
          {data.type === "video" && data.video && (
            <>
              <button
                className="btn btn-vfs"
                onClick={() => {
                  openMediaDetail();
                }}
              >
                {" "}
                <HiInformationCircle />{" "}
              </button>
              <video
                src={data.video}
                className="video"
                playsInline
                // disablePictureInPicture
                // disableRemotePlayback
                ref={vidRef}
                autoPlay
                muted
                controls
                loop
              />
            </>
          )}
          {data.type === "video_yt" && data.video_id && (
            <>
              <button
                className="btn btn-vfs"
                onClick={() => {
                  openMediaDetail();
                }}
              >
                {" "}
                <HiInformationCircle />{" "}
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${data.video_id}?autoplay=1&muted=1&loop=1`}
                title="YouTube video player"
                style={
                  {
                    aspectRatio: data.video_aspect
                      ? data.video_aspect
                      : "16 / 9",
                  } as CSSProperties
                }
                className="iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </>
          )}
        </>
      )}
    </div>
  );
}
