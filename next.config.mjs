/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // ⚠️ Tailwind için Turbopack devre dışı
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

export default nextConfig;
