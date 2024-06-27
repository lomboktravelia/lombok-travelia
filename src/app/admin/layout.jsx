import Sidebar from '../../components/sidebar';
import Dashboard from './page'; 
import '../../app/globals.css';

export default function AdminDashboardLayout() {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-grow p-10 bg-white">
          <Dashboard />
        </main>
      </body>
    </html>
  );
}
