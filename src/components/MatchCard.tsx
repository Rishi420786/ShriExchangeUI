import { Match } from '@/services/matchService';

interface Props {
  match: Match;
  onSelect: (matchId: number) => void;
}

export default function MatchCard({ match, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(match.id)}
      className="w-full rounded-lg border border-border bg-panel p-4 text-left hover:border-accent"
    >
      <p className="text-sm text-slate-400">{new Date(match.startTime).toLocaleString()}</p>
      <h3 className="mt-1 text-lg font-semibold">
        {match.homeTeam} vs {match.awayTeam}
      </h3>
      <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">{match.status}</p>
    </button>
  );
}
