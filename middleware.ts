
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(process.env.NEXT_APP_TOKEN_NAME!)?.value;
  const isAuthenticated = !!token;
  const { pathname } = request.nextUrl;

  // ✅ Authenticated users trying to access /auth routes → redirect to dashboard
  if (isAuthenticated && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ❌ Unauthenticated users trying to access protected routes → redirect to signin
  if (!isAuthenticated && !pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // ✅ All other valid conditions → proceed normally
  return NextResponse.next();
}

// 🛠 Match all routes except static files
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};