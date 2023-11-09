import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Book from "./Book";


const Allbooks = () => {
    const[allBooks, setAllBooks]=useState([]);
    const [showAvailable, setShowAvailable] = useState(false);
    
    useEffect(()=>{
        fetch('http://localhost:5000/allbook')
        .then(res=>res.json())
        .then(data=>setAllBooks(data))
    },[])
    
    // for Toggling the state to show available books
    const handleFilter = () => {
        setShowAvailable(!showAvailable);
    };
    return (
        <div className="text-center">
            <Navbar></Navbar>
            <button onClick={handleFilter} className="bg-green-900 text-white px-4 py-2 text-center mx-auto font-bold rounded-lg mb-4">
                    {showAvailable ? 'Show All Books' : 'Show Available Books'}
                </button>
            <div className="w-4/5 my-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                {
                    allBooks
                    .filter(book => !showAvailable || (showAvailable && book.quantity > 0))
                    .map(book=> <Book key={book._id} book={book}></Book>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Allbooks;