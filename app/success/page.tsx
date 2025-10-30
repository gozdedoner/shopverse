"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function SuccessPage() {
  // 🎊 Konfeti animasyonu
  useEffect(() => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 text-center p-6">
      <CheckCircle className="w-20 h-20 text-emerald-600 dark:text-emerald-400 mb-6 animate-pulse" />
      <h1 className="text-4xl font-extrabold mb-4">
        Order Placed Successfully! 🎉
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg mb-10">
        Thank you for shopping with{" "}
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
          ShopVerse
        </span>
        . Your order has been received and is now being processed.
      </p>

      <div className="flex gap-4">
        <Link
          href="/shop"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition"
        >
          Continue Shopping 🛍️
        </Link>
        <Link
          href="/"
          className="border border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-gray-900 px-6 py-3 rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
