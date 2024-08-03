import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import pool from "@/utils/dbConfig";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function GET(request) {
  try {
    const token = cookies().get("session")?.value;
    const { payload: session } = await jwtVerify(token, key, { alg: "HS256" });
    const query = "SELECT * FROM orders WHERE id_user = $1";
    const client = await pool.connect();
    const values = [session.id_user];
    const { rows } = await client.query(query, values);
    return Response.json(rows);
  } catch (err) {
    return Response.json(null);
  }
}
