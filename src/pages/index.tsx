import { BaseLayout } from "@shared/components"
import { Route, Routes } from "react-router-dom"
import { NotFoundRouting } from "./notFound"
import { IssuesRouting } from "./issues"
import { BoardsRouting } from "./boards"
import { BoardDetailsRouting } from "./boardDetails"

export const Routing=()=>{
  return(
    <Routes>
      <Route
        element={<BaseLayout />}
      >
        {NotFoundRouting}
        {IssuesRouting}
        {BoardsRouting}
        {BoardDetailsRouting}
      </Route>
    </Routes>
  )
}