import { create } from 'zustand';

interface Selection {
  matchId: number;
  selectionId: number;
  selection: string;
  odd: number;
}

interface BetSlipState {
  currentSelection?: Selection;
  stake: number;
  setSelection: (selection: Selection) => void;
  setStake: (stake: number) => void;
  clearSlip: () => void;
}

export const useBetSlipStore = create<BetSlipState>((set) => ({
  currentSelection: undefined,
  stake: 0,
  setSelection: (currentSelection) => set({ currentSelection, stake: 0 }),
  setStake: (stake) => set({ stake }),
  clearSlip: () => set({ currentSelection: undefined, stake: 0 })
}));
