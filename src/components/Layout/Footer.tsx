import { AreaChart, RotateCcw } from "lucide-react"
import { useGameStore } from "../../stores/gameStore"
import { motion, AnimatePresence } from "framer-motion"

export const Footer = () => {
    const { status } = useGameStore()

    return (
        <div className="flex items-center gap-4">
            <button className="btn-secondary flex-1" >
                <AreaChart className="size-5" />
                Ranking
            </button>

            <AnimatePresence>
                {status === "playing" &&
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        className="btn-primary duration-0 flex-1"
                    >
                        <RotateCcw className="size-5" strokeWidth={2.5} />
                        Reiniciar
                    </motion.button>
                }
            </AnimatePresence>
        </div >
    )
}