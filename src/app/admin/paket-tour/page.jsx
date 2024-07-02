/*"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PackageTour() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function fetchPackages() {
      const res = await fetch('/api/paket-tour');
      const data = await res.json();
      setPackages(data);
    }
    fetchPackages();
  }, []);

  return (
    <div className="container mx-auto p-6">
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
              <td className="py-2 px-4 border-b">
                <Link href={`/admin/paket-tour/edit/${pkg.id_tour}`}>
                  <a className="text-blue-500 hover:underline">Edit</a>
                </Link>
                <button
                  onClick={() => handleDelete(pkg.id_tour)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
*/

"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PackageList from '../../../components/packageList';
import AdminLayout from '../layout';

export default function PackageTour() {
  const [packages, setPackages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchPackages() {
      const res = await fetch('/api/paket-tour');
      const data = await res.json();
      setPackages(data);
    }
    fetchPackages();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`/api/paket-tour/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setPackages(packages.filter((pkg) => pkg.id_tour !== id));
    }
  };

  const handleEdit = (id) => {
    router.push(`/admin/paket-tour/edit/${id}`);
  };

  return (
    <AdminLayout showSidebar={true}>
      <div className="container mx-auto p-6">
        <PackageList packages={packages} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </AdminLayout>
  );
}
