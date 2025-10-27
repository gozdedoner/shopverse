import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "ShopVerse",
  description: "Shop smart. Shop beautifully.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
