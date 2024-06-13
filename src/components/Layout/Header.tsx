import { CircleX, Moon, Pause, Play, PowerOff, Sun, Timer } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"
import { useGameStore } from "@/stores/gameStore"
import { motion, AnimatePresence } from "framer-motion"

export const Header = () => {
    const { theme, toggleTheme } = useTheme()
    const { time, timeLimit, attempts, status, pause, resume, stop } = useGameStore()

    return (
        <header className="px-1 space-y-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2"
                        title="Tempo restante"
                    >
                        <Timer className="size-8 text-amber-400" />

                        <span className="text-slate-600 dark:text-slate-200 font-bold mt-1">
                            {new Date(time * 1000).toISOString().substring(14, 19)}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-2"
                        title="Tentativas"
                    >
                        <CircleX className="size-6 text-red-400" />

                        <span className="text-slate-600 dark:text-slate-200 font-bold mt-1">
                            {attempts}
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-8"
                >
                    {theme === 'light' ?
                        <Moon
                            className="size-6 cursor-pointer duration-300 text-slate-500 hover:text-amber-400"
                            strokeWidth={2.5}
                            onClick={toggleTheme}
                        />
                        :
                        <Sun
                            className="size-6 cursor-pointer duration-300 text-slate-300 hover:text-amber-400"
                            strokeWidth={2.5}
                            onClick={toggleTheme}
                        />
                    }

                    <AnimatePresence mode="popLayout">
                        {status === 'playing' || status === 'paused' ?
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-8"
                            >
                                {status === 'paused' ?
                                    <Play
                                        className="size-6 cursor-pointer duration-300 text-slate-500 dark:text-slate-300 hover:text-amber-400"
                                        onClick={resume}
                                    />
                                    :
                                    <Pause
                                        className="size-6 cursor-pointer duration-300 text-slate-500 dark:text-slate-300 hover:text-amber-400"
                                        onClick={pause}
                                    />
                                }

                                <PowerOff
                                    className="size-6 cursor-pointer duration-300 text-red-500 hover:text-red-400"
                                    strokeWidth={2.5}
                                    onClick={stop}
                                />
                            </motion.div>
                            : ''}
                    </AnimatePresence>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className="w-full h-2 bg-slate-300 dark:bg-slate-700 drop-shadow-sm rounded-md duration-150">
                    <div
                        className={`h-full ${time !== 0 && time <= 2 ? 'bg-red-500' : 'bg-amber-400'} rounded-md duration-1000 ease-linear`}
                        style={{ width: `${time ? ((time / timeLimit) * 100) : 100}%` }}
                    />
                </div>
            </motion.div>
        </header>

    )
}