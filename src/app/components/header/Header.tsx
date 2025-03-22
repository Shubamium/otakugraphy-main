"use client";
import Link from "next/link";
import "./header.scss";
import { useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import { MdShutterSpeed } from "react-icons/md";
import { BiCamera } from "react-icons/bi";

type Props = {};

export default function Header({}: Props) {
  const [visible, setVisible] = useState(true);
  return (
    <header id="header" className={visible ? "v" : "h"}>
      <Link className="btn logo" href={"/"}>
        <img src="/gfx/logo.png" alt="" />
      </Link>
      <nav id="main-nav">
        <Link href={"/conventions"} className="btn btn-nav">
          <img src="/gfx/conventions.png" alt="" />
        </Link>

        <Link href={"/brands"} className="btn btn-nav">
          <img src="/gfx/brands.png" alt="" />
        </Link>
        <Link href={"/vtubers"} className="btn btn-nav">
          <img src="/gfx/vtubers.png" alt="" />
        </Link>
        <Link href={"/nightlife"} className="btn btn-nav">
          <img src="/gfx/nightlife.png" alt="" />
        </Link>
        <Link href={"/contact"} className="btn btn-nav">
          <img src="/gfx/contactus.png" alt="" />
        </Link>
      </nav>

      <button
        className="btn btn-toggle"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {!visible ? <BiCamera /> : <TiArrowDownThick />}

        <svg
          width="114"
          height="68"
          viewBox="0 0 114 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="s-l"
        >
          <path
            d="M89 45.5C107.5 27 114 0 114 0V68H0C0 68 70.5 64 89 45.5Z"
            fill="#C7A654"
          />
        </svg>
        <svg
          width="114"
          height="68"
          viewBox="0 0 114 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="s-r"
        >
          <path
            d="M89 45.5C107.5 27 114 0 114 0V68H0C0 68 70.5 64 89 45.5Z"
            fill="#C7A654"
          />
        </svg>
      </button>
    </header>
  );
}
