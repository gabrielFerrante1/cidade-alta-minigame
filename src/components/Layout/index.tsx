import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className='bg-slate-900 h-screen flex items-center justify-center'>
            <Outlet />
        </div>
    )
}