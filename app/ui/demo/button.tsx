"use client";

import { useRouter } from "next/navigation";

async function handleDemo() {
  const response = await fetch("/api/demo", {
    method: "POST",
  });

  const data = await response.json();

 document.cookie = `demoSessionId=${data.sessionId}; path=/; max-age=600; SameSite=Lax`;

  console.log("Demo session:", data.sessionId);

    window.location.href = "/dashboard";
}

export default function DemoButton() {

  return (
    <button
      type="button"
      onClick={handleDemo}
      className="bg-yellow-500 text-brown px-3 py-1 rounded"
    >
      Demo
    </button>
  );
}