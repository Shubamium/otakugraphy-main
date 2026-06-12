import React, { CSSProperties, JSX } from "react";

type Props = {};

import "./home.scss";
import Link from "next/link";
import PayloadMedia from "@/app/globalComponent/payloadMedia/PayloadMedia";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import OurWorkSection from "./vps/ourWork/OurWorkSection";
import { SerializedEditorState } from "lexical";
import TimelineSection from "./vps/timeline/TimelineSection";
import { Any } from "next-sanity";
import { FaXTwitter } from "react-icons/fa6";
import FoundingAmbassador from "./foundingAmbassador/FoundingAmbassador";
import Collaborator from "./vps/collaborator/Collaborator";

export default async function page({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const vpsd = await p.findGlobal({
    slug: "vpsHome",
  });
  const vpsg = await p.findGlobal({
    slug: "vpsGeneral",
  });
  //

  const HeroSection = () => (
    <section
      id="main_hero"
      style={
        {
          "--bg": `url(${(vpsd.Hero?.heroSection?.background as Media)?.sizes?.medium?.url})`,
        } as CSSProperties
      }
    >
      <article>
        <div className="subtitle">
          <p className="sub">{vpsd.Hero?.heroSection?.subtitle}</p>
          <hr />
        </div>
        <h2>{vpsd.Hero?.heroSection?.title}</h2>
        {vpsd.Hero?.heroSection?.callToAction && (
          <Link
            href={vpsd.Hero?.heroSection?.callToActionLink ?? "#"}
            className="btn btn-cta"
          >
            {vpsd.Hero?.heroSection?.callToAction}
          </Link>
        )}
      </article>
    </section>
  );
  const ProShotSection = () => (
    <section id="pro_shot" className="confine">
      <div className="title">
        <p>{vpsd.ProShot?.proSection?.title}</p>
        <hr />
      </div>
      <PayloadMedia media={vpsd.ProShot?.proSection?.media as any} />
    </section>
  );
  const OverviewSection = () => (
    <>
      <div id="overview"></div>
      <section id="overviews" className="confine">
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
    </>
  );
  const ShowcaseSection = () => (
    <section id="showcase" className="confine">
      {vpsd.Gallery?.gallerySection?.mediaList?.map((m) => {
        return <PayloadMedia media={m as any} key={m.id} />;
      })}
    </section>
  );
  const TimelinSection = () => (
    <TimelineSection
      data={vpsd["Our Journey"]?.ourjourney?.timeline as Any[]}
      heading={vpsd["Our Journey"]?.ourjourney?.heading ?? "OUR JOURNEY"}
    />
  );
  const BottomNavigation = () => (
    <section id="external-link">
      {vpsd["Bottom Navigation"]?.bottomNavSection?.navigationList?.map((n) => {
        return (
          <div
            className="external"
            key={n.id}
            style={
              {
                "--bg": `url(${(n.background as Media)?.sizes?.medium?.url ?? "undefined.jpg"})`,
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
      })}
    </section>
  );
  const FeaturedSection = () => {
    const founding = vpsd.foundingAmbassador;
    return (
      <>
        {founding?.foundingAmbassador?.isVisible && (
          <FoundingAmbassador founding={founding} />
        )}
      </>
    );
  };
  const CollaboratorSection = () => {
    const show = vpsd.collaborators?.collaboratorSection?.isVisible;
    return show && <Collaborator collaborators={vpsd.collaborators} />;
  };
  const TeamSection = () => {
    return (
      <section id="meet-the-team">
        <div className="heading">
          <p className="sub">{vpsd["Team"]?.team?.subtitle}</p>
          <div className="name">
            <h2>{vpsd["Team"]?.team?.title}</h2>
          </div>
          <RichText
            className="desc"
            data={vpsd["Team"]?.team?.description as SerializedEditorState}
          ></RichText>
        </div>
        <img src="/gfx/pilldecor.svg" alt="" className="pilldecor r" />
        <img src="/gfx/pilldecor.svg" alt="" className="pilldecor l" />
        <div className="person-list">
          {vpsd["Team"]?.team?.teamList?.map((p) => {
            return (
              <div className="person" key={p.id}>
                <div className="data">
                  <div className="name-container">
                    <h2 className="n">{p.name}</h2>
                    {p.x && (
                      <a href={p.x} target="_blank" className="btn btn-ct">
                        <FaXTwitter />
                      </a>
                    )}
                  </div>
                  <p className="r">{p.role}</p>
                  <RichText
                    className="desc"
                    data={p.description as SerializedEditorState}
                  ></RichText>
                </div>
                <img
                  src={(p.pfp as Media)?.sizes?.small?.url ?? undefined}
                  alt=""
                  className="pfp"
                />
              </div>
            );
          })}
          {/* <div className="person">
            <div className="data">
              <h2 className="n">Person Name</h2>
              <p className="r">CHIEF EXECUTING OFFICER</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
            <img src="/gfx/about2.png" alt="" className="pfp" />
          </div>
          <div className="person">
            <div className="data">
              <h2 className="n">Person Name</h2>
              <p className="r">CHIEF EXECUTING OFFICER</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
            <img src="/gfx/about2.png" alt="" className="pfp" />
          </div> */}
        </div>
      </section>
    );
  };
  const OurWork = () => {
    return <OurWorkSection ourworkvps={vpsd["Our Work"]} />;
  };
  const sections: Record<string, JSX.Element> = {
    hero: <HeroSection />,
    proShot: <ProShotSection />,
    ourwork: <OurWork />,
    showcase: <ShowcaseSection />,
    collaborator: <CollaboratorSection />,
    about: <OverviewSection />,
    foundingAmbassador: <FeaturedSection />,
    bottomNavigation: <BottomNavigation />,
    ourJourney: <TimelinSection />,
    team: <TeamSection />,
  };
  return (
    <main id="p_vps">
      {vpsg.sectionOrder?.ordering?.map((s: string) => (
        <React.Fragment key={s}>{sections[s]}</React.Fragment>
      ))}
    </main>
  );
}
