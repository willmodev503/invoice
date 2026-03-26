import Layout from "@/app/ui/components/Layout";

export default function Clients() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Nuevo Cliente
      </button>

      <div className="mt-4 bg-white p-4 rounded shadow">
        Lista de clientes aquí...
      </div>
    </Layout>
  );
}