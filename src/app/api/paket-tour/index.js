import { db } from '@/utils/dbConfig';
import formidable from 'formidable';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), 'public/uploads');
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to parse form' });
      }

      const picture = files.picture ? `/uploads/${path.basename(files.picture.filepath)}` : '';

      const { nama_paket, deskripsi, harga, durasi, is_available, jenis_paket } = fields;
      const query = 'INSERT INTO paket_tour (nama_paket, deskripsi, harga, durasi, is_available, jenis_paket, picture) VALUES (?, ?, ?, ?, ?, ?, ?)';
      await db.query(query, [nama_paket, deskripsi, harga, durasi, is_available, jenis_paket, picture]);

      res.status(201).json({ message: 'Paket tour created successfully' });
    });
  } else if (req.method === 'GET') {
    const query = 'SELECT * FROM paket_tour';
    const [results] = await db.query(query);
    res.status(200).json(results);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
