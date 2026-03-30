'use client';

import { usePlaceBet } from '@/hooks/useBets';
import { useBetSlipStore } from '@/store/betSlipStore';

export default function BetSlip() {
  const { currentSelection, stake, setStake, clearSlip } = useBetSlipStore();
  const placeBetMutation = usePlaceBet();

  if (!currentSelection) {
    return <aside className="rounded-lg border border-border bg-panel p-4">Pick an odd to build your bet slip.</aside>;
  }

  const potentialWin = currentSelection.odd * stake;

  const submit = async () => {
    await placeBetMutation.mutateAsync({
      matchId: currentSelection.matchId,
      selectionId: currentSelection.selectionId,
      stake
    });
    clearSlip();
  };

  return (
    <aside className="space-y-3 rounded-lg border border-border bg-panel p-4">
      <h3 className="font-semibold">Bet Slip</h3>
      <div>
        <p className="text-sm text-slate-400">Selection</p>
        <p>{currentSelection.selection}</p>
      </div>
      <div>
        <p className="text-sm text-slate-400">Odds</p>
        <p>{currentSelection.odd.toFixed(2)}</p>
      </div>
      <div>
        <label className="mb-1 block text-sm text-slate-400">Stake (Points)</label>
        <input
          type="number"
          min={0}
          value={stake}
          onChange={(event) => setStake(Number(event.target.value))}
          className="w-full"
        />
      </div>
      <p className="text-sm">Potential Win: {Number.isFinite(potentialWin) ? potentialWin.toFixed(2) : '0.00'} pts</p>
      <button
        onClick={submit}
        disabled={stake <= 0 || placeBetMutation.isPending}
        className="w-full rounded-md bg-accent px-3 py-2 font-semibold text-slate-900"
      >
        {placeBetMutation.isPending ? 'Placing...' : 'Place Bet'}
      </button>
    </aside>
  );
}
