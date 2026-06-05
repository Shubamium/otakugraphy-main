"use client";

import { Media, VpsHome } from "@/payload-types";
import React, { useEffect, useRef, useState } from "react";
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
import Marquee from "react-fast-marquee";
type Props = {
  ourworkvps: VpsHome["Our Work"];
  founding: VpsHome["foundingAmbassador"];
  collaborators: VpsHome["collaborators"];
};

export default function OurWorkSection({
  collaborators,
  ourworkvps,
  founding,
}: Props) {
  const ow = ourworkvps?.ourwork;
  const [actImg, setActImg] = useState<null | string>(
    (ow?.worksList && (ow?.worksList[0]?.fullPreview as Media))?.url ?? null,
  );

  const imgRef = useRef<HTMLDivElement>(null);
  const works = (
    <>
      <div className="heading ">
        <img
          src={(ow?.headingBanner as Media)?.sizes?.medium?.url ?? undefined}
          alt=""
          className="bg"
        />
        <h2 className="first">{ow?.titleTop}</h2>
        <h2 className="center">{ow?.titleCenter}</h2>
        <h2 className="end">{ow?.titleBottom}</h2>
      </div>
      <div className="works ">
        <div className="work-part">
          <div className="works-head confine">
            <hr />
            <h2>{ow?.worksListHeading}</h2>
            <hr />
          </div>
          <div className="work-list confine">
            {ow?.worksList?.map((w, i: number) => {
              const thumb = w?.thumbnail as Media;
              const full = w.fullPreview as Media;

              return (
                <div
                  className="work btn"
                  key={w.id}
                  onClick={() => {
                    setActImg(full?.url ?? null);
                    imgRef?.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <img
                    src={thumb.sizes?.small?.url ?? undefined}
                    alt={thumb.alt}
                    className="thumb"
                  />
                  <p>{w.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="display" ref={imgRef}>
          <AnimatePresence mode="popLayout">
            <motion.img
              src={actImg ?? "emptydisimg"}
              alt=""
              className="displayimg"
              key={actImg}
              initial={{
                clipPath: "inset(0 0 100% 0)",
              }}
              animate={{
                clipPath: "inset(0 0 0 0)",
              }}
              exit={{
                clipPath: "inset(100% 0 0% 0)",
              }}
            />
          </AnimatePresence>
        </div>
      </div>
    </>
  );

  const collabo = (
    <div id="collaborators">
      <h3>{collaborators?.collaboratorSection?.sectionTitle}</h3>
      {collaborators?.collaboratorSection?.collaboratorRows?.map((c, i) => {
        return (
          <Marquee
            className="mar"
            key={c.id}
            direction={i % 2 === 0 ? "left" : "right"}
            pauseOnHover={true}
            autoFill
          >
            {c?.collaborators?.map((col) => {
              return (
                <img
                  src={(col.collaborator as Media)?.url ?? ""}
                  alt="Collaborator"
                />
              );
            })}
            {/* <img
              src="https://cdn.sanity.io/images/m3ohpj5z/production/97db214b79d8dfc3e7ec6919f7f44959cf2ebb4e-2000x1000.png?h=300&fm=webp"
              alt=""
            />
            <img
              src="https://cdn.sanity.io/images/m3ohpj5z/production/97db214b79d8dfc3e7ec6919f7f44959cf2ebb4e-2000x1000.png?h=300&fm=webp"
              alt=""
            />
            <img
              src="https://cdn.sanity.io/images/m3ohpj5z/production/97db214b79d8dfc3e7ec6919f7f44959cf2ebb4e-2000x1000.png?h=300&fm=webp"
              alt=""
            /> */}
          </Marquee>
        );
      })}
    </div>
  );
  return (
    <section id="our-work">
      {ow?.isVisible && works}
      {founding?.foundingAmbassador?.isVisible && (
        <FeaturedCreators founding={founding} />
      )}
      {collaborators?.collaboratorSection?.isVisible && collabo}
    </section>
  );
}

function FeaturedCreators({
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
    <div id="featured-creator">
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
