"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: ProductProps) {
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
    </div>
  );
}
