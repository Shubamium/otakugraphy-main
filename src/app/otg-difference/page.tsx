import React from "react";

type Props = {};
import "./otgdiff.scss";

import { fetchData, urlFor } from "../db/sanity";
import OTGDiff from "./OTGDiff";
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

  return <OTGDiff otgdiff={otgdiff} fl={framesList} gd={gd}></OTGDiff>;
}

// otgdiff.gated === true && otgdiff.gated_pass ? (
//     <GateClient gated_pass={otgdiff.gated_pass}>
//       <OTGDiff otgdiff={otgdiff} fl={framesList} gd={gd}></OTGDiff>
//     </GateClient>
//   ) : (
