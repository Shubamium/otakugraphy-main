"use client";
import React, { useEffect, useState } from "react";
import "./horizontal.scss";
import Media from "../../media/Media";
type Props = {};

export default function Horizontal({ ml }: any) {
  // const [cols, setCols] = useState<any[]>([[], [], []]);

  // useEffect(() => {
  //   const chop = [...ml];
  //   let newCols: any[] = [[], [], []];
  //   for (let i = 0; i < chop.length; i++) {
  //     newCols[i % 3].push(chop[i]);

  //     setCols(newCols);
  //   }
  //   console.log("chopping");
  // }, [ml]);

  return (
    <div id="gd_horizontal">
      {/* {cols.map((c, index) => {
        return (
          <div className="col l" key={"vertical-col" + index}>
            {c.map((md: any, j: number) => {
              return <Media data={md} key={md._id + j} />;
            })}
          </div>
        );
      })} */}

      <div className="list">
        {ml.map((md: any, j: number) => {
          return <Media data={md} key={md._id + j} />;
        })}
      </div>
      {/* <div className="col c"></div>
			
			
      <div className="col r"></div>
      <div className="col r"></div> */}
    </div>
  );
}
