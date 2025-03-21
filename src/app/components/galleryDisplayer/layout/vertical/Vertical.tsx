import React from "react";
import "./vertical.scss";
import Media from "../../media/Media";
type Props = {};

export default function Vertical({ ml }: any) {
  const cols: any[] = [[], [], [], []];

  const chop = [...ml];
  let indexer = 1;
  while (chop.length > 0) {
    const cid = (indexer % 4) - 1;
    cols[cid].push(chop[0]);
    chop.shift();
    indexer += 1;
  }
  console.log("ml", ml);
  return (
    <div id="gd_vertical">
      {cols.map((c, index) => {
        return (
          <div className="col l" key={"vertical-col" + index}>
            {c.map((md: any) => {
              return <Media data={md} key={md._id} />;
            })}
          </div>
        );
      })}
      {/* <div className="col c"></div>
      <div className="col r"></div>
      <div className="col r"></div> */}
    </div>
  );
}
