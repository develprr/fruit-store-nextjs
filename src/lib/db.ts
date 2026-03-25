import { Pool } from "pg";

// Single pool instance reused across requests (Next.js hot-reload safe)
const globalForDb = globalThis as unknown as { pool: Pool | undefined };

export const pool =
  globalForDb.pool ??
  new Pool({
    connectionString:
      process.env.DATABASE_URL ?? "postgresql://localhost:5432/fruitstore",
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.pool = pool;
}
