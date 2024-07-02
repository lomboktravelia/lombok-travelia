'use client';
import Link from 'next/link';

const DestinationList = ({ destinations }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kelola Destinasi</h1>
      <Link href="/admin/destinasi/tambah">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Tambah Destinasi</button>
      </Link>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Nama Destinasi</th>
            <th className="py-2">Harga</th>
            <th className="py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((destination, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{destination.name}</td>
              <td className="py-2">Rp {destination.price}</td>
              <td className="py-2 flex space-x-2">
                <Link href={`/admin/destinasi/edit/${destination.id}`}>
                  <button className="text-blue-500">Edit</button>
                </Link>
                <button className="text-red-500">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DestinationList;
