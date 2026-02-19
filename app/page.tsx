import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';




export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
       
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-32">
      <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
      
     <div/>
  <p
      className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
    >            <strong>Bienvenido a mi portafolio</strong> Sientete libre de  explorar{' '}
          
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
  <main className="flex flex-col justify-center px-6 md:px-20 bg-white">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Soy <span className="text-blue-600">Neokaos</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Fullstack Developer especializado en construir aplicaciones web
          modernas, rápidas y escalables utilizando React, Next.js y Node.js.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/dashboard"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-500 transition"
          >
            🚀 Ver Proyectos
          </a>

          <a
            href="dashboard"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100 transition"
          >
            📩 Contactarme
          </a>
        </div>
      </div>
    </main>
        </div>
      </div>
    </main>
  );
}
