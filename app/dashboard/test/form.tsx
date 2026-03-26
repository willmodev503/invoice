'use client';

import { useState } from 'react';
import { renderTemplate } from '@/app/lib/templateEngine';

type Props = {
  template: string;
  variables: string[];
};

export default function DynamicForm({ template, variables }: Props) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
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
    </div>
  );
}