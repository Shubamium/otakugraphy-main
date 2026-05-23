"use client";
import React, { useEffect, useState } from "react";

type TimelineType = {
  date: string;
  title: string;
  description: string;
};
type Props = {
  data: TimelineType[];
  heading?: string;
};

import { useMediaQuery } from "react-responsive";

const placeholder: TimelineType[] = [
  {
    date: "February 2025",
    title: "Founded Otakugraphy",
    description: "Dedicated space for otaku media enthusiasts.",
  },
  {
    date: "April 2025",
    title: "Launch of the OTG Rig",
    description:
      "High-quality, interactive roaming meet & greets using Elgato Teleprompter + OLED screens.",
  },
  {
    date: "Throughout 2025",
    title: "VTuber Field Trips",
    description:
      "Continuous improvements for unique virtual experiences such as Ripley 'Believe It or Not' Museum, Cherry Blossom Festival, and more.",
  },
  {
    date: "January – April 2026",
    title: "Raised $2.5k+ for Nonprofits",
    description:
      "Virtual walkthroughs raising thousands for Whiskerswood Haven, Aquarium of the Pacific, and Aquarium of the Bay.",
  },
  {
    date: "June 2026",
    title: "Launch of Virtual Production Studio",
    description:
      "Located in San Jose, California. Created with Founding Ambassadors and Partners.",
  },
];
export default function TimelineSection({
  data = placeholder,
  heading = "OUR JOURNEY",
}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    mounted && (
      <section id="timeline">
        <div className="heading">
          <hr />
          <h2>{heading}</h2>
          <hr />
        </div>

        <div className="manual-timeline">
          {data?.map((item, index) => {
            const itemEl = (
              <div className="item">
                <p className="date">{item.date}</p>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            );
            return (
              <div className="timeline-col" key={item.title}>
                <div className="top-content">
                  {index % 2 === 0 ? itemEl : ""}
                </div>
                <div className="lineto top"></div>
                <div className="center">
                  <div className="dot"></div>
                </div>
                <div className="lineto bottom"></div>
                <div className="bottom-content">
                  {index % 2 === 1 ? itemEl : ""}
                </div>
              </div>
            );
          })}
          {/* <div className="timeline-col top">
            <div className="top-content">
              <div className="item">
                <p className="date">February 2025</p>
                <h3 className="title">Founded Otakugraphy</h3>
                <p className="description">
                  Dedicated space for otaku media enthusiasts.
                </p>
              </div>
              <div className="empty"></div>
            </div>
            <div className="lineto"></div>
            <div className="center">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="lineto"></div>
            <div className="bottom-content"></div>
          </div>
          <div className="timeline-col botom">
            <div className="top-content"></div>
            <div className="lineto"></div>
            <div className="center">
              <div className="dot"></div>
            </div>
            <div className="lineto"></div>
            <div className="bottom-content">
              <div className="item">
                <p className="date">February 2025</p>
                <h3 className="title">Founded Otakugraphy</h3>
                <p className="description">
                  Dedicated space for otaku media enthusiasts.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-col top">
            <div className="top-content">
              <div className="item">
                <p className="date">February 2025</p>
                <h3 className="title">Founded Otakugraphy</h3>
                <p className="description">
                  Dedicated space for otaku media enthusiasts.
                </p>
              </div>
              <div className="empty"></div>
            </div>
            <div className="lineto"></div>
            <div className="center">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="lineto"></div>
            <div className="bottom-content"></div>
          </div> */}
        </div>
        {/* 
				{isMobile ? (
          <Chrono
            items={items}
            layout={{
              // pointSize: 540,
              pointSize: 20,
            }}
            theme={{
              primary: "#c7a654",
              secondary: "#121211",
              cardBgColor: "#141413",
              cardTitleColor: "#c7a654",
              cardDetailsColor: "#ffffff",
              titleColor: "#ffffff",
              titleColorActive: "#c7a654",
              timelineBgColor: "#121211",
              iconColor: "#c7a654",
              buttonActiveBgColor: "#c7a654",
              buttonActiveIconColor: "#11100f",
              buttonActiveBorderColor: "#c7a654",
              darkToggleActiveBorderColor: "#c7a654",
              glowColor: "#c7a654",
            }}
            style={{
              googleFonts: {
                fontFamily: "Roboto Slab",
                weights: [400, 600, 700],
              },
            }}
            mode={"alternating"}
            darkMode={{ enabled: true }}
            display={{
              toolbar: {
                enabled: false,
              },
              allCardsVisible: true,
            }}
          />
        ) : (
          <Chrono
            items={items}
            layout={{
              // pointSize: 540,
              pointSize: 40,
            }}
            theme={{
              primary: "#c7a654",
              secondary: "#121211",
              cardBgColor: "#141413",
              cardTitleColor: "#c7a654",
              cardDetailsColor: "#ffffff",
              titleColor: "#ffffff",
              titleColorActive: "#c7a654",
              timelineBgColor: "#121211",
              iconColor: "#c7a654",
              buttonActiveBgColor: "#c7a654",
              buttonActiveIconColor: "#11100f",
              buttonActiveBorderColor: "#c7a654",
              darkToggleActiveBorderColor: "#c7a654",
              glowColor: "#c7a654",
            }}
            style={{
              googleFonts: {
                fontFamily: "Roboto Slab",
                weights: [400, 600, 700],
              },
            }}
            mode={"horizontal-all"}
            darkMode={{ enabled: true }}
            display={{
              toolbar: {
                enabled: false,
              },
              allCardsVisible: true,
            }}
          />
        )}
				*/}
      </section>
    )
  );
}
