/*import Link from 'next/link';

export default function PaketTourList({ params }) {
  const { paket } = params;
  const paketList = {
    reguler: [
      { title: "Trip 3D2N - Gili Trawangan", id: "trip1" },
      { title: "Trip 3D2N - Gili Nanggu", id: "trip2" },
      { title: "Trip 3D2N - Sasak Tour & Gili Kondo", id: "trip3" },
      { title: "Trip 3D2N - Sasak Tour & Pantai Pink", id: "trip4" },
    ],
    // Add other paket lists here
  };

  return (
    <div>
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Daftar Paket Tour {paket.charAt(0).toUpperCase() + paket.slice(1)}</h1>
        <div>Banner and Narrative here</div>
      </header>
      <section className="w-full max-w-4xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paketList[paket].map((tour) => (
            <div key={tour.id} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold">{tour.title}</h3>
              <Link href={`/paket-tour/${paket}/${tour.id}`} legacyBehavior>
                <a className="mt-4 text-blue-500 hover:underline">Read more</a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} */

"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';


export default function PaketPage({ params }) {
  const [packages, setPackages] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { paket } = params;

  useEffect(() => {
    async function fetchPackages() {
      const jenis_paket = searchParams.get('jenis_paket');
      if (jenis_paket) {
        const res = await fetch(`/api/paket-tour?jenis_paket=${encodeURIComponent(jenis_paket)}`);
        const { data } = await res.json();
        setPackages(data);
      }
    }
    fetchPackages();
  }, [searchParams]);

  if (!packages.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col p-5">
      <h1 className="text-2xl font-bold mb-4">Paket {paket.charAt(0).toUpperCase() + paket.slice(1)}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Link href={`/paket-tour/${paket}/${pkg.id_tour}`} key={pkg.id_tour}>
            <div className="border rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={pkg.picture} alt={pkg.nama_paket} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{pkg.nama_paket}</h2>
                <p className="text-gray-600">{pkg.daerah_wisata}</p>
                <p className="text-gray-800 font-bold">Rp {pkg.harga}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
