import { NextResponse } from 'next/server';
import midtransClient from 'midtrans-client';

// Inisialisasi client Midtrans
const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export async function POST(request) {
  try {
    const { id_user, id_tour, total_cost } = await request.json();
    console.log('Request data:', { id_user, id_tour, total_cost });

    const transactionDetails = {
      order_id: `order-${Date.now()}`,
      gross_amount: total_cost,
    };

    const customerDetails = {
      id: id_user,
    };

    const parameter = {
      transaction_details: transactionDetails,
      customer_details: customerDetails,
    };

    console.log('Transaction parameters:', parameter);

    const transaction = await snap.createTransaction(parameter);
    console.log('Transaction created:', transaction);
    return NextResponse.json({ token: transaction.token });
  } catch (error) {
    console.error('Transaction error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
