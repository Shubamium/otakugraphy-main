import React from "react";

type Props = {};
import "./header.scss";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import HeaderLogic from "./HeaderLogic";

export default async function Header({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });
  const vpsg = await p.findGlobal({
    slug: "vpsGeneral",
  });
  const hd = vpsg.header;
  return <HeaderLogic hd={hd} />;
}
