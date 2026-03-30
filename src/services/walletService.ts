import apiClient from './apiClient';

export interface Wallet {
  balance: number;
  requests: WalletRequest[];
}

export interface WalletRequest {
  id: number;
  type: 'credit' | 'withdraw';
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
}

export const walletService = {
  async getWallet() {
    const { data } = await apiClient.get<Wallet>('/api/wallet');
    return data;
  },
  async createRequest(payload: { amount: number; type: 'credit' | 'withdraw' }) {
    return apiClient.post('/api/wallet/request', payload);
  },
  async getWalletRequests() {
    const { data } = await apiClient.get<WalletRequest[]>('/api/admin/wallet-requests');
    return data;
  },
  async approveRequest(requestId: number) {
    return apiClient.post('/api/admin/approve-request', { requestId });
  },
  async rejectRequest(requestId: number) {
    return apiClient.post('/api/admin/reject-request', { requestId });
  }
};
