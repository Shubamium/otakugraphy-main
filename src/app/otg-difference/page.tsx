import React from "react";

type Props = {};
import "./otgdiff.scss";
import OTGFrame from "./otgframe/OTGFrame";
import TestimonialSlide from "../components/TestimonialSlide";
import { fetchData } from "../db/sanity";
// import UnderConstruction from "../components/underConstuction/UnderConstruction";
export default async function Page({}: Props) {
  const gd = await fetchData<any>(`
			*[_type == 'general' && preset == 'main']{
				testimonials,
			}[0]
		`);
  return (
    <main id="p_otg-diff">
      <img src="/gfx/herobg.webp" alt="" className="head-bg" />
      <div className="od-head">
        <h1>The OTG Difference</h1>
        <p>Our History of Capturing Historical VTubing Events</p>
      </div>

      <OTGFrame
        options={{
          title: "VTubers Diving Into Aquarium of the Pacific",
          type: "video",
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
      />

      <section id="inside-look">
        <div className="confine">
          <div className="l">
            <h2>Inside Look Into The OTG Rigs</h2>
            <p>
              Our production rig utilizes top tier modern equipment to produce
              the highest quality live streams. The rig's portability and
              lightweight in a carry-on suitcase allows it to be taken globally.
              We are instituting the media industry-standard that all virtual
              creators deserve.
            </p>
          </div>
          <div className="r">
            <img src="/gfx/otgriginside.png" alt="" />
          </div>
        </div>
        p
      </section>
      <OTGFrame
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
      />

      <TestimonialSlide gd={gd} />
    </main>
  );
}
