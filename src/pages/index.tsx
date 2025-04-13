import { BaseLayout } from "@shared/components"
import { Route, Routes } from "react-router-dom"
import { NotFoundRouting } from "./notFound"

export const Routing=()=>{
  return(
    <Routes>
      <Route
        element={<BaseLayout />}
      >
        {NotFoundRouting}
      </Route>
    </Routes>
  )
}