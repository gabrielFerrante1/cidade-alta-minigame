import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { useTheme } from "../../hooks/useTheme"
import { useEffect } from "react"

export const Layout = () => {
    const { initTheme } = useTheme()

    useEffect(() => {
        initTheme()
    }, [])

    return (
        <div className='bg-slate-200 dark:bg-slate-900 h-screen flex items-center justify-center'>
            <div className="sm:w-[600px] select-none space-y-5">
                <Header />

                <Outlet />
            </div>
        </div>
    )
}