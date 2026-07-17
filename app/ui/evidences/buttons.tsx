"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { deleteEvidence } from "@/app/lib/actions";

type Props = {
  id: number;
};

export default function DeleteEvidenceButton({ id }: Props) {
  const router = useRouter();

  async function handleDelete() {
    const ok = confirm("¿Eliminar evidencia?");

    if (!ok) return;

    try {
      await deleteEvidence(id);

      toast.success("Evidencia eliminada ✅");

      router.refresh();
    } catch (error) {
      toast.error("No se pudo eliminar");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Eliminar
    </button>
  );
}