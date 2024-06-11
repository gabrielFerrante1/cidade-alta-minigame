import { useGameStore } from "@/stores/gameStore"
import { motion } from "framer-motion"

export const GameEnd = () => {
    const { result, start, lobby } = useGameStore()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col justify-center items-center gap-16 py-8 h-full"
        >
            <div className="text-center">
                <p className="text-slate-600 dark:text-slate-300 text-lg font-bold">
                    {result && result.type == 'win' ? 'Parabéns, você venceu!' : 'Infelizmente, você perdeu!'}
                </p>

                <small className="text-slate-500 dark:text-slate-400 font-bold">Clique no botão abaixo para jogar novamente 👇</small>
            </div>

            <div className="flex justify-between gap-4 w-4/5">
                <button
                    className="btn-secondary flex-1"
                    onClick={lobby}
                >
                    Sair
                </button>

                <button
                    className="btn-primary flex-1"
                    onClick={start}
                >
                    Jogar novamente
                </button>
            </div>
        </motion.div>
    )
}