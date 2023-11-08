import Rating from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const CategoryBook = ({book}) => {
    const { _id, rating } = book;
    const numRating=parseInt(rating)
    return (
        <div className="h-max mx-auto text-center shadow-xl">
        <div className="h-60 w-56 p-2 rounded-lg">
            <img className="rounded-xl h-full  w-full" src={book.photo} alt="" />
        </div>
        <h2 className="font-bold p-1">{book.name}</h2>
        <p className="text-slate-500 text-sm">By {book.authorname
        }</p>
        <p className="p-1 bg-slate-500 text-white font-bold">
            {book.category
            }
        </p>
        <div>
        <p className="font-bold ">Rating  </p>
        <Rating classNames="text-center mx-auto" value={numRating}
            edit={false}
            size={18}
            activeColor={"#FF0000"}
        ></Rating>
        </div>
        
        <Link to={`/bookdetails/${_id}`} ><button className="text-white p-1 mb-3 bg-green-700 font-bold rounded-lg">Details</button></Link>
    </div>
    );
};

export default CategoryBook;