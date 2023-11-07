import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Book from "./Book";


const Allbooks = () => {
    const[allBooks, setAllBooks]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/allbook')
        .then(res=>res.json())
        .then(data=>setAllBooks(data))
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-4/5 my-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                {
                    allBooks.map(book=> <Book key={book._id} book={book}></Book>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Allbooks;