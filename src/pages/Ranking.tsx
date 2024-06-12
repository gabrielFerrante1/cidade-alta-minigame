import { Card } from "@/components/Card"
import { EmptyRanking } from "@/components/EmptyRanking"
import { useRanking } from "@/hooks/useRanking"
import { GameRanking } from "@/types/Game"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

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
                        className="flex flex-col justify-center items-center gap-16 py-8 h-full"
                    >
                        <p className="text-slate-600 dark:text-slate-300 text-lg font-bold text-center">
                            Ranking de jogos concluídos
                        </p>

                    </motion.div>
                }
            </Card>
        </main>
    )
}