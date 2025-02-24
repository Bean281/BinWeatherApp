import { RouteObject } from "react-router-dom";
import Homepage from "../../pages/Common/Homepage/Homepage";
import Search from "../../pages/Common/Search/Search";

const CommonRouteObject: RouteObject[] = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/detail",
    element: <Search/>  }
]

export default CommonRouteObject;