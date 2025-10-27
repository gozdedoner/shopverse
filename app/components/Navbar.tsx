"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("✅ Navbar rendered, Tailwind test active");
  }, []);

  if (!mounted) return null;

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full flex justify-between items-center px-10 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <Link
        href="/"
        className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tight"
      >
        ShopVerse
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="/shop"
          className="text-lg font-medium hover:text-emerald-600 transition-colors"
        >
          Shop
        </Link>
        <ShoppingCart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
}
