"use client";
import React, { useEffect } from "react";

import "./otgFrame.scss";
import { getMultipleYTViews } from "@/app/(otakugraphy)/otakugraphy/(mainLayout)//db/youtube";
import LiteYoutubeEmbed from "react-lite-youtube-embed";
import { FaEye } from "react-icons/fa6";

import { PortableText, PortableTextReactComponents } from "@portabletext/react";
type Props = {
  options: {
    title: string;
    type: "image" | "video" | "text";
    reverse?: boolean;
    videoID?: string; // YT Video ID
    imageURL?: string;
    extraVID?: string[];
    text?: any[];
  };
};

function formatNumber(num: number) {
  let count = Intl.NumberFormat("en-US").format(num);
  return count;
}

export default function OTGFrame({ options }: Props) {
  const { reverse, type, title, imageURL, videoID, extraVID } = options;
  const [viewCount, setViewCount] = React.useState<number>(0);

  // Accumulate all of the videos and get the view count
  const fetchViewCount = async (vid: (string | null)[]) => {
    const vwc = await getMultipleYTViews(vid.filter((v) => v) as string[]);
    const total = vwc.reduce((acc, curr) => acc + curr.vwc, 0);
    if (total > 0) {
      setViewCount(total);
    }
  };

  useEffect(() => {
    if (videoID) {
    }
    const mainVideo = videoID ?? null;
    const otherVids = extraVID?.map((v) => v) ?? [];
    fetchViewCount([mainVideo, ...otherVids]);
  }, []);

  return (
    <section className={`otgframe ${reverse ? "reverse" : ""}`}>
      <div className="note-decor">
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
      </div>
      <div className="triangle"></div>
      <div className="detail">
        <div className="top">
          <h2>{title}</h2>
          <div className="extra-videos">
            {extraVID &&
              extraVID?.map((vid, i) => {
                return (
                  <LiteYoutubeEmbed
                    // src={`https://www.youtube.com/embed/${vid}`}
                    id={vid}
                    title="YouTube video player"
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    // loading="lazy"
                    key={"extra-video " + vid}
                    playerClass="iframe"
                    lazyLoad
                    activatedClass="active"
                    // allowFullScreen
                  ></LiteYoutubeEmbed>
                );
              })}
          </div>
        </div>
        {viewCount > 0 && (
          <div className="bottom">
            <div className="views">
              <h2>VIEWS</h2>
              <p>
                <FaEye /> {formatNumber(viewCount)}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="frames">
        {type === "text" && (
          <article>
            <PortableText value={options.text} />
          </article>
        )}

        {type !== "text" && (
          <div className="frame">
            {type === "video" && (
              <React.Fragment>
                {videoID ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoID}`}
                    loading="lazy"
                    title="YouTube video player"
                    className="iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <EmptyFrame />
                )}
              </React.Fragment>
            )}
            {type === "image" && (
              <React.Fragment>
                {imageURL ? (
                  <img
                    src={options.imageURL}
                    alt=""
                    className="img"
                    loading="lazy"
                  />
                ) : (
                  <EmptyFrame />
                )}
              </React.Fragment>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

const EmptyFrame = () => {
  return (
    <div className="empty">
      <svg
        width="100"
        height="100"
        viewBox="0 0 212 212"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lensi"
      >
        <path
          d="M43.3408 56.6579L67.8585 107.422L67.8662 107.438L70.3209 112.548L26.2158 109.279C25.7959 99.0275 27.3641 88.7691 30.8577 79.0763C33.7859 70.9521 38.0092 63.3849 43.3408 56.6579ZM31.8722 135.602L89.7885 139.895L65.9413 174.937C50.5388 165.986 38.5022 152.09 31.8722 135.602ZM126.309 138.338L127.233 136.989L145.679 175.284C137.329 180.072 128.164 183.318 118.62 184.843C110.635 186.119 102.524 186.169 94.5669 185.009L126.294 138.361L126.309 138.338ZM168.675 155.359L141.717 99.4563L185.77 102.722C185.892 105.741 185.846 108.79 185.615 111.902L185.614 111.91L185.614 111.918C184.463 127.864 178.509 142.986 168.675 155.359ZM180.128 76.3992L122.211 72.1063L146.059 37.0641C161.461 46.0149 173.498 59.9113 180.128 76.3992ZM117.427 26.9911L84.7547 74.9867L66.3214 36.7176C74.6705 31.9293 83.8363 28.6836 93.3795 27.1583C101.363 25.8823 109.472 25.8329 117.427 26.9911Z"
          stroke="#C7A654"
          fill="#C7A654"
          strokeWidth={10}
        />
      </svg>
      <p>~Capturing The Frames Soon~</p>
    </div>
  );
};
