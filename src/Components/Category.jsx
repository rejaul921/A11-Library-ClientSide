import { Link } from "react-router-dom";


const Category = ({category}) => {
    console.log(category)
    const{name}=category
    return (
        <div className="h-56 mx-auto text-center shadow-xl">
            <Link to={`/categories/${name}`}>
                <div className="h-36"><img className="h-full w-full" src={category.img} alt="" /></div>
                <div className="mt-2 h-8"><h2 className="text-xl font-bold">{category.name}</h2></div>
                <button className="p-1 mb-1 rounded-xl bg-green-700 font-bold text-white">Browse Category</button>
            </Link>
        </div>
    );
};

export default Category;