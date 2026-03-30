'use client';

import { FormEvent, useState } from 'react';
import { matchService } from '@/services/matchService';
import RequestApprovalTable from './RequestApprovalTable';

export default function AdminDashboard() {
  const [matchPayload, setMatchPayload] = useState({ homeTeam: '', awayTeam: '', startTime: '' });
  const [oddsPayload, setOddsPayload] = useState({ matchId: 0, label: '', odd: 1 });
  const [resultPayload, setResultPayload] = useState({ matchId: 0, result: '' });

  const onCreateMatch = async (event: FormEvent) => {
    event.preventDefault();
    await matchService.createMatch(matchPayload);
    setMatchPayload({ homeTeam: '', awayTeam: '', startTime: '' });
  };

  const onSetOdds = async (event: FormEvent) => {
    event.preventDefault();
    await matchService.setOdds(oddsPayload);
    setOddsPayload({ matchId: 0, label: '', odd: 1 });
  };

  const onSetResult = async (event: FormEvent) => {
    event.preventDefault();
    await matchService.setResult(resultPayload);
    setResultPayload({ matchId: 0, result: '' });
  };

  return (
    <div className="space-y-8">
      <RequestApprovalTable />
      <div className="grid gap-6 md:grid-cols-3">
        <form onSubmit={onCreateMatch} className="space-y-3 rounded-lg border border-border bg-panel p-4">
          <h3 className="font-semibold">Create Match</h3>
          <input
            placeholder="Home Team"
            value={matchPayload.homeTeam}
            onChange={(event) => setMatchPayload((prev) => ({ ...prev, homeTeam: event.target.value }))}
          />
          <input
            placeholder="Away Team"
            value={matchPayload.awayTeam}
            onChange={(event) => setMatchPayload((prev) => ({ ...prev, awayTeam: event.target.value }))}
          />
          <input
            type="datetime-local"
            value={matchPayload.startTime}
            onChange={(event) => setMatchPayload((prev) => ({ ...prev, startTime: event.target.value }))}
          />
          <button className="rounded bg-accent px-3 py-2 font-semibold text-slate-900">Create</button>
        </form>

        <form onSubmit={onSetOdds} className="space-y-3 rounded-lg border border-border bg-panel p-4">
          <h3 className="font-semibold">Set Odds</h3>
          <input
            type="number"
            placeholder="Match ID"
            value={oddsPayload.matchId || ''}
            onChange={(event) => setOddsPayload((prev) => ({ ...prev, matchId: Number(event.target.value) }))}
          />
          <input
            placeholder="Selection Label"
            value={oddsPayload.label}
            onChange={(event) => setOddsPayload((prev) => ({ ...prev, label: event.target.value }))}
          />
          <input
            type="number"
            step="0.01"
            placeholder="Odd"
            value={oddsPayload.odd}
            onChange={(event) => setOddsPayload((prev) => ({ ...prev, odd: Number(event.target.value) }))}
          />
          <button className="rounded bg-accent px-3 py-2 font-semibold text-slate-900">Save</button>
        </form>

        <form onSubmit={onSetResult} className="space-y-3 rounded-lg border border-border bg-panel p-4">
          <h3 className="font-semibold">Set Match Result</h3>
          <input
            type="number"
            placeholder="Match ID"
            value={resultPayload.matchId || ''}
            onChange={(event) => setResultPayload((prev) => ({ ...prev, matchId: Number(event.target.value) }))}
          />
          <input
            placeholder="Result"
            value={resultPayload.result}
            onChange={(event) => setResultPayload((prev) => ({ ...prev, result: event.target.value }))}
          />
          <button className="rounded bg-accent px-3 py-2 font-semibold text-slate-900">Save</button>
        </form>
      </div>
    </div>
  );
}
