'use client';

import Navbar from '@/components/Navbar';
import { useMyBets } from '@/hooks/useBets';

export default function MyBetsPage() {
  const { data } = useMyBets();

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl p-4">
        <h1 className="mb-4 text-2xl font-bold">My Bets</h1>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="min-w-full bg-panel text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-400">
                <th className="px-4 py-3">Match</th>
                <th className="px-4 py-3">Selection</th>
                <th className="px-4 py-3">Odds</th>
                <th className="px-4 py-3">Stake</th>
                <th className="px-4 py-3">Potential Win</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((bet) => (
                <tr key={bet.id} className="border-b border-border">
                  <td className="px-4 py-3">{bet.matchName}</td>
                  <td className="px-4 py-3">{bet.selection}</td>
                  <td className="px-4 py-3">{bet.odd.toFixed(2)}</td>
                  <td className="px-4 py-3">{bet.stake}</td>
                  <td className="px-4 py-3">{bet.potentialWin.toFixed(2)}</td>
                  <td className="px-4 py-3 capitalize">{bet.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
