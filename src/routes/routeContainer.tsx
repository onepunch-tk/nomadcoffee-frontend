import {createBrowserRouter} from "react-router-dom"
import Root from "./Root";
import NotFound from "../screens/NotFound";
import {EPathName, getPathWithoutSlash} from "../shared/utils";
import Home from "../screens/main/Home";
import SignUp from "../screens/auth/SignUp";
import LogIn from "../screens/auth/LogIn";
import Account from "../screens/auth/Account";

const router = createBrowserRouter([
    {
        path: getPathWithoutSlash(EPathName.Home),
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: getPathWithoutSlash(EPathName.Account),
                element: <Account/>,
                children:[
                    {
                      path: getPathWithoutSlash(EPathName.Login),
                      element: <LogIn/>
                    },
                    {
                        path:getPathWithoutSlash(EPathName.SignUp),
                        element:<SignUp/>
                    }
                ]
            }
        ],
        errorElement: <NotFound/>
    }
]);

export default router;