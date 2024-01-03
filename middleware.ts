import { NextRequest, NextResponse } from "next/server";
import { loginAccessTokenCookieName } from "./config/constants";
// If the incoming request has the "token" cookie
export function middleware(request: NextRequest) {
  const has_token = request.cookies.get(loginAccessTokenCookieName)?.name;

//   const { pathname } = request.nextUrl;

  if (has_token === undefined || has_token === null) {
    request.nextUrl.pathname = "/auth/signin";
    return NextResponse.redirect(request.nextUrl);
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    // "/borrowers/:path*"
  ]
};