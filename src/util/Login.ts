"use server";

import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";

export async function BypassGate(pass: string): Promise<boolean> {
  console.log("login:", pass);
  const redis = Redis.fromEnv();

  const correctPass = await redis.get("pass");

  if (pass === correctPass) {
    (await cookies()).set("admin", "true", {
      httpOnly: true,
      maxAge: 3600 * 24 * 7,
    });
    return true;
  }

  return false;
}
