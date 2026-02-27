import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const COOKIE_NAME = "potefolio_session";

function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not defined");
  return new TextEncoder().encode(secret);
}

async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) return false;
  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;
  const authenticated = await isAuthenticated(request);

  // Protège /dashboard et toutes les routes imbriquées
  if (pathname.startsWith("/dashboard")) {
    if (!authenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Redirige vers /dashboard si déjà connecté
  if (pathname === "/login") {
    if (authenticated) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
