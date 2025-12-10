import React from "react";

type Props = {};
import "./featured.scss";

import { FaPlay } from "react-icons/fa6";
import FeaturedAction from "./FeaturedAction";
import { fetchData, urlFor } from "../db/sanity";
export default async function page({}: Props) {
  const creators = await fetchData<any>(`
			*[_type == 'creator']{
			...}
	`);
  return (
    <main id="p_featured">
      <div className="featured-h">
        <div className="text">
          <h2>Featured Creators</h2>
          <p>
            (placeholder) Our History of Capturing Historical VTubing Events
          </p>
        </div>
        <FeaturedAction />
      </div>

      <div className="creator-list">
        {creators.map((creator: any) => {
          return (
            <div className="creator" key={creator._id}>
              <div className="panel">
                <p className="name">{creator.name}</p>
                <img
                  src={creator.art && urlFor(creator.art).auto("format").url()}
                  alt=""
                  className="creator-art"
                />
              </div>
              <div className="bottom-info">
                <div className="top">
                  <p className="a">Agency</p>
                  <h2 className="n">Creator Name</h2>
                </div>
                <button className="btn btn-play">
                  <FaPlay />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
