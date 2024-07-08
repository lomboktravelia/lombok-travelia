import { NextResponse } from 'next/server';
import midtransClient from 'midtrans-client';

// Inisialisasi client Midtrans
const core = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { order_id, transaction_status, fraud_status } = body;

    // Lakukan tindakan berdasarkan status pembayaran
    if (transaction_status === 'capture' && fraud_status === 'accept') {
      // Pembayaran berhasil
    } else if (transaction_status === 'settlement') {
      // Pembayaran berhasil
    } else if (transaction_status === 'deny' || transaction_status === 'expire' || transaction_status === 'cancel') {
      // Pembayaran gagal
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
