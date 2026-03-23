"use client";

import type { Fruit } from "@/types";
import { useCart } from "./CartContext";

export default function AddToCartButton({ fruit }: { fruit: Fruit }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(fruit)}
      style={{ backgroundColor: fruit.color }}
      className="w-full py-2 px-4 rounded-lg text-white font-medium hover:opacity-90 transition-opacity cursor-pointer"
    >
      Add to Cart
    </button>
  );
}
