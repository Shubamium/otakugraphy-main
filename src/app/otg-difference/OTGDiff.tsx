"use client";
import React, { useEffect, useState } from "react";
import OTGFrame from "./otgframe/OTGFrame";
import TestimonialSlide from "../components/TestimonialSlide";
import { urlFor } from "../db/sanity";
import { AnimatePresence } from "motion/react";
type Props = { otgdiff: any; fl: any; gd: any };
import { motion } from "motion/react";
export default function OTGDiff({ otgdiff, fl, gd }: Props) {
  const [framesMap, setFramesMap] = useState(new Map<string, any[]>());
  const [activeCat, setActiveCat] = useState(fl[0]?.categoryName ?? "");
  useEffect(() => {
    const newMap = new Map<string, any[]>();
    for (let i = 0; i < fl.length; i++) {
      newMap.set(fl[i]?.categoryName, fl[i]?.frames);
    }
    setFramesMap(newMap);
  }, [fl]);
  const activeFrame = framesMap.get(activeCat);
  const frameList = activeFrame ?? [];
  const top = frameList?.slice(0, 3);
  const bottom = frameList?.slice(3);
  return (
    <main id="p_otg-diff">
      <img src="/gfx/herobg.webp" alt="" className="head-bg" />
      <div className="od-head">
        <h1>{otgdiff.otg_t}e</h1>
        <p>{otgdiff.otg_d}</p>
        <div className="controls">
          {fl?.map((f: any, i: number) => {
            return (
              <button
                className={`btn cat ${activeCat == f.categoryName ? "active" : ""}`}
                onClick={() => {
                  setActiveCat(f.categoryName);
                }}
                key={f.categoryName}
              >
                {" "}
                {f.categoryName}
              </button>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          key={activeCat}
          className="allframe"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
        >
          {top?.map((f: any, i: number) => {
            return (
              <OTGFrame
                options={{
                  title: f.title,
                  type: f.type,
                  reverse: i % 2 == 0,
                  videoID: f.ytvid,
                  extraVID: f.extraVideos,
                  imageURL: f.image
                    ? urlFor(f.image).auto("format").url()
                    : undefined,
                }}
                key={i + "frames" + f._key}
              />
            );
          })}

          {otgdiff?.cs && (
            <section id="inside-look">
              <div className="confine">
                <div className="l">
                  <h2>{otgdiff.cs?.title}</h2>
                  <p>{otgdiff.cs?.desc}</p>
                </div>
                <div className="r">
                  <img
                    src={
                      otgdiff?.cs?.image &&
                      urlFor(otgdiff.cs.image)?.format("webp").height(900).url()
                    }
                    alt=""
                  />
                </div>
              </div>
              p
            </section>
          )}
          {bottom?.map((f: any, i: number) => {
            return (
              <OTGFrame
                options={{
                  title: f.title,
                  type: f.type,
                  reverse: i % 2 == 0,
                  videoID: f.ytvid,
                  extraVID: f.extraVideos,
                  imageURL: f.image
                    ? urlFor(f.image).auto("format").url()
                    : undefined,
                }}
                key={i + "frames" + f._key}
              />
            );
          })}
        </motion.div>
      </AnimatePresence>
      {/* <OTGFrame
        options={{
          title: "1st VTubers at Ripley’s ‘Believe Or Not’ Museum",
          type: "video",
          videoID: "Du4unKMbR2Q",
        }}
      />
      <OTGFrame
        options={{
          title: "1st VTubers Concert IRL Band + 3D Concert in North America",
          type: "video",
          reverse: true,
          videoID: "Faxp1cwhP-4",
        }}
      /> */}

      <TestimonialSlide gd={gd} />
    </main>
  );
}
