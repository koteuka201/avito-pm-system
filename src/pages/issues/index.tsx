import { Route } from "react-router-dom";
import { IssuesPage } from "./page";

export const IssuesRouting=(
  <Route
    element={<IssuesPage />}
    path="issues"
  >
    <Route element={<IssuesPage />} index />
  </Route>
)