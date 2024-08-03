import pool from "@/utils/dbConfig";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  try {
    const table = searchParams.get("table");
    const query = `SELECT * FROM ${table} WHERE created_by IS NULL`;
    const {rows: paket} = await pool.query(query);
    
    const paketWithPicture = await Promise.all(paket.map(async (paket) => {
      const query2 = 'SELECT * FROM picture WHERE id_tour = $1';
      const {rows: picture} = await pool.query(query2, [paket.id_tour]);
      return {
        ...paket,
        picture: picture.length > 0? picture[0].image_url : null
      }
    }))
    return NextResponse.json({
      status: 200,
      data: paketWithPicture,
  }, {status: 200});
  } catch (error) {
    console.log(error)
    return Response.json({ error: error.message });
  }
}