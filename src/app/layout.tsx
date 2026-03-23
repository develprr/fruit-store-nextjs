import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Header from "@/components/Header";
import Cart from "@/components/Cart";

export const metadata: Metadata = {
  title: "Fruit Store - Next.js",
  description: "A demo fruit store built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen antialiased">
        <CartProvider>
          <Header />
          <Cart />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
