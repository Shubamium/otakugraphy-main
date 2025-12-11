import React from "react";

type Props = {};
import "./featured.scss";

import { FaPlay } from "react-icons/fa6";
import FeaturedAction from "./FeaturedAction";
import { fetchData, urlFor } from "../db/sanity";
import CreatorCard from "./CreatorCard";
import CreatorLists from "./CreatorLists";
export default async function page({}: Props) {
  const creators = await fetchData<any>(`
			*[_type == 'creator']{
			...}
	`);
  const eventList = await fetchData<any>(`
			*[_type == 'creator-event']{
			...}
	`);

  const agency = await fetchData<any>(`
			*[_type == 'creator-agency']{
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
        <FeaturedAction events={eventList} agencies={agency} />
      </div>

      <CreatorLists creators={creators} />
    </main>
  );
}
