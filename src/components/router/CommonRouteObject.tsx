import { RouteObject } from "react-router-dom";
import Homepage from "../../pages/Common/Homepage/Homepage";

const CommonRouteObject: RouteObject = {
  path: "/",
  element: <Homepage />,
  children: [
    {
      path: "country",
    //   element: <Country />,
    },
  ],
};

export default CommonRouteObject;
