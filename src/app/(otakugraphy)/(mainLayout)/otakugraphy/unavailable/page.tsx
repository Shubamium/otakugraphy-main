import React from "react";
import PasswordGate from "../components/passwordGate/PasswordGate";
import GateClient from "../components/passwordGate/GateClient";

type Props = {};

export default function page({}: Props) {
  // return <PasswordGate></PasswordGate>;
  return (
    <GateClient gated_pass="simple">
      <h2>hey</h2>
    </GateClient>
  );
}
