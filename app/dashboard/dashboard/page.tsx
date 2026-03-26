import Layout from "@/app/ui/components/Layout";
import StatsCard from "@/app/ui/components/StatsCard";

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <StatsCard title="Contratos" value="12" />
        <StatsCard title="Clientes" value="5" />
        <StatsCard title="Plantillas" value="3" />
      </div>
    </Layout>
  );
}