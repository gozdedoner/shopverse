"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
        );
        if (!res.ok) {
          setError(true);
          return;
        }
        const data = await res.json();
        setProduct(data);
      } catch {
        setError(true);
      }
    };
    fetchProduct();
  }, [params.id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg">
        Ürün bulunamadı ❌
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="mx-auto mb-6 rounded-md"
        />
        <h1 className="text-2xl font-bold mb-3 text-center">{product.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
          {product.description}
        </p>
        <p className="text-emerald-600 dark:text-emerald-400 text-lg font-semibold text-center mb-6">
          ${product.price}
        </p>
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition">
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}
