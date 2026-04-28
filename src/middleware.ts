import { NextRequest, NextResponse } from "next/server";

import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";

function breakdownHostCheck(host: string, checker: string) {
  const [subdomain, path] = checker.split("~");

  // const url = new URL(href);

  console.log(checker, host);
  if (subdomain == host.split(".")[0]) {
    return path;
  } else {
    return "0000000000000000000000000000000000000000000000000284082408204802840284082482048028408";
  }
}

export async function middleware(req: NextRequest) {
  // Authentication
  let cookie = await cookies();
  if (cookie.get("admin")?.value === "true") {
    console.log("Admin Mode");
    return NextResponse.next();
  }
  const host = req.headers.get("host");

  const redis = Redis.fromEnv();
  const { pathname, href } = req.nextUrl;
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
    return NextResponse.redirect(new URL("/unavailable", req.url));
  }
  // Handle Redirect
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
