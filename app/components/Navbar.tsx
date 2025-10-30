"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/useCartStore";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      {/* 🛍️ Logo */}
      <Link
        href="/"
        className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight"
      >
        ShopVerse
      </Link>

      {/* 🔗 Navigation Links */}
      <div className="flex items-center gap-6">
        <Link
          href="/shop"
          className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
        >
          Shop
        </Link>

        {/* ✅ Checkout artık ayrı Link */}
        <Link
          href="/checkout"
          className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
        >
          Checkout
        </Link>

        {/* 🛒 Cart Icon */}
        <Link
          href="/cart"
          className="relative flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
        >
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-emerald-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* 🌗 Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
