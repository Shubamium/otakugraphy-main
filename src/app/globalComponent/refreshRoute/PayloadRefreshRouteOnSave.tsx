"use client";
import React from "react";

import { RefreshRouteOnSave } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation";
type Props = {};

export default function PayloadRefreshRouteOnSave({}: Props) {
  const router = useRouter();
  return (
    <RefreshRouteOnSave
      refresh={() => {
        router.refresh();
      }}
      serverURL={process.env.NEXT_PUBLIC_PAYLOAD_URL ?? ""}
    />
  );
}
