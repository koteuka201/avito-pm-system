import { Route } from "react-router-dom";
import { NotFoundPage } from "./notFoundPage";

export const NotFoundRouting=(
  <Route
    element={<NotFoundPage />}
    path="*"
  >
    <Route element={<NotFoundPage />} index />
  </Route>
)