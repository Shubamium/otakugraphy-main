"use client";
import React from "react";
import { urlFor } from "../db/sanity";
import { FaPlay } from "react-icons/fa6";

type Props = {
  creator: any;
  onClick: () => void;
};

export default function CreatorCard({ creator, onClick }: Props) {
  return (
    <div className="creator" key={creator._id}>
      <div className="panel">
        <p className="name">{creator.name}</p>
        <img
          src={creator.art && urlFor(creator.art).auto("format").url()}
          alt=""
          className="creator-art"
        />
      </div>
      <div
        className="bottom-info"
        onClick={() => {
          onClick();
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
