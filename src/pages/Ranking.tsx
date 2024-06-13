import { Card } from "@/components/Card"
import { EmptyRanking } from "@/components/EmptyRankings"
import { useRanking } from "@/hooks/useRanking"
import { GameRanking } from "@/types/Game"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Leaderboard } from "@/components/Leaderboard"

export const Ranking = () => {
    const [rankings, setRankings] = useState<GameRanking[]>([])

    const { getRankings } = useRanking()

    useEffect(() => {
        const data = getRankings()

        if (data) {
            setRankings(data)
        }
    }, [])

    return (
        <main>
            <Card>
                {rankings.length === 0 ?
                    <EmptyRanking />
                    :
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col justify-center items-center gap-8 py-8 h-full"
                    >
                        <p className="text-slate-600 dark:text-slate-300 text-lg font-bold text-center">
                            Ranking de jogos concluídos
                        </p>

                        <div className="w-full px-12 flex-1">
                            <Leaderboard
                                rankings={rankings}
                            />
                        </div>
                    </motion.div>
                }
            </Card>
        </main>
    )
}