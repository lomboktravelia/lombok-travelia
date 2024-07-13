import pool from '@/utils/dbConfig';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await pool.connect();
      const result = await client.query(`
        SELECT o.id_orders, o.tanggal_pesan, o.status, o.amount, o.payment_type, u.email
        FROM orders o
        JOIN users u ON o.id_user = u.id_user
      `);
      client.release();
      res.status(200).json({ orders: result.rows });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    try {
      const client = await pool.connect();
      const deleteQuery = `
        DELETE FROM orders
        WHERE id_orders = $1
      `;
      await client.query(deleteQuery, [id]);
      client.release();
      res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
      console.error('Error deleting order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
