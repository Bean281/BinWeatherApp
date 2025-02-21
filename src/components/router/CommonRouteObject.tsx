import { RouteObject } from "react-router-dom";
import Homepage from "../../pages/Common/Homepage/Homepage";
import Detail from "../../pages/Common/Detail/Detail";

const CommonRouteObject: RouteObject[] = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/detail",
    element: <Detail/>  }
]

export default CommonRouteObject;