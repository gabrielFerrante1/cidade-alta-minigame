import { useThemeStore } from "@/stores/themeStore"
import { useCallback } from "react"

export const useTheme = () => {
    const { theme, setTheme } = useThemeStore()

    const initTheme = useCallback(() => {
        if (localStorage.getItem('theme') && localStorage.getItem('theme') == 'light') {
            setTheme('light')

            document.documentElement.classList.add('light')
        } else {
            setTheme('dark')

            // Save theme in local storage
            localStorage.setItem('theme', 'dark')

            document.documentElement.classList.add('dark')
        }
    }, [setTheme])

    const toggleTheme = useCallback(() => {
        if (theme == 'light') {
            setTheme('dark')

            // Save theme in local storage
            localStorage.setItem('theme', 'dark')

            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
        } else {
            setTheme('light')

            // Save theme in local storage
            localStorage.setItem('theme', 'light')

            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
        }
    }, [theme, setTheme])

    return {
        theme,
        initTheme,
        toggleTheme
    }
}