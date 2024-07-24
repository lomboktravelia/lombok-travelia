// import React from 'react';
// import AdminLayout from './layout';
// import Link from 'next/link';
// import { FaTachometerAlt, FaSuitcase, FaMapMarkedAlt, FaImages, FaClipboardList, FaWallet, FaUsers } from 'react-icons/fa';

// const AdminPage = () => {
//   return (
//     <AdminLayout showSidebar={true}>
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <Link href="/admin/dashboard" passHref>
//           <div className="flex items-center p-4 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600">
//             <FaTachometerAlt className="mr-2" /> Dashboard
//           </div>
//         </Link>
//         <Link href="/admin/paket-tour" passHref>
//           <div className="flex items-center p-4 bg-green-500 text-white rounded shadow-md hover:bg-green-600">
//             <FaSuitcase className="mr-2" /> Paket Tour
//           </div>
//         </Link>
//         <Link href="/admin/destinasi" passHref>
//           <div className="flex items-center p-4 bg-yellow-500 text-white rounded shadow-md hover:bg-yellow-600">
//             <FaMapMarkedAlt className="mr-2" /> Destinasi
//           </div>
//         </Link>
//         <Link href="/admin/gallery" passHref>
//           <div className="flex items-center p-4 bg-purple-500 text-white rounded shadow-md hover:bg-purple-600">
//             <FaImages className="mr-2" /> Gallery
//           </div>
//         </Link>
//         <Link href="/admin/pesanan" passHref>
//           <div className="flex items-center p-4 bg-red-500 text-white rounded shadow-md hover:bg-red-600">
//             <FaClipboardList className="mr-2" /> Pesanan
//           </div>
//         </Link>
//         <Link href="/admin/saldo" passHref>
//           <div className="flex items-center p-4 bg-indigo-500 text-white rounded shadow-md hover:bg-indigo-600">
//             <FaWallet className="mr-2" /> Saldo
//           </div>
//         </Link>
//         <Link href="/admin/pengguna" passHref>
//           <div className="flex items-center p-4 bg-pink-500 text-white rounded shadow-md hover:bg-pink-600">
//             <FaUsers className="mr-2" /> Pengguna
//           </div>
//         </Link>
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminPage;
"use client";
import React, { useEffect, useState } from 'react';
import AdminLayout from './layout';
import Link from 'next/link';
import { FaTachometerAlt, FaSuitcase, FaMapMarkedAlt, FaImages, FaClipboardList, FaWallet, FaUsers } from 'react-icons/fa';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

//Register scales dan elements mungkin ini
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const AdminPage = () => {
  const [stats, setStats] = useState({ popularPackage: {}, transactionsByMonth: {} });

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setStats({
        popularPackage: data.popularPackage,
        transactionsByMonth: data.transactionsByMonth
      });
    };

    fetchStats();
  }, []);

  const popularPackageData = {
    labels: [stats.popularPackage?.nama_paket || 'No Data'],
    datasets: [
      {
        label: 'Orders',
        data: [stats.popularPackage?.order_count || 0],
        backgroundColor: ['rgba(75, 192, 192, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const transactionsByMonthData = {
    labels: [stats.transactionsByMonth?.month || ''],
    datasets: [
      {
        label: 'Transactions',
        data: [stats.transactionsByMonth?.transaction_count || 0],
        backgroundColor: ['rgba(153, 102, 255, 0.6)'],
        borderColor: ['rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const { label, raw } = tooltipItem;
            return `${label}: ${raw}`;
          }
        }
      }
    },
    maintainAspectRatio: false, 
  };

  return (
    <AdminLayout showSidebar={true}>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Link href="/admin/dashboard" passHref>
          <div className="flex items-center p-4 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </div>
        </Link>
        <Link href="/admin/paket-tour" passHref>
          <div className="flex items-center p-4 bg-green-500 text-white rounded shadow-md hover:bg-green-600">
            <FaSuitcase className="mr-2" /> Paket Tour
          </div>
        </Link>
        <Link href="/admin/destinasi" passHref>
          <div className="flex items-center p-4 bg-yellow-500 text-white rounded shadow-md hover:bg-yellow-600">
            <FaMapMarkedAlt className="mr-2" /> Destinasi
          </div>
        </Link>
        <Link href="/admin/gallery" passHref>
          <div className="flex items-center p-4 bg-purple-500 text-white rounded shadow-md hover:bg-purple-600">
            <FaImages className="mr-2" /> Gallery
          </div>
        </Link>
        <Link href="/admin/pesanan" passHref>
          <div className="flex items-center p-4 bg-red-500 text-white rounded shadow-md hover:bg-red-600">
            <FaClipboardList className="mr-2" /> Pesanan
          </div>
        </Link>
        <Link href="/admin/saldo" passHref>
          <div className="flex items-center p-4 bg-indigo-500 text-white rounded shadow-md hover:bg-indigo-600">
            <FaWallet className="mr-2" /> Saldo
          </div>
        </Link>
        <Link href="/admin/pengguna" passHref>
          <div className="flex items-center p-4 bg-pink-500 text-white rounded shadow-md hover:bg-pink-600">
            <FaUsers className="mr-2" /> Pengguna
          </div>
        </Link>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 text-blue-700 rounded shadow-md">
            <h3 className="text-lg font-semibold">Paket Tour Yang Paling Sering Di Order</h3>
            <Bar data={popularPackageData} />
          </div>
          <div className="p-4 bg-green-100 text-green-700 rounded shadow-md">
            <h3 className="text-lg font-semibold">Bulan dengan Transaksi Terbanyak</h3>
            <div style={{ height: '200px' }}>
              <Pie data={transactionsByMonthData} options={pieOptions} />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPage;
