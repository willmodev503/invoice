import { prisma } from "@/app/lib/prisma";
import Link from 'next/link';
import DeleteEvidenceButton from "@/app/ui/evidences/buttons";

export default async function Page() {
  const evidences = await prisma.evidence.findMany({
    orderBy: { createdAt: "desc" },
  });

  

  return (
    <div className="">
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
        <div key={e.id}>
          <p>{e.title}</p>
          <p>{new Date(e.createdAt).toLocaleString()}</p>

          <a href={e.fileUrl} target="_blank">
            Ver archivo
          </a>
           <DeleteEvidenceButton id={e.id} />
        </div>
      ))}
    </div>
  );
}