import { NextResponse } from 'next/server';
import pool from '../../../../utils/dbConfig'; // Menggunakan path yang benar untuk dbConfig.js

// Fungsi untuk mendapatkan statistik dashboard
async function getDashboardStats() {
  try {
    // Query untuk mendapatkan total Paket Tour
    const totalPaketTourResult = await pool.query('SELECT COUNT(*) FROM "paket_tour"');
    const totalPaketTour = totalPaketTourResult.rows[0].count;

    // Query untuk mendapatkan total Destinasi
    const totalDestinasiResult = await pool.query('SELECT COUNT(*) FROM "destinasi"');
    const totalDestinasi = totalDestinasiResult.rows[0].count;

    // Query untuk mendapatkan total Pengguna
    const totalPenggunaResult = await pool.query('SELECT COUNT(*) FROM "user"');
    const totalPengguna = totalPenggunaResult.rows[0].count;

    // Query untuk mendapatkan total Saldo
    const totalSaldoResult = await pool.query('SELECT SUM(amount) AS total_saldo FROM orders');
    const totalSaldo = totalSaldoResult.rows[0].total_saldo;


    // Query untuk mendapatkan total Pesanan
    const totalPesananResult = await pool.query('SELECT COUNT(*) FROM "orders"');
    const totalPesanan = totalPesananResult.rows[0].count;

    return {
      totalPaketTour,
      totalDestinasi,
      totalPengguna,
      totalSaldo,
      totalPesanan,
    };
  } catch (error) {
    console.error('Error getting dashboard stats:', error);
    throw new Error('Error getting dashboard stats');
  }
}

export async function GET() {
  try {
    const stats = await getDashboardStats();
    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
