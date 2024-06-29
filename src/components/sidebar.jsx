import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen p-4 text-white">
      <div className="mb-8">
        <img src="/images/profile.png" alt="Profile" className="rounded-full w-24 mx-auto" />
        <h2 className="text-center mt-4">Kim S.Y</h2>
        <p className="text-center">Admin</p>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/admin" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/dashboard" legacyBehavior>
              <a>Dashboard</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/paket-tour" legacyBehavior>
              <a>Paket Tour</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/destinasi" legacyBehavior>
              <a>Destinasi</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/gallery" legacyBehavior>
              <a>Gallery</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/pesanan" legacyBehavior>
              <a>Pesanan</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/saldo" legacyBehavior>
              <a>Saldo</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/pengguna" legacyBehavior>
              <a>Pengguna</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
