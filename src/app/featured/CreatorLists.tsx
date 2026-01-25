"use client";
import React, { useEffect, useState } from "react";
import CreatorCard from "./CreatorCard";
import { createPortal } from "react-dom";
import "./creatorList.scss";
import { FaXmark } from "react-icons/fa6";
import { getCachedYoutubeDate, getYoutubeDate } from "../db/youtube";
type Props = { creators: any; view?: string };

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

function groupByAgency(creators: any[]) {
  const groupedMap = new Map();
  for (let i = 0; i < creators.length; i++) {
    if (groupedMap.has(creators[i].agency)) {
      groupedMap.get(creators[i].agency)?.push(creators[i]);
    } else {
      groupedMap.set(creators[i].agency, [creators[i]]);
    }
  }
  console.log("grouped result", groupedMap);
  // Remove independent and sort the rest by getting the keys
  const indipendent = groupedMap.get("Independent");
  const toRender = [{ name: "Independent", creators: indipendent }];

  const sortedKeys = Array.from(groupedMap.keys()).sort();

  for (let i = 0; i < sortedKeys.length; i++) {
    if (sortedKeys[i] !== "Independent") {
      toRender.push({
        name: sortedKeys[i],
        creators: groupedMap.get(sortedKeys[i]),
      });
    }
  }
  return toRender;
}

async function groupByYoutubeDate(creators: any[]) {
  const datedCreators = [];
  for (let i = 0; i < creators.length; i++) {
    const currCreator = creators[i];
    // If the current creator has a video link then look up the youtube
    if (currCreator.Video) {
      const youtubeDate = await getCachedYoutubeDate(currCreator.Video);
      if (youtubeDate.success && youtubeDate.date) {
        currCreator.date = new Date(youtubeDate.date);
      }
    }
    datedCreators.push(currCreator);
  }
  // Sort by date
  datedCreators.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return datedCreators;
}
export default function CreatorLists({ creators, view }: Props) {
  const [currVid, setCurrVid] = useState<VideoData | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeDate, setActiveDate] = useState<Date | null>(null);

  const [groupRender, setGroupRender] = useState<
    {
      name: string;
      creators: any[];
    }[]
  >();
  const [dateRender, setDateRender] = useState<any[]>([]);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function getDate() {
      if (currVid && currVid.vid) {
        const youtubeDate = await getCachedYoutubeDate(currVid.vid);
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

  useEffect(() => {
    // Sorting ================================
    // Group By Agency

    if (view == "agency") {
      setGroupRender(groupByAgency(creators));
    }
    if (view == "date") {
      // Replace All date with new youtube date
      groupByYoutubeDate(creators).then((res) => {
        setDateRender(res);
      });
    }
  }, [view]);

  return (
    <>
      <div id="creator-list">
        {(view === "default" || view === "name") &&
          creators?.map((creator: any, i: number) => {
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
        {/* Sort By Date */}
        {view === "date" &&
          dateRender?.map((creator: any, i: number) => {
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
        {/* Group by Agency */}
        {view === "agency" &&
          groupRender &&
          groupRender?.length > 0 &&
          groupRender?.map((group: any, i: number) => {
            return (
              <div key={group.name} className="groups">
                <h2 className="gn">{group.name}</h2>
                <div className="creator-list">
                  {group.creators?.map((creator: any, i: number) => {
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
              </div>
            );
          })}
        {/* <div className="grouped">
          <p>Group Name</p>
        </div> */}
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
          document.body,
        )}
    </>
  );
}
