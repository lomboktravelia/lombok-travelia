import { NextResponse } from "next/server";
import pool from "@/utils/dbConfig";
import { nanoid } from "nanoid";
export async function POST(request) {
  try {
    const {
      nama_paket,
      jenis_paket,
      deskripsi,
      daerah_wisata,
      harga,
      durasi,
      availability,
      itinerary,
      include,
      exclude,
      picture,
    } = await request.json();
    const idTour = nanoid(20);
    const query = {
      text: "INSERT INTO paket_tour (id_tour, nama_paket, jenis_paket, deskripsi, harga, durasi, is_available) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      values: [
        idTour,
        nama_paket,
        jenis_paket,
        deskripsi,
        harga,
        durasi,
        availability,
      ],
    };

    const result = await pool.query(query);
    if (!result.rowCount) {
      return NextResponse.json(
        {
          status: 403,
          message: "Failed to add data",
        },
        { status: 403 }
      );
    }

    const idPicture = nanoid(20);
    const query2 = {
      text: "INSERT INTO picture (id_tour, id_picture, image_url) VALUES ($1, $2, $3) RETURNING image_url",
      values: [idTour, idPicture, picture],
    };

    const result2 = await pool.query(query2);
    if (!result2.rowCount) {
      return NextResponse.json(
        {
          status: 403,
          message: "Failed to add picture",
        },
        { status: 403 }
      );
    }

    return NextResponse.json(
      {
        status: 200,
        data: {
          ...result.rows[0],
          picture: result2.rows[0].img_url,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: 500,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const jenis_paket = searchParams.get("jenis_paket");

    if (id) {
      const query = "SELECT * FROM paket_tour WHERE id_tour = $1";
      const { rows: paket } = await pool.query(query, [id]);
      const query2 = "SELECT * FROM picture WHERE id_tour = $1";
      const { rows: picture } = await pool.query(query2, [id]);
      return NextResponse.json(
        {
          status: 200,
          data: {
            ...paket[0],
            picture: picture,
          },
        },
        { status: 200 }
      );
    } else if (jenis_paket) {
      const query = "SELECT * FROM paket_tour WHERE jenis_paket = $1";
      const { rows: paket } = await pool.query(query, [jenis_paket]);

      const paketIds = paket.map((p) => p.id_tour);
      const pictureQuery =
        "SELECT * FROM picture WHERE id_tour = ANY($1::text[])";
      const { rows: pictures } = await pool.query(pictureQuery, [paketIds]);

      const paketWithPictures = paket.map((p) => ({
        ...p,
        picture:
          pictures.find((pic) => pic.id_tour === p.id_tour)?.image_url || null,
      }));

      return NextResponse.json(
        {
          status: 200,
          data: paketWithPictures,
        },
        { status: 200 }
      );
    } else {
      const query = "SELECT * FROM paket_tour";
      const { rows: paket } = await pool.query(query);
      return NextResponse.json(
        {
          status: 200,
          data: paket,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: 500,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id"); 

  const _query = {
    text: 'DELETE FROM picture WHERE id_tour = $1 RETURNING *',
    values: [id]
  }

  const query = {
    text: 'DELETE FROM paket_tour WHERE id_tour = $1 RETURNING *',
    values: [id]
  }
  const _result = await pool.query(_query);
  if(!_result.rowCount){
    return NextResponse.json({
      status: 403,
      message: "Failed to delete picture"
    }, {status: 403})
  }
  const result = await pool.query(query);
  if (!result.rowCount) {
    return NextResponse.json(
      {
        status: 403,
        message: "Failed to delete data",
      },
      { status: 403 }
    );
  }
  return NextResponse.json({
    status: 200,
    deletedData: result.rows[0],
  });
}

export async function PUT(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({
        status: 403,
        message: "Bad Request",
      });
    }

    const {
      nama_paket,
      jenis_paket,
      deskripsi,
      daerah_wisata,
      harga,
      durasi,
      availability,
      itinerary,
      include,
      exclude,
      picture,
    } = await request.json();
    const query = {
      text: "UPDATE paket_tour SET nama_paket = $1, jenis_paket = $2, deskripsi = $3, harga = $4, durasi = $5, is_available = $6 WHERE id_tour = $7 RETURNING *",
      values: [
        nama_paket,
        jenis_paket,
        deskripsi,
        harga,
        durasi,
        availability,
        id,
      ],
    };

    const result = await pool.query(query);
    if (!result.rowCount) {
      return NextResponse.json({
        status: 403,
        message: "Failed to update data",
      });
    }
    const query2 = {
      text: "UPDATE picture SET image_url = $1 WHERE id_tour = $2 RETURNING *",
      values: [picture, id],
    };

    const result2 = await pool.query(query2);
    if (!result2.rowCount) {
      return NextResponse.json({
        status: 403,
        message: "Failed to update picture",
      });
    }

    return NextResponse.json({
      status: 200,
      updatedData: {
        ...result.rows[0],
        picture: result2.rows.length > 0 ? result2.rows[0].image_url : null,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
