import { prisma } from '@/app/lib/prisma';
import { extractVariables } from '@/app/lib/templateEngine';
import DynamicForm from './form';


export default async function Page() {
  const template = await prisma.template.findFirst();

  if (!template) return <div>No template</div>;

  const variables = extractVariables(template.content);

  return (
    <div>
      <h1>Generador de contrato</h1>

      <DynamicForm
        template={template.content}
        variables={variables}
      />
    </div>
  );
}