import AdminDashboard from '@/components/AdminDashboard';
import Navbar from '@/components/Navbar';

export default function AdminPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl p-4">
        <h1 className="mb-4 text-2xl font-bold">Admin Panel</h1>
        <AdminDashboard />
      </main>
    </div>
  );
}
