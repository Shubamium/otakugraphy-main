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
    setActiveMd(null);
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
          <p>
            {" "}
            © 2024 Otakugraphy LLC. All images and trademarks are the property
            of their respective owners.
          </p>
        </div>
        <div className="detail">
          {activeMd && activeMd.gd && (
            <div className="main">
              <div className="col">
                <h2>{activeMd.gd.d}</h2>
                <p>{activeMd.gd.l}</p>
              </div>
              <div className="col">
                <h2>{activeMd.gd.c}</h2>
                <p>{activeMd.gd.e}</p>
              </div>

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
          {activeMd && activeMd.gd && activeMd.gd.clink && (
            <div className="col">
              <h2>Full Collection</h2>
              <a href={activeMd.gd.clink} target="_blank">
                {activeMd.gd.clink}
              </a>
            </div>
          )}
          <img src="/gfx/logo_present.png" alt="" />
        </div>
      </div>
    </div>
  );
}
