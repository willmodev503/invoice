"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function UploadEvidence() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!file) {
      toast.error("Selecciona un archivo");
      return;
    }

    if (loading) return; // 🔥 evita doble click

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      // 1️⃣ subir a cloudinary
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();

      if (!uploadRes.ok) throw new Error("Error subiendo archivo");

      // 2️⃣ guardar en DB
      const saveRes = await fetch("/api/evidences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: file.name,
          fileUrl: uploadData.url,
          publicId: uploadData.publicId,
          fileType: uploadData.type,
        }),
      });

      if (!saveRes.ok) throw new Error("Error guardando en DB");

      toast.success("Archivo subido correctamente ✅");
      router.push("/dashboard/evidences");
router.refresh();

      setFile(null); // reset
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Error ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`px-4 py-2 text-white rounded ${
          loading ? "bg-gray-400" : "bg-blue-500"
        }`}
      >
        {loading ? "Subiendo..." : "Subir archivo"}
      </button>
    </div>
  );
}