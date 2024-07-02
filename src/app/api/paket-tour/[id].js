import { db } from '@/utils/dbConfig';
import formidable from 'formidable';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), 'public/uploads');
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to parse form' });
      }

      const picture = files.picture ? `/uploads/${path.basename(files.picture.filepath)}` : fields.picture;

      const { nama_paket, deskripsi, harga, durasi, is_available, jenis_paket } = fields;
      const query = 'UPDATE paket_tour SET nama_paket = ?, deskripsi = ?, harga = ?, durasi = ?, is_available = ?, jenis_paket = ?, picture = ? WHERE id_tour = ?';
      await db.query(query, [nama_paket, deskripsi, harga, durasi, is_available, jenis_paket, picture, id]);

      res.status(200).json({ message: 'Paket tour updated successfully' });
    });
  } else if (req.method === 'GET') {
    const query = 'SELECT * FROM paket_tour WHERE id_tour = ?';
    const [results] = await db.query(query, [id]);
    if (results.length > 0) {
      res.status(200).json(results[0]);
    } else {
      res.status(404).json({ message: 'Paket tour not found' });
    }
  } else if (req.method === 'DELETE') {
    const query = 'DELETE FROM paket_tour WHERE id_tour = ?';

    try {
      await db.query(query, [id]);
      res.status(200).json({ message: 'Paket tour deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete paket tour' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
