'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { betService } from '@/services/betService';

export const useMyBets = () => useQuery({ queryKey: ['my-bets'], queryFn: betService.getMyBets });

export const usePlaceBet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: betService.placeBet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-bets'] });
      queryClient.invalidateQueries({ queryKey: ['wallet'] });
    }
  });
};
