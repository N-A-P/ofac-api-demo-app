import {create} from 'zustand';

// const initState = {
//   data: [],
//   refreshing: false
// }
export const useTerroisStore = create(set => ({
  data: [],
  refreshing: false,
  refresh: (v: boolean) => set((s: any) => ({refreshing: v, data: s.data})),
  setData: (d: any) => set((s: any) => ({data: d, refreshing: s.refreshing})),
  // increasePopulation: () => set((state:any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({bears: 0}),
}));
