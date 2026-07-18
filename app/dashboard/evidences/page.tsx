import { prisma } from "@/app/lib/prisma";
import Link from 'next/link';
import DeleteEvidenceButton from "@/app/ui/evidences/buttons";
import Image from "next/image";

export default async function Page() {
  const evidences = await prisma.evidence.findMany({
    orderBy: { createdAt: "desc" },
  });

  export const dynamic = "force-dynamic";

  return (
  <div className="grid gap-4 mt-6">
 <h1>Evidencias</h1>

        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
              {/* <Search placeholder="Search invoices..." /> */}
              <Link
                  href="/dashboard/evidences/new"
                  className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <span className="hidden md:block"> nueva evidencia</span>{' '}
                  <p className="h-5 md:ml-4" />
                </Link>
            </div>

  {evidences.map((e) => (
    <div
      key={e.id}
      className="rounded-lg border bg-main-gradient p-4 shadow-sm flex justify-between items-center"
    >
      <div className="flex gap-4 items-center">
        {e.fileType === "image" ? (
          <Image
            src={e.fileUrl}
            alt={e.title}
            width={80}
            height={80}
            className="rounded object-cover w-20 h-20"
          />
        ) : (
          <div className="w-20 h-20 rounded bg-main-gradient flex items-center justify-center text-3xl">
            📄
          </div>
        )}

        <div>
          <h2 className="font-bold text-white text-lg">{e.title}</h2>

          <p className="text-sm text-gray-500">
            {new Date(e.createdAt).toLocaleString()}
          </p>

          <p className="text-xs text-gray-400">
            {e.fileType}
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <a
          href={e.fileUrl}
          target="_blank"
          className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
        >
          Ver
        </a>

        <DeleteEvidenceButton id={e.id} />
      </div>
    </div>
  ))}
</div>
  );
}