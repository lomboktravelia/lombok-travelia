'use client';

import { useState, useEffect, useContext } from 'react';
import { UserContext } from '@/utils/userContext';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons';

const destinationsData = [
  { name: 'Gili Trawangan', price: 500000 },
  { name: 'Malimbu', price: 500000 },
  { name: 'Pantai Pink', price: 50000 },
  // Tambahkan destinasi lain dengan harga mereka
];

export default function PaketTourDetail({ params }) {
  const { id } = params;
  const [selectedDestinations, setSelectedDestinations] = useState(destinationsData);
  const [removedDestinations, setRemovedDestinations] = useState([]);
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [hasOrdered, setHasOrdered] = useState(false);
  const [rating, setRating] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      // Cek apakah user sudah pernah memesan paket ini
      fetch(`/api/check-order?user=${currentUser.id_user}&tour=${id}`)
        .then((res) => res.json())
        .then(({ success }) => {
          setHasOrdered(success);
        });
    }
  }, [currentUser, id]);

  if (!id) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Loading...</h1>
        </header>
      </div>
    );
  }

  const handleRemoveDestination = (destinationName) => {
    const destinationToRemove = selectedDestinations.find(dest => dest.name === destinationName);
    const updatedDestinations = selectedDestinations.filter(dest => dest.name !== destinationName);
    setSelectedDestinations(updatedDestinations);
    setRemovedDestinations([...removedDestinations, destinationToRemove]);
  };

  const handleRestoreDestination = (destinationName) => {
    const destinationToRestore = removedDestinations.find(dest => dest.name === destinationName);
    const updatedRemovedDestinations = removedDestinations.filter(dest => dest.name !== destinationName);
    setSelectedDestinations([...selectedDestinations, destinationToRestore]);
    setRemovedDestinations(updatedRemovedDestinations);
  };

  const totalCost = selectedDestinations.reduce((acc, dest) => acc + dest.price, 0);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_tour: id,
        id_order: "", // Ambil id_order yang relevan dari hasil validasi
        rating,
        deskripsi,
      }),
    });

    if (response.ok) {
      // Refresh halaman atau tampilkan notifikasi sukses
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Detail Paket - {decodeURIComponent(id)}</h1>
      </header>
      <section className="w-full max-w-4xl mx-auto mt-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <img src={`/assets/images/${id}.jpg`} alt={`Trip ${id}`} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Deskripsi</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Daerah Wisata</h2>
          <ul className="list-disc ml-6 mt-2">
            {selectedDestinations.map((destination, index) => (
              <li key={index} className="flex items-center justify-between text-gray-900 dark:text-gray-100">
                <span>{destination.name} - {formatRupiah(destination.price)}</span>
                <button
                  onClick={() => handleRemoveDestination(destination.name)}
                  className="ml-4 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600 transition duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faTrashAlt} className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        {removedDestinations.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Destinasi yang Dihapus</h2>
            <ul className="list-disc ml-6 mt-2">
              {removedDestinations.map((destination, index) => (
                <li key={index} className="flex items-center justify-between text-gray-900 dark:text-gray-100">
                  <span>{destination.name} - {formatRupiah(destination.price)}</span>
                  <button
                    onClick={() => handleRestoreDestination(destination.name)}
                    className="ml-4 text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600 transition duration-300 ease-in-out"
                  >
                    <FontAwesomeIcon icon={faUndoAlt} className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Total Cost: {formatRupiah(totalCost)}</h2>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Itinerary</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Day 1: Lorem Ipsum...</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Day 2: Lorem Ipsum...</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Day 3: Lorem Ipsum...</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Include Paket</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300">
            <li>Akomodasi Selama Di Lombok</li>
            <li>Hotel AC 2 Malam</li>
            <li>... and so on</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Not Include</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300">
            <li>Tiket Pesawat PP</li>
            <li>... and so on</li>
          </ul>
        </div>
        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out">Pesan Sekarang</button>
          <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out">Konsultasi WA</button>
        </div>
        {hasOrdered && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Beri Review</h2>
            <form onSubmit={handleSubmitReview}>
              <div className="mt-4">
                <label className="block text-gray-700 dark:text-gray-300">Rating</label>
                <input
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  min="1"
                  max="5"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 dark:text-gray-300">Deskripsi</label>
                <textarea
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  rows="4"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
