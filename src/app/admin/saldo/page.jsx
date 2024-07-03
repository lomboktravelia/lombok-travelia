'use client';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../layout';

const SaldoPage = () => {
  const [orders, setOrders] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(10000000);
  const [withdrawableBalance, setWithdrawableBalance] = useState(10000000);

  useEffect(() => {
    // Simulate data fetching
    const fetchedOrders = [
      { id: 'GP-SHSBBD1', email: 'jhon@gmail.com', amount: 1000000, paymentType: 'QRIS', time: 'Hari ini, 13:53' },
      { id: 'GP-SHSBBD1', email: 'mcgin@yahoo.com', amount: 1000000, paymentType: 'Gopay', time: 'Hari ini, 13:54' },
      { id: 'GP-SHSBBD1', email: 'user@unram.ac.id', amount: 500000, paymentType: 'Bank BRI', time: 'Hari ini, 13:55' },
      { id: 'GP-SHSBBD1', email: 'friman@gmail.com', amount: 1000000, paymentType: 'Bank BNI', time: 'Hari ini, 13:56' },
      { id: 'GP-SHSBBD1', email: 'example@gmail.com', amount: 1000000, paymentType: 'Bank Mandiri', time: 'Hari ini, 13:57' },
    ];
    setOrders(fetchedOrders);
  }, []);

  return (
    <AdminLayout showSidebar={true}>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Saldo</h1>
        <div className="flex justify-between mb-8">
          <div className="p-4 border rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Saldo Tersedia</h2>
            <p className="text-xl font-bold">Rp {availableBalance.toLocaleString()}</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Saldo dapat ditarik</h2>
            <p className="text-xl font-bold">Rp {withdrawableBalance.toLocaleString()}</p>
            <p className="text-sm">Min. Penarikan dana 10.000</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Tarik dana</button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-4">Riwayat Penarikan</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Tanggal & Waktu</th>
                <th className="py-2 px-4 border-b">ID Pesanan</th>
                <th className="py-2 px-4 border-b">Email Pelanggan</th>
                <th className="py-2 px-4 border-b">Jumlah</th>
                <th className="py-2 px-4 border-b">Tipe Pembayaran</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{order.time}</td>
                  <td className="py-2 px-4 border-b">{order.id}</td>
                  <td className="py-2 px-4 border-b">{order.email}</td>
                  <td className="py-2 px-4 border-b">Rp. {order.amount.toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{order.paymentType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SaldoPage;
