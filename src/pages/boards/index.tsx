import { Route } from "react-router-dom";
import { BoardsPage } from "./page";

export const BoardsRouting=(
  <Route
    element={<BoardsPage />}
    path="boards"
  >
    <Route element={<BoardsPage />} index />
  </Route>
)