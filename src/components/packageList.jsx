import React from 'react';

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

export default PackageList;
