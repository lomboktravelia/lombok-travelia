import React from 'react';
import Sidebar from '../../components/sidebar'; 

const AdminLayout = ({ children, showSidebar }) => {
  console.log('Render AdminLayout'); // Debugging
  return (
    <div className="flex">
      {showSidebar && (
        <div className="flex-initial">
          <Sidebar />
        </div>
      )}
      <div className="flex-1">
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
