"use client";
import React, { useState } from "react";
import "./galleryDisplayer.scss";
import Vertical from "./layout/vertical/Vertical";
type Props = {};

const layoutList = {
  vertical: <Vertical />,
  horizontal: <Vertical />,
  fixedA: <Vertical />,
};
export default function GalleryDisplayer({ title, pages }: any) {
  const [p, setP] = useState(0);

  const renderPage = (pageData: any) => {
    return <Vertical ml={pageData.ml} />;
  };

  console.log(pages);
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
            >
              <path
                d="M43 50.2487L0.999998 26L43 1.7513L43 50.2487Z"
                fill="#D9D9D9"
                stroke="#D9D9D9"
              />
            </svg>
            <p>1/35</p>
            <svg
              width="44"
              height="52"
              viewBox="0 0 44 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="btn btn-page r"
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
