"use client";

import { Media, VpsHome } from "@/payload-types";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
type Props = {
  data: VpsHome["Our Work"];
};

export default function OurWorkSection({ data }: Props) {
  const ow = data?.ourwork;
  const [actImg, setActImg] = useState<null | string>(
    (ow?.worksList && (ow?.worksList[0]?.fullPreview as Media))?.url ?? null,
  );

  const imgRef = useRef<HTMLDivElement>(null);
  return (
    <section id="our-work">
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
            <h2>OUR WORK</h2>
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
            {/* <div className="work btn">
              <img src="/g/cube3.png" alt="" className="thumb" />
              <p>SILVERVALE 3D CONCERT</p>
            </div>
            <div className="work btn">
              <img src="/g/cube3.png" alt="" className="thumb" />
              <p>SILVERVALE 3D CONCERT</p>
            </div>
            <div className="work btn">
              <img src="/g/cube3.png" alt="" className="thumb" />
              <p>SILVERVALE 3D CONCERT</p>
            </div>
            <div className="work btn">
              <img src="/g/cube3.png" alt="" className="thumb" />
              <p>SILVERVALE 3D CONCERT</p>
            </div>
            <div className="work btn">
              <img src="/g/cube3.png" alt="" className="thumb" />
              <p>SILVERVALE 3D CONCERT</p>
            </div> */}
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
    </section>
  );
}
