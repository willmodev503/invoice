import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">Legal AI</h1>

      <nav className="grid grid-cols-1 gap-4">
        <Link href="/dashboard/dashboard">Dashboard</Link>
        <Link href="/dashboard/clients">Clientes</Link>
        <Link href="/dashboard/contracts">Contratos</Link>
        <Link href="/dashboard/contracts/new">Nuevo Contrato</Link>
      </nav>
    </aside>
  );
}