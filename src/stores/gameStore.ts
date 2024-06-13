import { create } from 'zustand'
import { Game } from '@/types/Game'

export type GameState = Game

export type GameActions = {
    start: () => void,
    stop: () => void,
    reset: () => void,
    pause: () => void,
    resume: () => void,
    lobby: () => void,
    addSelectedCharacter: (character: string) => void,
    setStatus: (status: Game['status']) => void,
    setResult: (result: Game['result']) => void,
    setTime: (time: Game['time']) => void,
    setTimeLimit: (timeLimit: Game['timeLimit']) => void,
    setAttempts: (attempts: Game['attempts']) => void,
    setSequence: (sequence: Game['sequence']) => void
}

export type GameStore = GameState & GameActions

export const useGameStore = create<GameStore>((set) => ({
    status: 'waiting',
    result: null,
    time: 0,
    timeLimit: 0,
    attempts: 0,
    sequence: [],
    selectedCharacters: [],
    addSelectedCharacter: (character) => set(state => ({ selectedCharacters: [...state.selectedCharacters, character] })),
    start: () => set({ status: 'playing' }),
    stop: () => set({ status: 'finished', result: null, time: 0, sequence: [], selectedCharacters: [], attempts: 0 }),
    reset: () => set(state => ({ status: 'playing', result: null, time: state.timeLimit, sequence: [], selectedCharacters: [], attempts: 0 })),
    pause: () => set({ status: 'paused' }),
    resume: () => set({ status: 'playing' }),
    lobby: () => set({ status: 'waiting' }),
    setStatus: (status) => set({ status }),
    setResult: (result) => set({ result }),
    setTime: (time) => set({ time }),
    setTimeLimit: (timeLimit) => set({ timeLimit }),
    setAttempts: (attempts) => set({ attempts }),
    setSequence: (sequence) => set({ sequence })
}))