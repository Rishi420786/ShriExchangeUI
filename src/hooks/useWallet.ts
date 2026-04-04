'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { walletService } from '@/services/walletService';

export const useWallet = () => useQuery({ queryKey: ['wallet'], queryFn: walletService.getWallet });

export const useWalletRequestMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: walletService.createRequest,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wallet'] })
  });
};

export const useWalletAdmin = () =>
  useQuery({ queryKey: ['admin-wallet-requests'], queryFn: walletService.getWalletRequests });
