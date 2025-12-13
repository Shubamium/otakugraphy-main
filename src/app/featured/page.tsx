import React from "react";

import "./featured.scss";

import { FaPlay } from "react-icons/fa6";
import FeaturedAction from "./FeaturedAction";
import { fetchData, urlFor } from "../db/sanity";
import CreatorCard from "./CreatorCard";
import CreatorLists from "./CreatorLists";

type Props = {
  searchParams: Promise<{
    q?: string;
    from?: string;
    to?: string;
    cc?: string;
    a?: string;
    e?: string;
  }>;
};

function formateDate(ds?: string) {
  if (ds) {
    const split = ds.split("-");
    return split;
  }
  return null;
}
export default async function page({ searchParams }: Props) {
  const sp = await searchParams;
  const nameCondition = sp.q ? `&& name match "${sp.q}*"` : "";

  const fbd = formateDate(sp.from);
  const tbd = formateDate(sp.to);

  const beforeDate = fbd ? new Date(Number(fbd[0]), Number(fbd[1])) : null;
  const afterDate = tbd ? new Date(Number(tbd[0]), Number(tbd[1])) : null;
  const dateFromCondition = beforeDate
    ? `&& date >= "${beforeDate.toISOString()}"`
    : "";
  const dateToCondition = afterDate
    ? `&& date <= "${afterDate.toISOString()}"`
    : "";

  const colorCondition = sp.cc ? `&& color == "${sp.cc}"` : "";
  const eventCondition = sp.e ? `&& event->slug.current == "${sp.e}"` : "";
  const conditions = [
    nameCondition,
    dateFromCondition,
    dateToCondition,
    colorCondition,
    eventCondition,
  ].join("");
  const creators = await fetchData<any>(`
			*[_type == 'creator' ${conditions} ]{
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
        <FeaturedAction
          events={eventList}
          agencies={agency}
          paramDefaultValue={{
            a: sp.a,
            cc: sp.cc,
            from: sp.from,
            q: sp.q,
            to: sp.to,
          }}
        />
      </div>

      <CreatorLists creators={creators} />
    </main>
  );
}
