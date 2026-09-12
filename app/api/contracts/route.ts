import { prisma } from '@/app/lib/prisma';
import { getDemoSession } from '@/app/lib/demoSession';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const demoSession = await getDemoSession();

    console.log("DEMO SESSION:", demoSession);

    // Si es una sesión demo, comprobar límite
    if (demoSession) {
      const contractCount = await prisma.contract.count({
        where: {
          demoSessionId: demoSession.id,
        },
      });

      console.log("DEMO CONTRACT COUNT:", contractCount);

      if (contractCount >= 2) {
        return Response.json(
          {
            error: "Has alcanzado el límite de 2 contratos de la demo.",
          },
          { status: 403 }
        );
      }
    }

    console.log("BODY:", body);

    const contract = await prisma.contract.create({
      data: {
        templateId: body.templateId,
        data: body.data,
        generatedText: body.generatedText,

        // Solo se asigna si estamos dentro de una demo
        ...(demoSession && {
          demoSessionId: demoSession.id,
        }),
      },
    });

    return Response.json(contract);
  } catch (error) {
    console.error(error);
    return new Response("Error al guardar", { status: 500 });
  }
}