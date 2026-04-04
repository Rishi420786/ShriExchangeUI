import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-3 rounded-lg border border-border bg-panel p-4 text-slate-300">
          Welcome to ShriExchange. Predict sports outcomes with points, manage your wallet requests, and monitor your bets.
        </p>
      </main>
    </div>
  );
}
