import "./home.scss";
// import CreatorLists from "./creatorLists/CreatorLists";
import { PortableText } from "next-sanity";
import { CSSProperties } from "react";
import { fetchData, urlFor } from "@/app/db/sanity";

import CreatorLists from "../featured/CreatorLists";
import { GoogleAnalytics } from "@next/third-parties/google";
import Media from "@/app/components/galleryDisplayer/media/Media";
import Category from "./Category";
import PartnershipSlide from "@/app/components/partnershipSlide/PartnershipSlide";
import TestimonialSlide from "@/app/components/testimonialSlide/TestimonialSlide";

export default async function RigtoursPage() {
  const gd = await fetchData<any>(`
		*[_type == 'general' && preset == 'main']{
			...,
			cm[]{
				name,
				route_link,
				ml[] ->{
					...,
					'video': video.asset -> url
				}
			},
			hlm[] -> {
				...,
				'video':video.asset -> url
			},
			currentlyLive[] -> {
				...,
				'agency': agency->name,
				'event': event ->name,
			}
		
		}[0]
	`);
  const pt = await fetchData<any>(`
		*[_type == 'partner' ]{
			name,
			partners
		}
	`);

  let rowList: {
    name: string;
    partners: string[];
  }[] = pt.map((p: any) => {
    return {
      name: p.name,
      partners: p.partners.map((p: any) => {
        return urlFor(p)?.height(300).format("webp").url();
      }),
    };
  });

  const hlm = gd?.hlm ?? null;

  const sections: { [key: string]: React.ReactNode } = {
    highlights: (
      <section id="highlights" key={"highlights"}>
        <div className="confine">
          <div className="h-h h">
            <h2>HIGHLIGHTS</h2>
            <div className="arr"></div>
          </div>
          <div className="images">
            <div className="l">
              <Media data={hlm[0]} imageHeight={800} forceYoutubeHD={true} />
            </div>
            <div className="c">
              <div className="t">
                <Media data={hlm[1]} imageHeight={400} forceYoutubeHD={true} />
                <Media data={hlm[2]} imageHeight={400} forceYoutubeHD={true} />
              </div>
              <div className="b">
                <Media data={hlm[3]} imageHeight={800} forceYoutubeHD={true} />
              </div>
            </div>
            <div className="r">
              <Media data={hlm[4]} imageHeight={800} forceYoutubeHD={true} />
            </div>
          </div>

          <div className="videos">
            <Media data={hlm[5]} imageHeight={400} forceYoutubeHD={true} />
            <Media data={hlm[6]} imageHeight={400} forceYoutubeHD={true} />
          </div>
        </div>
      </section>
    ),
    mission: (
      <section id="mission" key={"mission"}>
        <div className="confine">
          <div className="r">
            <img
              src={
                gd.om
                  ? urlFor(gd.om).height(900).format("webp").url()
                  : "/gfx/about2.png"
              }
              className="about"
            />
          </div>
          <div className="l">
            <h2>{gd.omtitle}</h2>
            <p>{gd.omdesc}</p>
            <div className="arr"></div>
          </div>
        </div>
      </section>
    ),
    services: (
      <section id="about" key={"services"}>
        <div className="confine">
          <div className="l">
            <h2>{gd.autitle}</h2>
            <p>{gd.audesc}</p>
            <div className="arr"></div>
          </div>
          <div className="r">
            <img
              src={
                gd.abi
                  ? urlFor(gd.abi).height(900).format("webp").url()
                  : "/gfx/about1.png"
              }
              alt=""
              className="about"
            />
          </div>
        </div>
      </section>
    ),
    values: (
      <section id="values" key={"values"}>
        <h2 className="th">VALUES</h2>

        <div className="left-box"></div>
        <div className="right-box"></div>
        <div className="cubes confine">
          <div className="cube txt">
            <h2>
              {/* <b>Dedication To</b> Fandom */}
              <b>{gd.v1_tb}</b> {gd.v1_t}
            </h2>
            {gd.v1_desc && <PortableText value={gd.v1_desc} />}
            {/* <p>
              We are driven by a genuine<b> love</b> for otaku culture
            </p> */}
          </div>
          <div className="cube">
            <img
              src={
                gd.v1
                  ? urlFor(gd.v1).height(900).format("webp").url()
                  : "/gfx/cube1.png"
              }
              alt=""
              className="mim"
            />
          </div>
          <div className="cube txt">
            <h2>
              {/* <b>Community- Driven</b> Creativity */}
              <b>{gd.v3_tb}</b> {gd.v3_t}
            </h2>
            {gd.v3_desc && <PortableText value={gd.v3_desc} />}

            {/* <p> */}

            {/* We collaborate with the <b>Otaku</b> community to craft */}
            {/* respectful, authentic, and stunning content */}
            {/* </p> */}
          </div>
          <div className="cube">
            <img
              src={
                gd.v2
                  ? urlFor(gd.v2).height(600).format("webp").url()
                  : "/gfx/.png"
              }
              alt=""
              className="mim"
            />
          </div>
          <div className="cube txt">
            <h2>
              {/* <b>Authentic Visual</b> Storytelling */}
              <b>{gd.v2_tb}</b> {gd.v2_t}
            </h2>
            {gd.v2_desc && <PortableText value={gd.v2_desc} />}

            {/* <p>
              We create authentic, high-quality visual <strong>stories</strong>{" "}
              that inspires, entertains, and connects fans worldwide
            </p> */}
          </div>
          <div className="cube">
            <img
              src={
                gd.v3
                  ? urlFor(gd.v3).height(600).format("webp").url()
                  : "/gfx/cube3.png"
              }
              alt=""
              className="mim"
            />
          </div>
        </div>
      </section>
    ),
    "currently-live-streaming": (
      <section id="cls" key={"cls"}>
        <h2 className="mt">Currently Live STREAMING</h2>
        {gd.currentlyLive && gd.currentlyLive.length > 0 ? (
          <CreatorLists creators={gd.currentlyLive} view="default" />
        ) : (
          <div className="nolive">
            <p>Check Our Socials For The Next Event!</p>
          </div>
        )}
      </section>
    ),
    "our-frames": (
      <section id="ourframe" key={"frames"}>
        <h2 className="title">OUR FRAMES</h2>
        <Category gd={gd} />
      </section>
    ),
    partnerships: (
      <section id="partnership" key={"partnerships"}>
        <div className="p-h">
          <h2 className="h ol">PARTNERSHIPS</h2>
          <div className="arr"></div>
        </div>
        <div className="content">
          <div className="p-l">
            {rowList?.map((p: any, i: number) => {
              return (
                <PartnershipSlide
                  p={p.partners}
                  key={"partners" + i + p.name}
                  reverse={i % 2 == 0}
                />
              );
            })}
          </div>
        </div>
      </section>
    ),
    testimonials: <TestimonialSlide gd={gd} key={"testimonials"} />,
  };
  return (
    <main id="page_home">
      <GoogleAnalytics gaId="G-0M41Y9TCPY" />
      <link
        rel="preload"
        as="image"
        href={urlFor(gd.ti_bg).height(1080).format("webp").url()}
      ></link>
      <section
        id="banner-h"
        style={
          {
            "--bg": `url(${gd.ti_bg && urlFor(gd.ti_bg).height(1080).format("webp").url()})`,
          } as CSSProperties
        }
      >
        <div className="confine">
          <img
            src={gd.ti_ml && urlFor(gd.ti_ml).height(1080).auto("format").url()}
            alt=""
            className="main"
          />
        </div>
      </section>

      {gd.sectord?.map((s: any, i: number) => {
        return sections[s];
      })}
    </main>
  );
}
