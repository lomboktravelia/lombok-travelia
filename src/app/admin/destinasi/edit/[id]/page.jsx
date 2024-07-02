/*'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import DestinationForm from '../../../../../components/destinationForm';

const EditDestinationPage = () => {
  const params = useParams();
  const { id } = params;

  const [destination, setDestination] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch data destinasi dari API
      fetch(`/api/destinasi/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setDestination(data);
        });
    }
  }, [id]);

  const handleEditDestination = async (updatedDestination) => {
    try {
      const response = await fetch(`/api/destinasi/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedDestination)
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Updated Destination:', data);
      } else {
        console.error('Failed to update destination:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!destination) return <div>Loading...</div>;

  return <DestinationForm destination={destination} onSubmit={handleEditDestination} />;
};

export default EditDestinationPage; */

'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import DestinationForm from '../../../../../components/destinationForm';
import AdminLayout from '../../../layout';

const EditDestinationPage = () => {
  const params = useParams();
  const { id } = params;

  const [destination, setDestination] = useState(null);

  useEffect(() => {
    if (id) {
      // Mock data untuk tujuan pengeditan
      setDestination({ id, name: 'Gili Trawangan', price: 500000, description: 'Deskripsi', picture: 'arsenal.jpg' });
    }
  }, [id]);

  const handleEditDestination = (updatedDestination) => {
    // Logic untuk mengedit destinasi
    console.log('Updated Destination:', updatedDestination);
  };

  if (!destination) return <div>Loading...</div>;
  return (
    <AdminLayout showSidebar={true}>
      <div className="container mx-auto">
        <DestinationForm destination={destination} onSubmit={handleEditDestination} />
      </div>
    </AdminLayout>
  );
};

export default EditDestinationPage;

