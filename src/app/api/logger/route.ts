import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // S'affichera dans le shell où tourne `yarn dev`
    console.log("[client-log]", JSON.stringify(body));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to parse client log", err);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}