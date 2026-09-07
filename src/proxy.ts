import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, images, API routes, and generated OG images.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/-/") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const isVietnamesePath = pathname === "/vi" || pathname.startsWith("/vi/");
  const isEnglishPath = pathname === "/en" || pathname.startsWith("/en/");

  if (isVietnamesePath) return NextResponse.next();

  // Keep English canonical URLs locale-free: /en/projects/ -> /projects/.
  if (isEnglishPath) {
    request.nextUrl.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(request.nextUrl);
  }

  // Render English routes without exposing the internal [lang] segment.
  request.nextUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
