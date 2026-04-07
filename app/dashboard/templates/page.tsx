import { prisma } from "@/app/lib/prisma";
import Link from "next/link";

export default async function TemplatesPage() {
  const templates = await prisma.template.findMany();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Templates</h1>

      <Link
        href="/dashboard/templates/new"
        className="bg-blue-500 text-white px-4 py-2 mb-4 inline-block"
      >
        + Nuevo Template
      </Link>

      <div className="space-y-2">
        {templates.map((t) => (
          <div
            key={t.id}
            className="border p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-gray-500">
                {t.content.slice(0, 50)}...
              </p>
            </div>

            <Link
              href={`/dashboard/templates/${t.id}`}
              className="text-blue-500"
            >
              Editar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}