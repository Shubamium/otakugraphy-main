import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

export async function GET() {
  let redis = Redis.fromEnv();
  redis.set("protected", ["/otg-difference", "/contact"]);
  return NextResponse.json({ success: true });
}

// Webbhook Sanity when updating main
export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  let { gated_pass, gatedlist } = data;

  let redis = Redis.fromEnv();
  redis.set("pass", gated_pass);
  redis.set("protected", gatedlist);

  return NextResponse.json({ success: true });
}
