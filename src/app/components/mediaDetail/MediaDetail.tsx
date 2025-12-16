"use client";
import { urlFor } from "@/app/db/sanity";
import "./mediaDetail.scss";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { BiLoaderCircle } from "react-icons/bi";
import {
  RiLoader2Fill,
  RiLoader3Fill,
  RiLoader4Fill,
  RiLoader5Fill,
  RiLoader5Line,
} from "react-icons/ri";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

import { motion } from "motion/react";
type Props = {};

export default function MediaDetail({}: Props) {
  const [v, setV] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeMd, setActiveMd] = useState<any>();

  const imgref = useRef<HTMLImageElement>(null);
  const [img, setImg] = useState<string | undefined>(undefined);
  const close = () => {
    setV(false);
    setActiveMd(null);
  };

  useEffect(() => {
    const changeMD = (data: any) => {
      setV(true);

      setActiveMd(data.detail);
    };
    window.addEventListener("md", changeMD);

    return () => {
      window.removeEventListener("md", changeMD);
    };
  }, []);

  useEffect(() => {
    if (activeMd && activeMd.type === "image" && imgref.current) {
      setLoading(true);
      const dv = new Image();
      dv.src = urlFor(activeMd.image).format("webp").height(800).url();
      dv.onload = () => {
        if (imgref.current) {
          // imgref.current.src = image.src;
        }
        setLoading(false);
        setImg(dv.src);
      };
    }
  }, [activeMd]);

  const callMdEvent = (data: any) => {
    const ev = new CustomEvent("md", {
      detail: data,
    });

    window.dispatchEvent(ev);
  };
  return (
    <div
      id="media-detail"
      className={v ? "v" : "h"}
      onClick={() => {
        close();
      }}
    >
      <div className="mc">
        {activeMd && activeMd.type == "image" && (
          <>
            <div className="imgcont">
              {loading ? (
                <RiLoader5Fill className="loader-circ" />
              ) : (
                <img
                  id="view"
                  ref={imgref}
                  className="img"
                  src={img}
                  // key={activeMd._id}
                  // layout="preserve-aspect"
                  // layoutId={activeMd._id}
                  // transition={{
                  // duration: 0.05,
                  // }}
                />
              )}

              {activeMd && activeMd.gd && activeMd.gd.clink && (
                <a
                  className="btn collections"
                  target="_blank"
                  href={activeMd.gd.clink}
                >
                  <h2>Full Collection</h2>
                  <HiMiniArrowTopRightOnSquare />
                </a>
              )}
            </div>
          </>
        )}
        {/* <p>{img}</p> */}
        {activeMd && activeMd.type === "video" && activeMd.video && (
          <div className="imgcont">
            <video
              src={activeMd.video}
              className="video"
              playsInline
              autoPlay
              // muted
              controls
              loop
            />
            {activeMd && activeMd.gd && activeMd.gd.clink && (
              <a
                className="btn collections"
                target="_blank"
                href={activeMd.gd.clink}
              >
                <h2>Full Collection</h2>
                <HiMiniArrowTopRightOnSquare />
              </a>
            )}
          </div>
        )}
        {activeMd && activeMd.type === "video_yt" && activeMd.video_id && (
          <iframe
            src={`https://www.youtube.com/embed/${activeMd.video_id}?autoplay=1&muted=0&loop=1`}
            title="YouTube video player"
            style={
              {
                aspectRatio: activeMd.video_aspect
                  ? activeMd.video_aspect
                  : "16 / 9",
              } as CSSProperties
            }
            className="iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
      {activeMd && activeMd.p && (
        <button
          className="btn btn-c l"
          onClick={(e) => {
            e.stopPropagation();
            callMdEvent(activeMd.p);
          }}
        >
          {" "}
          <FaArrowLeft />
        </button>
      )}
      {activeMd && activeMd.n && (
        <button
          className="btn btn-c r"
          onClick={(e) => {
            e.stopPropagation();

            // setActiveMd(activeMd.n);
            callMdEvent(activeMd.n);
          }}
        >
          {" "}
          <FaArrowRight />
        </button>
      )}

      <div className="detail-bar">
        <div className="warn">
          <p>Press anywhere to close . . .</p>
          <p>
            {" "}
            © 2025 Otakugraphy. All images and trademarks are the property of
            their respective owners.
          </p>
        </div>
        <div className="data">
          <div className="detail">
            {activeMd && activeMd.gd && (
              <div className="main">
                <div className="col">
                  <h2>{activeMd.gd.d}</h2>
                  <p>{activeMd.gd.l}</p>
                </div>
                {(activeMd.gd.c || activeMd.gd.e) && (
                  <div className="col">
                    <h2>{activeMd.gd.c}</h2>
                    <p>{activeMd.gd.e}</p>
                  </div>
                )}
                {(activeMd.gd.otgr || activeMd.gd.otgn) && (
                  <div className="col">
                    <h2>{activeMd.gd.otgr}</h2>
                    <p>{activeMd.gd.otgn}</p>
                  </div>
                )}
                {/* AIL */}
                <div className="cb-l">
                  {activeMd.ail &&
                    activeMd.ail.map((ai: any, index: number) => {
                      return (
                        <div className="col" key={ai._key + " " + index}>
                          <h2>{ai.title}</h2>
                          <p>{ai.desc}</p>
                        </div>
                      );
                    })}
                  {/* <div className="cb">
                  <h2>Location here</h2>
                  <p>17 March 2025</p>
                </div> */}
                </div>
              </div>
            )}
          </div>

          <div className="watermark">
            {/* {activeMd && activeMd.gd && activeMd.gd.clink && (
              <div className="col">
                <h2>Full Collection</h2>
                <a href={activeMd.gd.clink} target="_blank">
                  {activeMd.gd.clink}
                </a>
              </div>
            )} */}
            <img src="/gfx/icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
