import { Card } from "@/components/Card"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <main>
            <Card>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col justify-center items-center gap-16 py-8 h-full"
                >
                    <div className="text-center">
                        <p className="text-slate-600 dark:text-slate-300 text-lg font-bold">
                            Página não encontrada
                        </p>

                        <small className="text-slate-500 dark:text-slate-400 font-bold">Clique no botão abaixo para voltar a página inicial 👇</small>
                    </div>

                    <Link
                        to="/"
                        className="btn-primary w-4/5"
                    >
                        Início
                    </Link>
                </motion.div>
            </Card>
        </main>
    )
}