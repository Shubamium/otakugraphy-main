"use client";
import React, { useEffect, useState } from "react";

import "react-chrono/dist/style.css";
type Props = {};

import { Chrono, TimelineItem } from "react-chrono";
export default function TimelineSection({}: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const items: TimelineItem[] = [
    {
      title: "February 2025",
      cardTitle: "Founded Otakugraphy",
      cardDetailedText: "Dedicated space for otaku media enthusiasts.",
    },
    {
      title: "April 2025",
      cardTitle: "Launch of the OTG Rig",
      cardDetailedText:
        "High-quality, interactive roaming meet & greets using Elgato Teleprompter + OLED screens.",
    },
    {
      title: "Throughout 2025",
      cardTitle: "VTuber Field Trips",
      cardDetailedText:
        "Continuous improvements for unique virtual experiences such as Ripley 'Believe It or Not' Museum, Cherry Blossom Festival, and more.",
    },
    {
      title: "January – April 2026",
      cardTitle: "Raised $2.5k+ for Nonprofits",
      cardDetailedText:
        "Virtual walkthroughs raising thousands for Whiskerswood Haven, Aquarium of the Pacific, and Aquarium of the Bay.",
    },
    {
      title: "June 2026",
      cardTitle: "Launch of Virtual Production Studio",
      cardDetailedText:
        "Located in San Jose, California. Created with Founding Ambassadors and Partners.",
    },
  ];
  return (
    mounted && (
      <section id="timeline">
        <div className="heading">
          <hr />
          <h2>OUR JOURNEY</h2>
          <hr />
        </div>
        <Chrono
          items={items}
          mode="horizontal-all"
          layout={{}}
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
          }}
          style={{
            googleFonts: {
              fontFamily: "Roboto Slab",
              weights: [400, 600, 700],
            },
          }}
          darkMode={{ enabled: true }}
          display={{
            toolbar: {
              enabled: false,
            },
            allCardsVisible: true,
          }}
        />
      </section>
    )
  );
}
