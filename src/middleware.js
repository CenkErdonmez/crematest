import { NextRequest, NextResponse } from "next/server";

export default function middleware(request) {
  const response = NextResponse.next();

  if (request.cookies.has("lang")) {
    return;
  } else {
    const value = "en-US";

    response.cookies.set({
      name: "lang",
      value: value,
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
