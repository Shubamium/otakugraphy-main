"use client";
import React, { useState } from "react";
import "./galleryDisplayer.scss";
import Vertical from "./layout/vertical/Vertical";
import Horizontal from "./layout/horizontal/Horizontal";
import TwoColumns from "./layout/twoColumns/TwoColumns";
import ExpandingColumns from "./layout/expandingColumns/ExpandingColumns";
import Poster from "./layout/poster/Poster";
import FixedA from "./layout/fixedA/FIxedA";
import FixedB from "./layout/fixedB/FIxedB";
import FixedC from "./layout/fixedC/FixedC";
import FixedD from "./layout/fixedD/FixedD";
import { urlFor } from "@/app/(otakugraphy)/otakugraphy/db/sanity";
import Link from "next/link";
import { FaPlayCircle, FaSave } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { BiCamera, BiStar } from "react-icons/bi";
import { CgStark } from "react-icons/cg";
import { FcStart } from "react-icons/fc";
import { BsFillStarFill } from "react-icons/bs";
type Props = {};

export default function GalleryDisplayer({
  title,
  description,
  side_images,
  pages,
  highlights,
}: any) {
  const [p, setP] = useState(0);

  // const showHighlights =
  //   highlights && highlights.ht && highlights.thumbnail && highlights.link;
  const showHighlights = highlights && highlights.length > 1;
  const renderPage = (pageData: any) => {
    if (!pageData.ml) return <></>;

    pageData.ml.forEach((p: any, i: number, arr: any[]) => {
      p.n = pageData.ml[i + 1] ?? null;
      p.p = pageData.ml[i - 1] ?? null;
    });

    const linked = pageData.ml;

    switch (pageData.lt) {
      case "vertical":
        return <Vertical ml={linked} hasHighlights={showHighlights} />;
      case "horizontal":
        return <Horizontal ml={linked} />;
      case "twoColumns":
        return <TwoColumns ml={linked} />;
      case "exCols":
        return <ExpandingColumns ml={linked} />;
      case "34poster":
        return <Poster ml={linked} />;
      case "fixedA":
        return <FixedA ml={linked} />;
      case "fixedB":
        return <FixedB ml={linked} />;
      case "fixedC":
        return <FixedC ml={linked} />;
      case "fixedD":
        return <FixedD ml={linked} />;
      default:
        return <Vertical ml={linked} hasHighlights={showHighlights} />;
    }
  };

  const next = () => {
    if (pages && pages.length > 0) {
      setP(Math.min(p + 1, pages.length - 1));
    }
  };
  const prev = () => {
    if (pages && pages.length > 0) {
      setP(Math.max(p - 1, 0));
    }
  };
  return (
    <main id="gallery-displayer">
      <section id="gd-head" className="confine">
        <div className="l">
          {/* Title */}
          <h1 className="h">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="r">
          {pages && pages.length > 1 && (
            <div className="p-controls">
              <svg
                width="44"
                height="52"
                viewBox="0 0 44 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="btn btn-page"
                onClick={prev}
              >
                <path
                  d="M43 50.2487L0.999998 26L43 1.7513L43 50.2487Z"
                  fill="#D9D9D9"
                  stroke="#D9D9D9"
                />
              </svg>
              <p>
                {p + 1}/{pages ? pages.length : 0}
              </p>
              <svg
                width="44"
                height="52"
                viewBox="0 0 44 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="btn btn-page r"
                onClick={next}
              >
                <path
                  d="M43 50.2487L0.999998 26L43 1.7513L43 50.2487Z"
                  fill="#D9D9D9"
                  stroke="#D9D9D9"
                />
              </svg>
            </div>
          )}
          {side_images && side_images.length > 0 && (
            <div className="side-images">
              {side_images.map((img: any, i: number) => (
                <img
                  src={urlFor(img).auto("format")?.url() ?? "/"}
                  alt=""
                  key={i}
                />
              ))}
            </div>
          )}
          {/* <img src="/gfx/slogan.png" alt="" className="slogan" /> */}
        </div>
      </section>

      <section id="gallery">
        {pages && pages.length > 0 && renderPage(pages[p])}
        {showHighlights && (
          <div className="highlights">
            <div className="panel ">
              <h2>
                HIGHLIGHTS <BsFillStarFill />
              </h2>
              <div className="hlist">
                {showHighlights &&
                  highlights.map((h: any, i: number) => {
                    return (
                      <div className="hpanel" key={"hpanel" + h._key + i}>
                        <iframe
                          src={`https://www.youtube.com/embed/${h.link}?autoplay=0`}
                          title="YouTube video player"
                          className="iframe"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                        <p>
                          <span className="title">{h.ht}</span>
                        </p>
                      </div>
                    );
                  })}
              </div>
              {/* <Link
                  href={highlights.link}
                  target="_blank"
                  className="link btn"
                >
                  <div className="thumb">
                    <img
                      src={
                        urlFor(highlights.thumbnail)
                          ?.height(600)
                          .auto("format")
                          ?.url() ?? undefined
                      }
                      className="thumbnail"
                      alt={urlFor(highlights.thumbnail)?.auto("format")?.url()}
                    />
                    <FaPlayCircle />
                  </div>
                  <span className="title">{highlights.ht}</span>
                </Link> */}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
