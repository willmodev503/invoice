import Layout from "@/app/ui/components/Layout";
import Link from 'next/link';
import { prisma } from '@/app/lib/prisma';
import Table from '@/app/ui/contracts/table';
import { lusitana } from '@/app/ui/fonts';
import { CreateContract } from '@/app/ui/invoices/buttons';


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contracts',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
  return (

        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} text-2xl`}>contratos</h1>
          </div>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            {/* <Search placeholder="Search invoices..." /> */}
            <CreateContract /> 
          </div>
           {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}> */}
          <Table/>
          {/* </Suspense>  */}
          <div className="mt-5 flex w-full justify-center">
             {/* <Pagination totalPages={totalPages} /> */}
          </div>
        </div>

 

   
   


  );
}