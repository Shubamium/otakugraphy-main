"use client";
import React from "react";
import { GoTriangleDown } from "react-icons/go";

type Props = {
  name: string;
  bg: string;
  link?: string;
};

import { useRouter } from "next/navigation";

export default function Portal({ name, bg, link }: Props) {
  const router = useRouter();
  return (
    <div
      className="portal"
      onClick={(e) => {
        if (link) router.push(link);
      }}
    >
      <div className="bg-container">
        <img src={bg} alt="" className="background" />
      </div>
      <div className="main">
        <p>{name.toUpperCase()}</p>
        <img src="/gfx/centerline.svg" alt="" />
      </div>
      <div className="explore">
        <p>Explore</p>
        <div className="icon">
          <img src="/gfx/explore.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
