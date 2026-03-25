import { pool } from "./db";
import type { Fruit } from "@/types";

function parseRow(row: Record<string, unknown>): Fruit {
  return {
    ...(row as Fruit),
    price: Number(row.price),
  };
}

export async function getFruits(): Promise<Fruit[]> {
  const { rows } = await pool.query(
    "SELECT id, name, emoji, price, color, description FROM fruits ORDER BY name"
  );
  return rows.map(parseRow);
}

export async function getFruitById(id: string): Promise<Fruit | null> {
  const { rows } = await pool.query(
    "SELECT id, name, emoji, price, color, description FROM fruits WHERE id = $1",
    [id]
  );
  return rows[0] ? parseRow(rows[0]) : null;
}
