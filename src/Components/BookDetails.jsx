import { useLoaderData } from "react-router-dom";
import Rating from 'react-rating-stars-component';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";

const BookDetails = () => {
    const { user } = useContext(AuthContext)
    const[returnDate, setReturnDate]=useState("")
    const [borrowedDate, setBorrowedDate] = useState("");

    const formatDate =(dateString)=>{
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      }
    const book = useLoaderData();
    console.log(book);
    const {_id, rating } = book
    const numRating = parseInt(rating)
    const email = user.email;
    const bookWithEmail = { ...book, email };
    delete bookWithEmail._id;
    console.log(bookWithEmail);

    const handleBorrowBook = e => {
        e.preventDefault();
        const currentDate= new Date();
        const formattedBorrowedDate=formatDate(currentDate);
        setBorrowedDate(formattedBorrowedDate)
        const formattedReturnDate = formatDate(returnDate);
        console.log(formattedBorrowedDate)
        console.log(formattedReturnDate);
        const currentBookQunantity=bookWithEmail.quantity
        const quantity=parseInt(currentBookQunantity)-1;
        console.log(quantity)
        delete bookWithEmail.quantity
        console.log(bookWithEmail);
        const borrowedBook={...bookWithEmail, formattedBorrowedDate, formattedReturnDate,quantity}
        console.log(borrowedBook);
        // adding to borrowed list
        const myBorrowedBook=e=>{
            e.preventDefault();
            fetch('http://localhost:5000/addBorrowedBook',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(borrowedBook)
            })
            .then(res=>res.json())
            .then(data=>{
            // console.log(data)
                if(data.insertedId){
                swal("Book borrowed successfully")          
            }
        })
        }
        myBorrowedBook();

        // updating to allBooks in database
        console.log(book)
        delete book.quantity
        const bookWithNewQuantity={...book, quantity}
        const handleUpdate=e=>{
            e.preventDefault();
            fetch(`http://localhost:5000/updatebook/${_id}`,{
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
        document.getElementById('my_modal_5').close();
    }

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="grid gap-3 w-10/12 mx-auto md:grid-cols-2">
                <div className="h-64 w-60 p-2 mx-auto rounded-lg">
                    <img className="rounded-xl h-full  w-full" src={book.photo} alt="" />
                </div>
                <div className="text-center mx-auto">
                    <h2 className="text-3xl font-bold p-1">{book.name}</h2>
                    <p className="text-slate-500">By {book.authorname}</p>
                    <div>
                        <p className="font-bold ">Rating  </p>
                        <Rating classNames="text-center mx-auto" value={numRating}
                            edit={false}
                            size={18}
                            activeColor={"#FF0000"}>
                        </Rating>
                    </div>
                    <div>
                        <button className="text-white p-1 mr-6 mb-3 bg-green-700 font-bold rounded-lg" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                        {/* modal */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello {user.displayName}!</h3>


                        {/* asking for return date */}
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* returnDate */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">When you will return the book</span>
                                            </label>
                                            <input type="date" required placeholder="" name="returnDate" className="input input-bordered"  value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
                                        </div>
                                        {/* name */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Your Name is</span>
                                            </label>
                                            <input type="text" placeholder={user.displayName} readOnly name="name" className="input input-bordered" required />
                                        </div>
                                        {/* email */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Your Name Email is</span>
                                            </label>
                                            <input type="text" placeholder={email} readOnly name="email" className="input input-bordered" required />
                                        </div>
                                        
                                        <button onClick={handleBorrowBook} className="btn mt-1">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <button className="text-white p-1 mb-3 bg-green-700 font-bold rounded-lg">Read about book</button>
                    </div>
                </div>
            </div>
            <div className="text-slate-500 w-3/4 mx-auto my-8"><p>{book.description}</p></div>
            <Footer></Footer>
        </div>
    );
};

export default BookDetails;