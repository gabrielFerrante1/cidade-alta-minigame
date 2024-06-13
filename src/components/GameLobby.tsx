import { useGameStore } from "@/stores/gameStore"
import { motion } from "framer-motion"

export const GameLobby = () => {
    const { start } = useGameStore()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-center items-center gap-16 py-8 h-full"
        >
            <div className="text-center">
                <p className="text-slate-600 dark:text-slate-300 text-lg font-bold">
                    Seja bem-vindo(a) ao Cidade Alta Minigame!
                </p>

                <small className="text-slate-500 dark:text-slate-400 font-bold">
                    Clique no botão abaixo para iniciar 👇
                </small>
            </div>

            <button
                className="btn-primary w-4/5"
                onClick={start}
            >
                Iniciar
            </button>
        </motion.div>
    )
}