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
