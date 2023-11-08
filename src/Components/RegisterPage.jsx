import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import swal from 'sweetalert';
import Navbar from "./Navbar";
import Footer from "./Footer";


const Register = () => {

    const {createUser}=useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        // console.log(name,photo,email,password)

        const passwordExpression = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
        if (!passwordExpression.test(password)) {
            swal("Password must have a special character, a capital letter, and be at least 6 characters long.");
            return;
        }

        createUser(email, password, name, photo)
        .then(createdUser => {
            // console.log(createdUser.user)
            
            return swal("Successfully created an user")
        })
        .catch(error => {
            console.error(error)
            return swal("already user exsits")
        })
    }
        


    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center">
                <h2 className="text-3xl text-center font-bold my-5">Please Register</h2>
                <form onSubmit={handleRegister} className="my-10 md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" />
                    </div>
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

                        <p className="text-s text-red-700 mt-1">Password must have a special character, a capital letter, and be at least 6 characters long.</p>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="my-5">Already have an Account? <Link className="text-green-700 text-lg font-semibold" to="/login">Login</Link></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;