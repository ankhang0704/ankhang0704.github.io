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

  // Handle legacy FM Dictionary subpaths:
  const normalizedPath = pathname.replace(/^\/(en|vi)/, "");
  if (normalizedPath === "/fm-dictionary/case-study" || normalizedPath.startsWith("/fm-dictionary/case-study/")) {
    const isVi = pathname.startsWith("/vi");
    const targetUrl = new URL(isVi ? "/vi/fm-dictionary/" : "/fm-dictionary/", request.url);
    return NextResponse.redirect(targetUrl, 308);
  }
  if (normalizedPath.startsWith("/fm-dictionary/")) {
    if (normalizedPath.includes("privacy-policy")) {
      return NextResponse.redirect(new URL("https://fm-dictionary.pages.dev/privacy/"), 308);
    }
    if (normalizedPath.includes("terms-of-service")) {
      return NextResponse.redirect(new URL("https://fm-dictionary.pages.dev/terms/"), 308);
    }
    if (normalizedPath.includes("support") || normalizedPath.includes("delete-account")) {
      return NextResponse.redirect(new URL("https://fm-dictionary.pages.dev/"), 308);
    }
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
