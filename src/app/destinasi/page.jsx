"use client";
import Link from 'next/link';

export default function Destinasi() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8 mt-10 text-center">Daftar Destinasi Tour Lengkap</h1>

      <section className="w-full max-w-4xl mx-auto mt-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 bg-white dark:bg-gray-100">
            <img src="/images/destinasi-pantai.jpg" alt="Wisata Pantai" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-green-500">Wisata Pantai</h3>
              <p className="text-gray-700 mb-4">Deskripsi singkat tentang Wisata Pantai.</p>
              <Link href="/destinasi/wisatapantai?jenis_destinasi=Wisata Pantai" className="text-blue-500 hover:underline">Read more</Link>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 bg-white dark:bg-gray-100">
            <img src="/images/destinasi-desa.jpg" alt="Wisata Desa & Air Terjun" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-green-500">Wisata Desa & Air Terjun</h3>
              <p className="text-gray-700 mb-4">Deskripsi singkat tentang Wisata Desa & Air Terjun.</p>
              <Link href="/destinasi/wisatadesaairterjun?jenis_destinasi=Wisata Desa dan Air Terjun" className="text-blue-500 hover:underline">Read more</Link>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 bg-white dark:bg-gray-100">
            <img src="/images/destinasi-budaya.jpg" alt="Wisata Budaya" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-green-500">Wisata Budaya</h3>
              <p className="text-gray-700 mb-4">Deskripsi singkat tentang Wisata Budaya.</p>
              <Link href="/destinasi/wisatabudaya?jenis_destinasi=Wisata Budaya" className="text-blue-500 hover:underline">Read more</Link>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 bg-white dark:bg-gray-100">
            <img src="/images/destinasi-kuliner.jpg" alt="Wisata Kuliner" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-green-500">Wisata Kuliner</h3>
              <p className="text-gray-700 mb-4">Deskripsi singkat tentang Wisata Kuliner.</p>
              <Link href="/destinasi/wisatakuliner?jenis_destinasi=Wisata Kuliner" className="text-blue-500 hover:underline">Read more</Link>
            </div>
          </div>
        </div>
        <div className="mt-10"></div>
      </section>
    </div>
  );
}
