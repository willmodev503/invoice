import { prisma } from '@/app/lib/prisma';

export async function GET() {
  const templates = await prisma.template.findMany();
  return Response.json(templates);
}