import { fetchData } from "@/app/db/sanity";
import React, { Suspense } from "react";
import GateClient from "./GateClient";
import UnderConstruction from "../underConstuction/UnderConstruction";

type Props = {
  children: React.ReactNode;
};

export default async function PasswordGate({ children }: Props) {
  const hd = await fetchData<any>(`
		*[_type == "general" && preset == "main"][0]{
			gated,
			gated_pass
		}
	`);
  return (
    <div>
      {hd.gated === true ? (
        <Suspense fallback={<UnderConstruction />}>
          <GateClient gated_pass={hd.gated_pass}>{children}</GateClient>
        </Suspense>
      ) : (
        children
      )}
    </div>
  );
}
