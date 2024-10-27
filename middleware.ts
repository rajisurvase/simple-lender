import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const hasToken = request.cookies?.get(process.env.NEXT_APP_TOKEN_NAME!)?.value;

  const { pathname } = request.nextUrl;

  // If the user is trying to access the auth routes and does not have a token
  if (!hasToken && pathname.startsWith("/auth")) {
    return NextResponse.next(); // Allow access to auth pages
  }


  return NextResponse.next(); // Allow access to other routes
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/:path*"] // Apply to all paths
};
