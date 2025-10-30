"use client";

import { useCartStore } from "../store/useCartStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-hot-toast";

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();
  const router = useRouter();

  const totalPrice = items
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("Your cart is empty 🛒");
      return;
    }

    toast.success("Order placed successfully! 🎉");
    clearCart();
    router.push("/success");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-emerald-600 dark:text-emerald-400 mb-10">
        Checkout 💳
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 🛍️ Order Summary */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-emerald-600 dark:text-emerald-400 text-sm">
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700 mt-2">
                <span className="font-semibold text-lg">Total</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xl">
                  ${totalPrice}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 📦 Shipping Info */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <textarea
              placeholder="Shipping Address"
              required
              rows={3}
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
