import Lenis from "lenis";
import React, { useEffect } from "react";

type Props = {};

export default function Scroll({}: Props) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });
  }, []);
  return <></>;
}
