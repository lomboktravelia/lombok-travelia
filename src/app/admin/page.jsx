import React from 'react';
import AdminLayout from './layout';
import Link from 'next/link';

const AdminPage = () => {
  return (
    <AdminLayout showSidebar={true}>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/admin/dashboard" passHref>
          <div className="block p-4 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600">
            Dashboard
          </div>
        </Link>
        <Link href="/admin/paket-tour" passHref>
          <div className="block p-4 bg-green-500 text-white rounded shadow-md hover:bg-green-600">
            Paket Tour
          </div>
        </Link>
        <Link href="/admin/destinasi" passHref>
          <div className="block p-4 bg-yellow-500 text-white rounded shadow-md hover:bg-yellow-600">
            Destinasi
          </div>
        </Link>
        <Link href="/admin/gallery" passHref>
          <div className="block p-4 bg-purple-500 text-white rounded shadow-md hover:bg-purple-600">
            Gallery
          </div>
        </Link>
        <Link href="/admin/pesanan" passHref>
          <div className="block p-4 bg-red-500 text-white rounded shadow-md hover:bg-red-600">
            Pesanan
          </div>
        </Link>
        <Link href="/admin/saldo" passHref>
          <div className="block p-4 bg-indigo-500 text-white rounded shadow-md hover:bg-indigo-600">
            Saldo
          </div>
        </Link>
        <Link href="/admin/pengguna" passHref>
          <div className="block p-4 bg-pink-500 text-white rounded shadow-md hover:bg-pink-600">
            Pengguna
          </div>
        </Link>
      </div>
    </AdminLayout>
  );
};

export default AdminPage;
