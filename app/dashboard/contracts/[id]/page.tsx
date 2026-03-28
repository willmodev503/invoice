import { prisma } from '@/app/lib/prisma';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const contract = await prisma.contract.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      template: true,
    },
  });

  if (!contract) {
    return <div className="p-6">Contrato no encontrado</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        Contrato #{contract.id}
      </h1>

      <div>
        <h2 className="font-semibold">Template</h2>
        <p>{contract.template.name}</p>
      </div>

      <div>
        <h2 className="font-semibold">Contenido generado</h2>
        <pre className="bg-gray-100 p-4 whitespace-pre-wrap">
          {contract.generatedText}
        </pre>
      </div>

      <div>
        <h2 className="font-semibold">Datos</h2>
        <pre className="bg-gray-100 p-4">
          {JSON.stringify(contract.data, null, 2)}
        </pre>
      </div>

      <div>
        <h2 className="font-semibold">Fecha</h2>
        <p>{new Date(contract.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
}