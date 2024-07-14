// import Image from 'next/image';
// import Link from 'next/link';
// import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

// const destinasiDetail = {
//   title: "Gili Trawangan",
//   price: "Rp 370.000",
//   description: `Gili Trawangan adalah surga tersembunyi di Indonesia yang menawarkan kombinasi sempurna antara keindahan alam, aktivitas menyenangkan, kuliner lezat, hiburan malam yang menggoda, dan akomodasi yang beragam. Apakah Anda mencari liburan romantis, petualangan ekstrem, atau sekadar waktu bersantai di tepi pantai, pulau ini memiliki semua yang Anda butuhkan untuk pengalaman liburan yang tak terlupakan.

//   Indonesia, tanah air yang kaya akan keindahan alam, terkenal dengan destinasi pariwisatanya yang memukau. Salah satu permata tersembunyi di antara ribuan pulau yang mempesona adalah Gili Trawangan. Terletak di sebelah barat laut Lombok, pulau ini menjadi salah satu tujuan utama bagi para wisatawan yang mencari ketenangan, keindahan bawah laut, dan hiburan malam yang tak terlupakan. Mari kita telusuri lebih dalam tentang pesona eksotis yang ditawarkan oleh pulau ini.

//   Gili Trawangan memiliki pantai-pantai yang memikat dengan pasir putihnya yang lembut dan air lautnya yang jernih. Wisatawan dapat menikmati matahari terbenam yang menakjubkan sambil bersantai di pinggir pantai, atau menjelajahi keindahan bawah lautnya dengan menyelam atau snorkeling. Di sekitar pulau, terumbu karang yang berwarna-warni dan kehidupan laut yang melimpah menjadi daya tarik utama bagi para penyelam.`,
//   images: [
//     "/images/gili-trawangan-1.jpg",
//     "/images/gili-trawangan-1.jpg",
//     "/images/gili-trawangan-1.jpg",
//   ],
//   priceInfo: "Start From Rp 370K / 10 Orang Harga bisa berubah sewaktu-waktu tanpa ada pemberitahuan sebelumnya",
//   otherDestinations: [
//     { title: "Gili Meno", image: "/images/gili-meno.jpg", link: "/destinasi/wisatapantai/gili-meno" },
//     { title: "Gili Air", image: "/images/gili-air.jpg", link: "/destinasi/wisatapantai/gili-air" },
//     { title: "Gili Nanggu", image: "/images/gili-nanggu.jpg", link: "/destinasi/wisatapantai/gili-nanggu" },
//   ],
// };

// export default function DestinasiDetail() {
//   return (
//     <div className="min-h-screen bg-gray-100 py-8 text-black">
//       <header className="text-center py-10">
//         <h1 className="text-4xl font-bold">{destinasiDetail.title}</h1>
//       </header>
//       <section className="w-full max-w-6xl mx-auto mt-10 px-5">
//         <div className="flex flex-col lg:flex-row gap-6">
//           <div className="lg:w-2/3">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {destinasiDetail.images.map((src, index) => (
//                 <div key={index} className="relative h-64">
//                   <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
//                 </div>
//               ))}
//             </div>
//             <div className="mt-6">
//               <h2 className="text-2xl font-bold">{destinasiDetail.title}</h2>
//               <p className="mt-2">{destinasiDetail.price}</p>
//               <h3 className="mt-4 text-xl font-bold">Deskripsi</h3>
//               <p className="mt-2 whitespace-pre-wrap">{destinasiDetail.description}</p>
//             </div>
//             <div className="mt-6">
//               <h3 className="text-xl font-bold text-green-500 hover:underline">
//                 <Link href="#">Lihat juga destinasi lainnya</Link>
//               </h3>
//               <div className="flex mt-4 space-x-4">
//                 {destinasiDetail.otherDestinations.map((dest, index) => (
//                   <Link href={dest.link} key={index} legacyBehavior>
//                     <a className="relative h-32 w-32">
//                       <Image src={dest.image} alt={dest.title} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
//                     </a>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/3">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <p className="text-xl font-bold">Start From</p>
//               <p className="text-3xl font-bold text-green-500">{destinasiDetail.price}</p>
//               <p className="mt-2 text-sm">{destinasiDetail.priceInfo}</p>
//               <a
//                 href="https://wa.me/yourwhatsapplink"
//                 className="mt-4 block text-center text-white bg-green-500 hover:bg-green-600 rounded-lg py-3 font-bold"
//               >
//                 Chat Whatsapp
//               </a>
//               <p className="mt-2 text-center">Tanya-tanya dulu juga boleh, wa aja</p>
//             </div>
//             <p className="mt-2 text-center text-blue bg-blue-10 hover:bg-blue-100">Bagikan Juga Ke Media Sosial Kalian:</p>
//             <div className="mt-6 flex space-x-4 justify-center">
//               <a href="https://facebook.com" target="_blank" className="w-8 h-8 text-blue-600">
//                 <FaFacebook size={32} />
//               </a>
//               <a href="https://whatsapp.com" target="_blank" className="w-8 h-8 text-green-500">
//                 <FaWhatsapp size={32} />
//               </a>
//               <a href="https://instagram.com" target="_blank" className="w-8 h-8 text-pink-500">
//                 <FaInstagram size={32} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // Menggunakan useSearchParams untuk mendapatkan query parameter
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function DestinasiDetailPage({ params }) {
  const searchParams = useSearchParams();
  const jenis_destinasi = searchParams.get('jenis_destinasi'); // Menggunakan searchParams untuk mendapatkan jenis_destinasi dari URL query
  const { id } = params; // Menggunakan params yang diberikan dari prop

  const [destinationDetails, setDestinationDetails] = useState(null);

  useEffect(() => {
    async function fetchDestinationDetails() {
      try {
        const res = await fetch(`/api/destinasi?id=${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch destination details');
        }
        const data = await res.json();
        setDestinationDetails(data?.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (id) {
      fetchDestinationDetails();
    }
  }, [id]);

  if (!destinationDetails) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Loading...
          </h1>
        </header>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 text-black">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">{destinationDetails.nama_destinasi}</h1>
      </header>
      <section className="w-full max-w-6xl mx-auto mt-10 px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-64">
                <Image src={destinationDetails.picture} alt={`Image 1`} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold">{destinationDetails.nama_destinasi}</h2>
              <p className="mt-2">{destinationDetails.harga}</p>
              <h3 className="mt-4 text-xl font-bold">Deskripsi</h3>
              <p className="mt-2 whitespace-pre-wrap">{destinationDetails.deskripsi}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-green-500 hover:underline">
                <Link href="#">Lihat juga destinasi lainnya</Link>
              </h3>
              <div className="flex mt-4 space-x-4">
                {/* Contoh untuk menampilkan destinasi terkait */}
                {/* {destinationDetails.destinasi_lain.map((destinasi_lain, index) => (
                  <Link href={`/destinasi/${destinasi_lain.link}`} key={index} passHref>
                    <a className="relative h-32 w-32">
                      <Image src={destinasi_lain.gambar.url} alt={destinasi_lain.nama} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                    </a>
                  </Link>
                ))} */}
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-xl font-bold">Start From</p>
              <p className="text-3xl font-bold text-green-500">{destinationDetails.harga}</p>
              {/* Contoh tautan untuk WhatsApp */}
              <a
                href="https://wa.me/yourwhatsapplink"
                className="mt-4 block text-center text-white bg-green-500 hover:bg-green-600 rounded-lg py-3 font-bold"
              >
                Chat Whatsapp
              </a>
              <p className="mt-2 text-center">Tanya-tanya dulu juga boleh, wa aja</p>
            </div>
            <p className="mt-2 text-center text-blue bg-blue-10 hover:bg-blue-100">Bagikan Juga Ke Media Sosial Kalian:</p>
            <div className="mt-6 flex space-x-4 justify-center">
              <a href="https://facebook.com" target="_blank" className="w-8 h-8 text-blue-600">
                <FaFacebook size={32} />
              </a>
              <a href="https://whatsapp.com" target="_blank" className="w-8 h-8 text-green-500">
                <FaWhatsapp size={32} />
              </a>
              <a href="https://instagram.com" target="_blank" className="w-8 h-8 text-pink-500">
                <FaInstagram size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}