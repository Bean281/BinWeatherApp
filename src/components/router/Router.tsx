import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommonRouteObject from "./CommonRouteObject";

const router = createBrowserRouter([CommonRouteObject]);

function Router() {
  return (
    <RouterProvider router={router} />
  );
}

export default Router;