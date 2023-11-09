import { useContext, useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Category from "../Components/Category";
import { AuthContext } from "../Provider/AuthProvider";


const HomePage = () => {
    const[categories,setCategory]=useState([]);
    const{dark}=useContext(AuthContext);
    useEffect(()=>{
        fetch(`https://library-server-six.vercel.app/categories`)
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div className={`${dark?'bg-slate-500':''}`}>
            <Navbar></Navbar>
            <Banner></Banner>

            <hr className="border-1 border-green-700 w-3/6 mx-auto my-10" />
{/* books categories */}
                <div className="mx-auto text-center">
                    <h3 className="text-3xl font-bold my-10 text-center">
                        All books by Category
                    </h3>
                </div>
                {/* books categories display */}
                <div className="w-4/5 grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                    {
                        categories.map(category=> <Category key={category.id} category={category}></Category>)
                    }
                </div>

                {/* new arrivals */}

                <hr className="border-1 border-green-700 w-3/6 mx-auto my-10" />
                <div className="mx-auto text-center">
                    <h3 className="text-3xl font-bold my-10 text-center">
                        New Arrivals
                    </h3>
                    <p className="w-4/5 p-3 mx-auto text-center">Discover our latest arrivals, where the world of literature unfolds with fresh voices, captivating stories, and invaluable knowledge. Our new arrivals feature a diverse range of genres, from gripping thrillers to heartwarming romances, thought-provoking non-fiction to delectable cookbooks. Explore these titles, each a gateway to new adventures, perspectives, and experiences. With something for every reader, our new arrivals are ready to transport you to uncharted worlds, spark your imagination, and deepen your understanding of the world around you. Come and dive into the pages of our latest additions and embark on a literary journey of discovery.</p>
                </div>

                <div className="w-4/5 grid my-10 text-center gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto">

                    {/* book1 */}
                    <div>
                        {/* img */}
                        <div className="border-2 rounded-xl border-gray-600 h-64"><img className="py-5 px-10 mx-auto h-full" src="https://i.ibb.co/JcWr49D/newarrivals1.jpg" alt="" /></div>
                        {/* author */}
                        <h4 className="text-slate-500 font-semibold">Graeme Simsion</h4>
                        {/* book name */}
                        <h3 className="font-bold text-lg">The Rosie Project</h3>
                        {/* short description */}
                        <p className="text-slate-500 text-sm">The Rosie Project is a delightful and unconventional romantic comedy...</p>
                    </div>
                    {/* book2 */}
                    <div>
                        {/* img */}
                        <div className="border-2 rounded-xl border-gray-600 h-64"><img className="py-5 px-10 mx-auto h-full" src="https://i.ibb.co/ChHHDD7/cooking1.jpg.jpg" alt="" /></div>
                        {/* author */}
                        <h4 className="text-slate-500 font-semibold">Irma S. Rombauer</h4>
                        {/* book name */}
                        <h3 className="font-bold text-lg">Joy of Cooking</h3>
                        {/* short description */}
                        <p className="text-slate-500 text-sm">Joy of Cooking by Irma S. Rombauer is a culinary classic that has been cherished for generations...</p>
                    </div>
                    {/* book3 */}
                    <div>
                        {/* img */}
                        <div className="border-2 rounded-xl border-gray-600 h-64"><img className="py-5 px-10 mx-auto h-full" src="https://i.ibb.co/CtQXv2Y/self-help1.jpg" alt="" /></div>
                        {/* author */}
                        <h4 className="text-slate-500 font-semibold">Eckhart Tolle</h4>
                        {/* book name */}
                        <h3 className="font-bold text-lg">Power of Now</h3>
                        {/* short description */}
                        <p className="text-slate-500 text-sm">The Power of Now by Eckhart Tolle is a transformative guide to living in the present moment...</p>
                    </div>
                    {/* book4 */}
                    <div>
                        {/* img */}
                        <div className="border-2 rounded-xl border-gray-600 h-64"><img className="py-5 px-10 mx-auto h-full" src="https://i.ibb.co/TrN92VL/business4.webp" alt="" /></div>
                        {/* author */}
                        <h4 className="text-slate-500 font-semibold">Simon Sinek</h4>
                        {/* book name */}
                        <h3 className="font-bold text-lg">Start with Why</h3>
                        {/* short description */}
                        <p className="text-slate-500 text-sm">Start with Why by Simon Sinek explores the concept of inspiring leadership by emphasizing the importance of...</p>
                    </div>
                </div>

                 {/* New Blog post */}

                 <hr className="border-1 border-green-700 w-3/6 mx-auto my-10" />
                <div className="mx-auto text-center">
                    <h3 className="text-3xl font-bold my-10 text-center">
                        New Blog post
                    </h3>
                    <p className="w-4/5 p-3 mx-auto text-center">Explore Our Latest Blogs: Dive into the World of Literature! Stay updated with our fresh insights, author spotlights, book recommendations, and literary news. Discover a treasure trove of bookish content in our new blog post section, where reading meets discussion.</p>
                </div>

                {/* post section */}
                <div className="w-4/5 grid my-10  gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                    {/* 1st post */}
                    <div>
                        <div><img src="https://i.ibb.co/G5d104N/blog1.jpg" alt="" /></div>
                        <h3 className="text-xl font-bold">Unraveling Loves Unique Equation</h3>
                        <h2 className="text-green-700 font-bold">Posted by Emily Stevens</h2>
                        <p className="text-slate-500 text-sm">Join Emily Stevens as they take you on a heartfelt journey through the pages of The Rosie Project by Graeme Simsion. In this insightful post, they share their thoughts, impressions, and the impact of this charming novel on their reading experience.</p>
                        <button className="text-white bg-green-700 p-1 rounded-xl mt-5">Read more</button>
                    </div>
                    {/* 2nd post */}
                    <div>
                        <div><img src="https://i.ibb.co/cbJXV43/blog2.jpg" alt="" /></div>
                        <h3 className="text-xl font-bold">Embracing the Present Moment:</h3>
                        <h2 className="text-green-700 font-bold">Posted by Jessica Anderson</h2>
                        <p className="text-slate-500 text-sm">In this reflective journey, author Jessica Anderson explores the profound wisdom of Eckhart Tolle The Power of Now. Join them in unraveling the transformative power of mindfulness, and discover how living in the present moment can bring peace, clarity, and a deeper connection to life..</p>
                        <button className="text-white bg-green-700 p-1 rounded-xl mt-5">Read more</button>
                    </div>
                    {/* 3rd post */}
                    <div>
                        <div><img src="https://i.ibb.co/pdBGG9v/blog3.jpg" alt="" /></div>
                        <h3 className="text-xl font-bold">Savoring Italy Culinary Legacy</h3>
                        <h2 className="text-green-700 font-bold">Posted by Lauren Smith</h2>
                        <p className="text-slate-500 text-sm">Join our culinary connoisseur, Lauren Smith, as they delve into Marcella Hazan Essentials of Classic Italian Cooking.Get ready to embark on a delicious journey through the heart of Italian cuisine, uncovering the timeless recipes and techniques that have made this cookbook a masterpiece for generations.</p>
                        <button className="text-white bg-green-700 p-1 rounded-xl mt-5">Read more</button>
                    </div>

                </div>

            
            <Footer></Footer>
        </div>
    );
};

export default HomePage;