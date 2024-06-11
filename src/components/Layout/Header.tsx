import { Moon, PowerOff, Sun, Timer } from "lucide-react"
import { useTheme } from "../../hooks/useTheme"

export const Header = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <header className="px-1 space-y-4">
            <div className="flex justify-between items-center">
                <div
                    className="flex items-center gap-2"
                    title="Tempo restante"
                >
                    <Timer className="size-8 text-amber-400" />

                    <span className="text-slate-600 dark:text-slate-200 font-bold mt-1">00:00</span>
                </div>

                <div className="flex items-center gap-6">
                    {theme === 'light' ?
                        <Moon
                            className="size-6 cursor-pointer text-slate-500"
                            strokeWidth={2.5}
                            onClick={toggleTheme}
                        />
                        :
                        <Sun
                            className="size-6 cursor-pointer text-slate-300"
                            strokeWidth={2.5}
                            onClick={toggleTheme}
                        />
                    }

                    <PowerOff
                        className="size-6 cursor-pointer text-red-500"
                        strokeWidth={2.5}
                    />
                </div>
            </div>

            <div className="w-full h-2 bg-slate-300 dark:bg-slate-700 drop-shadow-sm rounded-md">
                <div
                    className="h-full bg-amber-400 rounded-md duration-700"
                    style={{ width: '80%' }}
                />
            </div>
        </header>

    )
}