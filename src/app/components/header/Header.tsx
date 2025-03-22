"use client";
import Link from "next/link";
import "./header.scss";
import { useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";

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
        {!visible ? <TiArrowUpThick /> : <TiArrowDownThick />}
      </button>
    </header>
  );
}
