import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/auth";

export async function POST(): Promise<NextResponse> {
  await deleteSession();
  return NextResponse.redirect(
    new URL("/", process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000")
  );
}
