"use client";


async function handleDemo() {
  const response = await fetch("/api/demo", {
    method: "POST",
  });

  const data = await response.json();

  console.log("Demo session:", data.sessionId);
}

export default function DemoButton() {

  return (
    <button
      onClick={handleDemo}
      className="bg-yellow-500 text-brown px-3 py-1 rounded"
    >
      Demo
    </button>
  );
}