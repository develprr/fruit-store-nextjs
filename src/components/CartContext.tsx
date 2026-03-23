"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Fruit, CartItem } from "@/types";

interface CartContextType {
  items: CartItem[];
  addToCart: (fruit: Fruit) => void;
  removeFromCart: (fruitId: string) => void;
  updateQuantity: (fruitId: string, quantity: number) => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = useCallback((fruit: Fruit) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.fruit.id === fruit.id);
      if (existing) {
        return prev.map((item) =>
          item.fruit.id === fruit.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { fruit, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((fruitId: string) => {
    setItems((prev) => prev.filter((item) => item.fruit.id !== fruitId));
  }, []);

  const updateQuantity = useCallback((fruitId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.fruit.id !== fruitId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.fruit.id === fruitId ? { ...item, quantity } : item
      )
    );
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.fruit.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
