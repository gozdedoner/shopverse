"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../store/useCartStore";
import { toast } from "react-hot-toast";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: ProductProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, title, price, image, quantity: 1 });
    toast.success(`${title} added to cart 🛒`, {
      style: {
        background: "#10B981",
        color: "#fff",
        fontWeight: "500",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#10B981",
      },
    });
  };

  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-900">
      <Link href={`/shop/${id}`}>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="mx-auto mb-3 rounded-md"
        />
        <h2 className="font-semibold text-gray-900 dark:text-gray-100 text-lg truncate">
          {title}
        </h2>
        <p className="text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
          ${price}
        </p>
      </Link>

      <button
        onClick={handleAddToCart}
        className="mt-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-lg transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
