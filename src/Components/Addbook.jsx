
import Navbar from "../Components/Navbar";


const AddBook = () => {

    const handleAddBook = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const authorname = form.get('authorname')
        const category = form.get('category')
        const quantity = form.get('quantity')
        const description = form.get('description')
        const rating = form.get('rating')
        const book={name, photo, authorname, category, quantity, description, rating};
        console.log(book)

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center">
                <h2 className="text-3xl text-center font-bold my-5">Add new Book</h2>
                <form onSubmit={handleAddBook} className="my-10 grid grid-cols-2 gap-3 md:w-11/12 lg:w-3/4 mx-auto">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    {/* Photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" />
                    </div>
                    {/* Author Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" placeholder="Writer Name" name="authorname" className="input input-bordered" required />
                    </div>
                    {/* Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="SelfHelp/Business/Psychology/Cookbooks" name="category" className="input input-bordered" required />
                    </div>
                    {/* Quantity */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered" required />
                    </div>
                    {/* Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Description" name="description" className="input input-bordered" required />
                    </div>
                    {/* Rating */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating(1-5)</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;