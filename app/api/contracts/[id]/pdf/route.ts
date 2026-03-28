import { prisma } from '@/app/lib/prisma';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
  
  
) {
  const { id } = await params;
   console.log("ID:", id); //
  const contract = await prisma.contract.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!contract) {
    return new Response('Not found', { status: 404 });
  }

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const { width, height } = page.getSize();

  page.drawText(`Contrato #${contract.id}`, {
    x: 50,
    y: height - 50,
    size: 18,
    font,
    color: rgb(0, 0, 0),
  });

  page.drawText(contract.generatedText, {
    x: 50,
    y: height - 100,
    size: 12,
    font,
    maxWidth: width - 100,
    lineHeight: 14,
  });

  const pdfBytes = await pdfDoc.save();

return new Response(new Uint8Array(pdfBytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=contract-${contract.id}.pdf`,
    },
  });
}