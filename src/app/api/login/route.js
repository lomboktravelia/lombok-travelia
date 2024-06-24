import bcrypt from "bcrypt";
import pg from "pg";
import { cookies } from "next/headers";
import { SignJWT } from "jose";

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
    sslmode: "require",
  },
});

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function POST(request) {
  const { email, password } = await request.json();

  const query = `
        SELECT * FROM public."user" 
        WHERE email = $1;
    `;
  const values = [email];
  const { rows } = await pool.query(query, values);
  const user = rows[0];

  if (!user) {
    return Response.json(
      { status: "Error", message: "Email not registered" },
      { status: 404 }
    );
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (passwordMatches) {
    const { id_user, nama, email } = user;
    const data = {id_user, nama, email};
    const token = await new SignJWT(data)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime('1m')
      .sign(key);
    const expires = new Date(Date.now() + 60 * 1000); // 60 seconds
    cookies().set(
      "session",
      token,
      { expires, httpOnly: true }
    );
    return Response.json({ status: "success", user: { id_user, nama, email } });
  }

  return Response.json(
    { status: "Error", message: "Invalid password" },
    { status: 403 }
  );
}
