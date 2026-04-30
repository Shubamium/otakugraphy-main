"use client";
import React from "react";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { VpsGeneral } from "@/payload-types";
import { motion, AnimatePresence } from "motion/react";
import { useMediaQuery } from "react-responsive";
type Props = {
  hd: VpsGeneral["header"];
};

export default function HeaderLogic({ hd }: Props) {
  const [drawer, setDrawer] = React.useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <header id="header" className={` ${drawer ? "open" : "closed"}`}>
      <button
        className="btn btn-nav menu"
        onClick={() => {
          setTimeout(() => {
            setDrawer(!drawer);
          }, 80);
        }}
      >
        <GiHamburgerMenu />
      </button>
      <AnimatePresence mode="popLayout">
        {(isDesktop || drawer) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="side"
            key={drawer ? "view" : "closed"}
          >
            {hd?.navigation?.map((n) => {
              return (
                <Link
                  href={n.routeLink ?? "#"}
                  key={n.id}
                  className="btn btn-nav"
                >
                  {n.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
