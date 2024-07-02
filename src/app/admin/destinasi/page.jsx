'use client';

import DestinationList from '../../../components/destinationList';
import AdminLayout from '../layout';

const DestinationsPage = () => {
  // Mock data
  const destinations = [
    { id: 1, name: 'Gili Trawangan', price: 500000 },
    { id: 2, name: 'Bukit Malimbu', price: 500000 },
    // tambahkan data lainnya
  ];

  return (
    <AdminLayout showSidebar={true}>
      <div className="container mx-auto p-6">
        <DestinationList destinations={destinations} />
      </div>
    </AdminLayout>
  );
};

export default DestinationsPage;
