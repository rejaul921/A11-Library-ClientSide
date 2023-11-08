import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const UpdateBook = () => {
    const {_id}=useParams();
    console.log(_id);
    const loadedBook=useLoaderData();
    console.log(loadedBook);


    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const authorname = form.get('authorname')
        const category = form.get('category')
        const quantity = form.get('quantity')
        const description = form.get('description')
        const rating = form.get('rating')
        // name, photo, authorname, category, quantity, description, rating
        const book={name, photo, authorname, category, quantity, description, rating};
        // console.log(book)
        fetch(`http://localhost:5000/updatebook/${_id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(book)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.modifiedCount>0){
                swal("Updated successfully")
            }
        })
    }

    return (
        <div>          
            <div className="text-center">
                <h2 className="text-3xl text-center font-bold my-5">Update the book</h2>
                <form onSubmit={handleUpdate} className="my-10 grid grid-cols-2 gap-3 md:w-11/12 lg:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" defaultValue={loadedBook.name} name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" placeholder="Photo Url"  defaultValue={loadedBook.photo} name="photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" placeholder="Writer Name"  defaultValue={loadedBook.authorname} name="authorname" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="SelfHelp/Business/Psychology/Cookbooks"  defaultValue={loadedBook.category} name="category" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">quantity</span>
                        </label>
                        <input type="text" placeholder="quantity"  defaultValue={loadedBook.quantity} name="quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Product Description"  defaultValue={loadedBook.description} name="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating"  defaultValue={loadedBook.rating} name="rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBook;