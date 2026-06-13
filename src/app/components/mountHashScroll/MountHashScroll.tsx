"use client";
import React, { useEffect } from "react";

type Props = {};

// This component fix the #scrollto the wrong before it loads
export default function MountHashScroll({}: Props) {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return <></>;
}
