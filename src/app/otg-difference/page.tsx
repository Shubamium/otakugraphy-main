import React from "react";

type Props = {};
import "./otgdiff.scss";
import OTGFrame from "./otgframe/OTGFrame";
import TestimonialSlide from "../components/TestimonialSlide";
import { fetchData, urlFor } from "../db/sanity";
// import UnderConstruction from "../components/underConstuction/UnderConstruction";
export default async function Page({}: Props) {
  const gd = await fetchData<any>(`
			*[_type == 'general' && preset == 'main']{
				testimonials,
			}[0]
		`);

  const otgdiff = await fetchData<any>(`
			*[_type == 'otg-diff' && preset == 'main']{
				...,
				frames,
			}[0]
		`);
  const frameList = otgdiff?.frames ? (otgdiff.frames as any[]) : [];
  const top = frameList?.slice(0, 3);
  const bottom = frameList?.slice(3);
  return (
    <main id="p_otg-diff">
      <img src="/gfx/herobg.webp" alt="" className="head-bg" />
      <div className="od-head">
        <h1>{otgdiff.otg_t}e</h1>
        <p>{otgdiff.otg_d}</p>
      </div>
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
      {/* 	
      <OTGFrame
        options={{
          title: "VTubers Diving Into Aquarium of the Pacific",
          type: "video",
          videoID: "qTr2x78_u4k",
        }}
      />
      <OTGFrame
        options={{
          title: "VTubers Roaming ALA",
          type: "video",
          reverse: true,
          extraVID: ["dQw4w9WgXcQ", "5qap5aO4i9A"],
        }}
      />
      <OTGFrame
        options={{
          title: "1st VTuber Concert on a Battleship @USS Iowa",
          type: "video",
          videoID: "Du4unKMbR2Q",
        }}
      /> */}

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
