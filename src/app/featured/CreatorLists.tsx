"use client";
import React, { useEffect, useState } from "react";
import CreatorCard from "./CreatorCard";
import { createPortal } from "react-dom";

type Props = { creators: any };

type VideoData = {
  name: string;
  vid: string;
};
export default function CreatorLists({ creators }: Props) {
  const [currVid, setCurrVid] = useState<VideoData | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div className="creator-list">
        {creators.map((creator: any) => {
          return (
            <CreatorCard
              key={creator._id}
              creator={creator}
              onClick={() => {
                setCurrVid({ name: creator.name, vid: creator.Video });
              }}
            />
          );
        })}
      </div>

      {mounted &&
        createPortal(
          <div
            id="video-popup"
            className={currVid ? "show" : "close"}
            onClick={() => {
              setCurrVid(null);
            }}
          >
            {currVid && (
              <div className="panel">
                <iframe
                  src={`https://www.youtube.com/embed/${currVid?.vid}?autoplay=1`}
                  title="YouTube video player"
                  className="iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  key={"extra-video " + currVid?.vid}
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
