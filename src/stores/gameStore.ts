import { create } from 'zustand'
import { Game } from '../@types/Game'

export type GameState = Game

export type GameActions = {
    reset: () => void,
    pause: () => void,
    resume: () => void
}

export type GameStore = GameState & GameActions

export const useGameStore = create<GameStore>((set) => ({
    status: 'waiting',
    result: null,
    time: 0,
    sequence: null,
    reset: () => set({ status: 'waiting', result: null, time: 0, sequence: null }),
    pause: () => set({ status: 'paused' }),
    resume: () => set({ status: 'playing' })
}))