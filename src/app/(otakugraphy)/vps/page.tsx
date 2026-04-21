import React, { CSSProperties } from "react";

type Props = {};

import "./home.scss";
import Link from "next/link";
import PayloadMedia from "@/app/globalComponent/payloadMedia/PayloadMedia";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import PayloadRefreshRouteOnSave from "@/app/globalComponent/refreshRoute/PayloadRefreshRouteOnSave";

export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const vpsd = await p.findGlobal({
    slug: "vpsHome",
  });

  return (
    <main id="p_vps">
      <PayloadRefreshRouteOnSave />

      <section
        id="main_hero"
        style={
          {
            "--bg": `url(${(vpsd.Hero?.heroSection?.background as Media)?.url})`,
          } as CSSProperties
        }
      >
        <article>
          <div className="subtitle">
            <p className="sub">{vpsd.Hero?.heroSection?.subtitle}</p>
            <hr />
          </div>
          <h2>{vpsd.Hero?.heroSection?.title}</h2>
          <Link
            href={vpsd.Hero?.heroSection?.callToActionLink ?? "#"}
            className="btn btn-cta"
          >
            {vpsd.Hero?.heroSection?.callToAction}
          </Link>
        </article>
      </section>

      <div className="confine">
        <section id="pro_shot">
          <div className="title">
            <p>{vpsd.ProShot?.proSection?.title}</p>
            <hr />
          </div>
          <PayloadMedia media={vpsd.ProShot?.proSection?.media as any} />
        </section>

        <section id="overview">
          <div className="title">
            <p>{vpsd.About?.aboutSection?.title}</p>
            <hr />
          </div>

          <div className="content">
            <div className="l">
              <PayloadMedia media={vpsd.About?.aboutSection?.media as any} />
            </div>
            <div className="r">
              <RichText data={vpsd.About?.aboutSection?.description as any} />
            </div>
          </div>
        </section>

        <section id="showcase">
          {vpsd.Gallery?.gallerySection?.mediaList?.map((m) => {
            return <PayloadMedia media={m as any} key={m.id} />;
          })}
        </section>
      </div>
      <section id="external-link">
        {vpsd["Bottom Navigation"]?.bottomNavSection?.navigationList?.map(
          (n) => {
            return (
              <div
                className="external"
                key={n.id}
                style={
                  {
                    "--bg": `url(${(n.background as Media)?.url ?? "undefined.jpg"})`,
                  } as CSSProperties
                }
              >
                <div className="confine">
                  <div className="l">
                    <h2>
                      <Link href={n.routeLink ?? "#"}>{n.title}</Link>
                    </h2>
                    <p className="subtitle">{n.subtitle}</p>
                    <div className="tags">
                      {n.tags?.map((t, i) => {
                        return (
                          <p className="t btn" key={t + i}>
                            {t}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="r">
                    <Link href={n.routeLink ?? "#"} className="btn btn-arr">
                      <img src="/gfx/longarr.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          },
        )}
        {/* <div className="external">
          <div className="confine">
            <div className="l">
              <h2>TITLE HERE</h2>
              <p className="subtitle">Subtitle here</p>
              <div className="tags">
                <p className="t">TAG HERE</p>
                <p className="t">TAG HERE</p>
                <p className="t">TAG HERE</p>
              </div>
            </div>
            <div className="r">
              <Link href={"#"} className="btn btn-arr">
                <img src="/gfx/longarr.svg" alt="" />
              </Link>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
