import { Route } from "react-router-dom";
import { BoardDetailsPage } from "./page";

export const BoardDetailsRouting=(
  <Route
    element={<BoardDetailsPage />}
    path="board"
  >
    <Route element={<BoardDetailsPage />} path=":id" />
  </Route>
)