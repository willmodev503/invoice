import { prisma } from "@/app/lib/prisma";
import { randomUUID } from "crypto";

export async function POST() {
  const sessionId = randomUUID();

  const expiresAt = new Date(
    Date.now() + 10 * 60 * 1000
  );

  const session = await prisma.demoSession.create({
    data: {
      sessionId,
      expiresAt,
    },
  });

  return Response.json({
    sessionId: session.sessionId,
    expiresAt: session.expiresAt,
  });
}