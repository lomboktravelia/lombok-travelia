import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

const DestinationList = ({ destinations, onDelete }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Kelola Destinasi</h1>
      <Link href="/admin/destinasi/tambah">
        <button className="bg-blue-500 text-white px-4 py-2 mb-4 rounded">
          Tambah Destinasi
        </button>
      </Link>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nama Destinasi</th>
            <th className="py-2 px-4 border-b">Deskripsi</th>
            <th className="py-2 px-4 border-b">Harga</th>
            <th className="py-2 px-4 border-b">Jenis Destinasi</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((dest) => (
            <tr key={dest.id_destinasi}>
              <td className="py-2 px-4 border-b">{dest.nama_destinasi}</td>
              <td className="py-2 px-4 border-b">{dest.deskripsi}</td>
              <td className="py-2 px-4 border-b">{dest.harga}</td>
              <td className="py-2 px-4 border-b">{dest.jenis_destinasi}</td>
              <td className="py-2 px-4 border-b flex items-center">
                <Link href={`/admin/destinasi/edit/${dest.id_destinasi}`}>
                  <FaEdit className="text-blue-500 cursor-pointer mr-4" />
                </Link>
                <FaTrash
                  onClick={() => {
                    if (confirm('Yakin Hapus Data?')) {
                      onDelete(dest.id_destinasi);
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

export default DestinationList;
