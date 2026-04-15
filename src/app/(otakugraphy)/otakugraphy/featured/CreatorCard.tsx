"use client";
import React from "react";
import { urlFor } from "../db/sanity";
import { FaPlay } from "react-icons/fa6";

type Props = {
  creator: any;
  onClick: () => void;
  delay?: number;
};
import { motion } from "motion/react";

export default function CreatorCard({ creator, onClick, delay }: Props) {
  return (
    <motion.div
      layout
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
      className="creator"
      key={creator._id}
    >
      <div className="panel">
        <p className="name">{creator.name}</p>
        <img
          src={
            creator.art && urlFor(creator.art).auto("format").height(500).url()
          }
          alt=""
          loading="lazy"
          className="creator-art"
        />
      </div>
      <div
        className="bottom-info"
        onClick={() => {
          if (creator.Video) {
            onClick();
          } else {
            window.open(creator.channel_link, "_blank");
          }
        }}
      >
        <div className="top">
          {creator?.agency && creator.agency && (
            <p className="a">{creator.agency}</p>
          )}
          <h2 className="n">{creator.name}</h2>
        </div>
        <button className="btn btn-play">
          <FaPlay />
        </button>
      </div>
    </motion.div>
  );
}
export function CreatorCardNoAnim({ creator, onClick, delay }: Props) {
  return (
    <div className="creator" key={creator._id}>
      <div className="panel">
        <p className="name">{creator.name}</p>
        <img
          src={
            creator.art && urlFor(creator.art).auto("format").height(500).url()
          }
          alt=""
          loading="lazy"
          className="creator-art"
        />
      </div>
      <div
        className="bottom-info"
        onClick={() => {
          if (creator.Video) {
            onClick();
          } else {
            window.open(creator.channel_link, "_blank");
          }
        }}
      >
        <div className="top">
          {creator?.agency && creator.agency && (
            <p className="a">{creator.agency}</p>
          )}
          <h2 className="n">{creator.name}</h2>
        </div>
        <button className="btn btn-play">
          <FaPlay />
        </button>
      </div>
    </div>
  );
}
