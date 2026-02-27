import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createSession } from "@/lib/auth";

const DISCORD_TOKEN_URL = "https://discord.com/api/oauth2/token";
const DISCORD_USERS_ME_URL = "https://discord.com/api/users/@me";

function baseUrl(): string {
  return process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000";
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  // Discord a refusé l'autorisation
  if (error) {
    return NextResponse.redirect(new URL("/login?error=access_denied", baseUrl()));
  }

  if (!code || !state) {
    return NextResponse.redirect(new URL("/login?error=invalid_request", baseUrl()));
  }

  // Vérifie le state CSRF
  const cookieStore = await cookies();
  const savedState = cookieStore.get("discord_oauth_state")?.value;
  cookieStore.delete("discord_oauth_state");

  if (!savedState || savedState !== state) {
    return NextResponse.redirect(new URL("/login?error=invalid_state", baseUrl()));
  }

  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  const redirectUri = process.env.DISCORD_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.redirect(new URL("/login?error=config", baseUrl()));
  }

  try {
    // Échange le code contre un access token
    const tokenResponse = await fetch(DISCORD_TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
      }),
    });

    if (!tokenResponse.ok) {
      return NextResponse.redirect(new URL("/login?error=token_exchange", baseUrl()));
    }

    const tokenData = await tokenResponse.json() as { access_token: string };

    // Récupère les infos utilisateur Discord
    const userResponse = await fetch(DISCORD_USERS_ME_URL, {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    if (!userResponse.ok) {
      return NextResponse.redirect(new URL("/login?error=user_fetch", baseUrl()));
    }

    const user = await userResponse.json() as {
      id: string;
      username: string;
      discriminator: string;
      avatar: string | null;
      email: string | null;
    };

    // Crée la session JWT
    await createSession({
      userId: user.id,
      username: user.username,
      discriminator: user.discriminator,
      avatar: user.avatar,
      email: user.email,
    });

    return NextResponse.redirect(new URL("/dashboard", baseUrl()));
  } catch {
    return NextResponse.redirect(new URL("/login?error=server_error", baseUrl()));
  }
}
