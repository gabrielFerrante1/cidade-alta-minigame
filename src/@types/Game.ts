export type GameStatus = "waiting" | "playing" | "finished" | "paused";
export type GameResult = "win" | "lose";

export type Game = {
    status: GameStatus,
    result: GameResult | null,
    time: number,
    sequence: string[] | null,
}