import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ?? "postgresql://localhost:5432/fruitstore",
});

const fruits = [
  {
    id: "apple",
    name: "Apple",
    emoji: "\ud83c\udf4e",
    price: 1.49,
    color: "#dc2626",
    description: "Crisp and sweet, perfect for snacking",
  },
  {
    id: "banana",
    name: "Banana",
    emoji: "\ud83c\udf4c",
    price: 0.79,
    color: "#eab308",
    description: "Creamy and rich in potassium",
  },
  {
    id: "orange",
    name: "Orange",
    emoji: "\ud83c\udf4a",
    price: 1.29,
    color: "#ea580c",
    description: "Juicy citrus burst of vitamin C",
  },
  {
    id: "grapes",
    name: "Grapes",
    emoji: "\ud83c\udf47",
    price: 2.99,
    color: "#7c3aed",
    description: "Sweet clusters, great for wine or snacking",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    emoji: "\ud83c\udf53",
    price: 3.49,
    color: "#e11d48",
    description: "Ruby red berries bursting with flavor",
  },
  {
    id: "watermelon",
    name: "Watermelon",
    emoji: "\ud83c\udf49",
    price: 4.99,
    color: "#16a34a",
    description: "Refreshing summer favorite",
  },
  {
    id: "pineapple",
    name: "Pineapple",
    emoji: "\ud83c\udf4d",
    price: 2.49,
    color: "#ca8a04",
    description: "Tropical sweetness with a tangy kick",
  },
  {
    id: "mango",
    name: "Mango",
    emoji: "\ud83e\udd6d",
    price: 1.99,
    color: "#f97316",
    description: "The king of fruits, silky and aromatic",
  },
];

async function seed() {
  console.log("Creating fruits table...");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS fruits (
      id          TEXT PRIMARY KEY,
      name        TEXT NOT NULL,
      emoji       TEXT NOT NULL,
      price       NUMERIC(10,2) NOT NULL,
      color       TEXT NOT NULL,
      description TEXT NOT NULL
    )
  `);

  console.log("Seeding fruits...");

  for (const f of fruits) {
    await pool.query(
      `INSERT INTO fruits (id, name, emoji, price, color, description)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (id) DO UPDATE SET
         name = EXCLUDED.name,
         emoji = EXCLUDED.emoji,
         price = EXCLUDED.price,
         color = EXCLUDED.color,
         description = EXCLUDED.description`,
      [f.id, f.name, f.emoji, f.price, f.color, f.description]
    );
  }

  console.log(`Seeded ${fruits.length} fruits.`);
  await pool.end();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
