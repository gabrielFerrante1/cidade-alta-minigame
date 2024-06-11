import { Card } from "../components/Card"

export const Home = () => {
    return (
        <main>
            <Card>
                <div className="flex flex-col items-center gap-12 py-8">
                    <div className="text-center">
                        <p className="text-slate-300 text-lg font-bold">
                            Seja bem-vindo(a) ao Cidade Alta Minigame!
                        </p>

                        <small className="text-slate-400 font-bold ">Clique no botão abaixo para iniciar 👇</small>
                    </div>

                    <button className="btn-primary w-4/5">
                        Iniciar
                    </button>
                </div>
            </Card>
        </main>
    )
}