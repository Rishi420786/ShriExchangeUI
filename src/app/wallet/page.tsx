import Navbar from '@/components/Navbar';
import WalletPanel from '@/components/WalletPanel';

export default function WalletPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-3xl p-4">
        <h1 className="mb-4 text-2xl font-bold">Wallet</h1>
        <WalletPanel type="credit" />
      </main>
    </div>
  );
}
