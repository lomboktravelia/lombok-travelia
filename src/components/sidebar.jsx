"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaTachometerAlt, FaBox, FaMapMarkedAlt, FaImages, FaClipboardList, FaWallet, FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();
  
  // Fungsi untuk memeriksa apakah link aktif
  const isActive = (pathname, href) => pathname === href;

  return (
    <div className="bg-gray-800 p-4 text-white h-full">
      <div className="mb-8">
        <img src="/images/profile.jpg" alt="Profile" className="rounded-full w-10 mx-auto" />
        <h2 className="text-center mt-4">Kim S.Y</h2>
        <p className="text-center">Admin</p>
      </div>
      <nav>
        <ul>
          <li className={`mb-4 ${isActive(pathname, '/admin') ? 'text-blue-500' : ''}`}>
            <Link href="/admin">
              <div className="flex items-center cursor-pointer">
                <FaHome className="mr-2" /> Home
              </div>
            </Link>
          </li>
          <li className={`mb-4 ${isActive(pathname, '/admin/dashboard') ? 'text-blue-500' : ''}`}>
            <Link href="/admin/dashboard">
              <div className="flex items-center cursor-pointer">
                <FaTachometerAlt className="mr-2" /> Dashboard
              </div>
            </Link>
          </li>
          <li className={`mb-4 ${isActive(pathname, '/admin/paket-tour') ? 'text-blue-500' : ''}`}>
            <Link href="/admin/paket-tour">
              <div className="flex items-center cursor-pointer">
                <FaBox className="mr-2" /> Paket Tour
              </div>
            </Link>
          </li>
          <li className={`mb-4 ${isActive(pathname, '/admin/destinasi') ? 'text-blue-500' : ''}`}>
            <Link href="/admin/destinasi">
              <div className="flex items-center cursor-pointer">
                <FaMapMarkedAlt className="mr-2" /> Destinasi
              </div>
            </Link>
          </li>
          <li className={`mb-4 ${isActive(pathname, '/admin/gallery') ? 'text-blue-500' : ''}`}>
            <Link href="/admin/gallery">
              <div className="flex items-center cursor-pointer">
                <FaImages className="mr-2" /> Gallery
              </div>
            </Link>
          </li>
          <li className={`mb-4 ${isActive(pathname, '/admin/pesanan') ? 'text-blue-500' : ''}`}>
            <Link href="/admin/pesanan">
              <div className="flex items-center cursor-pointer">
                <FaClipboardList className="mr-2" /> Pesanan
              </div>
            </Link>
          </li>
          <li className={`mb-4 ${isActive(pathname, '/admin/saldo') ? 'text-blue-500' : ''}`}>
            <Link href="/admin/saldo">
              <div className="flex items-center cursor-pointer">
                <FaWallet className="mr-2" /> Saldo
              </div>
            </Link>
          </li>
          <li className={`mb-4 ${isActive(pathname, '/admin/pengguna') ? 'text-blue-500' : ''}`}>
            <Link href="/admin/pengguna">
              <div className="flex items-center cursor-pointer">
                <FaUsers className="mr-2" /> Pengguna
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
