import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default async function HomePage() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4");
  const products = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* 🛍️ Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <ShoppingBag className="w-14 h-14 text-emerald-600 dark:text-emerald-400 mb-6" />
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            ShopVerse
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed">
          Discover smart shopping made simple. Explore trending products, clean
          design, and a smooth buying experience — all in one place.
        </p>
        <Link
          href="/shop"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Start Shopping <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* 🌟 Featured Products */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-emerald-600 dark:text-emerald-400">
          Featured Products
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={180}
                height={180}
                className="object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-emerald-600 dark:text-emerald-400 font-bold mt-2">
                ${product.price}
              </p>
              <Link
                href={`/shop/${product.id}`}
                className="mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
