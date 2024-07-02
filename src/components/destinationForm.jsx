import React from 'react';
const DestinationForm = ({ destination, onSubmit }) => {
    const [name, setName] = React.useState(destination ? destination.name : '');
    const [price, setPrice] = React.useState(destination ? destination.price : '');
    const [description, setDescription] = React.useState(destination ? destination.description : '');
    const [picture, setPicture] = React.useState(destination ? destination.picture : '');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, price, description, picture });
    };
  
    return (
      <form onSubmit={handleSubmit} className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{destination ? 'Edit' : 'Tambah'} Destinasi</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Nama Destinasi</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Picture</label>
          <input
            type="text"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Deskripsi</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Harga</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{destination ? 'Update' : 'Tambah'}</button>
      </form>
    );
  };
  
  export default DestinationForm;
  