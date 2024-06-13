export type GameStatus = "waiting" | "playing" | "finished" | "paused";
export type GameResult = { type: "win" | "lose", attempts: number };

export type Game = {
    status: GameStatus,
    result: GameResult | null,
    time: number,
    timeLimit: number,
    attempts: number,
    sequence: string[],
    selectedCharacters: string[]
}

export type GameRanking = Omit<GameResult, "type"> & {
    time: number,
    date: string
} 