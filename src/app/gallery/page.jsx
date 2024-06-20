import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  return (
    <div>
      <section className="text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">GALERI</h2>
          <h3 className="text-2xl mb-4">Lombok Travelia</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <Image src="/path-to-image1.jpg" alt="Foto Wisata 1" width={400} height={300} className="rounded-lg shadow-md" />
            </div>
            <div>
              <Image src="/path-to-image2.jpg" alt="Foto Wisata 2" width={400} height={300} className="rounded-lg shadow-md" />
            </div>
            <div>
              <Image src="/path-to-image3.jpg" alt="Foto Wisata 3" width={400} height={300} className="rounded-lg shadow-md" />
            </div>
            <div>
              <Image src="/path-to-image4.jpg" alt="Foto Wisata 4" width={400} height={300} className="rounded-lg shadow-md" />
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">
              Foto Wisata
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">
              Foto Wisata lainnya
            </div>
          </div>
          <div className="mt-8">
            <Link href="/gallery?page=2" className="text-blue-600">1 2 Berikutnya</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
