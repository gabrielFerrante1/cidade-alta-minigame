import { AreaChart, RotateCcw } from "lucide-react"
import { useGameStore } from "@/stores/gameStore"
import { motion, AnimatePresence } from "framer-motion"

export const Footer = () => {
    const { status, reset } = useGameStore()

    return (
        <div className="flex items-center gap-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1"
            >
                <button className="btn-secondary w-full">
                    <AreaChart className="size-5" />
                    Ranking
                </button>
            </motion.div>

            <AnimatePresence mode="popLayout">
                {status === "playing" || status === "paused" ?
                    <motion.button
                        initial={{ opacity: 0, x: 120 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 240 }}
                        className="btn-primary duration-0 flex-1"
                        onClick={reset}
                    >
                        <RotateCcw className="size-5" strokeWidth={2.5} />
                        Reiniciar
                    </motion.button>
                    : ''}
            </AnimatePresence>
        </div >
    )
}