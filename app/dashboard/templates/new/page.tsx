"use client";

import { useState } from "react";
import { createTemplate } from "@/app/lib/actions";

export default function NewTemplatePage() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit() {
    await createTemplate(name, content);

    alert("Template creado ✅");

    setName("");
    setContent("");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Nuevo Template</h1>

      <input
        placeholder="Ingresa el Nombre de la plantilla"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <textarea
        placeholder="Ingresa el Contenido de la plantilla y para el contenido variable encierra en doble llave con nombres descriptivos para los campos ej: nombre del comprador (usa {{nombre.comprador}})"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full h-40 mb-4"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Guardar Template
      </button>
    </div>
  );
}