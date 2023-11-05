import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center text-2xl font-bold mx-auto mt-16">
            You have lost the route. Please go back to <span className="text-2xl font-bold text-white bg-green-700 p-1 rounded-xl"><Link to="/">Home</Link></span>
        </div>
    );
};

export default ErrorPage;