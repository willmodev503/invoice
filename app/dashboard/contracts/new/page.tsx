"use client";

import { useState } from "react";
import ContractForm from "@/app/ui/components/forms/ContractForm";
import CompraventaTemplate from "@/app/ui/components/templates/CompraventaTemplate";
import { compraventaTemplate } from "@/app/data/templates";
import { renderTemplate } from "@/app/lib/templateEngine";
import Layout from "@/app/ui/components/Layout";

export default function NewContract() {
  const [generatedText, setGeneratedText] = useState("");
  const [step, setStep] = useState(1);

  function handleGenerate(data: any) {
    const result = renderTemplate(compraventaTemplate, data);
    setGeneratedText(result);
  }

  return (
  
  <Layout>
      <h1 className="text-2xl font-bold mb-4">Nuevo Contrato</h1>

      <div className="bg-white p-6 rounded shadow">

        {step === 1 && (
          <div> <h2>Selecciona plantilla</h2>             
          <div className="grid grid-cols-2 gap-6">
      
     
           
             {/* FORMULARIO */}
      <div>
        <h2 className="text-xl font-bold mb-4">Datos</h2>
        <ContractForm onSubmit={handleGenerate} />
      </div>

  
            <button onClick={() => setStep(2)}>Siguiente</button>
          </div>
          </div>    
        )}

        {step === 2 && (
          <div>
            <h2>Selecciona cliente</h2>
            <button onClick={() => setStep(3)}>Siguiente</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Completa datos</h2>
            <input placeholder="Nombre" className="border p-2" />
            <button onClick={() => setStep(4)}>Generar</button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2>Preview</h2>
            <p>Contrato generado...</p>

                {/* PREVIEW */}
      <div>
        <h2 className="text-xl font-bold mb-4">Vista previa</h2>
        <CompraventaTemplate text={generatedText} />
      </div>
          </div>
        )}

      </div>
    </Layout>
    
  );
}