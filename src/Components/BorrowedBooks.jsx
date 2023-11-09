import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";


const BorrowedBooks = () => {
    const[borrowedBooks, setBorrowedBooks]=useState([]);
    const[myBorrowedBooks, setMyBorrowedBooks]=useState([]);
    const[allBooks, setAllBooks]=useState([]);
    const{user}=useContext(AuthContext);

    useEffect(()=>{
        fetch('http://localhost:5000/allbook')
        .then((res)=>res.json())
        .then((data)=>setAllBooks(data))
    },[])
    

    useEffect(()=>{
        fetch('http://localhost:5000/borrowed')
        .then(res=>res.json())
        .then(data=>setBorrowedBooks(data));
    },[])

    useEffect(()=>{
        const findMyBooks=borrowedBooks.filter(book=>book.email==user.email)
        setMyBorrowedBooks(findMyBooks)
    },[borrowedBooks,user.email])


    const handleRemove=(_id,name)=>{
        // console.log('delete',_id)
        console.log(_id,name)
        fetch(`http://localhost:5000/myBorrowed/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.deletedCount>0){
                swal("Returned successfully")
                const remaining = myBorrowedBooks.filter(cartBook=>cartBook._id !== _id);
                setMyBorrowedBooks(remaining)

            }
        })
        // looking which book is returned
        const findReturnedBook=allBooks.find(book=>book.name==name)
        console.log(findReturnedBook);
        const findBookQunantity=findReturnedBook.quantity
        console.log(findBookQunantity)
        const quantity=parseInt(findBookQunantity)+1;
        delete findReturnedBook.quantity;
        const bookWithNewQuantity={...findReturnedBook,quantity}
        console.log(bookWithNewQuantity);
        const handleUpdate=()=>{
            // e.preventDefault();
            fetch(`http://localhost:5000/updatebook/${bookWithNewQuantity._id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(bookWithNewQuantity)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
        })
        }
        handleUpdate();
    }

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
                                    <p className="text-xl font-bold"> {book.name}</p>
                                    <p className="text-slate-500 text-sm">Category: {book.category}</p>
                                    <p className="text-slate-500 font-semibold">Borrowed Date: {book.formattedBorrowedDate}</p>
                                    <p className="text-slate-500 font-semibold">Return Date: {book.formattedReturnDate}</p>
                                  </div>
                                  <div className="p-1 ml-4 bg-red-800 rounded-xl text-white font-bold">
                                      <button onClick={()=>handleRemove(book._id,book.name)}>Return</button>
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