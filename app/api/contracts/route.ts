import { prisma } from '@/app/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", body);

    const contract = await prisma.contract.create({
      data: {
        templateId: body.templateId,
        data: body.data,
        generatedText: body.generatedText,
      },
    });

    return Response.json(contract);
  } catch (error) {
    console.error(error);
    return new Response("Error al guardar", { status: 500 });
  }
}