import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../HomePage/HomePage";
import AddBook from "../Components/Addbook";
import Allbooks from "../Components/Allbooks";
import CategoryBooks from "../Components/CategoryBooks";
import BookDetails from "../Components/BookDetails";
import Login from "../Components/LoginPage";
import Register from "../Components/RegisterPage";
import PrivateRoute from "../Components/PrivateRoute";
import UpdateBook from "../Components/UpdateBook";
import BorrowedBooks from "../Components/BorrowedBooks";


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
                element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path:"/allbooks",
                element:<PrivateRoute><Allbooks></Allbooks></PrivateRoute>
            },
            {
                path:"/updatebook/:_id",
                element:<PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/updatebook/${params._id}`)
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/borrowed",
                element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/categories/:name",
                element:<CategoryBooks></CategoryBooks>
            },
            {
                path:"/bookdetails/:_id",
                element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/bookdetails/${params._id}`)
            }
        ]
    }
])

export default Router;