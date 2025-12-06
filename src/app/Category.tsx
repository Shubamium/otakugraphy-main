"use client";
import React, { useEffect } from "react";
import Media from "./components/galleryDisplayer/media/Media";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { animate, useMotionValue, motion } from "motion/react";
import useMeasure from "react-use-measure";
import { useRouter } from "next/navigation";

type Props = {
  gd: any;
};

export default function Category({ gd }: Props) {
  // console.log(gd);
  const router = useRouter();
  return (
    // /<div>Category</div>
    <section id="category">
      {gd &&
        gd.cm &&
        gd.cm.map((cr: any, i: number) => {
          return (
            <div className="category-row" key={cr._key + "" + i}>
              <Link href={cr.route_link ?? "/"} className="cr-h">
                <h2> {cr.name} </h2>
                <p className="footer">
                  <span>
                    VIEW MORE <FaArrowRightLong />
                  </span>
                </p>
              </Link>
              <div
                className="cr-l"
                onClick={() => {
                  router.push(cr.route_link ?? "/");
                }}
              >
                <h2 className="hover-title">{cr.name}</h2>
                <CatRow cr={cr} i={i} />
              </div>
            </div>
          );
        })}
    </section>
  );
}

export function CatRow({ cr, i }: any) {
  const xpos = useMotionValue(0);
  const [scope, measure] = useMeasure({
    scroll: false,
    debounce: 5000,
  });
  useEffect(() => {
    const target = measure.width;
    animate(xpos, i % 2 ? [0, -target] : [-target, 0], {
      duration: cr.ml.length * (i % 2 == 0 ? 10 : 5),
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
  }, [xpos, measure.width]);
  return (
    <motion.div className="slide" style={{ x: xpos }}>
      <div className="pt" ref={scope}>
        {cr.ml &&
          cr.ml.map((md: any, i: number) => {
            if (!md) return null;
            return <Media key={md._key + "id" + i} data={md} disabled />;
          })}
      </div>
      <div className="pt">
        {cr.ml &&
          cr.ml.map((md: any, i: number) => {
            if (!md) return null;
            return <Media key={md._key + "id2" + i} data={md} disabled />;
          })}
      </div>
      <div className="pt">
        {cr.ml &&
          cr.ml.map((md: any, i: number) => {
            if (!md) return null;
            return <Media key={md._key + "id3" + i} data={md} disabled />;
          })}
      </div>
    </motion.div>
  );
}
