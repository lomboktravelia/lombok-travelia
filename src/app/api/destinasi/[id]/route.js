import { NextResponse } from 'next/server';
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
}
