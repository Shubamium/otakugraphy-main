"use client";
import React, { useEffect, useState } from "react";
import CreatorCard from "./CreatorCard";
import { createPortal } from "react-dom";
import "./creatorList.scss";
import { FaXmark } from "react-icons/fa6";
import { getCachedYoutubeDate, getYoutubeDate } from "../db/youtube";
type Props = { creators: any };

type VideoData = {
  name: string;
  vid: string;
  date: string;
  fields?: {
    _key: string;
    title: string;
    value: string;
  }[];
  extra_vids?: string[];
};
export default function CreatorLists({ creators }: Props) {
  const [currVid, setCurrVid] = useState<VideoData | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeDate, setActiveDate] = useState<Date | null>(null);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function getDate() {
      if (currVid && currVid.vid) {
        const youtubeDate = await getYoutubeDate(currVid.vid);
        if (youtubeDate.success && youtubeDate.date) {
          setActiveDate(new Date(youtubeDate.date));
        } else {
          setActiveDate(new Date(currVid.date));
        }
      } else if (currVid && currVid.date) {
        setActiveDate(new Date(currVid.date));
      }
    }
    getDate();
  }, [currVid]);

  return (
    <>
      <div id="creator-list">
        {creators?.map((creator: any, i: number) => {
          return (
            <CreatorCard
              key={creator._id + "creator-card" + i}
              creator={creator}
              onClick={() => {
                setCurrVid({
                  name: creator.name,
                  vid: creator.Video,
                  date: creator.date,
                  fields: creator.fields,
                  extra_vids: creator.extra_vids,
                });
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
                <button
                  className="btn btn-popclose"
                  onClick={() => {
                    setCurrVid(null);
                  }}
                >
                  {" "}
                  <FaXmark />
                </button>
                <div
                  className={`content ${currVid?.extra_vids?.length && currVid?.extra_vids?.length > 0 ? "hasExtra" : ""}`}
                >
                  <div className="main">
                    <iframe
                      src={`https://www.youtube.com/embed/${currVid?.vid}?autoplay=1`}
                      title="YouTube video player"
                      className="iframe"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      key={"main-video " + currVid?.vid}
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="side">
                    {currVid?.extra_vids?.map((vid: string, i: number) => {
                      return (
                        <iframe
                          src={`https://www.youtube.com/embed/${vid}?autoplay=0&mute=1`}
                          title="YouTube video player"
                          className="iframe"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          key={"extra-vids" + i + vid}
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      );
                    })}
                  </div>
                </div>
                <div className="info-rows">
                  {activeDate && (
                    <div className="if">
                      <h3>Date</h3>
                      <p>{activeDate.toDateString()}</p>
                    </div>
                  )}
                  {currVid?.fields?.map((field: any, i: number) => {
                    return (
                      <div className="if" key={i + field._key}>
                        <h3>{field.title}</h3>
                        <p>{field.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
