import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
    sslmode: "require",
  },
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const table = searchParams.get("table");
  const { rows } = await pool.query(`SELECT * FROM "${table}"`);
  return Response.json(rows);
}
