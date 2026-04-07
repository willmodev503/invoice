"use client";

import { useEffect, useState } from "react";
import Layout from "@/app/ui/components/Layout";
import DynamicForm from "@/app/ui/components/forms/form";
import { renderTemplate, extractVariables } from "@/app/lib/templateEngine";
import { createContract } from '@/app/lib/actions';

export default function NewContract() {
  const [step, setStep] = useState(1);

  const [templates, setTemplates] = useState<any[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

const [formData, setFormData] = useState<any>(null);
const [generatedText, setGeneratedText] = useState("");
  const [variables, setVariables] = useState<string[]>([]);

  

  // 🔥 cargar templates desde DB
  useEffect(() => {
    fetch("/api/templates")
      .then(res => res.json())
      .then(data => setTemplates(data));
  }, []);

  // 🧠 cuando seleccionas template
  function handleSelectTemplate(template: any) {
    setSelectedTemplate(template);

    const vars = extractVariables(template.content);
    setVariables(vars);

    setStep(2);
  }

  // 🧠 cuando llenas el form
  function handleGenerate(data: any) {
    const result = renderTemplate(selectedTemplate.content, data);
    setGeneratedText(result);
    setStep(3);
  }

  function handleFormSubmit(data: any, result: string) {
  setFormData(data);
  setGeneratedText(result);
  setStep(3); // ir a preview
}



async function handleSave() {
  try {
    await createContract(
      selectedTemplate.id,
      selectedTemplate.content,
      formData
    );

    alert("Contrato guardado ✅");
  } catch (error) {
    console.error(error);
    alert("Error ❌");
  }
}

// async function handleSave() {
//   try {
//     const res = await fetch("/api/contracts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         templateId: selectedTemplate.id,
//         data: formData,
//         generatedText,
//       }),
//     });

//     if (!res.ok) {
//       throw new Error("Error al guardar");
//     }

//     alert("Contrato guardado ✅");
//   } catch (error) {
//     console.error(error);
//     alert("Error al guardar ❌");
//   }
// }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Nuevo Contrato</h1>

      <div className="bg-white p-6 rounded shadow">

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h2 className="text-xl mb-4">Selecciona plantilla</h2>

            <div className="grid grid-cols-2 gap-4">
              {templates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleSelectTemplate(t)}
                  className="border p-4 hover:bg-gray-100"
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && selectedTemplate && (
          <div>
            <h2 className="text-xl mb-4">Completa datos</h2>

            <DynamicForm
              templateId={selectedTemplate.id}
              template={selectedTemplate.content}
              variables={variables}
              onSubmit={handleFormSubmit}
            />
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
  <div>
    <h2 className="text-xl mb-4">Vista previa</h2>

    <pre className="bg-gray-100 p-4 whitespace-pre-wrap">
      {generatedText}
    </pre>

    <button
      onClick={handleSave}
      className="bg-green-500 text-white px-4 py-2 mt-4"
    >
      Guardar contrato
    </button>
  </div>
)}

        {/* STEP 4 */}
        {step === 4 && (
          <div>
            <h2>Contrato guardado (siguiente paso)</h2>
          </div>
        )}

      </div>
    </Layout>
  );
}