import apiClient from './apiClient';

export interface Bet {
  id: number;
  matchName: string;
  selection: string;
  odd: number;
  stake: number;
  status: string;
  potentialWin: number;
}

export const betService = {
  async placeBet(payload: { matchId: number; selectionId: number; stake: number }) {
    const { data } = await apiClient.post('/api/bets', payload);
    return data;
  },
  async getMyBets() {
    const { data } = await apiClient.get<Bet[]>('/api/bets/my');
    return data;
  }
};
