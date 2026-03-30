'use client';

import { useQuery } from '@tanstack/react-query';
import { matchService } from '@/services/matchService';

export const useMatches = () =>
  useQuery({
    queryKey: ['matches'],
    queryFn: matchService.getMatches
  });

export const useOdds = (matchId?: number) =>
  useQuery({
    queryKey: ['odds', matchId],
    queryFn: () => matchService.getOdds(matchId as number),
    enabled: Boolean(matchId)
  });
