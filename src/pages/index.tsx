import { BaseLayout } from "@shared/components"
import { Route, Routes } from "react-router-dom"
import { NotFoundRouting } from "./notFound"
import { IssuesRouting } from "./issues"

export const Routing=()=>{
  return(
    <Routes>
      <Route
        element={<BaseLayout />}
      >
        {NotFoundRouting}
        {IssuesRouting}
      </Route>
    </Routes>
  )
}