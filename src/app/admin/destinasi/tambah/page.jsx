'use client';

import DestinationForm from '../../../../components/destinationForm';
import AdminLayout from '../../layout';

const AddDestinationPage = () => {
  const handleAddDestination = (destination) => {
    // Logic untuk menambah destinasi
    console.log('New Destination:', destination);
  };
  return (
    <AdminLayout showSidebar={true}>
      <div className="container mx-auto">
        <DestinationForm onSubmit={handleAddDestination} />
      </div>
    </AdminLayout>
  );
};

export default AddDestinationPage;
