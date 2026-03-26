"use client";

type Props = {
  onSubmit: (data: any) => void;
};

export default function ContractForm({ onSubmit }: Props) {
  function handleSubmit(e: any) {
    e.preventDefault();

    const formData = {
      ciudad: e.target.ciudad.value,
      departamento: e.target.departamento.value,
      vendedor_nombre: e.target.vendedor_nombre.value,
      vendedor_edad: e.target.vendedor_edad.value,
      precio: e.target.precio.value,
    };

    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="ciudad" placeholder="Ciudad" className="border p-2 w-full" />
      <input name="departamento" placeholder="Departamento" className="border p-2 w-full" />
      <input name="vendedor_nombre" placeholder="Nombre vendedor" className="border p-2 w-full" />
      <input name="vendedor_edad" placeholder="Edad" className="border p-2 w-full" />
      <input name="precio" placeholder="Precio" className="border p-2 w-full" />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Generar
      </button>
    </form>
  );
}