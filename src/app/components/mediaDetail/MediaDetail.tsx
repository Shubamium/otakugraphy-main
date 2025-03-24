"use client";
import { urlFor } from "@/app/db/sanity";
import "./mediaDetail.scss";
import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

type Props = {};

export default function MediaDetail({}: Props) {
  const [v, setV] = useState(false);
  const [activeMd, setActiveMd] = useState<any>();

  const close = () => {
    setV(false);
  };

  useEffect(() => {
    window.addEventListener("md", (data: any) => {
      console.log(data.detail);
      setV(true);

      setActiveMd(data.detail);
    });
  }, []);

  useEffect(() => {}, []);

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
          <img
            src={urlFor(activeMd.image).auto("format").url()}
            id="view"
            className="img"
          />
        )}
        {activeMd && activeMd.type === "video" && activeMd.video && (
          <video
            src={activeMd.video}
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
      <div className="detail-bar">
        <div className="warn">
          <p>Press anywhere to close . . .</p>
          <p> © Copyright 2025 Otakugraphy All rights reserved</p>
        </div>
        <div className="detail">
          {activeMd && activeMd.gd && (
            <div className="main">
              <div className="col">
                <h2>{activeMd.gd.l}</h2>
                <p>{activeMd.gd.d}</p>
              </div>
              <div className="col">
                <h2>{activeMd.gd.e}</h2>
              </div>

              {/* AIL */}
              <div className="cb-l">
                {activeMd.ail &&
                  activeMd.ail.map((ai: any, index: number) => {
                    return (
                      <div className="cb" key={ai._key + " " + index}>
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
          <img src="/gfx/logo_present.png" alt="" />
        </div>
      </div>
    </div>
  );
}
