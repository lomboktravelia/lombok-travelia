import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

const PackageList = ({ packages, onDelete }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Kelola Paket Tour</h1>
      <div className="flex justify-center md:justify-start mb-4">
        <Link href="/admin/paket-tour/tambah">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Tambah Paket Tour
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="bg-white border border-gray-200 w-full rounded-lg max-w-full">
          <thead>
            <tr>
              <th className="py-2 px-2 sm:px-4 border-b">Nama Paket Tour</th>
              <th className="py-2 px-2 sm:px-4 border-b">Jenis Paket Tour</th>
              <th className="py-2 px-2 sm:px-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id_tour}>
                <td className="py-2 px-2 sm:px-4 border-b">{pkg.nama_paket}</td>
                <td className="py-2 px-2 sm:px-4 border-b">{pkg.jenis_paket}</td>
                <td className="py-2 px-2 sm:px-4 border-b">
                  <div className="flex justify-center gap-2 sm:gap-3">
                    <Link href={`/admin/paket-tour/edit/${pkg.id_tour}`}>
                      <FaEdit className="text-blue-500 cursor-pointer" />
                    </Link>
                    <FaTrash
                      onClick={() => {
                        if (confirm('Yakin Hapus Data?')) {
                          onDelete(pkg.id_tour);
                        }
                      }}
                      className="text-red-500 cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageList;
