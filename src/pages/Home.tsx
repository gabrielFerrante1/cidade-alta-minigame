import { Card } from "../components/Card"
import { GamePlay } from "../components/GamePlay"
import { GameLobby } from "../components/GameLobby"
import { useGameStore } from "../stores/gameStore"
import { GameEnd } from "../components/GameEnd"

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