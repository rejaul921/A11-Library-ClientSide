import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import swal from 'sweetalert';
import Navbar from "./Navbar";
import Footer from "./Footer";


const Login = () => {
    const {Login,GoogleSignin}=useContext(AuthContext);
    const location =useLocation();
    const navigate=useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email,password)

        Login(email, password)
        .then(result => {
            // console.log(result.user)
            navigate(location?.state? location.state : "/" )
            return swal("Successfully logged in");
        })
        .catch(error => {
            console.error(error.message)
            return swal("Please provide valid email and Password");
        })
    }

    const googlelog = a => {
        a.preventDefault();
        GoogleSignin()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(location?.state? location.state : "/" )
            })
            .catch(error => {
                console.error(error)
            })
    }
        


    return (
        <div> 
            <Navbar></Navbar>          
            <div className="text-center">
                <h2 className="text-3xl text-center font-bold my-5">Please login</h2>
                <form onSubmit={handleLogin} className="my-10 md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                <div onClick={googlelog} className="py-5">
                    <Link><button className="p-3 rounded-xl bg-green-700 text-white">Google Sign In</button></Link>
                </div>
                <p className="my-5">Dont have an Account? <Link className="text-green-700 text-lg font-semibold" to="/register">Register</Link></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;