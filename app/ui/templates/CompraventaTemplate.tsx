type Props = {
  text: string;
};

export default function CompraventaTemplate({ text }: Props) {
  return (
    <div className="bg-white p-6 shadow whitespace-pre-line">
      {text}
    </div>
  );
}