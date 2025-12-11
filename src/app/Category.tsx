"use client";
import React, { useEffect, useRef } from "react";
import Media from "./components/galleryDisplayer/media/Media";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import useMeasure from "react-use-measure";
import { useRouter } from "next/navigation";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

type Props = {
  gd: any;
};

export default function Category({ gd }: Props) {
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
                <h2 className="hover-title">
                  {cr.name}
                  <HiArrowTopRightOnSquare />
                </h2>
                <CatRow cr={cr} i={i} />
              </div>
            </div>
          );
        })}
    </section>
  );
}

export function CatRow({ cr, i }: any) {
  // const xpos = useMotionValue(0);
  const [scope, measure] = useMeasure({
    scroll: false,
    debounce: 2000,
  });
  const aniscope = useRef<HTMLDivElement>(null);
  // const [aniscope, animate] = useAnimate();
  // useEffect(() => {
  //   const target = measure.width;
  //   animate(xpos, i % 2 ? [0, -target] : [-target, 0], {
  //     duration: cr.ml.length * (i % 2 == 0 ? 10 : 5),
  //     ease: "linear",
  //     repeat: Infinity,
  //     repeatType: "loop",
  //   });
  // }, [measure.width]);
  useEffect(() => {
    // const asTarget = aniscope.current?.;

    // asTarget?.forEach((el) => {
    //   el.animate(
    //     {
    //       transform: ["translateX(0%)", `translateX(${-100}%)`],
    //     },
    //     {
    //       duration: cr.ml.length * 4 * 1000,
    //       iterations: Infinity,
    //       easing: "linear",
    //       direction: i % 2 == 0 ? "normal" : "reverse",
    //     }
    //   );
    // });
    const animate = aniscope.current?.animate(
      {
        transform: ["translateX(0px)", `translateX(${-measure.width}px)`],
      },
      {
        duration: cr.ml.length * 5 * 1000,
        iterations: Infinity,
        easing: "linear",
        direction: i % 2 == 0 ? "normal" : "reverse",
      }
    );
    // animate(
    //   ".pt",
    //   {
    //     x: i % 2 ? [0, -measure.width * 3] : [-measure.width * 3, 0],
    //   },
    //   {
    //     duration: cr.ml.length * 5,
    //     ease: "linear",
    //     repeat: Infinity,
    //     repeatType: "loop",
    //   }
    // );
    return () => animate?.cancel();
  }, [measure.width]);
  return (
    <div className="slide" ref={aniscope}>
      <div className="pt" ref={scope}>
        {cr.ml &&
          cr.ml.map((md: any, i: number) => {
            if (!md) return <></>;
            return (
              <Media
                key={md._key + "id" + i}
                data={md}
                disabled
                imageHeight={300}
              />
            );
          })}
      </div>
      <div className="pt">
        {cr.ml &&
          cr.ml.map((md: any, i: number) => {
            if (!md) return <></>;
            return (
              <Media
                key={md._key + "id2" + i}
                data={md}
                disabled
                imageHeight={300}
              />
            );
          })}
      </div>
      <div className="pt">
        {cr.ml &&
          cr.ml.map((md: any, i: number) => {
            if (!md) return <></>;
            return (
              <Media
                key={md._key + "id3" + i}
                data={md}
                disabled
                imageHeight={300}
              />
            );
          })}
      </div>
    </div>
  );
}
