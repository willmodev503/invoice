
import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice,DeleteContractButton } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { prisma } from '@/app/lib/prisma';
import Link from 'next/link';




export default async function ContractsTable() {
  const contracts = await prisma.contract.findMany({
    include: {
      template: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {contracts?.map((contract) => (
              <div
                key={contract.id}
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
                        alt={`${contract.template.name}'s profile picture`}
                      />
                      <p>{contract.id}</p>
                    </div>
                    <p className="text-sm text-gray-500">  {contract.template.name}</p>
                  </div>
                
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                     <p className="text-xl font-medium">
                                       <Link
    href={`/api/contracts/${contract.id}`}
    className="text-blue-500 underline"
  >
    {contract.generatedText.slice(0, 50)}...
  </Link>
                    </p>
                    <p> {new Date(contract.createdAt).toLocaleString()}
                    </p>

                  </div>
                  <div className="flex justify-end gap-2">
                    {/* <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} /> */}
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
                <th scope="col" className="px-3 py-5 font-medium">
                  Fecha
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {contracts?.map((contract) => (
                <tr
                  key={contract.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={"/customers/evil-rabbit.png"}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${contract.id}'s profile picture`}
                      />
                      <p>{contract.id}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                 {contract.template.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                   <Link
    href={`/api/contracts/${contract.id}`}
    className="text-blue-500 underline"
  >
    {contract.generatedText.slice(0, 50)}...
  </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {new Date(contract.createdAt).toLocaleString()}
                  </td>
             
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} /> */}
<DeleteContractButton id={contract.id}/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
