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
type Props = {};

export default function GalleryDisplayer({ title, pages }: any) {
  const [p, setP] = useState(0);

  const renderPage = (pageData: any) => {
    if (!pageData.ml) return <></>;
    //
    switch (pageData.lt) {
      case "vertical":
        return <Vertical ml={pageData.ml} />;
      case "horizontal":
        return <Horizontal ml={pageData.ml} />;
      case "twoColumns":
        return <TwoColumns ml={pageData.ml} />;
      case "exCols":
        return <ExpandingColumns ml={pageData.ml} />;
      case "34poster":
        return <Poster ml={pageData.ml} />;
      case "fixedA":
        return <FixedA ml={pageData.ml} />;
      case "fixedB":
        return <FixedB ml={pageData.ml} />;
      case "fixedC":
        return <FixedC ml={pageData.ml} />;
      case "fixedD":
        return <FixedD ml={pageData.ml} />;
      default:
        return <Vertical ml={pageData.ml} />;
    }
  };

  console.log(pages);

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
        </div>
        <div className="r">
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
          <img src="/gfx/slogan.png" alt="" className="slogan" />
        </div>
      </section>

      <section id="gallery">
        {pages && pages.length > 0 && renderPage(pages[p])}
      </section>
    </main>
  );
}
