"use client";
import { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

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
    <div>
      <section className="text-center py-20 bg-gray-100">
        <div className="flex flex-col mx-auto justify-center items-center text-black">
          <h2 className="text-4xl font-bold mb-8">GALERI</h2>
          <h3 className="text-2xl mb-4">Lombok Travelia</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 w-full max-w-[1450px]">
            {pictures.map((picture) => (
              <div key={picture.id_gallery} className='h-[300px] flex justify-center items-center rounded-lg shadow-md'>
                <Image src={picture.image_url} alt={`Foto Wisata ${picture.id_gallery}`} width={400} height={300} className="rounded-lg object-cover h-full w-full" />
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
              >
                {i + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(currentPage + 1)} className="ml-2 px-3 py-1 bg-blue-600 text-white rounded">
                Berikutnya
              </button>
            )}
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
