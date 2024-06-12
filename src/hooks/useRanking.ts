import { GameRanking } from "@/types/Game"

export const useRanking = () => {
    const getRankings = () => {
        const data = localStorage.getItem('rankings')

        if (data) {
            if (!/^\[\s*(\{"type":"[^"]*","attempts":[^,]*,"date":"[^"]*"\}\s*,\s*)*\{"type":"[^"]*","attempts":[^,]*,"date":"[^"]*"\}\s*\]$/.test(data)) {
                localStorage.removeItem('rankings')
                return
            }

            return JSON.parse(data)
        }
    }

    const setRankings = (data: GameRanking) => {
        let rankings: GameRanking[] | undefined = getRankings()

        if (rankings) {
            rankings.push(data)
        } else {
            rankings = [data]
        }

        localStorage.setItem('rankings', JSON.stringify(rankings))
    }

    return { getRankings, setRankings }
}