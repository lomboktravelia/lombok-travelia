"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import { UserContext } from "@/utils/userContext";
import { useContext } from "react";

export default function Home() {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const [faq1Open, setFaq1Open] = useState(false);
  const [faq2Open, setFaq2Open] = useState(false);
  const [faq3Open, setFaq3Open] = useState(false);
  const [faq4Open, setFaq4Open] = useState(false);

  useEffect(() => {
    fetch("/api/data?table=paket_tour")
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <main className="min-h-screen bg-white dark:bg-black flex justify-center items-center">
        <Spinner style={{ borderTopColor: '#35D235', borderRightColor: '#35D235' }} />
      </main>
    );

  return (
    <div className="bg-white">
      <section className="text-center py-20 bg-slate-300">
        {currentUser ? (
          <h1 className="text-5xl font-bold text-green-600 px-10">
            Hallo {currentUser.nama} !
          </h1>
        ) : (
          <h1 className="text-5xl font-bold text-green-600 px-10">
            Explore Lombok with Lombok Travelia
          </h1>
        )}
        <p className="text-gray-600 mt-4">
          Lombok Travelia Terdepan Dalam Melayani Anda
        </p>
      </section>

      <section className="py-20 bg-gray-100 px-7">
        <div className="container mx-auto text-black">
          <h2 className="text-3xl font-bold text-center mb-8">
            Paket Wisata Populer Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">{item.nama_paket}</h3>
                <p className="text-gray-600 mb-4">{item.deskripsi}</p>
                <Link
                  href={`/paket-tour/paket/${item.nama_paket}`}
                  className="text-green-600 hover:text-green-800"
                >
                  Readmore &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Keunggulan Layanan Lombok Travelia
          </h2>
          <div className="flex flex-wrap justify-center space-x-8 px-5 gap-5">
            <div className="flex flex-col items-center max-w-xs">
              <img
                src="images/harga-terbaik.png"
                alt="Harga Terbaik"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-bold">Harga Terbaik</h3>
              <p className="text-gray-600 text-center">
              Kami menawarkan harga yang kompetitif dan terjangkau tanpa mengorbankan kualitas layanan.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <img
                src="images/mudah-cepat.png"
                alt="Mudah & Cepat"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Mudah & Cepat</h3>
              <p className="text-gray-600 text-center">
              Proses pemesanan yang sederhana dan cepat adalah prioritas kami. Dengan platform yang user-friendly dan kemudahan akses.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <img
                src="images/pilihan-tour.png"
                alt="Pilihan Tour Terbaik"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Pilihan Tour Terbaik</h3>
              <p className="text-gray-600 text-center">
              Tersedia beragam pilihan tur yang disesuaikan dengan berbagai minat dan preferensi. Mulai dari wisata alam yang menakjubkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Apa Kata Mereka?</h2>
          <div className="flex flex-wrap justify-center space-x-8 px-5 gap-5">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-4">
                Lombok Travelia berkat lombok travelia saya jadi lebih
                bersemangat menjelajahi keindahan lombok, terkhusus kepada bapak
                ronaldo, service yang diberikan sangatlah maksimal.... salut.
              </p>
              <h3 className="text-xl font-bold">Eden Hazard</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-4">
                Wow emejing Lombok Travelia berkat lombok travelia saya jadi
                lebih bersemangat menjelajahi keindahan lombok, terkhusus kepada
                bapak ronaldo, service yang diberikan sangatlah maksimal....
                siuu.
              </p>
              <h3 className="text-xl font-bold">Mas Jhon</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-4">
                Lope lope Lombok Travelia berkat lombok travelia saya jadi lebih
                bersemangat menjelajahi keindahan lombok, terkhusus kepada bapak
                ronaldo, service yang diberikan sangatlah maksimal.... vamos.
              </p>
              <h3 className="text-xl font-bold">Mas Doe</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
          <div className="max-w-2xl mx-auto">
            <div className="border-b mb-4">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 transition-colors duration-200 flex items-center justify-between"
                onClick={() => setFaq1Open(!faq1Open)}
              >
                Apa yang membuat paket tour Lombok Travelia berbeda dari yang
                lain?
                <span
                  className={`ml-2 ${faq1Open ? "transform rotate-180" : ""}`}
                >
                  &#9660;
                </span>
              </button>
              {faq1Open && (
                <div className="px-6 py-4">
                  <p className="text-gray-600">
                    Paket tour Lombok Travelia berbeda karena kami menyediakan
                    layanan eksklusif dengan panduan lokal yang berpengalaman
                    serta destinasi wisata yang tersembunyi dan jarang diketahui
                    wisatawan.
                  </p>
                </div>
              )}
            </div>

            <div className="border-b mb-4">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 transition-colors duration-200 flex items-center justify-between"
                onClick={() => setFaq2Open(!faq2Open)}
              >
                Bagaimana cara saya memesan paket tour dengan Lombok Travelia?
                <span
                  className={`ml-2 ${faq2Open ? "transform rotate-180" : ""}`}
                >
                  &#9660;
                </span>
              </button>
              {faq2Open && (
                <div className="px-6 py-4">
                  <p className="text-gray-600">
                    Anda dapat memesan paket tour melalui website kami dengan
                    mengisi formulir pemesanan yang tersedia di setiap halaman
                    paket tour.
                  </p>
                </div>
              )}
            </div>

            <div className="border-b mb-4">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 transition-colors duration-200 flex items-center justify-between"
                onClick={() => setFaq3Open(!faq3Open)}
              >
                Bagaimana kebijakan pembatalan dan perubahan jadwal dengan
                Lombok Travelia?
                <span
                  className={`ml-2 ${faq3Open ? "transform rotate-180" : ""}`}
                >
                  &#9660;
                </span>
              </button>
              {faq3Open && (
                <div className="px-6 py-4">
                  <p className="text-gray-600">
                    Kami memiliki kebijakan pembatalan yang fleksibel. Anda bisa
                    membatalkan atau mengubah jadwal tour paling lambat 48 jam
                    sebelum waktu keberangkatan.
                  </p>
                </div>
              )}
            </div>

            <div className="border-b mb-4">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 transition-colors duration-200 flex items-center justify-between"
                onClick={() => setFaq4Open(!faq4Open)}
              >
                Apakah makanan lokal termasuk dalam paket tour?
                <span
                  className={`ml-2 ${faq4Open ? "transform rotate-180" : ""}`}
                >
                  &#9660;
                </span>
              </button>
              {faq4Open && (
                <div className="px-6 py-4">
                  <p className="text-gray-600">
                    Ya, setiap paket tour kami sudah termasuk makanan lokal
                    terbaik yang akan memanjakan lidah Anda.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100 text-center text-black">
        <h2 className="text-3xl font-bold mb-4">
          Info Lebih Lanjut Hubungi Kami
        </h2>
        <a
          href="https://wa.me/your-whatsapp-number"
          className="bg-green-600 text-white px-6 py-3 rounded inline-block hover:bg-green-700 transition-colors duration-200"
        >
          WhatsApp &rarr;
        </a>
      </section>
    </div>
  );
}
