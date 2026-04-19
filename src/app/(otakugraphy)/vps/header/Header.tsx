import React from "react";

type Props = {};
import "./header.scss";
import Link from "next/link";

export default function Header({}: Props) {
  return (
    <header id="header">
      <div className="side">
        <Link href={"/"} className="btn btn-nav">
          About
        </Link>

        <Link href={"#overview"} className="btn btn-nav">
          Overview
        </Link>

        <Link href={"#showcase"} className="btn btn-nav">
          Showcase
        </Link>

        <Link href={"https://otakugraphy.com/contact"} className="btn btn-nav">
          Contact
        </Link>

        <Link href={"/jobs"} className="btn btn-nav">
          Jobs
        </Link>
      </div>
    </header>
  );
}
