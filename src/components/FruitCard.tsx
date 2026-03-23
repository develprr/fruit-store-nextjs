import type { Fruit } from "@/types";
import AddToCartButton from "./AddToCartButton";

// This is a SERVER COMPONENT - no "use client" directive needed.
// The fruit data and card rendering happen on the server.
// Only the AddToCartButton is a client component (interactive).

export default function FruitCard({ fruit }: { fruit: Fruit }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div
        className="h-40 flex items-center justify-center"
        style={{ backgroundColor: `${fruit.color}15` }}
      >
        <span className="text-7xl">{fruit.emoji}</span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-gray-900">{fruit.name}</h2>
          <span
            className="text-lg font-bold px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: fruit.color }}
          >
            ${fruit.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{fruit.description}</p>
        <AddToCartButton fruit={fruit} />
      </div>
    </div>
  );
}
