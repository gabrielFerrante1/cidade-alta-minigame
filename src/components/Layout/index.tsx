import { useEffect } from 'react';
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { useTheme } from "@/hooks/useTheme";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    const { initTheme } = useTheme();

    useEffect(() => {
        initTheme();
    }, [initTheme]);

    return (
        <div className='bg-slate-200 dark:bg-slate-900 h-screen flex items-center justify-center duration-150'>
            <div className="sm:w-[600px] select-none space-y-8 px-4 md:px-0">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};
