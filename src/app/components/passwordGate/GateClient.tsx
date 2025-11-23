"use client";
import { p } from "motion/react-client";
import React, { useEffect } from "react";
import UnderConstruction from "../underConstuction/UnderConstruction";

type Props = { gated_pass: string; children: React.ReactNode };

export default function GateClient({ gated_pass, children }: Props) {
  const [pass, setPass] = React.useState("");
  const [unlocked, setUnlocked] = React.useState(false);
  function CheckPassword() {
    const data = prompt("Enter Password:");
    if (data === gated_pass) {
      setUnlocked(true);
    } else {
      alert("Invalid password, please try again");
    }
  }
  useEffect(() => {
    // CheckPassword();
  }, []);
  if (unlocked) {
    return <>{children}</>;
  }
  return (
    <div>
      <UnderConstruction
        onAccess={() => {
          CheckPassword();
        }}
      />
    </div>
  );
}
