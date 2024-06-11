import { Route, Routes } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { Home } from "@/pages/Home"
import { Ranking } from "@/pages/Ranking"
import { NotFound } from "@/pages/NotFound"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    index
                    element={<Home />}
                />

                <Route
                    path="/ranking"
                    element={<Ranking />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Route>
        </Routes>
    )
}