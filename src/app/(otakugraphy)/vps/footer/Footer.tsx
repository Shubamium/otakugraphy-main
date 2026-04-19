import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type Props = {};
import "./footer.scss";
export default function Footer({}: Props) {
  return (
    <footer id="footer">
      <img src="/gfx/logo2.png" alt="" className="logo" />
      <p className="copy">
        Copyright © 2026 OTAKUGRAPHY VPS - All Rights Reserved.
      </p>
      <a href={"https://x.com/shubamium2"} className="attrib">
        Website Design by SHUBAMIUM
      </a>

      <a href="https://otakugraphy.com" className="btn btn-mix">
        {" "}
        OTG PORTAL <FaArrowRight />
      </a>
    </footer>
  );
}
