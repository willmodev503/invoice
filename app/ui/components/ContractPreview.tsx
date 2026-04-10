type Props = {
  text: string;
};

export default function ContractPreview({ text }: Props) {
  return (
    <div className="p-10 bg-white text-black max-w-[800px] mx-auto">
      
      {/* LOGO */}
      <img
        src="/customers/evil-rabbit.png"
        className="w-32 mb-6"
      />

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold text-center mb-8">
        CONTRATO
      </h1>

      {/* CONTENIDO */}
      <p className="whitespace-pre-wrap leading-7 mb-10">
        {text}
      </p>

      {/* FIRMA */}
      <div className="mt-16">
        <div className="border-t w-64 mb-2"></div>
        <p>Firma</p>
      </div>

      {/* FECHA */}
      <p className="text-right mt-10 text-sm">
        {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}