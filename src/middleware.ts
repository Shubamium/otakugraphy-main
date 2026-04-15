import { NextRequest, NextResponse } from "next/server";

import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  // Authentication
  let cookie = await cookies();
  if (cookie.get("admin")?.value === "true") {
    console.log("Admin Mode");
    return NextResponse.next();
  }

  const redis = Redis.fromEnv();
  const { pathname } = req.nextUrl;
  const gatedPages = (await redis.get<string[]>("protected")) ?? [];

  if (gatedPages.some((p) => pathname.startsWith(p))) {
    console.log("Page is gated");
    return NextResponse.redirect(new URL("/unavailable", req.url));
  }
  // Handle Redirect
  const host = req.headers.get("host");
  if (req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  } else if (host?.includes("vps")) {
    return NextResponse.rewrite(
      new URL("/vps" + req.nextUrl.pathname, req.url),
    );
  } else {
    return NextResponse.rewrite(
      new URL("/otakugraphy" + req.nextUrl.pathname, req.url),
    );
  }
}
export const config = {
  matcher: ["/((?!_next|favicon.ico|unavailable|api|.*\\..*).*)"],
};
