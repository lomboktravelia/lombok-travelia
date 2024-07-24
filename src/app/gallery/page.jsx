"use client";
import { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

const videos = [
  "https://www.youtube.com/embed/DKDde_jKaTM",
  "https://www.youtube.com/embed/S3gwXSs59TQ",
  "https://www.youtube.com/embed/CW1CNpiVjUk",
  "https://www.youtube.com/embed/WpNDOuno0c0",
  "https://www.youtube.com/embed/ShXXioyHPPs",
  "https://www.youtube.com/embed/xq8_LjEqocc"
];

function GalleryComponent() {
  const [pictures, setPictures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;
    setCurrentPage(page);
  }, [searchParams]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await fetch(`/api/gallery?page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch pictures');
        }
        const data = await response.json();
        setPictures(data.data);
        setTotalPages(Math.ceil(data.total / 8)); // Assuming the API returns the total number of pictures
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };
    fetchPictures();
  }, [currentPage]);

  const handlePageChange = (page) => {
    router.push(`/gallery?page=${page}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="text-center py-20">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <h2 className="text-5xl font-bold mb-8 text-green-600">Galeri</h2>
          <h3 className="text-2xl mb-4 text-green-800">Lombok Travelia</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {pictures.map((picture) => (
              <div key={picture.id_gallery} className="relative overflow-hidden rounded-lg shadow-lg group px-6">
                <Image src={picture.image_url} alt={`Foto Wisata ${picture.id_gallery}`} width={400} height={300} className="w-full h-72 object-cover transition-transform duration-300 transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{picture.nama_paket}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-16">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`mx-1 px-4 py-2 rounded-lg ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
              >
                {i + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(currentPage + 1)} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                Berikutnya
              </button>
            )}
          </div>
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-green-900 mb-6">Video rekomendasi seputar destinasi wisata di Lombok</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
              {videos.map((video, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    width="100%"
                    height="315"
                    src={video}
                    title={`YouTube video player ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-72"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Gallery() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GalleryComponent />
    </Suspense>
  );
}
