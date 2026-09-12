import { getDemoSession } from "@/app/lib/demoSession";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getDemoSession();

  if (!session) {
    return NextResponse.json(
      {
        isDemo: false,
      },
      { status: 401 }
    );
  }

  return NextResponse.json({
    isDemo: true,
    sessionId: session.sessionId,
    expiresAt: session.expiresAt,
  });
}