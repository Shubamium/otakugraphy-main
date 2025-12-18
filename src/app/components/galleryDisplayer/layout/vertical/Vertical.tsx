"use client";
import React, { useEffect, useState } from "react";
import "./vertical.scss";
import Media from "../../media/Media";
import { useMediaQuery } from "react-responsive";
type Props = {
  ml: any[];
  hasHighlights?: boolean;
};

export default function Vertical({ ml, hasHighlights }: Props) {
  const [cols, setCols] = useState<any[]>([[], [], [], []]);

  const isMobile = useMediaQuery({
    query: "(max-width:550px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isSM = useMediaQuery({
    query: "(max-width:420px)",
  });
  let colCount = isDesktop && hasHighlights ? 3 : 4;
  if (isMobile) {
    colCount = 3;
  }
  if (isSM) {
    colCount = 2;
  }
  useEffect(() => {
    const chop = [...ml];

    // let newCols: any[] = [...new Array(colCount).fill([])];
    // const filling = new Array(colCount).fill(new Array(0));
    let newCols: any[] = [];
    // console.log("chopping", newCols);

    for (let i = 0; i < chop.length; i++) {
      // newCols[i % colCount].push(chop[i]);
      const currentRowToFill = i % colCount;
      if (newCols[currentRowToFill]) {
        newCols[currentRowToFill].push(chop[i]);
      } else {
        newCols[currentRowToFill] = [chop[i]];
      }
      // console.log(i % colCount, i);
    }
    setCols(newCols);
    // console.log("chopping", newCols);
  }, [ml]);

  return (
    <div
      id="gd_vertical"
      style={{
        gridTemplateColumns: `repeat(${colCount},1fr)`,
      }}
    >
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
