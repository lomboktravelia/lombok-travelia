import Link from 'next/link';

export default function PaketTour() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 text-black">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold px-3">Daftar Paket Tour Lengkap</h1>
      </header>
      <section className="w-full max-w-4xl mx-auto mt-10 px-5">
        <div className="text-center mb-10">
          <div className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md inline-flex items-center justify-center space-x-2 cursor-pointer hover:bg-blue-600 transition-colors">
            <Link href="https://wa.me/623143052787?text=Halo,%20saya%20ingin%20custom%20paket%20tour" passHref>
              <div className="flex items-center space-x-2">
                <span>Perlu KONSULTASI atau ingin CUSTOM PAKET TOUR? Klik disini</span>
                <span className="bg-white text-blue-500 px-3 py-1 rounded-full">CUSTOM PAKET</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold">Paket Reguler</h3>
            <img src="/images/regular-package.jpg" alt="Paket Reguler" className="w-full h-48 object-cover mt-2 rounded-md" />
            <p className="mt-2">Deskripsi singkat tentang Paket Reguler.</p>
            <Link href="/paket-tour/reguler" className="mt-4 text-blue-500 hover:underline">Read more</Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold">Paket Extraordinary</h3>
            <img src="/images/extraordinary-package.jpg" alt="Paket Extraordinary" className="w-full h-48 object-cover mt-2 rounded-md" />
            <p className="mt-2">Deskripsi singkat tentang Paket Extraordinary.</p>
            <Link href="/paket-tour/extraordinary" className="mt-4 text-blue-500 hover:underline">Read more</Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold">Paket Honeymoon</h3>
            <img src="/images/honeymoon-package.jpg" alt="Paket Honeymoon" className="w-full h-48 object-cover mt-2 rounded-md" />
            <p className="mt-2">Deskripsi singkat tentang Paket Honeymoon.</p>
            <Link href="/paket-tour/honeymoon" className="mt-4 text-blue-500 hover:underline">Read more</Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold">Paket One Day Trip</h3>
            <img src="/images/onedaytrip-package.jpg" alt="Paket One Day Trip" className="w-full h-48 object-cover mt-2 rounded-md" />
            <p className="mt-2">Deskripsi singkat tentang Paket One Day Trip.</p>
            <Link href="/paket-tour/onedaytrip" className="mt-4 text-blue-500 hover:underline">Read more</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
