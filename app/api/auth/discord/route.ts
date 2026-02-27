import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const DISCORD_OAUTH_URL = "https://discord.com/api/oauth2/authorize";
const SCOPES = "identify email";

export async function GET(): Promise<NextResponse> {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const redirectUri = process.env.DISCORD_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.redirect(
      new URL("/login?error=config", process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000")
    );
  }

  // Génère un state CSRF aléatoire
  const state = crypto.randomUUID();

  // Stocke le state dans un cookie httpOnly de 10min
  const cookieStore = await cookies();
  cookieStore.set("discord_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 10,
    path: "/",
  });

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: SCOPES,
    state,
  });

  return NextResponse.redirect(`${DISCORD_OAUTH_URL}?${params.toString()}`);
}
