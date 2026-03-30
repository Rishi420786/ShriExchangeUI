'use client';

import { useEffect, useState } from 'react';
import BetSlip from '@/components/BetSlip';
import MatchCard from '@/components/MatchCard';
import Navbar from '@/components/Navbar';
import OddsGrid from '@/components/OddsGrid';
import { useMatches, useOdds } from '@/hooks/useMatches';
import { getOddsConnection } from '@/lib/signalr';
import { OddSelection } from '@/services/matchService';
import { useBetSlipStore } from '@/store/betSlipStore';

export default function SportsPage() {
  const [selectedMatchId, setSelectedMatchId] = useState<number>();
  const { data: matches } = useMatches();
  const { data: odds, refetch } = useOdds(selectedMatchId);
  const setSelection = useBetSlipStore((state) => state.setSelection);

  useEffect(() => {
    const connection = getOddsConnection();

    connection.on('oddsUpdated', (matchId: number) => {
      if (matchId === selectedMatchId) {
        refetch();
      }
    });

    connection.start().catch(() => undefined);

    return () => {
      connection.off('oddsUpdated');
    };
  }, [selectedMatchId, refetch]);

  const onPick = (selection: OddSelection) => {
    if (!selectedMatchId) {
      return;
    }

    setSelection({
      matchId: selectedMatchId,
      selectionId: selection.id,
      selection: selection.label,
      odd: selection.odd
    });
  };

  return (
    <div>
      <Navbar />
      <main className="mx-auto grid max-w-7xl gap-6 p-4 lg:grid-cols-3">
        <section className="space-y-3 lg:col-span-2">
          <h1 className="text-2xl font-bold">Sports</h1>
          <div className="grid gap-3 md:grid-cols-2">
            {matches?.map((match) => <MatchCard key={match.id} match={match} onSelect={setSelectedMatchId} />)}
          </div>
          {odds ? (
            <div className="space-y-2 rounded-lg border border-border bg-panel p-4">
              <h2 className="font-semibold">Available Odds</h2>
              <OddsGrid selections={odds.selections} onPick={onPick} />
            </div>
          ) : null}
        </section>
        <BetSlip />
      </main>
    </div>
  );
}
