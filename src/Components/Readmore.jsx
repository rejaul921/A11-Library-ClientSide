import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Readmore = () => {
    const book=useLoaderData();
    console.log(book);
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="w-4/5 my-10 mx-auto text-center">
                <div className="w-60 h-64 mx-auto">
                    <img className="w-full h-full" src={book.photo} alt="" />
                </div>
                <div><h3 className="text-2xl font-semibold">{book.name}</h3>
                    <h3 className="font-bold text-slate-500 ">By {book.authorname}</h3>
                </div>
                <div className="w-4/5 my-8 mx-auto md:w-3/5"><p>{book.description}</p></div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Readmore;