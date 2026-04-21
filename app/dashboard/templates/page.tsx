
import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import {DeleteTemplateButton} from "@/app/ui/invoices/buttons";
import Image from 'next/image';

export default async function TemplatesPage() {
  const templates = await prisma.template.findMany();

  return (

    
    <div>

         <h1 className="text-2xl font-bold mb-4">Templates</h1>
          <Link
        href="/dashboard/templates/new"
        className="bg-blue-500 text-white px-4 py-2 mb-4 inline-block"
      >
        + Nuevo Template
      </Link>
       <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {templates?.map((t) => (
              <div
                key={t.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={"/customers/evil-rabbit.png"}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${t.name}'s profile picture`}
                      />
                      <p>{t.id}</p>
                    </div>
                    <p className="text-sm text-gray-500">  {t.name}</p>
                  </div>
                
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                     <p className="text-xl font-medium">
  {t.content.slice(0, 50)}...
                    </p>
                  

                  </div>
                  <div className="flex justify-end gap-2">
                       <Link
              href={`/dashboard/templates/${t.id}`}

              className="text-blue-500"
            >
              Editar
            </Link>

                <DeleteTemplateButton id={t.id}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Template
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Contenido
                </th>
           
              </tr>
            </thead>
            <tbody className="bg-white">
              {templates?.map((t) => (
                <tr
                  key={t.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={"/customers/evil-rabbit.png"}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${t.id}'s profile picture`}
                      />
                      <p>{t.id}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                 {t.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
       {t.content.slice(0, 50)}...
                  </td>
             
             
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                <Link
              href={`/dashboard/templates/${t.id}`}

              className="text-blue-500"
            >
              Editar
            </Link>
            
<DeleteTemplateButton id={t.id}/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}