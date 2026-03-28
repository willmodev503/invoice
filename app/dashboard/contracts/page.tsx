import Layout from "@/app/ui/components/Layout";
import Link from 'next/link';
import { prisma } from '@/app/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const contracts = await prisma.contract.findMany({
    include: {
      template: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return (
    <Layout>
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Contratos</h1>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Template</th>
            <th className="p-2 border">Contenido</th>
            <th className="p-2 border">Fecha</th>
          </tr>
        </thead>

        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td className="p-2 border">{contract.id}</td>

              <td className="p-2 border">
                {contract.template.name}
              </td>

           <td className="p-2 border">
  <Link
    href={`/api/contracts/${contract.id}`}
    className="text-blue-500 underline"
  >
    {contract.generatedText.slice(0, 50)}...
  </Link>
</td>
              

              <td className="p-2 border">
                {new Date(contract.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
  );
}