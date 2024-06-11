import { useGameStore } from "../stores/gameStore"

export const GameEnd = () => {
    const { result, start } = useGameStore()

    return (
        <div className="flex flex-col justify-center items-center gap-16 py-8 h-full">
            <div className="text-center">
                <p className="text-slate-600 dark:text-slate-300 text-lg font-bold">
                    {result && result.type == 'win' ? 'Parabéns, você venceu!' : 'Infelizmente, você perdeu!'}
                </p>

                <small className="text-slate-500 dark:text-slate-400 font-bold">Clique no botão abaixo para jogar novamente 👇</small>
            </div>

            <button
                className="btn-primary w-4/5"
                onClick={start}
            >
                Jogar novamente
            </button>
        </div>
    )
}