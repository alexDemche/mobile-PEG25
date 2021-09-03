import create from 'zustand';

import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage.clear();

let levelsStore = set => ({
  points: 0,
  increasePoints: () => set(state => ({ points: state.points + 1 })),
  decreasePoints: () =>
    set(state => ({ points: state.points > 0 && state.points - 1 })),
  resetPoints: () => set({ points: 0 }),
});

levelsStore = persist(levelsStore, {
  name: 'levels-storage',
  getStorage: () => AsyncStorage,
});

export const useLevelsStore = create(levelsStore);
