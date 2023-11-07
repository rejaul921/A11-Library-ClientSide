import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../HomePage/HomePage";
import AddBook from "../Components/Addbook";
import Allbooks from "../Components/Allbooks";
import CategoryBooks from "../Components/CategoryBooks";


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
            {
                path:"/addbook",
                element:<AddBook></AddBook>
            },
            {
                path:"/allbooks",
                element:<Allbooks></Allbooks>
            },
            {
                path:"/categories/:name",
                element:<CategoryBooks></CategoryBooks>
            }
        ]
    }
])

export default Router;