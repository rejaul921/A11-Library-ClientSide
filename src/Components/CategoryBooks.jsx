import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryBook from "./CategoryBook";
import Navbar from "./Navbar";
import Footer from "./Footer";


const CategoryBooks = () => {
    const[categoryBooks, setCategoryBooks]=useState([]);
    const {name}=useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/categories/${name}`)
        .then(res=>res.json())
        .then(data=>setCategoryBooks(data))

    },[name])

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-4/5 my-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                {
                    categoryBooks.map(book=><CategoryBook key={book._id} book={book}></CategoryBook>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CategoryBooks;