"use client";
import { useAnimate } from "motion/react";
import React, { CSSProperties, useEffect } from "react";
import useMeasure from "react-use-measure";

type Props = {};

export default function PartnershipSlide({ p, reverse }: any) {
  const [scope, animate] = useAnimate();
  const [ref, bounds] = useMeasure({
    debounce: 2000,
    scroll: false,
  });
  useEffect(() => {
    const target = bounds.width;

    animate(
      ".slider",
      {
        x: reverse ? [-target, 0] : [0, -target],
      },
      {
        duration: p.length * 3 * 1.5,
        repeat: Infinity,
        // repeatType: "loop",
        repeatDelay: 0,
        ease: "linear",
      }
    );
  }, [p, bounds.width]);

  return (
    <div className="row" ref={scope}>
      <div
        className="slider"
        ref={ref}
        style={
          // {
          //   "--duration": p.length + "s",
          //   animationDirection: !reverse ? "alternate" : "alternate-reverse",
          // } as CSSProperties
          {}
        }
      >
        {p &&
          p.map((p: any, index: number) => {
            return (
              <div className="partner" key={p + index}>
                <img src={p} alt="" className="img" />
              </div>
            );
          })}
      </div>
      <div
        className="slider"
        style={
          // {
          //   "--duration": p.length + "s",
          //   animationDirection: !reverse ? "alternate" : "alternate-reverse",
          // } as CSSProperties
          {}
        }
      >
        {p &&
          p.map((p: any, index: number) => {
            return (
              <div className="partner" key={p + index + "2"}>
                <img src={p} alt="" className="img" />
              </div>
            );
          })}
      </div>
      <div
        className="slider"
        style={
          // {
          //   "--duration": p.length + "s",
          //   animationDirection: !reverse ? "alternate" : "alternate-reverse",
          // } as CSSProperties
          {}
        }
      >
        {p &&
          p.map((p: any, index: number) => {
            return (
              <div className="partner" key={p + index + "3"}>
                <img src={p} alt="" className="img" />
              </div>
            );
          })}
      </div>
    </div>
  );
}
