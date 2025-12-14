"use client";
import React, { memo, useEffect, useState } from "react";
import { urlFor } from "../db/sanity";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLink,
  FaQuoteLeft,
  FaShare,
  FaTwitch,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import useMeasure from "react-use-measure";
import { CgBrowser, CgWebsite } from "react-icons/cg";
import { LiaLinkSolid } from "react-icons/lia";
import { FaInternetExplorer } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import "./testimonialSlide.scss";
import { useMediaQuery } from "react-responsive";
type Props = {
  gd: any;
};

const useCarousel = (length: number, blockClass: string, reverse?: boolean) => {
  const [offset, setOffset] = useState(0);
  const [ref, bounds] = useMeasure({
    debounce: 2,
    scroll: false,
  });
  const [anim, setAnim] = useState<Animation[] | null>(null);

  const pause = () => {
    if (anim) {
      anim.forEach((a) => {
        a.pause();
      });
    }
  };

  const play = () => {
    if (anim) {
      anim.forEach((a) => {
        a.play();
      });
    }
  };

  const mobile = useMediaQuery({
    query: "(max-width: 550px)",
  });
  useEffect(() => {
    const el = document.querySelectorAll("." + blockClass);

    let anims = [] as Animation[];
    el.forEach((e: Element) => {
      let durationPerSlide = 5000;
      if (mobile) durationPerSlide *= 2;
      const animation = e.animate(
        {
          transform: ["translateX(0px)", `translateX(-${bounds.width}px)`],
        },
        {
          duration: length * 2 * durationPerSlide,
          iterations: Infinity,
          direction: reverse ? "reverse" : "normal",
        }
      );
      // console.log(animation);
      anims.push(animation);
    });

    setAnim(anims);

    return () => {
      anims.forEach((a) => {
        a.cancel();
      });
    };
  }, [bounds.width]);

  return {
    offset,
    setOffset,
    ref,
    pause,
    play,
    bounds,
  };
};
export function TestimonialSlide({ gd }: Props) {
  // const [posA, setPosA] = useState(0);
  const [offsetA, setOffsetA] = useState(0);
  const [offsetB, setOffsetB] = useState(0);
  // const [refA, boundsA] = useMeasure();

  const mid = Math.floor(gd.testimonials.length / 2);
  const left = gd.testimonials.slice(0, mid);
  const right = gd.testimonials.slice(mid);
  const ca = useCarousel(left.length, "blockA");
  const cb = useCarousel(right.length, "blockB", true);

  return (
    <section id="new-testimonials">
      <h2 className="ttitle">TESTIMONIALS</h2>

      {/* Carousel A */}
      <div
        className="testimonials-slide"
        onMouseOver={() => {
          ca.pause();
        }}
        onMouseLeave={() => {
          ca.play();
        }}
      >
        <div className="blocks blockA" ref={ca.ref}>
          {left?.map((t: any, i: number) => {
            const l = left.length;
            const index = (((i + offsetA) % l) + l) % l;
            const tm = left[index];
            return (
              <div className="t-card" key={"testimonials aa" + i + tm._key}>
                <div className="person-info">
                  <img
                    src={urlFor(tm.pfp).auto("format").url()}
                    alt=""
                    className="img"
                  />
                  <div className="detail">
                    <h2>{tm.name}</h2>
                    <p> {tm.role}</p>
                    <div className="socials">
                      {tm.x && (
                        <a
                          href={tm.x}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaXTwitter />
                        </a>
                      )}
                      {tm.website && (
                        <a
                          href={tm.website}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <BiLinkExternal />
                        </a>
                      )}
                      {tm.twitch && (
                        <a
                          href={tm.twitch}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaTwitch />
                        </a>
                      )}
                      {tm.youtube && (
                        <a
                          href={tm.youtube}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaYoutube />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="testi-text">
                  <FaQuoteLeft />
                  {/* <p>{tm.text}</p> */}
                  <p>{tm.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="blocks blockA">
          {left?.map((t: any, i: number) => {
            const l = left.length;
            const index = (((i + offsetA) % l) + l) % l;
            const tm = left[index];
            return (
              <div className="t-card" key={"testimonials ab" + i + tm._key}>
                <div className="person-info">
                  <img
                    src={urlFor(tm.pfp).auto("format").url()}
                    alt=""
                    className="img"
                  />
                  <div className="detail">
                    <h2>{tm.name}</h2>
                    <p> {tm.role}</p>
                    <div className="socials">
                      {tm.x && (
                        <a
                          href={tm.x}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaXTwitter />
                        </a>
                      )}
                      {tm.website && (
                        <a
                          href={tm.website}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <BiLinkExternal />
                        </a>
                      )}
                      {tm.twitch && (
                        <a
                          href={tm.twitch}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaTwitch />
                        </a>
                      )}
                      {tm.youtube && (
                        <a
                          href={tm.youtube}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaYoutube />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="testi-text">
                  <FaQuoteLeft />
                  {/* <p>{tm.text}</p> */}
                  <p>{tm.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="btn btn-seek"
          onClick={() => {
            setOffsetA(offsetA - 1);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="btn btn-seek prev"
          onClick={() => {
            setOffsetA(offsetA + 1);
          }}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Carousel B */}
      <div
        className="testimonials-slide"
        onMouseOver={() => {
          cb.pause();
        }}
        onMouseLeave={() => {
          cb.play();
        }}
      >
        <div className="blocks blockB" ref={cb.ref}>
          {right?.map((t: any, i: number) => {
            const l = right.length;
            const index = (((i + offsetB) % l) + l) % l;
            const tm = right[index];
            return (
              <div className="t-card" key={"testimonials ba" + i + tm._key}>
                <div className="person-info">
                  <img
                    src={urlFor(tm.pfp).auto("format").url()}
                    alt=""
                    className="img"
                  />
                  <div className="detail">
                    <h2>{tm.name}</h2>
                    <p> {tm.role}</p>
                    <div className="socials">
                      {tm.x && (
                        <a
                          href={tm.x}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaXTwitter />
                        </a>
                      )}
                      {tm.website && (
                        <a
                          href={tm.website}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <BiLinkExternal />
                        </a>
                      )}
                      {tm.twitch && (
                        <a
                          href={tm.twitch}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaTwitch />
                        </a>
                      )}
                      {tm.youtube && (
                        <a
                          href={tm.youtube}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaYoutube />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="testi-text">
                  <FaQuoteLeft />
                  {/* <p>{tm.text}</p> */}
                  <p>{tm.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="blocks blockB">
          {right?.map((t: any, i: number) => {
            const l = right.length;
            const index = (((i + offsetB) % l) + l) % l;
            const tm = right[index];
            return (
              <div className="t-card" key={"testimonials bb" + i + tm._key}>
                <div className="person-info">
                  <img
                    src={urlFor(tm.pfp).auto("format").url()}
                    alt=""
                    className="img"
                  />
                  <div className="detail">
                    <h2>{tm.name}</h2>
                    <p> {tm.role}</p>
                    <div className="socials">
                      {tm.x && (
                        <a
                          href={tm.x}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaXTwitter />
                        </a>
                      )}
                      {tm.website && (
                        <a
                          href={tm.website}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <BiLinkExternal />
                        </a>
                      )}
                      {tm.twitch && (
                        <a
                          href={tm.twitch}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaTwitch />
                        </a>
                      )}
                      {tm.youtube && (
                        <a
                          href={tm.youtube}
                          target="_blank"
                          className="btn btn-contact"
                        >
                          <FaYoutube />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="testi-text">
                  <FaQuoteLeft />
                  {/* <p>{tm.text}</p> */}
                  <p>{tm.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="btn btn-seek"
          onClick={() => {
            setOffsetB(offsetB - 1);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="btn btn-seek prev"
          onClick={() => {
            setOffsetB(offsetB + 1);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default memo(TestimonialSlide);
