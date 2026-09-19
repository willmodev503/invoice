"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DemoTimer({
  expiresAt,
}: {
  expiresAt: string;
}) {
  const router = useRouter();

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const updateTimer = () => {
      const remaining =
        new Date(expiresAt).getTime() - Date.now();

      if (remaining <= 0) {
        setTimeLeft(0);

        document.cookie =
          "demoSessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

router.push("/login?demoExpired=true");
        return false;
      }

      setTimeLeft(remaining);

      return true;
    };

    updateTimer();

    const interval = setInterval(() => {
      const active = updateTimer();

      if (!active) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt, router]);

  const totalSeconds = Math.floor(timeLeft / 1000);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="mb-4 rounded-lg bg-yellow-100 px-4 py-3 text-sm text-yellow-900">
      Demo disponible por{" "}
      <strong>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </strong>
    </div>
  );
}