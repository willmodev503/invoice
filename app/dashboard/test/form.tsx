'use client';

import { useState } from 'react';
import { renderTemplate } from '@/app/lib/templateEngine';
import { createContract } from '@/app/lib/actions';


type Props = {
   templateId: number;
  template: string;
  variables: string[];
};

export default function DynamicForm({ templateId, template, variables }: Props) {
   const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

   const handleSubmit = async () => {
    setLoading(true);

    await createContract(templateId, template, formData);

    setLoading(false);
    alert('Contrato guardado ✅');
  };

  const result = renderTemplate(template, formData);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Formulario</h2>

      {variables.map((variable) => (
        <div key={variable}>
          <label className="block text-sm font-medium">{variable}</label>
          <input
            type="text"
            className="border p-2 w-full"
            onChange={(e) => handleChange(variable, e.target.value)}
          />
        </div>
      ))}

      <h2 className="text-xl font-bold mt-6">Preview</h2>
      <pre className="bg-gray-100 p-4">{result}</pre>
       <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded"
      >
        {loading ? 'Guardando...' : 'Generar contrato'}
      </button>
    </div>
  );
}