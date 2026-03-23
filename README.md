# Fruit Store - Next.js

A demo fruit store built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

This is the Next.js version of the Fruit Store demo. See also the [Vite version](https://github.com/develprr/fruit-store-vite).

## Architecture

This app demonstrates the **server component / client component split** in Next.js App Router:

- **Server Components** (no `"use client"`): `page.tsx`, `FruitCard.tsx` — data loading and static rendering happen on the server
- **Client Components** (`"use client"`): `CartContext.tsx`, `Header.tsx`, `Cart.tsx`, `AddToCartButton.tsx` — interactive state management runs in the browser

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
