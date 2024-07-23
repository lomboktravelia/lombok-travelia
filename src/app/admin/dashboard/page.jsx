"use client";

import React, { useState, useEffect } from 'react';
import AdminLayout from '../layout';
import DashboardStats from '../../../components/dashboardStats';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalPaketTour: 0,
    totalDestinasi: 0,
    totalPengguna: 0,
    totalSaldo: "Rp 0",
    totalPesanan: 0,
  });

  useEffect(() => {
    // Fetch data dari API atau backend
    fetch('/api/admin/dashboard-stats')
      .then(response => response.json())
      .then(data => {
        setStats({
          totalPaketTour: data.totalPaketTour,
          totalDestinasi: data.totalDestinasi,
          totalPengguna: data.totalPengguna,
          totalSaldo: `Rp ${data.totalSaldo.toLocaleString()}`,
          totalPesanan: data.totalPesanan,
        });
      })
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  return (
    <AdminLayout showSidebar={true}>
      <h1 className="text-2xl font-bold mb-4 text-green-900">Admin Dashboard</h1>
      <DashboardStats stats={stats} />
    </AdminLayout>
  );
};

export default DashboardPage;
