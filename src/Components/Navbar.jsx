import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="mx-auto">
            {/* navbar 1stpart */}
            <div className="flex justify-around mt-4 items-center">
                <div className="w-1/4">
                    <img className="h-16 w-full" src="./bookStoreLogo.jpg" alt="logo" />
                </div>
                <div className="1/4 hidden md:flex">
                    <div className="w-full">
                    <p className="shadow-xl"> <input className="p-2" type="text" placeholder="Category Name" />       <button className="text-white font-bold bg-green-700 p-2">Search</button> </p>
                    </div>
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
                <NavLink to="/login" className={({ isActive, isPending }) =>
                    isPending ? "pending" : 
                    isActive ? "text-white bg-green-700 p-1 rounded-lg" : ""}>
                     Login
                     </NavLink>
            </div>
        </div>
    );
};

export default Navbar;