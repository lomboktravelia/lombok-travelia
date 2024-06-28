import Link from 'next/link';

export default function Destinasi() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 text-black">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Daftar Destinasi Tour Lengkap</h1>
      </header>
      <section className="w-full max-w-4xl mx-auto mt-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/destinasi-pantai.jpg" alt="Wisata Pantai" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Wisata Pantai</h3>
            <p className="mt-2">Deskripsi singkat tentang Wisata Pantai.</p>
            <Link href="/destinasi/wisatapantai" legacyBehavior>
              <a className="mt-4 text-blue-500 hover:underline">Read more</a>
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/destinasi-desa.jpg" alt="Wisata Desa & Air Terjun" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Wisata Desa & Air Terjun</h3>
            <p className="mt-2">Deskripsi singkat tentang Wisata Desa & Air Terjun.</p>
            <Link href="/destinasi/wisatadesaairterjun" legacyBehavior>
              <a className="mt-4 text-blue-500 hover:underline">Read more</a>
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/destinasi-budaya.jpg" alt="Wisata Budaya" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Wisata Budaya</h3>
            <p className="mt-2">Deskripsi singkat tentang Wisata Budaya.</p>
            <Link href="/destinasi/wisatabudaya" legacyBehavior>
              <a className="mt-4 text-blue-500 hover:underline">Read more</a>
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/destinasi-kuliner.jpg" alt="Wisata Kuliner" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Wisata Kuliner</h3>
            <p className="mt-2">Deskripsi singkat tentang Wisata Kuliner.</p>
            <Link href="/destinasi/wisatakuliner" legacyBehavior>
              <a className="mt-4 text-blue-500 hover:underline">Read more</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
