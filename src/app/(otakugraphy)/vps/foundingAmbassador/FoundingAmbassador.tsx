"use client";

import { Media, VpsHome } from "@/payload-types";
import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import PayloadMedia, {
  MediaSelector,
} from "@/app/globalComponent/payloadMedia/PayloadMedia";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

export default function FoundingAmbassador({
  founding,
}: {
  founding: VpsHome["foundingAmbassador"];
}) {
  const creators = founding?.foundingAmbassador?.creatorList ?? [];
  const [activeCreator, setActiveCreator] = useState(0);

  const handleNext = () => {
    setActiveCreator((prev) => (prev + 1) % creators.length);
  };

  const handlePrev = () => {
    setActiveCreator((prev) => (prev - 1 + creators.length) % creators.length);
  };

  const handlePageClick = (index: number) => {
    setActiveCreator(index);
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const movX = useTransform(x, [0, 1], [5, -10]);
  const movY = useTransform(y, [0, 1], [5 * 1.7, -10 * 1.7]);
  const bgx = useTransform(x, [0, 1], [-45, 40]);
  const bgy = useTransform(y, [0, 1], [-45 * 1.7, 40 * 1.7]);
  const springX = useSpring(movX);
  const springY = useSpring(movY);
  const currentCreator = creators[activeCreator];
  const mainArtMedia = currentCreator?.mainArt as Media | undefined;
  const pfpMedia = currentCreator?.pfp as Media | undefined;

  useEffect(() => {
    const mouseMoveListener = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth);
      y.set(e.clientY / window.innerHeight);
      console.log(x.get(), y.get());
    };
    window.addEventListener("mousemove", mouseMoveListener);
    return () => {
      window.removeEventListener("mousemove", mouseMoveListener);
    };
  }, []);
  if (!currentCreator) {
    return null;
  }

  return (
    <div id="featured-creator" className="scrolloffset">
      <button className="btn btn-name left" onClick={handlePrev}>
        <GoTriangleLeft />{" "}
      </button>
      <div className="fc-head">
        <h2>{founding?.foundingAmbassador?.sectionTitle}</h2>
        <hr />
        <div className="pages">
          <div className="list">
            {creators.map((_, index) => (
              <button
                key={index}
                className={`btn p ${activeCreator === index ? "active" : ""}`}
                onClick={() => handlePageClick(index)}
              ></button>
            ))}
          </div>
          <p>
            {activeCreator + 1}/{creators.length}
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="fc-content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          key={currentCreator.id}
        >
          <div className="art">
            <motion.div
              style={{ x: bgx, y: bgy }}
              className="bg-rect"
            ></motion.div>
            <motion.img
              style={{ x: springX, y: springY }}
              src={mainArtMedia?.sizes?.medium?.url ?? "/gfx/fcplace.png"}
              alt={mainArtMedia?.alt ?? "Creator art"}
              className="fc"
            />
          </div>
          <div className="content">
            <div className="chead">
              <h3>{currentCreator.name}</h3>
              <p>{currentCreator.title}</p>
            </div>
            <div className="desc">{currentCreator.desc}</div>
            <PayloadMedia media={currentCreator.media as MediaSelector} />
            <div className="quotes">
              <div className="q">
                <p>"</p>
              </div>
              <div className="quote">
                <p>{currentCreator.quote}</p>
              </div>
              <img
                src={pfpMedia?.url ?? "/"}
                alt={pfpMedia?.alt ?? "Profile"}
                className="pfp"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button className="btn btn-name right" onClick={handleNext}>
        <GoTriangleRight />{" "}
      </button>
    </div>
  );
}
