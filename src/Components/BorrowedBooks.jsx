import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../Provider/AuthProvider";


const BorrowedBooks = () => {
    const[borrowedBooks, setBorrowedBooks]=useState([]);
    const[myBorrowedBooks, setMyBorrowedBooks]=useState([]);
    const{user}=useContext(AuthContext);

    useEffect(()=>{
        fetch('http://localhost:5000/borrowed')
        .then(res=>res.json())
        .then(data=>setBorrowedBooks(data));
    },[])

    useEffect(()=>{
        const findMyBooks=borrowedBooks.filter(book=>book.email==user.email)
        setMyBorrowedBooks(findMyBooks)
    },[borrowedBooks,user.email])

    return (
        <div className="mx-auto text-center">
            <Navbar></Navbar>
            
            <div className="my-10">
                {
                  myBorrowedBooks.length ?

                  <div>
                    <div className="mx-auto text-center font-bold text-xl my-11"><h2>Books that you have Borrowed</h2></div>
                      {
                          myBorrowedBooks.map(book => 
                          <div key={book._id} className="flex justify-around items-center w-2/3  mx-auto">
                              <div className="w-32 h-28"><img className="w-full h-full p-2 rounded-xl" src={book.photo} alt="" /></div>
                              <div className="flex justify-around items-center">
                                  <div>
                                    <p className="text-xl font-bold">Name: {book.name}</p>
                                    <p className="text-slate-500 text-sm">Category: {book.category}</p>
                                    <p className="text-slate-500 font-semibold">Borrowed Date: {book.formattedBorrowedDate}</p>
                                    <p className="text-slate-500 font-semibold">Return Date: {book.formattedReturnDate}</p>
                                  </div>
                                  <div className="p-1 ml-4 bg-red-800 rounded-xl text-white font-bold">
                                      <button>Remove</button>
                                  </div>
                          </div>
                      </div>)
                          
                      }
                  </div>
                  :
                  <div className="text-3xl my-16 font-semibold flex justify-center items-center text-center">
                      <div>
                          <p>You have not Borrowed anything to yet</p>
                      </div>

                  </div>  
                }
            </div>
            <Footer></Footer> 
        </div>
    );
};

export default BorrowedBooks;