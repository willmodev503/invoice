import AcmeLogo from "@/app/ui/acme-logo";
import Link from "next/link";
import {
  ArrowRightIcon,
  DocumentTextIcon,
  CloudArrowUpIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Navbar */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <AcmeLogo />

        <Link
          href="/login"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white font-medium transition hover:bg-blue-500"
        >
          Iniciar Sesión
        </Link>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">
        <div className="flex-1">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            CRM + Facturación Electrónica
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
            Administra tu empresa desde un solo lugar.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Gestiona clientes, contratos, documentos, archivos y facturación
            electrónica en una plataforma moderna, rápida y segura.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Comenzar
              <ArrowRightIcon className="w-5" />
            </Link>

            <button className="rounded-lg border border-gray-300 px-7 py-4 font-semibold hover:bg-gray-100">
              Ver Demo
            </button>
          </div>

          <div className="mt-12 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold text-blue-600">+2K</h2>
              <p className="text-gray-600">Contratos</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">100%</h2>
              <p className="text-gray-600">En la nube</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">24/7</h2>
              <p className="text-gray-600">Disponible</p>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex-1">
          <div className="rounded-3xl bg-white p-5 shadow-2xl">
            <img
              src="/dashboard-preview.png"
              alt="Dashboard CRM"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Características */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-4xl font-bold">
          Todo lo que necesita tu empresa
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Centraliza toda la información de tus clientes.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={<UserGroupIcon className="w-10 text-blue-600" />}
            title="Clientes"
            description="Gestiona clientes y su historial."
          />

          <Feature
            icon={<DocumentTextIcon className="w-10 text-blue-600" />}
            title="Contratos"
            description="Crea, edita y almacena contratos."
          />

          <Feature
            icon={<CloudArrowUpIcon className="w-10 text-blue-600" />}
            title="Archivos"
            description="Sube imágenes y documentos en segundos."
          />

          <Feature
            icon={<ShieldCheckIcon className="w-10 text-blue-600" />}
            title="Seguridad"
            description="Información protegida y respaldada."
          />
        </div>
      </section>

      {/* CTA */}

      <section className="bg-blue-600 py-20 text-center text-white">
        <h2 className="text-4xl font-bold">
          Lleva tu empresa al siguiente nivel
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
          Organiza toda la información de tu negocio desde cualquier lugar.
        </p>

        <Link
          href="/login"
          className="mt-10 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-gray-100"
        >
          Empezar Ahora
        </Link>
      </section>
    </main>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      {icon}

      <h3 className="mt-5 text-xl font-bold">{title}</h3>

      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}