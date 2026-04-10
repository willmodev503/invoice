import { prisma } from "@/app/lib/prisma";
import EditTemplateForm from "./EditTemplateForm";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const template = await prisma.template.findUnique({
    where: { id: Number(id) },
  });

  if (!template) return <div>No encontrado</div>;

  return <EditTemplateForm template={template} />;
}