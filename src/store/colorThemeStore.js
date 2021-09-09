import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage.clear();

let colorThemeStore = set => ({
  isDarkMode: null,
  isUserToggledMode: null,
  toggleDarkMode: () =>
    set(state => ({ isDarkMode: !state.isDarkMode, isUserToggledMode: true })),
  setIsDarkMode: boolean => set(state => ({ isDarkMode: boolean })),
});

colorThemeStore = persist(colorThemeStore, {
  name: 'color-theme-storage',
  getStorage: () => AsyncStorage,
});

export const useColorThemeStore = create(colorThemeStore);
