import Navbar from '@/components/Navbar';
import WalletPanel from '@/components/WalletPanel';

export default function WithdrawPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-3xl p-4">
        <h1 className="mb-4 text-2xl font-bold">Withdraw Request</h1>
        <WalletPanel type="withdraw" />
      </main>
    </div>
  );
}
