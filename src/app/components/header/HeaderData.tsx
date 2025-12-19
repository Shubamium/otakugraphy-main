import React from "react";
import Header from "./Header";
import { fetchData } from "@/app/db/sanity";

type Props = {};

export default async function HeaderData({}: Props) {
  const hd = await fetchData<any>(`
		*[_type == "general" && preset == "main"][0]{
			navlist,
		}`);
  console.log(hd, hd.navlist);
  return <Header navlist={hd.navlist} />;
}
