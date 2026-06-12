"use client";
import React, { useEffect } from "react";
import UnderConstruction from "../underConstuction/UnderConstruction";
import { BypassGate } from "@/util/Login";
import { useRouter } from "next/navigation";

export default function GateClient() {
  // const [pass, setPass] = React.useState("");
  // const [unlocked, setUnlocked] = React.useState(false);
  const navigation = useRouter();
  async function CheckPassword() {
    const data = prompt("Enter Password:");
    if (data === null) return;

    const result = await BypassGate(data);
    if (result) {
      alert("Admin Mode: Active");
      navigation.refresh();
    } else {
      alert("Invalid password, please try again");
    }
  }

  // if (unlocked) {
  //   return <>{children}</>;
  // }
  return (
    <UnderConstruction
      onAccess={() => {
        CheckPassword();
      }}
    />
  );
}
