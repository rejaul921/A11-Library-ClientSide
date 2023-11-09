import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const UpdateBook = () => {
    const { _id } = useParams();
    console.log(_id);
    const loadedBook = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState(loadedBook.category);
    console.log(loadedBook);


    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const authorname = form.get('authorname')
        const quantity = form.get('quantity')
        const description = form.get('description')
        const rating = form.get('rating')
        // name, photo, authorname, category, quantity, description, rating
        const book = { name, photo, authorname, category: selectedCategory, quantity, description, rating };
        // console.log(book)
        fetch(`http://localhost:5000/updatebook/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    swal("Updated successfully")
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
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
                        <input type="text" placeholder="Photo Url" defaultValue={loadedBook.photo} name="photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" placeholder="Writer Name" defaultValue={loadedBook.authorname} name="authorname" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            name="category"
                            id="category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="select select-bordered"
                            required
                        >
                            <option value="SelfHelp">SelfHelp</option>
                            <option value="Business">Business</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Cookbooks">Cookbooks</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">quantity</span>
                        </label>
                        <input type="text" placeholder="quantity" defaultValue={loadedBook.quantity} name="quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Product Description" defaultValue={loadedBook.description} name="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" defaultValue={loadedBook.rating} name="rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Product</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateBook;