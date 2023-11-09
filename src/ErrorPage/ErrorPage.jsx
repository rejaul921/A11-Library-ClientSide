import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center text-2xl font-bold mx-auto mt-16">
                You have lost the route. Please go back to <span className="text-2xl font-bold text-white bg-green-700 p-1 rounded-xl"><Link to="/">Home</Link></span>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;