import { Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home"
import { Layout } from "@/components/Layout"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    index
                    element={<Home />}
                />
            </Route>
        </Routes>
    )
}