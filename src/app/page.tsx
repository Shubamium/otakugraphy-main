import Link from "next/link";
import Media from "./components/galleryDisplayer/media/Media";
import "./home.scss";
import { FaArrowRightLong, FaQuoteLeft } from "react-icons/fa6";
import PartnershipSlide from "./components/partnershipSlide/PartnershipSlide";
import { fetchData, urlFor } from "./db/sanity";
import Category from "./Category";
import TestimonialSlide from "./components/TestimonialSlide";
import { BsRecord } from "react-icons/bs";
import CreatorLists from "./featured/CreatorLists";
import { PortableText } from "next-sanity";
import { CSSProperties } from "react";

const conventionPartners = [
  // "/gfx/p/c1.png",
  "/gfx/p/c2.png",
  // "/gfx/p/c3.png",
  // "/gfx/p/c4.png",
  // "/gfx/p/c5.png",
  // "/gfx/p/c6.png",
  "/gfx/p/c7.png",
  "/gfx/p/c8.png",
  // "/gfx/p/c10.png",
  "/gfx/p/na/pt7.png",
  "/gfx/p/na/pt8.png",
  "/gfx/p/na/pt9.png",
  "/gfx/p/na/pt10.png",
  "/gfx/p/na/pt11.png",
  "/gfx/p/na/pt12.png",
];

const brandPartners = [
  // "/gfx/p/b1.png",
  "/gfx/p/b2.png",
  "/gfx/p/b3.png",
  "/gfx/p/b4.png",
  // "/gfx/p/b5.png",
  "/gfx/p/b6.png",
  // "/gfx/p/b7.png",
  "/gfx/p/b8.png",
];

const vtuberPartners = [
  // "/gfx/p/v/v1.png",
  // "/gfx/p/v/v2.png",
  "/gfx/p/v/v3.png",
  // "/gfx/p/v/v4.png",
  "/gfx/p/v/lucid.png",
  "/gfx/p/v/v6.png",
  // "/gfx/p/v/v7.png",
  "/gfx/p/nb/ala.png",
  "/gfx/p/nb/aotb.png",

  "/gfx/p/nb/vfe.png",
];
const nightlifePartners = [
  // "/gfx/p/n/n1.png",
  "/gfx/p/n/n2.png",
  "/gfx/p/n/n3.png",
  "/gfx/p/n/n4.png",
  "/gfx/p/nb/AX.png",
  "/gfx/p/nb/bw.png",
  "/gfx/p/nb/cc.png",
];
const newPartners = [
  "/gfx/p/na/pt1.webp",
  "/gfx/p/na/pt2.png",
  "/gfx/p/na/chromashift.svg",
  "/gfx/p/na/pt4.png",
  // "/gfx/p/na/pt5.png",
  "/gfx/p/na/oshiondeck.png",
];

export default async function Home() {
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
			currentlyLive[] -> {...},
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
        return urlFor(p)?.height(700).format("webp").url();
      }),
    };
  });

  const hlm = gd?.hlm ?? null;

  const sections: { [key: string]: React.ReactNode } = {
    highlights: (
      <section id="highlights">
        <div className="confine">
          <div className="h-h h">
            <h2>HIGHLIGHTS</h2>
            <div className="arr"></div>
          </div>
          <div className="images">
            <div className="l">
              <Media data={hlm[0]} />
            </div>
            <div className="c">
              <div className="t">
                <Media data={hlm[1]} />
                <Media data={hlm[2]} />
              </div>
              <div className="b">
                <Media data={hlm[3]} />
              </div>
            </div>
            <div className="r">
              <Media data={hlm[4]} />
            </div>
          </div>

          <div className="videos">
            <Media data={hlm[5]} />
            <Media data={hlm[6]} />
          </div>
        </div>
      </section>
    ),
    mission: (
      <section id="mission">
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
      <section id="about">
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
      <section id="values">
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
      <section id="cls">
        <h2 className="mt">Currently Live STREAMING</h2>
        {gd.currentlyLive && gd.currentlyLive.length > 0 ? (
          <CreatorLists creators={gd.currentlyLive} />
        ) : (
          <div className="nolive">
            <p>
              No Current Live Creators. Check Our Socials For The Next Event!
            </p>
          </div>
        )}
      </section>
    ),
    "our-frames": (
      <section id="ourframe">
        <h2 className="title">OUR FRAMES</h2>
        <Category gd={gd} />
      </section>
    ),
    partnerships: (
      <section id="partnership">
        <div className="p-h">
          <h2 className="h ol">PARTNERSHIPS</h2>
          <div className="arr"></div>
        </div>
        <div className="content">
          <div className="p-l">
            {/* <PartnershipSlide p={conventionPartners} />
            <PartnershipSlide p={brandPartners} reverse={true} />
            <PartnershipSlide p={vtuberPartners} />
            <PartnershipSlide p={nightlifePartners} reverse={true} />
            <PartnershipSlide p={newPartners} /> */}
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

          {/* <div className="testimonials">
            <h2 className="ttitle">TESTIMONIALS</h2>

            <div className="blocks">
              {gd.testimonials?.map((tm: any, i: number) => {
                return (
                  <div className="testiblock" key={"testimonials" + tm._key}>
                    <div className="person-info">
                      <img
                        src={urlFor(tm.pfp).auto("format").url()}
                        alt=""
                        className="img"
                      />
                      <h2>{tm.name}</h2>
                      <p> {tm.role}</p>
                    </div>
                    <div className="testi-text">
                      <FaQuoteLeft />
                      <p>{tm.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </section>
    ),
    testimonials: <TestimonialSlide gd={gd} />,
  };
  return (
    <main id="page_home">
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
          {/* <p className="moto">
            North America's 1st Vtuber-Focused Media Company
          </p> */}
        </div>
      </section>

      {gd.sectord?.map((s: any, i: number) => {
        return sections[s];
      })}
    </main>
  );
}

// //
//    <section id="lens">
//         {/* Deprecated */}
//         <div className="text confine">
//           <h2 className="h">
//             VTUBER-FOCUSED
//             <svg
//               width="212"
//               height="212"
//               viewBox="0 0 212 212"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="lens"
//             >
//               <path
//                 d="M43.3408 56.6579L67.8585 107.422L67.8662 107.438L70.3209 112.548L26.2158 109.279C25.7959 99.0275 27.3641 88.7691 30.8577 79.0763C33.7859 70.9521 38.0092 63.3849 43.3408 56.6579ZM31.8722 135.602L89.7885 139.895L65.9413 174.937C50.5388 165.986 38.5022 152.09 31.8722 135.602ZM126.309 138.338L127.233 136.989L145.679 175.284C137.329 180.072 128.164 183.318 118.62 184.843C110.635 186.119 102.524 186.169 94.5669 185.009L126.294 138.361L126.309 138.338ZM168.675 155.359L141.717 99.4563L185.77 102.722C185.892 105.741 185.846 108.79 185.615 111.902L185.614 111.91L185.614 111.918C184.463 127.864 178.509 142.986 168.675 155.359ZM180.128 76.3992L122.211 72.1063L146.059 37.0641C161.461 46.0149 173.498 59.9113 180.128 76.3992ZM117.427 26.9911L84.7547 74.9867L66.3214 36.7176C74.6705 31.9293 83.8363 28.6836 93.3795 27.1583C101.363 25.8823 109.472 25.8329 117.427 26.9911Z"
//                 stroke="#C7A654"
//                 strokeWidth="0"
//               />
//             </svg>
//           </h2>

//           <p className="h second">
//             <span className="fill">MEDIA</span> COMPANY
//           </p>
//         </div>
//       </section>
