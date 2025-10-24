import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "4fc43cf9-e011-45b9-8a53-8dc5ab912e77");
  requestHeaders.set("x-createxyz-project-group-id", "196ad29b-cab0-4d13-b626-001d913d500f");


  request.nextUrl.href = `https://www.createanything.com/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}