'use client';

import { FormEvent, useState } from 'react';
import { useWallet, useWalletRequestMutation } from '@/hooks/useWallet';

export default function WalletPanel({ type = 'credit' }: { type?: 'credit' | 'withdraw' }) {
  const { data } = useWallet();
  const mutation = useWalletRequestMutation();
  const [amount, setAmount] = useState(0);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await mutation.mutateAsync({ amount, type });
    setAmount(0);
  };

  return (
    <section className="space-y-4 rounded-lg border border-border bg-panel p-4">
      <div>
        <p className="text-sm text-slate-400">Current Balance</p>
        <h3 className="text-2xl font-bold text-accent">{data?.balance ?? 0} pts</h3>
      </div>
      <form onSubmit={submit} className="space-y-3">
        <label className="block text-sm text-slate-400">{type === 'credit' ? 'Add points' : 'Withdraw points'}</label>
        <input
          type="number"
          min={1}
          required
          value={amount || ''}
          onChange={(event) => setAmount(Number(event.target.value))}
          className="w-full"
        />
        <button type="submit" className="rounded-md bg-accent px-4 py-2 font-semibold text-slate-900">
          Submit Request
        </button>
      </form>
      <div>
        <h4 className="mb-2 font-semibold">Recent Requests</h4>
        <ul className="space-y-2 text-sm">
          {data?.requests?.map((request) => (
            <li key={request.id} className="rounded bg-slate-900 px-3 py-2">
              {request.type} • {request.amount} pts •{' '}
              <span className="capitalize text-accent">{request.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
