import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type Props = {};
import "./footer.scss";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
export default async function Footer({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });
  const vpsg = await p.findGlobal({
    slug: "vpsGeneral",
  });
  const fd = vpsg.footer;
  return (
    <footer id="footer">
      <img src="/gfx/logo2.png" alt="" className="logo" />
      <p className="copy">{fd?.copyright}</p>
      <a href={"https://x.com/shubamium2"} className="attrib">
        Website Design by SHUBAMIUM
      </a>

      <a href={fd?.actionButton?.link ?? "#"} className="btn btn-mix">
        {" "}
        {fd?.actionButton?.text}
        <FaArrowRight />
      </a>
    </footer>
  );
}
