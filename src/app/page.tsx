import { fruits } from "@/data/fruits";
import FruitCard from "@/components/FruitCard";

// This is a SERVER COMPONENT by default in Next.js App Router.
// The fruit data is loaded and the grid is rendered on the server.
// No JavaScript is shipped to the client for this page component.

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Fresh Fruits, Delivered
        </h2>
        <p className="text-gray-600 text-lg">
          Pick your favorites and add them to your cart
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {fruits.map((fruit) => (
          <FruitCard key={fruit.id} fruit={fruit} />
        ))}
      </div>

      <footer className="text-center mt-16 pb-8 text-gray-400 text-sm">
        Built with Next.js + TypeScript + Tailwind CSS
      </footer>
    </main>
  );
}
