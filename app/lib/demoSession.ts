import { cookies } from "next/headers";
import { prisma } from "@/app/lib/prisma";

export async function getDemoSession() {
  const cookieStore = await cookies();

  const demoSessionId = cookieStore.get("demoSessionId")?.value;

  if (!demoSessionId) {
    return null;
  }

  const session = await prisma.demoSession.findUnique({
    where: {
      sessionId: demoSessionId,
    },
  });

  if (!session) {
    return null;
  }

  if (session.expiresAt <= new Date()) {
    return null;
  }

  return session;
}