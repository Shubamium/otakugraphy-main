import { NextRequest, NextResponse } from "next/server";

import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";
import { parse } from "tldts";
import { GiTargetArrows } from "react-icons/gi";

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
  const { pathname, href, protocol, hostname } = req.nextUrl;

  if (cookie.get("admin")?.value === "true") {
    console.log("Admin Mode");
  } else {
    const gatedPages = (await redis.get<string[]>("protected")) ?? [];

    console.log(gatedPages);
    const matchURL = gatedPages.some(
      (p) =>
        pathname.startsWith(
          breakdownHostCheck(host ?? "089503850830583058", p),
        ) || pathname.startsWith(p),
    );

    if (matchURL) {
      console.log("Page is gated");

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
  } else if (host?.includes("vps")) {
    const target = new URL("/vps" + req.nextUrl.pathname, req.url);
    target.search = req.nextUrl.search;
    return NextResponse.rewrite(target);
  } else {
    const target = new URL("/otakugraphy" + req.nextUrl.pathname, req.url);
    target.search = req.nextUrl.search;
    return NextResponse.rewrite(target);
  }
}
export const config = {
  matcher: ["/((?!_next|favicon.ico|unavailable|api|.*\\..*).*)"],
};
