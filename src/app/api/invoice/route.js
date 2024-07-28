import pool from '@/utils/dbConfig';
import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  const { id_order } = await req.json();
  console.log('Request received:', req);

  try {
    const { rows: orderRows } = await pool.query('SELECT * FROM orders WHERE id_orders = $1', [id_order]);

    if (orderRows.length === 0) {
      return new Response(JSON.stringify({ error: 'Order not found' }), { status: 404 });
    }

    const order = orderRows[0];

    const { rows: paketRows } = await pool.query('SELECT * FROM paket_tour WHERE id_tour = $1', [order.id_tour]);
    const { rows: userRows } = await pool.query('SELECT * FROM "user" WHERE id_user = $1', [order.id_user]);
    const { rows: destinasiRows } = await pool.query('SELECT * FROM destinasi WHERE id_destinasi = $1', [order.id_destinasi]);
    console.log('Order found:', orderRows[0]);

    if (paketRows.length === 0 || userRows.length === 0 || destinasiRows.length === 0) {
      return new Response(JSON.stringify({ error: 'Associated data not found' }), { status: 404 });
    }

    const paket = paketRows[0];
    const user = userRows[0];
    const destinasi = destinasiRows[0];

    const id_paket_invoice = uuidv4();
    const id_destinasi_invoice = uuidv4();
    const id_user_invoice = uuidv4();
    const id_invoice = uuidv4();

    await pool.query(
      `INSERT INTO paket_invoice (id_paket_invoice, nama_paket, harga, durasi, jenis_paket)
       VALUES ($1, $2, $3, $4, $5)`,
      [id_paket_invoice, paket.nama_paket, paket.harga, paket.durasi, paket.jenis_paket]
    );

    await pool.query(
      `INSERT INTO destinasi_invoice (id_destinasi_invoice, nama_destinasi)
       VALUES ($1, $2)`,
      [id_destinasi_invoice, destinasi.nama_destinasi]
    );

    await pool.query(
      `INSERT INTO user_invoice (id_user_invoice, nama, email)
       VALUES ($1, $2, $3)`,
      [id_user_invoice, user.nama, user.email]
    );

    const amount = order.total_price; // Ganti dengan field yang sesuai dari tabel orders

    await pool.query(
      `INSERT INTO invoice (id_invoice, _created_date, amount, id_destinasi_invoice, id_paket_invoice, id_user_invoice)
       VALUES ($1, NOW(), $2, $3, $4, $5)`,
      [id_invoice, amount, id_destinasi_invoice, id_paket_invoice, id_user_invoice]
    );

    const invoiceHTML = `
      <h1>Invoice</h1>
      <p>Invoice ID: ${id_invoice}</p>
      <p>Nama Paket: ${paket.nama_paket}</p>
      <p>Harga: ${paket.harga}</p>
      <p>Durasi: ${paket.durasi} hari</p>
      <p>Jenis Paket: ${paket.jenis_paket}</p>
      <p>Nama Destinasi: ${destinasi.nama_destinasi}</p>
      <p>Nama User: ${user.nama}</p>
      <p>Email User: ${user.email}</p>
      <p>Total Harga: ${amount}</p>
      <p>Tanggal Pembelian: ${new Date().toLocaleDateString()}</p>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Invoice Pembelian Paket Tour',
      html: invoiceHTML,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Invoice sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending invoice:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
