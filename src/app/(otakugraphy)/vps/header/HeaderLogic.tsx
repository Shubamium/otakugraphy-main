"use client";
import React, { useState } from "react";

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
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
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
        {mounted && (isDesktop || drawer) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="side"
            key={drawer ? "view" : "closed"}
          >
            {isDesktop &&
              hd?.navigation?.map((n) => {
                return (
                  <div key={n.id} className="btn btn-nav">
                    <Link href={n.routeLink ?? "#"}>{n.name}</Link>
                    {n.isDropdown && (
                      <div className="pop-up">
                        {n.dropdownList?.map((d) => {
                          return (
                            <Link key={d.id} href={d.routeLink ?? "#"}>
                              {d.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            {!isDesktop &&
              hd?.navigation?.map((n) => {
                return (
                  <React.Fragment key={"navigation" + n.id}>
                    <div key={n.id} className="btn btn-nav">
                      <Link href={n.routeLink ?? "#"}>{n.name}</Link>
                    </div>
                    {n.isDropdown &&
                      n.dropdownList?.map((d) => {
                        return (
                          <Link
                            key={d.id}
                            className="btn btn-nav dr"
                            href={d.routeLink ?? "#"}
                          >
                            {d.name}
                          </Link>
                        );
                      })}
                  </React.Fragment>
                );
              })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
