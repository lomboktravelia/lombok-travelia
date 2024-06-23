import bcrypt from "bcrypt";
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
    sslmode: "require",
  },
});

export async function POST(request) {
  const { name, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `
      INSERT INTO public."user" (nama, email, password)
      VALUES ($1, $2, $3)
      RETURNING id_user, nama, email
    `;

  const values = [name, email, hashedPassword];

  const { rows } = await pool.query(query, values);
  const user = rows[0];

  return Response.json(
    { status: "success", message: "User created successfully", user },
    { status: 201 }
  );
}
