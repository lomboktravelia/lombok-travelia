import React from 'react';

const GalleryForm = ({ galleries = [], onShow, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300">Nama Gallery</th>
            <th className="py-2 px-4 border border-gray-300">Gambar</th>
            <th className="py-2 px-4 border border-gray-300">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {galleries?.length > 0 ? (
            galleries.map((gallery) => (
              <tr key={gallery.id}>
                <td className="border px-4 py-2">{gallery.name}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => onShow(gallery.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Tampilkan
                  </button>
                </td>
                <td className="border px-4 py-2 flex gap-2 justify-center">
                  <button
                    onClick={() => onEdit(gallery.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12h0M12 15h0M9 12h0M12 3a9 9 0 11-9 9 9 0 019-9z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => onDelete(gallery.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border px-4 py-2 text-center">
                Tidak ada galeri yang tersedia.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GalleryForm;
