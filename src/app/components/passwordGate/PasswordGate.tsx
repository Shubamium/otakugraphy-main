// DEPRECATED

import React, { Suspense } from "react";
import GateClient from "./GateClient";
import UnderConstruction from "../underConstuction/UnderConstruction";
import { redirect } from "next/navigation";
import { fetchData } from "@/app/db/sanity";

type Props = {
  children: React.ReactNode;
};

export default async function PasswordGate({ children }: Props) {
  const hd = await fetchData<any>(`
		*[_type == "general" && preset == "main"][0]{
			gated,
			gated_pass,
			gatedList,
		}
	`);

  return <>{children}</>;
}
