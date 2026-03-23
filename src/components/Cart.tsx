"use client";

import { useCart } from "./CartContext";

export default function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
    isOpen,
    setIsOpen,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />

      {/* Cart panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            &#x1F6D2; Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 mt-12">
              <span className="text-5xl block mb-4">&#x1F6D2;</span>
              <p className="text-lg">Your cart is empty</p>
              <p className="text-sm mt-1">Add some fruits to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.fruit.id}
                  className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"
                >
                  <span className="text-3xl">{item.fruit.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {item.fruit.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      ${item.fruit.price.toFixed(2)} each
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.fruit.id, item.quantity - 1)
                      }
                      className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm font-bold cursor-pointer"
                    >
                      &minus;
                    </button>
                    <span className="w-6 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.fruit.id, item.quantity + 1)
                      }
                      className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.fruit.id)}
                    className="text-red-500 hover:text-red-700 text-lg cursor-pointer"
                  >
                    &#x1F5D1;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900">
                Total
              </span>
              <span className="text-2xl font-bold text-green-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-lg transition-colors cursor-pointer">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
