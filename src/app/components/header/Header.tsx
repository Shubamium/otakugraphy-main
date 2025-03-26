"use client";
import Link from "next/link";
import "./header.scss";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import { MdShutterSpeed } from "react-icons/md";
import { BiCamera } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

type Props = {};

export default function Header({}: Props) {
  const isMobile = useMediaQuery({
    query: "(max-width:1024px)",
  });
  const [visible, setVisible] = useState(!isMobile);

  useEffect(() => {
    setVisible(!isMobile);
  }, [isMobile]);
  return (
    <header
      id="header"
      className={visible ? "v" : "h"}
      onClick={() => {
        if (isMobile) {
          setVisible(false);
        }
      }}
    >
      <svg
        width="172"
        height="49"
        viewBox="0 0 172 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="d-side"
      >
        <path
          d="M115.718 14.3935L121.41 0L2.04213 35.2671L3.89862 44.0816L122.448 19.113L115.718 14.3935Z"
          fill="#C7A654"
          fillOpacity="0.32"
        />
        <path
          d="M161.04 42.0368L172 29.1255L12.7097 39.0342V48.0421H168.247L161.04 42.0368Z"
          fill="#C7A654"
        />
        <path
          d="M137.837 28.7953L146.061 15.1688L12.0549 36.0627L12.7886 45.0407L144.426 34.2822L137.837 28.7953Z"
          fill="#C7A654"
          fillOpacity="0.68"
        />
      </svg>

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
        onClick={(e) => {
          setVisible(!visible);
          e.stopPropagation();
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
