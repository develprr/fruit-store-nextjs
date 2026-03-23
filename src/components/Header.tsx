"use client";

import { useCart } from "./CartContext";

export default function Header() {
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">&#x1F34F;</span>
          <h1 className="text-2xl font-bold text-gray-900">Fruit Store</h1>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            Next.js
          </span>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="relative bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium cursor-pointer"
        >
          &#x1F6D2; Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
