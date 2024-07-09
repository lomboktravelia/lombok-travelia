/* import { NextResponse } from 'next/server';
import { db } from '@/utils/dbConfig';


export async function PATCH(request, { params }) {
  const { id } = params;
  const { nama_destinasi, deskripsi, harga } = await request.json();

  const query = `
    UPDATE destinasi 
    SET nama_destinasi = $1, deskripsi = $2, harga = $3 
    WHERE id_destinasi = $4
  `;
  const values = [nama_destinasi, deskripsi, harga, id];

  try {
    const result = await db.query(query, values);
    return NextResponse.json({ message: 'Destination updated successfully' });
  } catch (error) {
    console.error('Error updating destination:', error);
    return NextResponse.json({ error: 'Failed to update destination' }, { status: 500 });
  }
} */
import { NextResponse } from 'next/server';
import pool from '@/utils/dbConfig';
import { nanoid } from 'nanoid';

export async function POST(request) {
  try {
    const { nama_destinasi, jenis_destinasi, deskripsi, harga, picture } = await request.json();
    const idDestinasi = nanoid(20);

    const query = {
      text: 'INSERT INTO destinasi (id_destinasi, nama_destinasi, jenis_destinasi, deskripsi, harga) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      values: [idDestinasi, nama_destinasi, jenis_destinasi, deskripsi, harga]
    };

    const result = await pool.query(query);
    if (!result.rowCount) {
      return NextResponse.json({
        status: 403,
        message: "Failed to add data"
      }, { status: 403 });
    }

    const idPicture = nanoid(20);
    const query2 = {
      text: 'INSERT INTO picture (id_tour, id_picture, id_destinasi, image_url) VALUES ($1, $2, $3, $4) RETURNING image_url',
      values: ["", idPicture, idDestinasi, picture]
    };

    const result2 = await pool.query(query2);
    if (!result2.rowCount) {
      return NextResponse.json({
        status: 403,
        message: "Failed to add picture"
      }, { status: 403 });
    }

    return NextResponse.json({
      status: 200,
      data: {
        ...result.rows[0],
        picture: result2.rows[0].img_url
      }
    }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error"
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const query = 'SELECT * FROM destinasi';
    const { rows: destinasi } = await pool.query(query);
    return NextResponse.json({
      status: 200,
      data: destinasi,
    }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error"
    }, { status: 500 });
  }
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const query = {
    text: 'DELETE FROM destinasi WHERE id_destinasi = $1 RETURNING *',
    values: [id]
  };

  const result = await pool.query(query);
  if (!result.rowCount) {
    return NextResponse.json({
      status: 403,
      message: "Failed to delete data"
    }, { status: 403 });
  }

  return NextResponse.json({
    status: 200,
    deletedData: result.rows[0]
  });
}
