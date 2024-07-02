/*import React from 'react';

const PackageList = ({ packages, onDelete, onEdit }) => {
  return (
    <div className="container mx-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2">Nama Paket</th>
            <th className="py-2">Deskripsi</th>
            <th className="py-2">Harga</th>
            <th className="py-2">Durasi</th>
            <th className="py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id_tour}>
              <td className="border px-4 py-2">{pkg.nama_paket}</td>
              <td className="border px-4 py-2">{pkg.deskripsi}</td>
              <td className="border px-4 py-2">{pkg.harga}</td>
              <td className="border px-4 py-2">{pkg.durasi}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => onEdit(pkg.id_tour)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (confirm('Yakin Hapus Data?')) {
                      onDelete(pkg.id_tour);
                    }
                  }}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageList; */

import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

const PackageList = ({ packages, onDelete }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Kelola Paket Tour</h1>
      <Link href="/admin/paket-tour/tambah">
        <button className="bg-blue-500 text-white px-4 py-2 mb-4 rounded">
          Tambah Paket Tour
        </button>
      </Link>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nama Paket Tour</th>
            <th className="py-2 px-4 border-b">Jenis Paket Tour</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id_tour}>
              <td className="py-2 px-4 border-b">{pkg.nama_paket}</td>
              <td className="py-2 px-4 border-b">{pkg.jenis_paket}</td>
              <td className="py-2 px-4 border-b flex items-center">
                <Link href={`/admin/paket-tour/edit/${pkg.id_tour}`}>
                  <FaEdit className="text-blue-500 cursor-pointer mr-4" />
                </Link>
                <FaTrash
                  onClick={() => {
                    if (confirm('Yakin Hapus Data?')) {
                      onDelete(pkg.id_tour);
                    }
                  }}
                  className="text-red-500 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageList;
