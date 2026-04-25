'use client';

import { useState } from 'react';
import { renderTemplate } from '@/app/lib/templateEngine';
import {CurrencyDollarIcon} from '@heroicons/react/24/outline';


type Props = {
  templateId: number;
  template: string;
  variables: string[];
  onSubmit: (data: Record<string, string>, result: string) => void;

};

export default function DynamicForm({ templateId, template, variables,onSubmit }: Props) {
   const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
  const result = renderTemplate(template, formData);
  onSubmit(formData, result);
};

   

  const result = renderTemplate(template, formData);

  return (
    <div className="relative space-y-4">
      <h2 className="text-xl font-bold">Formulario</h2>

      {variables.map((variable) => (
        <div className="mb-4" key={variable}>
          <label className="block text-sm font-medium">{variable}</label>
           <div className="relative mt-2 rounded-md">
            <div className="relative">
          <input
            type="text"
           className="peer block w-full min-w-0 rounded-md border border-border bg-input text-foreground py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            onChange={(e) => handleChange(variable, e.target.value)}
          />
  </div>
   </div>
    </div>
      ))}

      <h2 className="text-xl font-bold mt-6">Preview</h2>
      <pre className="bg-muted text-foreground p-4 rounded-md whitespace-pre-wrap break-words">{result}</pre>
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