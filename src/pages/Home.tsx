import { Card } from "@/components/Card"
import { GameEnd } from "@/components/GameEnd"
import { GameLobby } from "@/components/GameLobby"
import { GamePlay } from "@/components/GamePlay"
import { useGameStore } from "@/stores/gameStore"

export const Home = () => {
    const { status } = useGameStore()

    return (
        <main>
            <Card>
                {status === 'waiting' ?
                    <GameLobby />
                    : status === 'playing' || status === 'paused' ?
                        <GamePlay />
                        : status === 'finished' ?
                            <GameEnd />
                            : ''
                }
            </Card>
        </main>
    )
}