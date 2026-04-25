"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function NewEvidence() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");

  async function handleUpload() {
    if (!file) return;
    

    const formData = new FormData();
    formData.append("file", file);

    try {
      // 1️⃣ subir archivo
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      console.log(uploadData);

      // 2️⃣ guardar en DB
      await fetch("/api/evidences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          fileUrl: uploadData.url,
          fileType: uploadData.type,
        }),
      });

      toast.success("Evidencia subida ✅");
    } catch {
      toast.error("Error ❌");
    }
  }

  return (
    <div >
      <h1>Subir evidencia</h1>

      <input
      className="text-black"
        type="text"
        placeholder="Evento"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
      className="text-black"
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={handleUpload}>
        Subir
      </button>
    </div>
  );
}