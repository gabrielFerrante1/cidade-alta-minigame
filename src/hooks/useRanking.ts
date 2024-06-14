import { GameRanking } from "@/types/Game"
import { useCallback } from "react";

export const useRanking = () => {
    const getRankings = useCallback(() => {
        const data = localStorage.getItem('rankings')

        if (data) {
            // Validate JSON data format and remove invalid data
            if (!/^\[\s*(\{"time":[^"]*,"attempts":[^,]*,"date":"[^"]*"\}\s*,\s*)*\{"time":[^"]*,"attempts":[^,]*,"date":"[^"]*"\}\s*\]$/.test(data)) {
                localStorage.removeItem('rankings')
                return;
            }

            return JSON.parse(data) as GameRanking[]
        }
    }, []);

    const setRankings = useCallback((data: GameRanking) => {
        let rankings = getRankings()

        // Limit to 3 rankings
        if (rankings && rankings.length > 2) {
            rankings.pop()
        }

        if (rankings) {
            rankings.push(data)
        } else {
            rankings = [data]
        }

        // Sort by time in ascending order
        rankings.sort((a, b) => a.time - b.time)

        localStorage.setItem('rankings', JSON.stringify(rankings))
    }, [getRankings])

    return { getRankings, setRankings }
}