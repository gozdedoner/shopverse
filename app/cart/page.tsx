"use client";

import { useCartStore } from "../store/useCartStore";
import Image from "next/image";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCartStore();

  // 💰 Toplam fiyat hesaplama
  const totalPrice = items
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-8 text-emerald-600 dark:text-emerald-400">
        Your Cart 🛍️
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          {/* Ürünler */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-900"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="mx-auto mb-3"
                />
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                  ${item.price}
                </p>
                <p className="text-sm text-gray-400">x{item.quantity}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Toplam fiyat ve temizleme butonu */}
          <div className="text-center mt-10">
            <p className="text-2xl font-semibold mb-4">
              Total:{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                ${totalPrice}
              </span>
            </p>
            <button
              onClick={clearCart}
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
