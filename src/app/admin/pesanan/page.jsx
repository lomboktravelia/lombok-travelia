/*'use client';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../layout';

const PesananPage = () => {
  const [orders, setOrders] = useState([]);

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
        <h1 className="text-2xl font-bold mb-4">Riwayat Pesanan</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
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

export default PesananPage; */
'use client';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../layout';

const PesananPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from API
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      setOrders(data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  const handleDeleteOrder = async (id) => {
    try {
      await fetch(`/api/orders/${id}`, {
        method: 'DELETE',
      });
      fetchOrders(); // Refresh orders after deletion
    } catch (error) {
      console.error('Failed to delete order', error);
    }
  };

  return (
    <AdminLayout showSidebar={true}>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Riwayat Pesanan</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Tanggal & Waktu</th>
                <th className="py-2 px-4 border-b">ID Pesanan</th>
                <th className="py-2 px-4 border-b">Email Pelanggan</th>
                <th className="py-2 px-4 border-b">Jumlah</th>
                <th className="py-2 px-4 border-b">Tipe Pembayaran</th>
                <th className="py-2 px-4 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{formatDate(order.tanggal_pesan)}</td>
                  <td className="py-2 px-4 border-b">{order.id_orders}</td>
                  <td className="py-2 px-4 border-b">{order.email}</td>
                  <td className="py-2 px-4 border-b">Rp. {order.amount.toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{order.payment_type}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDeleteOrder(order.id_orders)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PesananPage;
