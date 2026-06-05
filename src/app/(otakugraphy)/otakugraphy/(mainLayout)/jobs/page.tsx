import React, { CSSProperties } from "react";

type Props = {};
import "./jobs.scss";
import Link from "next/link";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media } from "@/payload-types";
import PayloadRefreshRouteOnSave from "@/app/globalComponent/refreshRoute/PayloadRefreshRouteOnSave";
import { RichText } from "@payloadcms/richtext-lexical/react";
export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const jd = await p.findGlobal({
    slug: "vpsJobsPage",
  });

  const jl = await p.find({
    collection: "vpsJobs",
    limit: 0,
    sort: ["_order"],
  });
  return (
    <main id="p_jobs">
      <div className="banner">
        <img src={(jd.banner as Media)?.url ?? undefined} alt="" />
      </div>

      <section id="jobs-hero">
        <div className="confine">
          <div className="l">
            <div className="subtitle">
              <p>{jd.subtitle}</p>
              <hr />
            </div>
            <h2>{jd.title}</h2>
            <div className="action">
              {jd.cta && (
                <Link
                  href={jd.cta?.buttonLink ?? "#"}
                  target="_blank"
                  className={"btn btn-cta"}
                >
                  {jd.cta.buttonText}
                </Link>
              )}
            </div>
            <div className="description">
              <RichText data={jd.description as any}></RichText>
            </div>
          </div>
          <div className="r">
            <img
              src={(jd.aboutImage as Media)?.sizes?.medium?.url ?? undefined}
              alt=""
            />
          </div>
        </div>
      </section>

      <section
        id="jobs-list"
        style={
          {
            "--bg": `url('${
              (jd.jobsListBackground as Media)?.sizes?.medium?.url ??
              (jd.jobsListBackground as Media)?.url ??
              undefined
            }')`,
          } as CSSProperties
        }
        data-bg={
          (jd.jobsListBackground as Media)?.sizes?.medium?.url ??
          (jd.jobsListBackground as Media)?.url ??
          " NO IMAGE PROVIDED"
        }
      >
        <div className="confine">
          <div className="heading">
            <hr />
            <h2>WE ARE LOOKING FOR</h2>
            <hr />
          </div>
          <div className="listing">
            {jl.docs?.map((j, i: number) => {
              return (
                <div className="job" key={j.id}>
                  <img
                    src={
                      (j.icon as Media)?.sizes?.small?.url ??
                      (j.icon as Media)?.url ??
                      undefined
                    }
                    alt=""
                    className="icon"
                  />
                  <div className="content">
                    <h3>{j.title}</h3>
                    <hr />
                    <div className="description">
                      <RichText data={j.description as any}></RichText>
                    </div>
                  </div>
                  <div className="action">
                    <Link href={j.applyLink ?? "#"} target="_blank">
                      Apply <img src="/gfx/smallarr.svg" alt="" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
