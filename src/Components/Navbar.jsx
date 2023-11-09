import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const{user, logOut, dark, handleToggle}=useContext(AuthContext);
    const SignOut=()=>{
        logOut()
        .then()
        .catch()
    }
    return (
        <div className={`${dark?'bg-slate-500':''}`}>
            {/* navbar 1stpart */}
            <div className="flex justify-around mt-4 font-bold items-center">
                <div className="w-1/4">
                    <img className="h-16 w-full" src="https://i.ibb.co/fS8244y/book-Store-Logo.png" alt="logo" />
                </div>
                <div>
                <button onClick={handleToggle} className="bg-green-700 text-white px-4 py-2 text-center mx-auto font-bold rounded-lg mb-4">
                    {dark ? 'Light' : 'Dark'}
                </button>
                </div>
                <div className="1/4 hidden lg:flex">
                    <div className="w-full">
                    <p className="shadow-xl"> <input className="p-2" type="text" placeholder="Category Name" />       <button className="text-white font-bold bg-green-700 p-2">Search</button> </p>
                    </div>
                </div>
                <div>
                    {
                        user? <div className=''>
                            <div className='flex items-center text-center gap-1'>
                                <button onClick={SignOut} className=' bg-green-700 p-1 text-white rounded-lg '>Logout</button>
                                <img className='rounded-full w-8 h-8' src={user.photoURL} alt="" />
                                <p>{user.displayName}</p>
                            </div>             
                        </div>
                    :
                    <NavLink to="/login" className={({ isActive, isPending }) =>
                        isPending ? "pending" : 
                        isActive ? "text-white bg-green-700 p-1 rounded-lg font-bold" : ""}>
                     Login
                     </NavLink>
                    }
                </div>
            </div>

            {/* navbar 2nd part */}
            <div className="flex text-center justify-center gap-4 my-3 font-bold">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : 
                    isActive ? "text-white bg-green-700 p-1 rounded-lg" : ""}>
                    Home        
                </NavLink>
                <NavLink to="/addbook" className={({ isActive, isPending }) =>
                    isPending ? "pending" : 
                    isActive ? "text-white bg-green-700 p-1 rounded-lg" : ""}>
                     Add Book
                </NavLink>
                <NavLink to="/allbooks" className={({ isActive, isPending }) =>
                    isPending ? "pending" : 
                    isActive ? "text-white bg-green-700 p-1 rounded-lg" : ""}> 
                All Book
                </NavLink>
                <NavLink to="/borrowed" className={({ isActive, isPending }) =>
                    isPending ? "pending" : 
                    isActive ? "text-white bg-green-700 p-1 rounded-lg" : ""}> 
                Borrowed Book
                </NavLink>

                
                
            </div>
        </div>
    );
};

export default Navbar;