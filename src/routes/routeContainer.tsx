import {createBrowserRouter} from "react-router-dom"
import Root from "./Root";
import NotFound from "../screens/NotFound";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[

        ],
        errorElement:<NotFound/>
    }
]);

export default router;