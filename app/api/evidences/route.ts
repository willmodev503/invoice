import { prisma } from "@/app/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const evidence = await prisma.evidence.create({
    data: {
      title: body.title,
      fileUrl: body.fileUrl,
    publicId: body.publicId, 
      fileType: body.fileType,
    },
  });

  return Response.json(evidence);
}

export async function GET() {
  const evidences = await prisma.evidence.findMany({
    orderBy: { createdAt: "desc" },
  });

  return Response.json(evidences);
}