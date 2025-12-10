"use client";
import React, { useEffect, useState } from "react";
import "./vertical.scss";
import Media from "../../media/Media";
import { useMediaQuery } from "react-responsive";
type Props = {};

export default function Vertical({ ml }: any) {
  const [cols, setCols] = useState<any[]>([[], [], [], []]);

  const isMobile = useMediaQuery({
    query: "(max-width:550px)",
  });
  useEffect(() => {
    const chop = [...ml];
    let newCols: any[] = [[], [], [], []];
    for (let i = 0; i < chop.length; i++) {
      newCols[i % 4].push(chop[i]);

      setCols(newCols);
    }
    // console.log("chopping");
  }, [ml]);

  return (
    <div id="gd_vertical">
      {!isMobile &&
        cols.map((c, index) => {
          return (
            <div className="col l" key={"vertical-col" + index}>
              {c.map((md: any, j: number) => {
                return (
                  <Media data={md} key={md._id + j} p={c[j - 1]} n={c[j + 1]} />
                );
              })}
            </div>
          );
        })}

      {isMobile &&
        ml &&
        ml.map((md: any, j: number) => {
          return <Media data={md} key={md._id + j} />;
        })}

      {/* <div className="col c"></div>
      <div className="col r"></div>
      <div className="col r"></div> */}
    </div>
  );
}
