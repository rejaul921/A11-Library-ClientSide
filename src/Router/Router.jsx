import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../HomePage/HomePage";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>
            },
            
        ]
    }
])

export default Router;