import pool from '@/utils/dbConfig';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id_tour, id_order, rating, deskripsi } = req.body;

    if (!id_tour || !id_order || !rating || !deskripsi) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const id_review = 'rev' + Date.now(); // Generate a unique id_review

    try {
      const client = await pool.connect();
      const query = `
        INSERT INTO review (id_review, id_tour, id_order, rating, deskripsi, _created_date)
        VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP)
        RETURNING *
      `;
      const result = await client.query(query, [id_review, id_tour, id_order, rating, deskripsi]);
      client.release();

      return res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error inserting review:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
