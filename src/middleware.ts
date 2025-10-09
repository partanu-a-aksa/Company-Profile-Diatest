// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = req.nextUrl.pathname;

  // baca cookie prototipe
  const token = req.cookies.get("diatest_token")?.value;

  // Protect dashboard and its subpaths
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      // Simpan path tujuan (optional) -> bisa digunakan nanti
      url.pathname = "/signin";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/e-result")) {
    if (!token) {
      // Simpan path tujuan (optional) -> bisa digunakan nanti
      url.pathname = "/signin";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Jika sudah login, jangan biarkan buka /signin
  if (pathname === "/signin" || pathname === "/signin/") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // matcher: dashboard paths + signin (so signin redirect works server-side)
  matcher: ["/dashboard/:path*"],
};
