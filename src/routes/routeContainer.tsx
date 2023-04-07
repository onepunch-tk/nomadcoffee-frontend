import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import NotFound from "../screens/NotFound";
import {
  EPathName,
  getPathWithoutSlash,
  makeNestedPathName,
} from "../shared/utils";
import Home from "../screens/main/Home";
import SignUp from "../screens/auth/SignUp";
import LogIn from "../screens/auth/LogIn";
import Account from "../screens/auth/Account";
import { isLoggedInVar } from "../states/apolloVar";

const router = createBrowserRouter([
  {
    path: getPathWithoutSlash(EPathName.Home),
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: getPathWithoutSlash(EPathName.Account),
        element: <Account />,
        children: [
          {
            index: true,
            element: (
              <Navigate
                to={makeNestedPathName(EPathName.Account, EPathName.Login)}
              />
            ),
          },
          {
            path: getPathWithoutSlash(EPathName.Login),
            element: <LogIn />,
          },
          {
            path: getPathWithoutSlash(EPathName.SignUp),
            element: <SignUp />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
