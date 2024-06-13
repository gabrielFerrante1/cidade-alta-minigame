import { Layout } from "@/components/Layout"
import { Home } from "@/pages/Home"
import { NotFound } from "@/pages/NotFound"
import { Ranking } from "@/pages/Ranking"
import { Route, Routes } from "react-router-dom"

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