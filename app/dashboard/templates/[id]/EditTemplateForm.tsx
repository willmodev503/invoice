"use client";

import { useState } from "react";
import { updateTemplate } from "@/app/lib/actions";

export default function EditTemplateForm({ template }: any) {
  const [name, setName] = useState(template.name);
  const [content, setContent] = useState(template.content);

  async function handleSave() {
    await updateTemplate(template.id, name, content);
    alert("Actualizado ✅");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Editar Template</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border text-black p-2 w-full mb-4"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border text-black p-2 w-full h-40 mb-4"
      />

      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2"
      >
        Guardar cambios
      </button>
    </div>
  );
}