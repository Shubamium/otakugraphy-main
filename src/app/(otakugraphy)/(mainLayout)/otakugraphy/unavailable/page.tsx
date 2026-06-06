import GateClient from "@/app/components/passwordGate/GateClient";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <GateClient gated_pass="simple">
      <h2>hey</h2>
    </GateClient>
  );
}
