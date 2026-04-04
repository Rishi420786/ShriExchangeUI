'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useWalletAdmin } from '@/hooks/useWallet';
import { walletService } from '@/services/walletService';

export default function RequestApprovalTable() {
  const { data } = useWalletAdmin();
  const queryClient = useQueryClient();

  const refresh = () => queryClient.invalidateQueries({ queryKey: ['admin-wallet-requests'] });

  const approve = async (requestId: number) => {
    await walletService.approveRequest(requestId);
    refresh();
  };

  const reject = async (requestId: number) => {
    await walletService.rejectRequest(requestId);
    refresh();
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="min-w-full bg-panel text-sm">
        <thead>
          <tr className="border-b border-border text-left text-slate-400">
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((request) => (
            <tr key={request.id} className="border-b border-border">
              <td className="px-4 py-3">{request.id}</td>
              <td className="px-4 py-3 capitalize">{request.type}</td>
              <td className="px-4 py-3">{request.amount}</td>
              <td className="px-4 py-3 capitalize">{request.status}</td>
              <td className="flex gap-2 px-4 py-3">
                <button onClick={() => approve(request.id)} className="rounded bg-emerald-500 px-3 py-1 text-slate-900">
                  Approve
                </button>
                <button onClick={() => reject(request.id)} className="rounded bg-rose-500 px-3 py-1 text-white">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
