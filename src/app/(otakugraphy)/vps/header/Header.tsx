import React from "react";

type Props = {};
import "./header.scss";
import Link from "next/link";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";

export default async function Header({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });
  const vpsg = await p.findGlobal({
    slug: "vpsGeneral",
  });
  const hd = vpsg.header;
  return (
    <header id="header">
      <div className="side">
        {hd?.navigation?.map((n) => {
          return (
            <Link href={n.routeLink ?? "#"} key={n.id} className="btn btn-nav">
              {n.name}
            </Link>
          );
        })}
        {/* 
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
        </Link> */}
      </div>
    </header>
  );
}
