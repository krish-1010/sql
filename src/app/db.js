import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432, // Default PostgreSQL port
});

// export default pool;
export const query = (text, params) => pool.query(text, params);

// CRUD
// 1 - Create (create)
// 2 - Read (select)
// 3 - Update (update)
// 4 - Delete (drop, truncate)
