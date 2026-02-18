import React from "react";

type Props = {};
import "./otgdiff.scss";

import { fetchData, urlFor } from "../db/sanity";
import OTGDiff from "./OTGDiff";
import GateClient from "../components/passwordGate/GateClient";
// import UnderConstruction from "../components/underConstuction/UnderConstruction";
export default async function Page({}: Props) {
  const gd = await fetchData<any>(`
			*[_type == 'general' && preset == 'main']{
				testimonials,
			}[0]
		`);

  const otgdiff = await fetchData<any>(`
			*[_type == 'otg-diff' && preset == 'main']{
				...,
			}[0]
		`);
  const framesList = await fetchData<any>(`
			*[_type == 'otg-frames']{
				...,
			}
	`);

  return otgdiff.gated === true && otgdiff.gated_pass ? (
    <GateClient gated_pass={otgdiff.gated_pass}>
      <OTGDiff otgdiff={otgdiff} fl={framesList} gd={gd}></OTGDiff>
    </GateClient>
  ) : (
    <OTGDiff otgdiff={otgdiff} fl={framesList} gd={gd}></OTGDiff>
  );
}
