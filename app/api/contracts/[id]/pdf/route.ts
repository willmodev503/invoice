import { prisma } from '@/app/lib/prisma';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const contract = await prisma.contract.findUnique({
    where: { id: Number(id) },
  });

  if (!contract) {
    return new Response('Not found', { status: 404 });
  }

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const { width, height } = page.getSize();

  let y = height - 50;

  // 🧾 TÍTULO
  page.drawText('CONTRATO', {
    x: width / 2 - 60,
    y,
    size: 18,
    font: boldFont,
  });

  y -= 40;

  // 📄 CONTENIDO (con saltos de línea)
  const text = contract.generatedText || 'Sin contenido';

  const lines = wrapText(text, 80);

  lines.forEach((line) => {
    page.drawText(line, {
      x: 50,
      y,
      size: 12,
      font,
      maxWidth: width - 100,
    });
    y -= 18;
  });

  // ✍️ FIRMA
  y -= 40;

  page.drawText('_________________________', {
    x: 50,
    y,
    size: 12,
    font,
  });

  y -= 15;

  page.drawText('Firma', {
    x: 50,
    y,
    size: 10,
    font,
  });

  // 📅 FECHA
  const date = new Date(contract.createdAt).toLocaleDateString();

  page.drawText(`Fecha: ${date}`, {
    x: width - 150,
    y: 50,
    size: 10,
    font,
  });

  const pdfBytes = await pdfDoc.save();

  return new Response(new Uint8Array(pdfBytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=contract-${contract.id}.pdf`,
    },
  });
}

// 🔥 helper para dividir texto
function wrapText(text: string, maxLength: number) {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  words.forEach((word) => {
    if ((currentLine + word).length > maxLength) {
      lines.push(currentLine);
      currentLine = word + ' ';
    } else {
      currentLine += word + ' ';
    }
  });

  if (currentLine) lines.push(currentLine);

  return lines;
}