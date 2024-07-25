"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Spinner, Button } from "@nextui-org/react";
import { UserContext } from "@/utils/userContext";
import { useContext } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp, FaStar } from 'react-icons/fa';

export default function Home() {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

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

  useEffect(() => {
    fetch('/api/review') // Fetch all reviews without id_tour
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched reviews:', data); // Debug
        setReviews(data.reviews || []);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  if (isLoading)
    return (
      <main className="min-h-screen bg-white dark:bg-black flex justify-center items-center">
        <Spinner
          style={{ borderTopColor: "#35D235", borderRightColor: "#35D235" }}
        />
      </main>
    );

  return (
    <div className="bg-white">
      <section className="relative text-center py-20 bg-slate-300">
        <Image
          src="images/gili-meno.jpg"
          alt="Explore Lombok"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 text-white px-10">
          {currentUser ? (
            <h1 className="text-5xl font-bold text-green-400 mb-4">
              Hallo {currentUser.nama} !
            </h1>
          ) : (
            <h1 className="text-5xl font-bold text-green-400 mb-4">
              Explore Lombok with Lombok Travelia
            </h1>
          )}
          <p className="mt-4">
            Lombok Travelia Terdepan Dalam Melayani Anda
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      </section>

      <section className="py-20 bg-gray-100 px-7">
        <div className="container mx-auto text-black">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
            Paket Wisata Populer Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col bg-white p-5 rounded-lg shadow-md gap-5 h-[550px]"
                >
                  <div className="rounded-lg overflow-hidden h-3/5 w-full">
                    <Image
                      alt="Paket Tour"
                      src={item.picture ? item.picture : "images/wisata-1.jpeg"}
                      width={400}
                      height={300}
                      className="object-cover h-full w-full"
                    ></Image>
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-bold truncate">
                      {item.nama_paket}
                    </h3>
                  </div>
                  <div className="flex flex-col justify-between gap-5 w-full h-2/5">
                    <p className="text-gray-600 text-justify">
                      {item.deskripsi.length > 200
                        ? `${item.deskripsi.substring(0, 210)}...`
                        : item.deskripsi}
                    </p>
                    <Link
                      href={`/paket-tour/paket/${item?.id_tour}`}
                      passHref
                      >
                        <Button
                          radius="full"
                          className="bg-gradient-to-tr from-green-500 to-yellow-500 text-white shadow-lg hover:from-green-400 hover:to-yellow-400"
                        >
                          Read more
                        </Button>
                      </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 text-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
            Keunggulan Layanan Lombok Travelia
          </h2>
          <div className="flex flex-wrap justify-center space-x-8 px-5 gap-5">
            <div className="flex flex-col items-center max-w-xs">
            <Image
                src="/images/hargamurahikon.webp"
                alt="Harga Terbaik"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-bold">Harga Terbaik</h3>
              <p className="text-gray-800 text-center">
                Kami menawarkan harga yang kompetitif dan terjangkau tanpa
                mengorbankan kualitas layanan.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
            <Image
                src="/images/waktuikon.webp"
                alt="Mudah & Cepat"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Mudah & Cepat</h3>
              <p className="text-gray-800 text-center">
                Proses pemesanan yang sederhana dan cepat adalah prioritas kami.
                Dengan platform yang user-friendly dan kemudahan akses.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
            <Image
                src="/images/kesepakatanikon.webp"
                alt="Pilihan Tour Terbaik"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Pilihan Tour Terbaik</h3>
              <p className="text-gray-800 text-center">
                Tersedia beragam pilihan tur yang disesuaikan dengan berbagai
                minat dan preferensi. Mulai dari wisata alam yang menakjubkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-100 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-green-700">Apa Kata Mereka?</h2>
          <div className="flex flex-wrap justify-center space-x-8 px-5 gap-5">
            {reviews && reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full mx-4 transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-center justify-center mb-4">
                    <Image
                      src={review.picture_url || "/images/profileicon.png"}
                      alt="Profile Picture"
                      width={50}
                      height={50}
                      className="rounded-full border border-gray-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">{review.nama}</h3>
                  <p className="text-gray-900 mb-4">{review.deskripsi}</p>
                  <p className="text-base text-gray-600 mb-2">
                    {Array.from({ length: parseInt(review.rating) }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-600 inline" />
                    ))}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">{new Date(review._created_date).toLocaleDateString()}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Belum ada review</p>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-green-700">
            Galeri Video
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            <div className="aspect-w-16 aspect-h-9 px-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DKDde_jKaTM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 px-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/S3gwXSs59TQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 px-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/CW1CNpiVjUk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 px-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/WpNDOuno0c0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 px-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ShXXioyHPPs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 px-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nMkhZPGDQ24"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-600">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          <div className="border-b mb-6 bg-green-800 rounded-lg shadow-md">
            <button
              className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 transition-colors duration-300 flex items-center justify-between rounded-t-lg"
              onClick={() => setFaq1Open(!faq1Open)}
            >
              Apa yang membuat paket tour Lombok Travelia berbeda dari yang lain?
              <span className="ml-2">
                {faq1Open ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {faq1Open && (
              <div className="px-6 py-4 bg-green-100 rounded-b-lg">
                <p className="text-gray-900">
                  Paket tour Lombok Travelia berbeda karena kami menyediakan layanan eksklusif dengan panduan lokal yang berpengalaman serta destinasi wisata yang tersembunyi dan jarang diketahui wisatawan.
                </p>
              </div>
            )}
          </div>

          <div className="border-b mb-6 bg-green-800 rounded-lg shadow-md">
            <button
              className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 transition-colors duration-300 flex items-center justify-between rounded-t-lg"
              onClick={() => setFaq2Open(!faq2Open)}
            >
              Bagaimana cara saya memesan paket tour dengan Lombok Travelia?
              <span className="ml-2">
                {faq2Open ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {faq2Open && (
              <div className="px-6 py-4 bg-green-100 rounded-b-lg">
                <p className="text-gray-900">
                  Anda dapat memesan paket tour melalui website kami dengan mengisi formulir pemesanan yang tersedia di setiap halaman paket tour.
                </p>
              </div>
            )}
          </div>

          <div className="border-b mb-6 bg-green-800 rounded-lg shadow-md">
            <button
              className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 transition-colors duration-300 flex items-center justify-between rounded-t-lg"
              onClick={() => setFaq3Open(!faq3Open)}
            >
              Bagaimana kebijakan pembatalan dan perubahan jadwal dengan Lombok Travelia?
              <span className="ml-2">
                {faq3Open ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {faq3Open && (
              <div className="px-6 py-4 bg-green-100 rounded-b-lg">
                <p className="text-gray-900">
                  Kami memiliki kebijakan pembatalan yang fleksibel. Anda bisa membatalkan atau mengubah jadwal tour paling lambat 48 jam sebelum waktu keberangkatan.
                </p>
              </div>
            )}
          </div>

          <div className="border-b mb-6 bg-green-800 rounded-lg shadow-md">
            <button
              className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 transition-colors duration-300 flex items-center justify-between rounded-t-lg"
              onClick={() => setFaq4Open(!faq4Open)}
            >
              Apakah makanan lokal termasuk dalam paket tour?
              <span className="ml-2">
                {faq4Open ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {faq4Open && (
              <div className="px-6 py-4 bg-green-100 rounded-b-lg">
                <p className="text-gray-900">
                  Ya, setiap paket tour kami sudah termasuk makanan lokal terbaik yang akan memanjakan lidah Anda.
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
          href="https://wa.me/83123456789"
          className="bg-green-600 text-white px-6 py-3 rounded inline-block hover:bg-green-700 transition-colors duration-200"
        >
          WhatsApp &rarr;
        </a>
      </section>
    </div>
  );
}