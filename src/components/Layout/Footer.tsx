import { AreaChart, RotateCcw } from "lucide-react"
import { useGameStore } from "../../stores/gameStore"

export const Footer = () => {
    const { status } = useGameStore()

    return (
        <div className="flex items-center gap-4">
            <button className="btn-secondary flex-1">
                <AreaChart className="size-5" />
                Ranking
            </button>

            <button className="btn-primary flex-1">
                <RotateCcw className="size-5" strokeWidth={2.5} />
                Recomeçar
            </button>
        </div>
    )
}