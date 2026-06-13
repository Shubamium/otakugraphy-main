import { Media, VpsHome } from "@/payload-types";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {
  collaborators: VpsHome["collaborators"];
};

export default function Collaborator({ collaborators }: Props) {
  return (
    <div id="collaborators" className="scrolloffset">
      <h3>{collaborators?.collaboratorSection?.sectionTitle}</h3>
      {collaborators?.collaboratorSection?.collaboratorRows?.map((c, i) => {
        return (
          <Marquee
            className="mar"
            key={c.id}
            direction={i % 2 === 0 ? "left" : "right"}
            pauseOnHover={true}
            autoFill
          >
            {c?.collaborators?.map((col) => {
              return (
                <img
                  src={(col.collaborator as Media)?.url ?? ""}
                  alt="Collaborator"
                />
              );
            })}
            {/* <img
              src="https://cdn.sanity.io/images/m3ohpj5z/production/97db214b79d8dfc3e7ec6919f7f44959cf2ebb4e-2000x1000.png?h=300&fm=webp"
              alt=""
            />
            <img
              src="https://cdn.sanity.io/images/m3ohpj5z/production/97db214b79d8dfc3e7ec6919f7f44959cf2ebb4e-2000x1000.png?h=300&fm=webp"
              alt=""
            />
            <img
              src="https://cdn.sanity.io/images/m3ohpj5z/production/97db214b79d8dfc3e7ec6919f7f44959cf2ebb4e-2000x1000.png?h=300&fm=webp"
              alt=""
            /> */}
          </Marquee>
        );
      })}
    </div>
  );
}
