import React from "react";
import Contact from "./Contact";
import { fetchData } from "../db/sanity";

type Props = {};

export default async function page({}: Props) {
  const gd = await fetchData<any>(`
		*[_type == 'general' && preset == 'main'][0]{
		ct_bg,
		ct_fs,
		}
	`);

  return <Contact gd={gd} />;
}
