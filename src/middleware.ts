import { NextRequest, NextResponse } from "next/server";

import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";

function breakdownHostCheck(host: string, checker: string) {
  const [subdomain, path] = checker.split("~");

  console.log(checker, host);
  if (subdomain == host.split(".")[0]) {
    return path;
  } else {
    const arbtiraryString =
      "0000000000000000000000000000000000000000000000000284082408204802840284082482048028408";
    return arbtiraryString;
  }
}

export async function middleware(req: NextRequest) {
  // Authentication
  let cookie = await cookies();

  const host = req.headers.get("host");

  const redis = Redis.fromEnv();
  const { pathname } = req.nextUrl;

  if (cookie.get("admin")?.value === "true") {
    console.log("Admin Mode");
  } else {
    const gatedPages = (await redis.get<string[]>("protected")) ?? [];

    const matchURL = gatedPages.some(
      (p) =>
        pathname == breakdownHostCheck(host ?? "089503850830583058", p) ||
        pathname == p,
    );

    if (matchURL) {
      const target = new URL(
        "/otakugraphy/unavailable",
        process.env.NEXT_PUBLIC_PAYLOAD_URL,
      );
      console.log(target.href);
      return NextResponse.rewrite(target);
    }
  }

  // Handle Redirect
  if (req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  let target = new URL("/otakugraphy" + req.nextUrl.pathname, req.url);

  if (host?.includes("vps")) {
    target = new URL("/vps" + req.nextUrl.pathname, req.url);
  } else if (host?.includes("media")) {
    target = new URL("/media" + req.nextUrl.pathname, req.url);
  } else if (host?.includes("rigs")) {
    target = new URL("/rigs" + req.nextUrl.pathname, req.url);
  } else if (req.nextUrl.pathname === "/") {
    // Main page
    target = new URL(req.nextUrl.pathname, req.url);
    console.log("home");
  }
  console.log(target.href, "page");
  target.search = req.nextUrl.search;
  return NextResponse.rewrite(target);
}
export const config = {
  matcher: ["/((?!_next|favicon.ico|unavailable|api|.*\\..*).*)"],
};
