import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-green-600">Explore Lombok with Lombok Travelia</h1>
        <p className="text-gray-600 mt-4">Lombok Travelia Terdepan Dalam Melayani Anda</p>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Paket Wisata Populer Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Paket 2DN</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link href="/paket-tour/paket/2DN" className="text-green-600 hover:text-green-800">Readmore &rarr;</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Paket 3DN</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link href="/paket-tour/paket/3DN" className="text-green-600 hover:text-green-800">Readmore &rarr;</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Paket 4DN</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link href="/paket-tour/paket/4DN" className="text-green-600 hover:text-green-800">Readmore &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Layanan Lombok Travelia</h2>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <img src="/path-to-your-image.jpg" alt="Family Tour" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Family Tour</h3>
              <p className="text-gray-600">Menyediakan paket untuk family tour</p>
            </div>
            <div className="text-center">
              <img src="/path-to-your-image.jpg" alt="Group Tour" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Group Tour</h3>
              <p className="text-gray-600">Menyediakan paket untuk group tour</p>
            </div>
            <div className="text-center">
              <img src="/path-to-your-image.jpg" alt="Honeymoon Tour" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Honeymoon Tour</h3>
              <p className="text-gray-600">Menyediakan paket untuk honeymoon tour</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Info Lebih Lanjut Hubungi Kami</h2>
        <a href="https://wa.me/your-whatsapp-number" className="bg-green-600 text-white px-6 py-3 rounded">WhatsApp &rarr;</a>
      </section>
    </div>
  );
}
