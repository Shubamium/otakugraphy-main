import React, { CSSProperties } from "react";

type Props = {};
import "./portal.scss";
import Portal from "./Portal";
import { GoTriangleDown } from "react-icons/go";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media } from "@/payload-types";
import PayloadRefreshRouteOnSave from "@/app/globalComponent/refreshRoute/PayloadRefreshRouteOnSave";
export default async function PortalPage({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const portal = await p.findGlobal({
    slug: "portalGeneral",
  });

  const heroBg = portal.heroBackground as Media;
  const heroBgType = heroBg?.mimeType?.startsWith("image") ?? false;
  console.log(heroBg);

  const navigation = portal.navigation;
  return (
    <main id="p_portal">
      <PayloadRefreshRouteOnSave />
      <section
        id="portal-hero"
        style={
          {
            "--bg": heroBgType ? `url("${heroBg.url}")` : "",
          } as CSSProperties
        }
      >
        <div className="background"></div>
        <img src="/gfx/logo2.png" alt="" className="logo" />
        <a href="#portal-link" className="scroll-indicator">
          <p>Scroll Down</p>
          <GoTriangleDown />
        </a>
      </section>

      <div className="divider"></div>
      <section id="portal-link">
        {navigation?.map((n, i: number) => {
          return (
            <Portal
              bg={
                (n.background as Media)?.sizes?.medium?.url ?? "/undefined.png"
              }
              name={n.name ?? ""}
              link={n.routeLink ?? "#s"}
              key={n.id + "" + i}
            />
          );
        })}
      </section>
    </main>
  );
}
