import apiClient from './apiClient';

export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  startTime: string;
  status: string;
}

export interface OddSelection {
  id: number;
  label: string;
  odd: number;
}

export interface MatchOdds {
  matchId: number;
  selections: OddSelection[];
}

export const matchService = {
  async getMatches() {
    const { data } = await apiClient.get<Match[]>('/api/matches');
    return data;
  },
  async getOdds(matchId: number) {
    const { data } = await apiClient.get<MatchOdds>(`/api/odds/${matchId}`);
    return data;
  },
  async createMatch(payload: Partial<Match>) {
    return apiClient.post('/api/admin/matches', payload);
  },
  async setOdds(payload: { matchId: number; label: string; odd: number }) {
    return apiClient.post('/api/admin/odds', payload);
  },
  async setResult(payload: { matchId: number; result: string }) {
    return apiClient.post('/api/admin/matches/result', payload);
  }
};
