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
                        className="flex flex-col justify-center items-center gap-8 py-8 h-full"
                    >
                        <p className="text-slate-600 dark:text-slate-300 text-lg font-bold text-center">
                            Ranking de jogos concluídos
                        </p>

                        <div className="w-full px-12 h-full">
                            <table className="w-full border-separate border-spacing-0 text-slate-600 dark:text-slate-300 font-bold text-center">
                                <thead className="bg-slate-300/20 dark:bg-slate-600/35">
                                    <tr>
                                        <th className="rounded-tl-lg border-y-2 border-l-2 border-amber-400 p-1.5">Tempo de Jogo</th>
                                        <th className="border-2 border-amber-400">Tentativas</th>
                                        <th className="rounded-tr-lg border-y-2 border-r-2 border-amber-400">Data</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-slate-300/20 dark:bg-slate-500/20">
                                    {rankings.map((ranking, index) => (
                                        <tr key={index} className="group">
                                            <td className="group-last:rounded-bl-lg border-l-2 border-b-2 border-amber-400 p-2">{ranking.time}s</td>
                                            <td className="border-x-2 border-b-2 border-amber-400">{ranking.attempts}</td>
                                            <td className="group-last:rounded-br-lg border-r-2 border-b-2 border-amber-400">{ranking.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                }
            </Card>
        </main>
    )
}