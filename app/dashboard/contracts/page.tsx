import Layout from "@/app/ui/components/Layout";
import Link from 'next/link';
import { prisma } from '@/app/lib/prisma';
import Table from '@/app/ui/contracts/table';
import { lusitana } from '@/app/ui/fonts';
import { CreateContract } from '@/app/ui/invoices/buttons';
import {  DocumentCheckIcon } from '@heroicons/react/24/outline';


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
             <Link
                  href="/dashboard/templates"
                  className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <span className="hidden md:block"> Templates</span>{' '}
                  <DocumentCheckIcon className="h-5 md:ml-4" />
                </Link>
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