import { OddSelection } from '@/services/matchService';

interface Props {
  selections: OddSelection[];
  onPick: (selection: OddSelection) => void;
}

export default function OddsGrid({ selections, onPick }: Props) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      {selections.map((selection) => (
        <button
          key={selection.id}
          onClick={() => onPick(selection)}
          className="rounded-md border border-border bg-slate-900 p-3 hover:border-accent"
        >
          <p className="font-medium">{selection.label}</p>
          <p className="text-accent">{selection.odd.toFixed(2)}</p>
        </button>
      ))}
    </div>
  );
}
