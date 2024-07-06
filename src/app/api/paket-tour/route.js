import { NextResponse } from 'next/server';
import pool from '@/utils/dbConfig';
// import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
export async function POST(request) {
  try {
    const {nama_paket, jenis_paket, deskripsi, daerah_wisata, harga, durasi, availability, itinerary, include, exclude, picture} = await request.json()
    const idTour = nanoid(20);
    const query = {
      text: 'INSERT INTO paket_tour (id_tour, nama_paket, jenis_paket, deskripsi, harga, durasi, is_available) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      values: [idTour, nama_paket, jenis_paket, deskripsi, harga, durasi, availability]
    }

    const result = await pool.query(query);
    if(!result.rowCount){
      return NextResponse.json({
        status: 403,
        message: "Failed to add data"
      }, {status: 403})
    }
    
    const idPicture = nanoid(20);
    const query2 = {
      text: 'INSERT INTO picture (id_tour, id_picture, id_destinasi, image_url) VALUES ($1, $2, $3, $4) RETURNING image_url',
      values: [idTour, idPicture, "", picture]
    }

    const result2 = await pool.query(query2);
    if(!result2.rowCount){
      return NextResponse.json({
        status: 403,
        message: "Failed to add picture"
      }, {status: 403})
    }

    return NextResponse.json({
      status: 200,
      data: {
        ...result.rows[0],
        picture: result2.rows[0].img_url
      }
    }, {status: 200});
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error"
    }, {status: 500})
  } 
}

export async function GET(){
  try {
    const query = 'SELECT * FROM paket_tour';
    const {rows: paket} = await pool.query(query);
    return NextResponse.json({
      status: 200,
      data: paket,
  }, {status: 200});
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error"
    }, {status: 500})
  }
  
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id"); 

  const query = {
    text: 'DELETE FROM paket_tour WHERE id_tour = $1 RETURNING *',
    values: [id]
  }
  const result = await pool.query(query);
  if(!result.rowCount){
    return NextResponse.json({
      status: 403,
      message: "Failed to delete data"
    }, {status: 403})
  }
  return NextResponse.json({
    status: 200,
    deletedData: result.rows[0]
  })
}

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const {formData} = await req.json();
//     return NextResponse.json({
//       formData,
//     })
//   } else if (req.method === 'GET') {
//     const query = 'SELECT * FROM paket_tour';
//     const [results] = await db.query(query);
//     res.status(200).json(results);
//   } else if (req.method === 'DELETE') {
//     res.status(405).json({ message: 'Method not allowed' });
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
