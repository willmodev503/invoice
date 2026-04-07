import { prisma } from "@/app/lib/prisma";
import EditTemplateForm from "./EditTemplateForm";

export default async function Page({ params }: { params: { id: string } }) {
  const template = await prisma.template.findUnique({
    where: { id: Number(params.id) },
  });

  if (!template) return <div>No encontrado</div>;

  return <EditTemplateForm template={template} />;
}