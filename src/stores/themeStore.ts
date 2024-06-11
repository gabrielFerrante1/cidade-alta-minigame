import { create } from 'zustand'
import { Theme } from '@/types/Theme'

export type ThemeState = {
    theme: Theme,
}

export type ThemeActions = {
    setTheme: (theme: Theme) => void,
}

export type ThemeStore = ThemeState & ThemeActions

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: 'dark',
    setTheme: (theme) => set({ theme }),
}))