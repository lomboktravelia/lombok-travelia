"use client";

import React, { useEffect, useState } from 'react';
import AdminLayout from '../layout';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import DashboardStats from '../../../components/dashboardStats';

// Register scales and elements for Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const DashboardPage = () => {
  const [stats, setStats] = useState({
    popularPackage: {},
    transactionsByMonth: {},
    totalPaketTour: 0,
    totalDestinasi: 0,
    totalPengguna: 0,
    totalSaldo: "Rp 0",
    totalPesanan: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      // Fetch data untuk statistik umum dashboard
      const response = await fetch('/api/admin/dashboard-stats');
      const data = await response.json();

      // Fetch data untuk paket paling populer dan transaksi bulanan
      const responseOrders = await fetch('/api/orders');
      const dataOrders = await responseOrders.json();

      setStats({
        popularPackage: dataOrders.popularPackage,
        transactionsByMonth: dataOrders.transactionsByMonth,
        totalPaketTour: data.totalPaketTour,
        totalDestinasi: data.totalDestinasi,
        totalPengguna: data.totalPengguna,
        totalSaldo: `Rp ${data.totalSaldo.toLocaleString()}`,
        totalPesanan: data.totalPesanan,
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
      <DashboardStats stats={stats} />
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

export default DashboardPage;
